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
          <header class="Cabecera">
            <p>Gabriel Santiago Melo González -- 
            <a href="https://github.com/GabrielM7766/curriculum-vitae-react">Enlace Github</a></p>
          </header>
        <div>
            <h1>Gabriel Santiago Melo González</h1>
            <p>Aprendiz en Desarrollo de Software</p>
        </div>
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

  <link rel="stylesheet" href="../src/App.css" />
export default App;