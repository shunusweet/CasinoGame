import { useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import HeroSectoin from "./HeroSectoin";
import PromoCards from "./PromoCards";
import AnnouncementBar from "./AnnouncementBar";
import GameCategories from "./GameCategories";
import HotGameHeader from "./HotGameHeader";
import GameGridCard from "./GameGridCard";
import BottomNavbar from "./BottomNavbar";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import AgencyHeader from "./AgencyHeader";
import Activity from "./Activity";
import DepositPage from "./DepositPage";
import JiliHeader from "./JiliHeader";
import JiliFeatureCards from "./JiliFeatureCards";
import PGHeader from "./PGHeader";
import PlayNgoHeader from "./PlayNgoHeader";
import Sports from "./Sports";
import JDBHeader from "./JDBHeader";
import PPGames from "./PPGames";
import TopPlayer from "./TopPlayer";
import DBGames from "./DBGames";
import FishGames from "./FishGames";
import Footer from "./Footer";

// VIP PAGE
import VipCurrentLevel from "./VipCurrentLevel";

function App() {
  // =====================================================
  // SIDEBAR
  // =====================================================
  const [openMenu, setOpenMenu] = useState(false);

  // =====================================================
  // LOGIN / SIGNUP
  // =====================================================
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  // =====================================================
  // PAGE
  // =====================================================
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div
      className="
        relative
        w-full
        max-w-[540px]
        h-screen
        min-h-screen
        mx-auto
        overflow-hidden
        bg-[#03152f]
        shadow-[0_0_60px_rgba(0,120,255,.35)]
      "
    >
      {/* ================================================= */}
      {/* HOME */}
      {/* ================================================= */}

      {currentPage === "home" && (
        <>
          {/* HEADER */}
          <Header
            setOpenMenu={setOpenMenu}
            setLoginOpen={setLoginOpen}
            setSignupOpen={setSignupOpen}
          />

          {/* SIDEBAR */}
          <Sidebar
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />

          {/* ================================================= */}
          {/* MAIN SCROLL AREA */}
          {/* ================================================= */}

          <main
            className="
              relative
              w-full
              h-full
              min-h-0
              overflow-y-auto
              overflow-x-hidden
              pb-32
              scrollbar-hide
              bg-[radial-gradient(circle_at_50%_0%,rgba(0,200,255,0.18),transparent_35%),linear-gradient(180deg,#061b3a_0%,#020617_35%,#01030b_100%)]
            "
          >
            <HeroSectoin />

            {/* PROMO CARDS */}
            <PromoCards
              setCurrentPage={setCurrentPage}
            />

            <AnnouncementBar />

            <GameCategories />

            <HotGameHeader />

            <GameGridCard />

            <JiliHeader />

            <JiliFeatureCards />

            <PGHeader />

            <PlayNgoHeader />

            <Sports />

            <JDBHeader />

            <PPGames />

            <TopPlayer />

            <DBGames />

            <FishGames />

            {/* FOOTER */}
            <Footer />
          </main>
        </>
      )}

      {/* ================================================= */}
      {/* ACTIVITY */}
      {/* ================================================= */}

      {currentPage === "activity" && (
        <div
          className="
            w-full
            h-full
            overflow-y-auto
            overflow-x-hidden
            bg-[linear-gradient(180deg,#061b3a,#020617)]
          "
        >
          <Activity
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}

      {/* ================================================= */}
      {/* DEPOSIT */}
      {/* ================================================= */}

      {currentPage === "deposit" && (
        <div
          className="
            w-full
            h-full
            overflow-y-auto
            overflow-x-hidden
            bg-[linear-gradient(180deg,#061b3a,#020617)]
          "
        >
          <DepositPage
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}

      {/* ================================================= */}
      {/* AGENCY */}
      {/* ================================================= */}

      {currentPage === "agency" && (
        <div
          className="
            w-full
            h-full
            overflow-y-auto
            overflow-x-hidden
            bg-[linear-gradient(180deg,#061b3a,#020617)]
          "
        >
          <AgencyHeader
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}

      {/* ================================================= */}
      {/* VIP CURRENT LEVEL */}
      {/* ================================================= */}

      {currentPage === "vip-current-level" && (
        <div
          className="
            w-full
            h-full
            overflow-y-auto
            overflow-x-hidden
            bg-[linear-gradient(180deg,#061b3a,#020617)]
          "
        >
          <VipCurrentLevel
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}

      {/* ================================================= */}
      {/* LOGIN */}
      {/* ================================================= */}

      <LoginModal
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen}
        setSignupOpen={setSignupOpen}
      />

      {/* ================================================= */}
      {/* SIGNUP */}
      {/* ================================================= */}

      <SignupModal
        signupOpen={signupOpen}
        setSignupOpen={setSignupOpen}
        setLoginOpen={setLoginOpen}
      />

      {/* ================================================= */}
      {/* BOTTOM NAVBAR */}
      {/* ================================================= */}

      <BottomNavbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setLoginOpen={setLoginOpen}
      />

      {/* ================================================= */}
      {/* GLOBAL CSS */}
      {/* ================================================= */}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
        }

        html,
        body,
        #root {
          margin: 0;
          width: 100%;
          min-height: 100%;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(0, 180, 255, 0.20),
              transparent 35%
            ),
            linear-gradient(
              180deg,
              #03152f 0%,
              #020b1d 50%,
              #01030b 100%
            );
        }

        body {
          overflow-x: hidden;
        }

        button {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  );
}

export default App;