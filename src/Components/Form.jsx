import React from "react";


const Form = () => {

  const [dentist, setDentist] = useState({
    nombre: '',
    email: ''
})
const [show, setShow] = useState(false)
const [error, setError] = useState(false) 

const handleSubmit = () => {
    if(dentist.nombre.length > 5 && dentist.email.length > 5){
        setShow(true)
        setError(false)
    } else {
        setError(true)
    }
}

console.log(dentist)
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
      <label>Nombre completo</label>
        <input type="text" value={dentist.nombre}
            onChange={(event) => setDentist({...dentist, nombre: event.target.value})}
        />
        <label>Correo electronico</label>
        <input type="text" value={dentist.email}
            onChange={(event) => setDentist({...dentist, email: event.target.value})}
        />
        <button onClick={handleSubmit}>Enviar</button>
        {show && <h3>Gracias {nombre}, te contactaremos cuando antes vía mail</h3>}
        {error && <h4 style={{color: 'red'}}>Por favor verifique su información nuevamente</h4>}
      </form>
    </div>
  );
};

export default Form;
