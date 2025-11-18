import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Artigo {
  id: number;
  titulo: string;
  tag: string;
  conteudo: string;
  dataCriacao: string;
}

export function ArtigoDetalhe() {
  const { id } = useParams();
  const [artigo, setArtigo] = useState<Artigo | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarArtigo() {
      try {
        const response = await fetch(`https://localhost:7138/api/Artigo/${id}`);
        
        if (!response.ok) {
          setErro("Artigo não encontrado.");
          setLoading(false);
          return;
        }

        const data: Artigo = await response.json();
        setArtigo(data);
      } catch (e) {
        setErro("Erro ao carregar os dados.");
      } finally {
        setLoading(false);
      }
    }

    carregarArtigo();
  }, [id]);

  if (loading) return <p>Carregando artigo...</p>;
  if (erro) return <p style={{ color: "red" }}>{erro}</p>;
  if (!artigo) return null;

  const dataFormatada = new Date(artigo.dataCriacao).toLocaleDateString("pt-BR");

  return (
    <div>
      <h1>{artigo.titulo}</h1>

      <p>{artigo.tag}</p>

      <p>
        Criado em: {dataFormatada}
      </p>

      <hr/>

      <p>
        {artigo.conteudo}
      </p>
    </div>
  );
}
