import React, { useRef, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImage from "./parallaxImage";
import ParallaxImageFooter from "./parallaxImageFooter";
import AppBarWithResponsiveMenu from "./appBarWithResponsiveMenu";
import Box from "@mui/material/Box";
import Meta from "./meta";
import { initGA, logPageView } from "./analytics.js";
import Container from "@mui/material/Container";
import ContactForm from "./contactForm";

const LayoutStartPage = ({
  children,
  title,
  description,
  keywords,
  url,
  leadNames,
  leadTitle,
  leadUrl,
  leadImage,
  slide,
  menuNames,
  menuTitle,
  schemaData,
}) => {
  const scrollToText = useRef(null);
  const scrollToContact = useRef(null);

  const executeScroll = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <>
      <Meta
        title={title}
        description={description}
        keywords={keywords}
        url={url}
        schemaData={schemaData}
      />
      <ParallaxProvider>
        <AppBarWithResponsiveMenu action={() => executeScroll(scrollToContact)} />
        <ParallaxImage
          imgsrc={slide}
          height="100vh"
          action={() => executeScroll(scrollToText)}
          menuNames={menuNames}
          menuTitle={menuTitle}
        />
        <Box ref={scrollToText}></Box>
        {children}
        <Box ref={scrollToContact}></Box>
        <Container>
          <ContactForm />
        </Container>
        <ParallaxImageFooter
          leadImage={leadImage}
          leadNames={leadNames}
          leadTitle={leadTitle}
          leadUrl={leadUrl}
          height="100vh"
        />
      </ParallaxProvider>
    </>
  );
};

export default LayoutStartPage;