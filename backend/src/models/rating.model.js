class Rating {
    constructor(data) {
        this.stars = parseInt(data.stars);
        this.comment = data.comment?.trim() || '';
        this.username = data.username?.trim() || '';
        this.isAnonymous = Boolean(data.isAnonymous);
        this.id = Date.now().toString();
        this.date = new Date().toISOString();
        this.clientIP = data.clientIP;
    }

    validate() {
        const errors = [];
        
        if (!this.stars || this.stars < 1 || this.stars > 5) {
            errors.push('La valoración debe estar entre 1 y 5 estrellas');
        }

        if (!this.isAnonymous && (!this.username || this.username.length < 3)) {
            errors.push('El nombre de usuario debe tener al menos 3 caracteres');
        }

        if (this.comment && this.comment.length > 500) {
            errors.push('El comentario no puede exceder los 500 caracteres');
        }

        if (!this.clientIP) {
            errors.push('No se pudo obtener la IP del cliente');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }

    toJSON() {
        return {
            id: this.id,
            stars: this.stars,
            comment: this.comment,
            username: this.username,
            isAnonymous: this.isAnonymous,
            date: this.date,
            clientIP: this.clientIP
        };
    }
}

module.exports = Rating;