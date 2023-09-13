import React from "react";


const Card = ({usuario }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    setFavs([...Favs, usuario.id])
  }

  return (
    <div className="card">
      /* En cada card deberan mostrar en name - username y el id */
      <Link to={'/dentist/' + usuario.id}>
         
        <h3>{usuario.name}</h3>
        <img src={usuario.image} alt="" />
        <h3>{usuario.username}</h3>
        <h3>{usuario.id}</h3>
        
        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav}>star</button>
    </div>
  );
};

export default Card;
