import React from "react";
import Box from "@mui/material/Box";
import { keyframes } from "@mui/system";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Fab from "@mui/material/Fab";

const spin = keyframes`
  100% {
    transform: translateY(0)
  }
  50% {
    transform: translateY(-15px)
  }
`;

const IntroArrow = (props) => {
  return (
    <Box sx={{ animation: `${spin} 2s infinite ease`, ml :'40px' }}>
      <Fab color="primary" size="medium" aria-label="scroll back to top" onClick={props.action}>
        <KeyboardArrowDown sx={{ color: "black", fontSize: '2.1rem' }} />
      </Fab>
    </Box>
  );
};

export default IntroArrow;