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

import zealandia1 from "../assets/images/zealandia/zealandia proposal_page-0001.jpg";
import zealandia2 from "../assets/images/zealandia/zealandia proposal_page-0002.jpg";
import zealandia3 from "../assets/images/zealandia/zealandia proposal_page-0003.jpg";
import zealandia4 from "../assets/images/zealandia/zealandia proposal_page-0004.jpg";
import zealandia5 from "../assets/images/zealandia/zealandia proposal_page-0005.jpg";
import zealandia6 from "../assets/images/zealandia/zealandia proposal_page-0006.jpg";
import zealandia7 from "../assets/images/zealandia/zealandia proposal_page-0007.jpg";
import zealandia8 from "../assets/images/zealandia/zealandia proposal_page-0008.jpg";
import zealandia9 from "../assets/images/zealandia/zealandia proposal_page-0009.jpg";
import zealandia10 from "../assets/images/zealandia/zealandia proposal_page-0010.jpg";
import zealandia11 from "../assets/images/zealandia/zealandia proposal_page-0011.jpg";
import zealandia12 from "../assets/images/zealandia/zealandia proposal_page-0012.jpg";
import zealandia13 from "../assets/images/zealandia/zealandia proposal_page-0013.jpg";
import zealandia14 from "../assets/images/zealandia/zealandia proposal_page-0014.jpg";
import zealandia15 from "../assets/images/zealandia/zealandia proposal_page-0015.jpg";
import zealandia16 from "../assets/images/zealandia/zealandia proposal_page-0016.jpg";
import zealandia17 from "../assets/images/zealandia/zealandia proposal_page-0017.jpg";
import zealandia18 from "../assets/images/zealandia/zealandia proposal_page-0018.jpg";
import zealandia19 from "../assets/images/zealandia/zealandia proposal_page-0019.jpg";
import zealandia20 from "../assets/images/zealandia/zealandia proposal_page-0020.jpg";
import zealandia21 from "../assets/images/zealandia/zealandia proposal_page-0021.jpg";
import zealandia22 from "../assets/images/zealandia/zealandia proposal_page-0022.jpg";
import zealandia23 from "../assets/images/zealandia/zealandia proposal_page-0023.jpg";
import zealandia24 from "../assets/images/zealandia/zealandia proposal_page-0024.jpg";
import zealandia25 from "../assets/images/zealandia/zealandia proposal_page-0025.jpg";
import zealandia26 from "../assets/images/zealandia/zealandia proposal_page-0026.jpg";
import zealandia27 from "../assets/images/zealandia/zealandia proposal_page-0027.jpg";
import zealandia28 from "../assets/images/zealandia/zealandia proposal_page-0028.jpg";
import zealandia29 from "../assets/images/zealandia/zealandia proposal_page-0029.jpg";
import zealandia30 from "../assets/images/zealandia/zealandia proposal_page-0030.jpg";
import zealandia31 from "../assets/images/zealandia/zealandia proposal_page-0031.jpg";
import zealandia32 from "../assets/images/zealandia/zealandia proposal_page-0032.jpg";
import zealandia33 from "../assets/images/zealandia/zealandia proposal_page-0033.jpg";
import zealandia34 from "../assets/images/zealandia/zealandia proposal_page-0034.jpg";
import zealandia35 from "../assets/images/zealandia/zealandia proposal_page-0035.jpg";
import zealandia36 from "../assets/images/zealandia/zealandia proposal_page-0036.jpg";
import zealandia37 from "../assets/images/zealandia/zealandia proposal_page-0037.jpg";
import zealandia38 from "../assets/images/zealandia/zealandia proposal_page-0038.jpg";
import zealandia39 from "../assets/images/zealandia/zealandia proposal_page-0039.jpg";
import zealandia40 from "../assets/images/zealandia/zealandia proposal_page-0040.jpg";
import zealandia41 from "../assets/images/zealandia/zealandia proposal_page-0041.jpg";
import zealandia42 from "../assets/images/zealandia/zealandia proposal_page-0042.jpg";
import zealandia43 from "../assets/images/zealandia/zealandia proposal_page-0043.jpg";
import zealandia44 from "../assets/images/zealandia/zealandia proposal_page-0044.jpg";

