"use client";

import {
  Box,
  Container,
  ThemeProvider,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import NavBar from "@/components/navBar";
import "../assets/styles/main.scss";

import main from "../assets/images/screen/main.jpeg";
import book from "../assets/images/screen/mockup book.jpeg";
import screen from "../assets/images/screen/screen mockup.jpeg";
import hero from "../assets/images/archi/hero_image.jpg";
import plot from "../assets/images/archi/plot.jpg";
import { ProjectTheme } from "@/app/projectTheme";
import SectionNavigator from "@/components/sectionNavigator";

export default function Screen() {
  const examples = ["Animation", "Graphic"];

  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <NavBar />
        <SectionNavigator sections={examples} />

        <div className="top-section">
          <Container>
            <Typography variant="h4">Sole project</Typography>
            <Typography variant="h3" fontWeight={600}>
            Peaceful In The Flux,
            </Typography>
          </Container>
        </div>
        <div className="bottom-section">
          <Container>
            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
            In 2006, a museum building, invaded by a sense of flux, appeared in an certain place of France where is close to the broder of 
            Germany. It was an architecture with spatial oddity and aesthetic uncertainty that inspired by an wicker basket. It is also a 
            museum with openness and accessibility which contains many artworks, and shows many colorful artistic ideas to the audience around 
            the world. In this place where filled with many uncertain fac- tors, it keeps to shine its own light to the audience. I develop this 
            story through the structure, location and history of Centre Pompidou in Metz.
            </Typography>

            <Typography variant="h6" id="Animation" className="intro" sx={{ width: "auto" }}>
              By: Photoshop, After Effect, Sketchup.
            </Typography>
          </Container>

          <Container
            sx={{
              marginTop: "6rem",
              paddingBottom: "5rem",
            }}
            id="images"
          >
            <Grid container spacing={4}>

            <Grid item xs={6}>
                <Typography variant="h4" id="Animation" >Animation</Typography>
              </Grid>

              <Grid item xs={12}>
                <iframe
                  src="https://player.vimeo.com/video/1005061086?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1&autoplay=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                ></iframe>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h4" id="Graphic">Graphic Dsign</Typography>
              </Grid>

              <Grid item xs={12}>
                <img
                  src={hero.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src={plot.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>
             
            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    </main>
  );
}