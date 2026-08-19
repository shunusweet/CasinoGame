import React from "react";

const referralLink = "https://3s2s2s.com/s/z";

const socialLinks = [
  {
    name: "Facebook",
    icon: "f",
    bg: "bg-blue-600",
    url: "https://www.facebook.com/sharer/sharer.php?u=",
  },
  {
    name: "WhatsApp",
    icon: "◉",
    bg: "bg-green-500",
    url: "https://wa.me/?text=",
  },
  {
    name: "Telegram",
    icon: "➤",
    bg: "bg-sky-500",
    url: "https://t.me/share/url?url=",
  },
  {
    name: "Instagram",
    icon: "◎",
    bg: "bg-pink-500",
    url: "#",
  },
  {
    name: "Twitter",
    icon: "𝕏",
    bg: "bg-black",
    url: "https://twitter.com/intent/tweet?text=",
  },
];

const rewards = [
  ["1", "1", "1%"],
  ["2", "100,000,000", "1.2%"],
  ["3", "500,000,000", "1.5%"],
  ["4", "2,000,000,000", "3%"],
  ["5", "5,000,000,000", "5%"],
];

export default function InvitePage() {

  // ================= COPY LINK =================

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      alert("Referral link copied!");
    } catch {
      alert("Unable to copy link.");
    }
  };

  // ================= SOCIAL SHARE =================

  const share = (item) => {

    if (item.url === "#") {
      alert("Instagram sharing is not available directly.");
      return;
    }

    const url = item.url + encodeURIComponent(referralLink);

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (

    <div
      className="
        min-h-screen
        w-full
        bg-[#020617]
        text-white
        overflow-x-hidden
      "
    >

      {/* =====================================================
          BLUE BACKGROUND
      ====================================================== */}

      <div
        className="
          fixed
          inset-0
          -z-10

          bg-[radial-gradient(circle_at_50%_20%,rgba(0,180,255,0.20),transparent_35%),radial-gradient(circle_at_50%_85%,rgba(0,90,180,0.20),transparent_40%),linear-gradient(180deg,#061b3a,#020617)]
        "
      />


      {/* =====================================================
          540PX MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[540px]
          px-3
          py-3
        "
      >


        {/* =====================================================
            SHARE CARD
        ====================================================== */}

        <section
          className="
            rounded-[14px]

            border
            border-cyan-700

            bg-[linear-gradient(145deg,rgba(7,30,55,.98),rgba(2,10,25,.99))]

            p-3

            shadow-[0_0_20px_rgba(0,180,255,.18)]
          "
        >

          {/* SHARE LINK TITLE */}

          <h2
            className="
              mb-2
              text-[13px]
              font-bold
              text-cyan-100
            "
          >
            Share Link:
          </h2>


          {/* LINK BOX */}

          <div
            className="
              flex
              h-[45px]
              items-center
              overflow-hidden

              rounded-[11px]

              border
              border-cyan-900

              bg-[#020617]
            "
          >

            <div
              className="
                flex-1
                truncate
                px-3
                text-[10px]
                text-gray-300
              "
            >
              {referralLink}
            </div>


            {/* COPY BUTTON */}

            <button
              onClick={copyLink}
              className="
                mr-1

                flex
                h-[34px]
                w-[34px]

                items-center
                justify-center

                rounded-[8px]

                bg-gradient-to-b
                from-cyan-400
                to-blue-700

                text-xl

                shadow-[0_0_10px_rgba(0,200,255,.30)]

                transition

                hover:scale-105
                active:scale-95
              "
              title="Copy"
            >
              📋
            </button>

          </div>


          {/* SOCIAL TITLE */}

          <h3
            className="
              mt-5
              text-center
              text-[12px]
              font-bold
              text-cyan-100
            "
          >
            Share to Social Media:
          </h3>


          {/* SOCIAL AREA */}

          <div
            className="
              mt-3
              flex
              items-center
              justify-between
              px-2
            "
          >

            {/* QR PLACEHOLDER */}

            <div
              className="
                flex
                h-[65px]
                w-[65px]

                shrink-0

                items-center
                justify-center

                rounded-[4px]

                bg-white

                p-[3px]

                shadow-[0_0_10px_rgba(0,200,255,.20)]
              "
            >

              <div
                className="
                  grid
                  h-full
                  w-full

                  grid-cols-7

                  gap-[1px]

                  bg-black

                  p-[2px]
                "
              >

                {Array.from({ length: 49 }).map((_, i) => (

                  <div
                    key={i}
                    className={
                      (i * 17) % 3 === 0
                        ? "bg-black"
                        : "bg-white"
                    }
                  />

                ))}

              </div>

            </div>


            {/* SOCIAL ICONS */}

            <div
              className="
                flex
                flex-1
                justify-around
                pl-5
              "
            >

              {socialLinks.map((item) => (

                <button
                  key={item.name}
                  onClick={() => share(item)}
                  className="
                    group

                    flex
                    flex-col
                    items-center
                    gap-1
                  "
                >

                  <span
                    className={`
                      flex
                      h-[25px]
                      w-[25px]

                      items-center
                      justify-center

                      rounded-full

                      ${item.bg}

                      text-[12px]
                      font-bold

                      shadow-lg

                      transition

                      group-hover:scale-110
                    `}
                  >
                    {item.icon}
                  </span>

                  <span
                    className="
                      text-[7px]
                      text-gray-300
                    "
                  >
                    {item.name}
                  </span>

                </button>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            SUBORDINATES
        ====================================================== */}

        <section
          className="
            mt-3

            rounded-[14px]

            border
            border-cyan-700

            bg-[radial-gradient(circle_at_50%_50%,rgba(0,100,180,.25),rgba(2,10,25,.98)_75%)]

            px-3
            pb-4
            pt-3

            shadow-[0_0_20px_rgba(0,180,255,.15)]
          "
        >

          <h2
            className="
              text-center
              text-[13px]
              font-bold
              tracking-wide
              text-cyan-100
            "
          >
            Unlimited Expansion of Subordinates
          </h2>


          {/* DIAGRAM */}

          <div
            className="
              relative
              mt-4
              h-[230px]
            "
          >

            {/* CONNECTING LINES */}

            <svg
              className="
                absolute
                inset-0
                h-full
                w-full
              "
              viewBox="0 0 400 220"
              fill="none"
              preserveAspectRatio="none"
            >

              <path
                d="M200 50 V88"
                stroke="#0891b2"
                strokeWidth="2"
              />

              <path
                d="M200 88 H90 V120"
                stroke="#0891b2"
                strokeWidth="2"
              />

              <path
                d="M200 88 H310 V120"
                stroke="#0891b2"
                strokeWidth="2"
              />

              <path
                d="M200 88 V120"
                stroke="#0891b2"
                strokeWidth="2"
              />

              {/* ARROW */}

              <path
                d="M195 83 L200 90 L205 83"
                stroke="#22d3ee"
                strokeWidth="2"
              />

            </svg>


            {/* =================================================
                YOU
            ================================================== */}

            <div
              className="
                absolute
                left-1/2
                top-0
                -translate-x-1/2
                text-center
              "
            >

              <div
                className="
                  relative
                  mx-auto
                  h-[58px]
                  w-[58px]
                "
              >

                {/* DIAMOND */}

                <div
                  className="
                    absolute
                    -left-3
                    top-2
                    text-[20px]
                  "
                >
                  💎
                </div>


                {/* USER */}

                <div
                  className="
                    flex
                    h-full
                    w-full

                    items-center
                    justify-center

                    rounded-full

                    border-[3px]
                    border-cyan-600

                    bg-gradient-to-br
                    from-cyan-500
                    to-blue-900

                    text-[29px]

                    shadow-[0_0_15px_rgba(0,200,255,.35)]
                  "
                >
                  🧑
                </div>


                {/* YOU LABEL */}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-1/2
                    -translate-x-1/2

                    rounded-md

                    bg-cyan-800

                    px-2
                    py-[2px]

                    text-[8px]
                    font-bold
                  "
                >
                  YOU
                </span>

              </div>

            </div>


            {/* =================================================
                L1
            ================================================== */}

            <span
              className="
                absolute
                left-0
                top-[108px]

                rounded

                bg-cyan-800

                px-2
                py-[2px]

                text-[8px]
                font-bold

                text-cyan-100
              "
            >
              L1
            </span>


            {/* =================================================
                USER 1
            ================================================== */}

            <div
              className="
                absolute
                bottom-[15px]
                left-[35px]

                flex
                h-[58px]
                w-[58px]

                items-center
                justify-center

                rounded-full

                border-[3px]
                border-cyan-700

                bg-gradient-to-br
                from-cyan-700
                to-blue-950

                text-[29px]
              "
            >
              👩🏽
            </div>


            {/* =================================================
                USER 2
            ================================================== */}

            <div
              className="
                absolute
                bottom-[15px]
                left-1/2

                flex
                h-[58px]
                w-[58px]

                -translate-x-1/2

                items-center
                justify-center

                rounded-full

                border-[3px]
                border-cyan-700

                bg-gradient-to-br
                from-blue-700
                to-blue-950

                text-[29px]
              "
            >
              👨🏽
            </div>


            {/* =================================================
                USER 3
            ================================================== */}

            <div
              className="
                absolute
                bottom-[15px]
                right-[35px]

                flex
                h-[58px]
                w-[58px]

                items-center
                justify-center

                rounded-full

                border-[3px]
                border-cyan-700

                bg-gradient-to-br
                from-cyan-700
                to-blue-950

                text-[29px]
              "
            >
              👩🏽
            </div>

          </div>

        </section>


        {/* =====================================================
            L1 REWARD
        ====================================================== */}

        <section
          className="
            mt-3

            rounded-[14px]

            border
            border-cyan-700

            bg-[linear-gradient(145deg,rgba(7,30,55,.98),rgba(2,10,25,.99))]

            p-3

            shadow-[0_0_18px_rgba(0,180,255,.12)]
          "
        >

          {/* REWARD HEADER */}

          <div
            className="
              flex
              h-[38px]

              items-center
              justify-center

              rounded-[7px]

              border
              border-cyan-500

              bg-gradient-to-r
              from-blue-900
              via-cyan-700
              to-blue-900

              shadow-[inset_0_1px_10px_rgba(0,200,255,.25)]
            "
          >

            <span
              className="
                mr-1
                text-[15px]
              "
            >
              💎
            </span>

            <span
              className="
                text-[13px]
                font-bold
                text-white
              "
            >
              L1 Reward
            </span>

          </div>


          {/* TABLE */}

          <div
            className="
              mt-2
              overflow-hidden

              rounded-[10px]

              border
              border-cyan-900
            "
          >

            <table
              className="
                w-full
                border-collapse
                text-center
              "
            >

              <thead>

                <tr
                  className="
                    bg-[#0b3157]
                  "
                >

                  <th
                    className="
                      px-2
                      py-2

                      text-[10px]
                      font-bold
                      text-cyan-100
                    "
                  >
                    Grade
                  </th>

                  <th
                    className="
                      px-2
                      py-2

                      text-[10px]
                      font-bold
                      text-cyan-100
                    "
                  >
                    Team Amount
                  </th>

                  <th
                    className="
                      px-2
                      py-2

                      text-[10px]
                      font-bold
                      text-cyan-100
                    "
                  >
                    Proportion
                  </th>

                </tr>

              </thead>


              <tbody>

                {rewards.map((row, index) => (

                  <tr
                    key={index}
                    className="
                      border-t
                      border-cyan-950

                      bg-[#061b3a]

                      hover:bg-[#0b3157]

                      transition
                    "
                  >

                    <td
                      className="
                        py-[8px]
                        text-[10px]
                        text-gray-200
                      "
                    >
                      {row[0]}
                    </td>

                    <td
                      className="
                        py-[8px]
                        text-[10px]
                        text-gray-200
                      "
                    >
                      {row[1]}
                    </td>

                    <td
                      className="
                        py-[8px]
                        text-[10px]
                        font-bold
                        text-cyan-300
                      "
                    >
                      {row[2]}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>


        {/* =====================================================
            ACTIVITY DESCRIPTION
        ====================================================== */}

        <section
          className="
            relative
            mt-7
            pb-8
          "
        >

          {/* TITLE */}

          <div
            className="
              mb-3
              flex
              items-center
              gap-2
            "
          >

            <div
              className="
                h-[1px]
                flex-1

                bg-gradient-to-r
                from-transparent
                to-cyan-700
              "
            />

            <h2
              className="
                whitespace-nowrap

                text-[12px]
                font-bold

                text-cyan-100
              "
            >
              Activity Description
            </h2>

            <div
              className="
                h-[1px]
                flex-1

                bg-gradient-to-l
                from-transparent
                to-cyan-700
              "
            />

          </div>


          {/* DESCRIPTION */}

          <div
            className="
              space-y-3

              text-[10px]
              leading-[1.7]

              text-gray-300
            "
          >

            <p>
              <span className="text-cyan-400 font-bold">
                1.
              </span>{" "}
              Invite friends to register via Facebook,
              Instagram, Telegram, WhatsApp, etc. Share
              your referral link to join your agency.
            </p>


            <p>
              <span className="text-cyan-400 font-bold">
                2.
              </span>{" "}
              Earn up to 5% lifetime commission on every
              bet. Commissions are credited the next morning.
            </p>


            <p>
              <span className="text-cyan-400 font-bold">
                3.
              </span>{" "}
              If your agency has a large team and the total
              daily betting volume reaches 100 million, you
              can earn commission according to the applicable
              proportion.
            </p>


            <p>
              <span className="text-cyan-400 font-bold">
                4.
              </span>{" "}
              Claim your bonus and withdraw immediately
              without completing bonus withdrawal requirements.
            </p>

          </div>

        </section>

      </div>


      {/* BOTTOM SPACE */}

      <div className="mt-8 mb-20" />

    </div>
  );
}