import { useState } from 'react';

interface ChallengeProps {
  title: string;
  description: string;
  initialCode: string;
  expectedOutput: string;
}

const CodeChallenge = ({ title, description, initialCode, expectedOutput }: ChallengeProps) => {
  const [code, setCode] = useState<string>(initialCode);
  const [output, setOutput] = useState<string>('');
  const [success, setSuccess] = useState<boolean | null>(null);
  
  const runCode = () => {
    try {
      // Esta es una implementación simplificada
      // En un caso real, necesitarías un entorno seguro para ejecutar código
      const result = eval(`
        const console = {
          log: function(msg) { return msg; }
        };
        ${code}
      `);
      
      setOutput(String(result));
      setSuccess(String(result).trim() === expectedOutput.trim());
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`);
      setSuccess(false);
    }
  };
  
  return (
    <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700 my-6">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="mb-4">{description}</p>
      
      <div className="mb-4">
        <label htmlFor="code-editor" className="block mb-2 font-semibold">Tu código:</label>
        <textarea
          id="code-editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-40 bg-gray-900 text-white font-mono p-4 rounded-md"
        />
      </div>
      
      <div className="flex gap-4 mb-4">
        <button 
          onClick={runCode}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Ejecutar código
        </button>
        <button 
          onClick={() => setCode(initialCode)}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Reiniciar
        </button>
      </div>
      
      {output && (
        <div className={`p-4 rounded-md ${success === true ? 'bg-green-900/50' : success === false ? 'bg-red-900/50' : 'bg-gray-700'}`}>
          <h4 className="font-semibold mb-2">Resultado:</h4>
          <pre className="font-mono">{output}</pre>
          
          {success === true && (
            <div className="mt-2 text-green-400">
              ¡Correcto! Has completado el desafío.
            </div>
          )}
          
          {success === false && (
            <div className="mt-2 text-red-400">
              Casi... Intenta de nuevo. El resultado esperado es: {expectedOutput}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CodeChallenge;