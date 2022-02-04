import React from 'react';

const Clima = ({resultado}) => {
    // °K = -273.15 °C
  
  const {name, main}= resultado
  
  return (
  <>
    {name && (
      <div className="card-panel white col s12">
          <div className="black-text">
            <h2>El Clima de {name} es</h2>
            <p className='temperatura'>{(main.temp-273.15).toFixed(2)}°C</p>
            <p>Sensación Térmica de: {(main.feels_like-273.15).toFixed(2)}°C</p>
            <p>Humedad: {main.humidity}%</p>
            <p>Temperatura Máxima: {(main.temp_max-273.15).toFixed(2)}°C</p>
            <p>Temperatura Mínima: {(main.temp_min-273.15).toFixed(2)}°C</p>
          </div>
        </div>
    )}
  </>
  );
};

export default Clima;
