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

const slub_palac_goetz_portfolio = process.env.staticS3ImagesPath + "portfolio/small/slub_palac_goetz_portfolio.webp";
const reportaz_slubny_krakow = process.env.staticS3ImagesPath + "portfolio/small/reportaz_slubny_krakow.webp";
const hotel_mercure_kasprowy_zakopane = process.env.staticS3ImagesPath + "portfolio/small/hotel_mercure_kasprowy_zakopane.webp";


const fotograf_slubny_portfolio_2023_371 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_371.webp";
const fotograf_slubny_portfolio_2023_372 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_372.webp";
const fotograf_slubny_portfolio_2023_373 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_373.webp";
const fotograf_slubny_portfolio_2023_375 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_375.webp";
const fotograf_slubny_portfolio_2023_378 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_378.webp";
const fotograf_slubny_portfolio_2023_379 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_379.webp";
const fotograf_slubny_portfolio_2023_380 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_380.webp";
const fotograf_slubny_portfolio_2023_382 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_382.webp";
const fotograf_slubny_portfolio_2023_383 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_383.webp";
const fotograf_slubny_portfolio_2023_384 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_384.webp";
const fotograf_slubny_portfolio_2023_387 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_387.webp";
const fotograf_slubny_portfolio_2023_388 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_388.webp";
const fotograf_slubny_portfolio_2023_389 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_389.webp";
const fotograf_slubny_portfolio_2023_390 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_390.webp";
const fotograf_slubny_portfolio_2023_391 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_391.webp";
const fotograf_slubny_portfolio_2023_392 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_392.webp";
const fotograf_slubny_portfolio_2023_393 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_393.webp";
const fotograf_slubny_portfolio_2023_394 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_394.webp";
const fotograf_slubny_portfolio_2023_395 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_395.webp";
const fotograf_slubny_portfolio_2023_396 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_396.webp";
const fotograf_slubny_portfolio_2023_397 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_397.webp";
const fotograf_slubny_portfolio_2023_398 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_398.webp";
const fotograf_slubny_portfolio_2023_400 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_400.webp";
const fotograf_slubny_portfolio_2023_401 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_401.webp";
const fotograf_slubny_portfolio_2023_406 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_406.webp";
const fotograf_slubny_portfolio_2023_407 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_407.webp";
const fotograf_slubny_portfolio_2023_661 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_661.webp";
const fotograf_slubny_portfolio_2023_662 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_662.webp";
const fotograf_slubny_portfolio_2023_663 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_663.webp";
const fotograf_slubny_portfolio_2023_664 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_664.webp";




