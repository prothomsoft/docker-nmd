import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";

const fotograf_slubny_portfolio_2023_120 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_120.webp";
const fotograf_slubny_portfolio_2023_121 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_121.webp";
const fotograf_slubny_portfolio_2023_122 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_122.webp";
const fotograf_slubny_portfolio_2023_123 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_123.webp";
const fotograf_slubny_portfolio_2023_124 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_124.webp";
const fotograf_slubny_portfolio_2023_125 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_125.webp";
const fotograf_slubny_portfolio_2023_126 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_126.webp";
const fotograf_slubny_portfolio_2023_127 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_127.webp";
const fotograf_slubny_portfolio_2023_128 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_128.webp";
const fotograf_slubny_portfolio_2023_129 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_129.webp";
const fotograf_slubny_portfolio_2023_131 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_131.webp";
const fotograf_slubny_portfolio_2023_132 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_132.webp";
const fotograf_slubny_portfolio_2023_133 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_133.webp";
const fotograf_slubny_portfolio_2023_134 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_134.webp";
const fotograf_slubny_portfolio_2023_137 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_137.webp";
const fotograf_slubny_portfolio_2023_139 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_139.webp";
const fotograf_slubny_portfolio_2023_140 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_140.webp";
const fotograf_slubny_portfolio_2023_141 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_141.webp";
const fotograf_slubny_portfolio_2023_142 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_142.webp";
const fotograf_slubny_portfolio_2023_143 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_143.webp";
const fotograf_slubny_portfolio_2023_144 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_144.webp";
const fotograf_slubny_portfolio_2023_145 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_145.webp";
const fotograf_slubny_portfolio_2023_146 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_146.webp";
const fotograf_slubny_portfolio_2023_148 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_148.webp";
const fotograf_slubny_portfolio_2023_149 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_149.webp";
const fotograf_slubny_portfolio_2023_152 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_152.webp";
const fotograf_slubny_portfolio_2023_153 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_153.webp";
const fotograf_slubny_portfolio_2023_154 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_154.webp"
const fotograf_slubny_portfolio_2023_655 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_655.webp";
const fotograf_slubny_portfolio_2023_657 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_657.webp";

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "karolinka_bystra_podhalanska_wesele.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_128
    },
    {
        image: fotograf_slubny_portfolio_2023_121
    },
    {
        image: fotograf_slubny_portfolio_2023_122
    },
    {
        image: fotograf_slubny_portfolio_2023_123
    },
    {
        image: fotograf_slubny_portfolio_2023_124
    },
    {
        image: fotograf_slubny_portfolio_2023_125
    },
    {
        image: fotograf_slubny_portfolio_2023_126
    },
    {
        image: fotograf_slubny_portfolio_2023_127
    },
    {
        image: fotograf_slubny_portfolio_2023_120
    },
    {
        image: fotograf_slubny_portfolio_2023_129
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_154
    },
    {
      image: fotograf_slubny_portfolio_2023_139
    },
    {
      image: fotograf_slubny_portfolio_2023_132
    },
    {
      image: fotograf_slubny_portfolio_2023_133
    },
    {
      image: fotograf_slubny_portfolio_2023_134
    },
    {
      image: fotograf_slubny_portfolio_2023_152
    },
    {
      image: fotograf_slubny_portfolio_2023_153
    },
    {
      image: fotograf_slubny_portfolio_2023_137
    },
    {
      image: fotograf_slubny_portfolio_2023_655
    },
    {
      image: fotograf_slubny_portfolio_2023_131
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_140
    },
    {
      image: fotograf_slubny_portfolio_2023_141
    },
    {
      image: fotograf_slubny_portfolio_2023_142
    },
    {
      image: fotograf_slubny_portfolio_2023_143
    },
    {
      image: fotograf_slubny_portfolio_2023_144
    },
    {
      image: fotograf_slubny_portfolio_2023_145
    },
    {
      image: fotograf_slubny_portfolio_2023_146
    },
    {
      image: fotograf_slubny_portfolio_2023_657
    },
    {
      image: fotograf_slubny_portfolio_2023_148
    },
    {
      image: fotograf_slubny_portfolio_2023_149
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Czy sesj?? ??lubn?? musimy zam??wi?? od razu przy rezerwacji Ciebie na nasz ??lub?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oczywi??cie, ??e nie. Nawet doradzam swoim Par?? aby na sesj?? podobnie jak na album decydowa??y si?? ju?? po dniu ??lubu. B??dziecie zna?? lepiej sw??j bud??et oraz dost??pno???? czasow??. Sesja dla moich Par kosztuje tyle samo w dniu podpisania umowy i po ??lubie. Nie musicie si?? ba??, ??e koszty wzrosn??."
        }
    },{
        "@type": "Question",
        "name": "Jak si?? przygotowa?? do sesji ??lubnej?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Przede wszystkim musicie przyjecha?? w ??wietnym humorze. Musicie by?? zgodni co do tego gdzie i kiedy chcecie aby odby??a si?? sesja. Warto zadba?? o make-up i fryzur?? - mog?? by?? du??o bardziej odwa??ne ni?? w dniu ??lubu. Dodatki s?? wykazane - warto je dostosowa?? do miejsca. W lesie czy na ????ce wianek zawsze b??dzie dobrym pomys??em."
        }
    },{
      "@type": "Question",
      "name": "Czy podczas sesji w plenerze mo??e by?? obecny filmowiec lub inny fotograf?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tutaj musicie si?? zda?? na moje do??wiadczenie w tym temacie i pozwoli?? mi dzia??a?? samemu. Sesja fotograficzna i filmowa w tym samym czasie nie jest dobrym pomys??em. Konwencja takich sesji jest zupe??nie inna. Film to w du??ej mierze re??yserowanie, a ja na sesji chc?? pokaza?? Wasz?? naturalno????, czu??o???? i blisko????. Oczywi??cie b??d?? Wam pomaga?? w ???pozowaniu??? ale ca??o???? opiera?? si?? b??dzie na Was bez re??yserii."
      }
    },{
      "@type": "Question",
      "name": "Czy sesja narzecze??ska jest potrzebna?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nie jest konieczna ale jest ??wietn?? okazj?? aby??my si?? lepiej poznali. Pozwoli Wam oswoi?? si?? z aparatem oraz moj?? obecno??ci??. Po sesji narzecze??skiej moja obecno???? w dniu ??lubu na pewno nie b??dzie Was stresowa??. B??dziemy ju?? znajomymi, kt??rzy s?? na Ty."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ??lubny Wieliczka"
      description="Fotograf ??lubny Wieliczka, zdj??cia ??lubne w kopalni Soli, spontaniczny reporta?? ??lubny"
      keywords="fotograf ??lubny Wieliczka, zdj??cia ??lubne w kopalni Soli, spontaniczny reporta?? ??lubny"
      url="https://99foto.pl/fotograf-slubny-wieliczka/"
      leadNames="NATALIA i TOMASZ"
      leadTitle="WESELE W BYSTREJ I OGR??D PE??EN LAWENDY W KLIMONTOWIE"
      leadUrl="/wesele-w-bystrej-i-ogrod-pelen-lawendy-w-klimontowie"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ??LUBNY WIELICZKA
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Witaj na mojej stronie internetowej. Je??eli szukasz najlepszego fotografa ??lubnego w Wieliczce to jest do bardzo dobry adres. Je??eli cenisz sobie w zdj??ciach naturalno????, chcesz widzie?? emocje i brak pozowanych kadr??w to tym bardziej zach??cam Ciebie do zapoznania si?? z moj?? ofert?? ??lubn??.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Jestem fotografem zajmuj??cym si?? g????wnie reporta??ami ??lubnymi. Pracuj?? w Wieliczce. Szukam naturalnych i prawdziwych moment??w, aby utrwali?? je w rzeczywistym i szczerym wydaniu na moich fotografiach. Mam nadzieje, ??e album wype??niony tego rodzaju fotografiami przypomni Wam o wa??nym dniu Waszego ??lubu w przysz??o??ci.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ??LUBNY WIELICZKA - JAKI POWINIEN BY???
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Dbam o przyjazn?? wsp????prac?? podczas zlecenia i przede wszystkim ceni?? poczucie humoru, kt??re zawsze dobrze wp??ywa na finalny efekt zdj???? ??lubnych. Staram si?? w swojej fotografii ??lubnej wydobywa?? z ludzi to, co najciekawsze, to co najpi??kniejsze i my??l??, ??e najwa??niejsz?? cech??, czyli wasz?? indywidualno????. Skrupulatnie obserwuj?? ludzi i podtrzymuj?? na zdj??ciach charakterystyczne cechy osobowo??ci.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA WIELICZKA - POMOCNA D??O??
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Osobom, kt??re nie do ko??ca czuj?? si?? komfortowo przed obiektywem, s??u???? pomoc?? i dobr?? rad??. Lubi?? improwizowa?? podczas sesji zdj??ciowej w plenerze daje to zawsze naturalne i oryginalne efekty. Gwarantuj?? dobr?? zabaw?? i lu??n?? atmosfer??. Fotografia ??lubna w Wieliczce i nie tylko. Zapraszam do zanurkowania g????biej w moje portfolio. 
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF WIELICZKA - CZY DO??WIADCZENIE MA ZNACZENIE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Ma, ale nie stawia??bym go na pierwszym miejscu. Poniewa?? ono wcale nie jest r??wnoznaczne z umiej??tno??ciami. I my??l?? te?? sobie, ??e nie ma co tu uog??lnia?? i dyskryminowa?? kogokolwiek ze wzgl??du na wiek, lata pracy czy jakiekolwiek inne kryteria. Emocjonuj??cy reporta?? mo??e zrealizowa?? fotograf z wieloletnim sta??em, kt??ry kocha to, co robi, robi??c to fantastycznie. ??wietne zdj??cia mo??e te?? wykona?? osoba zafascynowana fotografi?? ??lubn??, kt??ra stosunkowo niedawno rozpocz????a przygod?? z tym zawodem. Licz?? si?? efekty. Jeste?? tak dobry jak Tw??j ostatni sezon.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA WIELICZKA - PAMI??TKA NA LATA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Fotografia ??lubna to niezwykle wa??na pami??tka, kt??ra b??dzie przypomina?? o pi??knym dniu ??lubu i wszystkich emocjach z nim zwi??zanych. Dlatego tak wa??ne jest, aby wybra?? dobrego fotografa, kt??ry potrafi uchwyci?? wa??ne chwile i emocje oraz stworzy?? pi??kne i unikalne zdj??cia, kt??re b??d?? cieszy?? oko i wzrusza?? na d??ugie lata.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Je??li szukaj?? Pa??stwo profesjonalnego fotografa ??lubnego w Wieliczce, warto zapyta?? znajomych oraz przegl??dn???? wyniki wyszuka?? w internecie. Ilo???? fotograf??w ??lubnych jest du??a, wiele jest te?? styl??w i trudno szuka?? ujednoliconego cennika us??ug fotografii ??lubnej. Wa??ne, aby wybra?? fotografa, kt??ry spe??nia wszystkie Wasze oczekiwania i jest w stanie stworzy?? pi??kn?? pami??tk?? na lata.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA WIELICZKA - SESJA NARZECZE??SKA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Bardzo ch??tnie zapisz?? Wasz?? histori?? czu??o??ci, blisko??ci i mi??o??ci w kadrach pe??nych rado??ci i beztroski. Pe??ne klimatu i uczu?? chwil, kt??re ju?? nie powr??c??. Warto wykorzysta?? czas narzecze??stwa. On jest wyj??tkowy warty zapisania na fotografii. Zdj??cia wykonane podczas sesji narzecze??skiej mo??ecie dobrze wykorzysta?? w dniu ??lubu. Przygotowa?? prezentacje zdj????, wydrukowa?? pami??tkowe ksi????ki dla kochanych rodzic??w. Mo??liwo??ci jest zdecydownie wiele, sky is the limit...
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