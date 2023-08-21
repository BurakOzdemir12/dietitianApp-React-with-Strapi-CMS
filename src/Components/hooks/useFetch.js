import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = (url) => {
  const [data, setData] = useState(null);
 
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const res = await axios.get(url);
        setData(res.data.data);
      } catch (err) {
        console.log(err)
      }
     
    };
    fetchData();
  }, [url]);

  return { data, };
};

export default useFetch;