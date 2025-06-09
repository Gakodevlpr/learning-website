import { useState } from 'react';
import icono_pruebas from '../../../images/icons/icono_pruebas.png';

const Fundamentos = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-col p-4 gap-4">
            <h1 className="text-4xl font-bold p-4 border-b-2 border-white">Fundamentos de Python</h1>
            
            {/* Botón del menú */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="fixed bottom-4 right-4 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
            >
                <img src={icono_pruebas} alt="Menú" className="w-6 h-6" />
            </button>

            {/* Menú desplegable */}
            {isMenuOpen && (
                <div className="fixed bottom-20 right-4 bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col gap-2">
                    <a href="#" className="text-white hover:bg-gray-700 px-4 py-2 rounded-md transition-colors">
                        Variables y Tipos de Datos
                    </a>
                    <a href="#" className="text-white hover:bg-gray-700 px-4 py-2 rounded-md transition-colors">
                        Operadores
                    </a>
                    <a href="#" className="text-white hover:bg-gray-700 px-4 py-2 rounded-md transition-colors">
                        Estructuras de Control
                    </a>
                    <a href="#" className="text-white hover:bg-gray-700 px-4 py-2 rounded-md transition-colors">
                        Funciones
                    </a>
                </div>
            )}
        </div>
    );
};

export default Fundamentos;
