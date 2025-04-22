import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// Ruta para obtener todos los términos
app.get('/api/terms', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/Tables_content/TailwindExp/Explanations.json')));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al leer los términos' });
  }
});

// Ruta para añadir un nuevo término
app.post('/api/terms', (req, res) => {
  try {
    const newTerm = req.body;
    const filePath = path.join(__dirname, 'src/Tables_content/TailwindExp/Explanations.json');
    const data = JSON.parse(fs.readFileSync(filePath));
    
    const newId = `id${Object.keys(data.terms).length + 1}`;
    data.terms[newId] = {
      name: newTerm.name,
      explanation: newTerm.explanation,
      term_definition: newTerm.term_definition
    };
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.json({ success: true, id: newId });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al guardar el término' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); 