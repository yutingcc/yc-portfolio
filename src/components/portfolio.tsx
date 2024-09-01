import { Container, ThemeProvider, Typography } from "@mui/material";
import Projects from "@/components/projects";
import NavBar from "@/components/navBar";
import "../assets/styles/main.scss";
import { ProjectTheme } from "@/app/projectTheme";

export default function Portfolio() {
  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <div className="top-section">
          <Container>
            <Typography variant="h4">Portfolio</Typography>
            <Typography variant="h2" fontWeight={600}>
              Yuting Cao,
            </Typography>
          </Container>
        </div>
        <div className="bottom-section">
          <Container>
            <Typography variant="h6" className="intro">
              I&apos;m a visual communication designer. I am a versatile and creative professional with a strong background in both design and customer service.
               My experience spans across multiple industries and countries, where I have developed a keen eye for detail and a passion 
               for creating user-centric designs. With a commitment to excellent communication and teamwork, I thrive in roles that allow me to engage with diverse groups of 
               people and contribute to meaningful projects. My dedication to continuous learning and community involvement further enriches my ability to deliver high-quality work and build strong relationships.
            </Typography>

            <Typography variant="h6" className="scroll">
             ↓ scroll
             </Typography>
          </Container>
        </div>

        {/* <Projects /> */}
      </ThemeProvider>
    </main>
  );
}
