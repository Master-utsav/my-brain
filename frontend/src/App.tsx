import "@/index.css";
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
import ContactSection from "./sections/ContactSection";
import RouteNavItems from "./components/RouteNavItems";
import PersonalLinksNavitems from "./components/PersonalLinksNavitems";
import LandingPage from "./pages/LandingPage";

function App() {
  const location = useLocation();
  const { isLoggedIn } = useAuthContext();
  const [isUserRoute, setIsUserRoute] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isLoggedIn && location.pathname.startsWith("/user")) {
      setIsUserRoute(true);
    } else if (isLoggedIn && !location.pathname.startsWith("/user")) {
      setIsUserRoute(false);
    }
  }, [isLoggedIn, location.pathname]);

  return (
    <>
      {!isLoggedIn ? (
        <main className="w-full justify-center items-center dark:bg-[#121212] bg-[#f5f5f5] scrollbar-meteor overflow-x-hidden">
          <Navbar />
          <div className="w-fit  fixed left-2 bottom-2 flex justify-start items-start z-50">
            {<RouteNavItems />}
          </div>
          <div className="w-fit  fixed right-2 bottom-2 sm:flex hidden justify-start items-start z-50">
            {<PersonalLinksNavitems />}
          </div>

          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/reset-password" element={<ForgotPasswordModal />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/community" element={<ContactSection />} />
            <Route path="/plans" element={<ContactSection />} />
            <Route path="/about" element={<ContactSection />} />
            <Route path="/view-card/:cardId" element={<ViewSection />} />
            <Route
              path="/view-cards/:groupedKey"
              element={<ViewGroupedSection />}
            />
            <Route path="/user/*" element={<UnauthenticatedPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <Toaster />
        </main>
      ) : (
        <main className="w-full flex dark:bg-[#121212] bg-[#f5f5f5] relative min-h-screen scrollbar-meteor overflow-x-hidden">
          {isUserRoute ? "" : <Navbar />}
          <div className="sm:w-fit w-full  fixed left-0 sm:left-2 bottom-2 flex justify-center items-center z-50">
            {!isUserRoute && <RouteNavItems />}
          </div>
          <div className="w-fit  fixed right-2 bottom-2 sm:flex hidden justify-center items-center z-50">
            {!isUserRoute && <PersonalLinksNavitems />}
          </div>
           
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/reset-password" element={<ForgotPasswordModal />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/community" element={<ContactSection />} />
            <Route path="/plans" element={<ContactSection />} />
            <Route path="/about" element={<ContactSection />} />
            <Route path="/view-card/:cardId" element={<ViewSection />} />
            <Route
              path="/view-cards/:groupedKey"
              element={<ViewGroupedSection />}
            />
            <Route path="/user/*" element={<UserRoutes />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <Toaster />
        </main>
      )}
    </>
  );
}

export default App;
