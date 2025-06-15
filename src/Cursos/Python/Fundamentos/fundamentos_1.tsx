import { useState } from 'react';
import tiktok from '../../../images/icons/tiktok.svg';
import Titles from '../../../components/Titles';

const Fundamentos = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-col p-8 gap-8">
            <Titles title="Fundamentos de Python 1.0" text="En este apartado encontrarás información sobre las variables y los tipos de datos en Python."/>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Variables</h2>
                <p className="text-justify">
                    Las variables son espacios en la memoria del ordenador que se utilizan para almacenar datos.
                </p>
                <p className="text-justify">
                    En Python, las variables se definen sin necesidad de declarar el tipo de dato.
                </p>
                <div id="example" className="flex flex-col gap-4">   
                <p className="text-justify">
                    <span className="font-bold">Ejemplo:</span>
                </p>
                <code className="bg-gray-400 p-4 rounded-md text-sm text-black border">
                    <span className="font-bold">x = 10</span>
                    <br />
                    <span className="font-bold">print(x)</span>
                </code>
                <p className="text-justify text-sm bg-gray-200 rounded-md p-2">
                    <span className="font-bold text-black">Output: 10</span>
                </p>
                </div>
                <p className="text-justify">
                    Las variables pueden ser de diferentes tipos de datos, como:
                    <ul className="list-disc list-inside">
                        <li>Números enteros (int): 1, 2, 3, 4, 5, etc.</li>
                        <li>Números decimales (float): 1.0, 2.5, 3.14, etc.</li>
                        <li>Cadenas de texto (str): "Hola", "Mundo", "Python", etc.</li>
                        <li>Booleanos (bool): True, False</li>
                    </ul>
                </p>
                <div className="mt-6">
                    <h3 className="text-xl font-bold">¿Cómo funcionan las variables?</h3>
                    <p className="text-justify mt-4">
                        Puedes imaginar las variables como cajas etiquetadas donde guardamos cosas. Cuando creamos una variable, es como si 
                        etiquetáramos una caja con un nombre (el nombre de la variable) y dentro guardáramos un valor.
                    </p>
                    
                    <div className="bg-gray-100 p-4 rounded-md mt-4">
                        <h4 className="font-bold">Características importantes:</h4>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>Una variable puede cambiar su valor durante la ejecución del programa</li>
                            <li>El nombre de una variable debe comenzar con una letra o guión bajo (_)</li>
                            <li>Python distingue entre mayúsculas y minúsculas (case-sensitive)</li>
                            <li>No se pueden usar palabras reservadas como nombres de variables</li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <p className="text-justify">
                            <span className="font-bold">Ejemplo de cómo una variable puede cambiar:</span>
                        </p>
                        <code className="bg-gray-400 p-4 rounded-md text-sm text-black border mt-2 block">
                            <span className="font-bold">edad = 25</span>
                            <br />
                            <span className="font-bold">print(edad)  # Imprime: 25</span>
                            <br />
                            <span className="font-bold">edad = 26</span>
                            <br />
                            <span className="font-bold">print(edad)  # Imprime: 26</span>
                        </code>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-bold">Convenciones de nombres</h3>
                        <p className="text-justify mt-4">
                            En Python, existen algunas convenciones para nombrar variables:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>Usar nombres descriptivos (mejor <code className="bg-gray-200 px-1 rounded">edad_usuario</code> que <code className="bg-gray-200 px-1 rounded">x</code>)</li>
                            <li>Usar snake_case (palabras en minúsculas separadas por guiones bajos)</li>
                            <li>Evitar nombres de una sola letra (excepto en bucles cortos)</li>
                        </ul>
                    </div>

                    <div className="bg-yellow-100 p-4 rounded-md mt-6">
                        <p className="text-justify">
                            <span className="font-bold">💡 Consejo:</span> Cuando nombres variables, piensa en que otra persona pueda 
                            entender tu código. Un buen nombre de variable debe describir lo que contiene.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fundamentos;
