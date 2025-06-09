import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { CopyToClipboard } from "react-copy-to-clipboard";

type RunResult = {
  stdout: string;
  stderr: string;
  code: number;
};

const PythonPlayground: React.FC = () => {
  const [code, setCode] = useState<string>('\'\'\'Esto es un comentario.\nComienza escribiendo tu código aquí abajo ↓↓↓\'\'\'\n\nprint("¡Hola, mundo!")');
  const [output, setOutput] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const runCode = async () => {
    setOutput("⏳ Ejecutando...");

    const res = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: "python3",
        version: "3.10.0",
        files: [{ name: "main.py", content: code }],
      }),
    });

    const data = await res.json();
    const result: RunResult = data.run;

    const formattedOutput =
      result.stdout || result.stderr || "❌ Sin salida";

    setOutput(formattedOutput);
  };

  // Función para manejar el estado de copiado
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // El mensaje desaparecerá después de 2 segundos
  };

  return (
    <div className="flex flex-col w-full min-h-screen gap-6 p-4">
      <h2 className="font-bold text-xl bg-gray-600 p-2 rounded-md">Playground de Python</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-4 h-[300px] border-2 rounded-lg overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage="python"
            value={code}
            onChange={(value) => setCode(value || "")}
            theme="vs-dark"
            options={{
              fontSize: 14,
              fontFamily: "Fira Code, monospace",
              minimap: { enabled: false },
              lineNumbers: "on",
              wordWrap: "on",
              scrollBeyondLastLine: false,
              tabSize: 4,
              automaticLayout: true,
            }}
          />
        </div>
        
        <div className="flex flex-row md:flex-col gap-4 justify-center items-stretch">
          <button
            onClick={runCode}
            className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 border-2 transition-colors whitespace-nowrap"
          >
            Ejecutar código
          </button>
          
          <CopyToClipboard text={code} onCopy={handleCopy}>
            <button className="flex-1 bg-gray-500 text-white px-4 py-3 rounded-lg hover:bg-gray-600 border-2 transition-colors whitespace-nowrap">
              Copiar código
            </button>
          </CopyToClipboard>
        </div>
      </div>

      {copied && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Código copiado
        </div>
      )}

      <div className="bg-black border-2 text-green-400 font-mono p-6 rounded-xl min-h-[120px] whitespace-pre-wrap">
        <p className="border-b-2 border-gray-800 pb-2 mb-4">Salida:</p>
        {output}
      </div>
    </div>
  );
};

export default PythonPlayground;
