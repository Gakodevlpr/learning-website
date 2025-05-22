import React, { useState, useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';

const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://gakodevlpr.onrender.com'  // URL de tu backend en Render
  : 'http://localhost:3001'; 

const APIs: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [showSolution1, setShowSolution1] = useState<boolean>(false);
  const [showSolution2, setShowSolution2] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Estados para el playground
  const [method, setMethod] = useState<string>('GET');
  const [url, setUrl] = useState<string>('');
  const [requestBody, setRequestBody] = useState<string>('');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Observador de intersección para la tabla de contenidos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Cargar favoritos al iniciar
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch(`${API_URL}/api/favorites`);
        if (!response.ok) throw new Error('Error al cargar favoritos');
        const data = await response.json();
        setFavorites(data);
      } catch (err) {
        setError('Error al cargar favoritos');
        console.error(err);
      }
    };

    fetchFavorites();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleRequest = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (method !== 'GET' && requestBody) {
        options.body = requestBody;
      }

      const response = await fetch(url, options);
      const data = await response.json();
      setResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al hacer la petición');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Aquí podrías añadir una notificación de éxito
  };

  const toggleFavorite = async (resourceId: string) => {
    try {
      setLoading(true);
      if (favorites.includes(resourceId)) {
        // Eliminar favorito
        const response = await fetch(`${API_URL}/api/favorites/${resourceId}`, {
          method: 'DELETE'
        });
        if (!response.ok) throw new Error('Error al eliminar favorito');
        setFavorites(prev => prev.filter(id => id !== resourceId));
      } else {
        // Añadir favorito
        const response = await fetch(`${API_URL}/api/favorites`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ resourceId })
        });
        if (!response.ok) throw new Error('Error al añadir favorito');
        setFavorites(prev => [...prev, resourceId]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al gestionar favorito');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredResources = [
    {
      id: 'mdn',
      title: 'MDN Web Docs - HTTP',
      url: 'https://developer.mozilla.org/es/docs/Web/HTTP',
      description: 'Documentación oficial de Mozilla sobre HTTP y APIs web',
      category: 'documentation'
    },
    {
      id: 'rest',
      title: 'REST API Tutorial',
      url: 'https://restfulapi.net/',
      description: 'Guía completa sobre REST APIs y mejores prácticas',
      category: 'documentation'
    },
    {
      id: 'graphql',
      title: 'GraphQL Documentation',
      url: 'https://graphql.org/learn/',
      description: 'Documentación oficial de GraphQL',
      category: 'documentation'
    },
    {
      id: 'postman',
      title: 'Postman - Cliente API',
      url: 'https://www.postman.com/',
      description: 'Herramienta popular para probar y documentar APIs',
      category: 'tools'
    },
    {
      id: 'insomnia',
      title: 'Insomnia - Cliente API',
      url: 'https://insomnia.rest/',
      description: 'Cliente API alternativo con interfaz moderna',
      category: 'tools'
    },
    {
      id: 'swagger',
      title: 'Swagger - Documentación de APIs',
      url: 'https://swagger.io/',
      description: 'Herramienta para documentar APIs de forma interactiva',
      category: 'tools'
    }
  ].filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        Guía Completa de APIs
      </h1>

      {/* Tabla de Contenidos */}
      <div className="bg-gray-500 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Tabla de Contenidos</h2>
        <nav className="space-y-2">
          {[
            { id: 'introduccion', title: '1. Introducción a las APIs' },
            { id: 'conceptos', title: '2. Conceptos Básicos' },
            { id: 'tipos', title: '3. Tipos de APIs' },
            { id: 'metodos', title: '4. Métodos HTTP' },
            { id: 'practica', title: '5. Ejercicios Prácticos' },
            { id: 'playground', title: '6. Playground de APIs' },
            { id: 'recursos', title: '7. Recursos Adicionales' }
          ].map(({ id, title }) => (
            <button 
              key={id}
              onClick={() => scrollToSection(id)}
              className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition-colors ${
                activeSection === id ? 'bg-blue-50 text-blue-600' : 'text-white'
              }`}
            >
              {title}
            </button>
          ))}
        </nav>
      </div>

      {/* Introducción */}
      <div id="introduccion" className="bg-white rounded-lg shadow-lg p-6 mb-8 text-black">
        <h2 className="text-2xl font-semibold mb-4">
          ¿Qué es una API?
        </h2>
        <p className="mb-4">
          Una API (Application Programming Interface) es un conjunto de reglas y protocolos que permite que diferentes aplicaciones se comuniquen entre sí. 
          Es como un mensajero que toma tus solicitudes, las entrega al sistema que las necesita y devuelve la respuesta.
        </p>
        <p className="mb-4">
          Imagina que estás en un restaurante. Tú (el cliente) no vas directamente a la cocina a pedir tu comida. 
          En su lugar, hablas con el mesero (la API), quien toma tu pedido y lo lleva a la cocina (el servidor). 
          Luego, el mesero te trae la comida (la respuesta).
        </p>
        <div className="bg-gray-400 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Diagrama de Flujo</h3>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <div className="bg-blue-300 p-4 rounded-lg">Cliente</div>
              <div className="text-sm mt-2">Tu aplicación</div>
            </div>
            <div className="text-center">
              <div className="bg-green-300 p-4 rounded-lg">API</div>
              <div className="text-sm mt-2">Mensajero</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-300 p-4 rounded-lg">Servidor</div>
              <div className="text-sm mt-2">Base de datos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Conceptos Básicos */}
      <div id="conceptos" className="bg-white rounded-lg shadow-lg p-6 mb-8 text-black">
        <h2 className="text-2xl font-semibold mb-4">
          Conceptos Básicos
        </h2>
        <ul className="space-y-4">
          <li>
            <h3 className="font-semibold">Endpoint</h3>
            <p className="text-gray-600">Es la URL específica a la que se envía una solicitud. Por ejemplo: https://api.ejemplo.com/usuarios</p>
          </li>
          <li>
            <h3 className="font-semibold">Request (Solicitud)</h3>
            <p className="text-gray-600">Es el mensaje que envías a la API para solicitar información o realizar una acción</p>
          </li>
          <li>
            <h3 className="font-semibold">Response (Respuesta)</h3>
            <p className="text-gray-600">Es la información que la API te devuelve después de procesar tu solicitud</p>
          </li>
          <li>
            <h3 className="font-semibold">Status Code (Código de Estado)</h3>
            <p className="text-gray-600">Números que indican si la solicitud fue exitosa (200), hubo un error (400, 500), etc.</p>
          </li>
        </ul>
      </div>

      {/* Tipos de APIs */}
      <div id="tipos" className="bg-white rounded-lg shadow-lg p-6 mb-8 text-black">
        <h2 className="text-2xl font-semibold mb-4">
          Tipos de APIs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">REST API</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Usa HTTP para las operaciones</li>
              <li>Stateless (sin estado)</li>
              <li>Formato JSON</li>
              <li>URLs descriptivas</li>
            </ul>
            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Ejemplo REST</h4>
              <pre className="text-sm">
                <code>{`GET /api/usuarios
GET /api/usuarios/123
POST /api/usuarios
PUT /api/usuarios/123
DELETE /api/usuarios/123`}</code>
              </pre>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">GraphQL</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Un solo endpoint</li>
              <li>El cliente especifica qué datos necesita</li>
              <li>Más flexible que REST</li>
              <li>Mejor para aplicaciones complejas</li>
            </ul>
            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Ejemplo GraphQL</h4>
              <pre className="text-sm">
                <code>{`query {
  usuario(id: "123") {
    nombre
    email
    posts {
      titulo
      fecha
    }
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Métodos HTTP */}
      <div id="metodos" className="bg-white rounded-lg shadow-lg p-6 mb-8 text-black">
        <h2 className="text-2xl font-semibold mb-4">
          Métodos HTTP
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-400 p-4 rounded-lg">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-700">GET</h3>
            <p className="text-gray-600">Obtener datos (lectura)</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-700">POST</h3>
            <p className="text-gray-600">Crear nuevos datos</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-700">PUT/PATCH</h3>
            <p className="text-gray-600">Actualizar datos existentes</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-700">DELETE</h3>
            <p className="text-gray-600">Eliminar datos</p>
          </div>
        </div>
      </div>

      {/* Ejercicios Prácticos */}
      <div id="practica" className="bg-white rounded-lg shadow-lg p-6 mb-8 text-black">
        <h2 className="text-2xl font-semibold mb-4">
          Ejercicios Prácticos
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold mb-2">Ejercicio 1: Crear una API de Tareas</h3>
            <p className="mb-4">Crea una API simple que maneje una lista de tareas (Todo List) con las siguientes funcionalidades:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Obtener todas las tareas</li>
              <li>Crear una nueva tarea</li>
              <li>Marcar una tarea como completada</li>
              <li>Eliminar una tarea</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <button 
                onClick={() => setShowSolution1(!showSolution1)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
              >
                <i className={`bx ${showSolution1 ? 'bx-chevron-up' : 'bx-chevron-down'} mr-2`}></i>
                {showSolution1 ? 'Ocultar Solución' : 'Ver Solución'}
              </button>
              {showSolution1 && (
                <button 
                  onClick={() => copyToClipboard(solution1)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 flex items-center"
                >
                  <i className="bx bx-copy mr-2"></i>
                  Copiar Código
                </button>
              )}
            </div>
            {showSolution1 && (
              <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Solución:</h4>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{solution1}</code>
                </pre>
              </div>
            )}
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-semibold mb-2">Ejercicio 2: API de Usuarios</h3>
            <p className="mb-4">Implementa una API de usuarios con autenticación básica:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Registro de usuarios</li>
              <li>Inicio de sesión</li>
              <li>Obtener perfil de usuario</li>
              <li>Actualizar información de usuario</li>
            </ul>
            <button 
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              {showSolution2 ? 'Ocultar Solución' : 'Ver Solución'}
            </button>
            {showSolution2 && (
              <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Solución:</h4>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{solution2}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Playground de APIs */}
      <div id="playground" className="bg-white rounded-lg shadow-lg p-6 mb-8 text-black">
        <h2 className="text-2xl font-semibold mb-4">
          Playground de APIs
        </h2>
        <div className="space-y-4">
          <div className="flex space-x-4 bg-gray-400 p-4 rounded-lg">
            <select 
              className="border rounded px-4 py-2 bg-gray-200"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
            </select>
            <input 
              type="text" 
              placeholder="URL de la API" 
              className="flex-1 border rounded px-4 py-2 bg-gray-200"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleRequest}
              disabled={loading || !url}
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </div>

          {(method === 'POST' || method === 'PUT') && (
            <div className="bg-gray-400 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Cuerpo de la petición (JSON)</h3>
              <textarea
                className="w-full h-32 border rounded px-4 py-2 bg-gray-200"
                value={requestBody}
                onChange={(e) => setRequestBody(e.target.value)}
                placeholder='{"key": "value"}'
              />
            </div>
          )}

          <div className="border rounded p-4">
            <h3 className="font-semibold mb-2">Respuesta</h3>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            {response && (
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{JSON.stringify(response, null, 2)}</code>
              </pre>
            )}
          </div>

          <div className="bg-gray-400 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Ejemplos de APIs públicas para probar:</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  className="text-blue-500 hover:underline"
                  onClick={() => {
                    setMethod('GET');
                    setUrl('https://jsonplaceholder.typicode.com/posts');
                  }}
                >
                  GET https://jsonplaceholder.typicode.com/posts
                </button>
              </li>
              <li>
                <button 
                  className="text-blue-500 hover:underline"
                  onClick={() => {
                    setMethod('POST');
                    setUrl('https://jsonplaceholder.typicode.com/posts');
                    setRequestBody('{"title": "Mi título", "body": "Mi contenido", "userId": 1}');
                  }}
                >
                  POST https://jsonplaceholder.typicode.com/posts
                </button>
              </li>
              <li>
                <button 
                  className="text-blue-500 hover:underline"
                  onClick={() => {
                    setMethod('GET');
                    setUrl('https://api.github.com/users/github');
                  }}
                >
                  GET https://api.github.com/users/github
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recursos Adicionales */}
      <div id="recursos" className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Recursos Adicionales
        </h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar recursos..."
            className="w-full px-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map(resource => (
            <div key={resource.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold mb-2">
                  <a href={resource.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    {resource.title}
                  </a>
                </h3>
                <button
                  onClick={() => toggleFavorite(resource.id)}
                  className={`text-2xl ${
                    favorites.includes(resource.id) ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                >
                  <i className={`bx ${favorites.includes(resource.id) ? 'bxs-star' : 'bx-star'}`}></i>
                </button>
              </div>
              <p className="text-gray-600 mb-2">{resource.description}</p>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {resource.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Código de las soluciones
const solution1 = `const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Base de datos simple (en memoria)
let todos = [];

// Obtener todas las tareas
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Crear una nueva tarea
app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Actualizar una tarea
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Tarea no encontrada' });
  }
});

// Eliminar una tarea
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});`;

const solution2 = `const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

// Base de datos simple (en memoria)
let users = [];
const JWT_SECRET = 'tu_secreto_jwt';

// Middleware de autenticación
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.status(401).json({ message: 'Token no proporcionado' });
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido' });
    req.user = user;
    next();
  });
};

// Registro de usuario
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  
  // Verificar si el usuario ya existe
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Usuario ya existe' });
  }
  
  // Hash de la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const newUser = {
    id: Date.now(),
    username,
    email,
    password: hashedPassword
  };
  
  users.push(newUser);
  res.status(201).json({ message: 'Usuario registrado exitosamente' });
});

// Inicio de sesión
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  
  if (!user) {
    return res.status(400).json({ message: 'Usuario no encontrado' });
  }
  
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: 'Contraseña incorrecta' });
  }
  
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET);
  res.json({ token });
});

// Obtener perfil de usuario
app.get('/api/profile', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  
  const { password, ...userWithoutPassword } = user;
  res.json(userWithoutPassword);
});

// Actualizar información de usuario
app.put('/api/profile', authenticateToken, (req, res) => {
  const { username, email } = req.body;
  const user = users.find(u => u.id === req.user.id);
  
  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  
  user.username = username || user.username;
  user.email = email || user.email;
  
  const { password, ...userWithoutPassword } = user;
  res.json(userWithoutPassword);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});`;

export default APIs;
