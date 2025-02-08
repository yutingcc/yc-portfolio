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

import about from "../assets/images/about.jpg";
import { ProjectTheme } from "@/app/projectTheme";
import SectionNavigator from "@/components/sectionNavigator";

export default function Screen() {
  const examples = [""];

  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <NavBar />

        <Container
          sx={{
            marginTop: "10rem",
            paddingBottom: "5rem",
          }}
          id="images"
        >
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <img
                src={about.src}
                alt="Wellington Hotel2"
                style={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h3" fontWeight={600}>
                Yuting Cao
              </Typography>
              <Typography
                sx={{ width: "auto", marginTop: "10px" }}
              >
                I am a dedicated and motivated designer, fan of lifelong
                learning, critical design thinker, implementer and finisher.
                High level of professionalism and passion for doing great work.
                Always try to make difficult things easy, and easy things fun. I
                have a passion for every new things: new technologies, new
                design trends, new techniques, and especially new ideas.
              </Typography>
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{ marginTop: "10px" }}
              >
                Linkedin
              </Typography>

              <a
                href="https://www.linkedin.com/in/yuting-cao-545196298/"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Connect with me on LinkedIn
              </a>

              <Typography
                variant="h5"
                fontWeight={600}
                sx={{ marginTop: "10px" }}
              >
                Email
              </Typography>
              <Typography sx={{ width: "auto" }}>
                {" "}
                yc518688@gmail.com{" "}
              </Typography>

              <Typography
                variant="h5"
                fontWeight={600}
                sx={{ marginTop: "10px" }}
              >
                Mobile
              </Typography>
              <Typography sx={{ width: "auto" }}>
                {" "}
                +64 284597358{" "}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </main>
  );
}
