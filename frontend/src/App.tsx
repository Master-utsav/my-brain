import "@/index.css";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import SignupForm from "@/components/SignupForm";
import LoginForm from "@/components/LoginForm";
import { useAuthContext } from "@/context/AuthContext";
import UserRoutes from "./components/user/UserRoutes";
import React from "react";
import UnauthenticatedPage from "./components/UnauthenticatedPage";
import PageNotFound from "./components/PageNotFound";
import ViewSection from "./sections/ViewSection";

function App() {
  const location = useLocation();
  const { isLoggedIn } = useAuthContext();
  const [isUserRoute, setIsUserRoute] = React.useState<boolean>(false);

  // const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoggedIn && location.pathname.startsWith("/user")) {
      setIsUserRoute(true);
    }
    else if (isLoggedIn && !location.pathname.startsWith("/user")) {
        setIsUserRoute(false)
    }
  }, [isLoggedIn, location.pathname]);
  
  console.log(isLoggedIn)
  return (
    <>
      {!isLoggedIn ? (
        <main className="w-full justify-center items-center dark:bg-[#121212] bg-[#f5f5f5] scrollbar-meteor overflow-x-hidden">
          <Navbar />
          <Routes location={location}>
            <Route path="/" element={<HeroSection />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/contact" element={<SignupForm />} />
            <Route path="/view/:cardId" element={<ViewSection />} />
            <Route path="/user/*" element={<UnauthenticatedPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </main>
      ) : (
        <main className="w-full flex dark:bg-[#121212] bg-[#f5f5f5] relative min-h-screen scrollbar-meteor overflow-x-hidden">
          {isUserRoute ? "" : <Navbar />}
          <Routes location={location}>
            <Route path="/" element={<HeroSection />} />
            <Route path="/contact" element={<SignupForm />} />
            <Route path="/view/:cardId" element={<ViewSection />} />
            <Route path="/user/*" element={<UserRoutes />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </main>
      )}
    </>
  );
}

export default App;
