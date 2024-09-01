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
            The Water Sprinkling Festival,
            </Typography>
          </Container>
        </div>
        <div className="bottom-section">
          <Container>
            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
            This project showcases The Water Sprinkling Festival&apos;s activities, aiming to capture the vibrant festival 
            ambiance and provide a glimpse into China&apos;s Dai culture.
            The composition captures the festival&apos;s essence with Kongming lanterns in the sky, Yunnan&apos;s map marking the location, and ground elements 
            like an elephant, stilted house, and mountain representing the region. A peacock and a Dai girl, inspired by Shaoguang Ding&apos;s ethnic painting, 
                depict water splashing, using asymmetry, scale, and proportion for balance. The animation enhances this vibrancy, starting with descending 
                lanterns and lively, bouncing elements. Water splashes, informed by video research and particle systems, form a river symbolizing Yunnan. Realistic 
                ripples are created with AE&apos;s fractal noise, reflecting the region&apos;s hues.
            </Typography>

            <Typography variant="h6" id="Animation" className="intro" sx={{ width: "auto" }}>
              By: Photoshop, After Effect.
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
                <Typography variant="h4">Animation</Typography>
              </Grid>

              <Grid item xs={6}>
                <iframe
                  src="https://player.vimeo.com/video/1005054779?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1&autoplay=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                ></iframe>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h4" id="Graphic">Graphic Dsign</Typography>
              </Grid>

              <Grid item xs={6}>
                <img
                  src={main.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src={book.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
                <img
                  src={screen.src}
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