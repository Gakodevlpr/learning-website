import MenuButton from "../components/MenuButton";
import PythonPlayground from "../components/PythonPlayground";
import Titles from "../components/Titles";

const Python = () => {
    return (
        <div className="flex flex-col p-8 gap-8">
            <Titles title="Python" text={
                'En este apartado encontrarás información sobre el lenguaje de programación Python. Desde información general hasta temas avanzados, los cuales podrás encontrar haciendo click en el menú <em>"Unidades del curso"</em>.'}/>
            <div id="TextoPrincipal" className="flex flex-col md:flex-col justify-center gap-4">
                <div className="rounded-lg flex flex-col gap-4 md:w-8/10">
                    <h2 className="text-center text-bold text-xl">¿Qué es Python?</h2>
                    <p className="text-justify">Python es un lenguaje de programación interpretado de alto nivel que se utiliza para desarrollar aplicaciones de todo tipo. Su sintaxis clara y su enfoque en la legibilidad del código lo hacen ideal para principiantes y expertos en programación.</p>
                    <p className="text-justify">Aquí podrás encontrar distintos niveles de aprendizaje para Python. <em className="font-bold">¡Espero que te sean de ayuda!</em></p>
                    <div id="historia" className="flex flex-col gap-4">
                        <h3 className="font-bold text-xl bg-green-900 p-2 rounded-md">Historia:</h3>
                        <p className="text-justify">
                        Este lenguaje es uno de los más populares y versátiles del mundo. Creado por Guido van Rossum en 1989.
                        <br/><br/>
                        Aunque es considerado muchas veces como un lenguaje "scripting", en realidad es un lenguaje de propósito general. Actualmente
                        es usado en muchas áreas como: <em className="font-bold">Desarrollo web, Inteligencia Artificial, Ciencia de datos, etc.</em> 
                        Incluso en grandes servidores web que proveen servicio ininterrumpido los 365 días del año.
                        <br/><br/>
                        Guido van Rossum es un programador holandés que trabajaba en el CWI (Centrum Wiskunde & Informatica) cuando comenzó a desarrollar Python.
                        A finales de la década de los 80 (1989), Guido Van Rossum decidió crear un nuevo lenguaje de programación por necesidad personal,
                        buscando así tener un lenguaje que fuera fácil de leer, escribir y soportar. Quería hacerlo de forma que los programas fueran
                        fáciles de leer y escribir, o mejor dicho, con una sintáxis simple y limpia.
                        <br/><br/>
                        Recibió influencia de muchos otros lenguajes, como ABC, Modula-3 y C++ entre otros.
                        </p>
                    </div>
                    <div id="usos" className="flex flex-col gap-4">
                        <h3 className="font-bold text-xl bg-green-900 p-2 rounded-md">Usos:</h3>
                        <p className="text-justify">
                        Algunos de los usos más comunes de Python incluyen:
                        <ul className="list-disc pl-8 pt-2 space-y-2">
                            <li>Desarrollo web</li>
                            <li>Inteligencia Artificial</li>
                            <li>Ciencia de datos</li>
                            <li>Automatización de tareas</li>
                            <li>Aplicaciones móviles</li>
                            <li>Aplicaciones de escritorio</li>
                            <li>Aplicaciones de servidor</li>
                            <li>Aplicaciones de red</li>
                            <li>Y muchas más...</li>
                        </ul>
                        </p>
                    </div>
                </div>
                <h2 className="font-bold text-xl bg-gray-600 p-2 rounded-md">Playground de Python</h2>
                <div>
                    <PythonPlayground/>
                    <MenuButton 
                        menuText="Unidades del curso" links={[
                            {path:"fundamentos", text:"Fundamentos"},
                    ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Python;
