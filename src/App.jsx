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

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const [loginOpen, setLoginOpen] = useState(false);

  const [signupOpen, setSignupOpen] = useState(false);

  // ================= SCREEN ROUTING =================
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div
      className="
        max-w-[430px]
        h-screen
        mx-auto

        bg-[#020617]

        border-4
        border-cyan-600

        relative

        overflow-hidden
      "
    >

      {/* ================================================= */}
      {/* HOME */}
      {/* ================================================= */}

      {currentPage === "home" && (
        <>
          <Header
            setOpenMenu={setOpenMenu}
            setLoginOpen={setLoginOpen}
            setSignupOpen={setSignupOpen}
          />

          <Sidebar
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />

          <div
            className="
              h-full
              overflow-y-auto
              pb-28
            "
          >
            <HeroSectoin />

            <PromoCards />

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

            <Footer />
          </div>
        </>
      )}


      {/* ================================================= */}
      {/* ACTIVITY */}
      {/* ================================================= */}

      {currentPage === "activity" && (
        <Activity
          setCurrentPage={setCurrentPage}
        />
      )}


      {/* ================================================= */}
      {/* DEPOSIT */}
      {/* ================================================= */}

      {currentPage === "deposit" && (
        <DepositPage
          setCurrentPage={setCurrentPage}
        />
      )}


      {/* ================================================= */}
      {/* AGENCY */}
      {/* ================================================= */}

      {currentPage === "agency" && (
        <AgencyHeader
          setCurrentPage={setCurrentPage}
        />
      )}


      {/* ================================================= */}
      {/* LOGIN MODAL */}
      {/* ================================================= */}

      <LoginModal
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen}
        setSignupOpen={setSignupOpen}
      />


      {/* ================================================= */}
      {/* SIGNUP MODAL */}
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

    </div>
  );
}

export default App;