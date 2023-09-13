import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [lista, setLista] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/users'

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home