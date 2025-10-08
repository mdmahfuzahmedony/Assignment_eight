import axios from "axios";
import { useEffect, useState } from "react";

const useHeroApp = () => {
  const [app, setApp] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios("/heroapp.json")
      .then((res) => {
        setApp(res.data);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    app,
    error,
    loading,
  };
};

export default useHeroApp;
