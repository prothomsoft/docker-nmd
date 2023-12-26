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

const hotel_mercure_kasprowy_zakopane = process.env.staticS3ImagesPath + "portfolio/small/hotel_mercure_kasprowy_zakopane.webp";
const dworzyszcze_wola_reportaz_slubny_pod_krakowem = process.env.staticS3ImagesPath + "portfolio/small/dworzyszcze_wola_reportaz_slubny_pod_krakowem.webp";
const reportaz_slubny_krakow = process.env.staticS3ImagesPath + "portfolio/small/reportaz_slubny_krakow.webp";

const fotograf_slubny_portfolio_2023_570 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_570.webp";
const fotograf_slubny_portfolio_2023_572 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_572.webp";
const fotograf_slubny_portfolio_2023_573 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_573.webp";
const fotograf_slubny_portfolio_2023_574 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_574.webp";
const fotograf_slubny_portfolio_2023_576 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_576.webp";
const fotograf_slubny_portfolio_2023_577 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_577.webp";
const fotograf_slubny_portfolio_2023_578 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_578.webp";
const fotograf_slubny_portfolio_2023_579 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_579.webp";
const fotograf_slubny_portfolio_2023_580 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_580.webp";
const fotograf_slubny_portfolio_2023_581 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_581.webp";
const fotograf_slubny_portfolio_2023_582 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_582.webp";
const fotograf_slubny_portfolio_2023_583 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_583.webp";
const fotograf_slubny_portfolio_2023_584 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_584.webp";
const fotograf_slubny_portfolio_2023_585 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_585.webp";
const fotograf_slubny_portfolio_2023_586 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_586.webp";
const fotograf_slubny_portfolio_2023_587 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_587.webp";
const fotograf_slubny_portfolio_2023_588 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_588.webp";
const fotograf_slubny_portfolio_2023_589 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_589.webp";
const fotograf_slubny_portfolio_2023_590 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_590.webp";
const fotograf_slubny_portfolio_2023_591 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_591.webp";
const fotograf_slubny_portfolio_2023_592 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_592.webp";
const fotograf_slubny_portfolio_2023_593 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_593.webp";
const fotograf_slubny_portfolio_2023_594 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_594.webp";
const fotograf_slubny_portfolio_2023_595 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_595.webp";
const fotograf_slubny_portfolio_2023_596 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_596.webp";
const fotograf_slubny_portfolio_2023_597 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_597.webp";
const fotograf_slubny_portfolio_2023_598 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_598.webp";
const fotograf_slubny_portfolio_2023_599 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_599.webp";
const fotograf_slubny_portfolio_2023_600 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_600.webp";
const fotograf_slubny_portfolio_2023_601 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_601.webp";

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "fotograf_na_slub_rabka_zdroj_start.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_570
    },
    {
        image: fotograf_slubny_portfolio_2023_599
    },
    {
        image: fotograf_slubny_portfolio_2023_600
    },
    {
        image: fotograf_slubny_portfolio_2023_572
    },
    {
        image: fotograf_slubny_portfolio_2023_573
    },
    {
        image: fotograf_slubny_portfolio_2023_574
    },
    {
        image: fotograf_slubny_portfolio_2023_601
    },
    {
        image: fotograf_slubny_portfolio_2023_576
    },
    {
        image: fotograf_slubny_portfolio_2023_577
    },
    {
        image: fotograf_slubny_portfolio_2023_578
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_580
    },
    {
      image: fotograf_slubny_portfolio_2023_579
    },
    {
      image: fotograf_slubny_portfolio_2023_581
    },
    {
      image: fotograf_slubny_portfolio_2023_582
    },
    {
      image: fotograf_slubny_portfolio_2023_583
    },
    {
      image: fotograf_slubny_portfolio_2023_584
    },
    {
      image: fotograf_slubny_portfolio_2023_585
    },
    {
      image: fotograf_slubny_portfolio_2023_586
    },
    {
      image: fotograf_slubny_portfolio_2023_587
    },
    {
      image: fotograf_slubny_portfolio_2023_588
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_589
    },
    {
      image: fotograf_slubny_portfolio_2023_590
    },
    {
      image: fotograf_slubny_portfolio_2023_591
    },
    {
      image: fotograf_slubny_portfolio_2023_592
    },
    {
      image: fotograf_slubny_portfolio_2023_593
    },
    {
      image: fotograf_slubny_portfolio_2023_594
    },
    {
      image: fotograf_slubny_portfolio_2023_595
    },
    {
      image: fotograf_slubny_portfolio_2023_596
    },
    {
      image: fotograf_slubny_portfolio_2023_597
    },
    {
      image: fotograf_slubny_portfolio_2023_598
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Sesja ślubna – w dzień ślubu czy innego dnia?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Moje pary w ramach fotoreportażu ślubnego dostają sesję ślubną w dniu ślubu. Oddalamy się wtedy od zgiełku przyjęcia weselnego, np. na łono natury, aby w trzydzieści minut zrobić piękne, romantyczne fotografie. Dla par, dla których taka sesja w dniu ślubu to za mało, proponuję dodatkową sesję plenerową innego dnia. Wtedy możemy wybrać się w dowolne miejsce w Polsce południowej."
        }
    },{
        "@type": "Question",
        "name": "Czy możemy wykonać zdjęcia grupowe?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jasne, zdjęcia grupowe są ważne również dla mnie, bo dla mnie jest ważne to, co dla Was! A z doświadczenia wiem, że fotografie całej rodziny są tymi najczęściej oglądanymi – wszyscy szukają na nich swojego wizerunku. Wykonując zdjęcia grupowe, aby uciec od patetyczności, lubię wykorzystać jakiś dodatkowy, niebanalny motyw, np. zimne ognie!"
        }
    },{
      "@type": "Question",
      "name": "Czy możemy zamówić również albumy ślubne?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak. Dla moich par przygotowuję również albumy ślubne. Korzystam z profesjonalnych laboratoriów fotograficznych, dzięki którym wiem, że produkty, które proponuję, są najwyższej jakości."
      }
    },{
      "@type": "Question",
      "name": "Czy fotografujesz również śluby humanistyczne?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, śluby humanistyczne są coraz popularniejsze w Polsce. O tym, czym się charakteryzują, możecie przeczytać na moim blogu."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ślubny Szczawnica"
      description="Fotograf ślubny Szczawnica"
      keywords="fotograf ślubny Szczawnica"
      url="https://99foto.pl/fotograf-slubny-szczawnica/"
      leadNames="KAMILA i ADRIAN"
      leadTitle="FOTOGRAF NA WESELE RABKA ZDRÓJ, KOŚCIÓŁ ŚW. MARII MAGDALENY"
      leadUrl="/fotograf-na-wesele-rabka-zdroj-kosciol-sw-marii-magdaleny"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY SZCZAWNICA
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Planowanie i organizacja ślubu to przede wszystkim nieustanne podejmowanie decyzji. Ciągłe wybory pomiędzy jednym, a drugim. Nie sposób wyliczyć jak bardzo złożone jest to przedsięwzięcie. Jeśli jesteście parą poszukującą fotografa na swój ślub, to doskonale wiecie o czym mówię. Szukając osoby odpowiedzialnej za jedne z ważniejszych zdjęć w Waszych życiu, przede wszystkim myślcie o tym czego Wy oczekujecie i co Wam się podoba. Odstawcie na bok porady cioci, sąsiadki czy rekomendacje z Waszej sali weselnej. To bardzo ważna pamiętka. 
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Jeśli rozpoczniecie przygotowania do ślubu, szybko zauważycie, że ze wszystkich stron jesteście atakowani propozycjami pomocy i współpracy. W czasach, gdzie każdy fotograf chce współpracować z każdą parą - warto dobrze przemyśleć temat „dopasowania” i oczekiwań. Jeżeli szukasz <strong>najlepszego fotografa ślubnego w Szczawnicy</strong> to doskonale trafiłeś. Nazywam się Tomasz Prokop, mieszkam w Krakowie i zapraszam do mojego fotograficznego świata.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ŚLUBNY SZCZAWNICA - JAKI POWINIEN BYĆ?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Fotograf ślubny to człowiek na którego możesz liczyć i polegać na jego doświadczeniu. Jako Panna Młoda powinnaś również czuć się dobrze i swobodnie w towarzystwie fotografa ślubnego. Na początku nikt nie wie jakie zachowania są dobrze odbierane przez ludzi, a jakie zachowania ludzi od nas odpychają. Fotografując kolejny ślub i otrzymując zlecenia od znajomych Par Młodych zadowolonych z wykonanego reporażu ślubnego, zaczynasz wierzyć w swój warsztat i nabierasz pewności co do swojej osoby. Nieustanne doskonalenie swoich umiejętności to mega ważna rzecz, która przydaje się w życiu, a w szczególności w fotografii ślubnej. Otwartość jest kluczem do osiągnięcia sukcesu w tej branży.
        </Typography>


        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA SZCZAWNICA - PIENINY I NIZINY
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Szczawnica to miejsce wyjątkowe. Realizując tam sesje ślubne możemy rozpocząć od Parku Zdrojowego, następnie przespacerować się wzdłuż promenady, fotografując wzdłuż Dunajca. Możemy też wybrać się znacznie wyżej. Niejednokrotnie wychodziłem na Wysoki Wierch, czy to od strony Szlachtowej, czy też pokonując pierwszy etap trasy kolejką na Palenicę. Widok na zachodzące słońce kładzące się w Pieninach, z widokiem Tatr w oddali - trudno wyobrazić sobie lepszą scenerię dla zdjęć ślubnych.
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Jeżeli jesteście Parą Młodą, która preferuje miejsca, gdzie ludzi jest trochę mniej, plener ślubny w Szczawnicy spełni Wasze oczekiwania. Poszukując nie tylko fotografa, ale i przewodnika, który doskonale zna tamte strony trafiliście doskonale. Zapraszam na mojego bloga, gdzie znajdziecie zdjęcia z miejsc, o których wspomniałem. Do zobaczenia na reportażu i na plenerze ślubnym wkrótce...
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          SZCZAWNICA - JAKIEGO FOTOGRAFA WYBRAĆ?
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Najlepiej wybrać mnie. Koniecznie powinniście sprawdzić moje wcześniejsze realizacje i zapytać o rekomendacje znajomych lub osoby udzielające się na forach tematycznych. Zachęcam także do spotkania na kawie. Sprawdźcie kim jestem. Nić porozumienia na innej stopie niż zawodowa, pomoże Wam opanować skrępowanie, a być może ograniczy stres towarzyszący pozowaniu do zdjęć w dniu ślubu. Obiecuję, że miło spędzimy czas, a Wy poznacie wszystkie niuansy związane z fotografowaniem ślubu.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA SZCZAWNICA - AMATOR CZY PROFESJONALISTA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Czy często para młoda decyduje się na wybór profesjonalnego fotografa, czy może liczy bardziej na zdjęcia od gości, którzy obecni są na całej uroczystości? Pary młode raczej decydują się jednak na profesjonalistę, ponieważ goście nie zawsze muszą złapać ten odpowiedni moment w trakcie ślubu lub wesela. Mogą akurat się zająć zabawą w czasie, kiedy dzieją się najciekawsze rzeczy.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Dodatkowo wiele osób duchownych raczej preferuje profesjonalistę przy ołtarzu, który zrobi zdjęcia dyskretnie i profesjonalnie nie przeszkadzając w trakcie samej ceremonii ślubu.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA SZCZAWNICA - KOSZT USŁUGI
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Jeżeli szukasz fotografa ślubnego, warto wiedzieć, że możesz zamówić sesję narzeczeńską, sam reportaż w dniu ślubu (od przygotowań, po późne godziny nocne) oraz sesję ślubną w plenerze w Szczawnicy. Są to główne składowe ceny usługi fotografa ślubnego. Dobra informacja jest taka, że jeżeli organizujesz ślub w Szczawnicy i wybierzesz moje usługi odpadają Ci koszty dojazdu czy noclegu dla fotografa. Jestem z Krakowa i do Szczawnicy dojeżdżam gratis.
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
              imgsrc={hotel_mercure_kasprowy_zakopane}
              imgalt="wesele w zakopanem, hotel mercury kasprowy, zespół ich troje na weselu"
              linkhref="wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje"
              title="WESELE W ZAKOPANEM"
              names="PATRYCJA i TOMASZ"
            />
          </Grid>
          <Grid item lg={4} p={1}>
            <ImageCardSmall
             imgsrc={reportaz_slubny_krakow}
             imgalt="reportaż ślubny kraków"
             linkhref="dom-weselny-biala-perla-radziemice-reportaz-slubny"
             title="REPORTAŻ ŚLUBNY KRAKÓW"
             names="ŻANETA i SEBASTIAN"
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