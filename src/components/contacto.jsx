import { useState } from 'react'

function Contacto(){
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
            alert('Hubo un problema al guardar el mensaje en el servidor.');
        }
    }catch (error) {
        console.error('Error al conectar con el servidor:', error);
        alert('No se pudo conectar con el servidor backend. Asegúrese que esté corriendo.')
    }
};

return (
    <div className='seccion'>
    <h2>Contacto</h2>

    {mensajeEnviado &&(
    <div className="msj">
        ¡ Su mensaje ha sido enviado correctamente !
    </div>
    )}

    <form onSubmit={manejarEnvio} className='formulario-contacto'>
        <div className='form-group'>
            <label >Nombre:</label> <br />
            <input
                class='input_texto'
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={manejarCambio}
                required
                />
        </div>

        <div className='form-group'>
            <label >Correo Electrónico:</label> <br />
            <input
                class='input_texto'
                type="email"
                name="correo"
                value={formData.correo}
                onChange={manejarCambio}
                required
                />
        </div>

        <div className='form-group form-group-radios'>
        <p className='pregunta-servicios'>¿Requiere mis servicios de desarrollador?</p>
            <div className='radio-options'>
                <label className='radio-label'>
                    <input
                    type="radio"
                    name="checklist"
                    value="true"
                    checked={formData.checklist === 'true'}
                    onChange={manejarCambio}
                    required
                />
                Sí
            </label>

                <label className='radio-label'>
                    <input
                    type="radio"
                    name="checklist"
                    value="false"
                    checked={formData.checklist === 'false'}
                    onChange={manejarCambio}
                    />
                    No
                </label>
            </div>
        </div>

        <div className='form-group'>
            <label htmlFor='descripcion'>Cuentame la necesidad:</label> <br />
            <textarea
                id='descripcion'
                name="descripcion"
                className='descripcion_textarea'
                value={formData.descripcion}
                onChange={manejarCambio}
                rows='5'
                required
                placeholder='Describe brevemente tu proyecto o consulta...'
            />
        </div>

        <div className='form-group-btn'>
            <button className='btn_send' type='submit'>Enviar Mensaje</button>
        </div>
    </form>
    </div>
);
}

export default Contacto;