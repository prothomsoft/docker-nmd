import * as React from "react";
import LayoutSitePage from "../components/layoutSitePage";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "next/image";
import FaqAccordion from "../components/faqAccordion";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio = process.env.staticS3ImagesPath + "portfolio/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio.webp";
const fotograf_slubny_krakow_1 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_krakow_1.webp";
const fotograf_slubny_krakow_22 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_krakow_22.webp";
const sesja_plenerowa_kasprowy = process.env.staticS3ImagesPath + "portfolio/sesja_plenerowa_kasprowy.webp";

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "plener_slubny_bielsko_szyndzielnia_klimczok.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Czy posiadasz zaświadczenie z kurii zezwalające na fotografowanie podczas ślubów?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tak przeszedłem kurs w kurii i posiadam zaświadczenie zezwalające na wykonanie reportażu z uroczystości ślubnej."
        }
    },{
        "@type": "Question",
        "name": "Czy posiadasz zapasowy aparat w przypadku awarii?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zawsze posiadam drugi aparat na wypadek awarii."
        }
    },{
      "@type": "Question",
      "name": "Czy fotoksiążka jest wliczona w cenę pakietu i czy można zobaczyć przykładową książkę przed ślubem?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fotoksiążka jest produktem finalnym naszej współpracy i jest wliczona w cenę pakietu. Przykładową książkę możecie zobaczyć na spotkaniu ze mną w Krakowie. Na spotkaniu odpowiem też na wszystkie Wasze pytania."
      }
  },{
    "@type": "Question",
    "name": "Jakiego sprzętu fotograficznego używasz w swojej pracy?",
    "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zdjęcia wykonuję bezlusterkowymi aparatami pełnoklatkowymi systemu Nikon Z i jasnymi obiektywami Nikkor Z."
    }   
  },{
    "@type": "Question",
    "name": "Do której godziny jesteś na weselu?",
    "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na weselu jestem do godziny pierwszej w nocy. Wszystkie najważniejsze atrakcje wieczoru dzieją się do tej chwili."
    }   
  },{
    "@type": "Question",
    "name": "Na jakim terenie pracujesz?",
    "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mieszkam w Krakowie. Mogę jednak uwiecznić Waszą uroczystość (lub też wykonać sesję plenerową) w dowolnym miejscu w południowej Polsce."
    }   
  },{
    "@type": "Question",
    "name": "Ile wynosi dopłata za dojazd?",
    "acceptedAnswer": {
        "@type": "Answer",
        "text": "W moim pakiecie oferuję dojazd w dniu ślubu GRATIS. Jeżeli natomiast Wasz plener ślubny odbywa się w oddalonym od Krakowa miejscu to musimy doliczyć dopłatę za dojazd 1,52 PLN/km (zawsze jeździmy moim autem)."
    }   
  },{
    "@type": "Question",
    "name": "Czy obrabiasz zdjęcia?",
    "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oczywiście. Każde zdjęcie wykonuję w formacie RAW - traktuję je jako półprodukt, z którego powstanie fotografia."
    }   
  },{
    "@type": "Question",
    "name": "Czy ze zdjęć, które od Ciebie dostaniemy możemy sobie wywołać odbitki o dużym rozmiarze?",
    "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, zdjęcia otrzymujecie w dużej rozdzielczości 3520px (300 dpi)."
    }   
  },{
    "@type": "Question",
    "name": "Kiedy robisz plener ślubny?",
    "acceptedAnswer": {
        "@type": "Answer",
        "text": "Z reguły sesję ślubną robimy w tygodniu po Waszym ślubie, jednak bez problemu przesuniemy ją na termin późniejszy."
    }   
  },{
    "@type": "Question",
    "name": "Jak długo trwa plener? Jak wygląda taka sesja plenerowa?",
    "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na sesję zarezerwujcie sobie minimum trzy godziny - wszystko zależy od tego gdzie jest sesja i czy musimy daleko dojeżdżać."
    }   
  },{
    "@type": "Question",
    "name": "Czy mówisz w innych językach, niż polski?",
    "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, swobodnie porozumiewam się w języku angielskim. Mam zdany First Certificate in English."
    }   
  },{
    "@type": "Question",
    "name": "Czy prowadzisz legalną działalność gospodarczą?",
    "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, mam zarejestrowaną działalność gospodarczą i odprowadzam podatki."
    }   
  },{
    "@type": "Question",
    "name": "Jak wcześnie trzeba rezerwować termin?",
    "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zasada jest prosta, im szybciej tym lepiej, jeżeli jesteście zdecydowani abym to ja uwiecznił Waszą uroczystość - wypełnijcie poniższy formularz i skontaktujcie się ze mną jak najwcześniej. Warunkiem pełnej rezerwacji terminu jest podpisanie umowy."
    }   
  }
]}

  return (
    <LayoutSitePage
      title="Jakie pytania zadać fotografowi. Wybór fotografa na Twój ślub"
      description="Często zadawane pytania i moje odpowiedzi. Zapraszam do zapoznania się z informacjami, które ułatwią Wam podjęcie decyzji wyboru fotografa na Wasz ślub."
      keywords="pytania do fotografa, wybór fotografa na ślub"
      url="https://99foto.pl/misja-i-faq/"
      leadNames="MAGDALENA i JONASZ"
      leadTitle="PLENER W BESKIDACH, SESJA ŚLUBNA W BESKIDZIE ŚLĄSKIM"
      leadUrl="/plener-w-beskidach-sesja-slubna-w-beskidzie-slaskim"
      leadImage={pageImage}
      schemaData={schemaData}>
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FAQ - MOJE ODPOWIEDZI NA CZĘSTO ZADAWANE PYTANIA
          </Typography>
        </Box>
        <Box sx={{ pb: 2 }}>
        <FaqAccordion q1={schemaData.mainEntity[0].name}
                            a1={schemaData.mainEntity[0].acceptedAnswer.text} 
                            q2={schemaData.mainEntity[1].name}
                            a2={schemaData.mainEntity[1].acceptedAnswer.text}
                            q3={schemaData.mainEntity[2].name}
                            a3={schemaData.mainEntity[2].acceptedAnswer.text}
                            q4={schemaData.mainEntity[3].name}
                            a4={schemaData.mainEntity[3].acceptedAnswer.text}  />
        </Box>
        <Image alt="plener ślubny na Rynku w Krakowie" src={fotograf_slubny_krakow_1} width={1140} height={764} style={{width: '100%', height: 'auto'}} priority />
        <Box sx={{ py: 2 }}>
        <FaqAccordion q1={schemaData.mainEntity[4].name}
                            a1={schemaData.mainEntity[4].acceptedAnswer.text} 
                            q2={schemaData.mainEntity[5].name}
                            a2={schemaData.mainEntity[5].acceptedAnswer.text}
                            q3={schemaData.mainEntity[6].name}
                            a3={schemaData.mainEntity[6].acceptedAnswer.text}
                            q4=""
                            a4="" />
        </Box>
        <Image alt="fotograf na wesele kraków" src={sesja_plenerowa_kasprowy} width={1140} height={761} style={{width: '100%', height: 'auto'}}  />

        <Box sx={{ py: 2 }}>
        <FaqAccordion q1={schemaData.mainEntity[7].name}
                            a1={schemaData.mainEntity[7].acceptedAnswer.text} 
                            q2={schemaData.mainEntity[8].name}
                            a2={schemaData.mainEntity[8].acceptedAnswer.text}
                            q3={schemaData.mainEntity[9].name}
                            a3={schemaData.mainEntity[9].acceptedAnswer.text}
                            q4=""
                            a4="" />
        </Box>

        <Image alt="sesja zdjęciowa w Krakowie" src={sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Box sx={{ py: 2 }}>
        <FaqAccordion q1={schemaData.mainEntity[10].name}
                            a1={schemaData.mainEntity[10].acceptedAnswer.text} 
                            q2={schemaData.mainEntity[11].name}
                            a2={schemaData.mainEntity[11].acceptedAnswer.text}
                            q3={schemaData.mainEntity[12].name}
                            a3={schemaData.mainEntity[12].acceptedAnswer.text}
                            q4={schemaData.mainEntity[13].name}
                            a4={schemaData.mainEntity[13].acceptedAnswer.text}  />
        </Box>
        <Image alt="reportaź ślubny w Krakowie" src={fotograf_slubny_krakow_22} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />

        <Typography align="justify" color="text.secondary" sx={{ py: 2 }}>
          Jeżeli odpowiedzi na często zadawane pytania nie rozwiały Twoich wątpliwości lub pominąłem pytanie, które siedzi w Twojej głowie to napisz do mnie proszę wykorzystując poniższy formularz
          kontaktowy. Bardzo szybko odpowiem w wiadomości zwrotnej i wszystko będzie jasne. Serdecznie zapraszam.
        </Typography>
      </Container>
    </LayoutSitePage>
  );
};

export default PageComponent;
