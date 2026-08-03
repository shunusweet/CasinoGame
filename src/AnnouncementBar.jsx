import React from "react";
import { Bell, ChevronRight } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="px-3 mt-3">
      <div
        className="
        relative
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
        <div className="flex items-center h-14 px-4">

          {/* Left Icon */}
          <div
            className="
            w-9
            h-9
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
              size={18}
              className="text-yellow-300"
            />
          </div>

          {/* Scrolling Text */}
          <div className="flex-1 overflow-hidden ml-4">
            <div className="whitespace-nowrap animate-marquee text-yellow-200 font-semibold text-sm">
              🎉 Rewards upgraded! Successfully invite a valid friend to receive
              amazing bonuses. VIP members earn even more daily rewards.
            </div>
          </div>

          {/* Right Arrow */}
          <ChevronRight
            size={22}
            className="text-cyan-300 ml-3"
          />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;