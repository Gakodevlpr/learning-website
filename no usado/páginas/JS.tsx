import { useState, useCallback } from 'react';
import clipboard_icon from '../images/icons/clipboard_icon.png';
import clipboard_icon_copied from '../images/icons/clipboard_icon_copied.png';

type CardName = 'fundamentos' | 'control' | 'funciones' | 'arrays' | 'objetos' | 'poo' | 'async' | 'moderno';

const transitionCards = "bg-white/10 rounded-xl shadow-xl p-4 backdrop-blur-sm transition-all duration-300 border border-white/20 hover:bg-white/20 hover:cursor-pointer"

type CardProps = {
    title: string;
    children: React.ReactNode;
    preview: string;
}

const Card = ({title, children, preview}: CardProps) => {
    const [copiar, setCopiar] = useState(false);
    const [mensajeCopiado, setMensajeCopiado] = useState(false);
    const copiarCodigo = async () => {
        try {
            await navigator.clipboard.writeText(preview);
            setCopiar(true);
            setMensajeCopiado(true);
            setTimeout(() => {
                setCopiar(false);
                setMensajeCopiado(false);
            }, 2000);
        } catch (error) {
            console.error('Error al copiar el código:', error);
        }
    };

    return (
        <div className="border-2 border-white rounded-xl p-4 mt-2 text-white bg-gray-800">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p>{children}</p>
            <div className="mt-4 rounded-lg overflow-hidden">
                <div className="bg-gray-600 p-2 flex justify-between items-center">
                    <span className="text-sm text-white">Código:</span>
                    {mensajeCopiado && (
                            <div className=" bg-green-500 text-white rounded-md">
                                Código copiado
                            </div>
                        )}
                    <button onClick={copiarCodigo} aria-label="Copiar código" title="Copiar código" className="bg-blue-500 px-2 py-1 rounded-md">
                        <img src={copiar ? clipboard_icon_copied : clipboard_icon} alt="Copiar código" title="Copiar código" className="w-4 h-4" />
                    </button>
                </div>
                <div className="bg-gray-700 p-3">
                    <div className="overflow-x-auto">
                        <pre className="text-sm text-left">
                            {preview}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CardContent = ({ cardName }: { cardName: CardName }) => {
    switch (cardName) {
        case 'fundamentos':
            return (
                <Card title="Conceptos Básicos" preview={`// Ejemplos básicos:
const nombre = "JavaScript";
let edad = 25;
var esActivo = true;`}>
                    <ul className="list-disc pl-4 space-y-2">
                        <li>Variables y constantes</li>
                        <li>Tipos de datos primitivos</li>
                        <li>Operadores básicos</li>
                        <li>Comentarios</li>
                    </ul>
                </Card>
            );
        case 'control':
            return (
                <Card title="Estructuras de Control" preview={
                    `// Ejemplos:
// If/else
if (edad >= 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}`}>
                    
                    <ul className="list-disc pl-4 space-y-2">
                        <li>Condicionales (if/else)</li>
                        <li>Bucles (for/while)</li>
                        <li>Switch</li>
                        <li>Operadores lógicos</li>
                    </ul>
                </Card>
            );
        case 'funciones':
            return (
                <Card title="Funciones y Scope" preview={
`// Ejemplos:
// Función declarativa
function saludar(nombre) {
    return "Hola " + nombre;
}

// Función de expresión
const sumar = function(a, b) {
    return a + b;
};

// Arrow function
const multiplicar = (a, b) => a * b;

// Scope
let variableGlobal = "global";
function ejemploScope() {
    let variableLocal = "local";
    console.log(variableGlobal); // Accesible
    console.log(variableLocal);  // Accesible
}`
                }>
                    <ul className="list-disc pl-4 space-y-2">
                        <li>Declaración de funciones</li>
                        <li>Parámetros y argumentos</li>
                        <li>Return</li>
                        <li>Scope (var, let, const)</li>
                    </ul>
                </Card>
            );
        case 'arrays':
            return (
                <Card title="Arrays y Métodos" preview={
                    `// Ejemplos:
// Creación
const frutas = ["manzana", "banana", "naranja"];

// Métodos básicos
frutas.push("pera");      // Añade al final
frutas.pop();            // Elimina el último
frutas.unshift("uva");   // Añade al inicio
frutas.shift();          // Elimina el primero

// Métodos de iteración
const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map(num => num * 2);
const pares = numeros.filter(num => num % 2 === 0);
const suma = numeros.reduce((acc, num) => acc + num, 0);`}>
                    <ul className="list-disc pl-4 space-y-2">
                        <li>Creación y manipulación</li>
                        <li>Métodos comunes (push, pop, etc.)</li>
                        <li>Métodos de iteración</li>
                        <li>Spread operator</li>
                    </ul>
                </Card>
            );
        case 'objetos':
            return (
                <Card title="Objetos y Propiedades" preview={`// Ejemplos:
// Creación de objeto
const persona = {
    nombre: "Juan",
    edad: 25,
    saludar: function() {
        return "Hola, soy " + this.nombre;
    }
};

// Acceso a propiedades
console.log(persona.nombre);
console.log(persona["edad"]);

// Desestructuración
const { nombre, edad } = persona;

// Object methods
const keys = Object.keys(persona);
const values = Object.values(persona);
const entries = Object.entries(persona);`}>
                    <ul className="list-disc pl-4 space-y-2">
                        <li>Creación de objetos</li>
                        <li>Propiedades y métodos</li>
                        <li>Desestructuración</li>
                        <li>Object methods</li>
                    </ul>
                </Card>
            );
        case 'poo':
            return (
                <Card title="POO en JavaScript" preview=
{`// Ejemplos:
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return "Hola, soy " + this.nombre;
    }

    static crearPersona(nombre, edad) {
        return new Persona(nombre, edad);
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }

    estudiar() {
        return "Estoy estudiando " + this.curso;
    }
}`}>
                    <ul className="list-disc pl-4 space-y-2">
                        <li>Clases y constructores</li>
                        <li>Herencia</li>
                        <li>Métodos estáticos</li>
                        <li>Getters y setters</li>
                    </ul>
                </Card>
            );
        case 'async':
            return (
                <Card title="Asincronía y Promesas" preview=
{`// Ejemplos:
    // Callback
    function obtenerDatos(callback) {
        setTimeout(() => {
            callback("Datos recibidos");
        }, 1000);
    }
    
    // Promesa
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos recibidos");
        }, 1000);
    });
    
    // Async/Await
    async function obtenerDatosAsync() {
        try {
            const respuesta = await fetch('https://api.example.com');
            const datos = await respuesta.json();
            return datos;
        } catch (error) {
            console.error('Error:', error);
        }
}`}>
                    <ul className="list-disc pl-4 space-y-2">
                        <li>Callbacks</li>
                        <li>Promesas</li>
                        <li>Async/Await</li>
                        <li>Event Loop</li>
                    </ul>
                </Card>
            );
        case 'moderno':
            return (
                <Card title="ES6+ y Características Avanzadas" preview={`// Ejemplos:
// Template literals
const nombre = "Juan";
console.log(\`Hola \${nombre}\`);

// Destructuring
const [primero, ...resto] = [1, 2, 3, 4, 5];
const { nombre: nombrePersona, edad } = persona;

// Spread operator
const numeros = [1, 2, 3];
const masNumeros = [...numeros, 4, 5];

// Optional chaining
const calle = persona?.direccion?.calle;

// Modules
import { funcion } from './modulo.js';
export const constante = 42;`}>
                    <ul className="list-disc pl-4 space-y-2">
                        <li>Template literals</li>
                        <li>Destructuring</li>
                        <li>Spread/Rest operators</li>
                        <li>Modules</li>
                        <li>Optional chaining</li>
                    </ul>
                </Card>
            );
        default:
            return null;
    }
};

const JS = () => {
    const [activeCard, setActiveCard] = useState<CardName | null>(null);

    const toggleCard = useCallback((cardName: CardName) => {
        setActiveCard(prev => prev === cardName ? null : cardName);
    }, []);

    const cardTitles: Record<CardName, string> = {
        fundamentos: 'Nivel 1: Fundamentos',
        control: 'Nivel 2: Control de Flujo',
        funciones: 'Nivel 3: Funciones',
        arrays: 'Nivel 4: Arrays',
        objetos: 'Nivel 5: Objetos',
        poo: 'Nivel 6: Programación Orientada a Objetos',
        async: 'Nivel 7: Programación Asíncrona',
        moderno: 'Nivel 8: Características Modernas'
    };

    return (
        <div className="p-8">
            <h1 className='text-4xl font-bold text-white mb-4'>JavaScript</h1>
            <h2 className='text-xl font-semibold text-white underline mb-6'>Guía de Aprendizaje Progresivo</h2>
            
            {!activeCard ? (
                // Vista inicial con distribución circular
                <div className="flex flex-col gap-8">
                    {/* Fila superior */}
                    <div className="flex justify-center gap-4 animation-card">
                        {['fundamentos', 'control', 'funciones'].map((cardName) => (
                            <button 
                                key={cardName}
                                className={transitionCards}
                                onClick={() => toggleCard(cardName as CardName)}
                            >
                                {cardTitles[cardName as CardName]}
                            </button>
                        ))}
                    </div>
                    
                    {/* Fila del medio */}
                    <div className="flex justify-center gap-4 animation-card">
                        {['arrays', 'objetos', 'poo'].map((cardName) => (
                            <button 
                                key={cardName}
                                className={transitionCards}
                                onClick={() => toggleCard(cardName as CardName)}
                            >
                                {cardTitles[cardName as CardName]}
                            </button>
                        ))}
                    </div>
                    
                    {/* Fila inferior */}
                    <div className="flex justify-center gap-4 animation-card">
                        {['async', 'moderno'].map((cardName) => (
                            <button 
                                key={cardName}
                                className={transitionCards}
                                onClick={() => toggleCard(cardName as CardName)}
                            >
                                {cardTitles[cardName as CardName]}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                // Vista con sidebar y contenido
                <div className="flex flex-col md:flex-row gap-6 animation-card">
                    {/* Sidebar con botones */}
                    <div className="md:w-1/3 flex flex-col gap-2">
                        {Object.keys(cardTitles).map((cardName) => (
                            <button 
                                key={cardName}
                                className={`${transitionCards} ${activeCard === cardName ? 'bg-white/20' : ''}`}
                                onClick={() => toggleCard(cardName as CardName)}
                                aria-expanded={activeCard === cardName}
                            >
                                {cardTitles[cardName as CardName]}
                            </button>
                        ))}
                    </div>
                    
                    {/* Contenido de la tarjeta activa */}
                    <div className="md:w-2/3">
                        <CardContent cardName={activeCard} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default JS;
