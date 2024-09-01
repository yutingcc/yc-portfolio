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
import { ProjectTheme } from "@/app/projectTheme";

export default function carnnect() {
  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <NavBar />
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
            According to my research, many New Zealanders experience the stress of commuting. This project mainly targets 
            people living in New Zealand suburbs and is designed to provide them with a complete product. This product is 
            about designing an app focused on a carpool system to motivate and facilitate people in New Zealand communities 
            to engage in carpool commuting, thereby enhancing their sense of everyday well-being. Come on and start carpooling with community buddies!
            </Typography>

            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              By: Figma, Illustrator, Photoshop, After Effect, Indesign.
            </Typography>
          </Container>

          <Container
            sx={{
              marginTop: "6rem",
              paddingBottom: "5rem",
              backgroundColor: "#B1FC75",
            }}
            id="images"
          >
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <img
                  src={carnnect1.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={carnnect2.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={carnnect3.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={carnnect4.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={carnnect5.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={carnnect6.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={carnnect7.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={carnnect8.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={8}>
                <Typography variant="h4">Motion Poster</Typography>
              </Grid>


              <Grid item xs={12}>
              <iframe
                  src="https://www.youtube.com/embed/_03Y6twrcUg?si=XKQ5diX-eGR9V7GJ"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                ></iframe>
              </Grid>

              <Grid item xs={12}>
                <img
                  src={carnnect9.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={8}>
                <Typography variant="h4">Motion AD</Typography>
              </Grid>

              <Grid item xs={12}>
              <iframe
                  src="https://www.youtube.com/embed/g9jL3-ciwws"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                ></iframe>
              </Grid>

              <Grid item xs={12}>
                <img
                  src={carnnect10.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={8}>
                <Typography variant="h4">APP Walkthrough</Typography>
              </Grid>

              <Grid item xs={12}>
              <iframe
                  src="https://www.youtube.com/embed/qV_H49SNtOY?si=WQrg_qz1Fj0VWQlS"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                ></iframe>
              </Grid>

              <Grid item xs={12}>
                <img
                  src={carnnect11.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={carnnect12.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={8}>
                <Typography variant="h4">APP Prototype</Typography>
              </Grid>

              <Grid item xs={12}>
                <iframe
                  style={{ border: "1px solid rgba(0, 0, 0, 0)" }}
                  width="100%"
                  height="700"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FhClC3ZJpfhk9DaMPlPfP3t%2FCar-nnect%3Fpage-id%3D0%253A1%26node-id%3D0-203%26node-type%3DFRAME%26viewport%3D4161%252C2845%252C0.74%26t%3DKskIkkyZ4N8U0DSM-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D0%253A142"
                  allowFullScreen
                ></iframe>
              </Grid>

              <Grid item xs={12}>
                <img
                  src={carnnect13.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={carnnect14.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={carnnect15.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <img
                  src={carnnect16.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={6}>
                <img
                />
              </Grid>
              
              <Grid item xs={6}>
                <img
                  src={carnnect17.src}
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
