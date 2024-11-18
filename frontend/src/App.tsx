import "@/index.css";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import SignupForm from "@/components/SignupForm";
import LoginForm from "@/components/LoginForm";
import { useAuthContext } from "@/context/AuthContext";
import UserRoutes from "./components/user/UserRoutes";
import React from "react";

function App() {
  const location = useLocation();
  const { isLoggedIn } = useAuthContext();
  const [isUserRoute, setIsUserRoute] = React.useState<boolean>(false);

  // const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoggedIn && location.pathname.startsWith("/user")) {
      setIsUserRoute(true);
    }
  }, [isLoggedIn, location.pathname]);

  return (
    <>
      {!isLoggedIn ? (
        <main className="w-full justify-center items-center dark:bg-[#121212] bg-[#f5f5f5] scrollbar-custom overflow-x-hidden">
          <Navbar />
          <Routes location={location}>
            <Route path="/" element={<HeroSection />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/contact" element={<SignupForm />} />
          </Routes>
        </main>
      ) : (
        <main className="w-full flex dark:bg-[#121212] bg-[#f5f5f5] relative min-h-screen scrollbar-custom overflow-x-hidden">
          {isUserRoute ? "" : <Navbar />}
          <Routes location={location}>
            <Route path="/" element={<HeroSection />} />
            <Route path="/contact" element={<SignupForm />} />
            <Route path="/user/*" element={<UserRoutes />} />
          </Routes>
        </main>
      )}
    </>
  );
}

export default App;
