import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";



const fotograf_slubny_portfolio_2023_410 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_410.webp";
const fotograf_slubny_portfolio_2023_411 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_411.webp";
const fotograf_slubny_portfolio_2023_412 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_412.webp";
const fotograf_slubny_portfolio_2023_413 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_413.webp";
const fotograf_slubny_portfolio_2023_414 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_414.webp";
const fotograf_slubny_portfolio_2023_415 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_415.webp";
const fotograf_slubny_portfolio_2023_416 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_416.webp";
const fotograf_slubny_portfolio_2023_418 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_418.webp";
const fotograf_slubny_portfolio_2023_421 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_421.webp";
const fotograf_slubny_portfolio_2023_422 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_422.webp";
const fotograf_slubny_portfolio_2023_423 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_423.webp";
const fotograf_slubny_portfolio_2023_425 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_425.webp";
const fotograf_slubny_portfolio_2023_426 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_426.webp";
const fotograf_slubny_portfolio_2023_427 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_427.webp";
const fotograf_slubny_portfolio_2023_428 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_428.webp";
const fotograf_slubny_portfolio_2023_431 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_431.webp";
const fotograf_slubny_portfolio_2023_432 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_432.webp";
const fotograf_slubny_portfolio_2023_433 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_433.webp";
const fotograf_slubny_portfolio_2023_435 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_435.webp";
const fotograf_slubny_portfolio_2023_437 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_437.webp";
const fotograf_slubny_portfolio_2023_438 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_438.webp";
const fotograf_slubny_portfolio_2023_439 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_439.webp";
const fotograf_slubny_portfolio_2023_501 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_501.webp";
const fotograf_slubny_portfolio_2023_502 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_502.webp";
const fotograf_slubny_portfolio_2023_504 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_504.webp";
const fotograf_slubny_portfolio_2023_505 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_505.webp";
const fotograf_slubny_portfolio_2023_696 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_696.webp";
const fotograf_slubny_portfolio_2023_699 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_699.webp";
const fotograf_slubny_portfolio_2023_701 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_701.webp";
const fotograf_slubny_portfolio_2023_703 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_703.webp";

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "dom-weselny-biala-perla-radziemice-reportaz-slubny.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_411
    },
    {
        image: fotograf_slubny_portfolio_2023_410
    },
    {
        image: fotograf_slubny_portfolio_2023_439
    },
    {
        image: fotograf_slubny_portfolio_2023_412
    },
    {
        image: fotograf_slubny_portfolio_2023_413
    },
    {
        image: fotograf_slubny_portfolio_2023_414
    },
    {
        image: fotograf_slubny_portfolio_2023_415
    },
    {
        image: fotograf_slubny_portfolio_2023_416
    },
    {
        image: fotograf_slubny_portfolio_2023_696
    },
    {
        image: fotograf_slubny_portfolio_2023_418
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_502
    },
    {
      image: fotograf_slubny_portfolio_2023_501
    },
    {
      image: fotograf_slubny_portfolio_2023_421
    },
    {
      image: fotograf_slubny_portfolio_2023_422
    },
    {
      image: fotograf_slubny_portfolio_2023_423
    },
    {
      image: fotograf_slubny_portfolio_2023_701
    },
    {
      image: fotograf_slubny_portfolio_2023_426
    },
    {
      image: fotograf_slubny_portfolio_2023_425
    },
    {
      image: fotograf_slubny_portfolio_2023_427
    },
    {
      image: fotograf_slubny_portfolio_2023_428
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_504
    },
    {
      image: fotograf_slubny_portfolio_2023_505
    },
    {
      image: fotograf_slubny_portfolio_2023_431
    },
    {
      image: fotograf_slubny_portfolio_2023_432
    },
    {
      image: fotograf_slubny_portfolio_2023_433
    },
    {
      image: fotograf_slubny_portfolio_2023_699
    },
    {
      image: fotograf_slubny_portfolio_2023_435
    },
    {
      image: fotograf_slubny_portfolio_2023_437
    },
    {
      image: fotograf_slubny_portfolio_2023_703
    },
    {
      image: fotograf_slubny_portfolio_2023_438
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Ile kosztuje reporta?? ze ??lubu i wesela w Miechowie?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Czy fotografowie ??lubni ustalaj?? uniwersalny cennik swoich us??ug nie bior??c pod uwag?? ich zakresu. Niestety nie, poniewa?? ka??da uroczysto???? ma inny charakter i indywidualnie wp??ywa na ostateczn?? cen??. W wielu przypadkach koszt fotografa na wesele zale??y od wielko??ci imprezy, czy dodatkowych us??ug, na jakie zdecydowali si?? nowo??e??cy."
        }
    },{
        "@type": "Question",
        "name": "Jakie s?? wide??ki cenowe dla fotografii ??lubnej w Miechowie?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Niskie ceny to takie z przedzia??u do trzech tysi??cy z??otych za reporta??, ??redni pu??ap cen wpada pomi??dzy trzy, a cztery tysi??ce z??otych za reporta??. Wysoki pu??ap cen definiuje zakres powy??ej czterech tysi??cy z??otych za reporta??."
        }
    },{
      "@type": "Question",
      "name": "Ile czasu pracuje na naszym ??lubie/weselu fotograf ??lubny w Miechowie?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sobota to dzie?? ??lubu, wi??c fotografowanie zaczynamy wcze??nie rano najcz????ciej od przygotowa?? Panny M??odej i jej makija??u. Szesna??cie godzin to typowa d??ugo???? pracy fotografa w dniu ??lubu od momentu przygotowa??, do momemntu sfotografowania wszystkich zabaw oczepinowych."
      }
    },{
      "@type": "Question",
      "name": "Czy otrzymamy tylko zdj??cia w wersji cyfrowej?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oczywi??cie, ??e nie. Najlepsze kadry z Waszego dnia otrzymacie r??wnie?? w postaci profesjonalnych wydruk??w. Reszt?? fotografii dostaniecie na pendrive w wersji elektronicznej, a tak??e w formie internetowej galerii, kt??r?? b??dziecie si?? mogli podzieli?? ze znajomymi lub rodzin??."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ??lubny Miech??w"
      description="Fotograf ??lubny Miech??w"
      keywords="fotograf ??lubny Miech??w"
      url="https://99foto.pl/fotograf-slubny-miechow/"
      leadNames="??ANETA i SEBASTIAN"
      leadTitle="DOM WESELNY BIA??A PER??A RADZIEMICE, REPORTA?? ??LUBNY"
      leadUrl="/dom-weselny-biala-perla-radziemice-reportaz-slubny"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ??LUBNY MIECH??W
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Fotografia ??lubna to moja pasja i spos??b na ??ycie. Chc?? aby ka??dy m??g?? poczu?? si?? pi??knie na moich zdj??ciach. Moje zdj??cia s?? naturalne i pe??ne emocji dlatego, ??e od pierwszych minut naszej wsp????pracy staram si?? mie?? bardzo dobry kontakt z Wami, czyli moimi klientami. Zupe??nie inaczej jest kiedy fotografuje Was kto?? znajomy, a zupe??nie innaczej b??d?? wygl??da?? zdj??cia zrobione przez obc?? osob??. Dlatego tak wa??ne jest rozpocz??cie sesji zdj??ciowej ju?? od przygotowa??, a nawet od sesji narzecze??skiej. 
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Mamy wtedy czas ??eby si?? dobrze pozna??, a to nieocenione do??wiadczenie kt??re wp??ywa niesamowicie na jako???? zdj???? podczas pracy reporterskiej. Poszukujesz <strong>fotografa ??lubnego w Miechowie</strong> jeste?? w super doskona??ym miejscu. Nazywam si?? Tomek Prokop, mieszkam w Krakowie i zapraszam na moje zdj??cia.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ??LUBNY MIECH??W - AMATOR CZY PROFESJONALISTA?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Fotograf amator to osoba, kt??ra robi zdj??cia dla przyjemno??ci, a nie zawodowo. Fotografowanie jest dla niej hobby, a nie sposobem na zarabianie pieni??dzy. Amatorzy cz??sto robi?? zdj??cia swoim w??asnym sprz??tem, takim jak aparaty cyfrowe lub smartfony, i cz??sto nie posiadaj?? specjalistycznego wykszta??cenia lub do??wiadczenia w fotografii. Fotograf profesjonalista to osoba, kt??ra zarabia na robieniu zdj????. Profesjonalni fotografowie cz??sto posiadaj?? specjalistyczne wykszta??cenie lub do??wiadczenie w dziedzinie fotografii, a tak??e specjalistyczny sprz??t i umiej??tno??ci techniczne. Oni zazwyczaj oferuj?? swoje us??ugi w r????nych dziedzinach takich jak w??a??nie fotografia ??lubna.
        </Typography>


        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA MIECH??W - GDZIE NA PLENER
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Miech??w to miasto po??o??one w wojew??dztwie ma??opolskim, kt??re jest odpowiednie do Waszej sesji plenerowej. W??r??d propozycji miejsc na zdj??cia ??lubne na pewno znajd?? si?? Zamek w Miechowie, Ko??ci???? ??w. Andrzeja Boboli, park im. Jana Paw??a II, Miechowska Star??wka. Ciekawe kadry mo??na te?? znale???? fotografuj??c w Muzeum Regionalnym w Miechowie oraz w Rezerwacie przyrody ???Miechowski Las???. Wybieraj??c na sesj?? plenerow?? sceneri?? w le??nej zieleni, czy architektur?? miejsk?? w Miechowie z pewno??ci?? znajdziecie co?? dla siebie.
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Sesja plenerowa to zwykle trzy godziny fotografowania w r????nych miejscach. Poszukujemy fajnych kadr??w, Waszych u??miech??w i staramy si?? odpowiednio dobra?? pogod?? i por?? dnia. Wynikiem s?? zawsze bajeczne zdj??cia. Um??wmy si?? na plener ju?? dzisiaj. Zapraszam serdeczenie.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF MIECH??W - PASJA I DO??WIADCZENIE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Jedno z pierwszych, a zarazem najwa??niejsze pyta?? to czy Fotograf b??dzie osobi??cie wykonywa?? zdj??cie na Waszym ??lubie, czy b??dzie to by?? mo??e podwykonawca zatrudniony w innej firmie. Dobra rada to upewni?? si??, ??e na dwie??cie procent b??dzie to osoba z kt??r?? podpisali??cie umow??.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA MIECH??W - PAMI??TKA NA LATA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Fotografia ??lubna to niezwykle wa??na pami??tka, kt??ra b??dzie przypomina?? o wszystkich emocjach zwi??zanych z dniem ??lubu. Dlatego tak wa??ne jest, aby wybra?? dobrego fotografa, kt??ry stanie na wysoko??ci zadania i uchwyci wa??ne chwile i emocje oraz stworzy pi??kne i unikalne zdj??cia ??lubne.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Je??li szukaj?? Pa??stwo profesjonalnego fotografa ??lubnego w Miechowie to mo??ecie ju?? teraz wygodnie usi?????? w fotelu, ogl??dn???? zdj??cia na stronie internetowej, wykr??ci?? m??j numer i um??wi?? si?? na niezobowi??zuj??ce spotkanie. Porozmawiamy sobie przez godzink??, odpowiem na wszystkie Wasze fotograficzne pytania, poka???? przyk??adowe ksi????ki, b??dzie mi??o. 
         </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA MIECH??W - BEZPIECZE??STWO ZDJ????
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Pami??tajcie ??e dobry fotograf zawsze ma dodatkowy aparat, kilka obiektyw??w i kilka kart pami??ci. W obecnych czasach standardem jest zapis zdj???? na dw??ch kartach pami??ci i natychmiastowe zgranie zawarto??ci kart pamieci na dyski twarde. Bezpiecze??stwo Waszych zdj???? ??lubnych jest mega istotne, poniewa?? ten dzie?? nie zdarzy si?? ponownie. Wybieraj??c fotografa, b??d??cie czujni.
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