import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ClientList = (props) => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      {props.posts.map((post, key) => (
        <ClientLink key={key} post={post} height={762} matches={matches} />
      ))}
    </>
  );
};

const ClientLink = ({ post, matches }) => (
  <>
    <Box sx={{ py: 2 }}>
      <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
        {post.name}
      </Typography>
    </Box>
      <Link href={`https://sk.99foto.pl/login/${post.welcomeURL}`} target="_blank" rel="nofollow">
        <Image quality={100} alt={`${post.name}`} src={`https://sk99foto.s3.eu-west-3.amazonaws.com/client/${post.welcomeURL}.jpg`} width={1140} height={951} style={{width: '100%', height: 'auto'}}  />
    </Link>
  </>
);

export default ClientList;
