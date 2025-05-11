import React from 'react';
import cvfoto from '../images/cvfoto.jpeg';

const Homepage = () => {
    const [rating, setRating] = React.useState(0);
    const [hover, setHover] = React.useState(0);

    return (
        <div className="flex flex-col p-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <h2 className="text-center font-bold text-2xl">Bienvenide a mis apuntes</h2>
                <span className="hidden md:block h-8 border-r border-gray-300"></span>
                <span className="block md:hidden w-full border-b border-gray-300"></span>
                <p className="px-8 text-justify">
                    Aquí encontrarás mis notas y apuntes sobre desarrollo web, programación y tecnología.
                    Este sitio está en constante actualización mientras aprendo nuevas habilidades y conceptos.
                    <br /><br />
                    Espero que te sean de ayuda.
                </p>
            </div>
            <div className="flex flex-col">
                <div className=" rounded-lg p-4">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="order-2 md:order-1 w-64 h-64 md:w-40 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0 mx-auto md:mx-0">
                            <img src={cvfoto} alt="Foto de perfil" className="w-full h-full object-cover" />
                            <div className="w-full h-full bg-gradient-to-br flex items-center justify-center text-white text-4xl">
                                <i className='bx bxs-user'></i>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 id="about-me" className="text-start font-bold text-xl py-4">Me presento...</h3>
                            <p className="text-white text-justify md:text-left">
                                Me llamo Gabriel, soy un apasionado por la tecnología y la programación. Siempre ando aprendiendo cosas nuevas
                                por mi ansia de descubrir nuevos temas. Nunca he estudiado nada relacionado con la informática ni la programación,
                                pero debo reconocer que de forma autodidacta ya llevo bastantes horas de estudio encima... 
                                Es por ello que se me ocurrió hace tiempo crear esta web, un sitio en el que poder volcar todo aquello que voy
                                descubriendo poco a poco y, de esta forma, poder compartir mis conocimientos con otres.
                            </p>
                            <div className="mt-4 border-t border-white/30 pt-4">
                                <p className="text-white text-justify md:text-left">
                                    Desde octubre de 2024, estoy aprendiendo desarrollo web y programación. Algunos de los lenguajes que
                                    poco a poco estoy aprendiendo son:
                                </p>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">HTML</span>
                                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">CSS</span>
                                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">JavaScript</span>
                                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">React</span>
                                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">TypeScript</span>
                                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Python</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 id="about-me" className="text-center font-bold text-2xl py-4">Redes sociales</h2>
                <div className="flex flex-col gap-4">
                    {/* Faltaría añadir más estilos para que se vean mejor */}
                    <div>
                        <a href="https://github.com/gakodevlpr" target="_blank" rel="noopener noreferrer">GitHub</a>
                        {/*Añadir contenido de tarjeta*/}
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/gabriel-cerezuela-mazar%C3%ADo-196759223/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        {/*Añadir contenido de tarjeta*/}
                    </div>
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
