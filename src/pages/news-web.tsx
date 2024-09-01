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
import d1 from "../assets/images/news-web/1.png";
import d2 from "../assets/images/news-web/2.png";
import d3 from "../assets/images/news-web/3.png";
import d4 from "../assets/images/news-web/5.png";
import p1 from "../assets/images/news-web/p1.png";
import p2 from "../assets/images/news-web/p2.png";
import p3 from "../assets/images/news-web/p3.png";
import { ProjectTheme } from "@/app/projectTheme";
import SectionNavigator from "@/components/sectionNavigator";
export default function newsWeb() {
  const examples = ["Design", "prototype", "Walkthrough"];
  return (
    <main>
      <ThemeProvider theme={ProjectTheme}>
        <NavBar />
        <SectionNavigator sections={examples} />
        <div className="top-section">
          <Container>
            <Typography variant="h4">Sole project</Typography>
            <Typography variant="h3" fontWeight={600}>
              KiwiInsight News Website,
            </Typography>
          </Container>
        </div>
        <div className="bottom-section">
          <Container>
            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
            &quot;Kiwi Insight&quot; is a comprehensive news website dedicated to
              providing extensive coverage of news related to New Zealand. In
              summary, my primary objective is to create a user-friendly
              platform where the target audience can effortlessly discover and
              read news articles relating to New Zealand. By offering
              region-based exploration, informative icons, and an enjoyable user
              experience, I aim to ensure that users have a seamless and
              delightful journey while staying updated on the news in New
              Zealand.
            </Typography>

            <Typography variant="h6" className="intro" sx={{ width: "auto" }}>
              By: Figma, Illustrator, Photoshop.
            </Typography>
          </Container>

          <Container
            sx={{ marginTop: "6rem", paddingBottom: "5rem" }}
            id="images"
          >
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <img
                  id="Design"
                  src={d1.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={6}>
                <img
                  src={d2.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={6}>
                <img
                  src={d3.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={6}>
                <img
                  src={d4.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={4}>
                <img
                  src={p1.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={4}>
                <img
                  src={p2.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={4}>
                <img
                  src={p3.src}
                  alt="Wellington Hotel2"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={8}>
                <Typography id="prototype" variant="h4">Desktop Website Prototype</Typography>
              </Grid>

              <Grid item xs={12}>
                <iframe
                  style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                  width="100%"
                  height="700"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3aU3LtW5ILDzeXYllVOcPY%2Fnews-web%3Fpage-id%3D0%253A1%26node-id%3D1-4%26viewport%3D16%252C1563%252C0.39%26t%3DyDRDRKM5quIA6Xwd-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D452%253A8128"
                  allowFullScreen
                ></iframe>
              </Grid>

              <Grid item xs={8}>
                <Typography variant="h4">Mobile Website Prototype</Typography>
              </Grid>

              <Grid item xs={12}>
                <iframe
                  style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                  width="100%"
                  height="700"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3aU3LtW5ILDzeXYllVOcPY%2Fnews-web%3Fpage-id%3D88%253A516%26node-id%3D88-577%26viewport%3D3403%252C1632%252C0.61%26t%3DjdAKzcNw3WYLayzw-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D452%253A8453"
                  allowFullScreen
                ></iframe>
              </Grid>

              <Grid item xs={8}>
                <Typography id="Walkthrough" variant="h4">Website Walkthrough</Typography>
              </Grid>

              <Grid item xs={6}>
                <iframe
                  src="https://player.vimeo.com/video/982497235?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1&autoplay=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="400"
                ></iframe>
              </Grid>

              <Grid item xs={6}>
                <iframe
                  src="https://player.vimeo.com/video/982497307?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1&autoplay=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="400"
                ></iframe>
              </Grid>

              <Grid item xs={6}>
                <iframe
                  src="https://player.vimeo.com/video/982497372?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1&autoplay=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="560"
                  height="400"
                  title="wellington hotel workthrough"
                ></iframe>
              </Grid>

              <Grid item xs={6} >
                <iframe
                  src="https://player.vimeo.com/video/982497409?badge=0&autopause=0&player_id=0&app_id=584799&loop=1&autoplay=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  width="100%"
                  height="400"
                  title="wellington hotel workthrough"
                ></iframe>
              </Grid>
            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    </main>
  );
}
