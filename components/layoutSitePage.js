import React from "react";
import AppBarWithResponsiveMenu from "./appBarWithResponsiveMenu";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImageFooter from "./parallaxImageFooter";
import Box from "@mui/material/Box";
import Meta from "./meta";
import Container from "@mui/material/Container";
import ContactForm from "../components/contactForm";
import { initGA, logPageView } from "./analytics.js";

const LayoutSitePage = ({ children, title, description, keywords, url, leadImage, leadNames, leadTitle, leadUrl }) => {

  const scrollToContact = React.useRef(null);
  const executeScrollContact = () => scrollToContact.current.scrollIntoView({ behavior: "smooth" });

  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <>
      <Meta title={title} description={description} keywords={keywords} url={url} />
      <ParallaxProvider>
        <AppBarWithResponsiveMenu action={executeScrollContact} />
        {children}
        <Box ref={scrollToContact}></Box>
        <Container>
          <ContactForm />
        </Container>
        <ParallaxImageFooter leadImage={leadImage} leadNames={leadNames} leadTitle={leadTitle} leadUrl={leadUrl} height="100vh" />
      </ParallaxProvider>
    </>
  );
};

export default LayoutSitePage;
