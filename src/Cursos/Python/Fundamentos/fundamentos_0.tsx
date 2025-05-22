import pythonLogo from '../img/python-logo-generic.svg'
import vscodeicon from '../../../images/icons/visual-studio-code-icons/vscode.svg'

const Fundamentos_0 = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold py-2 border-b-2 border-white">Fundamentos de Python 1.0</h1>
            <div id='content_fundamentos0' className="flex flex-col gap-[22px] text-justify p-4">
                <h2 className="text-xl font-bold pt-6">
                    <span className='border-s-[3px] px-2'>
                        Te acabas de decidir a aprender Python y seguramente te preguntes... ¿Por dónde debo empezar?
                    </span>
                </h2>
                <p id='presentation'>
                    Te recomiendo que te descargues el editor de código que más te guste.
                    Con el que yo empecé fue con&nbsp;
                    <span className='relative group inline-block'>
                        <a href="https://code.visualstudio.com/" className="font-bold hover:text-red-800">
                            <i className='bx bx-chevrons-right'></i>
                            Visual Studio Code
                            <i className='bx bx-chevrons-left'></i>
                        </a>
                        <span className="absolute left-[-10] sm:left-0 -right-0 sm:right-auto mt-6 w-44 sm:w-58 p-4 bg-white/50 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200 opacity-0 scale-0 transform transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 z-10">
                            <img src={vscodeicon} alt="VScode icon" className="w-16 sm:w-20 h-auto mx-auto sm:mx-0" />
                            <h3 className="text-xl sm:text-lg font-semibold mb-2 text-center sm:text-left">Web oficial de Visual Studio Code</h3>
                            <p className="text-sm text-gray-800">Descarga el instalador desde esta web.</p>
                        </span>
                    </span>
                    &nbsp;, pero puedes usar cualquier otro que te guste. <br /> <br />
                        Una vez instalado, te sugiero que veas este pequeño tutorial oficial de 7 minutos que es una guía para novatos&nbsp;
                        <a href="https://www.youtube.com/watch?v=T1nHfZ-Z0-8" className=" font-bold hover:text-red-800">
                            <i className='bx bx-chevrons-right'></i>
                            Tutorial de Visual Studio Code
                            <i className='bx bx-chevrons-left'></i>
                        </a>.&nbsp;
                    Este editor que veremos es, en mi opinión, un editor de código muy potente y útil, compatible con cualquier sistema operativo.
                </p>
                <p id='python_installer'>
                    <em className='text-lg border-s-[3px] px-2'>
                        <i className='bx bxs-face' />&nbsp;
                        Pero... esto es un editor de código, ¿no me ibas a enseñar Python?
                    </em>
                    <br /><br />
                    Tienes razón, es un editor de código, pero no te preocupes, ya vamos llegando a la instalación de Python.
                    A continuación lo que vamos a hacer es descargar y ejecutar el instalador. Solo tienes que ir a su página web oficial para encontrarlo.&nbsp;
                    <span className="relative group inline-block">
                        <a href="https://www.python.org/downloads/" aria-label="Web oficial de Python" className=" font-bold hover:text-red-800">
                            <i className='bx bx-chevrons-right'></i>
                            Python
                            <i className='bx bx-chevrons-left'></i>
                        </a>
                        <span className="absolute left-[-10] sm:left-0 -right-0 sm:right-auto mt-6 w-44 sm:w-58 p-4 bg-white/50 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200 opacity-0 scale-0 transform transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 z-10">
                            <img src={pythonLogo} alt="Python Logo" className="w-28 sm:w-32 h-auto mx-auto sm:mx-0" />
                            <h3 className="text-xl sm:text-lg font-semibold mb-2  text-center sm:text-left">Web oficial de Python</h3>
                            <p className="text-sm text-gray-800">Descarga el instalador desde esta web.</p>
                        </span>
                    </span>
                </p>
                <p id='list_components'>
                    Lo que vamos a instalar son varios componentes:
                    <ul className='list-disc list-inside px-4 py-2'>
                        <li>Librerías necesarias.</li>
                        <li>Interprete de Python.</li>
                        <li>Documentación de Python.</li>
                        <li>Varias herramientas básicas (pip, IDLE -Integrated Development and Learning Environment-, etc).</li>
                    </ul>
                </p>
                <p id=''>
                </p>
            </div>
        </div>
    )
}

export default Fundamentos_0;