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
import penguin from "../assets/images/penguin-web/penguin.jpg";
import penguin2 from "../assets/images/penguin-web/2.jpg";
import penguin3 from "../assets/images/penguin-web/3.jpg";
import penguin4 from "../assets/images/penguin-web/4.jpg";
import penguin5 from "../assets/images/penguin-web/5.jpg";
import penguin6 from "../assets/images/penguin-web/6.jpg";
import penguin7 from "../assets/images/penguin-web/7.jpg";
import penguin8 from "../assets/images/penguin-web/8.jpg";
import penguin9 from "../assets/images/penguin-web/9.jpg";
import penguin10 from "../assets/images/penguin-web/10.jpg";
import penguin11 from "../assets/images/penguin-web/11.jpg";
import penguin12 from "../assets/images/penguin-web/12.jpg";
import penguin13 from "../assets/images/penguin-web/13.jpg";
import penguin14 from "../assets/images/penguin-web/14.jpg";
import penguin15 from "../assets/images/penguin-web/15.jpg";
import penguin16 from "../assets/images/penguin-web/16.jpg";
import penguin17 from "../assets/images/penguin-web/17.jpg";
import penguin18 from "../assets/images/penguin-web/18.jpg";
import penguin19 from "../assets/images/penguin-web/19.jpg";
import penguin20 from "../assets/images/penguin-web/20.jpg";
import penguin21 from "../assets/images/penguin-web/21.jpg";
import penguin22 from "../assets/images/penguin-web/22.jpg";
import penguin23 from "../assets/images/penguin-web/23.jpg";
import penguin24 from "../assets/images/penguin-web/24.jpg";
import penguin25 from "../assets/images/penguin-web/25.jpg";
import penguin26 from "../assets/images/penguin-web/26.jpg";
import penguin27 from "../assets/images/penguin-web/27.jpg";
import { ProjectTheme } from "@/app/projectTheme";
import SectionNavigator from "@/components/sectionNavigator";

export default function Penguin() {
  const examples = ["Research", "Audience", "Design"];

  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <NavBar />
        <SectionNavigator sections={examples} />

        <div className="top-section">
          <Container>
            <Typography variant="h4">Group project</Typography>
            <Typography variant="h3" fontWeight={600}>
              East By West Ferry Service design,
            </Typography>
          </Container>
        </div>
        <div className="bottom-section">
          <Container>
            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              This project designed a comprehensive travel service experience
              for New Zealand families visiting Matiu/Somes Island. From
              purchasing tickets to using the app on the island, embarking on a
              penguin adventure, and receiving final rewards, we provided design
              recommendations for each stage based on the user experience.
            </Typography>

            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              By: Figma, Illustrator, Photoshop.
            </Typography>
          </Container>

          <Container
            sx={{
              marginTop: "6rem",
              paddingBottom: "5rem",
              backgroundColor: "#E4F3F2",
            }}
            id="images"
          >
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <img
                  src={penguin.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin2.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  id="Research"
                  src={penguin3.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={6}>
                <img
                  id="Section2"
                  src={penguin4.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={6}>
                <img
                  id="Section3"
                  src={penguin5.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin6.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  id="Audience"
                  src={penguin7.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin8.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin9.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin10.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                id="Design"
                  src={penguin11.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin12.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin13.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin14.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin15.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin16.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin17.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin18.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin19.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin20.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin21.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin22.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin23.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin24.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin25.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={penguin26.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={penguin27.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={8}>
                <Typography variant="h4">Mobile App Walk Through</Typography>
              </Grid>

              <Grid item xs={12}>
                <iframe
                  src="https://www.youtube.com/embed/Y1UuYT6n2aY"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="800"
                ></iframe>
              </Grid>
            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    </main>
  );
}
