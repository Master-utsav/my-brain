import { useState } from "react";
import axios from "axios";
import { CONTENT_API } from "@/lib/env";
import { useToast } from "./use-toast";
import { useContentContext } from "@/context/ContentContext";
import { getUserData as fetchUserData } from "@/lib/authService";
import { useAuthContext } from "@/context/AuthContext";

const useGroupContent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess , setIsSuccess] = useState<boolean>(false);
  const [key , setKey] = useState<string>("")
  const [responseData, setResponseData] = useState<any>(null);
  const {loadContentData} = useContentContext(); 
  const {toast} = useToast();
  const {setUserData} = useAuthContext();

  const groupContent = async (cardIds: string[], token: string) => {
    setLoading(true);

    setError(null);
    let API_URL =  `${CONTENT_API}/make-share-bundle`
    
    if (!token) {
      setError("No token provided");
    }
    
    try {
      const response = await axios.post(
        API_URL,
        {cardIds},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setResponseData(response.data);
      if (response.data.success) {
        toast({
          title: response.data.message
        })
        setKey(response.data.groupedkey)
        setIsSuccess(true);
        await loadContentData();
        const fetchedUserData = await fetchUserData();
        fetchedUserData && setUserData(fetchedUserData);
        
      } else {
        toast({
          title: response.data.message,
          variant: "destructive",
        })
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message || "An error occurred while adding content"
      );
      toast({
        title: err.response?.data?.message || "An error occurred while adding content",
        variant: "destructive",
      })
    } finally {
      setLoading(false);
    }
  };
  return { groupContent, loading, error, responseData , isSuccess, key};
};

export default useGroupContent;
