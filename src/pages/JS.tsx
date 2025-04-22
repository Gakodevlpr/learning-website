import { useState } from 'react';

type CardName = 'variables' | 'types';

const transitionCards = "bg-white/10 rounded-xl shadow-xl p-4 backdrop-blur-sm transition-all duration-1000 border-2 border-white hover:bg-white hover:text-black hover:cursor-pointer"

const JS = () => {
    const [showCards, setShowCards] = useState({
        variables: false,
        types: false,
        // Aquí puedes agregar más tarjetas
    });

    const toggleCard = (cardName: CardName) => {
        setShowCards(prev => ({
            ...prev,
            [cardName]: !prev[cardName]
        }));
    };

    return (
        <div>
            <h1 className='text-4xl font-bold text-white'>JS</h1>
            <h2 className='text-xl font-semibold text-white underline'>Aprendiendo JavaScript</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <div>
                    <h2 
                        className={transitionCards}
                        onClick={() => toggleCard('variables')}
                    >
                        Variables
                    </h2>
                    {showCards.variables && (
                        <div className="border-2 border-white rounded-xl p-2 mt-2 text-white bg-gray-800">
                            <p>Las variables son contenedores para almacenar valores de datos.</p>
                            <p>Se declaran con la palabra reservada <code>var</code>, <code>let</code> o <code>const</code>.</p>
                            <p>Las variables se pueden declarar con o sin inicializar.</p>
                            <p>Las variables se pueden redeclarar.</p>
                            <p>Las variables se pueden reasignar.</p>
                        </div>
                    )}
                </div>

                <div>
                    <h2 
                        className={transitionCards}
                        onClick={() => toggleCard('types')}
                    >
                        Tipos de datos
                    </h2>
                    {showCards.types && (
                        <div className="border-2 border-white rounded-xl p-2 mt-2 text-white">
                            <p>Los tipos de datos en JavaScript son:</p>
                            <ul>
                                <li>· Number</li>
                                <li>· String</li>
                                <li>· Boolean</li>
                                <li>· Null</li>
                                <li>· Undefined</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JS;
