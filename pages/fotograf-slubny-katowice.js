import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";






const fotograf_slubny_portfolio_2023_603 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_603.webp";
const fotograf_slubny_portfolio_2023_604 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_604.webp";
const fotograf_slubny_portfolio_2023_605 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_605.webp";
const fotograf_slubny_portfolio_2023_606 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_606.webp";
const fotograf_slubny_portfolio_2023_607 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_607.webp";
const fotograf_slubny_portfolio_2023_608 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_608.webp";
const fotograf_slubny_portfolio_2023_609 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_609.webp";
const fotograf_slubny_portfolio_2023_610 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_610.webp";
const fotograf_slubny_portfolio_2023_611 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_611.webp";
const fotograf_slubny_portfolio_2023_613 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_613.webp";
const fotograf_slubny_portfolio_2023_614 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_614.webp";
const fotograf_slubny_portfolio_2023_615 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_615.webp";
const fotograf_slubny_portfolio_2023_616 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_616.webp";
const fotograf_slubny_portfolio_2023_617 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_617.webp";
const fotograf_slubny_portfolio_2023_618 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_618.webp";
const fotograf_slubny_portfolio_2023_619 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_619.webp";
const fotograf_slubny_portfolio_2023_620 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_620.webp";
const fotograf_slubny_portfolio_2023_621 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_621.webp";
const fotograf_slubny_portfolio_2023_622 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_622.webp";
const fotograf_slubny_portfolio_2023_623 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_623.webp";
const fotograf_slubny_portfolio_2023_624 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_624.webp";
const fotograf_slubny_portfolio_2023_625 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_625.webp";
const fotograf_slubny_portfolio_2023_626 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_626.webp";
const fotograf_slubny_portfolio_2023_627 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_627.webp";
const fotograf_slubny_portfolio_2023_628 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_628.webp";
const fotograf_slubny_portfolio_2023_629 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_629.webp";
const fotograf_slubny_portfolio_2023_630 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_630.webp";
const fotograf_slubny_portfolio_2023_631 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_631.webp";
const fotograf_slubny_portfolio_2023_632 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_632.webp";
const fotograf_slubny_portfolio_2023_634 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_634.webp";




