import {useEffect, useState} from 'react';
import axios from "axios";

function useFetch(url:string) {

    const [data,setData] = useState(null); 
    const [loading,setLoading] = useState(false); 
    const [error,setError] = useState(null); 


    useEffect(() => { 
      setLoading(true);
      axios.get(url)
      .then((responce)=>{
        setData(responce.data);
      })
      .catch((err)=>{
        setError(err);
      })
      .finally(()=>{
        setLoading(false);
      })      
        
    },[]);

  return {data, loading,error}
}


export default useFetch;  