import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Box from "@mui/material/Box";
import IntroArrow from "./introArrow";
import { Typography } from "@mui/material";

const ParallaxImage = ({ imgsrc, height, menuNames, menuTitle, action }) => {
  const background = {
    image: imgsrc,
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
    width: "100%",
  };

  return (
    <ParallaxBanner layers={[background]} style={{ height }}>
      {menuNames && (
        <Box sx={{ ...boxStyle, top: 0, bottom: 0 }}>
          <Typography variant="h3" align="center">
            {menuNames}
          </Typography>
          <Typography variant="h4" align="center">
            {menuTitle}
          </Typography>
        </Box>
      )}
      <Box sx={{ ...boxStyle, top: "80vh" }}>
        <IntroArrow action={action} />
      </Box>
    </ParallaxBanner>
  );
};

export default ParallaxImage;
