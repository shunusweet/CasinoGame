import React from "react";
import { Flame } from "lucide-react";

const HotGameHeader = () => {
  return (
    <div className="px-3 mt-3">

      <div
        className="
        h-[72px]

        rounded-xl

        border
        border-[#b8822b]

        bg-gradient-to-r
        from-[#2b1405]
        via-[#3d1d08]
        to-[#241003]

        flex
        items-center
        justify-between

        px-4

        shadow-[0_0_12px_rgba(255,170,0,.35)]
        "
      >

        {/* Left */}
        <div className="flex items-center gap-4">

          <div
            className="
            w-14
            h-14

            rounded-xl

            flex
            items-center
            justify-center
            "
          >
            <Flame
              size={46}
              className="text-orange-500 fill-orange-500"
            />
          </div>

          <h2
            className="
            text-[#f3d189]
            text-4xl
            font-serif
            font-semibold
            "
          >
            Hots
          </h2>

        </div>

        {/* Right */}
        <div className="flex gap-3">

          <button
            className="
            w-[95px]
            h-[48px]

            rounded-xl

            border
            border-[#b8822b]

            bg-[#3b1c08]

            text-[#f3d189]
            text-2xl
            font-bold

            hover:bg-[#51280d]
            duration-300
            "
          >
            All 35
          </button>

          <button
            className="
            w-[95px]
            h-[48px]

            rounded-xl

            border
            border-[#b8822b]

            bg-[#3b1c08]

            text-[#f3d189]
            text-2xl
            font-bold

            hover:bg-[#51280d]
            duration-300
            "
          >
            More
          </button>

        </div>

      </div>

    </div>
  );
};

export default HotGameHeader;