import React from 'react';

const Homepage = () => {
    const [rating, setRating] = React.useState(0);
    const [hover, setHover] = React.useState(0);

    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <h2 className="text-center font-bold text-2xl p-4">Bienvenide a mis apuntes</h2>
                <div className="hidden md:block h-8 border-r border-gray-300"></div>
                <div className="block md:hidden w-full border-b border-gray-300"></div>
                <p className="flex flex-col px-8 text-justify">Aquí encontrarás mis notas y apuntes sobre desarrollo web, programación y tecnología. Este sitio está en constante actualización mientras aprendo nuevas habilidades y conceptos. Espero que te sean de ayuda.</p>
            </div>
            <div className="flex flex-col">
                <h2 id="about-me" className="text-center font-bold text-2xl py-4">Sobre mí</h2>
                <p className="text-center">Soy un apasionado por la tecnología y la programación. Me gusta aprender cosas nuevas y compartir mis conocimientos con otros.</p>
                <p className="text-center">Desde octubre de 2024, estoy aprendiendo desarrollo web y programación.</p>
            </div>
            <div className="flex flex-col">
                <h2 id="about-me" className="text-center font-bold text-2xl py-4">Redes sociales</h2>
                <div className="flex flex-col gap-4">
                    {/* Faltaría añadir más estilos para que se vean mejor */}
                    <a href="https://github.com/gakodevlpr" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/gabriel-cerezuela-mazar%C3%ADo-196759223/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-center font-bold text-2xl py-4">Valora mi web</h2>
                <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <i
                            key={star}
                            className={`bx ${hover >= star || rating >= star ? 'bxs-star' : 'bx-star'} text-yellow-400 text-3xl hover:text-red-500 cursor-pointer`}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                        />
                    ))}
                </div>
                <p className="text-center mt-2">
                    {rating > 0 ? `Gracias por tu valoración de ${rating} estrellas!` : 'Haz click para valorar'}
                </p>
            </div>
        </div>
    );
};

export default Homepage;
