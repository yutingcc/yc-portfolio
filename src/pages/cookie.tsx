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

import cookie1 from "../assets/images/cookie/Proposal-01.jpg";
import cookie2 from "../assets/images/cookie/Proposal-02.jpg";
import cookie3 from "../assets/images/cookie/Proposal-03.jpg";
import cookie4 from "../assets/images/cookie/Proposal-04.jpg";
import cookie5 from "../assets/images/cookie/Proposal-05.jpg";
import cookie6 from "../assets/images/cookie/Proposal-06.jpg";
import cookie7 from "../assets/images/cookie/Proposal-07.jpg";
import cookie8 from "../assets/images/cookie/Proposal-08.jpg";
import cookie9 from "../assets/images/cookie/Proposal-09.jpg";
import cookie10 from "../assets/images/cookie/Proposal-10.jpg";
import cookie11 from "../assets/images/cookie/Proposal-11.jpg";
import cookie12 from "../assets/images/cookie/Proposal-12.jpg";
import cookie13 from "../assets/images/cookie/Proposal-13.jpg";
import cookie14 from "../assets/images/cookie/Proposal-14.jpg";
import cookie15 from "../assets/images/cookie/Proposal-15.jpg";
import { ProjectTheme } from "@/app/projectTheme";
import SectionNavigator from "@/components/sectionNavigator";

export default function carnnect() {
  const examples = ["Research", "Idea", "Design"];
  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <NavBar />
        <SectionNavigator sections={examples} />
        <div className="top-section">
          <Container>
            <Typography variant="h4">Sole project</Typography>
            <Typography variant="h3" fontWeight={600}>
              Carnnect (Product Design),
            </Typography>
          </Container>
        </div>
        <div className="bottom-section">
          <Container>
            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
            This project is about analysing the brand and redesigning the Ernest Adams biscuit range to better compete with Farmbake.
            </Typography>

            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              By: Figma, Illustrator, Photoshop, After Effect, Indesign.
            </Typography>
          </Container>

          <Container
            sx={{
              marginTop: "6rem",
              paddingBottom: "5rem",
              backgroundColor: "#E5F7F2",
            }}
            id="images"
          >
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <img
                  src={cookie1.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>

              <Grid item xs={12}>
              <img
              id="Research"
                src={cookie2.src}
                alt="Wellington Hotel2"
                style={{ width: "100%", marginTop: "5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <img
                src={cookie3.src}
                alt="Wellington Hotel2"
                style={{ width: "100%", marginTop: "5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <img
                src={cookie4.src}
                alt="Wellington Hotel2"
                style={{ width: "100%", marginTop: "5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <img
                src={cookie5.src}
                alt="Wellington Hotel2"
                style={{ width: "100%", marginTop: "5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <img
                src={cookie6.src}
                alt="Wellington Hotel2"
                style={{ width: "100%", marginTop: "5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <img
                src={cookie7.src}
                alt="Wellington Hotel2"
                style={{ width: "100%", marginTop: "5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <img
              id="Idea"
                src={cookie8.src}
                alt="Wellington Hotel2"
                style={{ width: "100%", marginTop: "5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <img
                src={cookie9.src}
                alt="Wellington Hotel2"
                style={{ width: "100%", marginTop: "5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <img
                src={cookie10.src}
                alt="Wellington Hotel2"
                style={{ width: "100%", marginTop: "5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <img
              id="Design"
                src={cookie11.src}
                alt="Wellington Hotel2"
                style={{ width: "100%", marginTop: "5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <img
                src={cookie12.src}
                alt="Wellington Hotel2"
                style={{ width: "100%", marginTop: "5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <img
                src={cookie13.src}
                alt="Wellington Hotel2"
                style={{ width: "100%", marginTop: "5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <img
                src={cookie14.src}
                alt="Wellington Hotel2"
                style={{ width: "100%", marginTop: "5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <img
                src={cookie15.src}
                alt="Wellington Hotel2"
                style={{ width: "100%", marginTop: "5rem" }}
              />
            </Grid>
              
            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    </main>
  );
}
