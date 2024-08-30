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
import pipa from "../assets/images/dunhuang-web/pipa.jpg";
import dynasty from "../assets/images/dunhuang-web/dynasty.jpg";
import instrument1 from "../assets/images/dunhuang-web/3d1.jpg";
import instrument2 from "../assets/images/dunhuang-web/3d2.jpg";
import d2 from "../assets/images/news-web/2.png";
import d3 from "../assets/images/news-web/3.png";
import d4 from "../assets/images/news-web/5.png";
import p1 from "../assets/images/news-web/p1.png";
import p2 from "../assets/images/news-web/p2.png";
import p3 from "../assets/images/news-web/p3.png";
import { ProjectTheme } from "@/app/projectTheme";

export default function newsWeb() {
  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <NavBar />
        <div className="top-section">
          <Container>
            <Typography variant="h4">Group project</Typography>
            <Typography variant="h3" fontWeight={600}>
              Dunhuang Cultural Applet,
            </Typography>
          </Container>
        </div>
        <div className="bottom-section">
          <Container>
            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
            The aim of this project is to allow audiences to learn about a World Heritage Site-Dunhuang Mogao Cave 
            without needing to physically visit it, while also promoting cross-cultural understanding. To achieve this 
            goal, we built an applet using web code to effectively interpret and clarify the data. we also employed a 
            range of imagery and interaction design. These design elements are intended to provide viewers with an 
            experience of exploring layer by layer, delving deeper into the content.
            </Typography>

            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              By: Figma, After Effect, Photoshop, Next.js.
            </Typography>

            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              Project url:{" "}
              <Link
                href="https://design-portfolio-cyan.vercel.app/"
                underline="always"
                target="_blank"
                rel="noopener"
              >
                dunhuang-music
              </Link>
            </Typography>

          </Container>

          <Container
            sx={{ marginTop: "6rem", paddingBottom: "5rem" }}
            id="images"
          >

        <Grid container spacing={4}>

        <Grid item xs={12}>
              <iframe
               src="https://player.vimeo.com/video/986195749?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1&autoplay=1"
               frameBorder="0"
               allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
               width="100%"
               height="700"
               title="wellington hotel workthrough"
                ></iframe>
              </Grid>
           
              <Grid item xs={12}>
                <img
                  src={pipa.src}
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={dynasty.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={6}>
                <img
                  src={instrument1.src}
                  alt="instrument1"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={6}>
                <img
                  src={instrument2.src}
                  alt="instrument2"
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
