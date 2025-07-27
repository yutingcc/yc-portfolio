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

import aai1 from "../assets/images/aai/aai1.jpg";
import aai2 from "../assets/images/aai/aai2.jpg";
import aai3 from "../assets/images/aai/aai3.jpg";
import aai4 from "../assets/images/aai/aai4.jpg";
import aai5 from "../assets/images/aai/aai5.jpg";
import aai6 from "../assets/images/aai/aai6.jpg";

import aai_mobile1 from "../assets/images/aai/aai_mobile1.jpg";
import aai_mobile2 from "../assets/images/aai/aai_mobile2.jpg";
import aai_mobile3 from "../assets/images/aai/aai_mobile3.jpg";
import aai_mobile4 from "../assets/images/aai/aai_mobile4.jpg";
import aai_mobile5 from "../assets/images/aai/aai_mobile5.jpg";
import { ProjectTheme } from "@/app/projectTheme";
import SectionNavigator from "@/components/sectionNavigator";

export default function WellingtonHotel() {
  const examples = ["Walkthrough", "Images"];
  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <NavBar />
        <SectionNavigator sections={examples} />
        <div className="top-section">
          <Container>
            <Typography variant="h3" fontWeight={600}>
              Aurora Australis Website,
            </Typography>
          </Container>
        </div>
        <div className="bottom-section">
          <Container>
            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
             The Aurora Australis website was created to reflect the refined aesthetics and 
             luxurious sophistication of this high-end interior design company. The primary goal 
             of the website is to showcase Aurora Australis’ premium design style while building trust 
             and facilitating engagement with potential clients.
             The site structure is clean and intuitive, allowing users to effortlessly explore the studio’s 
             portfolio, design philosophy, and services. 
            </Typography>

            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              By: Figma, Weblow, Photoshop.
            </Typography>

            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              Project url:{" "}
              <Link
                href="https://roberts-dynamite-project-ad4408f96cb64b.webflow.io/"
                underline="always"
                target="_blank"
                rel="noopener"
              >
                aai.co.nz
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
                  src={aai1.src}
                  alt="aai"
                  style={{ width: "100%", marginBottom: "2.5rem"  }}
                />
              </Grid>

              <Grid 
                 item xs={8}>
                <Typography variant="h4" id="Walkthrough">
                  Responsive Website Design & Development
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <iframe
                  src="https://player.vimeo.com/video/1104854227?loop=1&amp;autoplay=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                  title="wellington hotel workthrough"
                ></iframe>
              </Grid>

              <Grid item xs={12}>
                <img
                  src={aai2.src}
                  alt="aai"
                  style={{ width: "100%" }}
                  id="Images"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src={aai3.src}
                  alt="aai"
                  style={{ width: "100%" }}
                />   
              </Grid> 

              <Grid item xs={6}>
                <img
                  src={aai4.src}
                  alt="aai"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={6}>
                <img src={aai5.src} style={{ width: "100%" }} />
              </Grid>

              <Grid item xs={6}>
                <img src={aai6.src} style={{ width: "100%" }} />
              </Grid>

              <Grid item xs={3}>
                <img src={aai_mobile1.src} style={{ width: "100%" }} />
              </Grid>

              <Grid item xs={3}>
                <img src={aai_mobile2.src} style={{ width: "100%" }} />
              </Grid>

              <Grid item xs={3}>
                <img src={aai_mobile3.src} style={{ width: "100%" }} />
              </Grid>

                <Grid item xs={3}>
                <img src={aai_mobile4.src} style={{ width: "100%" }} />
              </Grid>
              
            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    </main>
  );
}
