import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

import InviteBonus from "./InviteBonus";
import SpinningWheel from "./SpinningWheel";
import InvitePage from "./InvitePage";

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
    <div className="w-full h-full bg-[#020617] text-white overflow-y-auto">

      {/* =================================================
          TOP HEADER
      ================================================= */}

      <div
        className="
          relative
          h-[105px]
          w-full
          flex
          items-center
          justify-center

          bg-gradient-to-b
          from-[#061b3a]
          via-[#04152d]
          to-[#020617]

          border-b
          border-cyan-900

          shadow-[0_4px_20px_rgba(0,180,255,.20)]
        "
      >

        {/* BACK BUTTON */}

        <button
          onClick={() => setCurrentPage("home")}
          className="
            absolute
            left-5
            top-[32px]

            w-10
            h-10

            flex
            items-center
            justify-center

            rounded-full

            text-cyan-100

            hover:bg-cyan-900/40
            hover:text-cyan-300

            transition-all
            duration-300
          "
        >
          <ArrowLeft
            size={34}
            strokeWidth={2}
          />
        </button>


        {/* TITLE */}

        <h1
          className="
            relative
            z-10

            text-[32px]
            font-bold
            font-serif

            text-cyan-100

            drop-shadow-[0_0_8px_rgba(0,200,255,.35)]
          "
        >
          Agency
        </h1>

      </div>


      {/* =================================================
          TABS
      ================================================= */}

      <div
        className="
          relative
          w-full
          h-[80px]

          flex
          items-end

          bg-[#071426]

          border-b
          border-cyan-600

          shadow-[0_2px_15px_rgba(0,180,255,.20)]
        "
      >

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`
              relative

              h-[72px]

              flex-1

              flex
              items-center
              justify-center

              px-2

              text-[15px]
              sm:text-[17px]

              font-bold
              font-serif

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

                    rounded-t-2xl

                    shadow-[0_0_18px_rgba(0,200,255,.35)]
                  `
                  : `
                    text-gray-200

                    bg-[#071426]

                    hover:text-cyan-300
                  `
              }
            `}
          >

            {/* ================= RED NOTIFICATION ================= */}

            {tab === "Spinning Wheel" && (
              <span
                className="
                  absolute

                  -top-[7px]
                  right-[5px]

                  w-[28px]
                  h-[28px]

                  flex
                  items-center
                  justify-center

                  rounded-full

                  bg-red-600

                  border-2
                  border-white

                  text-white

                  text-[14px]

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


      {/* =================================================
          TAB CONTENT
      ================================================= */}

      <div className="w-full">


        {/* =================================================
            INVITATION BONUS
        ================================================= */}

        {activeTab === "Invitation bonus" && (
          <InviteBonus />
        )}


        {/* =================================================
            SPINNING WHEEL
        ================================================= */}

        {activeTab === "Spinning Wheel" && (
          <SpinningWheel
            setCurrentPage={setCurrentPage}
          />
        )}


        {/* =================================================
            INVITE PAGE
        ================================================= */}

        {activeTab === "Invite" && (
          <InvitePage
            setCurrentPage={setCurrentPage}
          />
        )}


        {/* =================================================
            FAQ
        ================================================= */}

        {activeTab === "FAQ" && (
          <div
            className="
              min-h-[500px]

              flex
              items-center
              justify-center

              text-cyan-200

              text-xl

              font-bold
            "
          >
            FAQ
          </div>
        )}

      </div>

    </div>
  );
}