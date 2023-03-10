import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";


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
        "name": "Ile kosztuje reporta?? i dojazd fotografa ??lubnego do Wadowic?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Koszt dojazdu do Wadowic wliczony jest w cen?? pakietu ??lubnego. Odpadaj?? Ci koszty dojazdu czy noclegu dla fotografa."
        }
    },{
        "@type": "Question",
        "name": "Do kt??rej godziny fotografujesz przyj??cie?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cz??sto spotykam si?? z tendencj?? k??adzenia zbyt du??ego nacisku na fotografowanie przyj??cia. Z perspektywy pami??tki i historii zawartej w reporta??u pi??ta czy sz??sta godzina opowiadania o ta??cz??cych i wznoszonych toastach  go??ciach nie wnosi ju?? zbyt wiele do materia??u natomiast brak wsp??lnej sesji, po??piech w przygotowaniach - na to nie mo??emy sobie pozwoli??. "
        }
    },{
      "@type": "Question",
      "name": "Czy zawsze publikujesz fotografie ??lubne w internecie?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Publikacja materia????w jest dla mnie bardzo istotna ??? dzi??ki temu zainteresowane moj?? fotografi?? pary s?? w stanie dok??adnie i na bie????co oceni?? jako???? i poziom moich prac.  Gdybym nie mia?? takiej mo??liwo??ci prawdopodobnie nie by??oby Was tutaj. Rozumiem jednak, ??e nie jest to komfortowe rozwi??zanie dla ka??dego i je??li tylko nie zgadzacie si?? na publikacj?? Waszego wizerunku dajcie mi zna?? ??? przygotuj?? dla Was umow?? i ofert?? na warunkach dostosowanych do Waszych oczekiwa??."
      }
    },{
      "@type": "Question",
      "name": "Czy oznasz j??zyk angielski?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, nie ma najmniejszego problemu abym komunikowa?? si?? cz????ciowo lub przez ca??y dzie?? z Wami i Waszymi go????mi po angielsku. Bardzo cz??sto fotografuj?? ??luby mi??dzynarodowe i nie stanowi to dla mnie absolutnie ??adnej przeszkody aby dogada?? si?? z ka??dym z go??ci."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ??lubny Wadowice"
      description="Fotograf ??lubny Wadowice, fotograf na wesele Wadowice, reporta?? ??lubny"
      keywords="fotograf ??lubny Wadowice, fotograf na wesele Wadowice, reporta?? ??lubny"
      url="https://99foto.pl/fotograf-slubny-wadowice/"
      leadNames="NATALIA i KRZYSZTOF"
      leadTitle="DOM WESELNY MOGIELICA JURK??W, RUSTYKALNE WESELE"
      leadUrl="/dom-weselny-mogielica-jurkow-rustykalne-wesele"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ??LUBNY WADOWICE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Wiadomo, ??e zdj??cia podczas wesela b??dzie robi??o Wam mn??stwo os??b. Jedne b??d?? lepszej jako??ci, drugie gorsze. Cz?????? go??ci we??mie na przyj??cie ze sob?? aparaty fotograficzne, a cz?????? b??dzie fotografowa?? telefonem kom??rkowym. Je??li ??aden z naszych go??ci nie jest zawodowym fotografem, nie mo??emy mie?? jednak pewno??ci, ??e zrobione zdj??cia b??d?? dla nas zadowalaj??ce.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Wyb??r fotografa na wesele nie nale??y do rzeczy ??atwych. Trzeba przejrze?? portfolio wielu fotograf??w, negocjowa?? si?? i pyta?? o wolne terminy. Nie ka??dy fotograf b??dzie do nas pasowa??. Ka??dy z nas jest inny, fotografowie te?? s?? inni. Nasze gusta, potrzeby i oczekiwania nie zawsze b??d?? sp??jne z tym co proponuje fotograf. Nie na wszystko te?? jako Para M??oda musimy si?? zgadza??. Kobiety, kt??re lubi?? bardziej jeden ze swoich profili, powinny powiedzie?? o tym fotografowi przed ??lubem. Jest wtedy szansa, ??e zdj??cia b??d?? robione z tej bardziej ???korzystnej dla nas strony???. Warto te?? wspomnie??, kt??rzy z go??ci weselnych s?? dla nas najwa??niejsi i kt??rych zdj???? najwi??cej by??my chcieli - trzeba fotografowi przedstawi?? np. rodzic??w, rodze??stwo czy ??wiadk??w. Je??eli szukasz <strong>najlepszego fotografa ??lubnego w Wadowicach</strong> to jeste?? we w??a??ciwym miejscu. Nazywam si?? Tomasz Prokop, mieszkam w Krakowie i bardzo ch??tnie sfotografuj?? Wasz ??lub.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ??LUBNY WADOWICE - ZDJ??CIA SPONTANICZNE?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Fotografia reporta??owa jest moj?? specjalizacj??. Uwielbiam t?? magi??, dzi??ki kt??rej mog?? zamkn???? na zdj??ciach to, co nieuchwytne, czyli Wasz spontaniczny u??miech, wzruszenie, skrywane poca??unki i spojrzenia pe??ne mi??o??ci. Wierz??, ??e wsp??lnie mo??emy stworzy?? co?? naprawd?? wyj??tkowego ??? histori??, kt??ra pozostanie z Wami na zawsze i nawet na stare lata b??dzie cieszy?? r??wnie mocno, jak tego pi??knego dnia. Serdecznie zapraszam Ci?? do zapoznania si?? z moim portfolio i wej??cia do ??wiata emocji widzianego moimi oczami.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA WADOWICE - ZADANIA SPECJALNE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Fotograf ??lubny, kt??ry specjalizuje si?? w przygotowywaniu reporta??y ??lubnych, to osoba do zada?? specjalnych. Z jednej strony musi poczu?? w sobie dusz?? reportera, kt??ry jest w stanie przewidywa?? pewne zdarzenia, stale obserwuje otoczenie i wie, jakie momenty uchwyci?? na fotografiach. Z drugiej strony to osoba, kt??ra doskonale zna sw??j sprz??t i posiada rozleg???? wiedz?? na temat technik fotografowania. Wie, w jaki spos??b operowa?? ??wiat??em i cieniem, by zdj??cia zyska??y niepowtarzalny charakter, nadaje odpowiedni rytm ca??ej historii, a tak??e z ??atwo??ci?? tworzy zdj??cia wieloplanowe, w kt??rych kilka historii przeplata si?? ze sob?? na jednej fotografii.
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Jako dobry reporter ??lubny nie boje si?? ci????kiej pracy i jestem gotowy na ci??g??e udoskonalanie w??asnych umiej??tno??ci. Je??li chcesz mie?? pewno????, ??e fotograf ??lubny przygotuje dla Ciebie niezapomniany reporta??, zwr???? uwag?? na to, jak zmienia si?? jego portfolio na przestrzeni lat. Dzi??ki temu b??dziesz w stanie oceni?? jego zaanga??owanie w wykonywan?? prac?? oraz nieustanny rozw??j.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          WADOWICE - KIEDY ZAREZERWOWA?? TERMIN?
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Pami??taj, ??e czym szybciej zarezerwujesz termin u fotografa, tym lepiej. Warto wiedzie??, ??e niekt??re weekendy s?? zapisane ju?? na dwa lata do przodu. Pami??taj, ??e funkcjonuje te?? co?? takiego, jak sezon ??lubny, kt??ry trwa od kwietnia do listopada. To czas, kiedy trudniej o rezerwacj?? fotografa, je??eli do ??lubu pozosta??o ju?? niewiele czasu. 
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA WADOWICE - PAMI??TKA NA LATA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        W mojej ofercie znajduj?? si?? albumy ??lubne dw??ch wiod??cych firm drukarskich w Polsce. Pierwsza z nich to firma Printu, natomiast druga to Najlepsze Foto. Korzystaj??c z moich us??ug w obu przypadkach zyskujecie pi????dziesi??t procent zni??ki na zam??wione do druku materia??y. Mog?? Was r??wnie?? zapewni??, ??e wsp????praca z tymi firmami przebiega doskonale, a jako???? druku jest na najwy??szym poziomie.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Marz?? Ci si?? zdj??cia ze ??lubu, kt??re nawet za dwadzie??cia lat b??d?? wyciska?? ??zy wzruszenia? Szukasz <strong>fotografa ??lubnego w Wadowicach</strong>, kt??ry nie tylko najpi??kniej jak to mo??liwe zapisze wyj??tkowe chwile, ale i doradzi, podpowie i doda otuchy wtedy, gdy b??dzie to konieczne? Trafi??e?? w odpowiednie miejsce. Poznajmy si?? i um??wmy na wsp??ln?? kaw??. 
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA WADOWICE - ILE TO KOSZTUJE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Je??eli szukasz fotografa ??lubnego, warto wiedzie??, ??e mo??esz zam??wi?? sesj?? narzecze??sk??, sam reporta?? w dniu ??lubu (od przygotowa??, po p????ne godziny nocne) oraz sesj?? ??lubn?? w plenerze w Wadowicach. S?? to g????wne sk??adowe ceny us??ugi fotografa ??lubnego. Dobra informacja jest taka, ??e je??eli organizujesz ??lub w Wadowicach i wybierzesz moje us??ugi odpadaj?? Ci koszty dojazdu czy noclegu dla fotografa. Jestem z Krakowa i do Wadowic doje??d??am gratis.
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