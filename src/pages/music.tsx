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

import storyboard from "../assets/images/music/storyboard.jpg";
import process1 from "../assets/images/music/process1.jpg";
import process2 from "../assets/images/music/process2.jpg";
import process3 from "../assets/images/music/process3.png";
import process4 from "../assets/images/music/process4.png";
import process5 from "../assets/images/music/process5.png";
import process6 from "../assets/images/music/process6.png";
import poster1 from "../assets/images/music/poster1.jpg";
import poster2 from "../assets/images/music/poster2.jpg";
import poster3 from "../assets/images/music/poster3.jpg";
import poster_mockup from "../assets/images/music/poster_mockup.jpg";

import app1 from "../assets/images/music/app1.png";
import app2 from "../assets/images/music/app2.png";
import app3 from "../assets/images/music/app3.png";
import app4 from "../assets/images/music/app4.png";
import app5 from "../assets/images/music/app5.png";
import app6 from "../assets/images/music/app6.png";
import app8 from "../assets/images/music/app8.png";
import app9 from "../assets/images/music/app9.png";
import app10 from "../assets/images/music/app10.png";
import app11 from "../assets/images/music/app11.png";
import app12 from "../assets/images/music/app12.png";
import app13 from "../assets/images/music/app13.png";


import { ProjectTheme } from "@/app/projectTheme";
import SectionNavigator from "@/components/sectionNavigator";
export default function music() {
  const examples = ["Process", "Trailor", "Poster", "Website"];
  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <NavBar />
        <SectionNavigator sections={examples} />
        <div className="top-section">
          <Container>
            <Typography variant="h4">Group project</Typography>
            <Typography variant="h3" fontWeight={600}>
              A Turbulent World,
            </Typography>
          </Container>
        </div>
        <div className="bottom-section">
          <Container>
            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
            This visual project for Bats Theatre&apos;s 30th anniversary season, inspired by Warren Maxwell&apos;s music, includes a 
            street poster, mobile website, and trailer video. Our goal is to engage all ages through print and digital media, channeling audiences to 
            the website and, ultimately, the theatre.
            </Typography>

            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              By: Figma, Photoshop, After Effect, Cinema4D.
            </Typography>
          </Container>

          <Container
            sx={{
              paddingBottom: "5rem",
            }}
            id="images"
          >
            <Grid container spacing={4}>

            <Grid item xs={12}>
                <Typography variant="h4" id="Process" sx={{ paddingTop: "5rem" }}>Process</Typography>
              </Grid>

              <Grid item xs={4}>
                <img
                
                  src={storyboard.src}
                  alt="storyboard"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={8}>
                <img
                  src={process1.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%", marginTop: "5rem" }}
                />

                <img
                  src={process2.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%", marginTop: "5rem" }}
                />

                <img
                  src={process3.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%", marginTop: "5rem" }}
                />

                <img
                  src={process4.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              
              <img
                  src={process5.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%", marginTop: "5rem" }}
                />

              <img
                  src={process6.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%", marginTop: "5rem" }}
                />

              </Grid>

              <Grid item xs={12}>
                <Typography variant="h4" id="Trailor"  sx={{ paddingTop: "5rem" }}>Trailor Video</Typography>
              </Grid>
             
              <Grid item xs={12}>
                <iframe
                  src="https://player.vimeo.com/video/1004989018?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1&autoplay=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                ></iframe>
              </Grid>
          
              <Grid item xs={12}>
                <Typography variant="h4" id="Poster" sx={{ paddingTop: "3rem" }}>Poster</Typography>
              </Grid>

              <Grid item xs={6}>
                <img
                  src={poster1.src}
                  alt="storyboard"
                  style={{ width: "100%", }}
                />
              </Grid>

              <Grid item xs={6}>
                <img
                  src={poster2.src}
                  alt="storyboard"
                  style={{ width: "100%", border: "2px solid black" }}
                />
              </Grid>
              
              <Grid item xs={6}>
                <img
                  src={poster3.src}
                  alt="storyboard"
                  style={{ width: "100%", border: "2px solid black" }}
                />
              </Grid>
  
              <Grid item xs={12}>
                <img
                  src={poster_mockup.src}
                  alt="storyboard"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h4" id="Website" sx={{ paddingTop: "3rem" }}>Mobile Website</Typography>
              </Grid>

              <Grid item xs={8}>
              <Typography variant="h6" >
              Regarding the website, our focus is on enhancing its interactive functionality to ensure a comfortable user experience. We&apos;ve anticipated
               diverse user intentions and streamlined shopping cart accessibility. For those primarily interested in play content, adding it to their
                cart post-introduction is seamless. The site intuitively collapses unselected options to enhance clarity. Conversely, a dedicated ticketing 
                system caters to schedule-conscious individuals, utilizing a real-time calendar and filtered navigation. The website aims to serve as a practical 
                user tool. To capture younger audiences, a conceptual trailer will be shared on social media for increased engagement.
            </Typography>
            </Grid>

              <Grid item xs={4}>
                <iframe
                  src="https://player.vimeo.com/video/1005000770?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1&autoplay=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="700"
                ></iframe>
              </Grid>

              <Grid item xs={4}>
                <img
                  src={app1.src}
                  alt="storyboard"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={4}>
                <img
                  src={app2.src}
                  alt="storyboard"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={4}>
                <img
                  src={app3.src}
                  alt="storyboard"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={4}>
                <img
                  src={app4.src}
                  alt="storyboard"
                  style={{ width: "100%" }}
                />
              </Grid>
            
              <Grid item xs={4}>
                <img
                    src={app5.src}
                    alt="app5"
                    style={{ width: "100%" }}
                />
                </Grid>
                <Grid item xs={4}>
                <img
                    src={app6.src}
                    alt="app6"
                    style={{ width: "100%" }}
                />
                </Grid>
                <Grid item xs={4}>
                <img
                    src={app8.src}
                    alt="app8"
                    style={{ width: "100%" }}
                />
                </Grid>
                <Grid item xs={4}>
                <img
                    src={app9.src}
                    alt="app9"
                    style={{ width: "100%" }}
                />
                </Grid>
                <Grid item xs={4}>
                <img
                    src={app10.src}
                    alt="app10"
                    style={{ width: "100%" }}
                />
                </Grid>
                <Grid item xs={4}>
                <img
                    src={app11.src}
                    alt="app11"
                    style={{ width: "100%" }}
                />
                </Grid>
                <Grid item xs={4}>
                <img
                    src={app12.src}
                    alt="app12"
                    style={{ width: "100%" }}
                />
                </Grid>
                <Grid item xs={4}>
                <img
                    src={app13.src}
                    alt="app13"
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
