import { useState, useEffect } from "react";
export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
            setData(data);
            setLoading(false);
        })
            .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, [url]);
    return { data, loading, error };
}
