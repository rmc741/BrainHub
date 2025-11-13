import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box 
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        padding: "20px 0",
        marginTop: "auto",
        textAlign: "center"
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} BarinHub — Todos os direitos reservados.
      </Typography>

      <Typography variant="caption" display="block" sx={{ marginTop: "10px" }}>
        “Compartilhando ideias e construindo conhecimento juntos.”
      </Typography>
    </Box>
  );
}
