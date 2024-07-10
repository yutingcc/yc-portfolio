import { Container, Grid, ImageList, Typography } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ProjectCard from "./projectCard";
import Penguin from "../assets/images/penguin.png";
import zealandia from "../assets/images/zealandia.png";
import Music from "../assets/images/music.jpg";
import library from "../assets/images/library.png";
import carnnect from "../assets/images/carnnect.png";
import wellingtonhotel from "../assets/images/wellingtonhotel.jpg";
import dunhuangweb from "../assets/images/dunhuangweb.png";
import screen from "../assets/images/screen.jpeg";
import news from "../assets/images/news.png";
import brochure from "../assets/images/brochure.jpg";
import brand from "../assets/images/brand.jpg";
import spatial from "../assets/images/spatial.jpg";
import "../assets/styles/main.scss";
import NavBar from "@/components/navBar";

export default function Projects() {
  return (
    <div>
      <NavBar />
      <Container sx={{ height: "100vh", marginTop: "5rem" }} id="projects">
        <Typography className="sort" variant="h4">
          UI/UX Design
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <ProjectCard
              image={wellingtonhotel}
              title="Wellington Hotel Website"
              description="This visual project for Bats Theatre's 30th anniversary season, inspired by Warren Maxwell's music, includes a street poster, mobile website, and trailer video. Our goal is to engage all ages through print and digital media, channeling audiences to the website and, ultimately, the theatre."
              url="./wellington-hotel"
            />
          </Grid>

          <Grid item xs={4}>
            <ProjectCard
              image={news}
              title="Kiwi insight News Website"
              description=' "Kiwi Insight" is a comprehensive news website providing dedicated coverage of news related to New Zealand. The target users of Kiwi Insight are 16-50 year-old people live in New Zealand who want to stay informed of what is happening in New Zealand, some of them may want to read the news according to different regions of NZ.'
              url="news"
            />
          </Grid>

          <Grid item xs={4}>
            <ProjectCard
              image={dunhuangweb}
              title="Cultural Experience Applet"
              description=' "Kiwi Insight" is a comprehensive news website providing dedicated coverage of news related to New Zealand. The target users of Kiwi Insight are 16-50 year-old people live in New Zealand who want to stay informed of what is happening in New Zealand, some of them may want to read the news according to different regions of NZ.'
              url="news"
            />
          </Grid>
        </Grid>

        <Typography className="sort" variant="h4">
          Service/Experience Design
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={4}>
            <ProjectCard
              image={Penguin}
              title="A REDESIGN OF THE EAST BY WEST FERRY SERVICE"
              description="This project is about designing a new service for the Jones family to improve the experience of travelling in the Matiu/Somes Island in New Zealand."
              url="penguin"
            />
          </Grid>

          <Grid item xs={4}>
            <ProjectCard
              image={carnnect}
              title="A REDESIGN OF THE EAST BY WEST FERRY SERVICE"
              description="This project is about designing a new service for the Jones family to improve the experience of travelling in the Matiu/Somes Island in New Zealand."
              url="penguin"
            />
          </Grid>

          <Grid item xs={4}>
            <ProjectCard
              image={library}
              title="A REDESIGN OF THE EAST BY WEST FERRY SERVICE"
              description="This project is about designing a new service for the Jones family to improve the experience of travelling in the Matiu/Somes Island in New Zealand."
              url="penguin"
            />
          </Grid>
        </Grid>

        <Typography className="sort" variant="h4">
          Brand Design
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={4}>
            <ProjectCard
              image={zealandia}
              title="A REDESIGN OF THE EAST BY WEST FERRY SERVICE"
              description="This project is about designing a new service for the Jones family to improve the experience of travelling in the Matiu/Somes Island in New Zealand."
              url="penguin"
            />
          </Grid>

          <Grid item xs={4}>
            <ProjectCard
              image={Music}
              title="A Turbulent World"
              description="This visual project for Bats Theatre's 30th anniversary season, inspired by Warren Maxwell's music, includes a street poster, mobile website, and trailer video. Our goal is to engage all ages through print and digital media, channeling audiences to the website and, ultimately, the theatre."
              url="music"
            />
          </Grid>

          <Grid item xs={4}>
            <ProjectCard
              image={brand}
              title="BRAND COMMUNICATION"
              description="This project is about analysing the brand and redesigning the Ernest Adams biscuit range to better compete with Farmbake."
              url="brand"
            />
          </Grid>
        </Grid>

        <Typography className="sort" variant="h4">
          Graphic/Motion Design
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <ProjectCard
              image={screen}
              title="THE WATER SPRINKLING FESTIVAL"
              description="This project showcases The Water Sprinkling Festival's activities, aiming to capture the vibrant festival ambiance and provide a glimpse into China's Dai culture."
              url="screen"
            />
          </Grid>

          <Grid item xs={4}>
            <ProjectCard
              image={brochure}
              title="BROCHURE DESIGN"
              description="This brochure aims to introduce different kinds of boats in Wuzhen."
              url="brochure"
            />
          </Grid>

          <Grid item xs={4} sx={{ paddingBottom: "6rem" }}>
            <ProjectCard
              image={spatial}
              title="PEACEFUL IN THE FLUX"
              description="In 2006, a museum building, invaded by a sense of flux, appeared in an certain place of France where is close to the broder of Germany."
              url="spatial"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
