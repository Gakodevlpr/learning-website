import { ReactNode } from 'react';
import logo from '../../logo/logogako.png';
import ThemeToggle from './ThemeToggle';
import CookieConsent from './CookieConsent';
import { Link } from 'react-router-dom';
import MenuGeneral from './MenuGeneral';

interface LayoutProps {
  children: ReactNode;
}


const Layout = ({ children }: LayoutProps) => {

  return (
    <div className="layout min-h-screen flex flex-col">
      <div id="header" className="header flex p-4 justify-between items-center border-b-2 border-white sticky top-0 z-10 w-full">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo de Gakodvlpr" height={50} width={50} className="rounded-full py-2"/>
          <Link to='/' className="text-3xl font-bold font-mono">Gakodevlpr</Link>
        </div>
        {/*Trabajando en una barra de búsqueda -> <SearchBar /> este es el elemento que deberé colocar*/}
        <div className='flex justify-end items-center gap-2'>
        <ThemeToggle/>
        <MenuGeneral/>
        </div>
      </div>
      <main className="content flex-1 p-4">
        {children}
      </main>
      <footer className="footer flex justify-center items-center border-2 border-gray-300 p-auto font-mono">
        <p>© 2025 Gakodvlpr</p>
      </footer>
      <CookieConsent />
    </div> 
  );
};

export default Layout;