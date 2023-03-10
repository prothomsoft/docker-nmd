import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";




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
            "text": "Je??li chcecie by?? spokojni to koniecznie zapytajcie Waszego fotografa ??lubnego czy ma jaki?? plan awaryjny na wypadek gdyby nie m??g?? stawi?? si?? na waszej uroczysto??ci. W dobie social medi??w i networkingu za??atwienia zast??pstwa dla fotografa nie powinno stanowi?? ??adnego problemu."
        }
    },{
        "@type": "Question",
        "name": "Czy pijesz alkohol fotografuj???? na weselu?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Profesjonalny fotograf nie powinien spo??ywa?? alkoholu na weselu. Ka??dy ma indywidualne podej??cie do tego tematu ja osobi??cie wola??bym ??eby wykonawca, kt??remu powierzono najwa??niejszy dzie?? w ??yciu by?? trze??wy."
        }
    },{
      "@type": "Question",
      "name": "Obr??bka zdj???? i retusz, czym si?? r????ni???",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dla wielu fotograf??w obr??bka zdj???? ??lubnych to korekcja kolorystyczna. Natomiast w rozumieniu klient??w cz??sto jest to zaawansowany retusz polegaj??cy na usuwaniu zb??dnych kilogram??w. Warto by by??o zapyta?? fotografa co zawiera obr??bka fotograficzna i czy do niej zalicza si?? retusz fotografii."
      }
    },{
      "@type": "Question",
      "name": "W jakim stroju fotografujesz ??luby?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pytanie b??ahe ale warto zapyta?? fotografa w jakim srtroju fotografuje Wasz ??lub. Fotografuj??c ??luby cz??sto widz?? jak ubrani s?? kamerzy??ci czasem zdarza??o si??, ??e kto?? przychodzi w wymi??tym bia??ym podkoszulku z logo rockowego zespo??u. Zwr????cie uwag??, ??eby str??j fotografa by?? dopasowany do rangi waszej uroczysto??ci."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ??lubny Kielce"
      description="Fotograf ??lubny Kielce, wyb??r miejsca na ??lub, sala bankietowa, dom weselny"
      keywords="fotograf ??lubny Kielce, wyb??r miejsca na ??lub"
      url="https://99foto.pl/fotograf-slubny-kielce/"
      leadNames="ANNA i PIOTR"
      leadTitle="BAZYLIKA BO??EGO CIA??A KRAK??W, FOTOREPORTA?? ??LUBNY"
      leadUrl="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ??LUBNY KIELCE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Witaj na mojej stronie internetowej. Pewnie nie lubisz tracisz czasu, wi??c je??eli znalaz??e?? si?? w tym miejscu to my??l??, ??e mog?? wiedzie?? czego poszukujesz. Je??eli szukasz <strong>najlepszego fotografa ??lubnego w Kielcach</strong> to jest do bardzo dobry adres. W ubieg??ym roku 2k22 wykona??em blisko czterdzie??ci reporta??y ??lubnych. Wszystkie pary m??ode otrzyma??y ju?? zdj??cia w strefie klienta i na pendrivie, otrzyma??y te?? swoje fotoksi????ki ??lubne. Mam nadziej??, ??e i Ty do????czysz do grona klient??w zadowolonych z moich us??ug. Zapraszam do zapoznania si?? ze zdj??ciami.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Oferuje swoje do??wiadczenie i profesjonalizm, elastyczno???? i otwarto???? na sugestie. Postaram si?? spe??ni?? wszystkie Wasze fotograficzne oczekiwania. Nazywam si?? Tomasz Prokop i zapraszam do mojego fotograficznego ??wiata.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ??LUBNY KIELCE - JAKI POWINIEN BY???
          </Typography>
        </Box>

        

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
          Fotograf ??lubny powinien by?? profesjonalist??, kt??ry potrafi uchwyci?? wa??ne chwile i emocje zwi??zane z dniem ??lubu. Powinien mie?? do??wiadczenie w pracy z osobami fotografowanymi i zna?? techniki fotografowania, pozwalaj??ce uzyska?? najlepsze rezultaty. Fotograf ??lubny powinien te?? by?? elastyczny i potrafi?? dostosowa?? si?? do potrzeb i oczekiwa?? klient??w. Wa??ne, aby fotograf ??lubny by?? tak??e osob??, z kt??r?? m??oda para czuje si?? swobodnie i komfortowo, poniewa?? w ten spos??b zdj??cia b??d?? bardziej naturalne i autentyczne.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA KIELCE - POLECANE MIEJSCA
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Kielce to miasto w ??rodkowej Polsce, kt??re oferuje wiele miejsc idealnych do fotografowania. Oto kilka propozycji: Park im. gen. J??zefa Bema, Park Miejski im. Jana Paw??a II, Zamek w Kielcach, Katedra ??w. Piotra i Paw??a, Bulwary nad Silnic??. W ka??dym z tych miejsc mo??emy wybra?? si?? na kr??tki spacer, porozmawia??, poszuka?? promieni s??o??cai  zrobi?? doskona??e zdj??cia.
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Jest to tylko kilka przyk??ad??w, w Kielcach jest wiele innych pi??knych miejsc, kt??re mog?? by?? idealne na plener ??lubny. Zalecam zapoznanie si?? z map?? miasta i odkrycie w??asnych ulubionych miejsc.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          KIELCE - JAK ZNALE???? FOTOGRAFA ??LUBNEGO
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Ka??dy fotograf powinien posiadacie zestaw cech kt??re sprawi??, ??e jest tak dobry, ??eby klienci chcieli do niego wraca??. Fotografia ??lubna to dziedzina kt??ra wymaga najwi??kszej wszechstronno??ci zar??wno w uj??ciu technicznym czyli znajomo??ci technik fotograficznych ale tak??e w podej??ciu do klient??w, [par m??odych, kt??re powierzaj?? nam najwa??niejsze chwile swojego ??ycia.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA KIELCE - ZDJ??CIA NA ZAWSZE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Pami??tajmy, ??e to co powoduje, ??e zdj??cia zdj??cia fotograf??w ??lubnych si?? podobaj?? i co za tym idzie sprzedaj?? to s?? sesje plenerowe, pi??kne widoki, cudne ??wiat??o, idealnie dobrana kompozycja. Elementy te mo??na naj??atwiej kontrolowa?? robi??c sesje, kt??re si?? samodzielnie zaplanowa??o, wybra??o super lokalizacj?? i trafi??o z por?? dnia.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Je??li szukaj?? Pa??stwo profesjonalnego fotografa ??lubnego w Kielcach, warto zacz???? od zapytania znajomych i rodziny oraz przejrzenia portfolio r????nych fotograf??w, por??wnania ich styl??w i cen. Wa??ne, aby wybra?? fotografa, kt??ry spe??nia wszystkie oczekiwania i jest w stanie stworzy?? pi??kn?? pami??tk?? na lata.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA KIELCE - ZEZWOLENIE NA FOTOGRAFOWANIE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Zapytajcie fotografa, czy posiada zezwolenie kurii na fotografowanie w miejscach sakralnych. Fakt, ??e fotograf nie b??dzie mia?? tego dokumentu mo??e skutkowa?? brakiem zezwolenia na fotografowanie Waszego ??lubu. Przezorny jest zawsze ubezpieczony i nie dajmy w tak wa??nym temacie jaki jest dzie?? ??lubu wygra?? przypadkowi.
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