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
              I&apos;m a visual communication designer. In essence, my personal brand
              is defined by a relentless pursuit of excellence, a talent for
              inspiring action, a problem-solving mindset, and an unwavering
              commitment to individualized approaches. I am an enthusiastic
              learner and an innovative visual communicator, dedicated to making
              a lasting impact through my designs and empowering others through
              knowledge and creativity.
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
