import ReactGA from "react-ga4";

export const initGA = () => {
    ReactGA.initialize("G-WMWEG5RRRG");
};

export const logPageView = () => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};