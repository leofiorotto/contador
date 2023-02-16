import './App.css';
import fotoContador from './imagenes/contador.jpg';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';
import { Helmet } from 'react-helmet';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
      setNumClics (numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics (0);
  }



  return (
    <div className="App">
       <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className='logo-contenedor'>
        <img className='logo' src={fotoContador} alt='Logo' />
      </div>

      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Click'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />


      </div>
      
    </div>
  );
}

export default App;