import { ProjectTheme } from "@/app/projectTheme";
import SectionNavigator from "@/components/sectionNavigator";

export default function zealandia() {
  const examples = ["Logo", "Narrative", "System","Design"];
  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <NavBar />
        <SectionNavigator sections={examples} />
        <div className="top-section">
          <Container>
            <Typography variant="h4">Group Project</Typography>
            <Typography variant="h3" fontWeight={600}>
              Zealandia Rebranding,
            </Typography>
          </Container>
        </div>
        <div className="bottom-section">
          <Container>
            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              Our rebranding idea: Discover the native actors at Zealandia, an
              eco-sanctuary close to Wellington city. Step into the enchanting
              world of Zealandia and let its ever-changing scenes captivate your
              senses. From the vibrant burst of life in spring to the serene
              beauty of winter's embrace, each season offers a new adventure
              waiting to be discovered. With diverse habitats and rare native
              wildlife, Zealandia beckons you to explore its wonders year-round.
            </Typography>

            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              By: Figma, Illustrator, Photoshop, After Effect, Indesign.
            </Typography>
          </Container>

          <Container
            sx={{
              marginTop: "6rem",
              paddingBottom: "5rem",
              backgroundColor: "#69F389",
            }}
            id="images"
          >
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <img
                  src={zealandia1.src}
                  alt="zealandia1"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h4" id="Logo">Motion Logo</Typography>
              </Grid>

              <Grid item xs={6}>
                <iframe
                  src="https://player.vimeo.com/video/1004810702?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1&autoplay=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="600"
                ></iframe>
              </Grid>

              <Grid item xs={12}>
                <img
                  src={zealandia2.src}
                  alt="zealandia2"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                id="Narrative"
                  src={zealandia3.src}
                  alt="zealandia3"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia4.src}
                  alt="zealandia4"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia5.src}
                  alt="zealandia5"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia6.src}
                  alt="zealandia6"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia7.src}
                  alt="zealandia7"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia8.src}
                  alt="zealandia8"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia9.src}
                  alt="zealandia9"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                 id="System"
                  src={zealandia10.src}
                  alt="zealandia10"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
               
                  src={zealandia11.src}
                  alt="zealandia11"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia12.src}
                  alt="zealandia12"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia13.src}
                  alt="zealandia13"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia14.src}
                  alt="zealandia14"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia15.src}
                  alt="zealandia15"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia16.src}
                  alt="zealandia16"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia17.src}
                  alt="zealandia17"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia18.src}
                  alt="zealandia18"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                id="Design"
                  src={zealandia19.src}
                  alt="zealandia19"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia20.src}
                  alt="zealandia20"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia21.src}
                  alt="zealandia21"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia22.src}
                  alt="zealandia22"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia23.src}
                  alt="zealandia23"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia24.src}
                  alt="zealandia24"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia25.src}
                  alt="zealandia25"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia26.src}
                  alt="zealandia26"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia27.src}
                  alt="zealandia27"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia28.src}
                  alt="zealandia28"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia29.src}
                  alt="zealandia29"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia30.src}
                  alt="zealandia30"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia31.src}
                  alt="zealandia31"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia32.src}
                  alt="zealandia32"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia33.src}
                  alt="zealandia33"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia34.src}
                  alt="zealandia34"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia35.src}
                  alt="zealandia35"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia36.src}
                  alt="zealandia36"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia37.src}
                  alt="zealandia37"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia38.src}
                  alt="zealandia38"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia39.src}
                  alt="zealandia39"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia40.src}
                  alt="zealandia40"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia41.src}
                  alt="zealandia40"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia42.src}
                  alt="zealandia40"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>

              <Grid item xs={12}>
                <iframe
                  src="https://player.vimeo.com/video/1004811180?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1&autoplay=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="400"
                ></iframe>
              </Grid>

              <Grid item xs={12}>
                <img
                  src={zealandia43.src}
                  alt="zealandia40"
                  style={{ width: "100%", marginTop: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={zealandia44.src}
                  alt="zealandia40"
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
