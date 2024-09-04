import axios from "axios";
import { useEffect, useState } from "react";

const useUserData = (email) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://smarsebaserver.onrender.com/users/${email}`);
        setData(response.data.data); // Adjust this according to your data structure
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [email]);

  return { data, loading, error };
};

export default useUserData;
