import axios from "axios";
import {createContext, useContext, useState, useReducer, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []
export const initialState = {theme: "", data: []}

const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dentist, setDentista] = useState([])
  const [favs, setFavs] = useState(initialFavState)
  const [theme, setTheme] = useState(true)
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(url)
    .then(res => setDentista(res.data.results))
    .catch(err => console.log(err))
}, [])

useEffect(() => {
  localStorage.setItem('favs', JSON.stringify(favs))
}, [favs])

  return (
    <ContextGlobal.Provider value={{dentist, favs, setFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default utils

export const useContextGlobal = () => useContext(ContextGlobal)