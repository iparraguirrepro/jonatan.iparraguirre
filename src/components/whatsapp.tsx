"use client";

import { DATA } from "@/data/data";

export function WhatsApp() {
  const openNew = () => {
    window.open(DATA.WhatsApp.url, "__blank");
  };

  return (
    <div className="whatsapp-btn fixed right-0 md:right-0 bottom-12 md:bottom-5 z-50 flex justify-center content-center pb-3 pr-3">
      <div onClick={openNew}>
        <p>Hagamos contacto</p>
      </div>

      <img
        onClick={openNew}
        src="../assets/whatsapp.png"
        alt=""
        className="max-w-[80px]"
      />
    </div>
  );
}
