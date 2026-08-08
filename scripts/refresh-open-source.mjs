#!/usr/bin/env node
/**
 * Regenerates data/openSource.ts from the GitHub API.
 *
 * Selection rule (option B): a pull request to an external repository is shown
 * when its repository is on the allowlist OR the repository has at least
 * MIN_STARS stars. Everything else is skipped (logged, never shown).
 *
 * Hand-written narrative fields (summary, highlights, contributionType) live in
 * the NOTES map below, keyed by "owner/repo#prNumber". The script preserves
 * them across runs and fills generic values for PRs without a note.
 *
 * Always exits 0 — the calling workflow checks `git diff` to decide whether to
 * commit. Run locally with:  node scripts/refresh-open-source.mjs
 */
import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "data", "openSource.ts");

/** Repositories that always pass the filter regardless of stars. */
const ALLOWLIST = new Set(["aovestdipaperino/tokensave"]);
/** Minimum repository stars for an external repo to be shown. */
const MIN_STARS = 5;

/** Hand-written narrative fields, preserved across regenerations. */
const NOTES = {
  "aovestdipaperino/tokensave#379": {
    contributionType: "Documentation · Security",
    summary:
      "Corrected the upstream SECURITY.md, which claimed the database keeps no raw source code — while the FTS5 index (executable_body_fts) actually retains complete function bodies in its content table. The fix makes the data-retention decision the policy exists to inform accurate.",
    highlights: [
      "Named executable_body_fts as a real store of source text instead of only read_cache",
      "Rewrote the data-retention policy sentence to state full function bodies are retained",
      "Updated the Supported Versions table (6.x → 7.x) to match the current release",
      "Documentation-only: no code, no schema, no behaviour change",
    ],
  },
};

const GH_API = "https://api.github.com";
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "vikoabastian-portfolio-refresh",
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
};

async function fetchJson(url, attempts = 3) {
  for (let i = 1; i <= attempts; i += 1) {
    const res = await fetch(url, { headers });
    if (res.status === 403 || res.status === 429) {
      const reset = res.headers.get("x-ratelimit-reset");
      console.warn(`rate-limited on ${url} (attempt ${i}/${attempts})`);
      if (i < attempts) {
        const wait = reset
          ? Math.max(1000, Number(reset) * 1000 - Date.now())
          : 15_000;
        await new Promise((r) => setTimeout(r, Math.min(wait, 60_000)));
        continue;
      }
    }
    if (!res.ok) {
      throw new Error(`GET ${url} -> ${res.status} ${res.statusText}`);
    }
    return res.json();
  }
  throw new Error(`GET ${url} failed after ${attempts} attempts`);
}

