import { useState } from "react";
import { Link } from "react-router-dom";

// Definimos una interfaz para cada enlace
interface LinkItem {
    path: string;
    text: string;
}

const MenuButton = ({menuText, links}:{menuText:string, links: LinkItem[]}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <div className='flex fixed bottom-16 right-6 z-50'>
                <button className="bg-black text-white p-2 rounded-md" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {menuText} <i className="bx bx-chevrons-down"></i>
                </button>
            </div>
            {isMenuOpen && (
                <div className="fixed bottom-28 right-8 flex flex-col gap-2">
                    {links.map((link, index) => (
                        <Link 
                            key={index} 
                            to={link.path} 
                            className="bg-gray-600 text-white p-2 rounded-md shadow-xl"
                        >
                            {link.text}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MenuButton;