import React from "react";

const faqs = [
  {
    question: "What is the Agency Program of site 33RS.COM?",
    answer:
      "33RS.COM provides an opportunity for members to earn passive income. By inviting friends to play, you can get bonuses every day.",
  },
  {
    question: "Is there a cost to join the Agency Program of site 33RS.COM?",
    answer: "Absolutely not. It's completely free.",
  },
  {
    question:
      "What benefits do I get if I am not the owner of the site 33RS.COM?",
    answer:
      "Of course, we can provide promotional assistance both online and offline through social media or email.",
  },
  {
    question: "How much can I earn?",
    answer:
      "As one of the site 33RS.COM, you will be given the benefit of profit sharing. You will receive more than 80% of the commission prize.",
  },
];

/* =========================================================
   CARD
========================================================= */

function Card({ children, className = "" }) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[14px]
        border
        border-cyan-700
        bg-gradient-to-br
        from-[#0b3157]/95
        via-[#061b3a]/95
        to-[#020617]/95
        shadow-[0_0_20px_rgba(0,200,255,0.18)]
        ${className}
      `}
    >
      {/* Blue Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-cyan-400/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          left-1/3
          h-36
          w-36
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   FAQ CARD
========================================================= */

function FAQCard({ question, answer }) {
  return (
    <Card className="px-4 py-4 sm:px-6 sm:py-5">
      <h2
        className="
          text-center
          font-serif
          text-[17px]
          font-bold
          leading-tight
          text-cyan-100
          drop-shadow-[0_0_6px_rgba(0,200,255,.25)]
          sm:text-[20px]
        "
      >
        {question}
      </h2>

      <p
        className="
          mt-3
          text-[11px]
          font-semibold
          leading-[1.8]
          text-gray-200
          sm:text-[13px]
        "
      >
        {answer}
      </p>
    </Card>
  );
}

/* =========================================================
   FAQ PAGE
========================================================= */

function FAQ() {
  return (
    <main
      className="
        relative
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#020617]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_10%,rgba(0,110,180,0.30),transparent_35%),radial-gradient(circle_at_10%_50%,rgba(0,80,150,0.18),transparent_30%),linear-gradient(180deg,#061b3a,#020617)]
          "
        />

        {/* Blue Dot Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, #00bfff 1px, transparent 1px),
              radial-gradient(circle at 80% 70%, #008cff 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 120px 120px",
          }}
        />
      </div>

      

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[700px]
          px-3
          pb-8
          pt-4
          sm:px-5
          sm:pb-10
          sm:pt-8
        "
      >
        {/* =====================================================
            FAQ
        ====================================================== */}

        <section className="space-y-2 sm:space-y-3">
          {faqs.map((faq, index) => (
            <FAQCard
              key={index}
              {...faq}
            />
          ))}
        </section>

        {/* =====================================================
            UNLIMITED EXPANSION
        ====================================================== */}

        <section className="mt-3 sm:mt-5">
          <Card className="px-4 py-5 sm:px-7 sm:py-6">
            <h2
              className="
                text-center
                font-serif
                text-[17px]
                font-bold
                text-cyan-100
                sm:text-[20px]
              "
            >
              Unlimited Expansion of Subordinates
            </h2>

            {/* Diagram */}

            <div
              className="
                relative
                mx-auto
                mt-5
                h-[210px]
                w-full
                max-w-[420px]
                sm:h-[250px]
              "
            >
              {/* Main Person */}

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
                    flex
                    h-[62px]
                    w-[62px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border-2
                    border-cyan-400
                    bg-gradient-to-br
                    from-[#164c78]
                    to-[#020617]
                    text-4xl
                    shadow-[0_0_15px_rgba(0,200,255,.35)]
                    sm:h-[72px]
                    sm:w-[72px]
                  "
                >
                  🧑🏻
                </div>

                <div className="absolute -right-5 top-1 text-xl">
                  💎
                </div>

                <div className="absolute -left-5 top-4 text-xl">
                  💎
                </div>
              </div>

              {/* Vertical Connector */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[67px]
                  h-[42px]
                  w-[2px]
                  -translate-x-1/2
                  bg-cyan-700
                  shadow-[0_0_6px_rgba(0,200,255,.5)]
                "
              />

              {/* Horizontal Connector */}

              <div
                className="
                  absolute
                  left-[20%]
                  right-[20%]
                  top-[105px]
                  h-[2px]
                  bg-cyan-700
                  shadow-[0_0_6px_rgba(0,200,255,.4)]
                "
              />

              {/* Left Connector */}

              <div
                className="
                  absolute
                  left-[20%]
                  top-[105px]
                  h-[30px]
                  w-[2px]
                  bg-cyan-700
                "
              />

              {/* Center Connector */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[105px]
                  h-[30px]
                  w-[2px]
                  -translate-x-1/2
                  bg-cyan-700
                "
              />

              {/* Right Connector */}

              <div
                className="
                  absolute
                  right-[20%]
                  top-[105px]
                  h-[30px]
                  w-[2px]
                  bg-cyan-700
                "
              />

              {/* Arrow */}

              <div
                className="
                  absolute
                  left-[8%]
                  top-[97px]
                  text-xl
                  text-cyan-400
                "
              >
                ➜
              </div>

              {/* L1 */}

              <span
                className="
                  absolute
                  left-0
                  top-[100px]
                  rounded
                  border
                  border-cyan-500
                  bg-[#0b3157]
                  px-3
                  py-1
                  text-[10px]
                  font-bold
                  text-cyan-100
                  shadow-[0_0_8px_rgba(0,200,255,.25)]
                "
              >
                L1
              </span>

              {/* User 1 */}

              <div
                className="
                  absolute
                  left-[13%]
                  top-[130px]
                  text-center
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-[54px]
                    w-[54px]
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-cyan-500
                    bg-gradient-to-br
                    from-[#164c78]
                    to-[#020617]
                    text-3xl
                    shadow-[0_0_12px_rgba(0,200,255,.25)]
                    sm:h-[62px]
                    sm:w-[62px]
                  "
                >
                  👨🏽
                </div>
              </div>

              {/* User 2 */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[130px]
                  -translate-x-1/2
                  text-center
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-[54px]
                    w-[54px]
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-cyan-500
                    bg-gradient-to-br
                    from-[#0b3157]
                    to-[#020617]
                    text-3xl
                    shadow-[0_0_12px_rgba(0,200,255,.25)]
                    sm:h-[62px]
                    sm:w-[62px]
                  "
                >
                  👨🏻
                </div>
              </div>

              {/* User 3 */}

              <div
                className="
                  absolute
                  right-[13%]
                  top-[130px]
                  text-center
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-[54px]
                    w-[54px]
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-cyan-500
                    bg-gradient-to-br
                    from-[#164c78]
                    to-[#020617]
                    text-3xl
                    shadow-[0_0_12px_rgba(0,200,255,.25)]
                    sm:h-[62px]
                    sm:w-[62px]
                  "
                >
                  👩🏽
                </div>
              </div>
            </div>

            {/* Description */}

            <div
              className="
                mt-2
                space-y-2
                text-[10px]
                font-semibold
                leading-[1.8]
                text-gray-200
                sm:text-[12px]
              "
            >
              <p>
                <span className="mr-1 text-cyan-400">
                  1.
                </span>

                Every time the players you refer place a bet,

                <span className="text-cyan-300">
                  {" "}
                  whether they win or lose
                </span>

                , you will receive different commission percentages.
              </p>

              <p>
                <span className="mr-1 text-cyan-400">
                  2.
                </span>

                The system calculates commissions every 3 minutes.
              </p>
            </div>
          </Card>
        </section>

        {/* =====================================================
            COMMISSION CALCULATION
        ====================================================== */}

        <section className="mt-3 sm:mt-5">
          <Card className="px-3 py-5 sm:px-7 sm:py-7">

            <h2
              className="
                text-center
                font-serif
                text-[18px]
                font-bold
                text-cyan-100
                sm:text-[21px]
              "
            >
              Commission Calculation Rules
            </h2>

            {/* User */}

            <div className="mt-5 flex items-center justify-center">

              <div className="relative">

                <div
                  className="
                    flex
                    h-[72px]
                    w-[72px]
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-cyan-400
                    bg-gradient-to-br
                    from-[#164c78]
                    to-[#020617]
                    text-4xl
                    shadow-[0_0_15px_rgba(0,200,255,.3)]
                    sm:h-[82px]
                    sm:w-[82px]
                  "
                >
                  🧑🏻
                </div>

                <span
                  className="
                    absolute
                    -bottom-1
                    left-0
                    rounded-full
                    border
                    border-cyan-500
                    bg-[#0b3157]
                    px-3
                    py-1
                    text-[11px]
                    font-bold
                    text-cyan-100
                  "
                >
                  You
                </span>

              </div>

              <div className="ml-4 text-center">

                <p className="text-[12px] text-gray-300 sm:text-[14px]">
                  Great Team and have
                </p>

              </div>

            </div>

            {/* Bonus */}

            <div className="mt-5 text-center">

              <p className="text-[10px] text-gray-300 sm:text-[12px]">
                Total performance 2200K Total Agent Bonus
              </p>

              <p
                className="
                  mt-1
                  text-[20px]
                  font-bold
                  text-cyan-300
                  drop-shadow-[0_0_8px_rgba(0,200,255,.45)]
                  sm:text-[23px]
                "
              >
                6.6K
              </p>

            </div>

            {/* Contributions */}

            <div className="relative mx-auto mt-3 max-w-[430px]">

              <div className="grid grid-cols-3 gap-2 sm:gap-4">

                <Contribution
                  level="B1"
                  emoji="👨🏽"
                  percent="0.3%"
                  bets="400K"
                />

                <Contribution
                  level="B2"
                  emoji="👨🏻"
                  percent="0.3%"
                  bets="800K"
                />

                <Contribution
                  level="B3"
                  emoji="👩🏽"
                  percent="0.3%"
                  bets="1000K"
                />

              </div>

            </div>

            {/* Calculation */}

            <div
              className="
                mt-5
                text-[10px]
                font-semibold
                leading-[1.9]
                text-gray-100
                sm:text-[12px]
              "
            >

              <p>
                L1 is (B1) 400K + (B2) 800K + (B3) 1000K ={" "}
                <span className="text-cyan-200">
                  2200K
                </span>
                ,
              </p>

              <p>
                this value at Commission Level 3, so 2200K ×{" "}
                <span className="text-cyan-300">
                  0.3%
                </span>{" "}
                ={" "}
                <span className="text-cyan-300">
                  6.6K.
                </span>
              </p>

            </div>

          </Card>
        </section>

        {/* =====================================================
            RULE EXPLANATION
        ====================================================== */}

        <section className="mt-3 sm:mt-5">

          <Card className="px-4 py-4 sm:px-7 sm:py-5">

            <h2
              className="
                text-center
                font-serif
                text-[17px]
                font-bold
                text-cyan-100
                sm:text-[20px]
              "
            >
              Rule Explanation
            </h2>

            <p
              className="
                mt-3
                text-center
                text-[10px]
                font-semibold
                leading-[1.9]
                text-gray-200
                sm:text-[12px]
              "
            >
              A valid bet here is calculated based on the total accumulated
              valid bets from your downlines. The more your downlines play
              and have valid bets, the larger the proportion and the bonus
              you will receive.
            </p>

          </Card>

        </section>

      </div>
    </main>
  );
}

/* =========================================================
   CONTRIBUTION CARD
========================================================= */

function Contribution({
  level,
  emoji,
  percent,
  bets,
}) {
  return (
    <div
      className="
        overflow-hidden
        rounded-lg
        border
        border-cyan-800
        bg-[#061b3a]
        shadow-[0_0_10px_rgba(0,180,255,.12)]
      "
    >

      {/* Avatar Area */}

      <div
        className="
          relative
          flex
          h-[70px]
          items-center
          justify-center
          bg-gradient-to-br
          from-[#164c78]
          to-[#061b3a]
          sm:h-[82px]
        "
      >

        {/* Level */}

        <span
          className="
            absolute
            left-1
            top-1
            rounded-full
            border
            border-cyan-600
            bg-[#0b3157]
            px-2
            py-1
            text-[10px]
            font-bold
            text-cyan-100
          "
        >
          {level}
        </span>

        {/* Avatar */}

        <div
          className="
            flex
            h-[52px]
            w-[52px]
            items-center
            justify-center
            rounded-full
            border-2
            border-cyan-500
            bg-gradient-to-br
            from-[#1c5d8f]
            to-[#020617]
            text-3xl
            shadow-[0_0_10px_rgba(0,200,255,.25)]
            sm:h-[60px]
            sm:w-[60px]
          "
        >
          {emoji}
        </div>

      </div>

      {/* Information */}

      <div className="py-2 text-center">

        <p
          className="
            text-[13px]
            font-bold
            text-cyan-300
            sm:text-[16px]
          "
        >
          {percent}
        </p>

        <p
          className="
            mt-1
            text-[9px]
            font-semibold
            text-gray-300
            sm:text-[11px]
          "
        >
          Valid Bets
        </p>

        <p
          className="
            text-[11px]
            font-bold
            text-white
            sm:text-[13px]
          "
        >
          {bets}
        </p>

      </div>

    </div>
  );
}

export default FAQ;