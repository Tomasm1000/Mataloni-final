import React from "react";


const Form = () => {

  const [usuario, setUsuario] = useState({
    nombre: '',
    email: ''
})
const [show, setShow] = useState(false)
const [error, setError] = useState(false) 

const handleSubmit = () => {
    if(usuario.nombre.length > 5 && usuario.email.length > 5){
        setShow(true)
        setError(false)
    } else {
        setError(true)
    }
}

console.log(usuario)
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
      <label>Nombre completo</label>
        <input type="text" value={usuario.nombre}
            onChange={(event) => setUsuario({...usuario, nombre: event.target.value})}
        />
        <label>Correo electronico</label>
        <input type="text" value={usuario.email}
            onChange={(event) => setUsuario({...usuario, email: event.target.value})}
        />
        <button onClick={handleSubmit}>Enviar</button>
        {show && <h3>Gracias {nombre}, te contactaremos cuando antes vía mail</h3>}
        {error && <h4 style={{color: 'red'}}>Por favor verifique su información nuevamente</h4>}
      </form>
    </div>
  );
};

export default Form;
