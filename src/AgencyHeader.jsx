import { useState } from "react";
import { ArrowLeft } from "lucide-react";

import InviteBonus from "./InviteBonus";
import SpinningWheel from "./SpinningWheel";
import InvitePage from "./InvitePage";
import FAQ from "./FAQ";

export default function AgencyHeader({ setCurrentPage }) {
  // Invitation Bonus default active rahega
  const [activeTab, setActiveTab] = useState("Invitation bonus");

  const tabs = [
    "Invitation bonus",
    "Spinning Wheel",
    "Invite",
    "FAQ",
  ];

  // ================= TAB CLICK =================

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className="
        w-full
        max-w-[540px]
        h-full
        min-h-screen
        mx-auto

        bg-[#020617]
        text-white

        overflow-x-hidden
        overflow-y-auto

        scrollbar-hide
      "
    >

      {/* ================================================= */}
      {/* TOP HEADER */}
      {/* ================================================= */}

      <div
        className="
          relative

          w-full
          min-h-[90px]
          sm:min-h-[105px]

          flex
          items-center
          justify-center

          px-14

          bg-gradient-to-b
          from-[#061b3a]
          via-[#04152d]
          to-[#020617]

          border-b
          border-cyan-900

          shadow-[0_4px_20px_rgba(0,180,255,.20)]
        "
      >

        {/* ================= BACK BUTTON ================= */}

        <button
          onClick={() => setCurrentPage("home")}
          aria-label="Go back"
          className="
            absolute
            left-3
            sm:left-5

            top-1/2
            -translate-y-1/2

            w-10
            h-10

            flex
            items-center
            justify-center

            rounded-full

            text-cyan-100

            hover:bg-cyan-900/40
            hover:text-cyan-300
            hover:scale-105

            transition-all
            duration-300
          "
        >
          <ArrowLeft
            size={30}
            strokeWidth={2}
          />
        </button>

        {/* ================= TITLE ================= */}

        <h1
          className="
            relative
            z-10

            text-xl
            sm:text-2xl
            md:text-[32px]

            font-bold
            font-serif

            text-cyan-100

            text-center

            whitespace-nowrap

            drop-shadow-[0_0_8px_rgba(0,200,255,.35)]
          "
        >
          Agency
        </h1>

      </div>


      {/* ================================================= */}
      {/* TABS */}
      {/* ================================================= */}

      <div
        className="
          w-full

          overflow-x-auto
          overflow-y-hidden

          bg-[#071426]

          border-b
          border-cyan-600

          shadow-[0_2px_15px_rgba(0,180,255,.20)]

          scrollbar-hide
        "
      >

        <div
          className="
            flex
            w-full
            min-w-[500px]
            sm:min-w-0
          "
        >

          {tabs.map((tab) => (

            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`
                relative

                min-h-[65px]
                sm:h-[72px]

                flex-1
                min-w-[125px]
                sm:min-w-0

                flex
                items-center
                justify-center

                px-1
                sm:px-2

                text-[11px]
                xs:text-xs
                sm:text-[15px]
                md:text-[16px]

                font-bold
                font-serif

                text-center

                whitespace-nowrap

                transition-all
                duration-300

                ${
                  activeTab === tab
                    ? `
                      text-cyan-100

                      bg-gradient-to-b
                      from-[#164c78]
                      via-[#0b3157]
                      to-[#061b3a]

                      border
                      border-cyan-400

                      rounded-t-xl
                      sm:rounded-t-2xl

                      shadow-[0_0_18px_rgba(0,200,255,.35)]
                    `
                    : `
                      text-gray-200

                      bg-[#071426]

                      hover:text-cyan-300
                      hover:bg-[#0b203b]
                    `
                }
              `}
            >

              {/* ================= NOTIFICATION ================= */}

              {tab === "Spinning Wheel" && (
                <span
                  className="
                    absolute

                    -top-1
                    sm:-top-[7px]

                    right-1
                    sm:right-[5px]

                    w-5
                    h-5
                    sm:w-7
                    sm:h-7

                    flex
                    items-center
                    justify-center

                    rounded-full

                    bg-red-600

                    border
                    border-white
                    sm:border-2

                    text-white

                    text-[10px]
                    sm:text-[14px]

                    font-bold

                    shadow-[0_0_8px_rgba(255,0,0,.5)]

                    z-20
                  "
                >
                  1
                </span>
              )}

              {tab}

            </button>

          ))}

        </div>

      </div>


      {/* ================================================= */}
      {/* TAB CONTENT */}
      {/* ================================================= */}

      <div
        className="
          w-full
          max-w-full

          overflow-x-hidden

          bg-[#020617]
        "
      >

        {/* ================= INVITATION BONUS ================= */}

        {activeTab === "Invitation bonus" && (
          <div className="w-full max-w-full">
            <InviteBonus />
          </div>
        )}


        {/* ================= SPINNING WHEEL ================= */}

        {activeTab === "Spinning Wheel" && (
          <div className="w-full max-w-full">
            <SpinningWheel
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}


        {/* ================= INVITE ================= */}

        {activeTab === "Invite" && (
          <div className="w-full max-w-full">
            <InvitePage
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}


        {/* ================= FAQ ================= */}

        {activeTab === "FAQ" && (
          <div className="w-full max-w-full">
            <FAQ />
          </div>
        )}

      </div>


      {/* ================================================= */}
      {/* HIDE SCROLLBAR */}
      {/* ================================================= */}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>

    </div>
  );
}