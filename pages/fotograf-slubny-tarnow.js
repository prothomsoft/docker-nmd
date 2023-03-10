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
        "name": "Gdzie mo??na zobaczy?? przyk??ady Pana prac?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Na moim blogu macie mo??liwo???? zapoznania si?? z przyk??adowymi historiami ??lubnymi, kt??re pokazuj?? namiastk?? moich fotograficznych umiej??tno??ci. Je??eli dotychczasowe sesje przypad??y Wam do gustu zapraszam do kontaktu, a wsp??lnie uzyskamy r??wnie imponuj??ce wizualnie zdj??cia z Waszym udzia??em."
        }
    },{
        "@type": "Question",
        "name": "Czy go??cie weselni powinni fotografowa?? ??lub?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pos??uchajcie moich rad i zaproponujcie swoim go??ciom pozostawienie telefon??w w domu. Tak to nie jest mo??liwe i o ile w fotografowaniu z miejsca, w kt??rym si?? stoi nie ma nic z??ego to wchodzenie fotografowi w kadr powinno by?? zabronione."
        }
    },{
      "@type": "Question",
      "name": "Kiedy powinno si?? rezerwowa?? fotografa na ??lub?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fotografa na ??lub najlepiej wybra?? z dwuletnim wyprzedzeniem. Wynika to z faktu, ??e bardzo cz??sto inni us??ugodawcy, tacy jak sale weselne, czy zespo??y muzyczne podpisuj?? umowy z w??a??nie takim wyprzedzeniem."
      }
    },{
      "@type": "Question",
      "name": "Czy sesja ??lubna w wybranym dniu po ??lubnie to dobry pomys???",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oczywi??cie, ??e tak. Go??cie weselni lepiej bawi?? sie na parkiecie, je??eli widz?? na nim u??miechni??t?? Par?? M??od??. Pozostawianie naszych go??ci na d??u??szy czas mo??e by?? nietaktowne. Zr??bmy wi??c kilka zdj???? przed sal?? weseln??, a ca??y plener w dodatkowym, wybranym dniu po ??lubie."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ??lubny Tarn??w"
      description="Fotograf ??lubny Tarn??w, reporta?? ??lubny w Tarnowie, miejsca na plener"
      keywords="fotograf ??lubny Tarn??w, reporta?? ??lubny w Tarnowie, miejsca na plener"
      url="https://99foto.pl/fotograf-slubny-tarnow/"
      leadNames="NATALIA i KRZYSZTOF"
      leadTitle="DOM WESELNY MOGIELICA JURK??W, RUSTYKALNE WESELE"
      leadUrl="/dom-weselny-mogielica-jurkow-rustykalne-wesele"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ??LUBNY TARN??W
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Udzia?? w wielu szkoleniach, warsztatach, dopracowywanie kunksztu fotograficznego i fotografowania ??lub??w, nowe wyzwania ka??dego tygodnia doprowadzi??y do sytuacji, w kt??rej mog?? powiedzie??, ??e umiem robi?? zdj??cia. Przez ostatnie lata i po dziesi??tkach wykonanych reporta??y, w fotografii ??lubnej czuje si?? bardzo naturalnie. Cz??owiek uczy si?? jednak przez ca??y ??ycie, dlatego na ka??dy reporta??, mimo przygotowania i pewno??ci siebie, id?? z lekkim wahaniem. Fotografia ??lubna to jedna wielka przygoda.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Fotografia ??lubna to g????wnie praca z lud??mi ??? w czasie przygotowa??, na ??lubie czy w trakcie sesji ??lubnej mamy do czynienia przecie?? z lud??mi. Ka??de wesele jest inne, dlatego w??a??nie uwielbiam ten tryb pracy. Na ka??dym reporta??u poznaj?? wielu ciekawych ludzi, z kt??rymi cz??sto d??ugo po weselu utrzymuj?? kontakt. Je??eli szukasz <strong>najlepszego fotografa ??lubnego w Tarnowie</strong> to doskonale trafi??e??. Nazywam si?? Tomasz Prokop, mieszkam w Krakowie i zapraszam do kontaktu.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ??LUBNY TARN??W - APARATY BEZLUSTERKOWE?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Pracuj?? na profesjonalnych aparatach bezlusterkowych marki Nikon. Zawsze mam ze sob?? kilka przydatnych obiektyw??w, dzi??ki kt??rym mog?? pracowa?? tak, jak trzeba, o lampach i innych tego typu sprz??tach nie wspominaj??c. W prac?? wk??adam ca??e swoje zaanga??owanie, u??miech i pomocn?? d??o??. Na ka??dym reporta??u jestem po prostu sob??. Chcesz wiedzie?? co?? wi??cej na m??j temat? Um??wmy si?? na kaw?? i porozmawiajmy.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA W TARN??WIE - WYZWANIE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Trzeba wiedzie??, ??e fotografia ??lubna to nie??atwa dziedzina. Dobry reporta?? ??lubny jest bardzo wymagaj??cy. Trzeba by?? nie tylko sprawnym technicznie, ale przede wszystkim wra??liwym na otoczenie, na ??wiat??o. Trzeba umie?? w otaczaj??cym nas chaosie stworzy?? do???? prosty, uporz??dkowany kadr, kt??ry poruszy emocje widza. Intuicja, empatia do ludzi i ??wietna kondycja fizyczna s?? to niezwykle istotne elementy, bez kt??rych nie wyobra??am sobie pracy w roli fotografa ??lubnego. Dwana??cie godzin biegania z aparatem potrafi zm??czy?? najsprawniejszego sportowca.
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Dla mnie jednak bardziej m??cz??ce od wysi??ku fizycznego jest przebywanie w stanie permanentnej koncentracji. Trzeba by?? w pe??nej gotowo??ci, gdy?? najpi??kniejsze momenty trwaj?? dos??ownie u??amek sekundy. Drobne zawahanie spowoduje utrat?? ??wietnego zdj??cia.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ??LUBNY TARN??W - FOTOGRAF RODZINNY
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Jako m???? i tata, wiem jak wa??na jest pot??ga emocji i blisko??ci. Gdy wybieram si?? jako fotograf na wesele, widz?? to, czego nie dostrzegaj?? inni. ??miech, ??zy wzruszenia, wyg??upy dzieciak??w. Wszystko uwieczni??, aby??cie cieszyli si?? rodzinnymi wspomnieniami przez lata.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA TARN??W - FOTOGRAF OBSERWUJ??CY
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Mam dobre ???oko??? do sytuacji, nic mi nie umknie! Dobry reporta?? ??lubny to taki, w kt??rym zawarte s?? w stu procentach niepowtarzalne momenty. To Wam gwarantuj??.
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
        Fotograf na ??lub to tak??e ???kumpel???, kt??ry doradzi, uspokoi i pomo??e. Wykorzystam swoje bogate do??wiadczenie, by by?? wsparciem. Jestem r??wnie?? dyskretny i kiedy trzeba niedostrzegalny. Umiem uszanowa?? intymno???? najwa??niejszych moment??w podczas ??lubu, ale nie zaniedbam ??adnego kadru.
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