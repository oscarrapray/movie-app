import React, { useState } from 'react'
import Error from './Error'
import logo from '../img/search-icon.svg'

export const Search = ({setSearch}) =>{
  
  const [ termino, setTermino] = useState({
    nombre: ''
})
const {nombre} = termino
  const [error, setError] = useState(false);

  const onSearchChange = e => {
    setTermino( {
        ...termino,
        [e.target.name] : e.target.value
    });
    
}
const handleSubmit = e => {
  e.preventDefault();

  // validar
  if(nombre.trim() === '') {
     setError(true);
      return;
  }
  setError(false);
  // enviar el termino de búsqueda hacia el componente principal
  setSearch(nombre);
}

    return(
      <form onSubmit={handleSubmit} className="sec-search">
      <div className="SearchBox">
        <img src={logo} alt = "imagen"  className="SearchIcon"/>
        <input className="SearchInput"
        name = "nombre"
        value ={nombre}
        onChange = {onSearchChange}
        />
      </div>
      <div className="item-btn">
            <input type="submit" value="Buscar" className='btn_enviar'/>
      </div>
      { error ? <Error mensaje="Agrega un término de búsqueda" /> : null }
        </form>
        
    )
}