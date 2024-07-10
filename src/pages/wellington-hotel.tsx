"use client";

import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import NavBar from "@/components/navBar";
import "../assets/styles/main.scss";
import wellingtonhotel from "../assets/images/wellingtonhotel.jpg";
import { ProjectTheme } from "@/app/projectTheme";

export default function WellingtonHotel() {
  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <NavBar />
        <div className="top-section">
          <Container>
            <Typography variant="h4">Ui/UX Design</Typography>
            <Typography variant="h3" fontWeight={600}>
              Wellington Hotel Website,
            </Typography>
          </Container>
        </div>
        <div className="bottom-section">
          <Container>
            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              Wellington Hotel is an affordable hotel located on Manner Street.
              The overall style of the website is designed to convey the hotel's
              desire for guests to explore the fun places in Wellington rather
              than staying in the hotel.
            </Typography>
          </Container>
        </div>
      </ThemeProvider>
    </main>
  );
}
