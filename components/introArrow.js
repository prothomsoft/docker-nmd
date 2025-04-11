import React from "react";
import Box from "@mui/material/Box";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Fab from "@mui/material/Fab";
import { keyframes } from "@mui/system";

const spin = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

const IntroArrow = ({ action }) => (
  <Box sx={{ animation: `${spin} 2s infinite ease`, ml: "40px" }}>
    <Fab color="primary" size="medium" aria-label="scroll down" onClick={action}>
      <KeyboardArrowDown sx={{ color: "black", fontSize: "2.1rem" }} />
    </Fab>
  </Box>
);

export default IntroArrow;