function Experiencia({alVolver}){
    return (
        <div>
            <section>
            <h2>Experiencia laboral</h2>
            <ul>
                <li>Asesor de ventas call center</li>
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

export default Experiencia;