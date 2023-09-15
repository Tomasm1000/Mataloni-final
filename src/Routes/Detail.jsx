import React, { useEffect } from 'react'
import { useState } from 'react'

import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {state, dispatch} = useContextGlobal()
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const {name, email, phone, website} = state.char
    console.log(id)

  const url ='https://jsonplaceholder.typicode.com/users/:id' ;
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        dispatch({type: 'GET_CHAR', payload: data})
        setLoading(false)
    })
}, [])
  
  return (
    <div>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {loading ? 'Cargando...' : <>

      <h1>Detail Dentist id </h1>
        <h3>Nombre: {name}</h3>
      <h3>Correo electronico: {email}</h3>
      <h3>Telefono: {phone}</h3>
      <h3>Website: {website}</h3>
        <img src={usuario.image} alt="" />
        <button onClick={() => setFavs([...favs, usuario])}>⭐</button>
        </>}
      
    </div>
  )
}

export default Detail