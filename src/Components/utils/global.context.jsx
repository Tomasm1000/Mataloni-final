import axios from "axios";
import {createContext, useContext, useState, useReducer, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
      case 'GET_DENTISTS':
          return {...state, dentists: action.payload}
      case 'GET_DENTIST':
          return {...state, dentist: action.payload}
      case 'ADD_FAV':
          return {...state, favs: [...state.favs, action.payload]}
      case 'SWITCH_THEME':
          return {...state, theme: !state.theme}
      default:
          throw new Error()
  }
}

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const initialState = {
  chars: [],
  char: {},
  favs: initialFavState,
  theme: true,
}


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState)

  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(url)
    .then(res => {
        console.log(res.data.results)
        dispatch({type: 'GET_DENTISTS', payload: res.data.results})})
    .catch(err => console.log(err))
}, [])

useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
}, [state.favs])


  return (
    <ContextGlobal.Provider value={{dentist, favs, setFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default utils

export const useContextGlobal = () => useContext(ContextGlobal)