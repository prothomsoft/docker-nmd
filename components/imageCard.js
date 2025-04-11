import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const ImageCard = (props) => {
  return (
    <Card>
      <Link href={props.linkhref}>
        <CardActionArea>
          <CardMedia>
            <Image
              quality={100}
              src={props.imgsrc}
              alt={props.imgalt}
              width={1140}
              height={760}
              style={{ width: "100%", height: "auto" }}
              loading="lazy" // Enable lazy loading
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.names}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ImageCard;
