import React from 'react';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';
import {green, orange, purple, red, yellow} from '@mui/material/colors';

const Responsive = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {color: yellow[500]},
    [theme.breakpoints.up('sm')]: {color: green[500]},
    [theme.breakpoints.up('md')]: {color: purple[500]},
    [theme.breakpoints.up('lg')]: {color: red[500]},
    [theme.breakpoints.up('xl')]: {color: orange[500]}
}));

const WindowDim = () => {

  const [w,setw] = React.useState(null);

  React.useEffect(() => {
    const handleResize = () => {
      setw(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

    return (
        <div>
            <Responsive>
                <Typography variant="h4">Advanced Material UI</Typography>
                <Typography variant="h4">{w}</Typography>
                <Typography sx={{ display: { xs: 'block', sm: 'none' } }}>
                    XS
                </Typography>
                <Typography sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
                    SM
                </Typography>
                <Typography sx={{ display: { xs: 'none', md: 'block', lg: 'none' } }}>
                    MD
                </Typography>
                <Typography sx={{ display: { xs: 'none', lg: 'block', xl: 'none' } }}>
                    LG
                </Typography>
                <Typography sx={{ display: { xs: 'none', xl: 'block' } }}>
                    XL
                </Typography>

                
            </Responsive>
        </div>
    );
};

export default WindowDim;