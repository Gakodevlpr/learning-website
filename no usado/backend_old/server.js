const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();

// Configuración de CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'https://learning-website-frontend.onrender.com', // URL de tu frontend en Render
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Ruta básica para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.json({ message: 'API de Learning Website funcionando correctamente' });
});

const FAVORITES_FILE = path.join(__dirname, 'data', 'favorites.json');

// Función para leer el archivo de favoritos
const readFavorites = async () => {
  try {
    // Asegurarse de que el directorio data existe
    await fs.mkdir(path.dirname(FAVORITES_FILE), { recursive: true });
    
    try {
      const data = await fs.readFile(FAVORITES_FILE, 'utf8');
      return JSON.parse(data).favorites;
    } catch (error) {
      // Si el archivo no existe, crearlo con un array vacío
      await writeFavorites([]);
      return [];
    }
  } catch (error) {
    console.error('Error al manejar favoritos:', error);
    return [];
  }
};

// Función para escribir en el archivo de favoritos
const writeFavorites = async (favorites) => {
  await fs.writeFile(FAVORITES_FILE, JSON.stringify({ favorites }, null, 2));
};

// Obtener todos los favoritos
app.get('/api/favorites', async (req, res) => {
  try {
    const favorites = await readFavorites();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener favoritos' });
  }
});

// Añadir favorito
app.post('/api/favorites', async (req, res) => {
  try {
    const { resourceId } = req.body;
    const favorites = await readFavorites();
    
    if (!favorites.includes(resourceId)) {
      favorites.push(resourceId);
      await writeFavorites(favorites);
    }
    
    res.status(201).json({ message: 'Favorito añadido' });
  } catch (error) {
    res.status(500).json({ error: 'Error al añadir favorito' });
  }
});

// Eliminar favorito
app.delete('/api/favorites/:resourceId', async (req, res) => {
  try {
    const { resourceId } = req.params;
    const favorites = await readFavorites();
    
    const newFavorites = favorites.filter(id => id !== resourceId);
    await writeFavorites(newFavorites);
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar favorito' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
}); 