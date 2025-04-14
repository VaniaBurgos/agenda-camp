import React, { useState } from 'react';
import './App.css';

function App() {
  const [camp, setCamp] = useState([]);
  const [nombre, setNombre] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [fecha, setFecha] = useState("");

  const agregarCamp = () =>{
    if (!nombre || !plataforma || !fecha) return;
    const nuevaCamp = {
      id: Date.now(),
      nombre,
      plataforma,
      fecha
    };

    setCamp([...camp, nuevaCamp]);
    setNombre("");
    setPlataforma("");
    setFecha("");
  };

  return(
    <div className='app'>

      <div className='form'>
        <input type='text' placeholder='Nombre de la campaña' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
      
        <select value={plataforma} onChange={(e) => setPlataforma(e.target.value)}>
          <option value="">¿En qué plataforma harás la campaña?</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="TikTok">Tik Tok</option>
        </select>

        <input type='date' value={fecha} onChange={(e) => setFecha(e.target.value)}/>

        <button onClick={agregarCamp}>Agregar campaña</button>
      </div>

        <ul>
          {camp.map((c) => (
            <li key={c.id}>
              <strong>{c.nombre}</strong>en {c.plataforma} - {c.fecha} 
            </li>
          ))}  
        </ul>
    </div>
  );
}

export default App
