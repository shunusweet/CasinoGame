import { useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import HeroSection from "./HeroSectoin";
import PromoCards from "./PromoCards";

import BottomNavbar from "./BottomNavbar";

import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

import Activity from "./Activity";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const [loginOpen, setLoginOpen] = useState(false);

  const [signupOpen, setSignupOpen] = useState(false);

  // Screen Change
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
      {/* ===========================
          HOME PAGE
      ============================ */}

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

          <div className="pb-28 overflow-y-auto h-full">
            <HeroSection />
            <PromoCards />
          </div>
        </>
      )}

      {/* ===========================
          ACTIVITY PAGE
      ============================ */}

      {currentPage === "activity" && (
        <Activity
          setCurrentPage={setCurrentPage}
        />
      )}

      {/* ===========================
          LOGIN MODAL
      ============================ */}

      <LoginModal
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen}
        setSignupOpen={setSignupOpen}
      />

      {/* ===========================
          SIGNUP MODAL
      ============================ */}

      <SignupModal
        signupOpen={signupOpen}
        setSignupOpen={setSignupOpen}
        setLoginOpen={setLoginOpen}
      />

      {/* ===========================
          BOTTOM NAVBAR
      ============================ */}

      <BottomNavbar
        setLoginOpen={setLoginOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;