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
import pipa from "../assets/images/dunhuang-web/Pipa.jpg";
import dynasty from "../assets/images/dunhuang-web/dynasty.jpg";
import instrument1 from "../assets/images/dunhuang-web/3d1.jpg";
import instrument2 from "../assets/images/dunhuang-web/3d2.jpg";

import { ProjectTheme } from "@/app/projectTheme";

export default function newsWeb() {
  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <NavBar />
        <div className="top-section">
          <Container>

            <Typography variant="h3" fontWeight={600}>
              Video Projects
            </Typography>
          </Container>
        </div>
        <div className="bottom-section">
          <Container>
            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
            This page showcases all of my video works, including product promotional videos, motion graphics, and animated advertisement videos.
            </Typography>

            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              By: Premiere, After Effect, Photoshop, Illustrator.
            </Typography>

          </Container>

          <Container
            sx={{ marginTop: "6rem", paddingBottom: "5rem" }}
            id="images"
          >

        <Grid container spacing={4}>

        <Grid item xs={12}>
                <iframe
                  src="https://player.vimeo.com/video/1007636077?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                ></iframe>
              </Grid>

              <Grid item xs={12}>
                <iframe
                  src="https://player.vimeo.com/video/1007637161?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                ></iframe>
              </Grid>

        <Grid item xs={12}>
                <iframe
                  src="https://player.vimeo.com/video/1004989018?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                ></iframe>
              </Grid>

              <Grid item xs={2}>

              </Grid>

              <Grid item xs={8}>
                <iframe
                  src="https://player.vimeo.com/video/1005054779?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                ></iframe>
              </Grid>

        <Grid item xs={12}>
              <iframe
                  src="https://www.youtube.com/embed/_03Y6twrcUg?si=XKQ5diX-eGR9V7GJ"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                ></iframe>
              </Grid>


              <Grid item xs={12}>
              <iframe
                  src="https://www.youtube.com/embed/g9jL3-ciwws"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                ></iframe>
              </Grid>

              <Grid item xs={12}>
                <iframe
                  src="https://player.vimeo.com/video/1005061086?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                ></iframe>
              </Grid>

              <Grid item xs={2}> 

</Grid>
    
              <Grid item xs={8}>
                <iframe
                  src="https://player.vimeo.com/video/1004810702?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="600"
                ></iframe>
              </Grid>

              <Grid item xs={12}>
                <iframe
                  src="https://player.vimeo.com/video/1004811180?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="400"
                ></iframe>
              </Grid>


            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    </main>
  );
}
