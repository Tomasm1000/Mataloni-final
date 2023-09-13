import React, { useEffect } from 'react'
import { useState } from 'react'

import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [usuario, setUsuario] = useState({})
  
  const {favs, setFavs} = useContextGlobal()
  console.log(favs)
  const {id} = useParams()
  console.log(id)

  const url ='https://jsonplaceholder.typicode.com/users/:id' ;
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setUsuario(data))

  }, [])
  
  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h3>Nombre: {usuario.name}</h3>
      <h3>Correo electronico: {usuario.email}</h3>
      <h3>Telefono: {usuario.phone}</h3>
      <h3>Website: {usuario.website}</h3>
        <img src={usuario.image} alt="" />
        <button onClick={() => setFavs([...favs, usuario])}>⭐</button>
    </>
  )
}

export default Detail