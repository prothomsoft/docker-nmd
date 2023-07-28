import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";


const fotograf_slubny_portfolio_2023_333 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_333.webp";
const fotograf_slubny_portfolio_2023_334 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_334.webp";
const fotograf_slubny_portfolio_2023_335 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_335.webp";
const fotograf_slubny_portfolio_2023_337 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_337.webp";
const fotograf_slubny_portfolio_2023_338 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_338.webp";
const fotograf_slubny_portfolio_2023_339 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_339.webp";
const fotograf_slubny_portfolio_2023_340 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_340.webp";
const fotograf_slubny_portfolio_2023_341 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_341.webp";
const fotograf_slubny_portfolio_2023_342 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_342.webp";
const fotograf_slubny_portfolio_2023_344 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_344.webp";
const fotograf_slubny_portfolio_2023_345 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_345.webp";
const fotograf_slubny_portfolio_2023_346 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_346.webp";
const fotograf_slubny_portfolio_2023_347 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_347.webp";
const fotograf_slubny_portfolio_2023_348 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_348.webp";
const fotograf_slubny_portfolio_2023_352 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_352.webp";
const fotograf_slubny_portfolio_2023_355 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_355.webp";
const fotograf_slubny_portfolio_2023_356 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_356.webp";
const fotograf_slubny_portfolio_2023_357 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_357.webp";
const fotograf_slubny_portfolio_2023_358 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_358.webp";
const fotograf_slubny_portfolio_2023_359 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_359.webp";
const fotograf_slubny_portfolio_2023_360 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_360.webp";
const fotograf_slubny_portfolio_2023_361 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_361.webp";
const fotograf_slubny_portfolio_2023_362 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_362.webp";
const fotograf_slubny_portfolio_2023_363 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_363.webp";
const fotograf_slubny_portfolio_2023_366 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_366.webp";
const fotograf_slubny_portfolio_2023_367 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_367.webp";
const fotograf_slubny_portfolio_2023_368 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_368.webp";
const fotograf_slubny_portfolio_2023_658 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_658.webp";
const fotograf_slubny_portfolio_2023_659 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_659.webp";
const fotograf_slubny_portfolio_2023_660 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_660.webp";

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "dom_weselny_mogielica_fotograf_slubny_mszana.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_333
    },
    {
        image: fotograf_slubny_portfolio_2023_334
    },
    {
        image: fotograf_slubny_portfolio_2023_335
    },
    {
        image: fotograf_slubny_portfolio_2023_363
    },
    {
        image: fotograf_slubny_portfolio_2023_338
    },
    {
        image: fotograf_slubny_portfolio_2023_337
    },
    {
        image: fotograf_slubny_portfolio_2023_339
    },
    {
        image: fotograf_slubny_portfolio_2023_342
    },
    {
        image: fotograf_slubny_portfolio_2023_341
    },
    {
        image: fotograf_slubny_portfolio_2023_340
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_367
    },
    {
      image: fotograf_slubny_portfolio_2023_344
    },
    {
      image: fotograf_slubny_portfolio_2023_345
    },
    {
      image: fotograf_slubny_portfolio_2023_346
    },
    {
      image: fotograf_slubny_portfolio_2023_347
    },
    {
      image: fotograf_slubny_portfolio_2023_348
    },
    {
      image: fotograf_slubny_portfolio_2023_366
    },
    {
      image: fotograf_slubny_portfolio_2023_658
    },
    {
      image: fotograf_slubny_portfolio_2023_659
    },
    {
      image: fotograf_slubny_portfolio_2023_352
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_368
    },
    {
      image: fotograf_slubny_portfolio_2023_660
    },
    {
      image: fotograf_slubny_portfolio_2023_355
    },
    {
      image: fotograf_slubny_portfolio_2023_356
    },
    {
      image: fotograf_slubny_portfolio_2023_357
    },
    {
      image: fotograf_slubny_portfolio_2023_358
    },
    {
      image: fotograf_slubny_portfolio_2023_359
    },
    {
      image: fotograf_slubny_portfolio_2023_361
    },
    {
      image: fotograf_slubny_portfolio_2023_360
    },
    {
      image: fotograf_slubny_portfolio_2023_362
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Gdzie można zobaczyć przykłady Pana prac?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Na moim blogu macie możliwość zapoznania się z przykładowymi historiami ślubnymi, które pokazują namiastkę moich fotograficznych umiejętności. Jeżeli dotychczasowe sesje przypadły Wam do gustu zapraszam do kontaktu, a wspólnie uzyskamy równie imponujące wizualnie zdjęcia z Waszym udziałem."
        }
    },{
        "@type": "Question",
        "name": "Czy goście weselni powinni fotografować ślub?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Posłuchajcie moich rad i zaproponujcie swoim gościom pozostawienie telefonów w domu. Tak to nie jest możliwe i o ile w fotografowaniu z miejsca, w którym się stoi nie ma nic złego to wchodzenie fotografowi w kadr powinno być zabronione."
        }
    },{
      "@type": "Question",
      "name": "Kiedy powinno się rezerwować fotografa na ślub?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fotografa na ślub najlepiej wybrać z dwuletnim wyprzedzeniem. Wynika to z faktu, że bardzo często inni usługodawcy, tacy jak sale weselne, czy zespoły muzyczne podpisują umowy z właśnie takim wyprzedzeniem."
      }
    },{
      "@type": "Question",
      "name": "Czy sesja ślubna w wybranym dniu po ślubnie to dobry pomysł?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oczywiście, że tak. Goście weselni lepiej bawią sie na parkiecie, jeżeli widzą na nim uśmiechniętą Parę Młodę. Pozostawianie naszych gości na dłuższy czas może być nietaktowne. Zróbmy więc kilka zdjęć przed salą weselną, a cały plener w dodatkowym, wybranym dniu po ślubie."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ślubny Tarnów"
      description="Fotograf ślubny Tarnów, reportaż ślubny w Tarnowie, miejsca na plener"
      keywords="fotograf ślubny Tarnów, reportaż ślubny w Tarnowie, miejsca na plener"
      url="https://99foto.pl/fotograf-slubny-tarnow/"
      leadNames="NATALIA i KRZYSZTOF"
      leadTitle="DOM WESELNY MOGIELICA JURKÓW, RUSTYKALNE WESELE"
      leadUrl="/dom-weselny-mogielica-jurkow-rustykalne-wesele"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY TARNÓW
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Udział w wielu szkoleniach, warsztatach, dopracowywanie kunksztu fotograficznego i fotografowania ślubów, nowe wyzwania każdego tygodnia doprowadziły do sytuacji, w której mogę powiedzieć, że umiem robić zdjęcia. Przez ostatnie lata i po dziesiątkach wykonanych reportaży, w fotografii ślubnej czuje się bardzo naturalnie. Człowiek uczy się jednak przez cały życie, dlatego na każdy reportaż, mimo przygotowania i pewności siebie, idę z lekkim wahaniem. Fotografia ślubna to jedna wielka przygoda.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Fotografia ślubna to głównie praca z ludźmi – w czasie przygotowań, na ślubie czy w trakcie sesji ślubnej mamy do czynienia przecież z ludźmi. Każde wesele jest inne, dlatego właśnie uwielbiam ten tryb pracy. Na każdym reportażu poznaję wielu ciekawych ludzi, z którymi często długo po weselu utrzymuję kontakt. Jeżeli szukasz <strong>najlepszego fotografa ślubnego w Tarnowie</strong> to doskonale trafiłeś. Nazywam się Tomasz Prokop, mieszkam w Krakowie i zapraszam do kontaktu.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ŚLUBNY TARNÓW - APARATY BEZLUSTERKOWE?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Pracuję na profesjonalnych aparatach bezlusterkowych marki Nikon. Zawsze mam ze sobą kilka przydatnych obiektywów, dzięki którym mogę pracować tak, jak trzeba, o lampach i innych tego typu sprzętach nie wspominając. W pracę wkładam całe swoje zaangażowanie, uśmiech i pomocną dłoń. Na każdym reportażu jestem po prostu sobą. Chcesz wiedzieć coś więcej na mój temat? Umówmy się na kawę i porozmawiajmy.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA W TARNÓWIE - WYZWANIE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Trzeba wiedzieć, że fotografia ślubna to niełatwa dziedzina. Dobry reportaż ślubny jest bardzo wymagający. Trzeba być nie tylko sprawnym technicznie, ale przede wszystkim wrażliwym na otoczenie, na światło. Trzeba umieć w otaczającym nas chaosie stworzyć dość prosty, uporządkowany kadr, który poruszy emocje widza. Intuicja, empatia do ludzi i świetna kondycja fizyczna są to niezwykle istotne elementy, bez których nie wyobrażam sobie pracy w roli fotografa ślubnego. Dwanaście godzin biegania z aparatem potrafi zmęczyć najsprawniejszego sportowca.
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Dla mnie jednak bardziej męczące od wysiłku fizycznego jest przebywanie w stanie permanentnej koncentracji. Trzeba być w pełnej gotowości, gdyż najpiękniejsze momenty trwają dosłownie ułamek sekundy. Drobne zawahanie spowoduje utratę świetnego zdjęcia.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ŚLUBNY TARNÓW - FOTOGRAF RODZINNY
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Jako mąż i tata, wiem jak ważna jest potęga emocji i bliskości. Gdy wybieram się jako fotograf na wesele, widzę to, czego nie dostrzegają inni. Śmiech, łzy wzruszenia, wygłupy dzieciaków. Wszystko uwiecznię, abyście cieszyli się rodzinnymi wspomnieniami przez lata.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA TARNÓW - FOTOGRAF OBSERWUJĄCY
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Mam dobre “oko” do sytuacji, nic mi nie umknie! Dobry reportaż ślubny to taki, w którym zawarte są w stu procentach niepowtarzalne momenty. To Wam gwarantuję.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF PRZYJAZNY I DYSKRETNY
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Fotograf na ślub to także “kumpel”, który doradzi, uspokoi i pomoże. Wykorzystam swoje bogate doświadczenie, by być wsparciem. Jestem również dyskretny i kiedy trzeba niedostrzegalny. Umiem uszanować intymność najważniejszych momentów podczas ślubu, ale nie zaniedbam żadnego kadru.
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
            <Image quality={100} src={props.item.image} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        </Box>
    )
}

export default PageComponent;