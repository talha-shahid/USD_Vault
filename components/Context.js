import React from 'react'
import { useContext, useReducer } from 'react';
import reducer from './reducer'
import { useEffect } from 'react';

let API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&search='

//initial state
const initialState={
    search: "bitcoin",
    hits:[],
}

//creating a context
const AppContext = React.createContext();

//context provider
const AppProvider = ({children})=>{
    //useReducer
    const [state, dispatch] = useReducer(reducer, initialState)


// Fetch API Data
    const fetchApiData = async (url) =>{
      try{
        const res = await fetch(url)
        const data = await res.json()

        // console.log(`data:`)
        // console.log(data)

        dispatch({type: 'GET_STORIES', payload: {hits: data.name}})
      }
      catch(error){
        console.log(error)
      }
    }

//saerch
    const searchPost = (search) =>{
      dispatch({type: "SEARCH_QUERY", payload: search})
    }

//useEffect
    useEffect(()=>{
      fetchApiData(`${API}${state.search}`)
    }, [state.search])


    return (
        <AppContext.Provider value={{ ...state, searchPost }}>
            {children}
        </AppContext.Provider>
        )
}

//custom hook creation
const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}