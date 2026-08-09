"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { translations, type Lang } from "@/data/translations";

export type { Lang } from "@/data/translations";

/** A string (or list) that has an English and Indonesian variant. */
export type Localized<T> = { en: T; id: T };

const LANG_STORAGE_KEY = "viko:lang";
const LANG_EVENT = "viko:langchange";

/** Single source of truth: the lang attribute on <html>, set by the
 *  anti-FOUC script in layout.tsx before first paint. */
function currentLang(): Lang {
  return document.documentElement.lang === "id" ? "id" : "en";
}

/** Subscribe to language changes (fired by applyLang). */
function subscribe(onStoreChange: () => void): () => void {
  window.addEventListener(LANG_EVENT, onStoreChange);
  return () => window.removeEventListener(LANG_EVENT, onStoreChange);
}

function getSnapshot(): Lang {
  return currentLang();
}

/** Static export: the server always renders English. The anti-FOUC script in
 *  layout.tsx already applied the saved lang before hydration, and
 *  useSyncExternalStore re-reads the DOM right after hydration. */
function getServerSnapshot(): Lang {
  return "en";
}

function applyLang(lang: Lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* ignore storage errors */
  }
  document.documentElement.lang = lang;
  window.dispatchEvent(new Event(LANG_EVENT));
}

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((next: Lang) => {
    applyLang(next);
  }, []);

  const toggleLang = useCallback(() => {
    applyLang(currentLang() === "en" ? "id" : "en");
  }, []);

  // Look up a dotted key in the active dictionary, e.g. t("nav.about").
  const t = useMemo(
    () => (key: string): string => {
      const dict = translations[lang] as unknown as Record<string, unknown>;
      const value = key.split(".").reduce<unknown>(
        (acc, part) =>
          acc && typeof acc === "object" ? (acc as Record<string, unknown>)[part] : undefined,
        dict,
      );
      return typeof value === "string" ? value : key;
    },
    [lang],
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLang(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}

/** Pick the localized variant that matches the active language. */
export function pick<T>(lang: Lang, localized: Localized<T>): T {
  return localized[lang];
}
