import React, { useState } from "react";
import { Eye, EyeOff, Lock, X, Phone } from "lucide-react";

const LoginModal = ({
  loginOpen,
  setLoginOpen,
  setSignupOpen,
}) => {

  // ================= PASSWORD SHOW/HIDE =================
  const [showPassword, setShowPassword] = useState(false);

  // ================= FORM =================
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // ================= LOGIN =================
  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Phone:", phone);
    console.log("Password:", password);

    // Yahan baad mein API/login logic add kar sakte hain
  };

  return (
    <>
      {/* =====================================================
          OVERLAY
      ====================================================== */}

      <div
        onClick={() => setLoginOpen(false)}
        className={`
          fixed
          inset-0
          bg-black/80
          backdrop-blur-sm
          z-40
          transition-all
          duration-300

          ${
            loginOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />


      {/* =====================================================
          LOGIN MODAL
      ====================================================== */}

      <div
        className={`
          fixed
          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[92%]
          max-w-[400px]

          overflow-hidden

          rounded-[25px]

          border
          border-cyan-500

          bg-gradient-to-b
          from-[#061b3a]
          via-[#071426]
          to-[#020617]

          shadow-[0_0_40px_rgba(0,200,255,.35)]

          z-50

          transition-all
          duration-300

          ${
            loginOpen
              ? "scale-100 opacity-100"
              : "scale-90 opacity-0 pointer-events-none"
          }
        `}
      >

        {/* =====================================================
            CLOSE BUTTON
        ====================================================== */}

        <button
          onClick={() => setLoginOpen(false)}
          className="
            absolute
            top-3
            right-3
            z-20

            flex
            items-center
            justify-center

            w-10
            h-10

            rounded-full

            bg-[#03233f]/90

            border
            border-cyan-800

            text-white

            shadow-[0_0_12px_rgba(0,200,255,.20)]

            hover:bg-cyan-700
            hover:scale-105

            transition
            duration-300
          "
        >
          <X size={22} />
        </button>


        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            relative

            h-[125px]

            bg-gradient-to-br
            from-[#10a9df]
            via-[#0876ae]
            to-[#061b3a]

            rounded-t-[25px]

            overflow-hidden
          "
        >

          {/* Glow */}

          <div
            className="
              absolute
              -top-20
              -left-20

              w-52
              h-52

              rounded-full

              bg-cyan-300/20

              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-20
              right-0

              w-52
              h-52

              rounded-full

              bg-blue-900/40

              blur-3xl
            "
          />


          {/* =================================================
              LOGIN / SIGNUP TABS
          ================================================== */}

          <div
            className="
              relative
              z-10

              flex
              justify-center
              items-center

              gap-12

              pt-8
            "
          >

            {/* LOGIN */}

            <button
              className="
                relative

                text-[27px]
                font-serif
                font-bold

                text-white
              "
            >
              Log In

              {/* Active Arrow */}

              <div
                className="
                  absolute

                  left-1/2
                  -translate-x-1/2

                  -bottom-5

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


            {/* SIGN UP */}

            <button
              onClick={() => {
                setLoginOpen(false);
                setSignupOpen(true);
              }}
              className="
                text-[27px]
                font-serif
                font-bold

                text-cyan-200/60

                hover:text-white

                transition
                duration-300
              "
            >
              Sign Up
            </button>

          </div>

        </div>


        {/* =====================================================
            LOGIN FORM
        ====================================================== */}

        <form
          onSubmit={handleLogin}
          className="
            p-5
            pt-6
            space-y-4
          "
        >

          {/* =================================================
              PHONE NUMBER
          ================================================== */}

          <div
            className="
              flex
              items-center

              h-[56px]

              rounded-xl

              border
              border-cyan-700

              bg-[#020617]

              px-3

              shadow-[inset_0_0_10px_rgba(0,150,255,.08)]

              focus-within:border-cyan-400
              focus-within:shadow-[0_0_12px_rgba(0,200,255,.18)]

              transition
              duration-300
            "
          >

            {/* Pakistan */}

            <span className="text-xl">
              🇵🇰
            </span>

            <span
              className="
                ml-2
                mr-2

                text-white
                text-sm
                font-medium
              "
            >
              +92
            </span>

            <div
              className="
                w-px
                h-6

                bg-gray-600

                mr-3
              "
            />

            <Phone
              size={18}
              className="
                text-cyan-400
                mr-2
              "
            />

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="
                flex-1

                min-w-0

                bg-transparent

                outline-none

                text-white

                text-sm

                placeholder:text-gray-500
              "
            />

          </div>


          {/* =================================================
              PASSWORD
          ================================================== */}

          <div
            className="
              flex
              items-center

              h-[56px]

              rounded-xl

              border
              border-cyan-700

              bg-[#020617]

              px-3

              shadow-[inset_0_0_10px_rgba(0,150,255,.08)]

              focus-within:border-cyan-400
              focus-within:shadow-[0_0_12px_rgba(0,200,255,.18)]

              transition
              duration-300
            "
          >

            <Lock
              size={20}
              className="
                text-cyan-400
                mr-3
                shrink-0
              "
            />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Password"
              className="
                flex-1

                min-w-0

                bg-transparent

                outline-none

                text-white

                text-sm

                placeholder:text-gray-500
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="
                text-cyan-400
                hover:text-white
                transition
              "
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>


          {/* =================================================
              FORGOT PASSWORD
          ================================================== */}

          <div className="flex justify-end">

            <button
              type="button"
              className="
                text-xs
                text-cyan-300

                hover:text-cyan-100

                transition
              "
            >
              Forgot Password?
            </button>

          </div>


          {/* =================================================
              LOGIN BUTTON
          ================================================== */}

          <button
            type="submit"
            className="
              w-full

              h-[56px]

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

              shadow-[0_0_20px_rgba(0,200,255,.45)]

              hover:scale-[1.02]
              hover:shadow-[0_0_30px_rgba(0,200,255,.60)]

              active:scale-[0.98]

              transition-all
              duration-300
            "
          >
            Log In
          </button>


          {/* =================================================
              BOTTOM SIGNUP
          ================================================== */}

          <div
            className="
              text-center
              pt-1
              pb-1
            "
          >

            <span className="text-gray-400 text-xs">
              Don't have an account?
            </span>

            <button
              type="button"
              onClick={() => {
                setLoginOpen(false);
                setSignupOpen(true);
              }}
              className="
                ml-1

                text-cyan-300

                text-xs
                font-bold

                hover:text-white

                transition
              "
            >
              Sign Up
            </button>

          </div>

        </form>

      </div>
    </>
  );
};

export default LoginModal;