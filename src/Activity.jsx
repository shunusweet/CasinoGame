import React from "react";
import { ArrowLeft } from "lucide-react";

import ActivityCard from "./ActivityCard";
import LuckyWheelCard from "./LuckyWheelCard";
import SiteWideRebateCard from "./SiteWideRebateCard";
import SignInBonusCard from "./SignInBonusCard";
import DailyReliefFundCard from "./DailyReliefFundCard";
import AgentCommissionCard from "./AgentCommissionCard";
import RedemptionCodeCard from "./RedemptionCodeCard";
import WeeklyCompensationCard from "./WeeklyCompensationCard";
import CashRainCard from "./CashRainCard";
import BetChallengeCard from "./BetChallengeCard";
import DailySignInBonusCard from "./DailySignInBonusCard";

// =====================================================
// ACTIVITIES
// =====================================================

const activities = [
  {
    id: 1,
    title: "Invitation Bonus",
    subtitle: "Invite friends and earn rewards",
    reward: "200 + 800 + 2000",
    button: "In Progress",
    banner:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop",
    icon:
      "https://cdn-icons-png.flaticon.com/512/825/825535.png",
  },

  {
    id: 2,
    title: "Sprint Rewards",
    subtitle: "Complete daily tasks",
    reward: "800 + 2000",
    button: "In Progress",
    banner:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    icon:
      "https://cdn-icons-png.flaticon.com/512/616/616489.png",
  },

  {
    id: 3,
    title: "Lucky Treasure",
    subtitle: "Spin & Win Big Rewards",
    reward: "500 + 1500",
    button: "Claim",
    banner:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    icon:
      "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
  },

  {
    id: 4,
    title: "VIP Bonus",
    subtitle: "Exclusive Monthly Salary",
    reward: "UP TO 5,000,000",
    button: "Join Now",
    banner:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    icon:
      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
];

// =====================================================
// COMPONENT
// =====================================================

const Activity = ({ setCurrentPage }) => {
  return (
    <div
      className="
        relative
        w-full
        max-w-[540px]
        h-full
        min-h-screen

        mx-auto

        overflow-x-hidden
        overflow-y-auto

        bg-[radial-gradient(circle_at_50%_0%,rgba(0,200,255,.16),transparent_35%),linear-gradient(180deg,#061b3a_0%,#020617_45%,#01030b_100%)]

        pb-28

        scrollbar-hide
      "
    >

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div
        className="
          sticky
          top-0
          z-50

          w-full

          bg-gradient-to-b
          from-[#061b3a]
          via-[#071426]
          to-[#020617]

          border-b
          border-cyan-700/60

          shadow-[0_4px_20px_rgba(0,200,255,.15)]

          animate-[fadeDown_0.6s_ease-out]
        "
      >

        <div
          className="
            w-full
            max-w-[540px]
            h-16

            mx-auto

            flex
            items-center
            justify-between

            px-3
            sm:px-4
          "
        >

          {/* ================= BACK BUTTON ================= */}

          <button
            onClick={() => setCurrentPage("home")}
            className="
              flex
              items-center
              justify-center

              w-9
              h-9
              sm:w-10
              sm:h-10

              shrink-0

              rounded-full

              border
              border-cyan-500

              text-cyan-300

              bg-[#020617]

              hover:bg-cyan-500/20
              hover:scale-110

              transition-all
              duration-300
            "
          >
            <ArrowLeft size={21} />
          </button>

          {/* ================= TITLE ================= */}

          <h1
            className="
              flex-1

              px-2

              text-center

              text-white

              text-base
              sm:text-lg

              font-bold

              truncate

              animate-[fadeIn_0.8s_ease-out]
            "
          >
            Limited-Time Activities
          </h1>

          {/* ================= RIGHT SPACE ================= */}

          <div
            className="
              w-9
              h-9
              sm:w-10
              sm:h-10

              shrink-0
            "
          />

        </div>

      </div>

      {/* ================================================= */}
      {/* ACTIVITY CARDS */}
      {/* ================================================= */}

      <div
        className="
          w-full
          max-w-[540px]

          mx-auto

          px-2
          sm:px-3

          pt-3

          space-y-4
          sm:space-y-5
        "
      >

        {/* ================= MAIN ACTIVITIES ================= */}

        {activities.map((item, index) => (
          <div
            key={item.id}
            className="
              w-full
              min-w-0

              opacity-0

              animate-[slideUp_0.7s_ease-out_forwards]
            "
            style={{
              animationDelay: `${index * 150}ms`,
            }}
          >
            <ActivityCard
              banner={item.banner}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              reward={item.reward}
              button={item.button}
            />
          </div>
        ))}

        {/* ================= OTHER CARDS ================= */}

        <div
          className="
            w-full
            min-w-0

            opacity-0

            animate-[slideUp_0.7s_ease-out_600ms_forwards]
          "
        >
          <LuckyWheelCard />
        </div>

        <div
          className="
            w-full
            min-w-0

            opacity-0

            animate-[slideUp_0.7s_ease-out_700ms_forwards]
          "
        >
          <SiteWideRebateCard />
        </div>

        <div
          className="
            w-full
            min-w-0

            opacity-0

            animate-[slideUp_0.7s_ease-out_800ms_forwards]
          "
        >
          <SignInBonusCard />
        </div>

        <div
          className="
            w-full
            min-w-0

            opacity-0

            animate-[slideUp_0.7s_ease-out_900ms_forwards]
          "
        >
          <DailyReliefFundCard />
        </div>

        <div
          className="
            w-full
            min-w-0

            opacity-0

            animate-[slideUp_0.7s_ease-out_1000ms_forwards]
          "
        >
          <AgentCommissionCard />
        </div>

        <div
          className="
            w-full
            min-w-0

            opacity-0

            animate-[slideUp_0.7s_ease-out_1100ms_forwards]
          "
        >
          <RedemptionCodeCard />
        </div>

        <div
          className="
            w-full
            min-w-0

            opacity-0

            animate-[slideUp_0.7s_ease-out_1200ms_forwards]
          "
        >
          <WeeklyCompensationCard />
        </div>

        <div
          className="
            w-full
            min-w-0

            opacity-0

            animate-[slideUp_0.7s_ease-out_1300ms_forwards]
          "
        >
          <CashRainCard />
        </div>

        <div
          className="
            w-full
            min-w-0

            opacity-0

            animate-[slideUp_0.7s_ease-out_1400ms_forwards]
          "
        >
          <BetChallengeCard />
        </div>

        <div
          className="
            w-full
            min-w-0

            opacity-0

            animate-[slideUp_0.7s_ease-out_1500ms_forwards]
          "
        >
          <DailySignInBonusCard />
        </div>

      </div>

      {/* ================================================= */}
      {/* ANIMATION CSS */}
      {/* ================================================= */}

      <style>{`

        /* ================= FADE IN ================= */

        @keyframes fadeIn {

          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }

        }


        /* ================= HEADER DOWN ================= */

        @keyframes fadeDown {

          from {
            opacity: 0;
            transform: translateY(-25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }


        /* ================= CARD SLIDE UP ================= */

        @keyframes slideUp {

          from {
            opacity: 0;
            transform: translateY(45px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }


        /* ================= HIDE SCROLLBAR ================= */

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
        }


        /* ================= RESPONSIVE ================= */

        * {
          box-sizing: border-box;
        }


        /* Small mobile */

        @media (max-width: 360px) {

          .activity-container {
            padding-left: 8px;
            padding-right: 8px;
          }

        }


        /* Reduced motion */

        @media (prefers-reduced-motion: reduce) {

          [class*="animate-"] {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

        }

      `}</style>

    </div>
  );
};

export default Activity;