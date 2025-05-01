import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../logo/logogako.png';

interface LayoutProps {
  children: ReactNode;
}

const transitionSpecial = "text-white hover:text-blue-800 p-2 border-white backdrop-blur-lg transition-all duration-500 hover:bg-white hover:text-black hover:cursor-pointer"


const Layout = ({ children }: LayoutProps) => {
  const [navbar, setNavbar] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const location = useLocation();
  
  const toggleNavbar = () => {
    if (navbar) {
      setIsClosing(true)
      setTimeout(() => {
        setNavbar(false)
        setIsClosing(false)
      }, 300) // Duración de la animación
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
    <div className="layout min-h-screen flex flex-col">
      <div id="header" className="header flex p-4 justify-between items-center border-b-2 border-white sticky top-0 z-10 w-full" style={{ backgroundColor: '#0086bb' }}>
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo de Gakodvlpr" height={50} width={50} className="rounded-full py-2"/>
          <h1 className="text-4xl font-bold font-mono">Gakodvlpr</h1>
        </div>
        <div id="menu-icon" className="flex justify-center items-center gap-4">
          {(navbar || isClosing) && (
            <nav className={`absolute py-4 top-full right-0 flex flex-col justify-center gap-2 transition-all duration-300 ${isClosing ? 'opacity-0 -translate-x-full' : 'opacity-100 translate-x-0'}`}>
              <Link 
                to="/" 
                onClick={closeNavbar}
                className={`${transitionSpecial} animation-navbar border-2 border-gray-300 rounded-md p-auto font-mono text-lg ${isActive('/') ? 'font-bold text-black border-l-4 border-l-black' : null}`}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Inicio
              </Link>
              <Link 
                to="/introduction" 
                onClick={closeNavbar}
                className={`${transitionSpecial} animation-navbar border-2 border-gray-300 rounded-md p-auto font-mono text-lg ${isActive('/introduction') ? 'font-bold text-black border-l-4 border-l-black' : null}`}
                aria-current={isActive('/introduction') ? 'page' : undefined}
              >
                Introducción
              </Link>
              <Link 
                to="/js" 
                onClick={closeNavbar}
                className={`${transitionSpecial} animation-navbar border-2 border-gray-300 rounded-md p-auto font-mono text-lg ${isActive('/js') ? 'font-bold text-black border-l-4 border-l-black' : null}`}
                aria-current={isActive('/js') ? 'page' : undefined}
              >
                JavaScript
              </Link>
              <Link
                to="/python"
                onClick={closeNavbar}
                className={`${transitionSpecial} animation-navbar border-2 border-gray-300 rounded-md p-auto font-mono text-lg ${isActive('/python') ? 'font-bold text-black border-l-4 border-l-black' : null}`}
                aria-current={isActive('/python') ? 'page' : undefined}
              >
                Python
              </Link>
              <Link
                to="/apis"
                onClick={closeNavbar}
                className={`${transitionSpecial} animation-navbar border-2 border-gray-300 rounded-md p-auto font-mono text-lg ${isActive('/apis') ? 'font-bold text-black border-l-4 border-l-black' : null}`}
                aria-current={isActive('/apis') ? 'page' : undefined}
              >
                APIs
              </Link>
            </nav>
          )}
          <div className="flex flex-col">
            <button 
              onClick={toggleNavbar} 
              className="bg-white/10 backdrop-blur-sm p-2 rounded-md"
              aria-label="Toggle navigation menu"
              aria-expanded={navbar}
            >
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>
      </div>
      <main className="content flex-1 p-4">
        {children}
      </main>
      <footer className="footer flex justify-center items-center border-2 border-gray-300 p-auto font-mono">
        <p>© 2025 Gakodvlpr</p>
      </footer>
    </div> 
  );
};

export default Layout;