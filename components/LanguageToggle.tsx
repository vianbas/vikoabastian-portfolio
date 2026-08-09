"use client";

import { useLang } from "@/lib/i18n";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === "en" ? "Switch to Bahasa Indonesia" : "Switch to English"}
      title={lang === "en" ? "Bahasa Indonesia" : "English"}
      className="p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800"
    >
      <span className="text-xs font-bold tracking-wide">
        {lang === "en" ? "ID" : "EN"}
      </span>
    </button>
  );
}
