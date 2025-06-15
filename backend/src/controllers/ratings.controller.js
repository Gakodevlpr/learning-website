const fs = require('fs');
const path = require('path');
const Rating = require('../models/rating.model');

class RatingsController {
    constructor() {
        this.dataDir = path.join(__dirname, '../../data');
        this.filePath = path.join(this.dataDir, 'ratings.json');
        console.log('Ruta del archivo de ratings:', this.filePath);
        this.ensureDataDirectory();
        this.ratings = this.loadRatings();
        this.rateLimits = new Map(); // Para almacenar límites de rate por IP
    }

    ensureDataDirectory() {
        if (!fs.existsSync(this.dataDir)) {
            console.log('Creando directorio data:', this.dataDir);
            fs.mkdirSync(this.dataDir, { recursive: true });
        }
    }

    loadRatings() {
        try {
            console.log('Intentando cargar ratings desde:', this.filePath);
            if (fs.existsSync(this.filePath)) {
                const data = fs.readFileSync(this.filePath, 'utf8');
                console.log('Contenido del archivo:', data);
                
                if (!data.trim()) {
                    console.log('Archivo vacío, inicializando con array vacío');
                    this.saveRatings([]);
                    return [];
                }
                try {
                    const parsed = JSON.parse(data);
                    console.log('Ratings cargados:', parsed);
                    return parsed;
                } catch (parseError) {
                    console.error('Error al parsear el archivo JSON:', parseError);
                    this.saveRatings([]);
                    return [];
                }
            }
            console.log('Archivo no existe, creando nuevo');
            this.saveRatings([]);
            return [];
        } catch (error) {
            console.error('Error al cargar valoraciones:', error);
            return [];
        }
    }

    saveRatings(ratings = this.ratings) {
        try {
            console.log('Guardando ratings:', ratings);
            const data = JSON.stringify(ratings, null, 2);
            fs.writeFileSync(this.filePath, data);
            console.log('Ratings guardados exitosamente');
            return true;
        } catch (error) {
            console.error('Error al guardar valoraciones:', error);
            return false;
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

    isRateLimited(clientIP) {
        const now = Date.now();
        const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto
        const MAX_REQUESTS = 10; // máximo de peticiones por minuto

        if (!this.rateLimits.has(clientIP)) {
            this.rateLimits.set(clientIP, {
                count: 1,
                timestamp: now
            });
            return false;
        }

        const rateData = this.rateLimits.get(clientIP);
        
        // Si ha pasado el tiempo de la ventana, reiniciamos el contador
        if (now - rateData.timestamp > RATE_LIMIT_WINDOW) {
            this.rateLimits.set(clientIP, {
                count: 1,
                timestamp: now
            });
            return false;
        }

        // Si no ha pasado el tiempo y hemos excedido el límite
        if (rateData.count >= MAX_REQUESTS) {
            return true;
        }

        // Incrementamos el contador
        rateData.count++;
        return false;
    }

    addRating(data) {
        try {
            // Verificar rate limit
            if (this.isRateLimited(data.clientIP)) {
                return {
                    success: false,
                    message: 'Demasiadas peticiones. Por favor, espera un momento.'
                };
            }

            // Verificar si el usuario ya ha valorado
            if (this.hasUserRated(data.username, data.isAnonymous, data.clientIP)) {
                return {
                    success: false,
                    message: data.isAnonymous 
                        ? 'Solo puedes valorar una vez cada 24 horas'
                        : 'Ya has valorado anteriormente'
                };
            }

            // Sanitizar y validar datos
            const rating = new Rating(data);
            const validation = rating.validate();
            
            if (!validation.isValid) {
                return {
                    success: false,
                    message: validation.errors.join(', ')
                };
            }

            // Añadir la valoración
            this.ratings.push(rating.toJSON());
            const saved = this.saveRatings();
            
            if (!saved) {
                return {
                    success: false,
                    message: 'Error al guardar la valoración'
                };
            }

            return { 
                success: true, 
                message: '¡Gracias por tu valoración!',
                rating: rating.toJSON()
            };
        } catch (error) {
            console.error('Error al añadir valoración:', error);
            return {
                success: false,
                message: 'Error interno del servidor'
            };
        }
    }

    getStats() {
        try {
            const totalRatings = this.ratings.length;
            const averageStars = totalRatings > 0
                ? this.ratings.reduce((acc, curr) => acc + curr.stars, 0) / totalRatings
                : 0;

            return {
                success: true,
                data: {
                    total: totalRatings,
                    average: averageStars.toFixed(1),
                    distribution: {
                        1: this.ratings.filter(r => r.stars === 1).length,
                        2: this.ratings.filter(r => r.stars === 2).length,
                        3: this.ratings.filter(r => r.stars === 3).length,
                        4: this.ratings.filter(r => r.stars === 4).length,
                        5: this.ratings.filter(r => r.stars === 5).length
                    }
                }
            };
        } catch (error) {
            console.error('Error al obtener estadísticas:', error);
            return {
                success: false,
                message: 'Error al obtener estadísticas'
            };
        }
    }

    getAllRatings() {
        try {
            // Ordenar las valoraciones por fecha, las más recientes primero
            const sortedRatings = [...this.ratings].sort((a, b) => 
                new Date(b.date).getTime() - new Date(a.date).getTime()
            );

            return {
                success: true,
                data: sortedRatings.map(rating => ({
                    ...rating,
                    // Ocultar la IP por seguridad
                    clientIP: undefined
                }))
            };
        } catch (error) {
            console.error('Error al obtener valoraciones:', error);
            return {
                success: false,
                message: 'Error al obtener las valoraciones'
            };
        }
    }
}

module.exports = new RatingsController();