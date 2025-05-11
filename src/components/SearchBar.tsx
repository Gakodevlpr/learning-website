import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface SearchResult {
  title: string;
  path: string;
  description: string;
  category: string;
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  
  // Datos de ejemplo - en una implementación real, estos vendrían de una API o base de datos
  const allContent: SearchResult[] = [
    { title: "Variables en Programación", path: "/introduction/variables", description: "Conceptos básicos de variables", category: "Introducción" },
    { title: "Fundamentos de JavaScript", path: "/js", description: "Guía de JavaScript", category: "JavaScript" },
    { title: "Python Básico", path: "/python/fundamentos", description: "Fundamentos de Python", category: "Python" },
    { title: "APIs REST", path: "/apis", description: "Guía de APIs", category: "APIs" },
    // Añadir más contenido según tu sitio
  ];
  
  useEffect(() => {
    if (searchTerm.length >= 2) {
      const filtered = allContent.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
      setIsSearching(true);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [searchTerm]);
  
  return (
    <div className="relative">
      <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
        <i className='bx bx-search text-gray-400 mr-2'></i>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar contenido..."
          className="bg-transparent text-white w-full focus:outline-none"
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm('')}
            className="text-gray-400 hover:text-white"
          >
            <i className='bx bx-x'></i>
          </button>
        )}
      </div>
      
      {isSearching && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {results.length === 0 ? (
            <div className="p-4 text-gray-400">
              No se encontraron resultados para "{searchTerm}"
            </div>
          ) : (
            <div>
              {results.map((result, index) => (
                <Link
                  key={index}
                  to={result.path}
                  className="block p-3 hover:bg-gray-700 border-b border-gray-700 last:border-0"
                  onClick={() => setSearchTerm('')}
                >
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-xs text-white px-2 py-1 rounded mr-2">
                      {result.category}
                    </span>
                    <div>
                      <h4 className="font-semibold">{result.title}</h4>
                      <p className="text-sm text-gray-400">{result.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;