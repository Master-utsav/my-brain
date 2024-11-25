import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import axios from "axios";
import { getVerifiedToken } from "@/lib/cookieService";
import { AllContentInterface } from "@/constants";
import { CONTENT_API } from "@/lib/env";

interface ContentContextType {
  contentData: AllContentInterface[] | AllContentInterface;
  setContentData: (data: AllContentInterface | AllContentInterface[]) => void;
  loadContentData: () => Promise<void>;
}

export const ContentContext = createContext<ContentContextType | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useContentContext = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error(
      "useContentContext must be used within a ContentContextProvider"
    );
  }
  return context;
};

export const ContentContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [contentData, setContentData] = useState<
    AllContentInterface[] | AllContentInterface
  >([]);

  const loadContentData = useCallback(async () => {
    try {
      const verifiedToken = getVerifiedToken();

      const response = await axios.get(
        `${CONTENT_API}/get-content`,
        {
          headers: {
            Authorization: `Bearer ${verifiedToken}`,
          },
        }
      );

      setContentData(response.data.data);
    } catch (error) {
      console.error("Error loading content data:", error);
      setContentData([]);
    }
  }, []);

  useEffect(() => {
    loadContentData();
  }, [loadContentData]);

  return (
    <ContentContext.Provider
      value={{
        contentData,
        setContentData,
        loadContentData,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
