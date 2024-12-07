import { useState } from "react";
import axios from "axios";
import { CONTENT_API } from "@/lib/env";
import { useContentContext } from "@/context/ContentContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "./use-toast";

const useAddContent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<any>(null);
  const { setContentData, loadContentData } = useContentContext();
  const {toast} = useToast();
  const navigate = useNavigate();
  const manageContent = async (formData: FormData, token: string, API_ENDPOINT: string, cardId?: string) => {
    setLoading(true);

    const type: string = (formData.get("type") ?? "").toString();

    setError(null);
    let API_URL =  `${CONTENT_API}/${API_ENDPOINT}`
    if(API_ENDPOINT === "edit-content"){
      if(!cardId){
        setError("cardId is Required");
      }
      else{
        API_URL = `${CONTENT_API}/${API_ENDPOINT}/${cardId}`
      }

    }
    if (!token) {
      setError("No token provided");
    }
    
    try {
      const response = await axios.post(
        API_URL,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResponseData(response.data);
      if (response.data.success) {
        setContentData(response.data.data);
        await loadContentData();
        toast({
          title: response.data.message
        })
        if (type) {
          navigate(`/user/${type}-box`);
        } else {
          navigate(`/user/add-content`);
        }
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
  return { manageContent, loading, error, responseData };
};

export default useAddContent;
