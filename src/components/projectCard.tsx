import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { StaticImageData } from "next/image";

export default function ProjectCard(props: {
  image: StaticImageData;
  url: string;
  title: string;
  description: string;
}) {
  return (
    <Card sx={{ marginBottom: "4rem" }}>
      <CardActionArea href={props.url}>
        <CardMedia
          component="img"
          height="240"
          image={props.image.src}
          alt="green iguana"
        />
        <CardContent sx={{height:"200px"}}>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
