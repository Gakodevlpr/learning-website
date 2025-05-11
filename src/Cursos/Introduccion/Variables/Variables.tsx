import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Variables = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold py-2 border-b-2 border-white">Variables en Programación</h1>
            <div id='content_variables' className="flex flex-col gap-[22px] text-white text-justify">
                <h2 className="text-xl font-bold pt-6">
                    <span className='border-s-[3px] px-2'>
                        Las variables son uno de los conceptos más fundamentales en programación
                    </span>
                </h2>
                <p id='introduction'>
                    Puedes pensar en ellas como "cajas" o "contenedores" donde guardamos información que podemos usar más tarde en nuestro programa.
                    Son esenciales para cualquier lenguaje de programación y nos permiten trabajar con datos de manera dinámica.
                </p>

                <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
                    <h3 className="text-2xl font-bold mb-4 text-center bg-blue-900/70 py-2 rounded-lg">
                        <i className='bx bx-category-alt'></i> Tipos Principales de Variables
                    </h3>
                    
                    <div className="space-y-6">
                        <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-all">
                            <h4 className="text-xl font-semibold mb-2 flex items-center">
                                <i className='bx bx-math text-blue-400 mr-2'></i> 1. Números
                            </h4>
                            <ul className="list-disc list-inside space-y-1 ml-6">
                                <li>Números enteros (1, 2, 3, -1, -2, etc.), también llamados int muchas veces.</li>
                                <li>Números decimales (3.14, 2.5, -0.5, etc.), generalmente nombrados como float.</li>
                            </ul>
                        </div>
                        
                        <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-all">
                            <h4 className="text-xl font-semibold mb-2 flex items-center">
                                <i className='bx bx-message-alt-detail text-green-400 mr-2'></i> 2. Texto (Cadenas de caracteres, en inglés: "String")
                            </h4>
                            <p className="ml-6">
                                Son secuencias de letras, números o símbolos. Por ejemplo: "Hola mundo", "Mi nombre es Juan", "123ABC".
                            </p>
                        </div>
                        
                        <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-all">
                            <h4 className="text-xl font-semibold mb-2 flex items-center">
                                <i className='bx bx-check-circle text-yellow-400 mr-2'></i> 3. Booleanos
                            </h4>
                            <p className="ml-6">
                                Solo pueden tener dos valores: verdadero o falso. Son útiles para tomar decisiones en el programa.
                            </p>
                        </div>
                        
                        <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-all">
                            <h4 className="text-xl font-semibold mb-2 flex items-center">
                                <i className='bx bx-list-ul text-purple-400 mr-2'></i> 4. Arreglo / Lista (Array / list)
                            </h4>
                            <p className="ml-6">
                                Colecciones ordenadas de otros valores. Por ejemplo, una lista de números, nombres o incluso una mezcla de diferentes tipos.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
                    <h3 className="text-2xl font-bold mb-4 text-center bg-green-900/70 py-2 rounded-lg">
                        <i className='bx bx-cog'></i> ¿Cómo funcionan las variables?
                    </h3>
                    
                    <p className="mb-4">
                        Cuando creamos una variable, estamos:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 ml-4 mb-6">
                        <li className="bg-gray-700/30 p-2 rounded">Reservando un espacio en la memoria de la computadora</li>
                        <li className="bg-gray-700/30 p-2 rounded">Dándole un nombre para poder referirnos a ella</li>
                        <li className="bg-gray-700/30 p-2 rounded">Guardando un valor que podemos cambiar después</li>
                    </ol>
                    
                    <div className="bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                        <p>
                            <i className='bx bx-info-circle text-xl mr-2'></i>
                            Por ejemplo, si queremos guardar la edad de una persona, podríamos crear una variable llamada "edad" y asignarle el valor 25. Más tarde, podemos cambiar este valor si es necesario.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
                    <h3 className="text-2xl font-bold mb-4 text-center bg-red-900/70 py-2 rounded-lg">
                        <i className='bx bx-error-circle'></i> Reglas Importantes
                    </h3>
                    
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <i className='bx bx-chevron-right text-xl text-red-400 mr-2 mt-1'></i>
                            <span>Cada variable debe tener un nombre único</span>
                        </li>
                        <li className="flex items-start">
                            <i className='bx bx-chevron-right text-xl text-red-400 mr-2 mt-1'></i>
                            <span>Los nombres deben ser descriptivos (ejemplo: "edadUsuario" es mejor que "e")</span>
                        </li>
                        <li className="flex items-start">
                            <i className='bx bx-chevron-right text-xl text-red-400 mr-2 mt-1'></i>
                            <span>No se pueden usar espacios en los nombres</span>
                        </li>
                        <li className="flex items-start">
                            <i className='bx bx-chevron-right text-xl text-red-400 mr-2 mt-1'></i>
                            <span>Las variables pueden cambiar de valor durante la ejecución del programa</span>
                        </li>
                    </ul>
                </div>

                <div className="relative group">
                    <p className="bg-gray-700/50 p-5 rounded-lg border-l-4 border-yellow-500 mt-6">
                        <em className="text-lg">
                            <i className='bx bxs-quote-left text-yellow-400'></i>
                            Las variables son la base de cualquier programa. Nos permiten almacenar y manipular datos, hacer cálculos, y tomar decisiones basadas en esos valores. Mientras sigas aprendiendo programación, verás que las variables son una herramienta esencial en cualquier lenguaje de programación.
                            <i className='bx bxs-quote-right text-yellow-400'></i>
                        </em>
                    </p>
                    <div className="absolute -bottom-2 right-4 bg-yellow-600 text-black px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        <i className='bx bxs-bulb'></i> Consejo
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Variables;
