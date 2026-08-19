import React from "react";

const Header = ({
  setOpenMenu,
  setLoginOpen,
  setSignupOpen,
}) => {
  return (
    <header
      className="
        sticky
        top-0
        z-40

        w-full

        border-b
        border-cyan-700/50

        bg-gradient-to-b
        from-[#061b3a]
        via-[#071426]
        to-[#020617]

        shadow-[0_4px_20px_rgba(0,0,0,.25)]
      "
    >

      <div
        className="
          mx-auto

          flex
          w-[540px]
          max-w-full

          items-center
          justify-between

          px-3
          py-3
        "
      >

        {/* ================= LEFT ================= */}

        <div className="flex items-center gap-2">

          {/* MENU */}

          <div className="relative">

            <button
              onClick={() => setOpenMenu(true)}
              className="
                flex
                h-10
                w-10

                items-center
                justify-center

                rounded-full

                border-2
                border-cyan-500

                bg-[#020617]

                shadow-[0_0_15px_rgba(0,200,255,.4)]

                transition-all
                duration-300

                hover:scale-105
              "
            >

              <div className="space-y-1">

                <span
                  className="
                    block
                    h-[3px]
                    w-5

                    rounded

                    bg-cyan-300
                  "
                />

                <span
                  className="
                    block
                    h-[3px]
                    w-4

                    rounded

                    bg-cyan-300
                  "
                />

                <span
                  className="
                    block
                    h-[3px]
                    w-5

                    rounded

                    bg-cyan-300
                  "
                />

              </div>

            </button>


            {/* NOTIFICATION */}

            <span
              className="
                absolute
                -right-1
                -top-1

                flex
                h-5
                w-5

                items-center
                justify-center

                rounded-full

                border
                border-white

                bg-red-600

                text-[10px]
                font-bold
                text-white
              "
            >
              1
            </span>

          </div>


          {/* ================= LOGO ================= */}

          <div>

            <h1 className="leading-none font-black">

              <span
                className="
                  text-2xl
                  text-cyan-400
                "
              >
                33RS
              </span>

              <span
                className="
                  text-base
                  text-white
                "
              >
                .com
              </span>

            </h1>

            <p
              className="
                text-[8px]

                uppercase

                tracking-[3px]

                text-cyan-200
              "
            >
              Gaming Platform
            </p>

          </div>

        </div>


        {/* ================= RIGHT ================= */}

        <div className="flex items-center gap-1.5">

          {/* LOGIN */}

          <button
            onClick={() => setLoginOpen(true)}
            className="
              rounded-full

              border
              border-cyan-300

              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-blue-700

              px-3
              py-2

              text-xs
              font-bold
              text-white

              shadow-[0_0_15px_rgba(0,200,255,.4)]

              transition-all
              duration-300

              hover:scale-105
            "
          >
            Log In
          </button>


          {/* SIGN UP */}

          <button
            onClick={() => setSignupOpen(true)}
            className="
              rounded-full

              border
              border-cyan-500

              bg-[#020617]

              px-3
              py-2

              text-xs
              font-bold
              text-cyan-300

              transition-all
              duration-300

              hover:bg-cyan-700
              hover:text-white
            "
          >
            Sign Up
          </button>

        </div>

      </div>

    </header>
  );
};

export default Header;