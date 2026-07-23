import React from "react";
import Button from "@mui/material/Button";
import MuiMenu from "@mui/material/Menu";
import MuiMenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/router";

const MenuTop = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    setAnchorEl(null);
    router.push(path);
  };

  return (
    <>
      <Button
        id="portfolio-menu-button"
        variant="menuButton"
        onClick={handleClick}
        aria-haspopup="true"
        aria-expanded={Boolean(anchorEl)}
        aria-controls={Boolean(anchorEl) ? "portfolio-menu" : undefined}
        endIcon={<KeyboardArrowDownIcon />}
      >
        PORTFOLIO
      </Button>
      <MuiMenu
        id="portfolio-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableScrollLock // Prevents adding padding-right to the body
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
      >
        <MuiMenuItem
          variant="menuButtons"
          onClick={() => handleMenuItemClick("reportaz-slubny-krakow")}
        >
          REPORTAŻ ŚLUBNY
        </MuiMenuItem>
        <MuiMenuItem
          variant="menuButtons"
          onClick={() => handleMenuItemClick("plener-slubny-krakow")}
        >
          PLENER ŚLUBNY
        </MuiMenuItem>
        <MuiMenuItem
          variant="menuButtons"
          onClick={() => handleMenuItemClick("sesja-narzeczenska-krakow")}
        >
          SESJA NARZECZEŃSKA
        </MuiMenuItem>
      </MuiMenu>
    </>
  );
};

export default MenuTop;