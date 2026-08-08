const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


const MONGO_URI = 'mongodb+srv://gabrielm78_db_user:gBsSmRgCpSjeje@cluster0.iwdcipa.mongodb.net/?appName=Cluster0';

mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectado con éxito a MongoDB Atlas (Nube)'))
    .catch((err) => console.error('Error al conectar', err));

// Esquema del Formulario
const contactoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    checklist: { type: Boolean, default: 'yes' },
    descripcion: { type: String, required: true },
});

const Contacto = mongoose.model('Contacto', contactoSchema);

// Ruta para recibir datos desde React
app.post('/api/contacto', async (req, res) => {
    try {
    const nuevoContacto = new Contacto(req.body);
    await nuevoContacto.save();
    res.status(201).json({ mensaje: 'Mensaje guardado en MongoDB Atlas' });
    } catch (error) {
    console.error('Error al guardar:', error);
    res.status(500).json({ error: 'No se pudo guardar el mensaje' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});