const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "dom_weselny_mogielica_fotograf_slubny_mszana.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_401
    },
    {
        image: fotograf_slubny_portfolio_2023_400
    },
    {
        image: fotograf_slubny_portfolio_2023_371
    },
    {
        image: fotograf_slubny_portfolio_2023_372
    },
    {
        image: fotograf_slubny_portfolio_2023_373
    },
    {
        image: fotograf_slubny_portfolio_2023_406
    },
    {
        image: fotograf_slubny_portfolio_2023_407
    },
    {
        image: fotograf_slubny_portfolio_2023_375
    },
    {
        image: fotograf_slubny_portfolio_2023_378
    },
    {
        image: fotograf_slubny_portfolio_2023_661
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_379
    },
    {
      image: fotograf_slubny_portfolio_2023_380
    },
    {
      image: fotograf_slubny_portfolio_2023_662
    },
    {
      image: fotograf_slubny_portfolio_2023_382
    },
    {
      image: fotograf_slubny_portfolio_2023_383
    },
    {
      image: fotograf_slubny_portfolio_2023_384
    },
    {
      image: fotograf_slubny_portfolio_2023_663
    },
    {
      image: fotograf_slubny_portfolio_2023_664
    },
    {
      image: fotograf_slubny_portfolio_2023_387
    },
    {
      image: fotograf_slubny_portfolio_2023_388
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_389
    },
    {
      image: fotograf_slubny_portfolio_2023_390
    },
    {
      image: fotograf_slubny_portfolio_2023_391
    },
    {
      image: fotograf_slubny_portfolio_2023_392
    },
    {
      image: fotograf_slubny_portfolio_2023_393
    },
    {
      image: fotograf_slubny_portfolio_2023_394
    },
    {
      image: fotograf_slubny_portfolio_2023_395
    },
    {
      image: fotograf_slubny_portfolio_2023_396
    },
    {
      image: fotograf_slubny_portfolio_2023_397
    },
    {
      image: fotograf_slubny_portfolio_2023_398
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Ile kosztuje reportaż i dojazd fotografa ślubnego do Wadowic?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Koszt dojazdu do Wadowic wliczony jest w cenę pakietu ślubnego. Odpadają Ci koszty dojazdu czy noclegu dla fotografa."
        }
    },{
        "@type": "Question",
        "name": "Do której godziny fotografujesz przyjęcie?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Często spotykam się z tendencją kładzenia zbyt dużego nacisku na fotografowanie przyjęcia. Z perspektywy pamiątki i historii zawartej w reportażu piąta czy szósta godzina opowiadania o tańczących i wznoszonych toastach  gościach nie wnosi już zbyt wiele do materiału natomiast brak wspólnej sesji, pośpiech w przygotowaniach - na to nie możemy sobie pozwolić. "
        }
    },{
      "@type": "Question",
      "name": "Czy zawsze publikujesz fotografie ślubne w internecie?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Publikacja materiałów jest dla mnie bardzo istotna – dzięki temu zainteresowane moją fotografią pary są w stanie dokładnie i na bieżąco ocenić jakość i poziom moich prac.  Gdybym nie miał takiej możliwości prawdopodobnie nie byłoby Was tutaj. Rozumiem jednak, że nie jest to komfortowe rozwiązanie dla każdego i jeśli tylko nie zgadzacie się na publikację Waszego wizerunku dajcie mi znać – przygotuję dla Was umowę i ofertę na warunkach dostosowanych do Waszych oczekiwań."
      }
    },{
      "@type": "Question",
      "name": "Czy oznasz język angielski?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, nie ma najmniejszego problemu abym komunikował się częściowo lub przez cały dzień z Wami i Waszymi gośćmi po angielsku. Bardzo często fotografuję śluby międzynarodowe i nie stanowi to dla mnie absolutnie żadnej przeszkody aby dogadać się z każdym z gości."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ślubny Wadowice"
      description="Fotograf ślubny Wadowice, fotograf na wesele Wadowice, reportaż ślubny"
      keywords="fotograf ślubny Wadowice, fotograf na wesele Wadowice, reportaż ślubny"
      url="https://99foto.pl/fotograf-slubny-wadowice/"
      leadNames="NATALIA i KRZYSZTOF"
      leadTitle="DOM WESELNY MOGIELICA JURKÓW, RUSTYKALNE WESELE"
      leadUrl="/dom-weselny-mogielica-jurkow-rustykalne-wesele"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY WADOWICE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Wiadomo, że zdjęcia podczas wesela będzie robiło Wam mnóstwo osób. Jedne będą lepszej jakości, drugie gorsze. Część gości weźmie na przyjęcie ze sobą aparaty fotograficzne, a część będzie fotografować telefonem komórkowym. Jeśli żaden z naszych gości nie jest zawodowym fotografem, nie możemy mieć jednak pewności, że zrobione zdjęcia będą dla nas zadowalające.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Wybór fotografa na wesele nie należy do rzeczy łatwych. Trzeba przejrzeć portfolio wielu fotografów, negocjować się i pytać o wolne terminy. Nie każdy fotograf będzie do nas pasował. Każdy z nas jest inny, fotografowie też są inni. Nasze gusta, potrzeby i oczekiwania nie zawsze będą spójne z tym co proponuje fotograf. Nie na wszystko też jako Para Młoda musimy się zgadzać. Kobiety, które lubią bardziej jeden ze swoich profili, powinny powiedzieć o tym fotografowi przed ślubem. Jest wtedy szansa, że zdjęcia będą robione z tej bardziej „korzystnej dla nas strony”. Warto też wspomnieć, którzy z gości weselnych są dla nas najważniejsi i których zdjęć najwięcej byśmy chcieli - trzeba fotografowi przedstawić np. rodziców, rodzeństwo czy świadków. Jeżeli szukasz <strong>najlepszego fotografa ślubnego w Wadowicach</strong> to jesteś we właściwym miejscu. Nazywam się Tomasz Prokop, mieszkam w Krakowie i bardzo chętnie sfotografuję Wasz ślub.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ŚLUBNY WADOWICE - ZDJĘCIA SPONTANICZNE?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Fotografia reportażowa jest moją specjalizacją. Uwielbiam tę magię, dzięki której mogę zamknąć na zdjęciach to, co nieuchwytne, czyli Wasz spontaniczny uśmiech, wzruszenie, skrywane pocałunki i spojrzenia pełne miłości. Wierzę, że wspólnie możemy stworzyć coś naprawdę wyjątkowego – historię, która pozostanie z Wami na zawsze i nawet na stare lata będzie cieszyć równie mocno, jak tego pięknego dnia. Serdecznie zapraszam Cię do zapoznania się z moim portfolio i wejścia do świata emocji widzianego moimi oczami.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA WADOWICE - ZADANIA SPECJALNE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Fotograf ślubny, który specjalizuje się w przygotowywaniu reportaży ślubnych, to osoba do zadań specjalnych. Z jednej strony musi poczuć w sobie duszę reportera, który jest w stanie przewidywać pewne zdarzenia, stale obserwuje otoczenie i wie, jakie momenty uchwycić na fotografiach. Z drugiej strony to osoba, która doskonale zna swój sprzęt i posiada rozległą wiedzę na temat technik fotografowania. Wie, w jaki sposób operować światłem i cieniem, by zdjęcia zyskały niepowtarzalny charakter, nadaje odpowiedni rytm całej historii, a także z łatwością tworzy zdjęcia wieloplanowe, w których kilka historii przeplata się ze sobą na jednej fotografii.
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Jako dobry reporter ślubny nie boje się ciężkiej pracy i jestem gotowy na ciągłe udoskonalanie własnych umiejętności. Jeśli chcesz mieć pewność, że fotograf ślubny przygotuje dla Ciebie niezapomniany reportaż, zwróć uwagę na to, jak zmienia się jego portfolio na przestrzeni lat. Dzięki temu będziesz w stanie ocenić jego zaangażowanie w wykonywaną pracę oraz nieustanny rozwój.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          WADOWICE - KIEDY ZAREZERWOWAĆ TERMIN?
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Pamiętaj, że czym szybciej zarezerwujesz termin u fotografa, tym lepiej. Warto wiedzieć, że niektóre weekendy są zapisane już na dwa lata do przodu. Pamiętaj, że funkcjonuje też coś takiego, jak sezon ślubny, który trwa od kwietnia do listopada. To czas, kiedy trudniej o rezerwację fotografa, jeżeli do ślubu pozostało już niewiele czasu. 
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA WADOWICE - PAMIĄTKA NA LATA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        W mojej ofercie znajdują się albumy ślubne dwóch wiodących firm drukarskich w Polsce. Pierwsza z nich to firma Printu, natomiast druga to Najlepsze Foto. Korzystając z moich usług w obu przypadkach zyskujecie pięćdziesiąt procent zniżki na zamówione do druku materiały. Mogę Was również zapewnić, że współpraca z tymi firmami przebiega doskonale, a jakość druku jest na najwyższym poziomie.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Marzą Ci się zdjęcia ze ślubu, które nawet za dwadzieścia lat będą wyciskać łzy wzruszenia? Szukasz <strong>fotografa ślubnego w Wadowicach</strong>, który nie tylko najpiękniej jak to możliwe zapisze wyjątkowe chwile, ale i doradzi, podpowie i doda otuchy wtedy, gdy będzie to konieczne? Trafiłeś w odpowiednie miejsce. Poznajmy się i umówmy na wspólną kawę. 
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA WADOWICE - ILE TO KOSZTUJE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Jeżeli szukasz fotografa ślubnego, warto wiedzieć, że możesz zamówić sesję narzeczeńską, sam reportaż w dniu ślubu (od przygotowań, po późne godziny nocne) oraz sesję ślubną w plenerze w Wadowicach. Są to główne składowe ceny usługi fotografa ślubnego. Dobra informacja jest taka, że jeżeli organizujesz ślub w Wadowicach i wybierzesz moje usługi odpadają Ci koszty dojazdu czy noclegu dla fotografa. Jestem z Krakowa i do Wadowic dojeżdżam gratis.
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
              imgsrc={slub_palac_goetz_portfolio}
              imgalt="pałac goetz, ślub humanistyczny Kraków"
              linkhref="palac-goetz-slub-humanistyczny"
              title="ŚLUB HUMANISTYCZNY KRAKÓW"
              names="KAROLINA i RYAN"
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
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={hotel_mercure_kasprowy_zakopane}
              imgalt="wesele w zakopanem, hotel mercury kasprowy, zespół ich troje na weselu"
              linkhref="wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje"
              title="WESELE W ZAKOPANEM"
              names="PATRYCJA i TOMASZ"
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