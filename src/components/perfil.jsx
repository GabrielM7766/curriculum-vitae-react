function Perfil({alVolver}){
    return (
        <div>
            <section>
                <h2>Perfil profesional</h2>
                <link rel="stylesheet" href="../assets/icon.png" />
                <p>Estudiante del programa Tecnólogo Análisis y Desarrollo de Software con solidos conocimientos en programación, lógica computacional, y soporte técnico</p>

                <nav>
                    <button onClick={() => alVolver('menu')}>
                    ← Volver
                    </button>
                </nav>
            </section>
        </div>
    );
}

export default Perfil;
