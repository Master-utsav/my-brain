import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { getVerifiedToken, setTokenCookie } from "@/lib/cookieService";
import { getUserData as fetchUserData } from "@/lib/authService";
import { defaultUserData } from "@/constants";

export interface UserDataProps {
  id: string;
  firstName?: string;
  lastName?: string;
  fullName: string;
  email: string;
  userName: string;
  profileImageUrl?: string;
  emailVerificationStatus: boolean;
  phoneNumber?: {
    code: string;
    number: string;
  };
  phoneNumberVerificationStatus?: boolean;
  address?: string;
  bio?: string;
  userDob?: string;
  avatarFallbackText: string;
  uploadedContent?: string[];
  bookmarks?: string[];
  groupedKey?: string;
}

interface AuthContextType {
  userData: UserDataProps;
  setUserData: (user: UserDataProps) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserDataProps>(defaultUserData);

  const loadUserData = useCallback(async () => {
    console.log("getusercalled")
    try {
      const token = getVerifiedToken();
      if (token) {
        const fetchedUserData = await fetchUserData();

          fetchedUserData && setUserData(fetchedUserData);
          setIsLoggedIn(true);
        }
      }
     catch (error) {
      console.error("Error loading user data:", error);
    }
  }, []);

  useEffect(() => {
    const handleTokenFromUrl = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const tokenFromUrl = urlParams.get("token");

      if (tokenFromUrl) {
        setTokenCookie(tokenFromUrl);
        const verifiedToken = getVerifiedToken();

        if (verifiedToken) {
          await loadUserData(); // Load user data after setting the token
          setIsLoggedIn(true);
        }

        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }
    };

    handleTokenFromUrl();
  }, [loadUserData]);

  useEffect(() => {
    if (!isLoggedIn) {
      loadUserData();
    }
  }, [isLoggedIn, loadUserData]);

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
