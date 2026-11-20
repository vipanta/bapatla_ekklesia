import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'te'

type Ctx = { lang: Lang; setLang: (l: Lang) => void }

const LangContext = createContext<Ctx>({ lang: 'en', setLang: () => {} })

const KEY = 'bapatla-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en'
    return window.localStorage.getItem(KEY) === 'te' ? 'te' : 'en'
  })

  // One attribute on <html> is enough: every Telugu string renders through the
  // .te class, which picks the Telugu face, so no component repeats the logic.
  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(KEY, lang)
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang: setLangState }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

/** Pick the string for the active language. */
export function useT() {
  const { lang } = useLang()
  return (en: string, te?: string) => (lang === 'te' && te ? te : en)
}

/** Telugu letters, used to set a title in the Telugu face. */
const TELUGU = /[\u0C00-\u0C7F]/

/** A string is set in the Telugu face when the visitor has chosen Telugu, or
    when the string itself is Telugu whatever the switch says — a Telugu
    book title stays Telugu on an English page. */
export function useLangClass() {
  const { lang } = useLang()
  return (text?: string) =>
    lang === 'te' ? 'font-telugu leading-[1.5]' : text && TELUGU.test(text) ? 'font-telugu leading-[1.6]' : undefined
}

