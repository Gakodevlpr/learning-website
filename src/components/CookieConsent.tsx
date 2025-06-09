import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  useEffect(() => {
    // Comprobar si ya existe el consentimiento
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      // Pequeño retraso para que la animación se vea después de cargar la página
      setTimeout(() => {
        setShowBanner(true);
      }, 500);
    }
  }, []);
  
  const acceptCookies = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
    closeBanner();
  };
  
  const rejectCookies = () => {
    Cookies.set('cookieConsent', 'rejected', { expires: 365 });
    closeBanner();
  };
  
  const closeBanner = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowBanner(false);
      setIsClosing(false);
    }, 300);
  };
  
  if (!showBanner) return null;
  
  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg transition-all duration-300 z-50 ${
        isClosing ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <i className='bx bx-cookie text-2xl'></i>
          <p className="text-sm md:text-base text-center">
            Este sitio utiliza cookies para mejorar tu experiencia. Al continuar navegando, aceptas su uso. 
            <span className="font-bold"> Incluso si rechazas las cookies, se guardarán datos esenciales como tus preferencias de cookies.</span>
          </p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={rejectCookies}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md transition-colors"
          >
            Rechazar
          </button>
          <button 
            onClick={acceptCookies}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;