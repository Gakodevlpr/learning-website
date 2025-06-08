import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // Cambiar a un estado que maneje múltiples temas
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );
  
  useEffect(() => {
    // Eliminar todas las clases de tema primero
    document.documentElement.classList.remove('dark', 'dark-high-contrast', 'light');
    
    // Aplicar la clase correspondiente al tema actual
    document.documentElement.classList.add(theme);
    
    // Guardar el tema en localStorage
    localStorage.setItem('theme', theme);
    
    // Aplicar variables CSS específicas para el tema de alto contraste
    if (theme === 'dark-high-contrast') {
      document.documentElement.style.setProperty('--background-color', '#000000');
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--border-color', '#ffffff');
      document.documentElement.style.setProperty('--accent-color', '#ffff00');
    } else {
      document.documentElement.style.removeProperty('--background-color');
      document.documentElement.style.removeProperty('--text-color');
      document.documentElement.style.removeProperty('--border-color');
      document.documentElement.style.removeProperty('--accent-color');
    }
  }, [theme]);
  
  // Función para cambiar entre los tres temas
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('dark-high-contrast');
    } else {
      setTheme('light');
    }
  };
  
  return (
    <button 
      onClick={toggleTheme}
      className="bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
      aria-label="Cambiar tema"
    >
      {theme === 'light' ? (
        <i className='bx bx-sun text-yellow-400 text-xl'></i>
      ) : theme === 'dark' ? (
        <i className='bx bx-moon text-white-800 text-xl'></i>
      ) : (
        <i className='bx bx-moon text-blue-400 text-xl'></i>
      )}
    </button>
  );
};

export default ThemeToggle;