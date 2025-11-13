namespace BrainHubBack
{
    public class Artigo
    {
        public Artigo()
        {
        }

        public Artigo(CreateArtigoDto artigoDto)
        {
            this.Titulo = artigoDto.Titulo;
            this.Tag = artigoDto.Tag;
            this.Conteudo = artigoDto.Conteudo;
        }

        public int Id { get; set; }

        public string Titulo { get; set; }

        public string? Tag { get; set; }

        public string? Conteudo { get; set; }

        public DateTime DataCriacao { get; set; } = DateTime.UtcNow;
    }
}
