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
            "text": "Oferta reporta??u ??lubnego mo??e by?? korzystna, kiedy zapytacie o pakiet foto-video. Pami??tajcie jednak, by nie by?? oferowany przez jedn?? osob?? i nazwany fotografi?? hybrydow??. Film ??lubny to nie tylko ruchome kadry ale te?? dziwi??k, kt??rego rejestracja jest pracoch??onna. W mojej ofercie znajdziecie zdj??cia ??lubne, ale znajomych kamerzyst??w znam kilku i mog?? poleci?? wysy??aj??c ich list?? na Tw??j adres email."
        }
    },{
        "@type": "Question",
        "name": "Ile zdj???? znajd?? w Twoim pakiecie ??lubnym?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pierwsze pytanie na kt??re musimy sobie odpowiedzie?? to ile zdj???? potrzeba by u??o??y?? fotoksi????k?? o grubo??ci sto czterdzie??ci stron w formacie 30x30cm. Ka??dego roku uk??adam blisko czterdzie??cie takich ksi????ek i powiem Wam jedno, mo??na tam z powodzeniem zmie??ci?? blisko 400 zdj???? ??lubnych. Fotografuj??c Wasz ??lub zrobi?? wi??c wszystko, by stworzy?? minimum czterysta pi????dziesi??t unikalnych niepowtarzaj??cych si?? kadr??w ??lubnych. Praca nie??atwa, ale mega satysfakcjonuj??ca. "
        }
    },{
      "@type": "Question",
      "name": "Ile czasu pracujesz na naszym ??lubie jako fotograf ??lubny w Chrzanowie?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zdj??cia zaczynaj?? si?? wcze??nie rano od makija??u Panny M??odej. W dniu ??lubu jestem z Wami cz??sto ponad szesna??cie godzim. Czas dobrze i mi??o sp??dzony. Spotykamy si?? jeszcze na plener ??lubny w wybranym dniu po ??lubie. Przegadamy wiele temat??w i poznamy si?? doskonale."
      }
    },{
      "@type": "Question",
      "name": "Zdj??cia tylko na pendrive czy tak??e w albumie fotograficznym?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kadry z Waszego dnia ??lubu s?? tak wa??ne, ??e po prostu trzeba je profesjonalnie wydrukowa??. Wszystkie zdj??cia otrzymacie r??wnie?? w postaci cyfrowej na pendrive w etui. "
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ??lubny Chrzan??w"
      description="Fotograf ??lubny Chrzan??w, zwyczaje weselne w Chrzanowie, wyj??tkowe miejsca plenerowe"
      keywords="fotograf ??lubny Chrzan??w, zwyczaje weselne w Chrzanowie, wyj??tkowe miejsca plenerowe"
      url="https://99foto.pl/fotograf-slubny-chrzanow/"
      leadNames="NATALIA i KACPER"
      leadTitle="WESELE EUFORIA MY??LENICE, PLENER ??LUBNY DW??R MOGILANY"
      leadUrl="/wesele-euforia-myslenice-plener-slubny-dwor-mogilany"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ??LUBNY CHRZAN??W
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Wyczekana sobota, godzina pi??tnasta w Ko??ciele, wszystko przygotowane na ten wa??ny dzie??. Wstajesz rano i my??lisz,  czy na pewno wszystko si?? uda, czy wszyscy go??cie pojawi?? si?? na imprezie, czy kwiaty dotr?? na czas, czy makija?? i fryzura b??d?? r??wnie dobre jak te na pr??bach. Wiadomo, ??e czujesz lekki stres, rodzina rozwiewa Twoje w??tpliwo??ci i m??wi, ??e wszystko b??dzie dobrze. Mo??e w tym momencie my??lisz, ??e przyda??by si?? kto?? do??wiadczony, kto widzia?? ju?? dziesi??tki ??lub??w, kto?? taki kto wie z kt??rej strony w ko??ciele zwykle stoi Panna M??oda. Zwykle przed czasem mo??esz spodziewa?? si?? cz??owieka, kt??ry maj??c ze sob?? do??wiadczenie zna odpowiedzi na wszystkie ??lubne pytania, jest w stanie roz??adowa?? stres i rozlu??ni?? atmosfer??. Tw??j fotograf ??lubny w Chrzanowie?
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Poszukuj??c fotografa pami??tajcie, ??e warto postawi?? na do??wiadczenie. Dzie?? ??lubu to mega wa??ny dzie?? w kt??rym wszystko dzieje si?? super szybko. Umiej??tno???? przewidywania zdarze?? i doskonale u??o??ony plan dnia pozwoli nam unikn???? niespodzianek. <strong>Najlepszy fotograf ??lubny w Chrzanowie</strong> to taki, kt??ry wie kiedy wcisn???? spust migawki i utrwali?? najwa??niejsze chwile. Nazywam si?? Tomek Prokop, mieszkam w Krakowie i zapraszam do mojego fotograficznego ??wiata.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ??LUBNY CHRZAN??W - JAKI POWINIEN BY???
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
          Fotograf ??lubny to cz??owiek na kt??rego mo??esz liczy?? i polega?? na jego do??wiadczeniu. Jako Panna M??oda powinna?? r??wnie?? czu?? si?? dobrze i swobodnie w towarzystwie fotografa ??lubnego. Na pocz??tku nikt nie wie jakie zachowania s?? dobrze odbierane przez ludzi, a jakie zachowania ludzi od nas odpychaj??. Fotografuj??c kolejny ??lub i otrzymuj??c zlecenia od znajomych Par M??odych zadowolonych z wykonanego repora??u ??lubnego, zaczynasz wierzy?? w sw??j warsztat i nabierasz pewno??ci co do swojej osoby. Nieustanne doskonalenie swoich umiej??tno??ci to mega wa??na rzecz, kt??ra przydaje si?? w ??yciu, a w szczeg??lno??ci w fotografii ??lubnej. Otwarto???? jest kluczem do osi??gni??cia sukcesu w tej bran??y.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          CZY ISTNIEJ?? FAJNE MIEJSCE PLENEROWE W CHRZANOWIE?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Chrzan??w, mo??e by?? traktowany jako idealna baza wypadowa. Na li??cie polecanych miejsc plenerowych w okolicach Chrzanowa musimy wpisa?? Park Gr??dek w Jaworznie, zwany Polskimi Malediwami, Park ??l??ski w Katowicach z weso??ym miasteczkiem i planetarium. Zamek w Rabszytnie, kt??ry po gruntownej renowacji zachwyca nas swoja pot??g??, Zamek w Ogrodzie??cu, pere??ka Jury Krakowsko-Cz??stochowskiej, miejsce gdzie mieszka?? Janosik. Nie zapominajmy te?? o Zamku w Suchej Beskidzkiej, kt??ry ??mia??o mo??e konkurowa?? z Wawelem. 
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Ca??kiem niedaleko jest te?? Muzeum Zamkowe w Pszczynie i pi??kny Park Pszczy??ski. Wszystkie te miejsca czakaj?? na Was i prosz?? si?? o plener ??lubny lub sesj?? narzecze??sk??.Bez wzgl??du na to czy lubicie przyrod??, czy szum miasta i obecno???? ludzi, znajdziecie co?? dla siebie. Wszystko zale??y od indywidualnych preferencji i stylu pary m??odej.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          CHRZAN??W - FOTOGRAF ??LUBNY W PAKIECIE Z FILMEM
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Obserwuj??c ulubionych fotograf??w publikuj??cych informacje o swojej pracy na kanale YouTube, dowiadujemy si??, ??e wprowadzenie aparat??w bezlusterkowych i ??atwe prze????czenie funkcji aparatu z fotografowania na filmowanie, utworzy?? now?? dziedzin?? reporta??u ??lubnego zwanego reporta??em hybrydowym. Jeden cz??owiek, jednocze??nie fotografuje i wykonuje kr??tkie filmiki, kt??re mo??na zmontowa?? w teledysk ??lubny. Je??eli poszukujecie fotografa, kt??ry wykona dla Was taki film to niestety nie najlpiej trafili??cie. Moja specjalizacja to fotografia ??lubna, tej dziedzie po??wi??cam sto procent swojej uwagi i wykonywanie dw??ch rzeczy film??w i zdj???? jednocze??nie jest moim zdaniem niewykonalne. Pami??tajcie, jak co?? jest do wszystkiego to jest do niczego. Szukacie dalej..., a mo??e dobre zdj??cia z Waszego ??lubu wystarcz??? Serdeczenie zapraszam do skorzystania z moich us??ug fotograficznych w Chrzanowie.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA CHRZAN??W - PONADCZASOWO???? ZDJ????
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Fajnie tak usi?????? przy choince, otworzy?? album ze zdj??ciami i zanurzy?? si?? we wspomnieniach. Prosta sprawa, bardzo powtarzalna, bo choink?? w naszych domach mamy ka??dego roku. Pomy??lcie wi??c, ile przyjemno??ci podczas ogl??dania czeka na Was gdy zdecydujecie si?? zapisa?? wspomnienia na kartach pami??ci i stronach albumu fotograficznego. Mo??e to wydawa?? si?? kosztowne, ale na co?? trzeba w ko??cu wydawa?? te pieni??dze... Uwierzcie mi, ??e ten album to jest bardzo dobry pomys??.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Szukasz profesjonalnego fotografa ??lubnego w Chrzanowie? ??wietnie trafi??e??, mam nadzieje spe??ni?? wszystkie Twoje fotograficzne oczekiwania i jestem w stanie stworzy?? pi??kn?? pami??tk?? na lata.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          CENY, KOSZTY - FOTOGRAFIA ??LUBNA CHRZAN??W
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
          Tanio i dobrze by?? nie mo??e, to prawda, ale pami??tajcie, by nie przep??aca??, kupuj??c marzenia. Poszukuj??c fotografa postawcie na jego do??wiadczenie, zapytajcie jakim dysponuje sprz??tem.
          Koniecznie sprawd??cie portfolio i um??wcie sie na spotkanie. Ludzie w tej bran??y s?? niesamowici, ale jest te?? spora ekipa, kt??ra przygod?? z fotografi?? rozpocz????a od zakupu sprz??tu z dofinansowania na firm??, a zdj??cia robi wy????cznie dla pieni??dzy.
          Postawcie na osoby sprawdzone, polecane, pasjonat??w, kt??rzy pomimo trudno??ci pracuj?? w zawodzie od lat. W ten spos??b zyskacie wspania??e zdjecia.
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