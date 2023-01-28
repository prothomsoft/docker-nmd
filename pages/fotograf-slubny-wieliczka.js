import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";

const fotograf_slubny_portfolio_2023_120 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_120.webp";
const fotograf_slubny_portfolio_2023_121 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_121.webp";
const fotograf_slubny_portfolio_2023_122 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_122.webp";
const fotograf_slubny_portfolio_2023_123 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_123.webp";
const fotograf_slubny_portfolio_2023_124 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_124.webp";
const fotograf_slubny_portfolio_2023_125 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_125.webp";
const fotograf_slubny_portfolio_2023_126 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_126.webp";
const fotograf_slubny_portfolio_2023_127 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_127.webp";
const fotograf_slubny_portfolio_2023_128 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_128.webp";
const fotograf_slubny_portfolio_2023_129 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_129.webp";
const fotograf_slubny_portfolio_2023_131 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_131.webp";
const fotograf_slubny_portfolio_2023_132 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_132.webp";
const fotograf_slubny_portfolio_2023_133 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_133.webp";
const fotograf_slubny_portfolio_2023_134 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_134.webp";
const fotograf_slubny_portfolio_2023_137 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_137.webp";
const fotograf_slubny_portfolio_2023_139 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_139.webp";
const fotograf_slubny_portfolio_2023_140 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_140.webp";
const fotograf_slubny_portfolio_2023_141 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_141.webp";
const fotograf_slubny_portfolio_2023_142 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_142.webp";
const fotograf_slubny_portfolio_2023_143 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_143.webp";
const fotograf_slubny_portfolio_2023_144 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_144.webp";
const fotograf_slubny_portfolio_2023_145 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_145.webp";
const fotograf_slubny_portfolio_2023_146 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_146.webp";
const fotograf_slubny_portfolio_2023_147 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_147.webp";
const fotograf_slubny_portfolio_2023_148 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_148.webp";
const fotograf_slubny_portfolio_2023_149 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_149.webp";
const fotograf_slubny_portfolio_2023_152 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_152.webp";
const fotograf_slubny_portfolio_2023_153 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_153.webp";
const fotograf_slubny_portfolio_2023_154 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_154.webp";
const fotograf_slubny_portfolio_2023_156 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_156.webp";

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "karolinka_bystra_podhalanska_wesele.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_128
    },
    {
        image: fotograf_slubny_portfolio_2023_121
    },
    {
        image: fotograf_slubny_portfolio_2023_122
    },
    {
        image: fotograf_slubny_portfolio_2023_123
    },
    {
        image: fotograf_slubny_portfolio_2023_124
    },
    {
        image: fotograf_slubny_portfolio_2023_125
    },
    {
        image: fotograf_slubny_portfolio_2023_126
    },
    {
        image: fotograf_slubny_portfolio_2023_127
    },
    {
        image: fotograf_slubny_portfolio_2023_120
    },
    {
        image: fotograf_slubny_portfolio_2023_129
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_154
    },
    {
      image: fotograf_slubny_portfolio_2023_139
    },
    {
      image: fotograf_slubny_portfolio_2023_132
    },
    {
      image: fotograf_slubny_portfolio_2023_133
    },
    {
      image: fotograf_slubny_portfolio_2023_134
    },
    {
      image: fotograf_slubny_portfolio_2023_152
    },
    {
      image: fotograf_slubny_portfolio_2023_153
    },
    {
      image: fotograf_slubny_portfolio_2023_137
    },
    {
      image: fotograf_slubny_portfolio_2023_156
    },
    {
      image: fotograf_slubny_portfolio_2023_131
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_140
    },
    {
      image: fotograf_slubny_portfolio_2023_141
    },
    {
      image: fotograf_slubny_portfolio_2023_142
    },
    {
      image: fotograf_slubny_portfolio_2023_143
    },
    {
      image: fotograf_slubny_portfolio_2023_144
    },
    {
      image: fotograf_slubny_portfolio_2023_145
    },
    {
      image: fotograf_slubny_portfolio_2023_146
    },
    {
      image: fotograf_slubny_portfolio_2023_147
    },
    {
      image: fotograf_slubny_portfolio_2023_148
    },
    {
      image: fotograf_slubny_portfolio_2023_149
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Czy sesję ślubną musimy zamówić od razu przy rezerwacji Ciebie na nasz ślub?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oczywiście, że nie. Nawet doradzam swoim Parą aby na sesję podobnie jak na album decydowały się już po dniu ślubu. Będziecie znać lepiej swój budżet oraz dostępność czasową. Sesja dla moich Par kosztuje tyle samo w dniu podpisania umowy i po ślubie. Nie musicie się bać, że koszty wzrosną."
        }
    },{
        "@type": "Question",
        "name": "Jak się przygotować do sesji ślubnej?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Przede wszystkim musicie przyjechać w świetnym humorze. Musicie być zgodni co do tego gdzie i kiedy chcecie aby odbyła się sesja. Warto zadbać o make-up i fryzurę - mogą być dużo bardziej odważne niż w dniu ślubu. Dodatki są wykazane - warto je dostosować do miejsca. W lesie czy na łące wianek zawsze będzie dobrym pomysłem."
        }
    },{
      "@type": "Question",
      "name": "Czy podczas sesji w plenerze może być obecny filmowiec lub inny fotograf?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tutaj musicie się zdać na moje doświadczenie w tym temacie i pozwolić mi działać samemu. Sesja fotograficzna i filmowa w tym samym czasie nie jest dobrym pomysłem. Konwencja takich sesji jest zupełnie inna. Film to w dużej mierze reżyserowanie, a ja na sesji chcę pokazać Waszą naturalność, czułość i bliskość. Oczywiście będę Wam pomagał w “pozowaniu” ale całość opierać się będzie na Was bez reżyserii."
      }
    },{
      "@type": "Question",
      "name": "Czy sesja narzeczeńska jest potrzebna?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nie jest konieczna ale jest świetną okazją abyśmy się lepiej poznali. Pozwoli Wam oswoić się z aparatem oraz moją obecnością. Po sesji narzeczeńskiej moja obecność w dniu ślubu na pewno nie będzie Was stresować. Będziemy już znajomymi, którzy są na Ty."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ślubny Wieliczka"
      description="Fotograf ślubny Wieliczka, zdjęcia ślubne w kopalni Soli, spontaniczny reportaż ślubny"
      keywords="fotograf ślubny Wieliczka, zdjęcia ślubne w kopalni Soli, spontaniczny reportaż ślubny"
      url="https://99foto.pl/fotograf-slubny-wieliczka/"
      leadNames="NATALIA i TOMASZ"
      leadTitle="WESELE W BYSTREJ I OGRÓD PEŁEN LAWENDY W KLIMONTOWIE"
      leadUrl="/wesele-w-bystrej-i-ogrod-pelen-lawendy-w-klimontowie"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY WIELICZKA
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Witaj na mojej stronie internetowej. Jeżeli szukasz najlepszego fotografa ślubnego w Wieliczce to jest do bardzo dobry adres. Jeżeli cenisz sobie w zdjęciach naturalność, chcesz widzieć emocje i brak pozowanych kadrów to tym bardziej zachęcam Ciebie do zapoznania się z moją ofertą ślubną.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Jestem fotografem zajmującym się głównie reportażami ślubnymi. Pracuję w Wieliczce. Szukam naturalnych i prawdziwych momentów, aby utrwalić je w rzeczywistym i szczerym wydaniu na moich fotografiach. Mam nadzieje, że album wypełniony tego rodzaju fotografiami przypomni Wam o ważnym dniu Waszego ślubu w przyszłości.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ŚLUBNY WIELICZKA - JAKI POWINIEN BYĆ?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Dbam o przyjazną współpracę podczas zlecenia i przede wszystkim cenię poczucie humoru, które zawsze dobrze wpływa na finalny efekt zdjęć ślubnych. Staram się w swojej fotografii ślubnej wydobywać z ludzi to, co najciekawsze, to co najpiękniejsze i myślę, że najważniejszą cechę, czyli waszą indywidualność. Skrupulatnie obserwuję ludzi i podtrzymuję na zdjęciach charakterystyczne cechy osobowości.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA WIELICZKA - POMOCNA DŁOŃ
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Osobom, które nie do końca czują się komfortowo przed obiektywem, służę pomocą i dobrą radą. Lubię improwizować podczas sesji zdjęciowej w plenerze daje to zawsze naturalne i oryginalne efekty. Gwarantuję dobrą zabawę i luźną atmosferę. Fotografia ślubna w Wieliczce i nie tylko. Zapraszam do zanurkowania głębiej w moje portfolio. 
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF WIELICZKA - CZY DOŚWIADCZENIE MA ZNACZENIE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Ma, ale nie stawiałbym go na pierwszym miejscu. Ponieważ ono wcale nie jest równoznaczne z umiejętnościami. I myślę też sobie, że nie ma co tu uogólniać i dyskryminować kogokolwiek ze względu na wiek, lata pracy czy jakiekolwiek inne kryteria. Emocjonujący reportaż może zrealizować fotograf z wieloletnim stażem, który kocha to, co robi, robiąc to fantastycznie. Świetne zdjęcia może też wykonać osoba zafascynowana fotografią ślubną, która stosunkowo niedawno rozpoczęła przygodę z tym zawodem. Liczą się efekty. Jesteś tak dobry jak Twój ostatni sezon.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA WIELICZKA - PAMIĄTKA NA LATA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Fotografia ślubna to niezwykle ważna pamiątka, która będzie przypominać o pięknym dniu ślubu i wszystkich emocjach z nim związanych. Dlatego tak ważne jest, aby wybrać dobrego fotografa, który potrafi uchwycić ważne chwile i emocje oraz stworzyć piękne i unikalne zdjęcia, które będą cieszyć oko i wzruszać na długie lata.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Jeśli szukają Państwo profesjonalnego fotografa ślubnego w Wieliczce, warto zapytać znajomych oraz przeglądnąć wyniki wyszukań w internecie. Ilość fotografów ślubnych jest duża, wiele jest też stylów i trudno szukać ujednoliconego cennika usług fotografii ślubnej. Ważne, aby wybrać fotografa, który spełnia wszystkie Wasze oczekiwania i jest w stanie stworzyć piękną pamiątkę na lata.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA WIELICZKA - SESJA NARZECZEŃSKA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Bardzo chętnie zapiszę Waszą historię czułości, bliskości i miłości w kadrach pełnych radości i beztroski. Pełne klimatu i uczuć chwil, które już nie powrócą. Warto wykorzystać czas narzeczeństwa. On jest wyjątkowy warty zapisania na fotografii. Zdjęcia wykonane podczas sesji narzeczeńskiej możecie dobrze wykorzystać w dniu ślubu. Przygotować prezentacje zdjęć, wydrukować pamiątkowe książki dla kochanych rodziców. Możliwości jest zdecydownie wiele, sky is the limit...
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