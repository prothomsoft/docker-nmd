import React from 'react';
import Button from '@mui/material/Button';
import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from 'next/router'

const MenuTop = () => {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClose1 = () => {
      setAnchorEl(null);
      router.push('reportaz-slubny-krakow'); 
    };
    const handleClose2 = () => {
        setAnchorEl(null);
        router.push('plener-slubny-krakow'); 
    };
    const handleClose3 = () => {
        setAnchorEl(null);
        router.push('sesja-narzeczenska-krakow'); 
    };

    return (
        <>
    <Button
        id="demo-customized-button"
        variant="menuButton"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        PORTFOLIO
      </Button>
      <MuiMenu id="basic-menu" PaperProps={{sx: {backgroundColor: 'black'}}}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
                onMouseLeave: handleClose
            }}
        >
            <MuiMenuItem variant='menuButtons' onClick={handleClose1}>REPORTAŻ ŚLUBNY</MuiMenuItem>
            <MuiMenuItem variant='menuButtons' onClick={handleClose2}>PLENER ŚLUBNY</MuiMenuItem>
            <MuiMenuItem variant='menuButtons' onClick={handleClose3}>SESJA NARZECZEŃSKA</MuiMenuItem>
      </MuiMenu>        
      </>
    );
};

export default MenuTop;