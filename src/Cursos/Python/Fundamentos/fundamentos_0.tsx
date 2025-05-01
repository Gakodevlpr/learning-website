import pythonLogo from '../img/python-logo-generic.svg'

const Fundamentos = () => {
    return (
        <div>
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold p-4 border-b-2 border-white">Fundamentos de Python 1.0</h1>
            </div>
            <div className="flex flex-col gap-4 text-justify">
                <h2 className="text-xl font-bold pt-6">Te acabas de decidir a aprender Python y, como es normal, te preguntarás... ¿Por dónde debo empezar?</h2>
                <p className="text-white">
                    Para empezar, te recomiendo que te descargues el editor de código que más te guste.
                    Con el que yo empecé fue con <a href="https://code.visualstudio.com/" className="text-black font-bold hover:text-red-800">
                    Visual Studio Code</a> (una vez instalado, te sugiero que veas este pequeño tutorial oficial de 7 minutos que es una guía 
                    para novatos <i className='bx bx-chevrons-right'></i> <a href="https://www.youtube.com/watch?v=T1nHfZ-Z0-8" className="text-black font-bold hover:text-red-800">Tutorial de Visual Studio Code</a><i className='bx bx-chevrons-left'></i>).
                    Es un editor de código muy potente y compatible con cualquier sistema operativo. 
                </p>
                <p className="text-white"><em>Pero... esto es un editor de código, ¿qué es lo que me va a enseñar?</em><br/>
                Tienes razón, es un editor de código, pero no te preocupes, ya vamos llegando a la instalación de Python.</p>
                <p className="text-white">
                    Instalar este lenguaje de programación es muy fácil, solo tienes que ir a su página web oficial y descargar el 
                    instalador.&nbsp;  <i className='bx bx-chevrons-right'></i>
                    <div className="relative group inline-block">
                        <a href="https://www.python.org/downloads/" aria-label="Web oficial de Python" className="text-black font-bold hover:text-red-800">Python</a>
                        <div className="absolute left-0 mt-2 w-64 p-4 bg-white/50 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200 opacity-0 scale-0 transform transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 z-10">
                            <img src={pythonLogo} alt="Python Logo" className="w-32 h-auto" />
                            <h3 className="text-lg font-semibold mb-2 text-black">Web oficial de Python</h3>
                            <p className="text-sm text-gray-600">Descarga el instalador de Python desde esta web.</p>
                        </div>
                    </div>
                    <i className='bx bx-chevrons-left'></i>
                </p>

            </div>
        </div>
    )
}

export default Fundamentos;