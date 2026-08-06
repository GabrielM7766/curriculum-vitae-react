import { useState } from 'react'

function Contacto({ alVolver }){
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        checklist: '',
        descripcion: ''
});

const manejarCambio = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Datos listos para enviar:', formData);
};

return (
    <div>
    <h2>Contacto</h2>

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