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

const dworek_fantazja_skomielna_biala_fotograf = process.env.staticS3ImagesPath + "portfolio/small/dworek_fantazja_skomielna_biala_fotograf.webp";
const zajazd_mogielica_portfolio = process.env.staticS3ImagesPath + "portfolio/small/zajazd_mogielica_portfolio.webp";
const klaudia_przemek_start = process.env.staticS3ImagesPath + "portfolio/small/klaudia_przemek_start.webp";

const fotograf_slubny_portfolio_2023_506 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_506.webp";
const fotograf_slubny_portfolio_2023_508 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_508.webp";
const fotograf_slubny_portfolio_2023_509 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_509.webp";
const fotograf_slubny_portfolio_2023_510 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_510.webp";
const fotograf_slubny_portfolio_2023_512 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_512.webp";
const fotograf_slubny_portfolio_2023_514 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_514.webp";
const fotograf_slubny_portfolio_2023_515 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_515.webp";
const fotograf_slubny_portfolio_2023_516 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_516.webp";
const fotograf_slubny_portfolio_2023_517 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_517.webp";
const fotograf_slubny_portfolio_2023_518 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_518.webp";
const fotograf_slubny_portfolio_2023_519 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_519.webp";
const fotograf_slubny_portfolio_2023_522 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_522.webp";
const fotograf_slubny_portfolio_2023_523 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_523.webp";
const fotograf_slubny_portfolio_2023_524 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_524.webp";
const fotograf_slubny_portfolio_2023_525 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_525.webp";
const fotograf_slubny_portfolio_2023_526 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_526.webp";
const fotograf_slubny_portfolio_2023_527 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_527.webp";
const fotograf_slubny_portfolio_2023_528 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_528.webp";
const fotograf_slubny_portfolio_2023_529 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_529.webp";
const fotograf_slubny_portfolio_2023_530 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_530.webp";
const fotograf_slubny_portfolio_2023_532 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_532.webp";
const fotograf_slubny_portfolio_2023_533 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_533.webp";
const fotograf_slubny_portfolio_2023_534 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_534.webp";
const fotograf_slubny_portfolio_2023_536 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_536.webp";
const fotograf_slubny_portfolio_2023_686 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_686.webp";
const fotograf_slubny_portfolio_2023_688 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_688.webp";
const fotograf_slubny_portfolio_2023_689 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_689.webp";
const fotograf_slubny_portfolio_2023_690 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_690.webp";
const fotograf_slubny_portfolio_2023_691 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_691.webp";
const fotograf_slubny_portfolio_2023_692 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_692.webp";


