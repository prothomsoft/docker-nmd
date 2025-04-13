import React from "react";
import { Box } from "@mui/material";

const ClassicHamburgerMenu = ({ onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "30px",
        height: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
        position: "relative", // Ensure it doesn't move
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "4px",
          backgroundColor: "white",
          borderRadius: "2px",
          transition: "background-color 0.3s ease", // Optional hover effect
        }}
      />
      <Box
        sx={{
          width: "100%",
          height: "4px",
          backgroundColor: "white",
          borderRadius: "2px",
          transition: "background-color 0.3s ease",
        }}
      />
      <Box
        sx={{
          width: "100%",
          height: "4px",
          backgroundColor: "white",
          borderRadius: "2px",
          transition: "background-color 0.3s ease",
        }}
      />
    </Box>
  );
};

export default ClassicHamburgerMenu;