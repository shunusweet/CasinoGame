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
  // PAGE ROUTING
  // =====================================================

  const [currentPage, setCurrentPage] = useState("home");


  return (

    <div
      className="
        relative

        w-full
        max-w-[430px]

        h-screen

        mx-auto

        overflow-hidden

        bg-[#020617]

        border-4
        border-cyan-600

        shadow-[0_0_30px_rgba(0,200,255,.15)]
      "
    >


      {/* ================================================= */}
      {/* HOME */}
      {/* ================================================= */}

      {currentPage === "home" && (
        <>

          {/* ================= HEADER ================= */}

          <Header
            setOpenMenu={setOpenMenu}
            setLoginOpen={setLoginOpen}
            setSignupOpen={setSignupOpen}
          />


          {/* ================= SIDEBAR ================= */}

          <Sidebar
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />


          {/* ================================================= */}
          {/* MAIN GAME CONTENT */}
          {/* ================================================= */}

          <div
            className="
              relative

              h-full

              overflow-y-auto
              overflow-x-hidden

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