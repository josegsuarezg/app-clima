import { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

function App() {
  const [busqueda, setBusqueda] = useState({
      ciudad: '',
      pais: ''    
  });
  const [consulta, setConsulta] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, serError] = useState(false)
  
  const {ciudad, pais} = busqueda

  useEffect(() => {
    const consultarAPI = async () => {
      if(consulta) {
        const appId = '63f1332be03d77f85f9adc834e99f1ad';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        
        setResultado(resultado);
        setConsulta(false)
        if(resultado.cod === "404"){
          serError(true)
        }else {
          serError(false)
        }
      }
    }
    consultarAPI();
  }, [consulta]);
  
  
  return (
    <>
      <Header 
        titulo={'Clima React App'}
      />
            
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsulta={setConsulta}
              />
            </div>
            <div className="col m6 s12">
              {error ? <p className='red error darken-4'>La Ciudad No existe en la Base de Datos</p> : (
              <Clima 
                resultado={resultado}
              />
              )}
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default App
