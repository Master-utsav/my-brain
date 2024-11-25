import { CONTENT_API } from '@/lib/env';
import { useState } from 'react';

const useAddContent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const addContent = async (fields: { [x: string]: string | Blob; }, token: any) => {
    setLoading(true);
    setError(null);

    try {
      // Create a new FormData object
      const formData = new FormData();
      
      // Append fields to the FormData object
      for (const key in fields) {
        if (fields[key] !== undefined) {
          formData.append(key, fields[key]);
        }
      }

      const response = await fetch(`${CONTENT_API}/add-content`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to add content');
      }

      const data = await response.json();
      setResponseData(data);
    } catch (err : any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { addContent, loading, error, responseData };
};

export default useAddContent;
