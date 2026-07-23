import React from "react";
import { Box } from "@mui/material";

const ClassicHamburgerMenu = ({ onClick, open }) => {
  return (
    <Box
      component="button"
      onClick={onClick}
      aria-label="Otwórz menu nawigacji"
      aria-expanded={Boolean(open)}
      aria-haspopup="true"
      sx={{
        width: "30px",
        height: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
        position: "relative",
        background: "none",
        border: "none",
        padding: 0,
        "&:focus-visible": {
          outline: "2px solid white",
          outlineOffset: "4px",
        },
      }}
    >
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          aria-hidden="true"
          sx={{
            width: "100%",
            height: "4px",
            backgroundColor: "white",
            borderRadius: "2px",
            transition: "background-color 0.3s ease",
          }}
        />
      ))}
    </Box>
  );
};

export default ClassicHamburgerMenu;
