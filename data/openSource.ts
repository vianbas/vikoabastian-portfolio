export interface OpenSourceContribution {
  id: string;
  /** Upstream repository owner/name, e.g. "aovestdipaperino/tokensave" */
  repo: string;
  /** Link to the upstream repository */
  repoUrl: string;
  /** Pull request number in the upstream repository */
  prNumber: number;
  /** PR title exactly as authored */
  prTitle: string;
  /** "open" | "merged" — reflects the current upstream state */
  status: "open" | "merged";
  /** Short category, e.g. "Documentation" */
  contributionType: string;
  /** Human-readable date of the contribution */
  date: string;
  /** Files touched by the PR, shown as chips */
  files: string[];
  /** Additions / deletions as reported by GitHub */
  additions: number;
  deletions: number;
  /** What the contribution is about and why it matters */
  summary: string;
  /** Concrete outcomes of the contribution */
  highlights: string[];
  /** Link to the pull request */
  prUrl: string;
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: "tokensave-security-md",
    repo: "aovestdipaperino/tokensave",
    repoUrl: "https://github.com/aovestdipaperino/tokensave",
    prNumber: 379,
    prTitle: "docs(security): SECURITY.md understates what the database retains",
    status: "open",
    contributionType: "Documentation · Security",
    date: "Aug 2026",
    files: ["SECURITY.md", "CHANGELOG.md"],
    additions: 8,
    deletions: 5,
    summary:
      "Corrected the upstream SECURITY.md, which claimed the database keeps no raw source code — while the FTS5 index (executable_body_fts) actually retains complete function bodies in its content table. The fix makes the data-retention decision the policy exists to inform accurate.",
    highlights: [
      "Named executable_body_fts as a real store of source text instead of only read_cache",
      "Rewrote the data-retention policy sentence to state full function bodies are retained",
      "Updated the Supported Versions table (6.x → 7.x) to match the current release",
      "Documentation-only: no code, no schema, no behaviour change",
    ],
    prUrl: "https://github.com/aovestdipaperino/tokensave/pull/379",
  },
];
