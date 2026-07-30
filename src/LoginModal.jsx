import React from "react";
import { Eye, Lock, X } from "lucide-react";

const LoginModal = ({
  loginOpen,
  setLoginOpen,
  setSignupOpen,
}) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setLoginOpen(false)}
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-all duration-300 ${
          loginOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Modal */}
      <div
        className={`fixed
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2

        w-[92%]
        max-w-[400px]

        rounded-[25px]

        bg-gradient-to-b
        from-[#061b3a]
        via-[#071426]
        to-[#020617]

        border
        border-cyan-500

        shadow-[0_0_40px_rgba(0,200,255,.35)]

        z-50
        duration-300

        ${
          loginOpen
            ? "scale-100 opacity-100"
            : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setLoginOpen(false)}
          className="
            absolute
            top-3
            right-3

            w-9
            h-9

            rounded-full

            bg-black/40

            flex
            items-center
            justify-center

            text-white

            hover:bg-cyan-600

            duration-300
          "
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div
          className="
            relative
            h-28

            bg-gradient-to-br
            from-[#0ea5e9]
            via-[#075985]
            to-[#020617]

            rounded-t-[25px]
          "
        >
          {/* Tabs */}
          <div
            className="
              flex
              justify-center
              gap-10
              pt-8
            "
          >
            {/* Login */}
            <button
              className="
                relative

                text-2xl
                font-serif

                text-white
              "
            >
              Log In

              <div
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2

                  mt-2

                  w-0
                  h-0

                  border-l-[12px]
                  border-r-[12px]
                  border-t-[12px]

                  border-l-transparent
                  border-r-transparent

                  border-t-cyan-400
                "
              />
            </button>

            {/* Signup */}
            <button
              onClick={() => {
                setLoginOpen(false);
                setSignupOpen(true);
              }}
              className="
                text-2xl
                font-serif

                text-cyan-300/60

                hover:text-white

                duration-300
              "
            >
              Sign Up
            </button>
          </div>
        </div>
                {/* Form */}
        <div
          className="
            p-5
            space-y-4
          "
        >
          {/* Phone */}
          <div
            className="
              flex
              items-center

              h-14

              bg-[#020617]

              border
              border-cyan-700

              rounded-xl

              px-3
            "
          >
            <span className="text-lg">
              🇵🇰
            </span>

            <span className="mx-2 text-white text-sm">
              +92
            </span>

            <div className="w-px h-6 bg-gray-500 mr-3"></div>

            <input
              type="text"
              placeholder="Phone Number"
              className="
                flex-1
                bg-transparent
                outline-none
                text-white
                text-sm
                placeholder:text-gray-400
              "
            />
          </div>

          {/* Password */}
          <div
            className="
              flex
              items-center

              h-14

              bg-[#020617]

              border
              border-cyan-700

              rounded-xl

              px-3
            "
          >
            <Lock
              size={20}
              className="text-cyan-400 mr-3"
            />

            <input
              type="password"
              placeholder="Password"
              className="
                flex-1
                bg-transparent
                outline-none
                text-white
                text-sm
                placeholder:text-gray-400
              "
            />

            <Eye
              size={20}
              className="text-cyan-400 cursor-pointer"
            />
          </div>

          {/* Login Button */}
          <button
            className="
              w-full
              h-14

              rounded-xl

              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-blue-700

              border
              border-cyan-300

              text-white
              text-lg
              font-bold

              shadow-[0_0_20px_rgba(0,200,255,.5)]

              hover:scale-105
              duration-300
            "
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginModal;