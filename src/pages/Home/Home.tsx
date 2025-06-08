import cvfoto from '../../images/cvfoto.jpeg';
import Titles from '../../components/Titles';
import RatingSystem from './RatingSystem.tsx';

const Homepage = () => {

    return (
        <div className="flex flex-col p-8">
            <Titles title='Bienvenide a mis apuntes' text='Aquí encontrarás mis notas y apuntes sobre desarrollo web, programación y tecnología. Este sitio está en constante actualización mientras aprendo nuevas habilidades y conceptos.'/>
            <div className="flex flex-col md:flex-row items-center rounded-lg p-4">
                <div className='flex flex-col items-center gap-5 order-2 md:order-1'>
                    <div className="w-64 h-64 md:w-40 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0 mx-auto md:mx-0">
                        <img src={cvfoto} alt="Foto de perfil" className="w-full h-full object-cover" />
                        <div className="w-full h-full bg-gradient-to-br flex items-center justify-center  text-4xl">
                            <i className='bx bxs-user'></i>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <a
                            href="https://github.com/gakodevlpr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-lg"
                        >
                            <i className='bx bxl-github text-xl'></i>
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gabriel-cerezuela-mazar%C3%ADo-196759223/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-lg"
                        >
                            <i className='bx bxl-linkedin text-xl'></i>
                            LinkedIn
                        </a>
                    </div>
                </div>
                <div className="flex-1">
                    <h3 id="about-me" className="text-center md:text-start font-bold text-xl py-4">Me presento...</h3>
                    <p className=" text-justify md:text-left">
                        Me llamo Gabriel, soy un apasionado por la tecnología y la programación. Siempre ando aprendiendo cosas nuevas
                        por mi ansia de descubrir nuevos temas. Nunca he estudiado nada relacionado con la informática ni la programación,
                        pero debo reconocer que de forma autodidacta ya llevo bastantes horas de estudio encima...
                        Es por ello que se me ocurrió hace tiempo crear esta web, un sitio en el que poder volcar todo aquello que voy
                        descubriendo poco a poco y, de esta forma, poder compartir mis conocimientos con otres.
                    </p>
                    <div className="mt-4 border-t border-white/30 pt-4">
                        <p className="text-center">
                            Desde octubre de 2024, estoy aprendiendo desarrollo web y programación. Algunos de los lenguajes que
                            poco a poco estoy aprendiendo son:
                        </p>
                    </div>
                    <div id='lenguages' className="mt-4 pb-4 flex flex-wrap gap-2 justify-center">
                        <span className="px-3 py-1 rounded-full text-sm">HTML</span>
                        <span className="px-3 py-1 rounded-full text-sm">JavaScript</span>
                        <span className="px-3 py-1 rounded-full text-sm">React</span>
                        <span className="px-3 py-1 rounded-full text-sm">TypeScript</span>
                        <span className="px-3 py-1 rounded-full text-sm">Python</span>
                        <span className="px-3 py-1 rounded-full text-sm">CSS</span>
                    </div>
                </div>
            </div>
            <div className='pt-8'>
                <RatingSystem/>
            </div>
        </div>
    );
};

export default Homepage;
