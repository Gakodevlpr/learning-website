const Introduction = () => {
    return (
            <div className="introduction">
                <h2>Introducción</h2>
                <p>Bienvenido a la sección de introducción. Aquí encontrarás los conceptos básicos.</p>
                <div className="flex gap-4 justify-start">
                    <div className="flex flex-col gap-2 border-2 border-gray-300 rounded-md p-auto  ">
                        <h3 className="text-lg font-bold">¿Qué es la programación?</h3>
                        <p>La programación es el proceso de crear programas o aplicaciones que realizan tareas específicas en una computadora.</p>                    
                    </div>
                    <div className="flex flex-col gap-2 border-2 border-gray-300 rounded-md p-auto  ">
                        <h3 className="text-lg font-bold">¿Para qué sirve la programación?</h3>
                        <p>La programación es útil para crear aplicaciones y programas que realizan tareas específicas en una computadora.</p>
                    </div>
                </div>
            </div>
    );
};

export default Introduction;
