function Habilidades(){
    return (
        <div className="seccion">
            <h2>Habilidades y Competencias</h2>

            <div className="contenedor-tarjetas">

                <div className="tarjeta-informacion">
                    <img src="/src/assets/competencias.png" alt="Competencias Técnicas" className="tarjeta-img"/>
                    <div className="tarjeta-contenido">
                        <h3>Competencias Técnicas</h3>
                        <p>Dominio de herramientas esenciales para el ciclo de vida del desarrollo de software, maquetación y versionamiento:</p>
                        <div className="habilidades-grid">
                            <span className="badge-habilidad">Python</span>
                            <span className="badge-habilidad">Git & GitHub</span>
                            <span className="badge-habilidad">SQL</span>
                            <span className="badge-habilidad">HTML5 & CSS</span>
                        </div>
                    </div>
                </div>

                <div className="tarjeta-informacion">
                    <img src="/src/assets/blandas.png" alt="Habilidades Blandas" className="tarjeta-img"/>
                    <div className="tarjeta-contenido">
                        <h3>Habilidades Blandas</h3>
                        <p>Capacidades interpersonales que me permiten adaptarme de forma eficaz en entornos laborales dinámicos y colaborar adecuadamente:</p>
                        <div className="habilidades-grid">
                            <span className="badge-habilidad">Trabajo en Equipo</span>
                            <span className="badge-habilidad">Resolución de Problemas</span>
                            <span className="badge-habilidad">Comunicación Asertiva</span>
                            <span className="badge-habilidad">Aprendizaje Autónomo</span>
                        </div>
                    </div>
                </div>

                <div className="tarjeta-informacion">
                    <img src="/src/assets/pasatiempos.png" alt="Pasatiempos Destacados" className="tarjeta-img"/>
                    <div className="tarjeta-contenido">
                        <h3>Pasatiempos Destacados</h3>
                        <p>Actividades e intereses fuera del entorno de desarrollo profesional:</p>
                        <div className="habilidades-grid">
                            <span className="badge-habilidad">Diseño e Ilustración</span>
                            <span className="badge-habilidad">Hardware de Computación</span>
                            <span className="badge-habilidad">Cocina</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Habilidades;