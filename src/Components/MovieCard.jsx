import React from "react";
import { images } from "../utils/images";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const MovieCard = ({ movie, idx }) => {
  return (
    <div className="card" key={movie.episode_id}>
      {
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="540"
              image={images[idx]}
              alt={movie.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      }
    </div>
  );
};

export default MovieCard;
