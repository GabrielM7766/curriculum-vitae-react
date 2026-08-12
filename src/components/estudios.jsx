function Estudios(){
    return (
        <div className="seccion">
            <h2>Logros académicos</h2>
            <div className="contenedor-tarjetas">
                <div className="tarjeta-informacion">
                    <img src="/src/assets/adso.png" alt="ADSO" className="tarjeta-img" />
                    <div className="tarjeta-contenido">
                        <h3>Tecnólogo en Análisis y Desarrollo de Software</h3>
                        <h4>SENA</h4>
                        <p>Formación superior enfocada en metodologías ágiles, bases de datos y desarrollo web.</p>
                    </div>
                </div>
            <div className="tarjeta-informacion">
                <img src="/src/assets/mantenimiento.png" alt="Mantenimiento" className="tarjeta-img"/>
                <div className="tarjeta-contenido">
                    <h3>Técnico en Mantenimiento de equipos de cómputo</h3>
                    <h4>Institución Académica</h4>
                    <p>Mantenimiento preventivo, correctivo y configuración de infraestructura local.</p>
                </div>
            </div>

        </div>
    </div>
    );
}
export default Estudios;
