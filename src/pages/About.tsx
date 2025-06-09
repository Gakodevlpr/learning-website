import Titles from '../components/Titles';

const About = () => {
    return (
        <div className="flex flex-col p-8 gap-8">
            <Titles 
                title="Sobre este proyecto" 
                text="Descubre más sobre el propósito de esta web y mi viaje de aprendizaje en programación."
            />
            
            <div className="flex flex-col gap-8">
                {/* Sección: Propósito del Proyecto */}
                <section className="bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold mb-4">¿Por qué esta web?</h2>
                    <p className="text-justify">
                        Esta web nació de mi pasión por aprender y compartir conocimientos. Como desarrollador autodidacta,
                        entiendo los desafíos de aprender programación desde cero. Por eso, decidí crear este espacio
                        donde documento mi viaje de aprendizaje y comparto recursos que pueden ayudar a otros principiantes.
                    </p>
                </section>

                {/* Sección: Metodología de Aprendizaje */}
                <section className="bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold mb-4">Mi método de aprendizaje</h2>
                    <div className="space-y-4">
                        <p className="text-justify">
                            Mi enfoque para aprender programación se basa en tres pilares fundamentales:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <span className="font-semibold">Aprendizaje activo:</span> Creo proyectos prácticos,
                                como esta web, para aplicar lo que aprendo.
                            </li>
                            <li>
                                <span className="font-semibold">Documentación:</span> Tomo notas detalladas y las
                                comparto aquí para reforzar mi comprensión.
                            </li>
                            <li>
                                <span className="font-semibold">Comunidad:</span> Aprendo de otros desarrolladores
                                y comparto mis conocimientos para ayudar a más personas.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Sección: Tecnologías Utilizadas */}
                <section className="bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold mb-4">Tecnologías en esta web</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">Frontend</h3>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>React con TypeScript</li>
                                <li>Vite como bundler</li>
                                <li>TailwindCSS para estilos</li>
                                <li>React Router para navegación</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">Características</h3>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Diseño responsive</li>
                                <li>Modo oscuro/claro</li>
                                <li>Animaciones suaves</li>
                                <li>Contenido interactivo</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Sección: Planes Futuros */}
                <section className="bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold mb-4">Planes futuros</h2>
                    <p className="text-justify mb-4">
                        Este proyecto está en constante evolución. Algunos de mis planes incluyen:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Añadir más contenido sobre diferentes lenguajes y tecnologías</li>
                        <li>Implementar ejercicios prácticos interactivos</li>
                        <li>Crear una sección de recursos recomendados</li>
                        <li>Mejorar la accesibilidad y el rendimiento</li>
                    </ul>
                </section>

                {/* Sección: Contacto */}
                <section className="bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold mb-4">¿Quieres contactarme?</h2>
                    <p className="text-justify">
                        Si tienes sugerencias, preguntas o simplemente quieres conectar, puedes encontrarme en:
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a 
                            href="https://github.com/gakodevlpr" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-lg"
                        >
                            <i className='bx bxl-github text-2xl'></i>
                            GitHub
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/gabriel-cerezuela-mazar%C3%ADo-196759223/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-lg"
                        >
                            <i className='bx bxl-linkedin text-2xl'></i>
                            LinkedIn
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;