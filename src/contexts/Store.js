import React, { useState, useEffect, useContext } from 'react'
import { getCoins, getArticles } from '../network/agent';

const ApiContext = React.createContext();

const MyStore = ({ children }) => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)
    const [articles, setArticles] = useState([])
    const [error, setError] = React.useState(null);

    useEffect(() => {
        getCoins().then(data => {
            setLoading(true)
            setCoins(data.coins)
            setLoading(false)
        }).catch(err => setError(err));
        getArticles().then(data => {
            setLoading(true)
            setArticles(data.news)
            setLoading(false)
        }).catch(err => setError(err));
    }, []);

    return (
        <ApiContext.Provider value={{ coins, articles, loading, error }}>
            {children}
        </ApiContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(ApiContext);
}

export { ApiContext, MyStore }