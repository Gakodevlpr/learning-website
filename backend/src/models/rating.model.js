class Rating {
    constructor(data) {
        this.stars = data.stars;
        this.comment = data.comment;
        this.username = data.username;
        this.isAnonymous = data.isAnonymous;
        this.id = Date.now().toString();
        this.date = new Date().toISOString();
        this.clientIP = data.clientIP;
    }

    validate() {
        return this.stars > 0 && this.stars <= 5;
    }
}

module.exports = Rating;