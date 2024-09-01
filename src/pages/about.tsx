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

import cv from "../assets/images/screen/cv.png";
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
              marginTop: "6rem",
              paddingBottom: "5rem",
            }}
            id="images"
          >
            <Grid container spacing={4}>

            <Grid item xs={6}>
                <Typography variant="h4">CV</Typography>
              </Grid>

              <Grid item xs={12}>
              <img
                src={cv.src}
                alt="Wellington Hotel2"
                style={{ width: "100%" }}
              />
            </Grid>
             
            </Grid>
          </Container>
      </ThemeProvider>
    </main>
  );
}