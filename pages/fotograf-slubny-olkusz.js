import LayoutSitePage from "../components/layoutSitePage";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Carousel from 'react-material-ui-carousel'
import FaqAccordion from "../components/faqAccordion";

const fotograf_slubny_portfolio_2023_188 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_188.webp";
const fotograf_slubny_portfolio_2023_189 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_189.webp";
const fotograf_slubny_portfolio_2023_190 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_190.webp";
const fotograf_slubny_portfolio_2023_191 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_191.webp";
const fotograf_slubny_portfolio_2023_192 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_192.webp";
const fotograf_slubny_portfolio_2023_193 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_193.webp";
const fotograf_slubny_portfolio_2023_194 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_194.webp";
const fotograf_slubny_portfolio_2023_195 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_195.webp";
const fotograf_slubny_portfolio_2023_196 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_196.webp";
const fotograf_slubny_portfolio_2023_197 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_197.webp";
const fotograf_slubny_portfolio_2023_199 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_199.webp";
const fotograf_slubny_portfolio_2023_200 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_200.webp";
const fotograf_slubny_portfolio_2023_201 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_201.webp";
const fotograf_slubny_portfolio_2023_202 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_202.webp";
const fotograf_slubny_portfolio_2023_203 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_203.webp";
const fotograf_slubny_portfolio_2023_204 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_204.webp";
const fotograf_slubny_portfolio_2023_206 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_206.webp";
const fotograf_slubny_portfolio_2023_207 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_207.webp";
const fotograf_slubny_portfolio_2023_208 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_208.webp";
const fotograf_slubny_portfolio_2023_209 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_209.webp";
const fotograf_slubny_portfolio_2023_210 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_210.webp";
const fotograf_slubny_portfolio_2023_211 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_211.webp";
const fotograf_slubny_portfolio_2023_212 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_212.webp";
const fotograf_slubny_portfolio_2023_213 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_213.webp";
const fotograf_slubny_portfolio_2023_214 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_214.webp";
const fotograf_slubny_portfolio_2023_215 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_215.webp";
const fotograf_slubny_portfolio_2023_216 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_216.webp";
const fotograf_slubny_portfolio_2023_217 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_217.webp";
const fotograf_slubny_portfolio_2023_218 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_218.webp";
const fotograf_slubny_portfolio_2023_219 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_219.webp";


