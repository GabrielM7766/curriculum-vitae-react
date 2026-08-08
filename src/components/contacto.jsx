import { useState } from 'react'

function Contacto({ alVolver }){
    const estadoInicial = {
        nombre: '',
        correo: '',
        checklist: '',
        descripcion: ''
};


const [formData, setFormData] = useState(estadoInicial);
const [mensajeEnviado, setMensajeEnviado] = useState(false);



const manejarCambio = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

async function manejarEnvio (e) {
    e.preventDefault();

    try{
        const respuesta = await fetch('http://localhost:5000/api/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (respuesta.ok) {
            setMensajeEnviado(true);

            setFormData(estadoInicial);

            setTimeout(() => {
                setMensajeEnviado(false);
            },4000);

        } else {
            alert('Hubo un problema al guardar el mensaje');
        }
    }catch (error) {
        console.error('Error al conectar con el servidor:', error);
        alert('No se pudo conectar con el servidor backend')
    }
};

return (
    <div>
    <h2>Contacto</h2>

    {mensajeEnviado &&(
    <div style={{ color: 'green', marginBottom: '15px', fontWeight: 'bold'}}>
        ¡ Su mensaje ha sido enviado correctamente !
    </div>
    )}

    <form onSubmit={manejarEnvio}>
        <div>
            <label>Nombre:</label> <br />
            <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={manejarCambio}
                required
                />
        </div>

        <div>
            <label>Correo Electrónico:</label> <br />
            <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={manejarCambio}
            required
            />
        </div>

        <div>
        <p>¿Requiere mis servicios de desarrollador?</p>
            <label>
                <input
                type="radio"
                name="checklist"
                value="si"
                checked={formData.checklist === 'si'}
                onChange={manejarCambio}
                />
                Sí
            </label>

            <label style={{ marginLeft: '10px' }}>
                <input
                type="radio"
                name="checklist"
                value="no"
                checked={formData.checklist === 'no'}
                onChange={manejarCambio}
                />
                No
            </label>
        </div>

        <div>
            <label>Cuentame la necesidad:</label> <br />
            <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={manejarCambio}
                rows='4'
                required
            />
        </div>

        <button type="submit">Enviar Mensaje</button>
        
        </form>

        <br />
        <button onClick={alVolver}>← Volver al Menú</button>
    </div>
);
}

export default Contacto;