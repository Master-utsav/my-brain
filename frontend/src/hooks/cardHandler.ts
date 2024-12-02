import { useState } from "react";
import axios from "axios";
import { CONTENT_API } from "@/lib/env";
import { useContentContext } from "@/context/ContentContext";
import { useToast } from "./use-toast";

const useCardHandler = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<any>(null);
  const { loadContentData } = useContentContext();
  const {toast} = useToast();

  const cardHandler = async (apiEndpoint: string , token: string) => {
    if(!token){
        setError('No token provided');
    }
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${CONTENT_API}/${apiEndpoint}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResponseData(response.data);
      if (response.data.success) {
        await loadContentData();
        toast({
          title: response.data.message
        })
      } else {
        toast({
          title: response.data.message,
          variant: "destructive"
        })
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message || "An error occurred while adding content"
      );
      toast({
        title: err.response?.data?.message || "An error occurred while adding content",
        variant: "destructive"
      })
    } finally {
      setLoading(false);
    }
  };

  return { cardHandler, loading, error, responseData };
};

export default useCardHandler;
