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
    <div className="w-full max-w-fit mx-auto space-y-4">
      <div className="flex flex-row gap-2">
        <Editor
          className="border-2 relative"
          height="300px"
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
        <div className="flex flex-wrap">
          {/* Botón de ejecución */}
          <button
            onClick={runCode}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 border-2"
          >
            Ejecutar código
          </button>
          {/* Botón de copiar */}
          <CopyToClipboard text={code} onCopy={handleCopy}>
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 border-2">
              Copiar código
            </button>
          </CopyToClipboard>
        </div>
      </div>

      {/* Mensaje de copiado */}
      {copied && (
        <div className="bg-green-600 text-white p-2 rounded-md mt-2">
          Código copiado
        </div>
      )}

      {/* Terminal de salida */}
      <div className="flex flex-col gap-4 bg-black border-2 text-green-400 font-mono p-4 rounded-xl min-h-[100px] whitespace-pre-wrap">
        <p className="border-b-2 border-gray-800">Salida: </p>
        {output}
      </div>
    </div>
  );
};

export default PythonPlayground;
