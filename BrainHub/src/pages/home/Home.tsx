import { useEffect, useState } from "react";
import axios from "axios";
import type { Artigo } from "../../types/Artigo";
import { ArtigoList } from "../../components/artigoList/ArtigoList";
import "./index.css";

export function Home() {
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
        <div className="main-home">
            <h1>Lista de Artigos</h1>
            <ArtigoList artigos={artigos} />
        </div>
    )
}