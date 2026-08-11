function Perfil({alVolver}){
    return (
        <div>
            <header class="Cabecera">
            <p>Gabriel Santiago Melo González</p>
            <a href="https://github.com/GabrielM7766/curriculum-vitae-react">Enlace Github</a>
            </header>
            <section>
                <h2>Perfil profesional</h2>
                <img src="assets/icon.png" alt="pfp" /><br />
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
