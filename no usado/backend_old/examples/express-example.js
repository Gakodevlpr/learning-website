const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ejemplo de ruta GET
app.get('/api/ejemplo', (req, res) => {
    res.json({ mensaje: 'Esto es un ejemplo de GET' });
});

// Ejemplo de ruta POST
app.post('/api/ejemplo', (req, res) => {
    const datos = req.body;
    res.json({ 
        mensaje: 'Datos recibidos correctamente',
        datos: datos 
    });
});

// Ejemplo de ruta con parámetros
app.get('/api/ejemplo/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensaje: `Solicitaste el ID: ${id}` });
});

// Ejemplo de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Algo salió mal!',
        detalles: err.message 
    });
});

const puerto = 3000;
app.listen(puerto, () => {
    console.log(`Servidor de ejemplo corriendo en http://localhost:${puerto}`);
});