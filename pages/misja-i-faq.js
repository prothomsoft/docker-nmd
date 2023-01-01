import * as React from "react";
import LayoutSitePage from "../components/layoutSitePage";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "next/image";
import FaqAccordion from "../components/faqAccordion";
import FaqAccordion1 from "../components/faqAccordion1";
import FaqAccordion2 from "../components/faqAccordion2";
import FaqAccordion3 from "../components/faqAccordion3";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio from "../public/static/portfolio/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio.webp";
import fotograf_slubny_krakow_1 from "../public/static/portfolio/fotograf_slubny_krakow_1.webp";
import fotograf_slubny_krakow_22 from "../public/static/portfolio/fotograf_slubny_krakow_22.webp";
import sesja_plenerowa_kasprowy from "../public/static/portfolio/sesja_plenerowa_kasprowy.webp";

const PageComponent = () => {
  const pageImage = process.env.staticImagesPath + "plener_slubny_bielsko_szyndzielnia_klimczok.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <LayoutSitePage
      title="Jakie pytania zadać fotografowi ❤️ Wybór fotografa na Twój ślub"
      description="Często zadawane pytania i moje odpowiedzi. Zapraszam do zapoznania się z informacjami, które ułatwią Wam podjęcie decyzji wyboru fotografa na Wasz ślub."
      keywords="pytania do fotografa, wybór fotografa na ślub"
      url="https://99foto.pl/misja-i-faq/"
      leadNames="MAGDALENA i JONASZ"
      leadTitle="PLENER W BESKIDACH, SESJA ŚLUBNA W BESKIDZIE ŚLĄSKIM"
      leadUrl="/plener-w-beskidach-sesja-slubna-w-beskidzie-slaskim"
      leadImage={pageImage}>
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FAQ - MOJE ODPOWIEDZI NA CZĘSTO ZADAWANE PYTANIA
          </Typography>
        </Box>
        <Box sx={{ pb: 2 }}>
          <FaqAccordion />
        </Box>
        <Image alt="Plener ślubny na Rynku w Krakowie" src={fotograf_slubny_krakow_1} style={{width: '100%', height: 'auto'}}  />
        <Box sx={{ py: 2 }}>
          <FaqAccordion1 />
        </Box>
        <Image alt="fotograf na wesele kraków" src={sesja_plenerowa_kasprowy} style={{width: '100%', height: 'auto'}}  />

        <Box sx={{ py: 2 }}>
          <FaqAccordion2 />
        </Box>

        <Image alt="Sesja zdjęciowa w Krakowie" src={sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio} style={{width: '100%', height: 'auto'}}  />
        <Box sx={{ py: 2 }}>
          <FaqAccordion3 />
        </Box>
        <Image alt="fotograf na wesele kraków" src={fotograf_slubny_krakow_22} style={{width: '100%', height: 'auto'}}  />

        <Typography align="justify" color="text.secondary" sx={{ py: 2 }}>
          Jeżeli odpowiedzi na często zadawane pytania nie rozwiały Twoich wątpliwości lub pominąłem pytanie, które siedzi w Twojej głowie to napisz do mnie proszę wykorzystując poniższy formularz
          kontaktowy. Bardzo szybko odpowiem w wiadomości zwrotnej i wszystko będzie jasne. Serdecznie zapraszam.
        </Typography>
      </Container>
    </LayoutSitePage>
  );
};

export default PageComponent;
