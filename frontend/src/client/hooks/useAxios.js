import { useState, useEffect } from "react";
import axios from "axios";

// A custom hook that uses axios to fetch data from an API
export const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Set loading to true before making the request
      setLoading(true);
      try {
        // Use axios to make the request
        const response = await axios.get(url);
        // Set the data from the response
        setData(response.data);
      } catch (error) {
        // Set the error from the request
        setError(error);
      } finally {
        // Set loading to false after getting the response or error
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Only run the effect when the url changes

  // Return the data, loading status, and error
  return { data, loading, error };
};
