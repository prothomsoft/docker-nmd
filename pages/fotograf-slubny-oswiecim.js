import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";





const fotograf_slubny_portfolio_2023_537 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_537.webp";
const fotograf_slubny_portfolio_2023_538 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_538.webp";
const fotograf_slubny_portfolio_2023_539 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_539.webp";
const fotograf_slubny_portfolio_2023_540 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_540.webp";
const fotograf_slubny_portfolio_2023_541 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_541.webp";
const fotograf_slubny_portfolio_2023_542 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_542.webp";
const fotograf_slubny_portfolio_2023_543 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_543.webp";
const fotograf_slubny_portfolio_2023_544 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_544.webp";
const fotograf_slubny_portfolio_2023_545 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_545.webp";
const fotograf_slubny_portfolio_2023_546 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_546.webp";
const fotograf_slubny_portfolio_2023_548 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_548.webp";
const fotograf_slubny_portfolio_2023_549 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_549.webp";
const fotograf_slubny_portfolio_2023_551 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_551.webp";
const fotograf_slubny_portfolio_2023_552 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_552.webp";
const fotograf_slubny_portfolio_2023_553 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_553.webp";
const fotograf_slubny_portfolio_2023_554 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_554.webp";
const fotograf_slubny_portfolio_2023_555 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_555.webp";
const fotograf_slubny_portfolio_2023_556 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_556.webp";
const fotograf_slubny_portfolio_2023_557 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_557.webp";
const fotograf_slubny_portfolio_2023_561 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_561.webp";
const fotograf_slubny_portfolio_2023_562 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_562.webp";
const fotograf_slubny_portfolio_2023_563 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_563.webp";
const fotograf_slubny_portfolio_2023_564 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_564.webp";
const fotograf_slubny_portfolio_2023_565 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_565.webp";
const fotograf_slubny_portfolio_2023_566 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_566.webp";
const fotograf_slubny_portfolio_2023_567 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_567.webp";
const fotograf_slubny_portfolio_2023_568 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_568.webp";
const fotograf_slubny_portfolio_2023_651 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_651.webp";
const fotograf_slubny_portfolio_2023_652 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_652.webp";
const fotograf_slubny_portfolio_2023_653 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_653.webp";



