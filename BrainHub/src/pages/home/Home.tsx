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
            <h1>Bem-vindo ao BarinHub!</h1>
            <p>
                Um espaço criado para unir pessoas, compartilhar conhecimentos e transformar ideias em inovação.
                Aqui, cada insight conta — e juntos, construímos um hub de aprendizado colaborativo.
            </p>

            <h3>Lista de Artigos</h3>
            <ArtigoList artigos={artigos} />
        </div>
    )
}