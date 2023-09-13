import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <div>
      
        <h1>Dentista</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={() => navigate(-1)}>⬅Back</button>
            <Link to='/home'><h4 style={{margin: 10}}>Inicia </h4></Link>
            <Link to='/favs'><h4 style={{margin: 10}}>Destacados</h4></Link>
           
            <Link to='/contact'><h4 style={{margin: 10}}>Contacto</h4></Link>
            
        </div>
        
        
    </div>
  )
}

export default Navbar