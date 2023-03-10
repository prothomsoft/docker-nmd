import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";

const fotograf_slubny_portfolio_2023_044 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_044.webp";
const fotograf_slubny_portfolio_2023_047 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_047.webp";
const fotograf_slubny_portfolio_2023_048 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_048.webp";
const fotograf_slubny_portfolio_2023_049 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_049.webp";
const fotograf_slubny_portfolio_2023_051 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_051.webp";
const fotograf_slubny_portfolio_2023_052 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_052.webp";
const fotograf_slubny_portfolio_2023_053 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_053.webp";
const fotograf_slubny_portfolio_2023_054 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_054.webp";
const fotograf_slubny_portfolio_2023_055 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_055.webp";
const fotograf_slubny_portfolio_2023_057 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_057.webp";
const fotograf_slubny_portfolio_2023_058 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_058.webp";
const fotograf_slubny_portfolio_2023_059 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_059.webp";
const fotograf_slubny_portfolio_2023_060 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_060.webp";
const fotograf_slubny_portfolio_2023_061 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_061.webp";
const fotograf_slubny_portfolio_2023_063 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_063.webp";
const fotograf_slubny_portfolio_2023_064 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_064.webp";
const fotograf_slubny_portfolio_2023_065 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_065.webp";
const fotograf_slubny_portfolio_2023_066 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_066.webp";
const fotograf_slubny_portfolio_2023_068 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_068.webp";
const fotograf_slubny_portfolio_2023_069 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_069.webp";
const fotograf_slubny_portfolio_2023_070 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_070.webp";
const fotograf_slubny_portfolio_2023_071 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_071.webp";
const fotograf_slubny_portfolio_2023_072 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_072.webp";
const fotograf_slubny_portfolio_2023_074 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_074.webp";
const fotograf_slubny_portfolio_2023_075 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_075.webp";
const fotograf_slubny_portfolio_2023_077 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_077.webp";
const fotograf_slubny_portfolio_2023_078 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_078.webp";
const fotograf_slubny_portfolio_2023_079 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_079.webp";
const fotograf_slubny_portfolio_2023_667 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_667.webp";
const fotograf_slubny_portfolio_2023_668 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_668.webp";

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "impresja_jordanow_start.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_053
    },
    {
        image: fotograf_slubny_portfolio_2023_075
    },
    {
        image: fotograf_slubny_portfolio_2023_074
    },
    {
        image: fotograf_slubny_portfolio_2023_047
    },
    {
        image: fotograf_slubny_portfolio_2023_048
    },
    {
        image: fotograf_slubny_portfolio_2023_049
    },
    {
        image: fotograf_slubny_portfolio_2023_051
    },
    {
        image: fotograf_slubny_portfolio_2023_667
    },
    {
        image: fotograf_slubny_portfolio_2023_052
    },
    {
        image: fotograf_slubny_portfolio_2023_044
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_054
    },
    {
      image: fotograf_slubny_portfolio_2023_055
    },
    {
      image: fotograf_slubny_portfolio_2023_057
    },
    {
      image: fotograf_slubny_portfolio_2023_077
    },
    {
      image: fotograf_slubny_portfolio_2023_063
    },
    {
      image: fotograf_slubny_portfolio_2023_059
    },
    {
      image: fotograf_slubny_portfolio_2023_060
    },
    {
      image: fotograf_slubny_portfolio_2023_668
    },
    {
      image: fotograf_slubny_portfolio_2023_061
    },
    {
      image: fotograf_slubny_portfolio_2023_058
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_065
    },
    {
      image: fotograf_slubny_portfolio_2023_066
    },
    {
      image: fotograf_slubny_portfolio_2023_064
    },
    {
      image: fotograf_slubny_portfolio_2023_068
    },
    {
      image: fotograf_slubny_portfolio_2023_079
    },
    {
      image: fotograf_slubny_portfolio_2023_069
    },
    {
      image: fotograf_slubny_portfolio_2023_072
    },
    {
      image: fotograf_slubny_portfolio_2023_070
    },
    {
      image: fotograf_slubny_portfolio_2023_078
    },
    {
      image: fotograf_slubny_portfolio_2023_071
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Fotograf ??lubny w Ma??opolsce, o co zapyta???",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bardzo cz??sto fotografowie oferuj?? mo??liwo???? podpisania umowy na zdj??cia ??lubne przez internet. Pomy??lcie, czy czasem nie lepiej si?? spotka??, ogl??dn???? przyk??adowe ksi????ki, porozmawia?? i pozna?? fotografa zanim zaprosicie go do siebie do domu. Takie spotkanie to naprawd?? doskona??y spos??b u??atwiaj??cy podj??cie dobrej decyzji."
        }
    },{
        "@type": "Question",
        "name": "Ile kosztuje i co zawiera oferowany pakiet ??lubny?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fotoksi????ka o grubo??ci 140 stron w formacie 30x30 i twardej oprawie, plener w wybranym przez Was dniu po ??lubie i dojazd w dniu ??lubu wliczony w cen?? pakietu. Tak to dodatkowe rzeczy, kt??re wyr????niaj?? moj?? ofert?? ??lubn?? w??r??d ofert innych fotograf??w w ma??opolsce. Spotkajmy si?? w Krakowie, porozmawiajmy i by?? mo??e to ja b??d?? m??g?? towarzyszy?? Wam w tym najwa??niejszym dniu."
        }
    },{
      "@type": "Question",
      "name": "Na co zwr??ci?? uwag?? przegl??daj??c zdj??cia fotografa?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ponadczasowy styl fotografii, kt??re powinny by?? r??wnie dobre w odbiorze dzisiaj jak i za kolejnych sto lat. Przegl??danie zdj???? na blogu czy w wydrukowanej fotoksi????ce powinno wywo??ywa?? w nas emocje. Zdj??cia nie powinny by?? pozowane, najbardziej lubicie przecie?? spontaniczne kadry, kiedy to nie my??l??c o obecno??ci fotografa wygl??dacie naturalnie."
      }
    },{
      "@type": "Question",
      "name": "Czy s?? przewidziane jakie?? op??aty dodatkowe?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oczywi??cie, ??e nie. Wszystkie istotne informacje s?? zawarte w ofercie ??lubnej. Cena pakietu jest sta??a i nie zale??y od inflacji. Kr??tko m??wi??c, podpisuj??c umow?? mo??ecie z pewno??ci?? spa?? spokojnie. Bardzo cz??sto umow?? fotografii ??lubnej podpisuje si?? z dwuletnim wyprzedzeniem. Nie ma si?? co martwi?? w oczekiwaniu na ??lub czas biegnie super szybko."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ??lubny Ma??opolska"
      description="Fotograf ??lubny Ma??opolska"
      keywords="fotograf ??lubny Ma??opolska"
      url="https://99foto.pl/fotograf-slubny-malopolska/"
      leadNames="JUSTYNA i DAMIAN"
      leadTitle="SYLWESTROWY ??LUB, SALA BANKIETOWA IMPRESJA JORDAN??W"
      leadUrl="/sylwestrowy-slub-sala-bankietowa-impresja-jordanow"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ??LUBNY MA??OPOLSKA
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Czy trudno jest znale???? dobrego fotografa ??lubnego w ma??opolsce. Nikt nie jest w stanie dok??adnie odpowiedzie?? na to pytanie, poniewa?? uzale??nione jest to od wielu r????nych czynnik??w, takich jak na przyk??ad popularno???? i dost??pno???? fotograf??w,  jak r??wnie?? od indywidualnych preferencji i potrzeb klient??w. Tak czy inaczej, ka??dy pr??dzej czy p????niej b??dzie musia?? podj???? decyzj?? o podj??ciu wsp????pracy z fotografem ??lubnym, aby uwieczni?? wa??ne chwile ze ??lubu i wesela. Moja rada to poszuka?? w internecie, por??wna?? portfolio i opinie r????nych klient??w, a tak??e skontaktowa?? si?? z fotografem osobi??cie, aby upewni?? si??, ??e jest to odpowiedni cz??owiek, kt??ry spe??ni Twoje potrzeby i nie przekroczy bud??etu.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Warto zwr??ci?? uwag?? na do??wiadczenie i profesjonalizm fotografa oraz jego umiej??tno???? dostosowywania si?? do wymaga?? klient??w. Je??eli szukasz <strong>najlepszego fotografa ??lubnego w ma??opolsce</strong> to doskonale trafi??e??. Fotografowa?? na Waszym ??lubie b??dzie dla mnie zaszczytem i wspania???? przygod??. Nazywam si?? Tomasz Prokop, mieszkam w Krakowie. Polecam swoje us??ugi fotograficzne.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ??LUBNY MA??OPOLSKA - JAKI POWINIEN BY???
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Je??li szukasz profesjonalnego fotografa na Tw??j ??lub, to oznacza, ??e chcesz kogo??, kto jest tw??rczy, oryginalny i niestandardowy w swoim podej??ciu do fotografowania. Taki fotograf powinien chcie?? wykorzysta?? niekonwencjonalne uj??cia i perspektywy, eksperymentowa?? z r????nymi technikami i stylami, aby stworzy?? unikalne i niezapomniane zdj??cia z Twojego ??lubu.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          KRAK??W, TATRY, PARKI NARODOWE i ZAMKI - FOTOGRAF ??LUBNY MA??OPOLSKA
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Ma??opolska to region w Polsce z pi??knymi krajobrazami i zabytkami, kt??re mog?? stworzy?? niezwyk??e okoliczno??ci dla ??lubu i pleneru zdj??ciowego. Oto kilka propozycji miejsc, kt??re mog?? by?? interesuj??ce dla pary m??odej. Krak??w, miasto pe??ne zabytk??w i historii, oferuje pi??kne krajobrazy z Wawelem, Rynkiem G????wnym, a tak??e zabytkowymi ko??cio??ami i pa??acami. Tatry, najwy??sze g??ry w Polsce, oferuj??ce monumentalne widoki i naturalne t??o dla zdj???? z pleneru. Ojcowski Park Narodowy, pi??kne krajobrazy i malownicze jaskinie, kt??re mog?? stanowi?? dope??nienie zdj???? plenerowych. Zamek w Pieskowej Skale po??o??ony w malowniczej okolicy, w kt??rym mo??na zrobi?? zdj??cia w kru??gankach zamkowych, ogrodzie i pobliskim parku. Te miejsca to tylko kilka przyk??ad??w z wielu mo??liwo??ci, kt??re oferuje Ma??opolska. Wi??cej rekomendacji i zdj???? z wybranych miejsc z pewno??ci?? znajdziecie przegl??daj??c mojego bloga.
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Czy o miejscu na plener ??lubny musisz decydowa?? samodzielnie? Mo??esz, ale nie musisz. Istniej?? fotografowie ??lubni, kt??rzy oferuj?? us??ug?? doboru miejsca na plener ??lubny. Ja bardzo ch??tnie pomog?? i doradz?? w wyborze odpowiedniego miejsca. B??dzie to o tyle u??atwione, ??e w wi??kszo??ci tych miejsc mia??em ju?? okazj?? by??, wi??c moje rekomendacje b??d?? warte Waszej uwagi.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          MA??OPOLSKA - JAKA SALA WESELNA B??DZIE DLA MNIE ODPOWIEDNIA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Ma??opolska to region w Polsce z wieloma pi??knymi salami weselnymi. Wybieraj??c sal?? weseln?? wa??ne jest by okre??li?? ilo???? os??b, kt??re zapraszasz na ??lub. S?? miejsce idealne na mniejsze przyj??cia weselne takie jak Restauracja Grube Ryby w Zabierzowie czy Dw??r Kocio??ek w Dobczycach. Organizuj??c du??e przyj??cie mo??ecie rozwa??y?? sale weselne z rozmachem Kabanosa w Spytkowicach, Nedan w Pcimiu, Impresja w Jordanowie. Wybieraj??c fotografa ??lubnego w ma??opolsce zwykle macie ju?? podpisan?? umow?? na sal?? weseln??, ale te kilka drobnych wskaz??wek na pewno nie zaszkodzi.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA MA??OPOLSKA - PONADCZASOWO???? ZDJ????
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Ponadczasowa obr??bka zdj???? ??lubnych oznacza, ??e zdj??cia s?? przetwarzane w taki spos??b, aby wygl??da??y pi??knie i elegancko, bez u??ycia efekt??w modyfikuj??cych, kt??re mog?? by?? uwa??ane za przestarza??e po pewnym czasie. Kolory na takich zdj??ciach powinny by?? naturalne i ??ywe, ostro???? tych zdj???? powinna by?? tak dobrana, ??eby by??y one wyra??ne i czytelne, nie zaszkodzi te?? usun???? drobne niedoskona??o??ci sk??ry, takie jak zmarszczki czy przebarwienia. Modyfikacje te jednak powinny by?? wprowadzane bardzo ostro??nie, by nie zatraci?? pocz??tkowego charakteru zdj??cia.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Szukaj??c profesjonalnego fotografa ??lubnego w ma??opolsce, warto bli??ej zapozna?? si?? z moim portfolio, wys??a?? maila lub skorzysta?? z formularza kontaktowego na stronie internetowej, by otrzyma?? ofert?? fotografii ??lubnej w ma??opolsce. Wa??ne, aby wybra?? fotografa, kt??ry spe??nia wszystkie oczekiwania i jest w stanie zapewni?? ponadczasowo???? zdj????.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA MA??OPOLSKA - KOSZTY
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
          Koszt fotogafii ??lubnej to nie tylko obecno???? fotografa w dniu ??lubu. Pami??tajmy, ??e po powrocie do domu zdj??cia ??lubne musz?? zosta?? poddane selekcji, nast??pnie dok??adnej obr??bce graficznej. Przygotowanie zdj???? do publikacji w galerii internetowej, uk??adanie album??w ??lubnych i ksi????ek to r??wnie?? zaj??cie czasoch??onne. Ka??da para ma dodatkowy dzie?? na czterogodzinn?? sesj?? plenerow??, kt??ra jest nieod????czn?? cz????ci?? reporta??u ??lubnego. Praca nad jednym ??lubem to blisko siedemdziesi??t godzin fotografowania i przygotowania zdj???? do oddania w um??wionej formie.
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
                      a4={schemaData.mainEntity[3].acceptedAnswer.text} />
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