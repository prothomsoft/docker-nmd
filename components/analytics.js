import ReactGA from "react-ga4";

export const initGA = () => {
    ReactGA.initialize("G-0MHSG716QK");
};

export const logPageView = () => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};