const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "bazylika-bozego-ciala-krakow-fotoreportaz-slubny.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_506
    },
    {
        image: fotograf_slubny_portfolio_2023_686
    },
    {
        image: fotograf_slubny_portfolio_2023_508
    },
    {
        image: fotograf_slubny_portfolio_2023_509
    },
    {
        image: fotograf_slubny_portfolio_2023_510
    },
    {
        image:fotograf_slubny_portfolio_2023_688
    },
    {
        image: fotograf_slubny_portfolio_2023_512
    },
    {
        image: fotograf_slubny_portfolio_2023_536
    },
    {
        image: fotograf_slubny_portfolio_2023_514
    },
    {
        image: fotograf_slubny_portfolio_2023_515
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_516
    },
    {
      image: fotograf_slubny_portfolio_2023_517
    },
    {
      image: fotograf_slubny_portfolio_2023_518
    },
    {
      image: fotograf_slubny_portfolio_2023_519
    },
    {
      image: fotograf_slubny_portfolio_2023_689
    },
    {
      image: fotograf_slubny_portfolio_2023_690
    },
    {
      image: fotograf_slubny_portfolio_2023_522
    },
    {
      image: fotograf_slubny_portfolio_2023_523
    },
    {
      image: fotograf_slubny_portfolio_2023_524
    },
    {
      image: fotograf_slubny_portfolio_2023_525
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_526
    },
    {
      image: fotograf_slubny_portfolio_2023_527
    },
    {
      image: fotograf_slubny_portfolio_2023_528
    },
    {
      image: fotograf_slubny_portfolio_2023_529
    },
    {
      image: fotograf_slubny_portfolio_2023_530
    },
    {
      image: fotograf_slubny_portfolio_2023_532
    },
    {
      image: fotograf_slubny_portfolio_2023_691
    },
    {
      image: fotograf_slubny_portfolio_2023_533
    },
    {
      image: fotograf_slubny_portfolio_2023_534
    },
    {
      image: fotograf_slubny_portfolio_2023_692
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Czy masz plan awaryjny na wypadek choroby?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jeśli chcecie być spokojni to koniecznie zapytajcie Waszego fotografa ślubnego czy ma jakiś plan awaryjny na wypadek gdyby nie mógł stawić się na waszej uroczystości. W dobie social mediów i networkingu załatwienia zastępstwa dla fotografa nie powinno stanowić żadnego problemu."
        }
    },{
        "@type": "Question",
        "name": "Czy pijesz alkohol fotografująć na weselu?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Profesjonalny fotograf nie powinien spożywać alkoholu na weselu. Każdy ma indywidualne podejście do tego tematu ja osobiście wolałbym żeby wykonawca, któremu powierzono najważniejszy dzień w życiu był trzeźwy."
        }
    },{
      "@type": "Question",
      "name": "Obróbka zdjęć i retusz, czym się różnią?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dla wielu fotografów obróbka zdjęć ślubnych to korekcja kolorystyczna. Natomiast w rozumieniu klientów często jest to zaawansowany retusz polegający na usuwaniu zbędnych kilogramów. Warto by było zapytać fotografa co zawiera obróbka fotograficzna i czy do niej zalicza się retusz fotografii."
      }
    },{
      "@type": "Question",
      "name": "W jakim stroju fotografujesz śluby?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pytanie błahe ale warto zapytać fotografa w jakim srtroju fotografuje Wasz ślub. Fotografując śluby często widzę jak ubrani są kamerzyści czasem zdarzało się, że ktoś przychodzi w wymiętym białym podkoszulku z logo rockowego zespołu. Zwróćcie uwagę, żeby strój fotografa był dopasowany do rangi waszej uroczystości."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ślubny Kielce"
      description="Fotograf ślubny Kielce, wybór miejsca na ślub, sala bankietowa, dom weselny"
      keywords="fotograf ślubny Kielce, wybór miejsca na ślub"
      url="https://99foto.pl/fotograf-slubny-kielce/"
      leadNames="ANNA i PIOTR"
      leadTitle="BAZYLIKA BOŻEGO CIAŁA KRAKÓW, FOTOREPORTAŻ ŚLUBNY"
      leadUrl="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY KIELCE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Witaj na mojej stronie internetowej. Pewnie nie lubisz tracisz czasu, więc jeżeli znalazłeś się w tym miejscu to myślę, że mogę wiedzieć czego poszukujesz. Jeżeli szukasz <strong>najlepszego fotografa ślubnego w Kielcach</strong> to jest do bardzo dobry adres. W ubiegłym roku 2k22 wykonałem blisko czterdzieści reportaży ślubnych. Wszystkie pary młode otrzymały już zdjęcia w strefie klienta i na pendrivie, otrzymały też swoje fotoksiążki ślubne. Mam nadzieję, że i Ty dołączysz do grona klientów zadowolonych z moich usług. Zapraszam do zapoznania się ze zdjęciami.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <ImageCarousel images={imagesCarousel1} autoplaySpeed={3000} />
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Oferuje swoje doświadczenie i profesjonalizm, elastyczność i otwartość na sugestie. Postaram się spełnić wszystkie Wasze fotograficzne oczekiwania. Nazywam się Tomasz Prokop i zapraszam do mojego fotograficznego świata.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ŚLUBNY KIELCE - JAKI POWINIEN BYĆ?
          </Typography>
        </Box>

        

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
          Fotograf ślubny powinien być profesjonalistą, który potrafi uchwycić ważne chwile i emocje związane z dniem ślubu. Powinien mieć doświadczenie w pracy z osobami fotografowanymi i znać techniki fotografowania, pozwalające uzyskać najlepsze rezultaty. Fotograf ślubny powinien też być elastyczny i potrafić dostosować się do potrzeb i oczekiwań klientów. Ważne, aby fotograf ślubny był także osobą, z którą młoda para czuje się swobodnie i komfortowo, ponieważ w ten sposób zdjęcia będą bardziej naturalne i autentyczne.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA KIELCE - POLECANE MIEJSCA
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Kielce to miasto w środkowej Polsce, które oferuje wiele miejsc idealnych do fotografowania. Oto kilka propozycji: Park im. gen. Józefa Bema, Park Miejski im. Jana Pawła II, Zamek w Kielcach, Katedra św. Piotra i Pawła, Bulwary nad Silnicą. W każdym z tych miejsc możemy wybrać się na krótki spacer, porozmawiać, poszukać promieni słońcai  zrobić doskonałe zdjęcia.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <ImageCarousel images={imagesCarousel2} autoplaySpeed={2000} />
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Jest to tylko kilka przykładów, w Kielcach jest wiele innych pięknych miejsc, które mogą być idealne na plener ślubny. Zalecam zapoznanie się z mapą miasta i odkrycie własnych ulubionych miejsc.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          KIELCE - JAK ZNALEŹĆ FOTOGRAFA ŚLUBNEGO
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Każdy fotograf powinien posiadacie zestaw cech które sprawią, że jest tak dobry, żeby klienci chcieli do niego wracać. Fotografia ślubna to dziedzina która wymaga największej wszechstronności zarówno w ujęciu technicznym czyli znajomości technik fotograficznych ale także w podejściu do klientów, [par młodych, które powierzają nam najważniejsze chwile swojego życia.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA KIELCE - ZDJĘCIA NA ZAWSZE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Pamiętajmy, że to co powoduje, że zdjęcia zdjęcia fotografów ślubnych się podobają i co za tym idzie sprzedają to są sesje plenerowe, piękne widoki, cudne światło, idealnie dobrana kompozycja. Elementy te można najłatwiej kontrolować robiąc sesje, które się samodzielnie zaplanowało, wybrało super lokalizację i trafiło z porą dnia.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <ImageCarousel images={imagesCarousel3} autoplaySpeed={4000} />
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Jeśli szukają Państwo profesjonalnego fotografa ślubnego w Kielcach, warto zacząć od zapytania znajomych i rodziny oraz przejrzenia portfolio różnych fotografów, porównania ich stylów i cen. Ważne, aby wybrać fotografa, który spełnia wszystkie oczekiwania i jest w stanie stworzyć piękną pamiątkę na lata.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA KIELCE - ZEZWOLENIE NA FOTOGRAFOWANIE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Zapytajcie fotografa, czy posiada zezwolenie kurii na fotografowanie w miejscach sakralnych. Fakt, że fotograf nie będzie miał tego dokumentu może skutkować brakiem zezwolenia na fotografowanie Waszego ślubu. Przezorny jest zawsze ubezpieczony i nie dajmy w tak ważnym temacie jaki jest dzień ślubu wygrać przypadkowi.
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
              imgsrc={zajazd_mogielica_portfolio}
              imgalt="wesele rustykalne, polskie tradycje weselne"
              linkhref="dom-weselny-mogielica-jurkow-rustykalne-wesele"
              title="WESELE RUSTYKALNE MSZANA"
              names="NATALIA i KRZYSZTOF"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={dworek_fantazja_skomielna_biala_fotograf}
              imgalt="ślub w stylu glamour"
              linkhref="dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"
              title="ŚLUB W STYLU GLAMOUR"
              names="PATRYCJA i KRZYSZTOF"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={klaudia_przemek_start}
              imgalt="sala weselna w myślenicach, dom weselny bystra podhalańska"
              linkhref="sala-weselna-karolinka-bystra-podhalanska"
              title="WESELE STRAŻACKIE MYŚLENICE"
              names="KLAUDIA i PRZEMYSŁAW"
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