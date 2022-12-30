import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import logo99foto from "../public/logo/99foto_logo.svg";
import logo99fotomobile from "../public/logo/99foto_logo_mobile.svg";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import { keyframes } from "@mui/system";
import MenuTop from "./menuTop";

const pages = [
  { name: "O MNIE", url: "/fotograf-na-wesele" },
  { name: "REPORTAŹ ŚLUBNY", url: "reportaz-slubny-krakow" },
  { name: "PLENER ŚLUBNY", url: "plener-slubny-krakow" },
  { name: "SESJA NARZECZEŃSKA", url: "sesja-narzeczenska-krakow" },
  { name: "OFERTA", url: "oferta-fotografii-slubnej" },
  { name: "HISTORIE", url: "reportaze-slubne-sesje-plenerowe" },
  { name: "FAQ", url: "misja-i-faq" },
  { name: "REFERENCJE", url: "referencje" },
  { name: "BLOG", url: "blog" },
  { name: "STREFA KLIENTA", url: "/strefa-klienta" },
];

const AppBarWithResponsiveMenu = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const action = props.action;

  const triggerScrollDown = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const triggerScrollUp = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1800,
  });

  const handleScrollTopClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const spin = keyframes`
    100% {
      transform: translateY(0)
    }
    50% {
      transform: translateY(-15px)
    }
  `;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseNavMenu1 = (props) => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Zoom in={triggerScrollUp}>
        <Box sx={{ position: "fixed", zIndex: "tooltip", bottom: 40, right: 35, animation: `${spin} 2s infinite ease` }}>
          <Fab color="primary" size="medium" onClick={handleScrollTopClick}>
            <KeyboardArrowUp sx={{ color: "black", fontSize: "2.1rem" }} />
          </Fab>
        </Box>
      </Zoom>
      <Slide appear={true} direction="down" in={!triggerScrollDown}>
        <MuiAppBar position="absolute" color="transparent" elevation={0}>
          <Container>
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <Grid container direction="row" alignItems="center">
                <Grid item lg={5}>
                  <Item>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Link key={1} href={"/fotograf-na-wesele"} passHref>
                        <Button variant="menuButton" key={1}>
                          {"O MNIE"}
                        </Button>
                      </Link>
                      <MenuTop />
                      <Link key={2} href={"/oferta-fotografii-slubnej"} passHref>
                        <Button variant="menuButton" key={2}>
                          {"OFERTA"}
                        </Button>
                      </Link>
                      <Link key={3} href={"/reportaze-slubne-sesje-plenerowe"} passHref>
                        <Button variant="menuButton" key={3}>
                          {"HISTORIE"}
                        </Button>
                      </Link>
                      <Link key={4} href={"/misja-i-faq"} passHref>
                        <Button variant="menuButton" key={4}>
                          {"FAQ"}
                        </Button>
                      </Link>
                    </Box>
                  </Item>
                </Grid>
                <Grid item lg={2}>
                  <Item>
                    <Box sx={{ display: "flex", justifyContent: "center", ml: "15px" }}>
                      <Link key={5} href="/" passHref>
                        <Button variant="menuButton" sx={{ pt: 2, pb: 2 }} key={5} onClick={handleCloseNavMenu}>
                          <Image alt="fotograf ślubny kraków" src={logo99foto} width={100} height={140}/>
                        </Button>
                      </Link>
                    </Box>
                  </Item>
                </Grid>
                <Grid item lg={5}>
                  <Item>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Link key={6} href={"/referencje"} passHref>
                        <Button variant="menuButton" key={6}>
                          {"REFERENCJE"}
                        </Button>
                      </Link>
                      <Link key={7} href={"/blog"} passHref>
                        <Button variant="menuButton" key={7}>
                          {"BLOG"}
                        </Button>
                      </Link>
                      <Link key={8} href={"/strefa-klienta"} passHref>
                        <Button variant="menuButton" key={8}>
                          {"STREFA KLIENTA"}
                        </Button>
                      </Link>
                      <Button variant="menuButton" key={9} onClick={props.action}>
                        KONTAKT
                      </Button>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Container>
          <Container>
            <Toolbar id="back-to-top-anchor" disableGutters sx={{ p: 1 }}>
              <Box sx={{ display: { xs: "flex", lg: "none" }, width: "100%" }} justifyContent="center" alignItems="center">
                <Link key={2} href="/" passHref>
                  <Button variant="menuButton" sx={{ pt: 2, pb: 2, ml: 8 }} key={1}>
                    <Image alt="fotograf ślubny kraków" src={logo99fotomobile} width={91} height={30} />
                  </Button>
                </Link>
              </Box>
              <Box sx={{ display: { xs: "flex", lg: "none" } }} justifyContent="center" alignItems="center">
                <IconButton size="medium" onClick={handleOpenNavMenu} sx={{ backgroundColor: "white" }}>
                  <MenuIcon sx={{ color: "black", fontSize: "1.8rem" }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", lg: "none" },
                  }}>
                  {pages.map((page, key) => (
                    <Link key={key} href={page.url} passHref>
                      <MenuItem key={key} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    </Link>
                  ))}

                  <MenuItem key={100} onClick={props.action}>
                    <Typography textAlign="center">KONTAKT</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </MuiAppBar>
      </Slide>
    </>
  );
};

export default AppBarWithResponsiveMenu;
