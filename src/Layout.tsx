import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import logoGako from '/logo/logogako.png';


interface LayoutProps {
  children: ReactNode;
}

const transitionSpecial = "text-white hover:text-blue-800 p-2 border-l-4 border-white bg-white/10 backdrop-blur-sm transition-all duration-1000 hover:bg-white hover:text-black hover:cursor-pointer"


const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <div className="header flex justify-between items-center border-b-2 border-white ">
        <div className="flex items-center gap-2">
          <img src={logoGako} alt="logo" height={50} width={50} className="rounded-full py-2"/>
          <h1 className="text-4xl font-bold font-mono">Gakodvlpr</h1>
        </div>
        <div className="flex justify-center border-2 border-gray-300 rounded-md p-auto font-mono text-lg">
          <Link to="/" className={`${transitionSpecial} last:border-none`}>Inicio</Link>
          <Link to="/introduction" className={transitionSpecial}>Introducción</Link>
          <Link to="/tailwind-explanations" className={transitionSpecial}>Explicaciones de Tailwind CSS</Link>
          <Link to="/js" className={transitionSpecial}>JavaScript</Link>
        </div>
      </div>
      <div className="content">
        {children}
      </div>
      <div className="footer flex justify-center items-center border-2 border-gray-300 p-auto font-mono">
        <p>© 2025 Gakodvlpr</p>
      </div>
    </div> 
  );
};

export default Layout;