const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "wesele_folwark_wiazy_marszowice.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_538
    },
    {
        image: fotograf_slubny_portfolio_2023_537
    },
    {
        image: fotograf_slubny_portfolio_2023_539
    },
    {
        image: fotograf_slubny_portfolio_2023_540
    },
    {
        image: fotograf_slubny_portfolio_2023_541
    },
    {
        image: fotograf_slubny_portfolio_2023_542
    },
    {
        image: fotograf_slubny_portfolio_2023_543
    },
    {
        image: fotograf_slubny_portfolio_2023_544
    },
    {
        image: fotograf_slubny_portfolio_2023_545
    },
    {
        image: fotograf_slubny_portfolio_2023_546
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_549
    },
    {
      image: fotograf_slubny_portfolio_2023_548
    },
    {
      image: fotograf_slubny_portfolio_2023_567
    },
    {
      image: fotograf_slubny_portfolio_2023_651
    },
    {
      image: fotograf_slubny_portfolio_2023_551
    },
    {
      image: fotograf_slubny_portfolio_2023_552
    },
    {
      image: fotograf_slubny_portfolio_2023_553
    },
    {
      image: fotograf_slubny_portfolio_2023_554
    },
    {
      image: fotograf_slubny_portfolio_2023_555
    },
    {
      image: fotograf_slubny_portfolio_2023_556
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_557
    },
    {
      image: fotograf_slubny_portfolio_2023_652
    },
    {
      image: fotograf_slubny_portfolio_2023_568
    },
    {
      image: fotograf_slubny_portfolio_2023_653
    },
    {
      image: fotograf_slubny_portfolio_2023_561
    },
    {
      image: fotograf_slubny_portfolio_2023_563
    },
    {
      image: fotograf_slubny_portfolio_2023_562
    },
    {
      image: fotograf_slubny_portfolio_2023_564
    },
    {
      image: fotograf_slubny_portfolio_2023_565
    },
    {
      image: fotograf_slubny_portfolio_2023_566
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Jakie masz do??wiadczenie w fotografii ??lubnej?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fotografia ??lubna to bran??a w kt??rej zawodowo dzia??am od 2012 roku. W tym czasie wykona??em ponad 300 reporta??y ??lubnych wi??c my??l??, ??e nie ma ju?? warunk??w, kt??re potrafi??yby mnie zaskoczy?? i przerosn???? - tutaj mo??ecie mie?? na prawd?? spokojn?? g??ow??."
        }
    },{
        "@type": "Question",
        "name": "Ile czasu powinni??my przeznaczy?? na zdj??cia grupowe?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "W zale??no??ci od tego jak du??e b??d?? grupy i jak du??e jest Wasze wesele oraz od tego czy chcecie zdj??cia tylko z najbli??szymi czy wszystkimi go????mi od pi??tnastu minut do godziny czasu."
        }
    },{
      "@type": "Question",
      "name": "W ko??ciele nie wolno u??ywa?? lamp b??yskowych - czy to b??dzie dla Ciebie problem?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nie b??dzie to ??aden problem, nigdy jeszcze nie u??ywa??em lampy b??yskowej w ko??ciele. Sprz??t, na kt??rym pracuje pozwala fotografowa?? w na prawd?? s??abych warunkach o??wietleniowych."
      }
    },{
      "@type": "Question",
      "name": "Czy mo??na u Ciebie zam??wi?? sam?? sesj?? zdj??ciow???",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, oczywi??cie. Mo??ecie zdecydowa?? si?? tylko na sesj?? narzecze????k?? lub okoliczno??ci??. Sesja to zawsze trzy lub cztery godziny fotografowania w dw??ch lub trzech wybranych miejscach, bardzo cz??sto jest to spacer. Wynikiem sesji jest zawsze minimum sto zdj???? poddanych starannej obr??bce graficznej."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ??lubny O??wi??cim"
      description="Fotograf ??lubny O??wi??cim, ceny fotografii ??lubnej w O??wi??cimiu"
      keywords="fotograf ??lubny O??wi??cim, fotograf na wesele w O??wi??cimiu"
      url="https://99foto.pl/fotograf-slubny-oswiecim/"
      leadNames="PAULA i WOJTEK"
      leadTitle="FOLWARK WI??ZY MARSZOWICE i RUSTYKALNE WESELE POD KRAKOWEM"
      leadUrl="/folwark-wiazy-marszowice-i-rustykalne-wesele-pod-krakowem"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ??LUBNY O??WI??CIM
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Dzie?? dobry. Poszukujemy fotografa, b??d?? fotograf??w oraz kamerzysty na wesele pod w O??wi??cimiu. Interesuj?? nas osoby tylko z wolnym terminem. Pozdrawiamy. Ka??dego dnia kilka os??b poszukuje fotografa na sw??j ??lub. Poniewa?? znalaz??e?? si?? na mojej stronie internetowej domy??lam si??, ??e dzisiaj jeste?? w??r??d nich.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Obecnie pary m??ode coraz cz????ciej wybieraj?? swoich fotograf??w na ??lub kieruj??c si?? stylem, a nie miastem zamieszkania. Dlatego te?? i ja cz??sto je??d???? jako fotograf ??lubny do O??wi??cimia czy w ka??de inne miejsce, gdzie mnie m??odzi zaprosz??. Je??eli szukasz <strong>najlepszego fotografa ??lubnego w O??wi??cimiu</strong> to doskonale trafi??e??. Nazywam si?? Tomasz Prokop, mieszkam w Krakowie i zapraszam do zapoznania si?? z moimi zdj??ciami.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ??LUBNY O??WI??CIM - EMOCJONALNE PODEJ??CIE DO LUDZI i ICH HISTORII
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Szybkie i niepozowane zdj??cia bez przyci??gania uwagi swoim aparatem to jedyny spos??b, aby mie?? pewno????, ??e fotografowana przeze mnie osoba nie pozuje. Ca??a seria takich zdj????, aby mie?? kilka uj???? do wyboru. Jestem jak Ninja, pozostaj??c poza zasi??giem wzroku, chowaj??c si?? za innymi lub u??ywaj??c zoomu, uparcie robi?? zdj??cia z oddali. Zdj??cia takie s?? zdj??ciami, kt??re lubicie najbardziej.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA O??WI??CIM - MOMENT DECYDUJ??CY
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Niekiedy na sfotografowanie danej sytuacji mam zaledwie kilka sekund. Chc??c uchwyci?? moment decyduj??cy, w kt??rym Pan M??ody po raz pierwszy widzi swoj?? przysz???? ??on?? lub chwil??, kiedy u??miechni??ciu wychodzicie z ko??cio??a po cerememoni, fotograf musi zachowa?? czujno????. Wykona?? kilkana??cie uj???? by mie?? pewno????, ??e moment zosta?? zapisany. Dlatego podczas reporta??u ??lubnego typowo wykonuje blisko cztery tysi??ce zdj????.
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Ich skrupulatny wyb??r zwany selekcj?? to proces d??ugi, ale ka??de zdj??cie, kt??re ma w sobie dawk?? emocji wynagradza godziny sp??dzone przed monitorem komputera.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ??LUBNY W O??WI??CIMIU - REJESTRACJA WSPOMNIE??
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
       Nie przepadam za ustawianymi zdj??ciami, cho?? je??li masz ochot?? na grupowe to oczywi??cie w takie zdj??cia te?? umiem. S?? one integraln?? cz????ci?? ka??dego ??lubu. Nic tak dobrze nie wygl??da na zdj??ciach jak naturalno???? i spontaniczno???? dlatego bardziej stawiamy na dobr?? relacj?? z Tob?? ni?? ustawianie Ciebie do zdj????.

        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA O??WI??CIM - PAMI??TKA NA LATA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Fotografia ??lubna to niezwykle wa??na pami??tka, kt??ra b??dzie przypomina?? o pi??knym dniu za??lubin i wszystkich emocjach z nim zwi??zanych. Dlatego tak wa??ne jest, aby wybra?? dobrego fotografa, kt??ry potrafi uchwyci?? wa??ne chwile i emocje oraz stworzy?? pi??kne i unikalne zdj??cia, kt??re b??d?? cieszy?? oko i wzrusza?? na d??ugie lata.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Je??li szukacie profesjonalnego fotografa ??lubnego w O??wi??cimiu to doskonale, ??e odwiedzili??cie moj?? stron?? internetow??. Poznawanie ludzi, rozkminianie z nimi przer????nych temat??w, odwiedzanie nowych miejsc sta??o si?? moim na??ogiem. Trudno wyobrazi?? sobie sobot??, kt??ra mog??aby wygl??da?? inaczej.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA O??WI??CIM - FIRST LOOK
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Pewnie s??yszeli??cie o first look. Reakcja Pana M??odego na widok ukochanej jest zawsze wyj??tkowo pi??kna i niepowtarzalna. Do ko??ca te?? nie wiadomo, czy pojawi?? si?? w??wczas ??zy wzruszenia czy mo??e nast??pi wybuch rado??ci. Wszyscy go??cie ??yj?? t?? chwil?? dlatego zawsze jestem obok, aby tak jedyna w swoim rodzaju chwila zosta??a uwieczniona na fotografiach.
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