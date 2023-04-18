import React, { useState, useEffect, useContext } from 'react'
import { getCoins, getArticles } from '../network/agent';

const ApiContext = React.createContext();

const MyStore = ({ children }) => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getCoins().then(data => {
            setLoading(true)
            setCoins(data.coins)
            setLoading(false)
        });
        getArticles().then(data => {
            setLoading(true)
            setArticles(data.news)
            setLoading(false)
        });
    }, []);

    return (
        <ApiContext.Provider value={{ coins, articles, loading }}>
            {children}
        </ApiContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(ApiContext);
}

export { ApiContext, MyStore }