import {useCallback, useState} from "react";

export default function useFetch(reqObj, cb) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (body) => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch('http://localhost:3000/' + reqObj.url, {
                method: reqObj.method || 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body ? JSON.stringify({data: body}) : null
            });
            if (res.ok) {
                const data = await res.json();
                setData(data.data);
                cb && cb();
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        data,
        loading,
        error,
        fetchData
    };
}