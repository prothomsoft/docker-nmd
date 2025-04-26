import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";

const ImageCardSmall = ({ linkhref, imgsrc, imgalt, title, names }) => {
  return (
    <Link href={linkhref} passHref>
        <Card sx={{ textDecoration: "none" }}>
          <CardMedia sx={{ position: "relative", height: 0, paddingTop: "66.67%" }}>
            <Image
              src={imgsrc}
              alt={imgalt}
              fill
              objectFit="cover" // Ensures the image maintains aspect ratio
              quality={100}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {names}
            </Typography>
          </CardContent>
        </Card>
      
    </Link>
  );
};

export default ImageCardSmall;
