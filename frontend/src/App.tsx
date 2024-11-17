import "@/index.css";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SignupForm from "@/components/SignupForm";
import LoginForm from "./components/LoginForm";
import { useAuthContext } from "./context/AuthContext";
import React from "react";

function App() {
  const location = useLocation();
  const { isLoggedIn } = useAuthContext(); // Assuming you're only checking login status
  const navigate = useNavigate();


  React.useEffect(() => {
    if(isLoggedIn){
      navigate("/user/tweet-box");
    }
  } , [isLoggedIn]);
  
  const memoizedRoutes = React.useMemo(() => {
    if (isLoggedIn) {
      return (
        <>
          <Route path="/user/tweet-box" element={<HeroSection />} />
          <Route path="/user/doc-box" element={<HeroSection />} />
          <Route path="/user/image-box" element={<HeroSection />} />
          <Route path="/user/video-box" element={<HeroSection />} />
          <Route path="/user/bookmark-box" element={<HeroSection />} />
          <Route path="/user/tag-box" element={<HeroSection />} />
          <Route path="/user/link-box" element={<HeroSection />} />
          <Route path="/user/edit-profile" element={<HeroSection />} />
        </>
      );
    }

    return (
      <>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </>
    );
  }, [isLoggedIn]); // Memoize routes based on login status

  return (
    <main className="w-full justify-center items-center dark:bg-[#121212] bg-[#f5f5f5] scrollbar-custom ">
      {isLoggedIn ? "" : <Navbar />}

      <Routes location={location}>
        {memoizedRoutes}

        {/* Default routes */}
        <Route path="/" element={<HeroSection />} />
        <Route path="/contact" element={<SignupForm />} />
      </Routes>
    </main>
  );
}

export default App;
