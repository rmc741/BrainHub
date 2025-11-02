import { useEffect, useState } from "react";
import axios from "axios";
import { ArtigoList } from "./components/ArtigoList";
import type { Artigo } from "./types/Artigo";
import "./App.css";

function App() {
  const [artigos, setArtigos] = useState<Artigo[]>([]);

  useEffect(() => {
    axios
      .get<Artigo[]>("https://localhost:7138/api/Artigo", {
        headers: { accept: "text/plain" },
      })
      .then((res) => setArtigos(res.data))
      .catch((err) => console.error("Erro ao buscar artigos:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Artigos</h1>
      <ArtigoList artigos={artigos} />
    </div>
  );
}

export default App;
