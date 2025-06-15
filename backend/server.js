const app = require('./src/app');

const PORT = process.env.PORT || 3001;

// Middleware para logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    console.log('Rutas disponibles:');
    console.log('- POST /ratings');
    console.log('- GET /ratings/stats');
});