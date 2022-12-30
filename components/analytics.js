import ReactGA from "react-ga4";

export const initGA = () => {
    ReactGA.initialize("UA-55429380-1");
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = "") => {
    if (category && action) {
        ReactGA.event({ category, action });
    }
};

export const logException = (description = "", fatal = false) => {
    if (description) {
        ReactGA.exception({ description, fatal });
    }
};