const express = require('express');
const cors = require('cors');
const ratingsRoutes = require('./routes/ratings.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', ratingsRoutes);

module.exports = app;