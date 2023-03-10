import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";

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
        "name": "Czy warto zorganizowa?? ??lub w zimie?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "??lub zim?? - dla jednych brzmi super, dla innych termin zupe??nie nie do zaakceptowania. Gor??co polecamy zimowe ??luby i s?? one r??wnie pi??kne jak ??luby letnie."
        }
    },{
        "@type": "Question",
        "name": "Czy obr??bka zdj???? ??lubnych jest super wa??na?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Praca fotografa nie ko??czy si?? tylko na robieniu zdj???? podczas ca??ej uroczysto??ci. Wa??na jest r??wnie?? obr??bka, chocia?? jest ona w zasadzie tylko wisienk?? na torcie. Najbardziej liczy si?? te?? do??wiadczenie w robieniu zdj????."
        }
    },{
      "@type": "Question",
      "name": "Rozmowa wst??pna z fotografem z My??lenic.",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rozmowa powinna si?? odby?? w cztery oczy i jest to bardzo wa??ne. Podczas tej rozmowy mo??na wywnioskowa?? czy kto?? zna si?? na fotografii ??lubnej, czy pasuje do nas charakterem. Mo??na te?? oczywi??cie zapozna?? si?? z materia??ami, kt??rymi dysponuje fotograf, b??d?? to ksi????ki i fotoalbumy pokazowe."
      }
    },{
      "@type": "Question",
      "name": "Jaka jest optymalna liczba zdj?????",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zachowanie wszystkich najwa??niejszych moment??w na weselu, moim zdaniem wymaga oko??o czterystu pi????dziesi??ciu zdj????. Pozwoli nam to zachowa?? ci??g??o???? i pe??en przekr??j ??lubu i wesela, od momentu przygotowa??, makija??u ??lubnego do momentu oczepin."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ??lubny My??lenice"
      description="Fotograf ??lubny My??lenice, wyb??r fotografa ??lubnego"
      keywords="fotograf ??lubny My??lenice, eyb??r fotografa ??lubnego"
      url="https://99foto.pl/fotograf-slubny-myslenice/"
      leadNames="KLAUDIA i PRZEMYS??AW"
      leadTitle="KAROLINKA BYSTRA PODHALA??SKA, WESELE STRA??ACKIE"
      leadUrl="/sala-weselna-karolinka-bystra-podhalanska"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ??LUBNY MY??LENICE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        ??lub i wesele to jeden z najwa??niejszych moment??w w ??yciu, kt??re wymagaj?? nale??ytego uwiecznienia. Idealnym pomys??em jest wykorzystanie fotografii ??lubnej.
        Zdj??cia z uroczysto??ci mog?? by?? wspania???? pami??tk?? dla przysz??ych pokole??. Dlatego wa??ne jest to, aby wybra?? odpowiedniego profesjonalnego i do??wiadczonego fotografa ??lubnego.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Nie ma ??lubu bez fotografa na co w takim razie zwr??ci?? uwag?? przy wyborze tego jedynego fotografa. Czy znacie najwa??niejsze kwestie, na kt??re Para M??oda powinna zwr??ci?? uwag?? przy wyborze fotografa ??lubnego? Czy szukacie <strong>najlepszego fotografa ??lubnego w My??lenicach</strong>? Nazywam si?? Tomasz Prokop, mieszkam w Krakowie i zapraszam do mojego fotograficznego ??wiata.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA - WYMAGAJ??CA DZIEDZINA FOTOGRAFII?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Czy fotografia ??lubna jest jedn?? z najtrudniejszych dziedzin fotografii? A je??li tak to dlaczego? Fotografia ??lubna jest bardzo wymagaj??ca, poniewa?? pracuje si?? z osobami, kt??re niecz??sto staj?? przed aparatem, przewa??nie robi?? to pierwszy raz w ??yciu. Wszystko co robimy pierwszy raz w ??yciu jest super ekscytuj??ce, jednak dopiero do??wiadczenie powoduje, ??e zaczynamy robi?? rzeczy dobrze.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ??LUBNY MY??LENICE - AMATOR CZY PROFESJONALISTA? 
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Czy cz??sto para m??oda decyduje si?? na wyb??r profesjonalnego fotografa, czy mo??e liczy bardziej na zdj??cia od go??ci, kt??rzy obecni s?? na ca??ej uroczysto??ci?
        Pary m??ode raczej decyduj?? si?? jednak na profesjonalist??, poniewa?? go??cie nie zawsze musz?? z??apa?? ten odpowiedni moment w trakcie ??lubu lub wesela. Mog?? akurat si?? zaj???? zabaw?? w czasie, kiedy dziej?? si?? najciekawsze rzeczy.
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Dodatkowo wiele os??b duchownych raczej preferuje profesjonalist?? przy o??tarzu, kt??ry zrobi zdj??cia dyskretnie i profesjonalnie nie przeszkadzaj??c w trakcie samej ceremonii ??lubu.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          WYB??R FOTOGRAFA - FOTOGRAF ??LUBNY MY??LENICE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Na co powinni??my zwraca?? uwag?? poszukuj??c profesjonalnego fotografa? Poszukuj??c profesjonalnego fotografa najlepiej jest zasi??gn???? rady w internecie, czyli kluczowe s?? tutaj opinie innych os??b. Fotograf nawet z super portfolio mo??e okaza?? si?? niepasuj??cym charakterem do klient??w. Ka??dy fotograf ma przecie?? sw??j styl i lepiej wybra?? osob?? kt??ra b??dzie pasowa??a bardziej pod k??tem portfolio i porozumienia charakter??w. 
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA MY??LENICE - CA??Y REPORTA?? ??LUBNY
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Warto te?? obejrze?? ca??y reporta?? takiego fotografa bo jest oczywiste, ??e fotografowie na swoich stronach internetowych, profilach spo??eczno??ciowych pos??uguj?? si?? najlepszymi kadrami, wi??c moim zdaniem warto jest poprosi?? takiego fotografa, ??eby pokaza?? ca??y reporta?? z wesela najlepiej jednego z ostatnio wykonanych. 
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA MY??LENICE - PAKIET ????CZONY FOTO-VIDEO
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Czy warto decydowa?? si?? na ????czony pakiet foto plus video? Tak jak najbardziej. Nie bez znaczenia jest fakt, ??e przewa??nie op??aca si?? to kosztowo. Warto zwr??ci?? uwag?? na to czy dana ekipa jest bardzo zgrana, to si?? mocno liczy w dniu ??lubu i wesela, poniewa?? takie osoby nie mog?? sobie nawzajem przeszkadza??.

        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
            NAJCZ????CIEJ ZADAWANE PYTANIA
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
      </Container>
    </LayoutSitePage>
  );
};

const CarouselItem = (props) => {
    return (
        <Box>
            <Image src={props.item.image} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        </Box>
    )
}

export default PageComponent;