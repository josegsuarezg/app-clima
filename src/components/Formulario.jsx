import {useState} from 'react';

const Formulario = ({busqueda, setBusqueda, setConsulta}) => {
  
  const {ciudad, pais} = busqueda
  const [error, setError] = useState(false)
  
  const handleChange = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
    
  }
  const handleSubmit = e => {
    e.preventDefault();
    if(ciudad.trim()==='' || pais.trim()===''){
      setError(true);
      return;
    }
    setError(false);
    setConsulta(true);
  }
  
  return (
      <form
        onSubmit={handleSubmit}
      >
        {error ? <p className='red error darken-4'>Todos los Campos son obligatorios</p> : null}
        <div className="input-field col s12">
          <input 
            type="text" 
            name='ciudad' 
            id='ciudad' 
            value={ciudad}
            onChange={handleChange}
          />
          <label htmlFor='ciudad'>Ciudad</label>
        </div>
        <div className="input-field col s12">
          <select 
            name="pais" 
            id="pais" 
            value={pais}
            onChange={handleChange}
          >
            <option value="">-- Seleccione Pais --</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
          <label htmlFor='pais'>Pais</label>
        </div>
        <div className="input-field col s12">
          <button
            type="submit"
            className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
          >Buscar Clima
          </button>
        </div>
      </form>
  );
};

export default Formulario;
