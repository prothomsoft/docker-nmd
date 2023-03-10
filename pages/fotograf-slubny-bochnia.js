import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";

const fotograf_slubny_portfolio_2023_157 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_157.webp";
const fotograf_slubny_portfolio_2023_158 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_158.webp";
const fotograf_slubny_portfolio_2023_159 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_159.webp";
const fotograf_slubny_portfolio_2023_160 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_160.webp";
const fotograf_slubny_portfolio_2023_162 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_162.webp";
const fotograf_slubny_portfolio_2023_163 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_163.webp";
const fotograf_slubny_portfolio_2023_164 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_164.webp";
const fotograf_slubny_portfolio_2023_165 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_165.webp";
const fotograf_slubny_portfolio_2023_166 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_166.webp";
const fotograf_slubny_portfolio_2023_167 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_167.webp";
const fotograf_slubny_portfolio_2023_168 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_168.webp";
const fotograf_slubny_portfolio_2023_169 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_169.webp";
const fotograf_slubny_portfolio_2023_170 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_170.webp";
const fotograf_slubny_portfolio_2023_171 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_171.webp";
const fotograf_slubny_portfolio_2023_172 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_172.webp";
const fotograf_slubny_portfolio_2023_173 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_173.webp";
const fotograf_slubny_portfolio_2023_174 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_174.webp";
const fotograf_slubny_portfolio_2023_176 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_176.webp";
const fotograf_slubny_portfolio_2023_177 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_177.webp";
const fotograf_slubny_portfolio_2023_178 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_178.webp";
const fotograf_slubny_portfolio_2023_179 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_179.webp";
const fotograf_slubny_portfolio_2023_180 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_180.webp";
const fotograf_slubny_portfolio_2023_181 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_181.webp";
const fotograf_slubny_portfolio_2023_182 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_182.webp";
const fotograf_slubny_portfolio_2023_183 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_183.webp";
const fotograf_slubny_portfolio_2023_184 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_184.webp";
const fotograf_slubny_portfolio_2023_185 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_185.webp";
const fotograf_slubny_portfolio_2023_186 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_186.webp";
const fotograf_slubny_portfolio_2023_187 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_187.webp";
const fotograf_slubny_portfolio_2023_672 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_672.webp";

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "dom_weselny_mogielica_fotograf_slubny_mszana.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_157
    },
    {
        image: fotograf_slubny_portfolio_2023_158
    },
    {
        image: fotograf_slubny_portfolio_2023_159
    },
    {
        image: fotograf_slubny_portfolio_2023_160
    },
    {
        image: fotograf_slubny_portfolio_2023_672
    },
    {
        image: fotograf_slubny_portfolio_2023_162
    },
    {
        image: fotograf_slubny_portfolio_2023_163
    },
    {
        image: fotograf_slubny_portfolio_2023_164
    },
    {
        image: fotograf_slubny_portfolio_2023_165
    },
    {
        image: fotograf_slubny_portfolio_2023_166
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_167
    },
    {
      image: fotograf_slubny_portfolio_2023_168
    },
    {
      image: fotograf_slubny_portfolio_2023_169
    },
    {
      image: fotograf_slubny_portfolio_2023_170
    },
    {
      image: fotograf_slubny_portfolio_2023_171
    },
    {
      image: fotograf_slubny_portfolio_2023_172
    },
    {
      image: fotograf_slubny_portfolio_2023_173
    },
    {
      image: fotograf_slubny_portfolio_2023_187
    },
    {
      image: fotograf_slubny_portfolio_2023_174
    },
    {
      image: fotograf_slubny_portfolio_2023_176
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_177
    },
    {
      image: fotograf_slubny_portfolio_2023_186
    },
    {
      image: fotograf_slubny_portfolio_2023_179
    },
    {
      image: fotograf_slubny_portfolio_2023_180
    },
    {
      image: fotograf_slubny_portfolio_2023_182
    },
    {
      image: fotograf_slubny_portfolio_2023_181
    },
    {
      image: fotograf_slubny_portfolio_2023_184
    },
    {
      image: fotograf_slubny_portfolio_2023_183
    },
    {
      image: fotograf_slubny_portfolio_2023_185
    },
    {
      image: fotograf_slubny_portfolio_2023_178
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Jak d??ugo trwa oczekiwanie na otrzymanie zdj?????",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zdj??cia z Twojego ??lubu s?? gotowe w tygodniu po ??lubie. Fotografie zostaj?? udost??pnione w strefie klienta i s?? zabezpieczone has??em. Go??cie weselni zainteresowani zdj??ciami mog?? otrzyma?? has??o zabieraj??c jedn?? z wizyt??wek, kt??re zawsze zostawiam przy ekspresie do kawy. Je??eli tego nie zrobili w dniu ??lubu tomog?? skontaktowa?? si?? z Wami i zapyta?? o has??o."
        }
    },{
        "@type": "Question",
        "name": "Czy w Twoim pakiecie jest uwzgl??dniony plener ??lubny?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oczywi??cie, plener ??lubny jest doskona??ym uzupe??nieniem reporta??u ??lubnego. Zwykle znajdujemy kilka minut w dniu ??lubu na zdj??cia przed sal?? weseln??. Robi??c plener w dniu ??lubu zawsze wtedy musicie pami??ta??, o tym, ??e go??cie weselni na Was czekaj??. Czas na plenerze w wybranym dniu po ??lubie to czas dla Was, praktycznie nieograniczony, w kt??rym mo??na da?? sobie sto buziak??w i u??cisk??w, zwiedzi?? pi??kne miejsca, porozmawia??, po??mia?? si?? i nacieszy?? promieniami zachodz??cego s??o??ca."
        }
    },{
      "@type": "Question",
      "name": "Czy mog?? skontaktowa?? si?? z poprzednimi klientami?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fotografi?? ??lubn?? zajmuje si?? blisko dziesi??t lat. Ka??dego roku oddaje trzydzie??ci pi???? fotoksi????ek ??lubnych, kt??re s?? moim portfolio i najlepsz?? reklam??. Najlepiej popyta?? o fotografa najbli??sz?? rodzin??, poszuka?? w internecie i jest du??e prawdopodobie??stwo, ??e nawet w ten przypadkowy spos??b na siebie natrafimy."
      }
    },{
      "@type": "Question",
      "name": "Czy masz do??wiadczenie w fotografii ??lubnej?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Do??wiadczenie w fotografii ??lubnej to bardzo wa??na rzecz. Zawsze fotograf ma tylko jedn?? szans??, ??eby dobrze uchwyci?? mijaj??ce chwile. Pewno???? siebie, umiej??tno???? przewidywania nadchodz??cych po sobie wydarze?? to rzeczy, kt??re nabywmy z czasem. Ka??dy pami??ta swoje pierwsze dzie??a i post??p, kt??ry zaobserwowa?? po latach pracy w zawodzie. Fotografia nie jest inna i warto postawi?? na sprawdzonego i do??wiadczonego fotografa ??lubnego."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ??lubny Bochnia"
      description="Fotograf ??lubny Bochnia, organizujesz ??lub i wesele w Bochni, szukasz idealnego fotografa ??lubnego? Super, ??e odnalaz??e?? moj?? stron?? w internecie!"
      keywords="fotograf ??lubny Bochnia, organizacja ??lubu w Bochni, wesele w Bochni"
      url="https://99foto.pl/fotograf-slubny-bochnia/"
      leadNames="NATALIA i KRZYSZTOF"
      leadTitle="DOM WESELNY MOGIELICA JURK??W, RUSTYKALNE WESELE"
      leadUrl="/dom-weselny-mogielica-jurkow-rustykalne-wesele"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ??LUBNY BOCHNIA
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Ten dzie??, kiedy wszystkie szczeg????y organizacyjne dotycz??ce sali weselnej, zespo??u s?? ju?? znane i co?? podpowiada Ci, ??e trzeba p??j???? krok dalej i rozgl??dn???? si?? za odpowiednim fotografem ??lubnym. Organizujesz ??lub w Bochni i dobrze by??oby gdyby znalaz?? si?? fotograf ??lubny, kt??ry nie musi przemierzy?? p???? polski by sfotografowa?? Tw??j ??lub. Przygotowujesz kubek kawy i szukaj??c w internecie trafiasz na moj?? stron??. My??lisz czy to przypadek, ??e spo??r??d tylu ofert zagl??dn????em w??a??nie tutaj. Przegl??dasz zdj??cia, wybrane reporta??e ??lubne na blogu, widzisz sp??jne kolory, emocje i zastanawiasz si??, czy to czasem nie jest ten cz??owiek, kt??ry zrobi Twoje zdj??cia ??lubne.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Tego si?? nie dowiemy, tak d??ugo jak nie zadzwonisz do mnie lub nie wype??nisz formularza kontaktowego. Je??eli szukasz <strong>najlepszego fotografa ??lubnego w Bochni</strong> to ca??kiem dobrze trafi??e??. Nazywam si?? Tomasz Prokop, mieszkam w Krakowie i bardzo ch??tnie sfotografuj?? Tw??j ??lub.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ??LUBNY BOCHNIA - ZDJ??CIA ??LUBNE, KT??RE ZACHWYCAJ??
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Ilo???? zdj???? publikowanych ka??dego dnia w internecie, ich jako???? nawet z IPhona z ka??dym dniem podnosi poprzeczk?? i u??atwiaj??c wykonywanie pracy powoduje, ??e ilo???? os??b, kt??re chcia??yby zacz???? fotografowa?? profesjonalnie znacz??co wzrasta. Dlatego poszukuj??c <strong>fotografa ??lubnego w Bochni</strong> pami??taj o kilku prostych zasadach. Wybierz do??wiadczonego i utalentowanego fotografa, kt??ry ma dobre portfolio i pozytywne opinie od innych par. Koniecznie porozmawiaj z fotografem o swoich preferencjach, aby upewni?? si??, ??e b??dzie on w stanie dostarczy?? materia?? w pe??ni Ciebie satysfakcjonuj??cy. Skorzystaj z opcji pleneru zdj??ciowego, aby uzupe??ni?? reporta?? ??lubny o zdj??cia w naturze, na kt??re ilo???? czasu jest praktycznie nieograniczona. Staraj si?? wybiera?? fotograf??w oferuj??cych sp??jny styl bez przesadnego retuszu i efekt??w z program??w graficznych, poniewa?? mog?? one po pewnym czasie po prostu wyj???? z mody. Zwr???? uwag?? na detale, takie jak kompozycja, o??wietlenie. Pami??taj, ??e najwa??niejsze s?? emocje, emocje i jeszcze raz emocje, one na ka??dym zdj??ciu musz?? si?? znale????.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          MIEJSCA PLENEROWE - FOTOGRAFIA ??LUBNA BOCHNIA
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Poszukuj??c miejsc na plener ??lubny pomy??lcie Bochnia. Dlaczego? Poniewa?? jest to miasto, kt??re z uwagi na zabytki i krajobrazy jest warte polecenia. Lista ciekawych miejsc jest d??uga, ale wymie??my tylko kilka z nich, w kt??rych mo??na wyczarowa?? magiczne zdj??cia plenerowe. Kopalnia Soli Bochnia - to najstarsza dzia??aj??ca kopalnia soli w Europie, mo??na tam zwiedzi?? podziemia i sprawdzi?? sk??d bierze si?? s??l. Ko??ci???? ??w. Kingi - pi??kny gotycki ko??ci???? z czternastego wieku, kt??ry jest jednym z najwa??niejszych zabytk??w Bochni. Czternastowieczny Ratusz, po??o??ony na wzg??rzu nad miastem Zamek Kmit??w, z kt??rego roztacza si?? wspania??y widok na okolic??.
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Park Zdrojowy czy Muzeum Soli tam te?? warto zagl??dn????. Blisko mamy te?? do wspania??ego Pa??acu Goetza, czaruj??cego wspania??ym ogrodem i monumentalnymi schodami, na kt??rych uwierzcie mi zdj??cia robi?? si?? same. Warto rozwa??y?? okolice Bochni i zdecydowa?? si?? na ??lub i plener w??a??nie tam.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          WESELE W BOCHNI - ZAREZERWUJ FOTOGRAFA ??LUBNEGO JU?? DZISIAJ
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Sp??jna historia przepe??niona Waszymi uczuciami, relacjami z osobami najbli??szymi, towarzysz??cymi Wam tego dnia to wszystko sk??ada si?? na idealny reporta?? ??lubny.
        Fotografie ??lubne to pi??kne portrety, detale, kt??re pokazuj?? smaczki i buduj?? klimat miejsca i kadry wyj??te prosto z ??ycia, pe??ne emocji, wzrusze?? i rado??ci.
        Album fotograficzny, kt??ry otrzymujecie to zbi??r emocji, kt??re pozostan?? z Wami przez d??ugie lata. Nie przesadz?? stwierdzaj??c, ??e b??dziecie go przegl??da?? setki razy,
        odkrywaj??c nowe rzeczy, ale przede wszystkim wracaj??c do tych niezapomnianych chwil z rado??ci??, a czasem nawet ??zami wspomnie??. To wszystko mo??e by?? faktem,
        gdy zdecydujesz si?? na us??ugi profesjonalnego fotografa, kt??ry b??dzie w stanie urzeczywistni?? te marzenia.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA BOCHNIA -  WRA??LIWO???? FOTOGRAFA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Ka??dy fotograf to doskona??y obserwator, uwielbiaj??cy przebywa?? w nowych miejscach i poznawa?? ciekawych ludzi. Obserwator jest tutaj s??owem kluczowym, poniewa?? trudno by?? w tym zawodzie, maj??c charakter lidera, kt??ry uwielbia przebywa?? w centrum zainteresowania, opowiada?? anegdoty i odci??ga?? swoj?? osob?? uwag?? od rzeczy wa??nych.
        Uruchomienie migawki aparatu pozwala nam ukra???? kilka chwil i zmagazynowa?? je na kartach pami??ci. Co?? co nigdy si?? nie powt??rzy ma szanse pozostania z nami na zawsze. To d????enie to zapisywania chwil pcha??o fotografi?? do przodu przez setki lat. Jestem pewny, ??e w najbli??szej przysz??o??ci nic w tym temacie nie ulegnie radykalnym zmianom.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Je??li szukaj?? Pa??stwo profesjonalnego fotografa ??lubnego na Bochni, serdecznie zapraszam do przejrzenia mojego portfolio i przejrzenia zdj??c na blogu. Wa??ne, aby wybra?? fotografa, kt??ry spe??nia wszystkie Wasze oczekiwania i jest w stanie stworzy?? pi??kn?? pami??tk?? na lata.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA BOCHNIA - CENNIK US??UG
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
          Pewnie my??licie, ??e tanio ju?? by??o. Nie jest to regu????. Cena za us??ugi fotograficzne zwi??zane ze ??lubem mo??e si?? r????ni?? w zale??no??ci od do??wiadczenia fotografa, jako??ci sprz??tu, ilo??ci godzin pracy, liczby wykonanych zdj???? itp. Ceny fotografii ??lubnej mog?? waha?? si?? od kilkuset do nawet kilku tysi??cy z??otych. Wa??ne, aby dok??adnie zapozna?? si?? z ofert?? fotograf??w, por??wna?? ceny i mie?? pewno????, ??e otrzymuje si?? us??ug?? mo??e nie najta??sz??, ale w doskona??ej jako??ci. Zawesze poszukujcie fotografa, kt??ry mo??e zaoferowa?? bardzo dobre zdj??cia w rozs??dnej cenie.
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