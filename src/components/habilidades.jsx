function Habilidades({alVolver}){
    return (
        <div>
            <section>
            <h2>Habilidades</h2>
            <ul>
                <li>Nivel intermedio de Inglés</li>
            </ul>
            <ul>
                <li>Capacidad de aprendizaje continuo</li>
            </ul>
            <ul>
                <li>Sentido de la responsabilidad para las diferentes tareas asignadas</li>
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

export default Habilidades;