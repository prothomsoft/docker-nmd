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
const fotograf_slubny_portfolio_2023_213 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_213.webp";
const fotograf_slubny_portfolio_2023_214 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_214.webp";
const fotograf_slubny_portfolio_2023_215 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_215.webp";
const fotograf_slubny_portfolio_2023_218 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_218.webp";
const fotograf_slubny_portfolio_2023_219 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_219.webp";

const fotograf_slubny_portfolio_2023_644 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_644.webp";
const fotograf_slubny_portfolio_2023_645 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_645.webp";
const fotograf_slubny_portfolio_2023_648 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_648.webp";
const fotograf_slubny_portfolio_2023_650 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_650.webp";


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
      image: fotograf_slubny_portfolio_2023_644
    },
    {
      image: fotograf_slubny_portfolio_2023_214
    },
    {
      image: fotograf_slubny_portfolio_2023_213
    },
    {
      image: fotograf_slubny_portfolio_2023_645
    },
    {
      image: fotograf_slubny_portfolio_2023_215
    },
    {
      image: fotograf_slubny_portfolio_2023_648
    },
    {
      image: fotograf_slubny_portfolio_2023_650
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
            "text": "Pustynia B????dowska, Zielone Jeziorka w miejscowo??ci Klucze, G??ra Zbor??w i zak??tki Jury Krakowsko-Cz??stochowskiej to miejsca ??wietne na plener ??lubny. Doskona??ym miejscem jest te?? Zamek w Ogrodzie??cu."
        }
    },{
        "@type": "Question",
        "name": "Ile czasu trwa plener ??lubny?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plener ??lubny trwa zazwyczaj kilka godzin, zwykle trzy, czasami cztery godziny. Nie nale??y obawia?? si?? i kr??powa?? przy mojej obecno??ci. Kluczem do wspania??ego pleneru ??lubnego jest stworzenie lu??niej i swobodnej atmosfery, o co ja osobi??cie zadbam. Staniemy si?? dobrymi znajomymi, dzi??ki czemu sesja plenerowa b??dzie dla Was wielk?? przyjemno??ci??."
        }
    },{
      "@type": "Question",
      "name": "Kto mo??e pom??c w organizacji wesela?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lista podwykonawc??w jest naprawd?? d??uga. Zacznijmy od konsultanta ??lubnego, nast??pnie musimy zarezerwowa?? sal?? i zesp???? weselny. P????niej fotografa i czasami kamerzyst??. Cz??sto te?? zesp???? weselny zast??puje DJ i organizator zabaw dla najm??odszych go??ci czyli animator. Przyda nam si?? te?? fajny samoch??d z kierowc??."
      }
    },{
      "@type": "Question",
      "name": "Co sk??ada si?? na koszt fotografii ??lubnej?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fotografowie ??lubni oferuje kilka r????norodnych pakiet??w, z kt??rych ka??dy r????ni si?? cen?? oraz zawarto??ci??: liczb?? godzin pracy fotografa, zakresem us??ug np. dodatkowa sesja plenerowa w innym dniu oraz ilo??ci?? zdj???? oraz dodatk??w jak np. odbitki, albumy, no??nik danych. To te czynniki maj?? wp??yw na ko??cow?? cen?? us??ugi fotograficznej."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ??lubny Olkusz"
      description="Fotograf ??lubny Olkusz, ??lub w Olkuszu, reporta?? ze ??lubu"
      keywords="fotograf ??lubny Olkusz, ??lub w Olkuszu, reporta?? ze ??lubu"
      url="https://99foto.pl/fotograf-slubny-olkusz/"
      leadNames="SYLWIA i MICHA??"
      leadTitle="WESELE W STYLU BOHO, SALA DWORZYSZCZE WOLA, KRAK??W"
      leadUrl="/wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ??LUBNY OLKUSZ
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Wyb??r w??a??ciwego fotografa ??lubnego w Olkuszu jest bardzo istotn?? spraw?? podczas organizacji wesela. Czy wyobra??acie sobie, aby Wasze wesele odby??o si?? bez obecno??ci fotografa ??lubnego? Na pewno nie. Fotograf to osoba, kt??ra pozwoli zapami??ta?? Wam ka??dy, nawet najdrobniejszy szczeg???? z Waszego wesela. Jest to naprawd?? wa??ne, poniewa?? ten wyj??tkowy klimat, tworz?? najmniejsze detale, o kt??rych niestety z czasem zapominamy.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Je??eli wi??c zale??y Wam na wspania??ej fotografii ??lubnej w Olkuszu to ??wietnie trafili??cie. Pozw??lcie, ??e si?? przedstawi?? - nazywam si?? Tomek Prokop i podpowiem Wam na co zwr??ci?? uwag??, wybieraj??c <strong>odpowiedniego fotografa na Wasze wesele w Olkuszu</strong>.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
           JAKI POWINIEN BY?? FOTOGRAF ??LUBNY Z OLKUSZA?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
          Fotograf ??lubny powinien mie?? do??wiadczenie w pracy z parami m??odymi, zna?? techniki fotografowania i generalnie potrafi?? robi?? zdj??cia. Powinien te?? by?? elastyczny i potrafi?? dostosowa?? si?? do potrzeb i oczekiwa?? klient??w. Wa??ne, aby fotograf ??lubny by?? tak??e osob??, z kt??r?? m??oda para czuje si?? swobodnie i komfortowo, poniewa?? w ten spos??b zdj??cia b??d?? bardziej autentyczne.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          JAKIEGO FOTOGRAFA WYBRA???
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Najlepiej wybra?? mnie. Koniecznie powinni??cie sprawdzi?? moje wcze??niejsze realizacje i zapyta?? o rekomendacje znajomych lub osoby udzielaj??ce si?? na forach tematycznych.
        Zach??cam tak??e do spotkania na kawie. Sprawd??cie kim jestem. Ni?? porozumienia na innej stopie ni?? zawodowa, pomo??e Wam opanowa?? skr??powanie, a by?? mo??e ograniczy stres towarzysz??cy pozowaniu do zdj???? w dniu ??lubu.
        Obiecuj??, ??e mi??o sp??dzimy czas, a Wy poznacie wszystkie niuansy zwi??zane z fotografowaniem ??lubu.
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
          OLKUSZ - MIEJSCA NA ??LUB I SESJ?? W PLENERZE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        W Olkuszu istnieje kilka miejsc, w kt??rych mo??na zorganizowa?? ??lub i plener ??lubny. Oto kilka mo??liwo??ci - Zamek w Olkuszu, Pa??ac w Olkuszu, Hotel & SPA Zamek Gniew - to nowoczesny hotel, kt??ry oferuje przestronne sale do organizacji ??lub??w i plener??w, Park miejski - to pi??kny teren zielony i Dw??r w Olkuszu. Finalna decyzja nale??y do Was.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA OLKUSZ - OKO REPORTA??YSTY
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Zajmuj?? si?? reporta??em ??lubnym oraz sesjami w plenerze. Zale??y mi na tym, aby zdj??cia ??lubne, by??y naturalne i pe??ne emocji. 
        Emocje na zdj??ciach ??lubnych s?? mega wa??ne, bo to one s?? najlepszym no??nikiem wspomnie??. Fotograf ??lubny w Olkuszu, kt??ry unika re??yserowania i ci??g??ego dyrygowania Wami? Zapraszam do wype??nienia formularza kontaktowego.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Je??li szukaj?? Pa??stwo profesjonalnego fotografa ??lubnego w Olkuszu, to warto rozpocz???? od zasi??gni??cia opinii w??r??d znajomych i rodziny oraz przejrzenia portfolio r????nych fotograf??w i por??wnania ich styl??w i cen. Wa??ne, aby wybra?? fotografa, kt??ry spe??nia wszystkie oczekiwania i jest w stanie stworzy?? pi??kn?? pami??tk?? na lata.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA OLKUSZ - ILE TO KOSZTUJE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
          Cena za us??ugi fotograficzne zwi??zane z ??lubem mo??e si?? r????ni?? w zale??no??ci od do??wiadczenia fotografa, jako??ci sprz??tu, ilo??ci godzin pracy lub liczby wykonanych zdj????. Niskie ceny to takie z przedzia??u do trzech tysi??cy z??otych za reporta??, ??redni pu??ap cen wpada pomi??dzy trzy, a cztery tysi??ce z??otych za reporta??. Wysoki pu??ap cen to ceny powy??ej czterech tysi??cy z??otych za reporta??. Nie warto decydowa?? si?? na najta??sz?? opcj??, poniewa?? zdj??cia ??lubne to pami??tka na lata i nale??y zadba?? o ich jako????. Z drugiej strony, warto pami??ta??, ??e cena nie zawsze jest wyznacznikiem jako??ci i warto poszuka?? fotografa, kt??ry jest w stanie zaoferowa?? dobr?? us??ug?? w rozs??dnej cenie.
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