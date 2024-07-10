import { Container, Link } from "@mui/material";
import "../assets/styles/main.scss";

export default function NarBar() {
  return (
    <Container className="nav-bar">
      <Link href={"/"}>Home</Link>
      <Link href={"#projects"}>Projects</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/article"}>Article</Link>
    </Container>
  );
}
