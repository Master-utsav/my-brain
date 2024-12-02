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
  const addContent = async (formData: FormData, token: string) => {
    setLoading(true);
    setError(null);

    if (!token) {
      setError("No token provided");
    }
    try {
      const response = await axios.post(
        `${CONTENT_API}/add-content`,
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
        navigate("/user/all-content");
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

  return { addContent, loading, error, responseData };
};

export default useAddContent;
