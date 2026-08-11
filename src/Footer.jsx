import React, { useState } from "react";
import {
  ChevronDown,
  Send,
  MessageCircle,
} from "lucide-react";

import ChickenFooter from "./assets/ChickenFooter.png";
import Gg2JGames from "./Gg2JGames";

export default function Footer() {
  const [showMore, setShowMore] = useState(false);

  return (
    <footer
      className="
        relative
        w-full
        min-h-[540px]
        overflow-hidden
        bg-[#020617]
        text-white
      "
    >
      {/* ================= BLUE BACKGROUND ================= */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          background: `
            radial-gradient(
              circle at 50% 20%,
              rgba(0, 180, 255, 0.22),
              transparent 42%
            ),
            radial-gradient(
              circle at 50% 70%,
              rgba(0, 90, 180, 0.20),
              transparent 55%
            ),
            linear-gradient(
              180deg,
              #061b3a 0%,
              #03142d 45%,
              #020617 100%
            )
          `,
        }}
      />

      {/* ================= TOP MORE BUTTON ================= */}

      <div className="relative z-10 flex justify-center pt-3">
        <button
          type="button"
          onClick={() => setShowMore((prev) => !prev)}
          className="
            flex
            items-center
            gap-1
            px-4
            h-6
            rounded-full
            border
            border-cyan-600
            bg-[#061b3a]/90
            text-cyan-200
            text-[11px]
            shadow-[0_0_10px_rgba(0,180,255,.25)]
            hover:bg-[#0b2d57]
            hover:border-cyan-400
            transition-all
            duration-300
          "
        >
          {showMore ? "Close" : "More"}

          <ChevronDown
            size={11}
            className={`
              transition-transform
              duration-300
              ${showMore ? "rotate-180" : ""}
            `}
          />
        </button>
      </div>

      {/* ================= MORE CONTENT ================= */}

      {showMore && (
        <div className="relative z-10 mt-4">
          <Gg2JGames />
        </div>
      )}

      {/* ================= CHICKEN ================= */}

      <div
        className="
          relative
          z-10
          flex
          justify-center
          mt-2
        "
      >
        <img
          src={ChickenFooter}
          alt="33RS Chicken"
          className="
            w-[205px]
            h-[205px]
            object-contain
          "
        />
      </div>

      {/* ================= SOCIAL ICONS ================= */}

      <div
        className="
          relative
          z-10
          flex
          justify-center
          gap-4
          mt-[-3px]
        "
      >
        {/* Facebook */}

        <div
          className="
            w-[25px]
            h-[25px]
            rounded-full
            bg-[#1877f2]
            flex
            items-center
            justify-center
            shadow-[0_2px_10px_rgba(0,140,255,.35)]
          "
        >
          <span className="text-white text-[19px] font-bold">
            f
          </span>
        </div>

        {/* Telegram */}

        <div
          className="
            w-[25px]
            h-[25px]
            rounded-full
            bg-[#229ed9]
            flex
            items-center
            justify-center
            shadow-[0_2px_10px_rgba(0,180,255,.35)]
          "
        >
          <Send
            size={13}
            fill="white"
            className="text-white"
          />
        </div>

        {/* WhatsApp */}

        <div
          className="
            w-[25px]
            h-[25px]
            rounded-full
            bg-[#25d366]
            flex
            items-center
            justify-center
            shadow-[0_2px_10px_rgba(0,255,150,.25)]
          "
        >
          <MessageCircle
            size={15}
            fill="white"
            className="text-white"
          />
        </div>

        {/* 18+ */}

        <div
          className="
            relative
            w-[25px]
            h-[25px]
            rounded-full
            bg-[#2563eb]
            flex
            items-center
            justify-center
            border
            border-cyan-300
            shadow-[0_0_10px_rgba(0,140,255,.45)]
          "
        >
          <span className="text-white text-[11px] font-black">
            18
          </span>

          <span
            className="
              absolute
              top-[-2px]
              right-[-2px]
              text-[8px]
              font-bold
            "
          >
            +
          </span>
        </div>
      </div>

      {/* ================= FOOTER TEXT ================= */}

      <div
        className="
          relative
          z-10
          px-[34px]
          mt-7
          text-white
          font-serif
          text-[11px]
          leading-[17px]
        "
      >
        {/* Description */}

        <p>
          <span className="text-cyan-300 font-bold">
            33RS.COM
          </span>{" "}
          is one of the most trusted and popular online slot
          websites in Pakistan, and the top choice for slot
          enthusiasts.
        </p>

        <p className="mt-2">
          As a leading slot website, 33RS.COM offers an
          exciting, convenient, and lucrative online slot
          gaming experience. We provide official and trusted
          login links to ensure members enjoy a high-quality,
          safe, and comfortable online slot gaming experience.
        </p>

        {/* ================= RULES ================= */}

        <div className="mt-2">
          <p>
            1. This product is for users aged 18 and over only.
          </p>

          <p>
            2. This game contains in-app purchases.
          </p>

          <p>
            3. Winnings in social casino games are not
            guaranteed to win in real-money gambling and
            related games.
          </p>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}

      <div
        className="
          relative
          z-10
          text-center
          mt-4
          text-[10px]
          font-bold
          text-cyan-100
        "
      >
        Copyright © 2026 33RS.COM
      </div>

      {/* ================= BOTTOM SPACING ================= */}

      <div className="h-[140px]" />
    </footer>
  );
}