const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "dworek_fantazja_skomielna_biala_fotograf.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_611
    },
    {
        image: fotograf_slubny_portfolio_2023_604
    },
    {
        image: fotograf_slubny_portfolio_2023_605
    },
    {
        image: fotograf_slubny_portfolio_2023_606
    },
    {
        image: fotograf_slubny_portfolio_2023_607
    },
    {
        image: fotograf_slubny_portfolio_2023_608
    },
    {
        image: fotograf_slubny_portfolio_2023_609
    },
    {
        image: fotograf_slubny_portfolio_2023_610
    },
    {
        image: fotograf_slubny_portfolio_2023_603
    },
    {
        image: fotograf_slubny_portfolio_2023_634
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_613
    },
    {
      image: fotograf_slubny_portfolio_2023_614
    },
    {
      image: fotograf_slubny_portfolio_2023_615
    },
    {
      image: fotograf_slubny_portfolio_2023_616
    },
    {
      image: fotograf_slubny_portfolio_2023_617
    },
    {
      image: fotograf_slubny_portfolio_2023_618
    },
    {
      image: fotograf_slubny_portfolio_2023_619
    },
    {
      image: fotograf_slubny_portfolio_2023_620
    },
    {
      image: fotograf_slubny_portfolio_2023_621
    },
    {
      image: fotograf_slubny_portfolio_2023_622
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_631
    },
    {
      image: fotograf_slubny_portfolio_2023_624
    },
    {
      image: fotograf_slubny_portfolio_2023_625
    },
    {
      image: fotograf_slubny_portfolio_2023_626
    },
    {
      image: fotograf_slubny_portfolio_2023_627
    },
    {
      image: fotograf_slubny_portfolio_2023_628
    },
    {
      image: fotograf_slubny_portfolio_2023_629
    },
    {
      image: fotograf_slubny_portfolio_2023_630
    },
    {
      image: fotograf_slubny_portfolio_2023_623
    },
    {
      image: fotograf_slubny_portfolio_2023_632
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Jak wygląda obróbka i kolorystyka zdjęć?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cenię sobie kolor i naturalność – podkreślam to przy samym fotografowaniu, jak i później, przy edycji. Dlatego też barwy zdjęć, które wykonuję i które później edytuję, nie odbiegają od rzeczywistości. Co z fotografiami czarno-białymi? Oddaję je tylko wtedy, jeśli naturalne kolory odciągają uwagę od głównego motywu zdjęcia i chcę, aby na pierwszy plan wysuwała się ciekawa faktura, emocje czy światłocień."
        }
    },{
        "@type": "Question",
        "name": "Jaki jest czas pracy fotografa ślubnego?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fotografowie w swoich ofertach posiadają często pakiety godzinowe, najczęściej od 10 do 12 godzin pracy. Zazwyczaj fotograf pracuje do oczepin lub paru minut po północy, ale coraz popularniejsze są reportaże kończące się około 22.00. Tak naprawdę wszystko zależy od indywidualnych ustaleń.  W mojej ofercie są pakiety dla par organizujących intymne ceremonie ślubne, oraz dla tych które chciałyby mieć całodzienny fotoreportaż."
        }
    },{
      "@type": "Question",
      "name": "Czy nasze fotografie zabezpieczane są przed ich utratą?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Utrata zdjęć jest tragedią dla par młodych. Możecie tego uniknąć, korzystając z usług profesjonalnego fotografa ślubnego, a nie fotoamatora, który o poniższym sposobie pracy i zabezpieczenia nawet nie słyszał. Fotografując, zapisuję zdjęcia jednocześnie na dwóch kartach pamięci, dodatkowo pracuję na dwóch aparatach jednocześnie, więc Wasze zdjęcia są automatycznie rejestrowane na czterech niezależnych kartach pamięci. Po powrocie do domu fotografie kopiuję na dwa dyski zewnętrzne. Dzień po ślubie Wasze zdjęcia mają już nie 4 kopie, a 6 kopii w niezależnych od siebie miejscach. Dzięki takim rozwiązaniom wiem, że reportaże moich par są bezpieczne."
      }
    },{
      "@type": "Question",
      "name": "Czy robisz sesje narzeczeńskie?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, uwielbiam tego rodzaju sesje. Jak się odbywają? Po prostu idziemy na przyjemny spacer, na którym wszyscy są zrelaksowani i pozytywnie nastawieni. Możemy wybrać się na wspólną eksplorację miasta, możemy też wybrać lokalizację na łonie natury. "
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ślubny Katowice"
      description="Fotograf ślubny Katowice"
      keywords="fotograf ślubny Katowice"
      url="https://99foto.pl/fotograf-slubny-katowice/"
      leadNames="PATRYCJA i KRZYSZTOF"
      leadTitle="DWOREK FANTAZJA SKOMIELNA BIAŁA i ŚLUB W STYLU GLAMOUR"
      leadUrl="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY KATOWICE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Jako fotograf ślubny przywiązuję wagę nie tylko do tego, aby Wasz reportaż ślubny był przepiękny – ogromnie ważne jest dla mnie aby był unikalny, niepowtarzalny oraz żebyście ze wzruszeniem i uśmiechem mogli po latach przeglądać swój album ślubny.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Nie lubię sztucznych, ustawianych kadrów i nie ingeruję w przebieg ślubu i wesela – czuję za to ogromną ekscytację tworząc fotografie ślubne z najważniejszego dnia w Waszym życiu. Emocje, jakie towarzyszą mi, są bardzo podobne do tych jakie Wy przeżywacie w dniu ślubu - ekscytujące oczekiwanie, poprzez wzruszenia podczas ceremonii, a kończąc na radosnej zabawie. To właśnie jest kwintesencja zdjęć ślubnych. Jeżeli szukasz <strong>najlepszego fotografa ślubnego na Śląsku</strong> to doskonale trafiłeś. Nazywam się Tomasz Prokop, mieszkam w Krakowie i zapraszam do mojego fotograficznego świata.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ŚLUBNY KATOWICE - JAKI POWINIEN BYĆ?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Poszukujecie świeżego i nowatorskiego spojrzenia na zdjęcia ślubne? Nie lubicie przesadnie pozowanych i sztucznie wyglądających fotografii? Jeszcze się nie znamy, a już mamy w kwestiach fundamentalnych wiele ze sobą wspólnego. Tworzę reportaż, który będzie wyjątkowych zapisem najważniejszych dni waszego życia, bez sztampy, powtarzalności i planowania. Dobry reportaż ślubny to kwestia obserwacji, skupienia się na historii i doprowadzenie do sytuacji, w której poszczególne zdjęcia układają się w spójną i przemyślaną całość.
        </Typography>


        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          KATOWICE - IDEALNE TŁO DLA FOTOGRAFII ŚLUBNEJ
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        W Katowicach waszą uwagę powinny zwrócić trzy miejsca. Centrum Katowic to idealne miejsce na miejską nowoczesną sesję ślubną. Z biegiem lat stolica województwa śląskiego bardzo zmieniła swoje oblicze. Tradycje śląskie są tu dalej widoczne, ale centrum miasta jest bardzo nowoczesne. To miejsce mocno industrialne pełne geometrycznych kształtów złagodzonych sporą ilością zieleni miejskiej. Katowicka Strefa Kultury jest ciekawym tłem dla sesji ślubnych. Dlatego też chętnie jest ono wybierane przez pary młode ze Śląska. Jako najbardziej fotogeniczny obiekt, idealny na miejskie plenery ślubne w Katowicach uznać trzeba katowicki Spodek. Hala  widowiskowo - sportowa Spodek jest jednym z symboli Katowic od wielu już lat. Na jego charakterystycznego kształtu odbywa się wiele różnych sesji zdjęciowych. 
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Bardzo dobrze też sprawdzi się Międzynarodowe Centrum Kongresowe. Niezwykła, bardzo geometryczna bryła budynku MCK wyróżnia się industrialną estetyką oraz niezwykłym designem. Tworzy jedno z najbardziej fotografowanych miejsc w całej Katowickiej Strefie Kultury. Idealnym tłem dla przeszklonego niezwykłego budynku jest zielona kaskadowo położona dolina prowadząca schodami aż do Spodka. Młode pary bardzo chętnie wybierają właśnie to miejsce jako swój plener ślubny w Katowickiej Strefie Kultury. 
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA KATOWICE - MIEJSCA NA SESJE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Sesje ślubną można też wykonać na Nikiszowcu to sesja na wskroś śląska, czerpiąca garściami z jego tradycji w dodatku w samym sercu regionu. Nikiszowiec jest dzielnicą Katowic o niepowtarzalnym i unikalnym klimacie. Jeśli chcecie cofnąć się w czasie i poczuć jak się mieszkało w dzielnicy robotniczej 100 lat temu, to Nikiszowiec jest ku temu idealny. Zbudowane z czerwonej cegły trzykondygnacyjne bloki tworzą czworoboczne osiedla z wewnętrznymi dziedzińcami. Cała dzielnica jest żywym pomnikiem kultury śląskiej. Tą właśnie atmosferę odczuwalną na każdym kroku idealnie daje się wpleść w organizowane plenery ślubne na Nikiszowcu. Czerwone budynki naznaczone zębem czasu, ceglane mury porośnięte bluszczem, ścieżki i uliczki pełne zakamarków, bram i łuków dają nieskończone możliwości ciekawych i romantycznych kadrów w industrialnym śląskim stylu.  
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA KATOWICE - PAMIĄTKA NA LATA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Każde wydarzenie ma swoją historię, treść i swoistą moc którą trzeba dostrzec i umiejętnie zapisać. Czyli zrobić ponadczasowe zdjęcia, które będą wyraźnym echem tamtych chwil. Warto pamiętać, że za 20, 30 i więcej lat kolejne pokolenia będą wpatrywać się w te wspomnienia. Zastanówmy się co chcemy im przekazać. Jaką wartość mają nieść ze sobą Wasze historie. Jak mają być zapamiętane i jak opowiedziane.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Nie ma jednoznacznej definicji. To składowa wielu zdarzeń: –  doświadczenia fotografa, jego umiejętności, wyczucia, jego wrażliwości i techniki. Tego w jaki sposób obserwuje wydarzenie, jak postrzega światło, jakich technik używa. Czy wie w jaki sposób opowie historię, czy po prostu improwizuje. Na tym polega magia fotografii, że każdy twórca inaczej widzi. Inaczej opowiada, i to że opowieści są różne daje nam pole wyboru. Wy możecie zdecydować jak Wasze wspomnienia zostaną opowiedziane. Pamiętajcie, że każda Wasza Historia jest warta zapamiętania.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA KATOWICE - BLISKO CZY DALEKO
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Jako fotograf ślubny przywiązuję ogromną wagę do tego by tworzyć dla Was niepowtarzalne zdjęcia ślubne, które skrupulatnie układam w historie miłosne, tak aby oddać w Wasze ręce unikalny reportaż ślubny, który będzie zwieńczeniem tego wyjątkowego dnia. Oglądając swoje fotografie ślubne będziecie nie tylko wspominać jak wyglądaliście w dniu ślubu, ale również jak się czuliście w tych magicznych chwilach. Dużą uwagę zwracam także na Wasze otoczenie, rodzinę i znajomych, ponieważ wiem, że relacje z najbliższymi będą po latach dla Was jedną z najcenniejszych pamiątek ze ślubu i wesela. Każdy fotograf ślubny opowiada na swój sposób historie miłosne - jeśli chcecie abym to właśnie ja napisał Waszą, to koniecznie musimy się poznać! 
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