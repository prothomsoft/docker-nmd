import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import "../styles/globals.css";

export const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  
  const theme = 
      createTheme({
        typography: {
          h1 : {
            fontSize: "1.5rem"
          },
          h2 : {
            fontSize: "1.5rem"
          },
          h3 : {
            fontSize: "3rem",
            padding: "10px"
          },
          h4: {
            fontSize: "2.5rem",
            padding: "10px"
          },
          body1 : {
            fontSize: "1rem"
          },
          subtitle1 : {
            fontSize: "1.5rem"
          },
          subtitle2 : {
            fontSize: "1.2rem"
          },
          fontFamily: [
            'Oswald'
          ].join(',')
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 768,
            lg: 1188,
            xl: 1536,
          },
        },
        components: {
          MuiMenuItem: {
            variants: [
              {
                props: { variant: "menuButtons" },
                style: {                  
                  fontSize: "1.2rem",
                  color: "white",
                  backgroundColor: "transparent",
                  marginLeft: 10,
                  marginRight: 10,
                },
              },
            ],
          },
          MuiButton: {
            variants: [
              {
                props: { variant: "menuButton" },
                style: {                  
                  fontSize: "1.2rem",
                  color: "white",
                  padding: "10px"                  
                },
              },
              {
                props: { variant: "footerButton" },
                style: {                  
                  fontSize: "1rem",                  
                  color: "white",
                  border: "2px solid rgba(255,255,255,0.7)",
                  padding: "6px 50px 6px 50px"
                }              
              },
              {
                props: { variant: "blogButton" },
                style: {                  
                  fontSize: "1rem",
                  border: "1px solid rgba(255,255,255,0.2)"                  
                }              
              }
            ]
          },
        },
        palette: {
          mode: "dark",
          primary: {
            main: "#FFFFFF",
            light: "#FFFFFF",
            dark: "#FFFFFF",
            contrastText: "#FFFFFF"
          },
        },
      });


  const getLayout = Component.getLayout || ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />        
          {getLayout(<Component {...pageProps} />)}        
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
