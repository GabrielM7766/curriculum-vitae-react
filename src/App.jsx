import { useState } from 'react'
import Perfil from './components/perfil.jsx'
import Estudios from './components/estudios.jsx';
import Experiencia from './components/experiencia.jsx';
import Habilidades from './components/habilidades.jsx';
import Contacto from './components/contacto.jsx';

function App() {
  const [seccion, setSeccion] = useState('menu');
  return(
    <div>
      {seccion === 'menu' && (
        <div>
          <header>
            <h1>Gabriel Santiago Melo González</h1>
            <p>Aprendiz en Desarrollo de Software</p>
          </header>

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
      )}
  
      {seccion === 'perfil' && <Perfil alVolver={() => setSeccion('menu')} />}
      {seccion === 'estudios' && <Estudios alVolver={() => setSeccion('menu')} />}
      {seccion === 'experiencia' && <Experiencia alVolver={() => setSeccion('menu')} />}
      {seccion === 'habilidades' && <Habilidades alVolver={() => setSeccion('menu')} />}
      {seccion === 'contacto' && <Contacto alVolver={() => setSeccion('menu')} />}
      </div>
    );
  }

export default App;