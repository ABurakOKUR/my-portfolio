/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";
import { toast } from "react-toastify";

export const SiteContext = createContext();

export const SiteContextProvider = ({ children }) => {
  const [siteData, setSiteData] = useState(null);
  // LocalStorage senkronizasyonu
  const [lang, setLang] = useLocalStorage("siteLang", "tr");
  const [theme, setTheme] = useLocalStorage("siteTheme", "light");

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => {
        console.log("Gelen Veri:", res.data);
        setSiteData(res.data);
      })
      .catch((err) => {
        console.error("Detaylı Hata:", err);
        alert("JSON dosyası yüklenemedi! Hata: " + err.message);
      });
  }, []);

  // Tema değişimi için DOM manipülasyonu
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleLang = () => {
    const newLang = lang === "tr" ? "en" : "tr";
    setLang(newLang);
    toast.info(newLang === "tr" ? "Dil: Türkçe" : "Language: English", {
      icon: "🌐",
    });
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      toast.dark("Karanlık Mod Aktif 🌙");
    } else {
      toast.success("Aydınlık Mod Aktif ☀️", {
        style: { backgroundColor: "#f3f4f6", color: "#1f2937" },
      });
    }
  };
  if (!siteData || !siteData[lang]) {
    return (
      <div className="min-h-screen bg-white dark:bg-custom-dark flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-purple mx-auto mb-4"></div>
          <p className="text-custom-purple font-bold tracking-widest uppercase animate-pulse">
            Veriler Yükleniyor...
          </p>
        </div>
      </div>
    );
  }

  return (
    <SiteContext.Provider
      value={{ siteData, lang, toggleLang, theme, toggleTheme }}>
      {children}
    </SiteContext.Provider>
  );
};
