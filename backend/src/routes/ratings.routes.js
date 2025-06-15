const express = require('express');
const ratingsController = require('../controllers/ratings.controller');

const router = express.Router();

// GET /ratings - Obtener todas las valoraciones
router.get('/ratings', (req, res) => {
    console.log('Recibida petición GET /ratings');
    const result = ratingsController.getAllRatings();
    
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(500).json(result);
    }
});

// POST /ratings - Añadir una nueva valoración
router.post('/ratings', (req, res) => {
    console.log('Recibida petición POST /ratings');
    console.log('Body:', req.body);
    
    const clientIP = req.ip || req.socket.remoteAddress;
    console.log('IP del cliente:', clientIP);
    
    const result = ratingsController.addRating({ ...req.body, clientIP });
    console.log('Resultado:', result);
    
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(400).json(result);
    }
});

// GET /ratings/stats - Obtener estadísticas de valoraciones
router.get('/ratings/stats', (req, res) => {
    console.log('Recibida petición GET /ratings/stats');
    
    const result = ratingsController.getStats();
    console.log('Estadísticas:', result);
    
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(500).json(result);
    }
});

module.exports = router;