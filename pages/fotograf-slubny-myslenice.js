import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ImageCardSmall from "../components/imageCardSmall";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";

const sylwestrowy_slub = process.env.staticS3ImagesPath + "portfolio/small/sylwestrowy_slub.webp";
const plener_slubny_w_krakowie = process.env.staticS3ImagesPath + "portfolio/small/plener_slubny_w_krakowie.webp";
const sesja_plenerowa_rynek_w_krakowie = process.env.staticS3ImagesPath + "portfolio/small/sesja_plenerowa_rynek_w_krakowie.webp";

const fotograf_slubny_portfolio_2023_081 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_081.webp";
const fotograf_slubny_portfolio_2023_082 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_082.webp";
const fotograf_slubny_portfolio_2023_083 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_083.webp";
const fotograf_slubny_portfolio_2023_084 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_004.webp";
const fotograf_slubny_portfolio_2023_086 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_086.webp";
const fotograf_slubny_portfolio_2023_087 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_087.webp";
const fotograf_slubny_portfolio_2023_088 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_088.webp";
const fotograf_slubny_portfolio_2023_090 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_090.webp";
const fotograf_slubny_portfolio_2023_093 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_093.webp";
const fotograf_slubny_portfolio_2023_094 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_094.webp";
const fotograf_slubny_portfolio_2023_095 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_095.webp";
const fotograf_slubny_portfolio_2023_096 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_096.webp";
const fotograf_slubny_portfolio_2023_097 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_097.webp";
const fotograf_slubny_portfolio_2023_098 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_098.webp";
const fotograf_slubny_portfolio_2023_101 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_101.webp";
const fotograf_slubny_portfolio_2023_102 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_102.webp";
const fotograf_slubny_portfolio_2023_104 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_104.webp";
const fotograf_slubny_portfolio_2023_106 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_106.webp";
const fotograf_slubny_portfolio_2023_107 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_107.webp";
const fotograf_slubny_portfolio_2023_112 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_112.webp";
const fotograf_slubny_portfolio_2023_113 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_113.webp";
const fotograf_slubny_portfolio_2023_114 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_114.webp";
const fotograf_slubny_portfolio_2023_117 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_117.webp";
const fotograf_slubny_portfolio_2023_118 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_118.webp";
const fotograf_slubny_portfolio_2023_635 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_635.webp";
const fotograf_slubny_portfolio_2023_637 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_637.webp";
const fotograf_slubny_portfolio_2023_638 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_638.webp";
const fotograf_slubny_portfolio_2023_639 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_639.webp";
const fotograf_slubny_portfolio_2023_643 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_643.webp";
const fotograf_slubny_portfolio_2023_642 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_642.webp";

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "klaudia_przemek_start.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_081
    },
    {
        image: fotograf_slubny_portfolio_2023_082
    },
    {
        image: fotograf_slubny_portfolio_2023_084
    },
    {
        image: fotograf_slubny_portfolio_2023_083
    },
    {
        image: fotograf_slubny_portfolio_2023_112
    },
    {
        image: fotograf_slubny_portfolio_2023_086
    },
    {
        image: fotograf_slubny_portfolio_2023_088
    },
    {
        image: fotograf_slubny_portfolio_2023_087
    },
    {
        image: fotograf_slubny_portfolio_2023_113
    },
    {
        image: fotograf_slubny_portfolio_2023_090
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_093
    },
    {
      image: fotograf_slubny_portfolio_2023_635
    },
    {
      image: fotograf_slubny_portfolio_2023_114
    },
    {
      image: fotograf_slubny_portfolio_2023_094
    },
    {
      image: fotograf_slubny_portfolio_2023_095
    },
    {
      image: fotograf_slubny_portfolio_2023_096
    },
    {
      image: fotograf_slubny_portfolio_2023_097
    },
    {
      image: fotograf_slubny_portfolio_2023_098
    },
    {
      image: fotograf_slubny_portfolio_2023_637
    },
    {
      image: fotograf_slubny_portfolio_2023_638
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_107
    },
    {
      image: fotograf_slubny_portfolio_2023_102
    },
    {
      image: fotograf_slubny_portfolio_2023_117
    },
    {
      image: fotograf_slubny_portfolio_2023_104
    },
    {
      image: fotograf_slubny_portfolio_2023_639
    },
    {
      image: fotograf_slubny_portfolio_2023_106
    },
    {
      image: fotograf_slubny_portfolio_2023_101
    },
    {
      image: fotograf_slubny_portfolio_2023_643
    },
    {
      image: fotograf_slubny_portfolio_2023_642
    },
    {
      image: fotograf_slubny_portfolio_2023_118
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Czy warto zorganizować ślub w zimie?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ślub zimą - dla jednych brzmi super, dla innych termin zupełnie nie do zaakceptowania. Gorąco polecamy zimowe śluby i są one równie piękne jak śluby letnie."
        }
    },{
        "@type": "Question",
        "name": "Czy obróbka zdjęć ślubnych jest super ważna?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Praca fotografa nie kończy się tylko na robieniu zdjęć podczas całej uroczystości. Ważna jest również obróbka, chociaż jest ona w zasadzie tylko wisienką na torcie. Najbardziej liczy się też doświadczenie w robieniu zdjęć."
        }
    },{
      "@type": "Question",
      "name": "Rozmowa wstępna z fotografem z Myślenic.",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rozmowa powinna się odbyć w cztery oczy i jest to bardzo ważne. Podczas tej rozmowy można wywnioskować czy ktoś zna się na fotografii ślubnej, czy pasuje do nas charakterem. Można też oczywiście zapoznać się z materiałami, którymi dysponuje fotograf, będą to książki i fotoalbumy pokazowe."
      }
    },{
      "@type": "Question",
      "name": "Jaka jest optymalna liczba zdjęć?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zachowanie wszystkich najważniejszych momentów na weselu, moim zdaniem wymaga około czterystu pięćdziesięciu zdjęć. Pozwoli nam to zachować ciągłość i pełen przekrój ślubu i wesela, od momentu przygotowań, makijażu ślubnego do momentu oczepin."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ślubny Myślenice"
      description="Fotograf ślubny Myślenice, wybór fotografa ślubnego"
      keywords="fotograf ślubny Myślenice, eybór fotografa ślubnego"
      url="https://99foto.pl/fotograf-slubny-myslenice/"
      leadNames="KLAUDIA i PRZEMYSŁAW"
      leadTitle="KAROLINKA BYSTRA PODHALAŃSKA, WESELE STRAŻACKIE"
      leadUrl="/sala-weselna-karolinka-bystra-podhalanska"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY MYŚLENICE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Ślub i wesele to jeden z najważniejszych momentów w życiu, które wymagają należytego uwiecznienia. Idealnym pomysłem jest wykorzystanie fotografii ślubnej.
        Zdjęcia z uroczystości mogą być wspaniałą pamiątką dla przyszłych pokoleń. Dlatego ważne jest to, aby wybrać odpowiedniego profesjonalnego i doświadczonego fotografa ślubnego.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Nie ma ślubu bez fotografa na co w takim razie zwrócić uwagę przy wyborze tego jedynego fotografa. Czy znacie najwaźniejsze kwestie, na które Para Młoda powinna zwrócić uwagę przy wyborze fotografa ślubnego? Czy szukacie <strong>najlepszego fotografa ślubnego w Myślenicach</strong>? Nazywam się Tomasz Prokop, mieszkam w Krakowie i zapraszam do mojego fotograficznego świata.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA - WYMAGAJĄCA DZIEDZINA FOTOGRAFII?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Czy fotografia ślubna jest jedną z najtrudniejszych dziedzin fotografii? A jeśli tak to dlaczego? Fotografia ślubna jest bardzo wymagająca, ponieważ pracuje się z osobami, które nieczęsto stają przed aparatem, przeważnie robią to pierwszy raz w życiu. Wszystko co robimy pierwszy raz w życiu jest super ekscytujące, jednak dopiero doświadczenie powoduje, że zaczynamy robić rzeczy dobrze.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ŚLUBNY MYŚLENICE - AMATOR CZY PROFESJONALISTA? 
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Czy często para młoda decyduje się na wybór profesjonalnego fotografa, czy może liczy bardziej na zdjęcia od gości, którzy obecni są na całej uroczystości?
        Pary młode raczej decydują się jednak na profesjonalistę, ponieważ goście nie zawsze muszą złapać ten odpowiedni moment w trakcie ślubu lub wesela. Mogą akurat się zająć zabawą w czasie, kiedy dzieją się najciekawsze rzeczy.
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Dodatkowo wiele osób duchownych raczej preferuje profesjonalistę przy ołtarzu, który zrobi zdjęcia dyskretnie i profesjonalnie nie przeszkadzając w trakcie samej ceremonii ślubu.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          WYBÓR FOTOGRAFA - FOTOGRAF ŚLUBNY MYŚLENICE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Na co powinniśmy zwracać uwagę poszukując profesjonalnego fotografa? Poszukując profesjonalnego fotografa najlepiej jest zasięgnąć rady w internecie, czyli kluczowe są tutaj opinie innych osób. Fotograf nawet z super portfolio może okazać się niepasującym charakterem do klientów. Każdy fotograf ma przecież swój styl i lepiej wybrać osobę która będzie pasowała bardziej pod kątem portfolio i porozumienia charakterów. 
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA MYŚLENICE - CAŁY REPORTAŻ ŚLUBNY
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Warto też obejrzeć cały reportaż takiego fotografa bo jest oczywiste, że fotografowie na swoich stronach internetowych, profilach społecznościowych posługują się najlepszymi kadrami, więc moim zdaniem warto jest poprosić takiego fotografa, żeby pokazał cały reportaż z wesela najlepiej jednego z ostatnio wykonanych. 
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA MYŚLENICE - PAKIET ŁĄCZONY FOTO-VIDEO
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Czy warto decydować się na łączony pakiet foto plus video? Tak jak najbardziej. Nie bez znaczenia jest fakt, że przeważnie opłaca się to kosztowo. Warto zwrócić uwagę na to czy dana ekipa jest bardzo zgrana, to się mocno liczy w dniu ślubu i wesela, ponieważ takie osoby nie mogą sobie nawzajem przeszkadzać.

        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
            NAJCZĘŚCIEJ ZADAWANE PYTANIA
          </Typography>
        </Box>
        
        <Box sx={{ pt:2, pb: 2 }}>
        <FaqAccordion q1={schemaData.mainEntity[0].name}
                            a1={schemaData.mainEntity[0].acceptedAnswer.text} 
                            q2={schemaData.mainEntity[1].name}
                            a2={schemaData.mainEntity[1].acceptedAnswer.text}
                            q3={schemaData.mainEntity[2].name}
                            a3={schemaData.mainEntity[2].acceptedAnswer.text}
                            q4={schemaData.mainEntity[3].name}
                            a4={schemaData.mainEntity[3].acceptedAnswer.text}  />
        </Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
            POLECANE REPORTAŻE ŚLUBNE
          </Typography>
        </Box>
        
        <Box sx={{ pt:2, pb: 2 }}>
        <Grid container direction="row" alignItems="center">
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={sylwestrowy_slub}
              imgalt="ślub w sylwestra, sylwestrowy ślub"
              linkhref="sylwestrowy-slub-sala-bankietowa-impresja-jordanow"
              title="SYLWESTROWY ŚLUB W GÓRACH"
              names="JUSTYNA i DAMIAN"
            />
            
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={sesja_plenerowa_rynek_w_krakowie}
              imgalt="plener ślubny kraków"
              linkhref="sesja-slubna-w-krakowie-sukiennice-hotel-stary-bulwary-wislane"
              title="PLENER RYNEK i SUKIENNICE"
              names="OLGA i DAWID"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={plener_slubny_w_krakowie}
              imgalt="plener ślubny w Krakowie, sprawdzone miejsca"
              linkhref="wymarzony-plener-slubny-w-krakowie-sprawdzone-miejsca"
              title="SESJA ZDJĘCIOWA MOGILANY"
              names="ANNA i TOMASZ"
            />  
          </Grid>
        </Grid>
        </Box>
      </Container>
    </LayoutSitePage>
  );
};

const CarouselItem = (props) => {
    return (
        <Box>
            <Image quality={100} src={props.item.image} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        </Box>
    )
}

export default PageComponent;