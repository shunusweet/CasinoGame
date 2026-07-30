import React from "react";
import { ArrowLeft } from "lucide-react";
import ActivityCard from "./ActivityCard";
import LuckyWheelCard from "./LuckyWheelCard";
import SiteWideRebateCard from "./SiteWideRebateCard";
import SignInBonusCard from "./SignInBonusCard"
import DailyReliefFundCard from "./DailyReliefFundCard";
import AgentCommissionCard from "./AgentCommissionCard"
import RedemptionCodeCard from "./RedemptionCodeCard"
import WeeklyCompensationCard from "./WeeklyCompensationCard"
import CashRainCard from "./CashRainCard"
import BetChallengeCard from "./BetChallengeCard"
import DailySignInBonusCard from "./DailySignInBonusCard"

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

const Activity = ({ setCurrentPage }) => {
  return (
    <div className="h-full overflow-y-auto bg-[#020617] pb-28">
      {/* Header */}
      <div
        className="
        sticky
        top-0
        z-50
        bg-gradient-to-b
        from-[#061b3a]
        via-[#071426]
        to-[#020617]
        border-b
        border-cyan-700
        shadow-lg
      "
      >
        <div className="h-16 flex items-center justify-between px-4">
          <button
            onClick={() => setCurrentPage("home")}
            className="
            w-10
            h-10
            rounded-full
            border
            border-cyan-500
            flex
            items-center
            justify-center
            text-cyan-300
            hover:bg-cyan-500/20
            duration-300
          "
          >
            <ArrowLeft size={22} />
          </button>

          <h1 className="text-white text-lg font-bold">
            Limited-Time Activities
          </h1>

          <div className="w-10"></div>
        </div>
      </div>

      {/* Activity Cards */}
      <div className="p-3 space-y-5">
        {activities.map((item) => (
          <ActivityCard
            key={item.id}
            banner={item.banner}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            reward={item.reward}
            button={item.button}
          />
        ))}

        <LuckyWheelCard />
        <SiteWideRebateCard/>
        <SignInBonusCard/>
        <DailyReliefFundCard/>
        <AgentCommissionCard/>
        <RedemptionCodeCard/>
        <WeeklyCompensationCard/>
        <CashRainCard/>
        <BetChallengeCard/>
        <DailySignInBonusCard/>
      </div>
    </div>
  );
};

export default Activity;