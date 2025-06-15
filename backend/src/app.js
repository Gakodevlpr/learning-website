const express = require('express');
const cors = require('cors');
const ratingsRoutes = require('./routes/ratings.routes');

const app = express();

// Configuración de seguridad básica
app.use((req, res, next) => {
    // Prevenir clickjacking
    res.setHeader('X-Frame-Options', 'DENY');
    // Prevenir MIME type sniffing
    res.setHeader('X-Content-Type-Options', 'nosniff');
    // Habilitar protección XSS en navegadores modernos
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

// Middleware para logging de todas las peticiones
app.use((req, res, next) => {
    console.log('Nueva petición:', {
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: req.body
    });
    next();
});

// Configurar CORS para permitir peticiones solo desde el frontend
app.use(cors({
    origin: ['http://localhost:5173', 'https://learning-website-frontend.onrender.com'],
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Accept']
}));

// Middleware para parsear JSON con límite de tamaño
app.use(express.json({ limit: '10kb' }));

// Middleware para manejar errores de parseo JSON
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('Error de parseo JSON:', err);
        return res.status(400).json({ 
            success: false, 
            message: 'JSON inválido en la petición' 
        });
    }
    next();
});

// Montar las rutas
app.use(ratingsRoutes);

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
    console.log('Ruta no encontrada:', req.method, req.url);
    res.status(404).json({
        success: false,
        message: 'Ruta no encontrada'
    });
});

// Manejador global de errores
app.use((err, req, res, next) => {
    console.error('Error no manejado:', err);
    res.status(500).json({
        success: false,
        message: 'Error interno del servidor'
    });
});

module.exports = app;