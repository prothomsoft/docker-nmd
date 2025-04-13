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

const dworzyszcze_wola_reportaz_slubny_pod_krakowem = process.env.staticS3ImagesPath + "portfolio/small/dworzyszcze_wola_reportaz_slubny_pod_krakowem.webp";
const oberwanka_lostowka_portfolio = process.env.staticS3ImagesPath + "portfolio/small/oberwanka_lostowka_portfolio.webp";
const fotograf_na_wesele_rabka_zdroj_portfolio = process.env.staticS3ImagesPath + "portfolio/small/fotograf_na_wesele_rabka_zdroj_portfolio.webp";

const fotograf_slubny_portfolio_2023_410 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_410.webp";
const fotograf_slubny_portfolio_2023_411 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_411.webp";
const fotograf_slubny_portfolio_2023_412 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_412.webp";
const fotograf_slubny_portfolio_2023_413 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_413.webp";
const fotograf_slubny_portfolio_2023_414 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_414.webp";
const fotograf_slubny_portfolio_2023_415 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_415.webp";
const fotograf_slubny_portfolio_2023_416 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_416.webp";
const fotograf_slubny_portfolio_2023_418 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_418.webp";
const fotograf_slubny_portfolio_2023_421 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_421.webp";
const fotograf_slubny_portfolio_2023_422 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_422.webp";
const fotograf_slubny_portfolio_2023_423 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_423.webp";
const fotograf_slubny_portfolio_2023_425 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_425.webp";
const fotograf_slubny_portfolio_2023_426 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_426.webp";
const fotograf_slubny_portfolio_2023_427 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_427.webp";
const fotograf_slubny_portfolio_2023_428 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_428.webp";
const fotograf_slubny_portfolio_2023_431 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_431.webp";
const fotograf_slubny_portfolio_2023_432 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_432.webp";
const fotograf_slubny_portfolio_2023_433 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_433.webp";
const fotograf_slubny_portfolio_2023_435 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_435.webp";
const fotograf_slubny_portfolio_2023_437 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_437.webp";
const fotograf_slubny_portfolio_2023_438 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_438.webp";
const fotograf_slubny_portfolio_2023_439 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_439.webp";
const fotograf_slubny_portfolio_2023_501 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_501.webp";
const fotograf_slubny_portfolio_2023_502 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_502.webp";
const fotograf_slubny_portfolio_2023_504 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_504.webp";
const fotograf_slubny_portfolio_2023_505 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_505.webp";
const fotograf_slubny_portfolio_2023_696 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_696.webp";
const fotograf_slubny_portfolio_2023_699 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_699.webp";
const fotograf_slubny_portfolio_2023_701 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_701.webp";
const fotograf_slubny_portfolio_2023_703 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_703.webp";

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "dom-weselny-biala-perla-radziemice-reportaz-slubny.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_411
    },
    {
        image: fotograf_slubny_portfolio_2023_410
    },
    {
        image: fotograf_slubny_portfolio_2023_439
    },
    {
        image: fotograf_slubny_portfolio_2023_412
    },
    {
        image: fotograf_slubny_portfolio_2023_413
    },
    {
        image: fotograf_slubny_portfolio_2023_414
    },
    {
        image: fotograf_slubny_portfolio_2023_415
    },
    {
        image: fotograf_slubny_portfolio_2023_416
    },
    {
        image: fotograf_slubny_portfolio_2023_696
    },
    {
        image: fotograf_slubny_portfolio_2023_418
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_502
    },
    {
      image: fotograf_slubny_portfolio_2023_501
    },
    {
      image: fotograf_slubny_portfolio_2023_421
    },
    {
      image: fotograf_slubny_portfolio_2023_422
    },
    {
      image: fotograf_slubny_portfolio_2023_423
    },
    {
      image: fotograf_slubny_portfolio_2023_701
    },
    {
      image: fotograf_slubny_portfolio_2023_426
    },
    {
      image: fotograf_slubny_portfolio_2023_425
    },
    {
      image: fotograf_slubny_portfolio_2023_427
    },
    {
      image: fotograf_slubny_portfolio_2023_428
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_504
    },
    {
      image: fotograf_slubny_portfolio_2023_505
    },
    {
      image: fotograf_slubny_portfolio_2023_431
    },
    {
      image: fotograf_slubny_portfolio_2023_432
    },
    {
      image: fotograf_slubny_portfolio_2023_433
    },
    {
      image: fotograf_slubny_portfolio_2023_699
    },
    {
      image: fotograf_slubny_portfolio_2023_435
    },
    {
      image: fotograf_slubny_portfolio_2023_437
    },
    {
      image: fotograf_slubny_portfolio_2023_703
    },
    {
      image: fotograf_slubny_portfolio_2023_438
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Ile kosztuje reportaż ze ślubu i wesela w Miechowie?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Czy fotografowie ślubni ustalają uniwersalny cennik swoich usług nie biorąc pod uwagę ich zakresu. Niestety nie, ponieważ każda uroczystość ma inny charakter i indywidualnie wpływa na ostateczną cenę. W wielu przypadkach koszt fotografa na wesele zależy od wielkości imprezy, czy dodatkowych usług, na jakie zdecydowali się nowożeńcy."
        }
    },{
        "@type": "Question",
        "name": "Jakie są widełki cenowe dla fotografii ślubnej w Miechowie?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Niskie ceny to takie z przedziału do trzech tysiący złotych za reportaż, średni pułap cen wpada pomiędzy trzy, a cztery tysiące złotych za reportaż. Wysoki pułap cen definiuje zakres powyżej czterech tysięcy złotych za reportaż."
        }
    },{
      "@type": "Question",
      "name": "Ile czasu pracuje na naszym ślubie/weselu fotograf ślubny w Miechowie?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sobota to dzień ślubu, więc fotografowanie zaczynamy wcześnie rano najczęściej od przygotować Panny Młodej i jej makijażu. Szesnaście godzin to typowa długość pracy fotografa w dniu ślubu od momentu przygotowań, do momemntu sfotografowania wszystkich zabaw oczepinowych."
      }
    },{
      "@type": "Question",
      "name": "Czy otrzymamy tylko zdjęcia w wersji cyfrowej?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oczywiście, że nie. Najlepsze kadry z Waszego dnia otrzymacie również w postaci profesjonalnych wydruków. Resztę fotografii dostaniecie na pendrive w wersji elektronicznej, a także w formie internetowej galerii, którą będziecie się mogli podzielić ze znajomymi lub rodziną."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ślubny Miechów"
      description="Fotograf ślubny Miechów"
      keywords="fotograf ślubny Miechów"
      url="https://99foto.pl/fotograf-slubny-miechow/"
      leadNames="ŻANETA i SEBASTIAN"
      leadTitle="DOM WESELNY BIAŁA PERŁA RADZIEMICE, REPORTAŻ ŚLUBNY"
      leadUrl="/dom-weselny-biala-perla-radziemice-reportaz-slubny"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY MIECHÓW
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Fotografia ślubna to moja pasja i sposób na życie. Chcę aby każdy mógł poczuć się pięknie na moich zdjęciach. Moje zdjęcia są naturalne i pełne emocji dlatego, że od pierwszych minut naszej współpracy staram się mieć bardzo dobry kontakt z Wami, czyli moimi klientami. Zupełnie inaczej jest kiedy fotografuje Was ktoś znajomy, a zupełnie innaczej będą wyglądać zdjęcia zrobione przez obcą osobę. Dlatego tak ważne jest rozpoczęcie sesji zdjęciowej już od przygotowań, a nawet od sesji narzeczeńskiej. 
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <ImageCarousel images={imagesCarousel1} autoplaySpeed={3000} />
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Mamy wtedy czas żeby się dobrze poznać, a to nieocenione doświadczenie które wpływa niesamowicie na jakość zdjęć podczas pracy reporterskiej. Poszukujesz <strong>fotografa ślubnego w Miechowie</strong> jesteś w super doskonałym miejscu. Nazywam się Tomek Prokop, mieszkam w Krakowie i zapraszam na moje zdjęcia.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ŚLUBNY MIECHÓW - AMATOR CZY PROFESJONALISTA?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Fotograf amator to osoba, która robi zdjęcia dla przyjemności, a nie zawodowo. Fotografowanie jest dla niej hobby, a nie sposobem na zarabianie pieniędzy. Amatorzy często robią zdjęcia swoim własnym sprzętem, takim jak aparaty cyfrowe lub smartfony, i często nie posiadają specjalistycznego wykształcenia lub doświadczenia w fotografii. Fotograf profesjonalista to osoba, która zarabia na robieniu zdjęć. Profesjonalni fotografowie często posiadają specjalistyczne wykształcenie lub doświadczenie w dziedzinie fotografii, a także specjalistyczny sprzęt i umiejętności techniczne. Oni zazwyczaj oferują swoje usługi w różnych dziedzinach takich jak właśnie fotografia ślubna.
        </Typography>


        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA MIECHÓW - GDZIE NA PLENER
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Miechów to miasto położone w województwie małopolskim, które jest odpowiednie do Waszej sesji plenerowej. Wśród propozycji miejsc na zdjęcia ślubne na pewno znajdą się Zamek w Miechowie, Kościół św. Andrzeja Boboli, park im. Jana Pawła II, Miechowska Starówka. Ciekawe kadry można też znaleźć fotografując w Muzeum Regionalnym w Miechowie oraz w Rezerwacie przyrody „Miechowski Las”. Wybierając na sesję plenerową scenerię w leśnej zieleni, czy architekturę miejską w Miechowie z pewnością znajdziecie coś dla siebie.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <ImageCarousel images={imagesCarousel2} autoplaySpeed={2000} />
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Sesja plenerowa to zwykle trzy godziny fotografowania w różnych miejscach. Poszukujemy fajnych kadrów, Waszych uśmiechów i staramy się odpowiednio dobrać pogodę i porę dnia. Wynikiem są zawsze bajeczne zdjęcia. Umówmy się na plener już dzisiaj. Zapraszam serdeczenie.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF MIECHÓW - PASJA I DOŚWIADCZENIE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Jedno z pierwszych, a zarazem najważniejsze pytań to czy Fotograf będzie osobiście wykonywał zdjęcie na Waszym ślubie, czy będzie to być może podwykonawca zatrudniony w innej firmie. Dobra rada to upewnić się, że na dwieście procent będzie to osoba z którą podpisaliście umowę.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA MIECHÓW - PAMIĄTKA NA LATA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Fotografia ślubna to niezwykle ważna pamiątka, która będzie przypominać o wszystkich emocjach związanych z dniem ślubu. Dlatego tak ważne jest, aby wybrać dobrego fotografa, który stanie na wysokości zadania i uchwyci ważne chwile i emocje oraz stworzy piękne i unikalne zdjęcia ślubne.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <ImageCarousel images={imagesCarousel3} autoplaySpeed={4000} />
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Jeśli szukają Państwo profesjonalnego fotografa ślubnego w Miechowie to możecie już teraz wygodnie usiąść w fotelu, oglądnąć zdjęcia na stronie internetowej, wykręcić mój numer i umówić się na niezobowiązujące spotkanie. Porozmawiamy sobie przez godzinkę, odpowiem na wszystkie Wasze fotograficzne pytania, pokażę przykładowe książki, będzie miło. 
         </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA MIECHÓW - BEZPIECZEŃSTWO ZDJĘĆ
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Pamiętajcie że dobry fotograf zawsze ma dodatkowy aparat, kilka obiektywów i kilka kart pamięci. W obecnych czasach standardem jest zapis zdjęć na dwóch kartach pamięci i natychmiastowe zgranie zawartości kart pamieci na dyski twarde. Bezpieczeństwo Waszych zdjęć ślubnych jest mega istotne, ponieważ ten dzień nie zdarzy się ponownie. Wybierając fotografa, bądźcie czujni.
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
              imgsrc={dworzyszcze_wola_reportaz_slubny_pod_krakowem}
              imgalt="wesele w stylu boho i rustykalnym"
              linkhref="wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"
              title="WESELE STYL RUSTYKALNY"
              names="SYLWIA i MICHAŁ"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={fotograf_na_wesele_rabka_zdroj_portfolio}
              imgalt="fotograf na wesele Rabka Zdrój"
              linkhref="fotograf-na-wesele-rabka-zdroj-kosciol-sw-marii-magdaleny"
              title="FOTOGRAF NA WESELE RABKA"
              names="KAMILA i ADRIAN"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={oberwanka_lostowka_portfolio}
              imgalt="bazylika bożego ciała kraków fotoreportaż ślubny"
              linkhref="dom-weselny-oberwanka-lostowka"
              title="ŚLUB W BESKIDACH OBERWANKA"
              names="ANGELIKA i MATEUSZ"
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