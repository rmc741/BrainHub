import { Card, CardContent, Typography, Grid } from "@mui/material";
import type { Artigo } from "../types/Artigo";

interface ArtigoListProps {
  artigos: Artigo[];
}

export function ArtigoList({ artigos }: ArtigoListProps) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: 2,
        justifyContent: "center",
      }}
    >
      {artigos.map((artigo) => (
        <Grid key={artigo.id}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 3,
              boxShadow: 3,
              transition: "0.3s",
              "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                {artigo.titulo}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1, fontStyle: "italic" }}
              >
                {artigo.tag}
              </Typography>

              <Typography variant="body1">{artigo.conteudo}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}