import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuGeneral = () => {
    const transitionSpecial = "text-lg p-[4px] border-white backdrop-blur-2xl transition-all duration-700 hover:text-black hover:hover:bg-white hover hover:cursor-pointer animation-navbar border-2 rounded-xl"

    const [navbar, setNavbar] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const location = useLocation();
    
    // Añadimos este useEffect para cerrar el menú cuando cambie la ruta
    useEffect(() => {
        if (navbar) {
            setIsClosing(true);
            setTimeout(() => {
                setNavbar(false);
                setIsClosing(false);
            }, 300);
        }
    }, [location.pathname]); // Se ejecutará cada vez que cambie la ruta

    const toggleNavbar = () => {
        if (navbar) {
            setIsClosing(true)
            setTimeout(() => {
                setNavbar(false)
                setIsClosing(false)
            }, 300)
        } else {
            setNavbar(true)
        }
    }
  
    const closeNavbar = () => {
      setIsClosing(true)
      setTimeout(() => {
        setNavbar(false)
        setIsClosing(false)
      }, 300)
    }
  
    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="flex justify-center items-center gap-4">
        {(navbar || isClosing) && (
          <nav id='menuGeneral' className={`absolute py-4 top-full right-0 flex flex-col justify-center gap-2 transition-all duration-300 ${isClosing ? 'opacity-0 -translate-x-full' : 'opacity-100 translate-x-0'}`}>
            <Link 
              to="/" 
              id='linkNav'
              onClick={closeNavbar}
              className={`${transitionSpecial} ${isActive('/') ? 'border-l-8 border-l-cyan-500' : null}`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Inicio
            </Link>
            <Link 
              to="/introduction" 
              id='linkNav'
              onClick={closeNavbar}
              className={`${transitionSpecial} ${isActive('/introduction') ? 'border-l-8 border-l-cyan-500' : null}`}
              aria-current={isActive('/introduction') ? 'page' : undefined}
            >
              Introducción
            </Link>
            <Link
              to="/python"
              id='linkNav'
              onClick={closeNavbar}
              className={`${transitionSpecial} ${isActive('/python') ? 'border-l-8 border-l-cyan-500' : null}`}
              aria-current={isActive('/python') ? 'page' : undefined}
            >
              Python
            </Link>
            <Link 
              to="/js" 
              id='linkNav'
              onClick={closeNavbar}
              className={`${transitionSpecial} ${isActive('/js') ? 'border-l-8 border-l-cyan-500' : null}`}
              aria-current={isActive('/js') ? 'page' : undefined}
            >
              JavaScript
            </Link>
            <Link
              to="/apis"
              id='linkNav'
              onClick={closeNavbar}
              className={`${transitionSpecial} ${isActive('/apis') ? 'border-l-8 border-l-cyan-500' : null}`}
              aria-current={isActive('/apis') ? 'page' : undefined}
            >
              APIs
            </Link>
          </nav>
        )}
        <div className="flex flex-col">
          <button 
            onClick={toggleNavbar} 
            className="bg-white/10 backdrop-blur-sm p-5 rounded-md relative h-[30px] w-[30px] flex flex-col justify-center items-center"
            aria-label="Toggle navigation menu"
            aria-expanded={navbar}
          >
            <div 
              className={`w-6 h-0.5 bg-white absolute transition-all duration-300 ${
                navbar ? 'rotate-45' : 'transform translate-y-[-6px]'
              }`}
            ></div>
            <div 
              className={`w-6 h-0.5 bg-white absolute transition-all duration-300 ${
                navbar ? 'opacity-0' : ''
              }`}
            ></div>
            <div 
              className={`w-6 h-0.5 bg-white absolute transition-all duration-300 ${
                navbar ? '-rotate-45' : 'transform translate-y-[6px]'
              }`}
            ></div>
          </button>
        </div>
      </div>
    )
}

export default MenuGeneral;