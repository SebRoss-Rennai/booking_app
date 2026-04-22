"use client";

import Image from "next/image";
import { useState } from "react";

declare global {
  interface Window {
    BookNow?: {
      open: (opts: { apiKey: string; serviceTags?: string }) => void;
    };
  }
}

type Lang = "fr" | "en";

const COPY: Record<Lang, { title: string; subtitle: string; cta: string }> = {
  fr: {
    title: "Réservez votre rendez-vous",
    subtitle: "Cliquez sur le bouton ci-dessous pour ouvrir l’outil de réservation.",
    cta: "Réserver maintenant",
  },
  en: {
    title: "Book your appointment",
    subtitle: "Click the button below to open the booking tool.",
    cta: "Book Now",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");
  const t = COPY[lang];

  const openBooking = () => {
    window.BookNow?.open({
      apiKey: "dC2ZGNtPhd110G876989Jj825061dW89",
      serviceTags: "EventTag",
    });
  };

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={48}
            priority
            className="site-header__logo"
          />
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === "fr" ? "active" : ""}
              onClick={() => setLang("fr")}
            >
              FR
            </button>
            <button
              type="button"
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main>
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
        <button className="code-booknow-button" onClick={openBooking}>
          {t.cta}
        </button>
      </main>
    </>
  );
}
