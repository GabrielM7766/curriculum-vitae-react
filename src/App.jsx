import { useState } from 'react'
import Inicio from './components/inicio.jsx'
import Perfil from './components/perfil.jsx'
import Estudios from './components/estudios.jsx';
import Experiencia from './components/experiencia.jsx';
import Habilidades from './components/habilidades.jsx';
import Contacto from './components/contacto.jsx';
import './App.css'

function App() {
  const [seccion, setSeccion] = useState('inicio');

  const renderSeccion = () => {
    switch (seccion) {
      case 'inicio':
        return<Inicio />
      case 'perfil':
        return <Perfil />
      case 'estudios':
        return <Estudios />
      case 'experiencia':
        return <Experiencia />
      case 'habilidades':
        return <Habilidades />
      case 'contacto':
        return <Contacto />
      default:
        return null;
    }
  };
  return(
        <div className='app-container'>
          <header className='Cabecera'>
            <button onClick={() => setSeccion('inicio')}>
              Inicio
            </button>

          <span className='header_txt'>
            Gabriel Santiago Melo González
          </span>

          <a className='link-github' href="https://github.com/GabrielM7766/curriculum-vitae-react" target='_blank' rel="noreferrer">
            Enlace Github
          </a>
          </header>

        <div className='app-body' style={{ display: 'flex'}}>

        <div className='sidebar-main'>
          <nav>
            <button onClick={() => setSeccion('perfil')}>
              Perfil profesional
            </button>

            <button onClick={() => setSeccion('estudios')}>
              Logros académicos
            </button>

            <button onClick={() => setSeccion('experiencia')}>
              Experiencia laboral
            </button>

            <button onClick={() => setSeccion('habilidades')}>
              Habilidades
            </button>

            <button onClick={() => setSeccion('contacto')}>
              Contacto
            </button>
          </nav>
        </div>

      <main className='content-main'>
        {renderSeccion()}
      </main>

      </div>
      <footer>
        <center>
            <p>Teléfono: 3152038741 - Correo: gabrielmeloxvi903@gmail.com</p>
          </center> 
      </footer>
    </div>
  );
}      

export default App;