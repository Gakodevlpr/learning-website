import { useEffect, useState } from "react";

interface Term {
  name: string;
  explanation: string;
  term_definition?: string;
}

const TailwindExplanations = () => {
  const [search, setSearch] = useState("");
  const [filteredTerms, setFilteredTerms] = useState<Term[]>([]);
  const [terms, setTerms] = useState<Term[]>([]);

  // Cargar términos al iniciar
  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/terms');
        const data = await response.json();
        setTerms(Object.values(data.terms));
        setFilteredTerms(Object.values(data.terms));
      } catch (error) {
        console.error('Error al cargar los términos:', error);
      }
    };
    fetchTerms();
  }, []);

  // Filtrar términos cuando cambia la búsqueda
  useEffect(() => {
    const results = terms.filter((term) =>
      `${term.name} ${term.explanation} ${term.term_definition || ""}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
    setFilteredTerms(results);
  }, [search, terms]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTerm = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      explanation: (document.getElementById('description') as HTMLInputElement).value,
      term_definition: (document.getElementById('explanation') as HTMLInputElement).value
    };

    try {
      const response = await fetch('http://localhost:3001/api/terms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTerm)
      });
      
      if (response.ok) {
        alert('Término añadido correctamente');
        // Limpiar el formulario
        (document.getElementById('name') as HTMLInputElement).value = '';
        (document.getElementById('description') as HTMLInputElement).value = '';
        (document.getElementById('explanation') as HTMLInputElement).value = '';
        
        // Recargar los términos
        const updatedResponse = await fetch('http://localhost:3001/api/terms');
        const updatedData = await updatedResponse.json();
        setTerms(Object.values(updatedData.terms));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al añadir el término');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Términos de TailwindCSS</h1>
      <input
        type="text"
        placeholder="Buscar término..."
        className="mb-4 px-4 py-2 border rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-col gap-4 border-2 border-gray-300 rounded-md p-4 items-center">
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input
              id="name"
              type="text"
              placeholder="Término"
              className="px-4 py-2 border rounded"
              required
            />
            <input
              id="description"
              type="text"
              placeholder="Descripción"
              className="px-4 py-2 border rounded"
              required
            />
            <input
              id="explanation"
              type="text"
              placeholder="Explicación"
              className="px-4 py-2 border rounded"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="submit"
              value="Introducir nuevo término"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
            />
            <button
              type="button"
              onClick={() => {
                (document.getElementById('name') as HTMLInputElement).value = '';
                (document.getElementById('description') as HTMLInputElement).value = '';
                (document.getElementById('explanation') as HTMLInputElement).value = '';
              }}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
      <div id="table-container" className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Término</th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Explicación</th>
            </tr>
          </thead>
          <tbody>
            {filteredTerms.map((term, index) => (
              <tr key={index} className="hover:bg-blue-500">
                <td className="px-6 py-4 border-b whitespace-nowrap">{term.name}</td>
                <td className="px-6 py-4 border-b">{term.explanation}</td>
                <td className="px-6 py-4 border-b">{term.term_definition || "-"}</td>
              </tr>
            ))}
            {filteredTerms.length === 0 && (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                  No se encontraron resultados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TailwindExplanations;
