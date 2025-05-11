import { useState, useEffect } from 'react';

interface Preferences {
  fontSize: string;
  codeTheme: string;
  learningSpeed: string;
  showHints: boolean;
}

const UserPreferences = () => {
  const [preferences, setPreferences] = useState<Preferences>({
    fontSize: 'medium',
    codeTheme: 'dark',
    learningSpeed: 'normal',
    showHints: true
  });
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  useEffect(() => {
    // Cargar preferencias guardadas
    const savedPrefs = localStorage.getItem('user_preferences');
    if (savedPrefs) {
      setPreferences(JSON.parse(savedPrefs));
    }
    
    // Aplicar preferencias al documento
    document.documentElement.setAttribute('data-font-size', preferences.fontSize);
    document.documentElement.setAttribute('data-code-theme', preferences.codeTheme);
    document.documentElement.setAttribute('data-learning-speed', preferences.learningSpeed);
    document.documentElement.setAttribute('data-show-hints', preferences.showHints.toString());
  }, [preferences]);
  
  const updatePreference = (key: keyof Preferences, value: any) => {
    const newPrefs = { ...preferences, [key]: value };
    setPreferences(newPrefs);
    localStorage.setItem('user_preferences', JSON.stringify(newPrefs));
  };
  
  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-16 left-4 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors z-50"
        aria-label="Preferencias de usuario"
      >
        <i className='bx bx-cog text-xl'></i>
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 shadow-2xl max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Personaliza tu experiencia</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <i className='bx bx-x text-2xl'></i>
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold">Tamaño de texto</label>
                <div className="flex gap-2">
                  {['small', 'medium', 'large'].map(size => (
                    <button
                      key={size}
                      onClick={() => updatePreference('fontSize', size)}
                      className={`px-4 py-2 rounded-md ${
                        preferences.fontSize === size 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-700 text-gray-300'
                      }`}
                    >
                      {size === 'small' ? 'Pequeño' : size === 'medium' ? 'Mediano' : 'Grande'}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block mb-2 font-semibold">Tema de código</label>
                <div className="flex gap-2">
                  {['dark', 'light', 'monokai'].map(theme => (
                    <button
                      key={theme}
                      onClick={() => updatePreference('codeTheme', theme)}
                      className={`px-4 py-2 rounded-md ${
                        preferences.codeTheme === theme 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-700 text-gray-300'
                      }`}
                    >
                      {theme === 'dark' ? 'Oscuro' : theme === 'light' ? 'Claro' : 'Monokai'}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block mb-2 font-semibold">Velocidad de aprendizaje</label>
                <div className="flex gap-2">
                  {['slow', 'normal', 'fast'].map(speed => (
                    <button
                      key={speed}
                      onClick={() => updatePreference('learningSpeed', speed)}
                      className={`px-4 py-2 rounded-md ${
                        preferences.learningSpeed === speed 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-700 text-gray-300'
                      }`}
                    >
                      {speed === 'slow' ? 'Lento' : speed === 'normal' ? 'Normal' : 'Rápido'}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.showHints}
                    onChange={(e) => updatePreference('showHints', e.target.checked)}
                    className="w-5 h-5"
                  />
                  <span>Mostrar pistas y ayudas</span>
                </label>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Guardar preferencias
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserPreferences;