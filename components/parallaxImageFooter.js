import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ArrowForward from "@mui/icons-material/ArrowForward";

const ParallaxImageFooter = ({ leadImage, leadUrl, leadNames, leadTitle, height }) => {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
  };

  const background = {
    image: leadImage,
    speed: -20,
    opacity: [1, 1],
  };

  return (
    <ParallaxBanner layers={[background]} style={{ height }}>
      {leadUrl && (
        <Box sx={boxStyle}>
          <Typography variant="h3" align="center">
            {leadNames}
          </Typography>
          <Typography variant="h4" align="center">
            {leadTitle}
          </Typography>
          <Box sx={{ pt: 4 }}>
            <Link href={leadUrl} passHref>
              <Button
                variant="contained"
                sx={{
                  color: "black",
                  padding: "10px 40px",
                  fontSize: "1rem",
                }}
                endIcon={<ArrowForward />}
              >
                ZOBACZ WIĘCEJ
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </ParallaxBanner>
  );
};

export default ParallaxImageFooter;
