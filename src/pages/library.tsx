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
import carnnect1 from "../assets/images/carnnect/carnnect 01.jpg";
import carnnect2 from "../assets/images/carnnect/carnnect 02.jpg";
import carnnect3 from "../assets/images/carnnect/carnnect 03.jpg";
import carnnect4 from "../assets/images/carnnect/carnnect 04.jpg";
import carnnect5 from "../assets/images/carnnect/carnnect 05.jpg";
import carnnect6 from "../assets/images/carnnect/carnnect 06.jpg";
import carnnect7 from "../assets/images/carnnect/carnnect 07.jpg";
import carnnect8 from "../assets/images/carnnect/carnnect 08.jpg";
import carnnect9 from "../assets/images/carnnect/carnnect 09.jpg";
import carnnect10 from "../assets/images/carnnect/carnnect 10.jpg";
import carnnect11 from "../assets/images/carnnect/carnnect 11.jpg";
import carnnect12 from "../assets/images/carnnect/carnnect 12.jpg";
import carnnect13 from "../assets/images/carnnect/carnnect 13.jpg";
import carnnect14 from "../assets/images/carnnect/carnnect 14.jpg";
import carnnect15 from "../assets/images/carnnect/carnnect 15.jpg";
import carnnect16 from "../assets/images/carnnect/carnnect 16.jpg";
import carnnect17 from "../assets/images/carnnect/carnnect 17.jpg";

import library1 from "../assets/images/library/library1.png";
import library2 from "../assets/images/library/library2.jpg";
import library3 from "../assets/images/library/library3.jpg";
import library4 from "../assets/images/library/library4.jpg";
import library5 from "../assets/images/library/library5.jpg";
import library6 from "../assets/images/library/library6.jpg";
import library7 from "../assets/images/library/library7.jpg";
import library8 from "../assets/images/library/library8.jpg";
import library9 from "../assets/images/library/library9.jpg";
import library10 from "../assets/images/library/library10.jpg";
import library11 from "../assets/images/library/library11.jpg";
import library12 from "../assets/images/library/library12.jpg";
import library13 from "../assets/images/library/library13.jpg";
import library14 from "../assets/images/library/library14.jpg";
import library15 from "../assets/images/library/library15.jpg";
import library16 from "../assets/images/library/library16.jpg";
import library17 from "../assets/images/library/library17.jpg";
import library18 from "../assets/images/library/library18.jpg";
import library19 from "../assets/images/library/library19.jpg";
import library20 from "../assets/images/library/library20.jpg";
import library21 from "../assets/images/library/library21.jpg";
import library22 from "../assets/images/library/library22.jpg";
import library23 from "../assets/images/library/library23.jpg";
import library24 from "../assets/images/library/library24.jpg";
import library25 from "../assets/images/library/library25.jpg";

import { ProjectTheme } from "@/app/projectTheme";
import SectionNavigator from "@/components/sectionNavigator";
export default function library() {
  const examples = ["Research", "Intro", "Design","Journey"];
  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <NavBar />
        <SectionNavigator sections={examples} />
        <div className="top-section">
          <Container>
            <Typography variant="h4">Group project</Typography>
            <Typography variant="h3" fontWeight={600}>
              Wellington City Library Service Design,
            </Typography>
          </Container>
        </div>
        <div className="bottom-section">
          <Container>
            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
            This project is about service and experience design for wellington city library that aim to improve the experience for Wellington citizens to engage in the library.
            We designed a library credit system to encourage knowledge exchange and lifelong learning for the target audience.
            </Typography>

            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              By: Figma, Photoshop, AI (Midjourney).
            </Typography>
          </Container>

          <Container
            sx={{
              marginTop: "6rem",
              paddingBottom: "5rem",
              backgroundColor: "#FFDC85",
            }}
            id="images"
          >
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <img
                  src={library1.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library2.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                id="Research"
                  src={library3.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library4.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library5.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                id="Intro"
                  src={library6.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library7.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library8.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                id="Design"
                  src={library9.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library10.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library11.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library12.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library13.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library14.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library15.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library16.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>
              
              <Grid item xs={12}>
                <img
                  src={library17.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>
              
              <Grid item xs={12}>
                <img
                  src={library18.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                id="Journey"
                  src={library19.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library20.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library21.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library22.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library23.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library24.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={library25.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={8}>
                <Typography variant="h4">APP Walkthrough</Typography>
              </Grid>

              <Grid item xs={12}>
              <iframe
                  src="https://www.youtube.com/embed/50wOqz1m9mg?si=EOnKQwrCODhvCumQ"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                ></iframe>
              </Grid>

            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    </main>
  );
}