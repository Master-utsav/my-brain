import React from "react";
import "@/index.css";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/Sidebar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SignupForm from "@/components/SignupForm";
import LoginForm from "@/components/LoginForm";
import { useAuthContext } from "@/context/AuthContext";
import TweetBox from "@/components/user/TweetBox";

function App() {
  const location = useLocation();
  const { isLoggedIn } = useAuthContext();
  const [isSideBarOpen , setIsSideBarOpen] = React.useState<boolean>(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoggedIn && location.pathname === "/") {
      navigate("/user/tweet-box");
    }
  }, [isLoggedIn, location.pathname, navigate]);
  
  function handleSideBar (val : boolean){
    setIsSideBarOpen(val);
    console.log(isSideBarOpen);
  }
  
  return (
    <>
      <main className="w-full flex dark:bg-[#121212] bg-[#f5f5f5] min-h-screen overflow-hidden">

        <Sidebar
          className={`fixed left-0 top-0 h-full ${isSideBarOpen ? "w-[15%]" : "w-[5%]"} `}
          OnSideBarOpen={handleSideBar}
          isSideBarOpen={isSideBarOpen}
        />

        <div className={`${isSideBarOpen ? "ml-[15%]" : "ml-[5%]"}  flex-grow h-full overflow-y-auto scrollbar-custom`}>
          <Routes location={location}>
            <Route path="/user/note-box" element={<TweetBox />} />
            <Route path="/user/doc-box" element={<HeroSection />} />
            <Route path="/user/image-box" element={<HeroSection />} />
            <Route path="/user/video-box" element={<HeroSection />} />
            <Route path="/user/bookmark-box" element={<HeroSection />} />
            <Route path="/user/tag-box" element={<HeroSection />} />
            <Route path="/user/link-box" element={<HeroSection />} />
            <Route path="/user/edit-profile" element={<HeroSection />} />
          </Routes>
        </div>
      </main>

      {isLoggedIn && (
        <main className="w-full justify-center items-center dark:bg-[#121212] bg-[#f5f5f5] scrollbar-custom overflow-x-hidden">
          <Navbar />
          <Routes location={location}>
            <Route path="/" element={<HeroSection />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/contact" element={<SignupForm />} />
          </Routes>
        </main>
      )}
    </>
  );
}

export default App;
