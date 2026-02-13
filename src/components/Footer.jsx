import React, { useContext, useState } from "react";
import axios from "axios";
import { SiteContext } from "../contexts/SiteContext";

export default function Footer() {
  const { lang, siteData } = useContext(SiteContext);
  const { footer } = siteData[lang];

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleHireMePost = () => {
    setStatus({ loading: true, success: false, error: null });

    const pizzaData = {
      isim: "Ahmet Burak OKUR",
      boyut: "Büyük",
      malzemeler: ["Mısır", "Zeytin", "Peynir"],
      özel: "Portfolyo sunum testi",
    };

    axios({
      method: "post",
      url: "https://reqres.in/api/pizza",
      data: pizzaData,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres_8e014d169bf740b59ac9e9875899e44a",
      },
    })
      .then((response) => {
        console.log("Sunucudan Gelen Onay:", response.data);
        setStatus({ loading: false, success: true, error: null });
      })
      .catch((err) => {
        console.error("Hata Detayı:", err.response?.data || err.message);
        setStatus({
          loading: false,
          success: false,
          error: `Hata: ${err.response?.status || "Bilinmiyor"} - Yetki sorunu.`,
        });
      });
  };

  return (
    <footer className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900 transition-colors border-t dark:border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-custom-dark leading-tight max-w-md">
            {footer.title}
          </h2>

          <div className="pt-4">
            <button
              onClick={handleHireMePost}
              disabled={status.loading}
              className={`px-8 py-3 rounded-md font-bold transition-all shadow-lg ${
                status.success
                  ? "bg-green-500 text-white"
                  : "bg-custom-purple text-white hover:opacity-90"
              }`}>
              {status.loading
                ? footer.loadingText
                : status.success
                  ? footer.successText
                  : footer.buttonText}
            </button>
            {status.error && (
              <p className="text-red-500 mt-2 text-sm">{status.error}</p>
            )}
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2 text-lg text-custom-purple font-medium pt-4">
            <span className="text-2xl">👉</span>
            <a
              href={`mailto:${footer.email}`}
              className="border-b border-custom-purple hover:opacity-70 transition-opacity">
              {footer.email}
            </a>
          </div>
        </div>

        <div className="flex gap-6 text-lg font-bold">
          {footer.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="dark:text-white text-custom-dark hover:opacity-70 transition-opacity">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
