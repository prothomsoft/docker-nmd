import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ImageCardSmall from "../components/imageCardSmall";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageCarousel from "../components/imageCarousel";
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";

const wesele_w_beskidach = process.env.staticS3ImagesPath + "portfolio/small/wesele_w_beskidach.webp";
const plener_slubny_na_jurze = process.env.staticS3ImagesPath + "portfolio/small/plener_slubny_na_jurze.webp";
const plener_slubny_palac_goetzow_brzesko = process.env.staticS3ImagesPath + "portfolio/small/plener_slubny_palac_goetzow_brzesko.webp";

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
        "name": "Jakie masz doświadczenie w fotografii ślubnej?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fotografia ślubna to branża w której zawodowo działam od 2012 roku. W tym czasie wykonałem ponad 300 reportaży ślubnych więc myślę, że nie ma już warunków, które potrafiłyby mnie zaskoczyć i przerosnąć - tutaj możecie mieć na prawdę spokojną głowę."
        }
    },{
        "@type": "Question",
        "name": "Ile czasu powinniśmy przeznaczyć na zdjęcia grupowe?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "W zależności od tego jak duże będą grupy i jak duże jest Wasze wesele oraz od tego czy chcecie zdjęcia tylko z najbliższymi czy wszystkimi gośćmi od piętnastu minut do godziny czasu."
        }
    },{
      "@type": "Question",
      "name": "W kościele nie wolno używać lamp błyskowych - czy to będzie dla Ciebie problem?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nie będzie to żaden problem, nigdy jeszcze nie używałem lampy błyskowej w kościele. Sprzęt, na którym pracuje pozwala fotografować w na prawdę słabych warunkach oświetleniowych."
      }
    },{
      "@type": "Question",
      "name": "Czy można u Ciebie zamówić samą sesję zdjęciową?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, oczywiście. Możecie zdecydować się tylko na sesję narzeczeńśką lub okolicznością. Sesja to zawsze trzy lub cztery godziny fotografowania w dwóch lub trzech wybranych miejscach, bardzo często jest to spacer. Wynikiem sesji jest zawsze minimum sto zdjęć poddanych starannej obróbce graficznej."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ślubny Oświęcim"
      description="Fotograf ślubny Oświęcim, ceny fotografii ślubnej w Oświęcimiu"
      keywords="fotograf ślubny Oświęcim, fotograf na wesele w Oświęcimiu"
      url="https://99foto.pl/fotograf-slubny-oswiecim/"
      leadNames="PAULA i WOJTEK"
      leadTitle="FOLWARK WIĄZY MARSZOWICE i RUSTYKALNE WESELE POD KRAKOWEM"
      leadUrl="/folwark-wiazy-marszowice-i-rustykalne-wesele-pod-krakowem"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY OŚWIĘCIM
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Dzień dobry. Poszukujemy fotografa, bądź fotografów oraz kamerzysty na wesele pod w Oświęcimiu. Interesują nas osoby tylko z wolnym terminem. Pozdrawiamy. Każdego dnia kilka osób poszukuje fotografa na swój ślub. Ponieważ znalazłeś się na mojej stronie internetowej domyślam się, że dzisiaj jesteś wśród nich.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <ImageCarousel images={imagesCarousel1} autoplaySpeed={3000} />
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Obecnie pary młode coraz częściej wybierają swoich fotografów na ślub kierując się stylem, a nie miastem zamieszkania. Dlatego też i ja często jeżdżę jako fotograf ślubny do Oświęcimia czy w każde inne miejsce, gdzie mnie młodzi zaproszą. Jeżeli szukasz <strong>najlepszego fotografa ślubnego w Oświęcimiu</strong> to doskonale trafiłeś. Nazywam się Tomasz Prokop, mieszkam w Krakowie i zapraszam do zapoznania się z moimi zdjęciami.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ŚLUBNY OŚWIĘCIM - EMOCJONALNE PODEJŚCIE DO LUDZI i ICH HISTORII
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Szybkie i niepozowane zdjęcia bez przyciągania uwagi swoim aparatem to jedyny sposób, aby mieć pewność, że fotografowana przeze mnie osoba nie pozuje. Cała seria takich zdjęć, aby mieć kilka ujęć do wyboru. Jestem jak Ninja, pozostając poza zasięgiem wzroku, chowając się za innymi lub używając zoomu, uparcie robię zdjęcia z oddali. Zdjęcia takie są zdjęciami, które lubicie najbardziej.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA OŚWIĘCIM - MOMENT DECYDUJĄCY
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Niekiedy na sfotografowanie danej sytuacji mam zaledwie kilka sekund. Chcąc uchwycić moment decydujący, w którym Pan Młody po raz pierwszy widzi swoją przyszłą żonę lub chwilę, kiedy uśmiechnięciu wychodzicie z kościoła po cerememoni, fotograf musi zachować czujność. Wykonać kilkanaście ujęć by mieć pewność, że moment został zapisany. Dlatego podczas reportażu ślubnego typowo wykonuje blisko cztery tysiące zdjęć.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <ImageCarousel images={imagesCarousel2} autoplaySpeed={2000} />
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Ich skrupulatny wybór zwany selekcją to proces długi, ale każde zdjęcie, które ma w sobie dawkę emocji wynagradza godziny spędzone przed monitorem komputera.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ŚLUBNY W OŚWIĘCIMIU - REJESTRACJA WSPOMNIEŃ
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
       Nie przepadam za ustawianymi zdjęciami, choć jeśli masz ochotę na grupowe to oczywiście w takie zdjęcia też umiem. Są one integralną częścią każdego ślubu. Nic tak dobrze nie wygląda na zdjęciach jak naturalność i spontaniczność dlatego bardziej stawiamy na dobrą relację z Tobą niż ustawianie Ciebie do zdjęć.

        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA OŚWIĘCIM - PAMIĄTKA NA LATA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Fotografia ślubna to niezwykle ważna pamiątka, która będzie przypominać o pięknym dniu zaślubin i wszystkich emocjach z nim związanych. Dlatego tak ważne jest, aby wybrać dobrego fotografa, który potrafi uchwycić ważne chwile i emocje oraz stworzyć piękne i unikalne zdjęcia, które będą cieszyć oko i wzruszać na długie lata.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <ImageCarousel images={imagesCarousel3} autoplaySpeed={4000} />
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Jeśli szukacie profesjonalnego fotografa ślubnego w Oświęcimiu to doskonale, że odwiedziliście moją stronę internetową. Poznawanie ludzi, rozkminianie z nimi przeróżnych tematów, odwiedzanie nowych miejsc stało się moim nałogiem. Trudno wyobrazić sobie sobotę, która mogłaby wyglądać inaczej.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA OŚWIĘCIM - FIRST LOOK
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Pewnie słyszeliście o first look. Reakcja Pana Młodego na widok ukochanej jest zawsze wyjątkowo piękna i niepowtarzalna. Do końca też nie wiadomo, czy pojawią się wówczas łzy wzruszenia czy może nastąpi wybuch radości. Wszyscy goście żyją tą chwilą dlatego zawsze jestem obok, aby tak jedyna w swoim rodzaju chwila została uwieczniona na fotografiach.
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
             imgsrc={plener_slubny_palac_goetzow_brzesko}
             imgalt="plener ślubny pałac goetzów brzesko"
             linkhref="sesja-slubna-jesienia-palac-goetzow-okocimskich"
             title="PLENER ŚLUBNY PAŁAC GOETZÓW"
             names="IZABELA i ARKADIUSZ"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={plener_slubny_na_jurze}
              imgalt="plener ślubny na jurze"
              linkhref="plener-slubny-zamek-pieskowa-skala"
              title="PLENER ŚLUBNY NA JURZE"
              names="MARTYNA i MICHAŁ"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={wesele_w_beskidach}
              imgalt="wesele w besikdach"
              linkhref="hotel-zywiecki-sala-przylekowka-wesele-w-beskidach"
              title="WESELE W BESKIDACH ŻYWIEC"
              names="NICOLA i RAFAŁ"
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