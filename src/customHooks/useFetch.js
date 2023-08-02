import { useState, useEffect } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        fetch(url)
        .then(res =>{
        if(!res.ok){
            throw Error("Couldn't fetch the error")
        }
        return res.json();
        })
        .then(data =>{
        setData(data);
        setIsLoading(false);
        setError(null);
        })
        .catch(err => {
        setError(err.message);
        setIsLoading(false);
        })
    },[url])
    return {data, isLoading, error, setData};
};


export default useFetch;