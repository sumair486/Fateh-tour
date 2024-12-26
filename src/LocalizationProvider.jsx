import React, { useState, useEffect, createContext, useContext } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "./locales/en.json";
import arMessages from "./locales/ar.json";

const messages = {
  en: enMessages,
  ar: arMessages,
};

const LocaleContext = createContext();

export const useLocale = () => useContext(LocaleContext);

export default function LocalizationProvider({ children }) {
  const [locale, setLocale] = useState(() => {
   
    return localStorage.getItem("locale") || "en";
  });

  const switchLocale = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale); 
  };

  useEffect(() => {
   
    const storedLocale = localStorage.getItem("locale");
    if (storedLocale && storedLocale !== locale) {
      setLocale(storedLocale);
    }
  }, []);

 
  useEffect(() => {
    document.body.style.direction = locale === "ar" ? "rtl" : "ltr";
    document.body.style.textAlign = locale === "ar" ? "right" : "left";
  }, [locale]); 

  return (
    <LocaleContext.Provider value={{ locale, switchLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
