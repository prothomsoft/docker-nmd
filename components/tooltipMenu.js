import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { createSvgIcon } from '@mui/material/utils'
import Box from '@mui/material/Box';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      padding:'0px',
      margin: '0px'      
    }
  }));

  const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    'Home',
  );

const TooltipMenu = () => {

    const handleClick = (event) => {
        console.log('clicked');
    };

    return (
        <Box sx={{ display: 'flex',  justifyContent: 'center' }}>
            <Button size="large" id="demo-customized-button" disableElevation>O MNIE</Button>
            <Button id="demo-customized-button" disableElevation>OFERTA</Button>
            <HtmlTooltip
                title={
                <Paper sx={{ width: 260 }}>
                    <MenuList>
                        <MenuItem>
                        <Typography variant="inherit">PLENER ŚLUBNY</Typography>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                        <Typography variant="inherit">REPORTAŻ ŚLUBNY</Typography>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                        <Typography variant="inherit">SESJA NARZECZEŃSKA</Typography>
                        </MenuItem>
                    </MenuList>
                </Paper>
                }>
                <Button id="demo-customized-button"
                    disableElevation
                    endIcon={<KeyboardArrowDownIcon />}>
                    PORTFOLIO
                </Button> 
            </HtmlTooltip>
            <Button id="demo-customized-button" disableElevation>KILKA HISTORII</Button>
            <Button id="demo-customized-button" disableElevation>STREFA KLIENTA</Button>
        </Box>
    );
};

export default TooltipMenu;