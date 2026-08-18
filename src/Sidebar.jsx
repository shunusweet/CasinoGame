import React, { useState } from "react";

// ================= IMAGES =================
import LanguageLogo from "./assets/LanguageLogo.png";
import InvitationBonus from "./assets/InvitationBonus.png";
import InvitationBonus1 from "./assets/InvitationBonus1.png";
import InvitationBonus2 from "./assets/InvitationBonus2.png";
import LuckyWheel from "./assets/LuckyWheel.png";
import vip_reward from "./assets/vip_reward.png";
import agent_commission from "./assets/agent_commission.png";
import sign_in from "./assets/sign_in.png";
import relief from "./assets/relief.png";
import gift_code from "./assets/gift_code.png";
import weekly_compensation from "./assets/weekly_compensation.png";
import red_envelope_rain from "./assets/red_envelope_rain.png";
import Bet_challenge from "./assets/Bet_challenge.png";
import vip_sign_in from "./assets/vip_sign_in.png";

const Sidebar = ({ openMenu, setOpenMenu }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // ================= MENU ITEMS =================
  const menuItems = [
    {
      name: "Language",
      image: LanguageLogo,
    },
    {
      name: "Invitation\nBonus",
      image: InvitationBonus,
    },
    {
      name: "Invitation\nBonus 1",
      image: InvitationBonus1,
    },
    {
      name: "Invitation\nBonus 2",
      image: InvitationBonus2,
    },
    {
      name: "Lucky Wheel",
      image: LuckyWheel,
      notification: true,
    },
    {
      name: "VIP Bonus",
      image: vip_reward,
    },
    {
      name: "Agent\nCommission",
      image: agent_commission,
    },
    {
      name: "Sign-in\nBonus",
      image: sign_in,
    },
    {
      name: "Daily Relief\nFund",
      image: relief,
    },
    {
      name: "Redemption\nCode",
      image: gift_code,
    },
    {
      name: "Weekly\nCompensation",
      image: weekly_compensation,
    },
    {
      name: "Cash Rain",
      image: red_envelope_rain,
    },
    {
      name: "Bet\nChallenge",
      image: Bet_challenge,
    },
    {
      name: "Daily Sign-In\nBonus",
      image: vip_sign_in,
    },
  ];

  // ================= DROPDOWN DATA =================
  const dropdownData = {
    Language: [
      "English",
      "Urdu",
      "Chinese",
    ],

    "Invitation\nBonus": [
      "Invitation Bonus",
      "Invite Friends",
      "Bonus History",
    ],

    "Invitation\nBonus 1": [
      "Invitation Bonus",
      "Invite Friends",
      "Bonus History",
    ],

    "Invitation\nBonus 2": [
      "Invitation Bonus",
      "Invite Friends",
      "Bonus History",
    ],

    "Lucky Wheel": [
      "Lucky Wheel",
      "Spin History",
      "Lucky Rewards",
    ],

    "VIP Bonus": [
      "VIP Bonus",
      "VIP Level",
      "VIP Rewards",
    ],

    "Agent\nCommission": [
      "Agent Commission",
      "Commission History",
      "Agent Report",
    ],

    "Sign-in\nBonus": [
      "Sign-in Bonus",
      "Sign-in History",
      "Daily Rewards",
    ],

    "Daily Relief\nFund": [
      "Daily Relief Fund",
      "Relief History",
      "My Rewards",
    ],

    "Redemption\nCode": [
      "Redemption Code",
      "Redeem History",
    ],

    "Weekly\nCompensation": [
      "Weekly Compensation",
      "Compensation History",
    ],

    "Cash Rain": [
      "Cash Rain",
      "Rain History",
      "My Rewards",
    ],

    "Bet\nChallenge": [
      "Bet Challenge",
      "Challenge History",
      "My Rewards",
    ],

    "Daily Sign-In\nBonus": [
      "Daily Sign-In Bonus",
      "Bonus History",
      "Daily Rewards",
    ],
  };

  // ================= MENU CLICK =================
  const handleMenuClick = (name) => {
    if (!dropdownData[name]) return;

    setOpenDropdown(
      openDropdown === name ? null : name
    );
  };

  return (
    <>
      {/* ================================================= */}
      {/* OVERLAY */}
      {/* ================================================= */}

      <div
        onClick={() => {
          setOpenMenu(false);
          setOpenDropdown(null);
        }}
        className={`
          absolute
          inset-0
          z-40

          bg-black/75
          backdrop-blur-[2px]

          transition-all
          duration-300

          ${
            openMenu
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      />

      {/* ================================================= */}
      {/* SIDEBAR */}
      {/* ================================================= */}

      <div
        className={`
          absolute
          left-0
          top-0

          z-50

          h-full
          w-[350px]
          max-w-[350px]

          overflow-hidden

          bg-gradient-to-b
          from-[#061b3a]
          via-[#071426]
          to-[#020617]

          border-r
          border-cyan-600

          shadow-[0_0_40px_rgba(0,200,255,.30)]

          transition-transform
          duration-500
          ease-in-out

          ${
            openMenu
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* ================================================= */}
        {/* SIDEBAR CONTENT */}
        {/* ================================================= */}

        <div
          className="
            h-full
            overflow-y-auto
            overflow-x-hidden
            no-scrollbar
          "
        >

          {/* ================================================= */}
          {/* HEADER */}
          {/* ================================================= */}

          <div className="relative px-5 pt-5">

            {/* BACK BUTTON */}

            <button
              onClick={() => {
                setOpenMenu(false);
                setOpenDropdown(null);
              }}
              className="
                absolute
                left-5
                top-5
                z-20

                flex
                h-10
                w-10

                items-center
                justify-center

                rounded-full

                bg-[#071426]

                border
                border-cyan-700

                text-[30px]
                font-light
                text-cyan-100

                shadow-[0_0_12px_rgba(0,200,255,.20)]

                transition-all
                duration-300

                hover:bg-cyan-900/50
                hover:text-cyan-300
              "
            >
              ←
            </button>


            {/* ================================================= */}
            {/* LOGO */}
            {/* ================================================= */}

            <div className="flex justify-end pr-1">

              <div className="relative">

                <h1
                  className="
                    text-[38px]
                    font-black
                    italic
                    tracking-[-2px]

                    bg-gradient-to-b
                    from-cyan-200
                    via-cyan-400
                    to-blue-700

                    bg-clip-text
                    text-transparent

                    drop-shadow-[0_2px_5px_rgba(0,200,255,.45)]
                  "
                >
                  33RS
                </h1>

                <span
                  className="
                    absolute
                    -right-2
                    bottom-0

                    text-[15px]
                    font-bold
                    text-cyan-200
                  "
                >
                  .com
                </span>

              </div>

            </div>


            {/* ================================================= */}
            {/* USER CARD */}
            {/* ================================================= */}

            <div
              className="
                relative
                mt-7

                rounded-[18px]

                border
                border-cyan-700

                bg-gradient-to-br
                from-[#0b3157]
                via-[#071f3d]
                to-[#020b18]

                px-4
                py-4

                shadow-[0_0_20px_rgba(0,180,255,.18)]
              "
            >

              {/* USER INFO */}

              <div className="flex items-center gap-3">

                {/* PROFILE */}

                <div
                  className="
                    flex
                    h-[62px]
                    w-[62px]
                    shrink-0

                    items-center
                    justify-center

                    overflow-hidden

                    rounded-full

                    border-2
                    border-cyan-400

                    bg-[#123b5c]

                    text-[38px]
                  "
                >
                  🧑🏾
                </div>


                {/* ACCOUNT */}

                <div className="min-w-0">

                  <p
                    className="
                      text-[20px]
                      font-bold
                      tracking-wide
                      text-white
                    "
                  >
                    923263654516
                  </p>

                  <div
                    className="
                      mt-1
                      flex
                      items-center
                      gap-2
                    "
                  >

                    <span
                      className="
                        text-[14px]
                        text-gray-300
                      "
                    >
                      ID:
                    </span>

                    <span
                      className="
                        text-[14px]
                        text-gray-400
                      "
                    >
                      296051
                    </span>

                    <span
                      className="
                        text-[18px]
                        text-cyan-200
                      "
                    >
                      ▣
                    </span>

                  </div>

                </div>

              </div>


              {/* BALANCE */}

              <div
                className="
                  mt-3

                  text-[26px]
                  font-bold

                  text-cyan-300

                  drop-shadow-[0_0_7px_rgba(0,200,255,.35)]
                "
              >
                Rs 6.00
              </div>


              {/* WITHDRAW / DEPOSIT */}

              <div
                className="
                  mt-3
                  grid
                  grid-cols-2
                  gap-3
                "
              >

                {/* WITHDRAW */}

                <button
                  className="
                    flex
                    h-[54px]

                    items-center
                    justify-center
                    gap-2

                    rounded-[12px]

                    border
                    border-cyan-400

                    bg-gradient-to-r
                    from-[#075985]
                    via-[#0284c7]
                    to-[#0c4a6e]

                    text-[15px]
                    font-bold
                    text-white

                    shadow-[inset_0_0_12px_rgba(103,232,249,.25)]

                    transition-all
                    duration-300

                    hover:scale-[1.02]
                    hover:shadow-[0_0_18px_rgba(0,200,255,.35)]
                  "
                >
                  <span className="text-[24px]">
                    🏧
                  </span>

                  Withdrawal
                </button>


                {/* DEPOSIT */}

                <button
                  className="
                    flex
                    h-[54px]

                    items-center
                    justify-center
                    gap-2

                    rounded-[12px]

                    border
                    border-cyan-700

                    bg-gradient-to-br
                    from-[#123b5c]
                    to-[#061426]

                    text-[15px]
                    font-bold
                    text-cyan-100

                    transition-all
                    duration-300

                    hover:bg-[#164c78]
                    hover:text-cyan-300
                  "
                >
                  <span className="text-[24px]">
                    💼
                  </span>

                  Deposit
                </button>

              </div>

            </div>


            {/* ================================================= */}
            {/* MENU AREA */}
            {/* ================================================= */}

            <div
              className="
                mt-6

                h-[400px]

                overflow-y-auto
                overflow-x-hidden

                no-scrollbar
              "
            >

              <div
                className="
                  grid
                  grid-cols-3

                  gap-x-4
                  gap-y-6

                  pb-5
                "
              >

                {menuItems.map((item, index) => {

                  const isOpen =
                    openDropdown === item.name;

                  return (
                    <React.Fragment key={index}>

                      {/* MENU BUTTON */}

                      <button
                        onClick={() =>
                          handleMenuClick(item.name)
                        }
                        className="
                          group

                          flex
                          flex-col
                          items-center

                          text-center

                          outline-none
                        "
                      >

                        {/* IMAGE BOX */}

                        <div
                          className={`
                            relative

                            flex
                            h-[68px]
                            w-[68px]

                            items-center
                            justify-center

                            overflow-visible

                            rounded-[14px]

                            border

                            bg-gradient-to-br
                            from-[#164c78]
                            via-[#0b3157]
                            to-[#061b3a]

                            shadow-[0_0_14px_rgba(0,180,255,.22)]

                            transition-all
                            duration-300

                            ${
                              isOpen
                                ? `
                                  scale-105
                                  border-cyan-300
                                  shadow-[0_0_22px_rgba(0,200,255,.50)]
                                `
                                : `
                                  border-cyan-700
                                `
                            }
                          `}
                        >

                          <img
                            src={item.image}
                            alt={item.name.replace(
                              "\n",
                              " "
                            )}
                            className="
                              h-[58px]
                              w-[58px]

                              object-contain

                              drop-shadow-[0_3px_5px_rgba(0,0,0,.5)]

                              transition-transform
                              duration-300

                              group-hover:scale-110
                            "
                          />


                          {/* NOTIFICATION */}

                          {item.notification && (
                            <span
                              className="
                                absolute
                                -right-2
                                -top-2

                                z-20

                                flex
                                h-6
                                w-6

                                items-center
                                justify-center

                                rounded-full

                                border-2
                                border-white

                                bg-red-600

                                text-[12px]
                                font-bold
                                text-white

                                shadow-[0_0_10px_rgba(255,0,0,.6)]
                              "
                            >
                              1
                            </span>
                          )}

                        </div>


                        {/* TITLE */}

                        <p
                          className="
                            mt-2

                            whitespace-pre-line

                            text-[13px]
                            font-bold
                            leading-[1.2]

                            text-cyan-50

                            drop-shadow-[0_1px_2px_rgba(0,0,0,.8)]
                          "
                        >
                          {item.name}
                        </p>

                      </button>


                      {/* ================================================= */}
                      {/* DROPDOWN */}
                      {/* ================================================= */}

                      {isOpen && (
                        <div
                          className="
                            col-span-3

                            -mt-2

                            rounded-[14px]

                            border
                            border-cyan-700

                            bg-gradient-to-b
                            from-[#0b3157]
                            via-[#071f3d]
                            to-[#020b18]

                            p-3

                            shadow-[0_0_18px_rgba(0,180,255,.25)]
                          "
                        >

                          <div
                            className="
                              grid
                              grid-cols-2
                              gap-2
                            "
                          >

                            {dropdownData[
                              item.name
                            ]?.map(
                              (
                                option,
                                optionIndex
                              ) => (

                                <button
                                  key={optionIndex}
                                  className="
                                    rounded-lg

                                    border
                                    border-cyan-800

                                    bg-[#061b3a]

                                    px-3
                                    py-2

                                    text-left

                                    text-[12px]
                                    font-semibold

                                    text-cyan-100

                                    transition-all

                                    hover:border-cyan-400
                                    hover:bg-[#0b3157]
                                    hover:text-cyan-300
                                  "
                                >
                                  {option}
                                </button>

                              )
                            )}

                          </div>

                        </div>
                      )}

                    </React.Fragment>
                  );
                })}

              </div>

            </div>


            {/* ================================================= */}
            {/* CUSTOMER SERVICE */}
            {/* ================================================= */}

            <div
              className="
                mt-4

                rounded-[17px]

                border
                border-cyan-700

                bg-gradient-to-r
                from-[#0b3157]
                via-[#071f3d]
                to-[#061426]

                p-4

                shadow-[0_0_18px_rgba(0,180,255,.20)]
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <div
                    className="
                      flex
                      h-11
                      w-11

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-cyan-400

                      bg-[#061b3a]

                      text-2xl

                      shadow-[0_0_12px_rgba(0,200,255,.25)]
                    "
                  >
                    🎧
                  </div>


                  <div>

                    <h2
                      className="
                        text-[16px]
                        font-bold
                        text-white
                      "
                    >
                      Customer Service
                    </h2>

                    <p
                      className="
                        mt-1

                        text-[10px]
                        font-semibold

                        text-cyan-300
                      "
                    >
                      Professional service to solve your problems.
                    </p>

                  </div>

                </div>


                <span
                  className="
                    text-[28px]
                    text-cyan-300
                  "
                >
                  →
                </span>

              </div>

            </div>


            {/* ================================================= */}
            {/* SHARE */}
            {/* ================================================= */}

            <div
              className="
                relative

                mt-3
                mb-6

                rounded-[17px]

                border
                border-cyan-800

                bg-gradient-to-b
                from-[#0b3157]
                to-[#061426]

                px-4
                py-4

                shadow-[0_0_15px_rgba(0,180,255,.18)]
              "
            >

              <div
                className="
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

                <span className="text-[17px]">
                  🪙
                </span>

                <h3
                  className="
                    text-[13px]
                    font-bold
                    text-cyan-100
                  "
                >
                  Share
                </h3>

                <span className="text-[17px]">
                  🪙
                </span>

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


              {/* SOCIAL ICONS */}

              <div
                className="
                  mt-4

                  flex
                  items-center
                  justify-around
                "
              >

                {/* FACEBOOK */}

                <button
                  className="
                    flex
                    h-9
                    w-9

                    items-center
                    justify-center

                    rounded-full

                    bg-[#1877F2]

                    text-[22px]
                    font-bold
                    text-white
                  "
                >
                  f
                </button>


                {/* WHATSAPP */}

                <button
                  className="
                    flex
                    h-9
                    w-9

                    items-center
                    justify-center

                    rounded-full

                    bg-[#25D366]

                    text-[19px]
                    text-white
                  "
                >
                  ☎
                </button>


                {/* TELEGRAM */}

                <button
                  className="
                    flex
                    h-9
                    w-9

                    items-center
                    justify-center

                    rounded-full

                    bg-[#229ED9]

                    text-[18px]
                    text-white
                  "
                >
                  ➤
                </button>


                {/* INSTAGRAM */}

                <button
                  className="
                    flex
                    h-9
                    w-9

                    items-center
                    justify-center

                    rounded-full

                    bg-gradient-to-br
                    from-[#833AB4]
                    via-[#E1306C]
                    to-[#FCAF45]

                    text-[20px]
                    text-white
                  "
                >
                  ◎
                </button>


                {/* X */}

                <button
                  className="
                    flex
                    h-9
                    w-9

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-gray-600

                    bg-black

                    text-[18px]
                    text-white
                  "
                >
                  𝕏
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Sidebar;