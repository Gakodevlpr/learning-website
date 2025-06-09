const express = require('express');
const ratingsController = require('../controllers/ratings.controller');

const router = express.Router();

router.post('/api/ratings', (req, res) => {
    const clientIP = req.ip || req.socket.remoteAddress;
    const result = ratingsController.addRating({ ...req.body, clientIP });
    
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(400).json(result);
    }
});

router.get('/api/ratings/stats', (req, res) => {
    const stats = ratingsController.getStats();
    res.json(stats);
});

module.exports = router;