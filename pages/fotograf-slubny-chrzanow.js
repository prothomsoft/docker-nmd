import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";

const fotograf_slubny_portfolio_2023_301 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_301.webp";
const fotograf_slubny_portfolio_2023_302 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_302.webp";
const fotograf_slubny_portfolio_2023_303 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_303.webp";
const fotograf_slubny_portfolio_2023_304 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_304.webp";
const fotograf_slubny_portfolio_2023_305 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_305.webp";
const fotograf_slubny_portfolio_2023_306 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_306.webp";
const fotograf_slubny_portfolio_2023_307 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_307.webp";
const fotograf_slubny_portfolio_2023_308 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_308.webp";
const fotograf_slubny_portfolio_2023_309 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_309.webp";
const fotograf_slubny_portfolio_2023_310 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_310.webp";
const fotograf_slubny_portfolio_2023_311 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_311.webp";
const fotograf_slubny_portfolio_2023_312 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_312.webp";
const fotograf_slubny_portfolio_2023_313 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_313.webp";
const fotograf_slubny_portfolio_2023_314 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_314.webp";
const fotograf_slubny_portfolio_2023_315 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_315.webp";
const fotograf_slubny_portfolio_2023_316 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_316.webp";
const fotograf_slubny_portfolio_2023_318 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_318.webp";
const fotograf_slubny_portfolio_2023_321 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_321.webp";
const fotograf_slubny_portfolio_2023_323 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_323.webp";
const fotograf_slubny_portfolio_2023_324 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_324.webp";
const fotograf_slubny_portfolio_2023_325 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_325.webp";
const fotograf_slubny_portfolio_2023_326 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_326.webp";
const fotograf_slubny_portfolio_2023_327 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_327.webp";
const fotograf_slubny_portfolio_2023_329 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_329.webp";
const fotograf_slubny_portfolio_2023_330 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_330.webp";
const fotograf_slubny_portfolio_2023_331 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_331.webp";
const fotograf_slubny_portfolio_2023_675 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_675.webp";
const fotograf_slubny_portfolio_2023_679 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_679.webp";
const fotograf_slubny_portfolio_2023_682 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_682.webp";
const fotograf_slubny_portfolio_2023_683 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_683.webp";

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "fotograf_slubny_wesele_mogilany_krakow.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_303
    },
    {
        image: fotograf_slubny_portfolio_2023_301
    },
    {
        image: fotograf_slubny_portfolio_2023_302
    },
    {
        image: fotograf_slubny_portfolio_2023_675
    },
    {
        image: fotograf_slubny_portfolio_2023_304
    },
    {
        image: fotograf_slubny_portfolio_2023_305
    },
    {
        image: fotograf_slubny_portfolio_2023_306
    },
    {
        image: fotograf_slubny_portfolio_2023_307
    },
    {
        image: fotograf_slubny_portfolio_2023_308
    },
    {
        image: fotograf_slubny_portfolio_2023_309
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_310
    },
    {
      image: fotograf_slubny_portfolio_2023_311
    },
    {
      image: fotograf_slubny_portfolio_2023_312
    },
    {
      image: fotograf_slubny_portfolio_2023_313
    },
    {
      image: fotograf_slubny_portfolio_2023_316
    },
    {
      image: fotograf_slubny_portfolio_2023_314
    },
    {
      image: fotograf_slubny_portfolio_2023_315
    },
    {
      image: fotograf_slubny_portfolio_2023_679
    },
    {
      image: fotograf_slubny_portfolio_2023_318
    },
    {
      image: fotograf_slubny_portfolio_2023_331
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_330
    },
    {
      image: fotograf_slubny_portfolio_2023_321
    },
    {
      image: fotograf_slubny_portfolio_2023_325
    },
    {
      image: fotograf_slubny_portfolio_2023_323
    },
    {
      image: fotograf_slubny_portfolio_2023_324
    },
    {
      image: fotograf_slubny_portfolio_2023_682
    },
    {
      image: fotograf_slubny_portfolio_2023_326
    },
    {
      image: fotograf_slubny_portfolio_2023_327
    },
    {
      image: fotograf_slubny_portfolio_2023_683
    },
    {
      image: fotograf_slubny_portfolio_2023_329
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Ile kosztuje fotograf i kamerzysta na wesele w Chrzanowie?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oferta reportażu ślubnego może być korzystna, kiedy zapytacie o pakiet foto-video. Pamiętajcie jednak, by nie był oferowany przez jedną osobę i nazwany fotografią hybrydową. Film ślubny to nie tylko ruchome kadry ale też dziwięk, którego rejestracja jest pracochłonna. W mojej ofercie znajdziecie zdjęcia ślubne, ale znajomych kamerzystów znam kilku i mogę polecić wysyłając ich listę na Twój adres email."
        }
    },{
        "@type": "Question",
        "name": "Ile zdjęć znajdę w Twoim pakiecie ślubnym?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pierwsze pytanie na które musimy sobie odpowiedzieć to ile zdjęć potrzeba by ułożyć fotoksiążkę o grubości sto czterdzieści stron w formacie 30x30cm. Każdego roku układam blisko czterdzieście takich książek i powiem Wam jedno, można tam z powodzeniem zmieścić blisko 400 zdjęć ślubnych. Fotografując Wasz ślub zrobię więc wszystko, by stworzyć minimum czterysta pięćdziesiąt unikalnych niepowtarzających się kadrów ślubnych. Praca niełatwa, ale mega satysfakcjonująca. "
        }
    },{
      "@type": "Question",
      "name": "Ile czasu pracujesz na naszym ślubie jako fotograf ślubny w Chrzanowie?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zdjęcia zaczynają się wcześnie rano od makijażu Panny Młodej. W dniu ślubu jestem z Wami często ponad szesnaście godzim. Czas dobrze i miło spędzony. Spotykamy się jeszcze na plener ślubny w wybranym dniu po ślubie. Przegadamy wiele tematów i poznamy się doskonale."
      }
    },{
      "@type": "Question",
      "name": "Zdjęcia tylko na pendrive czy także w albumie fotograficznym?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kadry z Waszego dnia ślubu są tak ważne, że po prostu trzeba je profesjonalnie wydrukować. Wszystkie zdjęcia otrzymacie również w postaci cyfrowej na pendrive w etui. "
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ślubny Chrzanów"
      description="Fotograf ślubny Chrzanów, zwyczaje weselne w Chrzanowie, wyjątkowe miejsca plenerowe"
      keywords="fotograf ślubny Chrzanów, zwyczaje weselne w Chrzanowie, wyjątkowe miejsca plenerowe"
      url="https://99foto.pl/fotograf-slubny-chrzanow/"
      leadNames="NATALIA i KACPER"
      leadTitle="WESELE EUFORIA MYŚLENICE, PLENER ŚLUBNY DWÓR MOGILANY"
      leadUrl="/wesele-euforia-myslenice-plener-slubny-dwor-mogilany"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY CHRZANÓW
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Wyczekana sobota, godzina piętnasta w Kościele, wszystko przygotowane na ten ważny dzień. Wstajesz rano i myślisz,  czy na pewno wszystko się uda, czy wszyscy goście pojawią się na imprezie, czy kwiaty dotrą na czas, czy makijaż i fryzura będą równie dobre jak te na próbach. Wiadomo, że czujesz lekki stres, rodzina rozwiewa Twoje wątpliwości i mówi, że wszystko będzie dobrze. Może w tym momencie myślisz, że przydałby się ktoś doświadczony, kto widział już dziesiątki ślubów, ktoś taki kto wie z której strony w kościele zwykle stoi Panna Młoda. Zwykle przed czasem możesz spodziewać się człowieka, który mając ze sobą doświadczenie zna odpowiedzi na wszystkie ślubne pytania, jest w stanie rozładować stres i rozluźnić atmosferę. Twój fotograf ślubny w Chrzanowie?
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Poszukując fotografa pamiętajcie, że warto postawić na doświadczenie. Dzień ślubu to mega ważny dzień w którym wszystko dzieje się super szybko. Umiejętność przewidywania zdarzeń i doskonale ułożony plan dnia pozwoli nam uniknąć niespodzianek. <strong>Najlepszy fotograf ślubny w Chrzanowie</strong> to taki, który wie kiedy wcisnąć spust migawki i utrwalić najważniejsze chwile. Nazywam się Tomek Prokop, mieszkam w Krakowie i zapraszam do mojego fotograficznego świata.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ŚLUBNY CHRZANÓW - JAKI POWINIEN BYĆ?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
          Fotograf ślubny to człowiek na którego możesz liczyć i polegać na jego doświadczeniu. Jako Panna Młoda powinnaś również czuć się dobrze i swobodnie w towarzystwie fotografa ślubnego. Na początku nikt nie wie jakie zachowania są dobrze odbierane przez ludzi, a jakie zachowania ludzi od nas odpychają. Fotografując kolejny ślub i otrzymując zlecenia od znajomych Par Młodych zadowolonych z wykonanego reporażu ślubnego, zaczynasz wierzyć w swój warsztat i nabierasz pewności co do swojej osoby. Nieustanne doskonalenie swoich umiejętności to mega ważna rzecz, która przydaje się w życiu, a w szczególności w fotografii ślubnej. Otwartość jest kluczem do osiągnięcia sukcesu w tej branży.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          CZY ISTNIEJĄ FAJNE MIEJSCE PLENEROWE W CHRZANOWIE?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Chrzanów, może być traktowany jako idealna baza wypadowa. Na liście polecanych miejsc plenerowych w okolicach Chrzanowa musimy wpisać Park Gródek w Jaworznie, zwany Polskimi Malediwami, Park Śląski w Katowicach z wesołym miasteczkiem i planetarium. Zamek w Rabszytnie, który po gruntownej renowacji zachwyca nas swoja potęgą, Zamek w Ogrodzieńcu, perełka Jury Krakowsko-Częstochowskiej, miejsce gdzie mieszkał Janosik. Nie zapominajmy też o Zamku w Suchej Beskidzkiej, który śmiało może konkurować z Wawelem. 
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Całkiem niedaleko jest też Muzeum Zamkowe w Pszczynie i piękny Park Pszczyński. Wszystkie te miejsca czakają na Was i proszę się o plener ślubny lub sesję narzeczeńską.Bez względu na to czy lubicie przyrodę, czy szum miasta i obecność ludzi, znajdziecie coś dla siebie. Wszystko zależy od indywidualnych preferencji i stylu pary młodej.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          CHRZANÓW - FOTOGRAF ŚLUBNY W PAKIECIE Z FILMEM
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Obserwując ulubionych fotografów publikujących informacje o swojej pracy na kanale YouTube, dowiadujemy się, że wprowadzenie aparatów bezlusterkowych i łatwe przełączenie funkcji aparatu z fotografowania na filmowanie, utworzył nową dziedzinę reportażu ślubnego zwanego reportażem hybrydowym. Jeden człowiek, jednocześnie fotografuje i wykonuje krótkie filmiki, które można zmontować w teledysk ślubny. Jeżeli poszukujecie fotografa, który wykona dla Was taki film to niestety nie najlpiej trafiliście. Moja specjalizacja to fotografia ślubna, tej dziedzie poświęcam sto procent swojej uwagi i wykonywanie dwóch rzeczy filmów i zdjęć jednocześnie jest moim zdaniem niewykonalne. Pamiętajcie, jak coś jest do wszystkiego to jest do niczego. Szukacie dalej..., a może dobre zdjęcia z Waszego ślubu wystarczą? Serdeczenie zapraszam do skorzystania z moich usług fotograficznych w Chrzanowie.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA CHRZANÓW - PONADCZASOWOŚĆ ZDJĘĆ
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Fajnie tak usiąść przy choince, otworzyć album ze zdjęciami i zanurzyć się we wspomnieniach. Prosta sprawa, bardzo powtarzalna, bo choinkę w naszych domach mamy każdego roku. Pomyślcie więc, ile przyjemności podczas oglądania czeka na Was gdy zdecydujecie się zapisać wspomnienia na kartach pamięci i stronach albumu fotograficznego. Może to wydawać się kosztowne, ale na coś trzeba w końcu wydawać te pieniądze... Uwierzcie mi, że ten album to jest bardzo dobry pomysł.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Szukasz profesjonalnego fotografa ślubnego w Chrzanowie? Świetnie trafiłeś, mam nadzieje spełnić wszystkie Twoje fotograficzne oczekiwania i jestem w stanie stworzyć piękną pamiątkę na lata.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          CENY, KOSZTY - FOTOGRAFIA ŚLUBNA CHRZANÓW
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
          Tanio i dobrze być nie może, to prawda, ale pamiętajcie, by nie przepłacać, kupując marzenia. Poszukując fotografa postawcie na jego doświadczenie, zapytajcie jakim dysponuje sprzętem.
          Koniecznie sprawdźcie portfolio i umówcie sie na spotkanie. Ludzie w tej branży są niesamowici, ale jest też spora ekipa, która przygodę z fotografią rozpoczęła od zakupu sprzętu z dofinansowania na firmę, a zdjęcia robi wyłącznie dla pieniędzy.
          Postawcie na osoby sprawdzone, polecane, pasjonatów, którzy pomimo trudności pracują w zawodzie od lat. W ten sposób zyskacie wspaniałe zdjecia.
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