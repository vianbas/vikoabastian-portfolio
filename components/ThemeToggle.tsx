"use client";

import { useSyncExternalStore } from "react";
import { useLang } from "@/lib/i18n";

const THEME_EVENT = "viko:themechange";

/** Single source of truth: the class on <html>. CSS handles color-scheme. */
function isDarkNow(): boolean {
  return document.documentElement.classList.contains("dark");
}

/** Subscribe to theme changes (fired by toggleTheme / applyTheme). */
function subscribe(onStoreChange: () => void): () => void {
  window.addEventListener(THEME_EVENT, onStoreChange);
  return () => window.removeEventListener(THEME_EVENT, onStoreChange);
}

function getSnapshot(): boolean {
  return isDarkNow();
}

/** Static export: the server renders the light (moon) icon. The anti-FOUC
 *  script in layout.tsx already applied the dark class before hydration, and
 *  useSyncExternalStore re-reads the DOM right after hydration. */
function getServerSnapshot(): boolean {
  return false;
}

function toggleTheme() {
  const next = !isDarkNow();
  try {
    localStorage.setItem("theme", next ? "dark" : "light");
  } catch {
    /* ignore storage errors */
  }
  document.documentElement.classList.toggle("dark", next);
  window.dispatchEvent(new Event(THEME_EVENT));
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { t } = useLang();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? t("themeToggle.toLight") : t("themeToggle.toDark")}
      className="p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800"
    >
      {dark ? (
        /* Sun */
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m14.36-6.36l-1.06 1.06M7.7 16.3l-1.06 1.06m0-10.72L7.7 7.7m8.6 8.6l1.06 1.06M12 7a5 5 0 100 10 5 5 0 000-10z"
          />
        </svg>
      ) : (
        /* Moon */
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21.75 15.002A9.718 9.718 0 0118 15.75 9.75 9.75 0 018.25 6c0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25 9.75 9.75 0 0012.75 21a9.753 9.753 0 008.999-5.998z"
          />
        </svg>
      )}
    </button>
  );
}
