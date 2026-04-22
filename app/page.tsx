"use client";

declare global {
  interface Window {
    BookNow?: {
      open: (opts: { apiKey: string; bookingFlow?: string }) => void;
    };
  }
}

export default function Home() {
  const openBooking = () => {
    window.BookNow?.open({
      apiKey: "dC2ZGNtPhd110G876989Jj825061dW89",
      bookingFlow: "locations",
    });
  };

  return (
    <main>
      <h1>Réservez votre rendez-vous</h1>
      <p>Cliquez sur le bouton ci-dessous pour ouvrir l’outil de réservation.</p>
      <button className="code-booknow-button" onClick={openBooking}>
        Book Now
      </button>
    </main>
  );
}
