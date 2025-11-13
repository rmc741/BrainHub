namespace BrainHubBack
{
    public class ArtigoDto
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Tag { get; set; }
        public string Conteudo { get; set; }
        public DateTime DataCriacao { get; set; } = DateTime.UtcNow;

        public ArtigoDto(Artigo artigo)
        {
            this.Id = artigo.Id;
            this.Titulo = artigo.Titulo;
            this.Tag = artigo.Tag;
            this.Conteudo = artigo.Conteudo;
            this.DataCriacao = artigo.DataCriacao;
        }
    }
}
