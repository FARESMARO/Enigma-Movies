import { useState, useEffect } from "react";
import axios from "axios";
export default function useFatch(apiPath, queryTerm) {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=05954ce013db039af9150e8e6e66f260&query=${queryTerm}`;
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 100);
      });
  }, [url]);
  return { Data, Loading, error };
}
