import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ArrowForward from "@mui/icons-material/ArrowForward";

const ParallaxImageFooter = (props) => {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    width: "100%",
  };

  const background = {
    image: props.leadImage,
    speed: -20,
    opacity: [1, 1],
  };

  let componentLink = "";

  if (props.leadUrl != "") {
    componentLink = (
      <Box sx={boxStyle}>
        <Typography variant="h3" align="center">
          {props.leadNames}
        </Typography>
        <Typography variant="h4" align="center">
          {props.leadTitle}
        </Typography>
        <Box sx={{ pt: 4 }}>
          <Link href={props.leadUrl}>
            <Button variant="contained" sx={{color: "black", padding: "10px 40px 10px 40px", fontSize: "1rem"}} endIcon={<ArrowForward />}>ZOBACZ WIĘCEJ</Button>
          </Link>
        </Box>        
      </Box>     
    );
  }

  return (
    <ParallaxBanner layers={[background]} style={{ height: props.height }}>
      {componentLink}
    </ParallaxBanner>
  );
};

export default ParallaxImageFooter;
