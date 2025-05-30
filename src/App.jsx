import { useState } from "react";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);

  function adicionarTarefa() {
    if (tarefa.trim() !== "") {
      setLista([...lista, tarefa]);
      setTarefa("");
    }
  }

  function removerTarefa(indexParaRemover) {
    const novaLista = lista.filter((_, index) => index !== indexParaRemover);
    setLista(novaLista);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">ToDo List 📝</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
        <button
          onClick={adicionarTarefa}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Adicionar
        </button>
      </div>

      <ul className="w-full max-w-md bg-white shadow rounded-lg p-4">
        {lista.map((item, index) => (
          <li
            key={index}
            className="border-b last:border-0 py-2 flex justify-between items-center"
          >
            {item}
            <button
              onClick={() => removerTarefa(index)}
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
