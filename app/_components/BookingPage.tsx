"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

declare global {
  interface Window {
    BookNow?: {
      open: (opts: {
        apiKey: string;
        serviceTags?: string;
        language?: string;
      }) => void;
    };
  }
}

type Lang = "fr" | "en";

const COPY: Record<
  Lang,
  { eyebrow: string; title: string; subtitle: string; cta: string }
> = {
  fr: {
    eyebrow: "Rennaï réserve présente l’été en éclat",
    title: "Réservez votre rendez-vous",
    subtitle: "Cliquez sur le bouton ci-dessous pour ouvrir l’outil de réservation.",
    cta: "Réserver maintenant",
  },
  en: {
    eyebrow: "Rennaï réserve presents Summer Glow",
    title: "Book your appointment",
    subtitle: "Click the button below to open the booking tool.",
    cta: "Book Now",
  },
};

export default function BookingPage({ lang }: { lang: Lang }) {
  const t = COPY[lang];

  const openBooking = () => {
    window.BookNow?.open({
      apiKey: "dC2ZGNtPhd110G876989Jj825061dW89",
      serviceTags: "rennai_gala_summer_event_180",
      language: lang,
    });
  };

  return (
    <>
      <motion.header
        className="site-header"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="site-header__inner">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              src="/RENNAI_BLC_FDTRANSP_RVB.png"
              alt="Logo"
              width={160}
              height={48}
              priority
              className="site-header__logo"
            />
          </motion.div>
          <motion.div
            className="lang-switch"
            role="group"
            aria-label="Language"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link href="/" className={lang === "fr" ? "active" : ""}>
              FR
            </Link>
            <Link href="/en" className={lang === "en" ? "active" : ""}>
              EN
            </Link>
          </motion.div>
        </div>
      </motion.header>

      <main>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            minHeight: 0,
          }}
        >
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
          >
            {t.eyebrow}
          </motion.p>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/rennai_reserve_image.jpg"
              alt={t.eyebrow}
              width={900}
              height={500}
              priority
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {t.subtitle}
          </motion.p>
          <motion.button
            className="code-booknow-button"
            onClick={openBooking}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            {t.cta}
          </motion.button>
        </motion.div>
      </main>
    </>
  );
}