const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "dworzyszcze_wola_reportaz_slubny_pod_krakowem_start.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_189
    },
    {
        image: fotograf_slubny_portfolio_2023_188
    },
    {
        image: fotograf_slubny_portfolio_2023_190
    },
    {
        image: fotograf_slubny_portfolio_2023_191
    },
    {
        image: fotograf_slubny_portfolio_2023_192
    },
    {
        image: fotograf_slubny_portfolio_2023_194
    },
    {
        image: fotograf_slubny_portfolio_2023_193
    },
    {
        image: fotograf_slubny_portfolio_2023_195
    },
    {
        image: fotograf_slubny_portfolio_2023_196
    },
    {
        image: fotograf_slubny_portfolio_2023_197
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_219
    },
    {
      image: fotograf_slubny_portfolio_2023_199
    },
    {
      image: fotograf_slubny_portfolio_2023_201
    },
    {
      image: fotograf_slubny_portfolio_2023_200
    },
    {
      image: fotograf_slubny_portfolio_2023_202
    },
    {
      image: fotograf_slubny_portfolio_2023_203
    },
    {
      image: fotograf_slubny_portfolio_2023_204
    },
    {
      image: fotograf_slubny_portfolio_2023_218
    },
    {
      image: fotograf_slubny_portfolio_2023_206
    },
    {
      image: fotograf_slubny_portfolio_2023_209
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_208
    },
    {
      image: fotograf_slubny_portfolio_2023_210
    },
    {
      image: fotograf_slubny_portfolio_2023_207
    },
    {
      image: fotograf_slubny_portfolio_2023_211
    },
    {
      image: fotograf_slubny_portfolio_2023_214
    },
    {
      image: fotograf_slubny_portfolio_2023_213
    },
    {
      image: fotograf_slubny_portfolio_2023_212
    },
    {
      image: fotograf_slubny_portfolio_2023_215
    },
    {
      image: fotograf_slubny_portfolio_2023_216
    },
    {
      image: fotograf_slubny_portfolio_2023_217
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Jakie miejsce na plener w okolicach Olkusza?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pustynia Błędowska, Zielone Jeziorka w miejscowości Klucze, Góra Zborów i zakątki Jury Krakowsko-Częstochowskiej to miejsca świetne na plener ślubny. Doskonałym miejscem jest też Zamek w Ogrodzieńcu."
        }
    },{
        "@type": "Question",
        "name": "Ile czasu trwa plener ślubny?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plener ślubny trwa zazwyczaj kilka godzin, zwykle trzy, czasami cztery godziny. Nie należy obawiać się i krępować przy mojej obecności. Kluczem do wspaniałego pleneru ślubnego jest stworzenie luźniej i swobodnej atmosfery, o co ja osobiście zadbam. Staniemy się dobrymi znajomymi, dzięki czemu sesja plenerowa będzie dla Was wielką przyjemnością."
        }
    },{
      "@type": "Question",
      "name": "Kto może pomóc w organizacji wesela?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lista podwykonawców jest naprawdę długa. Zacznijmy od konsultanta ślubnego, następnie musimy zarezerwować salę i zespół weselny. Później fotografa i czasami kamerzystę. Często też zespół weselny zastępuje DJ i organizator zabaw dla najmłodszych gości czyli animator. Przyda nam się też fajny samochód z kierowcą."
      }
    },{
      "@type": "Question",
      "name": "Co składa się na koszt fotografii ślubnej?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fotografowie ślubni oferuje kilka różnorodnych pakietów, z których każdy różni się ceną oraz zawartością: liczbą godzin pracy fotografa, zakresem usług np. dodatkowa sesja plenerowa w innym dniu oraz ilością zdjęć oraz dodatków jak np. odbitki, albumy, nośnik danych. To te czynniki mają wpływ na końcową cenę usługi fotograficznej."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ślubny Olkusz"
      description="Fotograf ślubny Olkusz, ślub w Olkuszu, reportaż ze ślubu"
      keywords="fotograf ślubny Olkusz, ślub w Olkuszu, reportaż ze ślubu"
      url="https://99foto.pl/fotograf-slubny-olkusz/"
      leadNames="SYLWIA i MICHAŁ"
      leadTitle="WESELE W STYLU BOHO, SALA DWORZYSZCZE WOLA, KRAKÓW"
      leadUrl="/wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY OLKUSZ
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Wybór właściwego fotografa ślubnego w Olkuszu jest bardzo istotną sprawą podczas organizacji wesela. Czy wyobrażacie sobie, aby Wasze wesele odbyło się bez obecności fotografa ślubnego? Na pewno nie. Fotograf to osoba, która pozwoli zapamiętać Wam każdy, nawet najdrobniejszy szczegół z Waszego wesela. Jest to naprawdę ważne, ponieważ ten wyjątkowy klimat, tworzą najmniejsze detale, o których niestety z czasem zapominamy.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Jeżeli więc zależy Wam na wspaniałej fotografii ślubnej w Olkuszu to świetnie trafiliście. Pozwólcie, że się przedstawię - nazywam się Tomek Prokop i podpowiem Wam na co zwrócić uwagę, wybierając <strong>odpowiedniego fotografa na Wasze wesele w Olkuszu</strong>.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
           JAKI POWINIEN BYĆ FOTOGRAF ŚLUBNY Z OLKUSZA?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
          Fotograf ślubny powinien mieć doświadczenie w pracy z parami młodymi, znać techniki fotografowania i generalnie potrafić robić zdjęcia. Powinien też być elastyczny i potrafić dostosować się do potrzeb i oczekiwań klientów. Ważne, aby fotograf ślubny był także osobą, z którą młoda para czuje się swobodnie i komfortowo, ponieważ w ten sposób zdjęcia będą bardziej autentyczne.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          JAKIEGO FOTOGRAFA WYBRAĆ?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Najlepiej wybrać mnie. Koniecznie powinniście sprawdzić moje wcześniejsze realizacje i zapytać o rekomendacje znajomych lub osoby udzielające się na forach tematycznych.
        Zachęcam także do spotkania na kawie. Sprawdźcie kim jestem. Nić porozumienia na innej stopie niż zawodowa, pomoże Wam opanować skrępowanie, a być może ograniczy stres towarzyszący pozowaniu do zdjęć w dniu ślubu.
        Obiecuję, że miło spędzimy czas, a Wy poznacie wszystkie niuansy związane z fotografowaniem ślubu.
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          OLKUSZ - MIEJSCA NA ŚLUB I SESJĘ W PLENERZE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        W Olkuszu istnieje kilka miejsc, w których można zorganizować ślub i plener ślubny. Oto kilka możliwości - Zamek w Olkuszu, Pałac w Olkuszu, Hotel & SPA Zamek Gniew - to nowoczesny hotel, który oferuje przestronne sale do organizacji ślubów i plenerów, Park miejski - to piękny teren zielony i Dwór w Olkuszu. Finalna decyzja należy do Was.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA OLKUSZ - OKO REPORTAŻYSTY
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Zajmuję się reportażem ślubnym oraz sesjami w plenerze. Zależy mi na tym, aby zdjęcia ślubne, były naturalne i pełne emocji. 
        Emocje na zdjęciach ślubnych są mega ważne, bo to one są najlepszym nośnikiem wspomnień. Fotograf ślubny w Olkuszu, który unika reżyserowania i ciągłego dyrygowania Wami? Zapraszam do wypełnienia formularza kontaktowego.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Jeśli szukają Państwo profesjonalnego fotografa ślubnego w Olkuszu, to warto rozpocząć od zasięgnięcia opinii wśród znajomych i rodziny oraz przejrzenia portfolio różnych fotografów i porównania ich stylów i cen. Ważne, aby wybrać fotografa, który spełnia wszystkie oczekiwania i jest w stanie stworzyć piękną pamiątkę na lata.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA OLKUSZ - ILE TO KOSZTUJE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
          Cena za usługi fotograficzne związane z ślubem może się różnić w zależności od doświadczenia fotografa, jakości sprzętu, ilości godzin pracy lub liczby wykonanych zdjęć. Niskie ceny to takie z przedziału do trzech tysięcy złotych za reportaż, średni pułap cen wpada pomiędzy trzy, a cztery tysiące złotych za reportaż. Wysoki pułap cen to ceny powyżej czterech tysięcy złotych za reportaż. Nie warto decydować się na najtańszą opcję, ponieważ zdjęcia ślubne to pamiątka na lata i należy zadbać o ich jakość. Z drugiej strony, warto pamiętać, że cena nie zawsze jest wyznacznikiem jakości i warto poszukać fotografa, który jest w stanie zaoferować dobrą usługę w rozsądnej cenie.
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