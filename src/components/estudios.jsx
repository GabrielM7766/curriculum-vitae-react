function Estudios({alVolver}){
    return (
        <div>
            <section>
            <h2>Logros académicos</h2>
            <ul>
                <li>Tecnólogo en Análisis y Desarrollo de Software</li>
            </ul>
            <ul>
                <li>Técnico en Mantenimiento de equipos de computo</li>
            </ul>
            <nav>
                <button onClick={() => alVolver('menu')}>
                ← Volver
                </button>
            </nav>
            </section>
        </div>
    );
}

export default Estudios;
