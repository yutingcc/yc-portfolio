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
import wellingtonhotel from "../assets/images/wellingtonhotel.jpg";
import wellingtonhotel2 from "../assets/images/wellington-hotel/wellingtonhotel2.jpg";
import wellingtonhotel3 from "../assets/images/wellington-hotel/wellingtonhotel3.png";
// import phone1 from "../assets/images/wellington-hotel/phone1.png";
// import phone2 from "../assets/images/wellington-hotel/phone2.png";
// import phone3 from "../assets/images/wellington-hotel/phone3.png";
import room1 from "../assets/images/wellington-hotel/room1.jpg";
import room2 from "../assets/images/wellington-hotel/room2.jpg";
import room3 from "../assets/images/wellington-hotel/room3.jpg";
import { ProjectTheme } from "@/app/projectTheme";
import SectionNavigator from "@/components/sectionNavigator";

export default function WellingtonHotel() {
  const examples = ["Walkthrough"];
  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <NavBar />
        <SectionNavigator sections={examples} />
        <div className="top-section">
          <Container>
            <Typography variant="h4">Sole project</Typography>
            <Typography variant="h3" fontWeight={600}>
              Wellington Hotel Website,
            </Typography>
          </Container>
        </div>
        <div className="bottom-section">
          <Container>
            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              Wellington Hotel is an affordable hotel located on Manner Street.
              The overall style of the website is designed to convey the hotel&apos;s
              desire for guests to explore the fun places in Wellington rather
              than staying in the hotel.
            </Typography>

            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              By: Wordpress, HTML5/CSS, Illustrator, Figma, Photoshop.
            </Typography>

            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              Project url:{" "}
              <Link
                href="https://wellingtonhotel.co.nz"
                underline="always"
                target="_blank"
                rel="noopener"
              >
                wellingtonhotel.co.nz
              </Link>
            </Typography>
          </Container>

          <Container
            sx={{ marginTop: "6rem", paddingBottom: "5rem" }}
            id="images"
          >
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <img
                  src={wellingtonhotel.src}
                  alt="Wellington Hotel"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={8}>
                <Typography variant="h4" id="Walkthrough">
                  Responsive Website Design
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <iframe
                  src="https://player.vimeo.com/video/982477572?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&autoplay=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                  title="wellington hotel workthrough"
                ></iframe>
              </Grid>

              <Grid item xs={4}>
                <img
                  src={wellingtonhotel2.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={8}>
                <img
                  src={wellingtonhotel3.src}
                  alt="Wellington Hotel3"
                  style={{ width: "100%" }}
                />
              </Grid>

              {/* <Grid item xs={4}>
                <img src={phone1.src} style={{ width: "100%" }} />
              </Grid>

              <Grid item xs={4}>
                <img src={phone2.src} style={{ width: "100%" }} />
              </Grid>

              <Grid item xs={4}>
                <img src={phone3.src} style={{ width: "100%" }} />
              </Grid> */}
              {/* 
              <Grid item xs={12}>
                <Typography variant="h4">User Experience Design</Typography>
              </Grid>

              <Grid item xs={12}>
                <img src={room1.src} style={{ width: "100%" }} />
              </Grid>

              <Grid item xs={6}>
                <img src={room2.src} style={{ width: "100%" }} />
              </Grid>

              <Grid item xs={6}>
                <img src={room3.src} style={{ width: "100%" }} /> */}
              {/* </Grid> */}
            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    </main>
  );
}
