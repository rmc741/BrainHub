import { useEffect, useState } from "react";
import axios from "axios";
import type { Artigo } from "../../types/Artigo";
import { ArtigoList } from "../../components/ArtigoList";

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
        <div>
            Home Page
            <h1>Lista de Artigos</h1>
            <ArtigoList artigos={artigos} />
        </div>
    )
}