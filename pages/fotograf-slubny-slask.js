import LayoutSitePage from "../components/layoutSitePage";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ImageCardSmall from "../components/imageCardSmall";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ImageCarousel from "../components/imageCarousel";
import FaqAccordion from "../components/faqAccordion";

const plener_slubny_na_jurze = process.env.staticS3ImagesPath + "portfolio/small/plener_slubny_na_jurze.webp";
const wesele_rustykalne = process.env.staticS3ImagesPath + "portfolio/small/wesele_rustykalne.webp";
const plener_slubny_palac_goetzow_brzesko = process.env.staticS3ImagesPath + "portfolio/small/plener_slubny_palac_goetzow_brzesko.webp";

const fotograf_slubny_portfolio_2023_002 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_002.webp";
const fotograf_slubny_portfolio_2023_003 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_003.webp";
const fotograf_slubny_portfolio_2023_004 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_004.webp";
const fotograf_slubny_portfolio_2023_005 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_005.webp";
const fotograf_slubny_portfolio_2023_011 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_011.webp";
const fotograf_slubny_portfolio_2023_012 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_012.webp";
const fotograf_slubny_portfolio_2023_013 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_013.webp";
const fotograf_slubny_portfolio_2023_014 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_014.webp";
const fotograf_slubny_portfolio_2023_015 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_015.webp";
const fotograf_slubny_portfolio_2023_016 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_016.webp";
const fotograf_slubny_portfolio_2023_018 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_018.webp";
const fotograf_slubny_portfolio_2023_019 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_019.webp";
const fotograf_slubny_portfolio_2023_020 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_020.webp";
const fotograf_slubny_portfolio_2023_021 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_021.webp";
const fotograf_slubny_portfolio_2023_024 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_024.webp";
const fotograf_slubny_portfolio_2023_026 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_026.webp";
const fotograf_slubny_portfolio_2023_027 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_027.webp";
const fotograf_slubny_portfolio_2023_028 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_028.webp";
const fotograf_slubny_portfolio_2023_029 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_029.webp";
const fotograf_slubny_portfolio_2023_031 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_031.webp";
const fotograf_slubny_portfolio_2023_033 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_033.webp";
const fotograf_slubny_portfolio_2023_034 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_034.webp";
const fotograf_slubny_portfolio_2023_035 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_035.webp";
const fotograf_slubny_portfolio_2023_036 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_036.webp";
const fotograf_slubny_portfolio_2023_037 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_037.webp";
const fotograf_slubny_portfolio_2023_038 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_038.webp";
const fotograf_slubny_portfolio_2023_039 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_039.webp";
const fotograf_slubny_portfolio_2023_042 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_042.webp";
const fotograf_slubny_portfolio_2023_043 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_043.webp";

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "dom-weselny-biala-perla-radziemice-reportaz-slubny.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_003
    },
    {
        image: fotograf_slubny_portfolio_2023_002
    },
    {
        image: fotograf_slubny_portfolio_2023_011
    },
    {
        image: fotograf_slubny_portfolio_2023_004
    },
    {
        image: fotograf_slubny_portfolio_2023_005
    },
    {
        image: fotograf_slubny_portfolio_2023_014
    },
    {
        image: fotograf_slubny_portfolio_2023_026
    },
    {
        image: fotograf_slubny_portfolio_2023_028
    },
    {
        image: fotograf_slubny_portfolio_2023_012
    },
    {
        image: fotograf_slubny_portfolio_2023_013
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_024
    },
    {
      image: fotograf_slubny_portfolio_2023_015
    },
    {
      image: fotograf_slubny_portfolio_2023_016
    },
    {
      image: fotograf_slubny_portfolio_2023_027
    },
    {
      image: fotograf_slubny_portfolio_2023_018
    },
    {
      image: fotograf_slubny_portfolio_2023_020
    },
    {
      image: fotograf_slubny_portfolio_2023_019
    },
    {
      image: fotograf_slubny_portfolio_2023_021
    },
    {
      image: fotograf_slubny_portfolio_2023_028
    },
    {
      image: fotograf_slubny_portfolio_2023_029
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_031
    },
    {
      image: fotograf_slubny_portfolio_2023_042
    },
    {
      image: fotograf_slubny_portfolio_2023_033
    },
    {
      image: fotograf_slubny_portfolio_2023_034
    },
    {
      image: fotograf_slubny_portfolio_2023_035
    },
    {
      image: fotograf_slubny_portfolio_2023_043
    },
    {
      image: fotograf_slubny_portfolio_2023_037
    },
    {
      image: fotograf_slubny_portfolio_2023_038
    },
    {
      image: fotograf_slubny_portfolio_2023_039
    },
    {
      image: fotograf_slubny_portfolio_2023_036
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Jakie są ceny fotografii ślubnej na Śląsku?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zdjęcia ślubne to nie wszystko. Moja oferta zawiera też fotoksiążkę mającą 140 stron w formacie 30x30, w której można umieścić blisko 300 zdjęć. Spotykamy się też w wybranym dniu po ślubie i robimy plener ślubny. Wszystkie dojazdy w dniu ślubu są wliczone w cenę pakietu. Zapraszm do kontaktu, chętnie wyślę ofertę i porozmawiam z Wami o szczegółach."
        }
    },{
        "@type": "Question",
        "name": "Ile zdjęć dostaniemy z wesela, a ile z pleneru ślubnego?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Minimum 450 zdjęć to liczba zdjęć zapisana w umowie. Wszystkie zdjęcia są poddane starannej obróbce graficznej. Praktycznie zawsze robimy zdjęcia grupowe z gośćmi weselnymi na sali. Ponieważ ilość tych zdjęć jest duża to zawsze ich ilość dodaje się do ilości zdjęć w pakiecie. Plener w wybranym dniu po ślubnie to również dodatkowe 100 zdjęć poddanych starannej obróbce."
        }
    },{
      "@type": "Question",
      "name": "Ile czasu zajmuje praca fotografa ślubnego na Śląsku?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fotografowie ślubni na śląsku pracę rozpoczynają od wczesnych godzin porannych, najczęściej fotografując makijaż Panny Młodej. Zdjęcia kończą się po oczepinach, gdy wszystkie najważniejsze momenty tego ważnego dnia są już utrwalone na kartach pamięci. Jest to bardzo często szesnaście lub więcej godzin przyjemnej pracy."
      }
    },{
      "@type": "Question",
      "name": "Fotoksiążka, album fotograficzny, czy zdjęcia w wersji cyfrowej?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Galeria internetowa i zawarte w niej zdjęcia w wersji cyfrowej służą gościon do oglądania reportażu ślubnego zaraz po ślubie. Para młoda zawsze otrzymuje fotoksiążkę lub album fotograficzny, oraz pendrive w etui ze zdjęciami w pełnej rozdzielczości gotowymi do wydruków. Jest to bardzo ważne ponieważ wtedy widzicie, jak zdjęcia powinny wyglądać wydrukowane na papierze, a ja mam pewność, że oczekiwania związane z jakością są w stu procentach spełnione."
      }
    }
]}

  return (
 
    <LayoutSitePage
      title="Fotograf ślubny Śląsk"
      description="Fotograf ślubny Śląsk"
      keywords="Poszukujesz profesjonalnego fotografa, który pracuje na śląsku. Zapraszam do zapoznania się z moją ofertą."
      url="https://99foto.pl/fotograf-slubny-slask/"
      leadNames="ŻANETA i SEBASTIAN"
      leadTitle="DOM WESELNY BIAŁA PERŁA RADZIEMICE, REPORTAŻ ŚLUBNY"
      leadUrl="/dom-weselny-biala-perla-radziemice-reportaz-slubny"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY ŚLĄSK
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Poszukiwanie fotografa ślubnego na Śląsku to zadanie niełatwe.  Ocena jakości fotografii jest bardzo subiektywna i zależy od indywidualnych preferencji i oczekiwań pary młodej. Ważne, aby wybrać fotografa, który odpowiada Twojemu stylowi i upodobaniom oraz potrafi uchwycić ważne chwile i emocje z dnia ślubu. Możesz godzinami porównywać oferty różnych fotografów, przeglądać ich portfolio i czytać opinie innych klientów, aby znaleźć odpowiednią osobę, która najlepiej odpowiada Twoim oczekiwaniom.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <ImageCarousel images={imagesCarousel1} autoplaySpeed={3000} />
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Pamiętaj by zwrócić uwagę na doświadczenie i profesjonalizm fotografa oraz jego elastyczność i otwartość na sugestie i oczekiwania klientów. Jeżeli szukasz <strong>najlepszego fotografa ślubnego na Śląsku</strong> to doskonale trafiłeś. Nazywam się Tomasz Prokop, mieszkam w Krakowie i zapraszam do mojego fotograficznego świata.
        </Typography>
     
        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ŚLUBNY ŚLĄSK - PROFESJONALIZM i DOŚWIADCZENIE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
          Fotograf ślubny powinien być profesjonalistą, który potrafi uchwycić ważne chwile i emocje związane z dniem ślubu. Powinien mieć doświadczenie nabyte w pracy z wieloma parami młodymi i znać techniki fotografowania. Proces uczenia się fotografii to nic innego jak przechodzenie przez kolejne iteracje, odkrywanie błędów i doskonalenie warsztatu. Uwierzcie mi, że jest to najlepszy sposób na uzyskanie doskonałych rezultatów. Fotograf ślubny musi być również elastyczny i potrafić dostosować się do potrzeb i oczekiwań klientów. Ważne, aby fotograf ślubny był także osobą, z którą młoda para czuje się swobodnie i komfortowo, ponieważ w ten sposób zdjęcia będą bardziej naturalne i autentyczne.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          WYJĄTKOWE MIEJSCA PLENEROWE - FOTOGRAFIA ŚLUBNA ŚLĄSK
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Śląsk jest regionem o bogatej historii i kulturze, dlatego nie brakuje tu wielu pięknych i unikalnych miejsc, które mogą stanowić idealne tło dla zdjęć ślubnych. Warto rozważyć sesję fotograficzną w jednym z malowniczych zamków lub pałaców, takich jak np. Zamek w Pszczynie czy Pałac w Dębnie. Innym ciekawym pomysłem może być sesja w jednym z muzeów, np. Muzeum Śląskie w Katowicach czy Muzeum Karkonoskie w Jeleniej Górze.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <ImageCarousel images={imagesCarousel2} autoplaySpeed={2000} />
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Jeśli lubicie przyrodę, możecie wybrać się na sesję do jednego z parków narodowych lub rezerwatów przyrody, takich jak Karkonoski Park Narodowy czy Beskidy. Wszystko zależy od indywidualnych preferencji i stylu, który preferujecie. Jestem pewny, że bez problemy znajdziecie coś idealnego dla siebie.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          ŚLĄSK - IDEALNE SALE WESELNE DLA FOTOGRAFII ŚLUBNEJ
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Śląsk oferuje wiele pięknych i unikalnych sal weselnych, które z pewnością pomogą Wam zorganizować niezwykłe i niezapomniane przyjęcie ślubne. Możliwości są praktycznie nieograniczone. Jeżeli planujesz organizację przyjęcia weselnego i nie możesz się zdecydować, który lokal wybrać przeglądnij następujące propozycje: Pod Skrzydłami Anioła, K6 – Kotulińskiego 6, Zameczek Myśliwski Promnice, Impresja Zabrze, Umami, Restauracja Łania, Restauracja Luxury Hotel lub Sztygarka.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA ŚLĄSK - WSPOMNIENIA NA LATA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Fotografia ślubna to niezwykle ważna pamiątka, która będzie przypominać o pięknym dniu zaślubin i wszystkich emocjach z nim związanych. Dlatego tak ważne jest, aby wybrać dobrego fotografa, który potrafi uchwycić ważne chwile i emocje oraz stworzyć piękne i unikalne zdjęcia, które będą cieszyć oko i wzruszać na długie lata.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <ImageCarousel images={imagesCarousel3} autoplaySpeed={4000} />
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Jeśli szukacie profesjonalnego fotografa ślubnego na Śląsku, najpierw zapytajcie wśród znajomych i rodziny oraz przeglądnijcie portfolio różnych fotografów w celu porównania ich stylów. Koniecznie też zapoznajcie się z cennikiem usług. Ważne, aby wybrać fotografa, który spełnia wszystkie oczekiwania i jest w stanie stworzyć piękną pamiątkę na lata.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA ŚLĄSK - TANIO JUŻ BYŁO?
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
          Cena za usługi fotograficzne związane ze ślubem jest uzależniona od wielu czynników. Doświadczenie fotografa, jakość sprzętu, ilość godzin pracy, liczba wykonanych zdjęć i wymieniać można byłoby znacznie dłużej. Ceny mogą wahać się od kilkuset do kilku tysięcy złotych. Ważne, aby dokładnie zapoznać się z ofertą fotografów, porównać ceny i mieć pewność, że otrzymujecie usługę w bardzo dobrej jakości i konkurencyjnej cenie. Nie warto decydować się na najtańszą opcję, ponieważ zdjęcia ślubne to pamiątka na lata i należy zadbać o ich jakość. Z drugiej strony, warto pamiętać, że cena nie zawsze jest wyznacznikiem jakości i warto poszukać fotografa, który jest w stanie zaoferować dobrą usługę w rozsądnej cenie.
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
                      a4={schemaData.mainEntity[3].acceptedAnswer.text} />
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
              imgsrc={wesele_rustykalne}
              imgalt="wesele boho i rustykalne"
              linkhref="folwark-wiazy-marszowice-i-rustykalne-wesele-pod-krakowem"
              title="WESELE BOHO i RUSTYKALNE"
              names="PAULA i WOJTEK"
            />
          </Grid>
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