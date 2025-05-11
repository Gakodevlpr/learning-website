import { useState } from 'react';
import icono_pruebas from '../images/icons/icono_pruebas.png';
import { Link } from 'react-router-dom';

const Introduction = () => {
    const [activeCard, setActiveCard] = useState<string | null>(null);

    const toggleCard = (cardId: string) => {
        setActiveCard(activeCard === cardId ? null : cardId);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const blockStyle = "flex-auto gap-2 border-2 rounded-xl p-4 cursor-pointer hover:border-gray-500 hover:bg-gray-700 transition-all w-48 animation-card";
    
    const renderContent = () => {
        switch(activeCard) {
            case 'programming':
                return (
                    <div className="flex flex-col items-start gap-2 mt-4 p-6 bg-gray-800 rounded-xl animation-card text-lg">
                        <p>La programación es el proceso de crear programas o aplicaciones que realizan tareas específicas en una computadora.
                        <br /><br />
                        Se trata de una habilidad fundamental en la actualidad, ya que es la base de la mayoría de las aplicaciones y programas que utilizamos en nuestros dispositivos.
                        <br /><br />
                        Pero la programación es mucho más que eso: es una forma de pensar, de resolver problemas y de crear soluciones. Es como aprender un nuevo idioma que te permite comunicarte con las computadoras y darles instrucciones para que hagan lo que tú quieras.
                        <br /><br />
                        Lo mejor de todo es que cualquiera puede aprender a programar. No necesitas ser un genio matemático o tener un título en informática. Solo necesitas curiosidad, ganas de aprender y un poco de paciencia.
                        <br /><br />
                        En esta sección, descubrirás los conceptos básicos de la programación, desde qué son los lenguajes de programación hasta cómo funcionan los algoritmos y los programas. Cada concepto está explicado de manera sencilla y con ejemplos prácticos.
                        <br /><br />
                        ¡No esperes más! Haz click en las siguientes tarjetas para comenzar tu viaje en el mundo de la programación. Cada tarjeta te llevará a un nuevo concepto que te ayudará a entender mejor este fascinante mundo.</p>
                    </div>
                );
            case 'purpose':
                return (
                    <div className="flex-1 flex-col items-start gap-2 mt-4 p-6 bg-gray-800 rounded-xl animation-card">
                        <p className='text-justify'>Programar es decirle a una máquina (normalmente un ordenador o un móvil) lo que quieres que haga, paso a paso, usando un lenguaje que pueda entender. Es como escribir instrucciones muy detalladas, pero en un idioma especial (como Python, JavaScript, C++, etc.).
                            <br /><br />
                            Imagínate que tienes una calculadora. Le das dos números y te devuelve la suma. Alguien tuvo que programar esa calculadora para que sepa qué hacer cuando aprietas los botones. Lo mismo pasa con cualquier aplicación que usas: Instagram, WhatsApp, YouTube, TikTok… todo eso funciona gracias a la programación.
                            <br /><br />
                            Pero programar no es solo para hacer apps o videojuegos (aunque eso ya es bastante guay). También sirve para:
                            <ul className= "list-disc ml-8 mt-4 space-y-4 justify-items-start">                                <li>Automatizar tareas aburridas o repetitivas. Por ejemplo, si tienes que copiar 1000 nombres de un archivo a otro, puedes hacer un programa que lo haga en segundos.</li>
                                <li>Crear herramientas útiles. ¿Quieres un programa que te avise cuándo hay descuentos en una tienda? ¿Uno que te diga qué estudiar según lo que más te cuesta? Puedes hacerlo.</li>
                                <li>Resolver problemas. Por ejemplo, Google Maps calcula la ruta más rápida gracias a algoritmos (que son como recetas de pasos lógicos). Sin programación, eso no sería posible.</li>
                                <li>Entender cómo funciona el mundo digital. En vez de ser solo un usuario que consume cosas, puedes ser alguien que crea. Es como pasar de ver películas a saber hacerlas.</li>
                            </ul>
                        </p>
                    </div>
                );
            case 'languages':
                return (
                    <div className="flex-1 flex-col items-start gap-2 mt-4 p-6 bg-gray-800 rounded-xl animation-card">
                        <p>Los lenguajes de programación son lenguajes que se utilizan para crear programas y aplicaciones.</p>
                        <p>Existen muchos lenguajes de programación, cada uno con sus propias características y ventajas.</p>
                        <p>Algunos lenguajes de programación son:</p>
                        <ul className="list-disc ml-8 m-2 space-y-1 justify-items-start">
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>C++</li>
                            <li>C#</li>
                            <li>Kotlin</li>
                            <li>TypeScript</li>
                            <li>Muchos más...</li>
                        </ul>
                        <p>Cada lenguaje tiene sus propias características y ventajas, y se utiliza para diferentes propósitos.</p>
                        <p>Por ejemplo, JavaScript se utiliza para crear aplicaciones web interactivas y Python se utiliza para crear aplicaciones de análisis de datos.</p>
                    </div>
                );
            case 'algorithm':
                return (
                    <div className="flex-1 flex-col items-start gap-2 mt-4 p-6 bg-gray-800 rounded-xl animation-card">
                        <p>Un algoritmo es una secuencia de pasos lógicos que resuelven un problema o realizan una tarea específica.</p>
                        <p>Los algoritmos son fundamentales en la programación, ya que son la base de muchos programas y aplicaciones.</p>
                        <p>Por ejemplo, un algoritmo para ordenar una lista de números es:</p>
                        <ul className="list-disc ml-8 -mt-1 space-y-0.5 justify-items-start">
                            <li>1. Comprobar si la lista está ordenada.</li>
                            <li>2. Si no está ordenada, intercambiar el primer elemento con el segundo.</li>
                            <li>3. Repetir el proceso hasta que la lista esté ordenada.</li>
                        </ul>
                    </div>
                );
            case 'program':
                return (
                    <div className="flex-1 flex-col items-start gap-2 mt-4 p-6 bg-gray-800 rounded-xl animation-card">
                        <p>Un programa es una colección de instrucciones que le dicen a la computadora qué hacer.</p>
                        <p>Los programas son fundamentales en la programación, ya que son la base de muchos programas y aplicaciones.</p>
                        <p>Por ejemplo, un programa para calcular el área de un círculo es:</p>
                        <ul className="list-disc ml-8 -mt-1 space-y-0.5 justify-items-start">
                            <li>1. Leer el radio del círculo.</li>
                            <li>2. Calcular el área del círculo usando la fórmula πr².</li>
                            <li>3. Imprimir el resultado.</li>
                        </ul>
                    </div>
                );
            case 'difference':
                return (
                    <div className="flex-1 flex-col items-start gap-2 mt-4 p-6 bg-gray-800 rounded-xl animation-card">
                        <p>No, los algoritmos y los programas son diferentes.</p>
                        <p>Los algoritmos son la base de los programas, ya que son la secuencia de pasos lógicos que resuelven un problema o realizan una tarea específica.</p>
                        <p>Los programas son la implementación de los algoritmos en un lenguaje de programación.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
                <h2 className="text-center font-bold text-2xl p-4">Introducción a la programación</h2>
                <div className="hidden md:block self-stretch border-r border-gray-300"></div>
                <div className="block md:hidden w-full border-b border-gray-300"></div>
                <div className="flex flex-col gap-2">
                    <p className="flex flex-col px-8 text-justify">Donde aprenderemos los conceptos básicos sobre programación. Siéntete libre de navegar por las tarjetas y aprender más sobre programación.</p>
                    <p className="flex flex-col px-8 text-justify"><em>¡Espero que te sean de ayuda!</em></p>
                </div>
            </div>
            {activeCard === null ? (
                // Layout cuando no hay una tarjeta activa
                <div className="flex flex-col gap-4 pt-4">
                    <div className="flex flex-wrap gap-4 px-4">
                        <div 
                            className={`${blockStyle}`}
                            onClick={() => toggleCard('programming')}
                            title="Haz click para conocer más"
                        >
                            <h3 className="text-lg font-bold">¿Qué es la programación?</h3>
                        </div>
                        <div 
                            className={`${blockStyle}`}
                            onClick={() => toggleCard('purpose')}
                            title="Haz click para conocer más"
                        >
                            <h3 className="text-lg font-bold">¿Para qué sirve programar?</h3>
                        </div>
                        <div 
                            className={`${blockStyle}`}
                            onClick={() => toggleCard('languages')}
                            title="Haz click para conocer más"
                        >
                            <h3 className="text-lg font-bold">¿Cuáles son los lenguajes de programación?</h3>
                        </div>
                        <div 
                            className={`${blockStyle}`}
                            onClick={() => toggleCard('algorithm')}
                            title="Haz click para conocer más"
                        >
                            <h3 className="text-lg font-bold">¿Qué es un algoritmo?</h3>
                        </div>
                        <div 
                            className={`${blockStyle}`}
                            onClick={() => toggleCard('program')}
                            title="Haz click para conocer más"
                        >
                            <h3 className="text-lg font-bold">¿Qué es un programa?</h3>
                        </div>
                        <div 
                            className={`${blockStyle}`}
                            onClick={() => toggleCard('difference')}
                            title="Haz click para conocer más"
                        >
                            <h3 className="text-lg font-bold">¿Son lo mismo los algoritmos y los programas?</h3>
                        </div>
                    </div>
                </div>
            ) : (
                // Layout cuando hay una tarjeta activa
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Sidebar con las tarjetas */}
                    <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto snap-x lg:snap-none snap-mandatory">
                        <div 
                            className={`${blockStyle} ${activeCard === 'programming' ? 'border-black border-4' : ''}`}
                            onClick={() => toggleCard('programming')}
                            title="Haz click para conocer más"
                        >
                            <h3 className="text-lg font-bold">¿Qué es la programación?</h3>
                        </div>
                        <div 
                            className={`${blockStyle} ${activeCard === 'purpose' ? 'border-black border-4' : ''}`}
                            onClick={() => toggleCard('purpose')}
                            title="Haz click para conocer más"
                        >
                            <h3 className="text-lg font-bold">¿Para qué sirve programar?</h3>
                        </div>
                        <div 
                            className={`${blockStyle} ${activeCard === 'languages' ? 'border-black border-4' : ''}`}
                            onClick={() => toggleCard('languages')}
                            title="Haz click para conocer más"
                        >
                            <h3 className="text-lg font-bold">¿Cuáles son los lenguajes de programación?</h3>
                        </div>
                        <div 
                            className={`${blockStyle} ${activeCard === 'algorithm' ? 'border-black border-4' : ''}`}
                            onClick={() => toggleCard('algorithm')}
                            title="Haz click para conocer más"
                        >
                            <h3 className="text-lg font-bold">¿Qué es un algoritmo?</h3>
                        </div>
                        <div 
                            className={`${blockStyle} ${activeCard === 'program' ? 'border-black border-4' : ''}`}
                            onClick={() => toggleCard('program')}
                            title="Haz click para conocer más"
                        >
                            <h3 className="text-lg font-bold">¿Qué es un programa?</h3>
                        </div>
                        <div 
                            className={`${blockStyle} ${activeCard === 'difference' ? 'border-black border-4' : ''}`}
                            onClick={() => toggleCard('difference')}
                            title="Haz click para conocer más"
                        >
                            <h3 className="text-lg font-bold">¿Son lo mismo los algoritmos y los programas?</h3>
                        </div>
                    </div>
                    
                    {/* Contenido de la tarjeta activa */}
                    <div className="flex-1">
                        {renderContent()}
                    </div>
                </div>
            )}
            <div className='flex fixed bottom-16 right-6 z-50'>
                <button className="bg-black text-white p-2 rounded-md" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    Ver más... <i className="bx bx-chevrons-down"></i>
                </button>
            </div>
            {isMenuOpen && (
                <div className="fixed bottom-28 right-8 flex flex-col gap-2">
                    <Link to="variables" className="bg-gray-600 text-white p-2 rounded-md shadow-xl">Variables</Link>
                </div>
            )}
        </div>
    );
};

export default Introduction;