function fmtMonthYear(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function noteFor(repo, prNumber) {
  return NOTES[`${repo}#${prNumber}`] || null;
}

async function main() {
  const search = await fetchJson(
    `${GH_API}/search/issues?q=${encodeURIComponent(
      "author:vianbas type:pr -user:vianbas",
    )}&per_page=100&sort=updated&order=desc`,
  );

  const candidates = [];
  const skipped = [];
  for (const item of search.items || []) {
    const fullName = item.repository_url.replace(`${GH_API}/repos/`, "");
    const repo = await fetchJson(`${GH_API}/repos/${fullName}`);
    const pr = await fetchJson(
      `${GH_API}/repos/${fullName}/pulls/${item.number}`,
    );
    const filesRes = await fetchJson(
      `${GH_API}/repos/${fullName}/pulls/${item.number}/files?per_page=100`,
    );

    const passes =
      ALLOWLIST.has(fullName) || (repo.stargazers_count || 0) >= MIN_STARS;
    if (!passes) {
      skipped.push({
        repo: fullName,
        pr: item.number,
        stars: repo.stargazers_count || 0,
        title: pr.title,
      });
      continue;
    }

    const note = noteFor(fullName, pr.number);
    const status = pr.merged_at
      ? "merged"
      : pr.state === "open"
        ? "open"
        : "closed";
    const date = fmtMonthYear(pr.merged_at || pr.created_at);
    const repoName = fullName.split("/")[1];

    candidates.push({
      id: `${repoName}-pr-${pr.number}`,
      repo: fullName,
      repoUrl: repo.html_url,
      prNumber: pr.number,
      prTitle: pr.title,
      status,
      contributionType: note?.contributionType || "Pull Request",
      date,
      files: (filesRes || []).map((f) => f.filename),
      additions: pr.additions,
      deletions: pr.deletions,
      summary:
        note?.summary ||
        `Opened pull request #${pr.number} on ${fullName}${
          status === "merged" ? ", which was merged upstream" : ""
        }.`,
      highlights: note?.highlights || [],
      prUrl: pr.html_url,
      stars: repo.stargazers_count || 0,
    });
  }

  candidates.sort(
    (a, b) => (b.stars - a.stars) || b.prNumber - a.prNumber,
  );

  const lines = [];
  lines.push(
    "// NOTE: This file is generated by scripts/refresh-open-source.mjs.",
    "// Do not edit by hand — the daily GitHub Actions workflow regenerates it.",
    "",
    "export interface OpenSourceContribution {",
    "  id: string;",
    "  /** Upstream repository owner/name, e.g. \"aovestdipaperino/tokensave\" */",
    "  repo: string;",
    "  /** Link to the upstream repository */",
    "  repoUrl: string;",
    "  /** Pull request number in the upstream repository */",
    "  prNumber: number;",
    "  /** PR title exactly as authored */",
    "  prTitle: string;",
    '  /** "open" | "merged" | "closed" — reflects the current upstream state */',
    '  status: "open" | "merged" | "closed";',
    '  /** Short category, e.g. "Documentation" */',
    "  contributionType: string;",
    "  /** Human-readable date of the contribution */",
    "  date: string;",
    "  /** Files touched by the PR, shown as chips */",
    "  files: string[];",
    "  /** Additions / deletions as reported by GitHub */",
    "  additions: number;",
    "  deletions: number;",
    "  /** What the contribution is about and why it matters */",
    "  summary: string;",
    "  /** Concrete outcomes of the contribution */",
    "  highlights: string[];",
    "  /** Link to the pull request */",
    "  prUrl: string;",
    "  /** Repository stars at refresh time (credibility signal) */",
    "  stars?: number;",
    "}",
    "",
    "export const openSourceContributions: OpenSourceContribution[] = [",
  );

  for (const c of candidates) {
    lines.push(`  {`);
    lines.push(`    id: ${JSON.stringify(c.id)},`);
    lines.push(`    repo: ${JSON.stringify(c.repo)},`);
    lines.push(`    repoUrl: ${JSON.stringify(c.repoUrl)},`);
    lines.push(`    prNumber: ${c.prNumber},`);
    lines.push(`    prTitle: ${JSON.stringify(c.prTitle)},`);
    lines.push(`    status: ${JSON.stringify(c.status)},`);
    lines.push(`    contributionType: ${JSON.stringify(c.contributionType)},`);
    lines.push(`    date: ${JSON.stringify(c.date)},`);
    lines.push(`    files: ${JSON.stringify(c.files)},`);
    lines.push(`    additions: ${c.additions},`);
    lines.push(`    deletions: ${c.deletions},`);
    lines.push(`    summary: ${JSON.stringify(c.summary)},`);
    lines.push(`    highlights: ${JSON.stringify(c.highlights)},`);
    lines.push(`    prUrl: ${JSON.stringify(c.prUrl)},`);
    lines.push(`    stars: ${c.stars},`);
    lines.push(`  },`);
  }
  lines.push("];");
  lines.push("");

  writeFileSync(OUT, lines.join("\n"), "utf8");

  console.log(
    `openSourceContributions: ${candidates.length} shown, ${skipped.length} skipped.`,
  );
  for (const s of skipped) {
    console.log(
      `  skipped ${s.repo}#${s.pr} (${s.stars}★) — "${s.title}"`,
    );
  }
  for (const c of candidates) {
    console.log(
      `  shown   ${c.repo}#${c.prNumber} (${c.stars}★) — ${c.status}`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 0; // never fail the workflow; the diff check decides
});
