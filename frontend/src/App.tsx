import "@/index.css";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import SignupForm from "@/components/modal/SignupForm";
import LoginForm from "@/components/modal/LoginForm";
import { useAuthContext } from "@/context/AuthContext";
import UserRoutes from "./components/user/UserRoutes";
import React from "react";
import UnauthenticatedPage from "./components/UnauthenticatedPage";
import PageNotFound from "./components/PageNotFound";
import ViewSection from "./sections/ViewSection";
import { Toaster } from "./components/ui/toaster";
import ViewGroupedSection from "./sections/ViewGroupedSection";
import ForgotPasswordModal from "./components/modal/ForgotPasswordModal";
import ContactSection from "./sections/contactSection";

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
  
  return (
    <>
      {!isLoggedIn ? (
        <main className="w-full justify-center items-center dark:bg-[#121212] bg-[#f5f5f5] scrollbar-meteor overflow-x-hidden">
          <Navbar />
          <Routes location={location}>
            <Route path="/" element={<HeroSection />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/reset-password" element={<ForgotPasswordModal />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/view-card/:cardId" element={<ViewSection />} />
            <Route path="/view-cards/:groupedKey" element={<ViewGroupedSection />} />
            <Route path="/user/*" element={<UnauthenticatedPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <Toaster/>
        </main>
      ) : (
        <main className="w-full flex dark:bg-[#121212] bg-[#f5f5f5] relative min-h-screen scrollbar-meteor overflow-x-hidden">
          {isUserRoute ? "" : <Navbar />}
          <Routes location={location}>
            <Route path="/" element={<HeroSection />} />
            <Route path="/reset-password" element={<ForgotPasswordModal />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/view-card/:cardId" element={<ViewSection />} />
            <Route path="/view-cards/:groupedKey" element={<ViewGroupedSection />} />
            <Route path="/user/*" element={<UserRoutes />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <Toaster/>
        </main>
      )}
    
    </>
  );
}

export default App;
