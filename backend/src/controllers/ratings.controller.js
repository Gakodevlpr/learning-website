const fs = require('fs');
const path = require('path');
const Rating = require('../models/rating.model');

class RatingsController {
    constructor() {
        this.filePath = path.join(__dirname, '../../data/ratings.json');
        this.ratings = this.loadRatings();
    }

    loadRatings() {
        try {
            if (fs.existsSync(this.filePath)) {
                const data = fs.readFileSync(this.filePath, 'utf8');
                return JSON.parse(data);
            }
            return [];
        } catch (error) {
            console.error('Error al cargar valoraciones:', error);
            return [];
        }
    }

    saveRatings() {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(this.ratings, null, 2));
        } catch (error) {
            console.error('Error al guardar valoraciones:', error);
        }
    }

    hasUserRated(username, isAnonymous, clientIP) {
        const RATE_LIMIT = 24 * 60 * 60 * 1000; // 24 horas

        if (isAnonymous) {
            return this.ratings.some(rating => 
                rating.clientIP === clientIP &&
                (Date.now() - new Date(rating.date).getTime()) < RATE_LIMIT
            );
        }
        return this.ratings.some(rating => rating.username === username && !rating.isAnonymous);
    }

    addRating(data) {
        if (this.hasUserRated(data.username, data.isAnonymous, data.clientIP)) {
            return {
                success: false,
                message: data.isAnonymous 
                    ? 'Solo puedes valorar una vez cada 24 horas'
                    : 'Ya has valorado anteriormente'
            };
        }

        const rating = new Rating(data);
        if (!rating.validate()) {
            return {
                success: false,
                message: 'Valoración inválida'
            };
        }

        this.ratings.push(rating);
        this.saveRatings();
        return { success: true, message: '¡Gracias por tu valoración!' };
    }

    getStats() {
        const totalRatings = this.ratings.length;
        const averageStars = totalRatings > 0
            ? this.ratings.reduce((acc, curr) => acc + curr.stars, 0) / totalRatings
            : 0;

        return {
            total: totalRatings,
            average: averageStars.toFixed(1),
            distribution: {
                1: this.ratings.filter(r => r.stars === 1).length,
                2: this.ratings.filter(r => r.stars === 2).length,
                3: this.ratings.filter(r => r.stars === 3).length,
                4: this.ratings.filter(r => r.stars === 4).length,
                5: this.ratings.filter(r => r.stars === 5).length
            }
        };
    }
}

module.exports = new RatingsController();