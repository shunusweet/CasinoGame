import React, { useState } from "react";

import {
  ChevronDown,
  Send,
  MessageCircle,
} from "lucide-react";

import ChickenFooter from "./assets/ChickenFooter.png";

// =====================================================
// GAME COMPONENTS
// =====================================================

import Gg2JGames from "./Gg2JGames";
import SpribeGame from "./SpribeGame";
import Inout from "./Inout";
import Cq from "./Cq";
import FcGame from "./FcGame";
import BBGames from "./BBGames";
import MgGame from "./MgGame";
import Evoplay from "./Evoplay";
import Gg_bg from "./Gg_bg";
import Spinomenal from "./Spinomenal"
import GgUgGames from "./GgUgGames";
import GgRelax from "./GgRelax";
import GgRedTigerGames from "./GgRedTigerGames";
import PlayTech from "./PlayTech";
import KagaGames from "./kagaGames";
import AskMe from "./AskMe";
import PopokGames from "./PopakGames";
import HacksawGames from "./HacksawGames";
import Habanero from "./Habanero";
import BetSoft from "./BetSoft";
import RichGames from "./RichGames";
import AmigoGames from "./AmigoGames";

// =====================================================
// FOOTER
// =====================================================

function Footer() {

  // ===================================================
  // SHOW MORE STATE
  // ===================================================

  const [showMore, setShowMore] = useState(false);

  // ===================================================
  // TOGGLE SHOW MORE
  // ===================================================

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <footer
      className="
        relative
        z-30
        w-full
        bg-[#020617]
        text-white
      "
    >

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div
        className="
          absolute
          inset-0
          z-0
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

      {/* ================================================= */}
      {/* SHOW MORE BUTTON */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-[50]
          w-full
          flex
          justify-center
          pt-3
        "
      >

        <button
          type="button"
          onClick={handleShowMore}
          aria-expanded={showMore}
          className="
            flex
            items-center
            justify-center
            gap-1

            h-7
            px-4

            rounded-full

            border
            border-cyan-600

            bg-[#061b3a]

            text-cyan-200
            text-[11px]
            font-medium

            shadow-[0_0_10px_rgba(0,180,255,.25)]

            transition-all
            duration-200

            active:scale-95

            cursor-pointer
            select-none

            outline-none
          "
        >

          {/* BUTTON TEXT */}

          <span>
            {showMore ? "Close" : "More"}
          </span>

          {/* ARROW */}

          <ChevronDown
            size={12}
            className={`
              transition-transform
              duration-300
              ${showMore ? "rotate-180" : "rotate-0"}
            `}
          />

        </button>

      </div>


      {/* ================================================= */}
      {/* EXPANDED CONTENT */}
      {/* ================================================= */}

      {showMore && (
        <div
          className="
            relative
            z-40

            w-full

            mt-4
            pb-5

            animate-[footerOpen_.3s_ease-out]
          "
        >

          {/* 1 */}

          <div className="mt-4">
            <Gg2JGames />
          </div>


          {/* 2 */}

          <div className="mt-4">
            <SpribeGame />
          </div>


          {/* 3 */}

          <div className="mt-4">
            <Inout />
          </div>


          {/* 4 */}

          <div className="mt-4">
            <Cq />
          </div>


          {/* 5 */}

          <div className="mt-4">
            <FcGame />
          </div>


          {/* 6 */}

          <div className="mt-4">
            <BBGames />
          </div>


          {/* 7 */}

          <div className="mt-4">
            <MgGame />
          </div>


          {/* 8 */}

          <div className="mt-4">
            <Evoplay />
          </div>


          {/* 9 */}

          <div className="mt-4">
            <Gg_bg />
          </div>
          {/* 9 */}

          <div className="mt-4">
            <Spinomenal />
          </div>

          {/* 11 */}

          <div className="mt-4">
            <GgUgGames />
          </div>


          {/* 12 */}

          <div className="mt-4">
            <GgRelax />
          </div>


          {/* 13 */}

          <div className="mt-4">
            <GgRedTigerGames />
          </div>


          {/* 14 */}

          <div className="mt-4">
            <PlayTech />
          </div>


          {/* 15 */}

          <div className="mt-4">
            <KagaGames />
          </div>


          {/* 16 */}

          <div className="mt-4">
            <AskMe />
          </div>


          {/* 17 */}

          <div className="mt-4">
            <PopokGames />
          </div>


          {/* 18 */}

          <div className="mt-4">
            <HacksawGames />
          </div>


          {/* 19 */}

          <div className="mt-4">
            <Habanero />
          </div>


          {/* 20 */}

          <div className="mt-4">
            <BetSoft />
          </div>


          {/* 21 */}

          <div className="mt-4">
            <RichGames />
          </div>


          {/* 22 */}

          <div className="mt-4">
            <AmigoGames />
          </div>

        </div>
      )}


      {/* ================================================= */}
      {/* CHICKEN IMAGE */}
      {/* ================================================= */}

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


      {/* ================================================= */}
      {/* SOCIAL ICONS */}
      {/* ================================================= */}

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

        {/* FACEBOOK */}

        <div
          className="
            flex
            items-center
            justify-center

            w-[25px]
            h-[25px]

            rounded-full

            bg-[#1877f2]

            shadow-[0_2px_10px_rgba(0,140,255,.35)]
          "
        >

          <span
            className="
              text-white
              text-[19px]
              font-bold
            "
          >
            f
          </span>

        </div>


        {/* TELEGRAM */}

        <div
          className="
            flex
            items-center
            justify-center

            w-[25px]
            h-[25px]

            rounded-full

            bg-[#229ed9]

            shadow-[0_2px_10px_rgba(0,180,255,.35)]
          "
        >

          <Send
            size={13}
            fill="white"
            className="text-white"
          />

        </div>


        {/* WHATSAPP */}

        <div
          className="
            flex
            items-center
            justify-center

            w-[25px]
            h-[25px]

            rounded-full

            bg-[#25d366]

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

            flex
            items-center
            justify-center

            w-[25px]
            h-[25px]

            rounded-full

            bg-[#2563eb]

            border
            border-cyan-300

            shadow-[0_0_10px_rgba(0,140,255,.45)]
          "
        >

          <span
            className="
              text-white
              text-[11px]
              font-black
            "
          >
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


      {/* ================================================= */}
      {/* FOOTER TEXT */}
      {/* ================================================= */}

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

        <p>
          <span
            className="
              text-cyan-300
              font-bold
            "
          >
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


      {/* ================================================= */}
      {/* COPYRIGHT */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10

          text-center

          mt-4

          text-[10px]
          font-bold

          text-cyan-100

          pb-4
        "
      >
        Copyright © 2026 33RS.COM
      </div>


      {/* ================================================= */}
      {/* BOTTOM SPACE */}
      {/* ================================================= */}

      <div className="h-[140px]" />


      {/* ================================================= */}
      {/* ANIMATION */}
      {/* ================================================= */}

      <style>{`

        @keyframes footerOpen {

          0% {
            opacity: 0;
            transform: translateY(-8px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }

        }

      `}</style>

    </footer>
  );
}


export default Footer;