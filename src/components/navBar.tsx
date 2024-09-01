import { Box, Container, Link } from "@mui/material";
import "../assets/styles/main.scss";

export default function NarBar() {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        zIndex: 100,
        backgroundColor: "white",
        top: 0,
        pb: 4,
      }}
    >
      <Container className="nav-bar">
        <Link href={"/"}>Home</Link>
        <Link href={"/#projects"}>Projects</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/article"}>Article</Link>
      </Container>
    </Box>
  );
}
