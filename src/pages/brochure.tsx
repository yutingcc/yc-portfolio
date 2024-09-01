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
import brochure1 from "../assets/images/brochure/1.jpg";
import brochure2 from "../assets/images/brochure/2.jpg";
import brochure3 from "../assets/images/brochure/3.jpg";
import brochure4 from "../assets/images/brochure/4.jpg";
import brochure5 from "../assets/images/brochure/5.jpg";
import brochure6 from "../assets/images/brochure/6.jpg";
import brochure7 from "../assets/images/brochure/7.jpg";

import { ProjectTheme } from "@/app/projectTheme";
import SectionNavigator from "@/components/sectionNavigator";

export default function Brochure() {
  const examples = [""];

  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <NavBar />
        {/* <SectionNavigator sections={examples} /> */}

        <div className="top-section">
          <Container>
            <Typography variant="h4">Sole project</Typography>
            <Typography variant="h3" fontWeight={600}>
            WuZhen Brochure Design,
            </Typography>
          </Container>
        </div>
        <div className="bottom-section">
          <Container>
            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
            This brochure aims to introduce different kinds of boats in Wuzhen. 

I used a combination of illustration and typography in this project to convey the authentic architectural and 
environmental characteristics of the Wuzhen area as accurately as possible.
            </Typography>

            <Typography variant="h6" id="Animation" className="intro" sx={{ width: "auto" }}>
              By: Photoshop, Illutrator, Indesign, Procreate.
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
              <Grid item xs={12}>
                <img
                  src={brochure1.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={brochure2.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={brochure3.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={brochure4.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>
             
              <Grid item xs={12}>
                <img
                  src={brochure5.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={brochure6.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={brochure7.src}
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
