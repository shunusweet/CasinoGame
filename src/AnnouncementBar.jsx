import React from "react";
import { Bell, ChevronRight } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="w-full max-w-[540px] mx-auto px-2 sm:px-3 mt-3">

      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-2xl

          border
          border-cyan-500

          bg-gradient-to-r
          from-[#061b3a]
          via-[#071426]
          to-[#020617]

          shadow-[0_0_20px_rgba(0,255,255,.18)]
        "
      >

        <div
          className="
            flex
            items-center
            w-full
            min-h-[56px]
            px-2
            sm:px-4
          "
        >

          {/* ================= LEFT ICON ================= */}

          <div
            className="
              flex-shrink-0

              w-8
              h-8

              sm:w-9
              sm:h-9

              rounded-full

              bg-gradient-to-b
              from-cyan-400
              to-blue-700

              flex
              items-center
              justify-center

              shadow-[0_0_15px_rgba(0,255,255,.4)]
            "
          >
            <Bell
              size={17}
              className="sm:w-[18px] sm:h-[18px] text-yellow-300"
            />
          </div>


          {/* ================= SCROLLING TEXT ================= */}

          <div
            className="
              flex-1
              min-w-0
              overflow-hidden
              mx-2
              sm:mx-4
            "
          >

            <div
              className="
                whitespace-nowrap
                animate-marquee

                text-yellow-200
                font-semibold

                text-[11px]
                sm:text-sm
              "
            >
              🎉 Rewards upgraded! Successfully invite a valid friend to
              receive amazing bonuses. VIP members earn even more daily
              rewards.
            </div>

          </div>


          {/* ================= RIGHT ARROW ================= */}

          <ChevronRight
            size={20}
            className="
              flex-shrink-0
              text-cyan-300
              ml-1
              sm:ml-3
            "
          />

        </div>

      </div>


      {/* ================= MARQUEE ANIMATION ================= */}

      <style>{`

        @keyframes marquee {

          0% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(-100%);
          }

        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {

          .animate-marquee {
            animation: none;
            transform: none;
          }

        }

      `}</style>

    </div>
  );
};

export default AnnouncementBar;