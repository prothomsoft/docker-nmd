import LayoutSitePage from "../components/layoutSitePage";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Carousel from 'react-material-ui-carousel'
import FaqAccordion from "../components/faqAccordion";

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
        "name": "Jakie s?? ceny fotografii ??lubnej na ??l??sku?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zdj??cia ??lubne to nie wszystko. Moja oferta zawiera te?? fotoksi????k?? maj??c?? 140 stron w formacie 30x30, w kt??rej mo??na umie??ci?? blisko 300 zdj????. Spotykamy si?? te?? w wybranym dniu po ??lubie i robimy plener ??lubny. Wszystkie dojazdy w dniu ??lubu s?? wliczone w cen?? pakietu. Zapraszm do kontaktu, ch??tnie wy??l?? ofert?? i porozmawiam z Wami o szczeg????ach."
        }
    },{
        "@type": "Question",
        "name": "Ile zdj???? dostaniemy z wesela, a ile z pleneru ??lubnego?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Minimum 450 zdj???? to liczba zdj???? zapisana w umowie. Wszystkie zdj??cia s?? poddane starannej obr??bce graficznej. Praktycznie zawsze robimy zdj??cia grupowe z go????mi weselnymi na sali. Poniewa?? ilo???? tych zdj???? jest du??a to zawsze ich ilo???? dodaje si?? do ilo??ci zdj???? w pakiecie. Plener w wybranym dniu po ??lubnie to r??wnie?? dodatkowe 100 zdj???? poddanych starannej obr??bce."
        }
    },{
      "@type": "Question",
      "name": "Ile czasu zajmuje praca fotografa ??lubnego na ??l??sku?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fotografowie ??lubni na ??l??sku prac?? rozpoczynaj?? od wczesnych godzin porannych, najcz????ciej fotografuj??c makija?? Panny M??odej. Zdj??cia ko??cz?? si?? po oczepinach, gdy wszystkie najwa??niejsze momenty tego wa??nego dnia s?? ju?? utrwalone na kartach pami??ci. Jest to bardzo cz??sto szesna??cie lub wi??cej godzin przyjemnej pracy."
      }
    },{
      "@type": "Question",
      "name": "Fotoksi????ka, album fotograficzny, czy zdj??cia w wersji cyfrowej?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Galeria internetowa i zawarte w niej zdj??cia w wersji cyfrowej s??u???? go??cion do ogl??dania reporta??u ??lubnego zaraz po ??lubie. Para m??oda zawsze otrzymuje fotoksi????k?? lub album fotograficzny, oraz pendrive w etui ze zdj??ciami w pe??nej rozdzielczo??ci gotowymi do wydruk??w. Jest to bardzo wa??ne poniewa?? wtedy widzicie, jak zdj??cia powinny wygl??da?? wydrukowane na papierze, a ja mam pewno????, ??e oczekiwania zwi??zane z jako??ci?? s?? w stu procentach spe??nione."
      }
    }
]}

  return (
 
    <LayoutSitePage
      title="Fotograf ??lubny ??l??sk"
      description="Fotograf ??lubny ??l??sk"
      keywords="Poszukujesz profesjonalnego fotografa, kt??ry pracuje na ??l??sku. Zapraszam do zapoznania si?? z moj?? ofert??."
      url="https://99foto.pl/fotograf-slubny-slask/"
      leadNames="??ANETA i SEBASTIAN"
      leadTitle="DOM WESELNY BIA??A PER??A RADZIEMICE, REPORTA?? ??LUBNY"
      leadUrl="/dom-weselny-biala-perla-radziemice-reportaz-slubny"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ??LUBNY ??L??SK
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Poszukiwanie fotografa ??lubnego na ??l??sku to zadanie nie??atwe.  Ocena jako??ci fotografii jest bardzo subiektywna i zale??y od indywidualnych preferencji i oczekiwa?? pary m??odej. Wa??ne, aby wybra?? fotografa, kt??ry odpowiada Twojemu stylowi i upodobaniom oraz potrafi uchwyci?? wa??ne chwile i emocje z dnia ??lubu. Mo??esz godzinami por??wnywa?? oferty r????nych fotograf??w, przegl??da?? ich portfolio i czyta?? opinie innych klient??w, aby znale???? odpowiedni?? osob??, kt??ra najlepiej odpowiada Twoim oczekiwaniom.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Pami??taj by zwr??ci?? uwag?? na do??wiadczenie i profesjonalizm fotografa oraz jego elastyczno???? i otwarto???? na sugestie i oczekiwania klient??w. Je??eli szukasz <strong>najlepszego fotografa ??lubnego na ??l??sku</strong> to doskonale trafi??e??. Nazywam si?? Tomasz Prokop, mieszkam w Krakowie i zapraszam do mojego fotograficznego ??wiata.
        </Typography>
     
        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ??LUBNY ??L??SK - PROFESJONALIZM i DO??WIADCZENIE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
          Fotograf ??lubny powinien by?? profesjonalist??, kt??ry potrafi uchwyci?? wa??ne chwile i emocje zwi??zane z dniem ??lubu. Powinien mie?? do??wiadczenie nabyte w pracy z wieloma parami m??odymi i zna?? techniki fotografowania. Proces uczenia si?? fotografii to nic innego jak przechodzenie przez kolejne iteracje, odkrywanie b????d??w i doskonalenie warsztatu. Uwierzcie mi, ??e jest to najlepszy spos??b na uzyskanie doskona??ych rezultat??w. Fotograf ??lubny musi by?? r??wnie?? elastyczny i potrafi?? dostosowa?? si?? do potrzeb i oczekiwa?? klient??w. Wa??ne, aby fotograf ??lubny by?? tak??e osob??, z kt??r?? m??oda para czuje si?? swobodnie i komfortowo, poniewa?? w ten spos??b zdj??cia b??d?? bardziej naturalne i autentyczne.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          WYJ??TKOWE MIEJSCA PLENEROWE - FOTOGRAFIA ??LUBNA ??L??SK
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          ??l??sk jest regionem o bogatej historii i kulturze, dlatego nie brakuje tu wielu pi??knych i unikalnych miejsc, kt??re mog?? stanowi?? idealne t??o dla zdj???? ??lubnych. Warto rozwa??y?? sesj?? fotograficzn?? w jednym z malowniczych zamk??w lub pa??ac??w, takich jak np. Zamek w Pszczynie czy Pa??ac w D??bnie. Innym ciekawym pomys??em mo??e by?? sesja w jednym z muze??w, np. Muzeum ??l??skie w Katowicach czy Muzeum Karkonoskie w Jeleniej G??rze.
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Je??li lubicie przyrod??, mo??ecie wybra?? si?? na sesj?? do jednego z park??w narodowych lub rezerwat??w przyrody, takich jak Karkonoski Park Narodowy czy Beskidy. Wszystko zale??y od indywidualnych preferencji i stylu, kt??ry preferujecie. Jestem pewny, ??e bez problemy znajdziecie co?? idealnego dla siebie.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          ??L??SK - IDEALNE SALE WESELNE DLA FOTOGRAFII ??LUBNEJ
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        ??l??sk oferuje wiele pi??knych i unikalnych sal weselnych, kt??re z pewno??ci?? pomog?? Wam zorganizowa?? niezwyk??e i niezapomniane przyj??cie ??lubne. Mo??liwo??ci s?? praktycznie nieograniczone. Je??eli planujesz organizacj?? przyj??cia weselnego i nie mo??esz si?? zdecydowa??, kt??ry lokal wybra?? przegl??dnij nast??puj??ce propozycje: Pod Skrzyd??ami Anio??a, K6 ??? Kotuli??skiego 6, Zameczek My??liwski Promnice, Impresja Zabrze, Umami, Restauracja ??ania, Restauracja Luxury Hotel lub Sztygarka.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA ??L??SK - WSPOMNIENIA NA LATA
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
          Je??li szukacie profesjonalnego fotografa ??lubnego na ??l??sku, najpierw zapytajcie w??r??d znajomych i rodziny oraz przegl??dnijcie portfolio r????nych fotograf??w w celu por??wnania ich styl??w. Koniecznie te?? zapoznajcie si?? z cennikiem us??ug. Wa??ne, aby wybra?? fotografa, kt??ry spe??nia wszystkie oczekiwania i jest w stanie stworzy?? pi??kn?? pami??tk?? na lata.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA ??L??SK - TANIO JU?? BY??O?
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
          Cena za us??ugi fotograficzne zwi??zane ze ??lubem jest uzale??niona od wielu czynnik??w. Do??wiadczenie fotografa, jako???? sprz??tu, ilo???? godzin pracy, liczba wykonanych zdj???? i wymienia?? mo??na by??oby znacznie d??u??ej. Ceny mog?? waha?? si?? od kilkuset do kilku tysi??cy z??otych. Wa??ne, aby dok??adnie zapozna?? si?? z ofert?? fotograf??w, por??wna?? ceny i mie?? pewno????, ??e otrzymujecie us??ug?? w bardzo dobrej jako??ci i konkurencyjnej cenie. Nie warto decydowa?? si?? na najta??sz?? opcj??, poniewa?? zdj??cia ??lubne to pami??tka na lata i nale??y zadba?? o ich jako????. Z drugiej strony, warto pami??ta??, ??e cena nie zawsze jest wyznacznikiem jako??ci i warto poszuka?? fotografa, kt??ry jest w stanie zaoferowa?? dobr?? us??ug?? w rozs??dnej cenie.
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
                      a4={schemaData.mainEntity[3].acceptedAnswer.text} />
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