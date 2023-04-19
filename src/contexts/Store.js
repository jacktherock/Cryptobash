import React, { useEffect, useContext, useReducer } from 'react'
import { getCoins, getArticles } from '../network/agent';

const ApiContext = React.createContext();

const initialState = {
    coins: [],
    loading: true,
    articles: [],
    error: false
}

const globalReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loading: action.data }
        case 'SET_COINS':
            return { ...state, coins: action.data }
        case 'SET_ARTICLES':
            return { ...state, articles: action.data }
        case 'SET_ERROR':
            return { ...state, error: action.data }
    }
    return state
}

const MyStore = ({ children }) => {

    const [state, dispatch] = useReducer(globalReducer, initialState);

    useEffect(() => {

        getCoins().then(data => {
            dispatch({ type: 'SET_LOADING', data: true });
            dispatch({ type: 'SET_COINS', data: data.coins });
            dispatch({ type: 'SET_LOADING', data: false });
        }).catch(err => dispatch({ type: 'SET_ERROR', data: err }));

        getArticles().then(data => {
            dispatch({ type: 'SET_LOADING', data: true });
            dispatch({ type: 'SET_ARTICLES', data: data.news });
            dispatch({ type: 'SET_LOADING', data: false });
        }).catch(err => dispatch({ type: 'SET_ERROR', data: err }));

    }, []);

    // Write custom functions here
    // const load = (data) => {
    //     dispatch({ type: 'SET_LOADING', data: data })
    // }

    return (
        //  Pass the state and the custom functions to the context
        // <ApiContext.Provider value={{ ...state, load }}>
        <ApiContext.Provider value={{ ...state }}>
            {children}
        </ApiContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(ApiContext);
}

export { ApiContext, MyStore }