import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Box from "@mui/material/Box";
import IntroArrow from "./introArrow";
import { Typography } from "@mui/material";

const ParallaxImage = (props) => {
  const background = {
    image: props.imgsrc,
    speed: -20,
    opacity: [1, 1],
  };

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

  const boxStyleArrow = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    top: "80vh",
    bottom: "0",
    left: "0",
    right: "0",
    width: "100%",
  };

  let componentLink = "";

  if (props.menuNames != "") {
    componentLink = (
      <Box sx={boxStyle}>
        <Typography variant="h3" align="center">
          {props.menuNames}
        </Typography>
        <Typography variant="h4" align="center">
          {props.menuTitle}
        </Typography>
      </Box>       
    );
  }


  return (
    <ParallaxBanner layers={[background]} style={{ height: props.height }}>
      {componentLink}
      <Box sx={boxStyleArrow}>
        <IntroArrow action={props.action} />
      </Box>
    </ParallaxBanner>
  );
};

export default ParallaxImage;
