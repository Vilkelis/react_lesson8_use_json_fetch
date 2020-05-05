import { useState, useEffect, useRef } from 'react';

export default function UseJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const params = useRef({url: url, opts: opts});   
  
  useEffect(() => {
 
    const fetchData = async (urlToFetch, options) => {     
      setLoading(true);
      try {         
        const response = await fetch(urlToFetch, options);
        if (!response.ok) {                     
          throw new Error(response.statusText);
        }         
        const dataJson = await response.json();        
        setData(dataJson);
      } catch(e) {        
        setError(e);
      } finally {
        setLoading(false);
      }
    }; 

    fetchData(params.current.url, params.current.opts);    
  },[]);

  return  [data, loading, error];
};
