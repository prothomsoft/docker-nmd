import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";


const fotograf_slubny_portfolio_2023_570 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_570.webp";
const fotograf_slubny_portfolio_2023_572 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_572.webp";
const fotograf_slubny_portfolio_2023_573 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_573.webp";
const fotograf_slubny_portfolio_2023_574 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_574.webp";
const fotograf_slubny_portfolio_2023_576 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_576.webp";
const fotograf_slubny_portfolio_2023_577 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_577.webp";
const fotograf_slubny_portfolio_2023_578 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_578.webp";
const fotograf_slubny_portfolio_2023_579 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_579.webp";
const fotograf_slubny_portfolio_2023_580 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_580.webp";
const fotograf_slubny_portfolio_2023_581 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_581.webp";
const fotograf_slubny_portfolio_2023_582 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_582.webp";
const fotograf_slubny_portfolio_2023_583 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_583.webp";
const fotograf_slubny_portfolio_2023_584 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_584.webp";
const fotograf_slubny_portfolio_2023_585 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_585.webp";
const fotograf_slubny_portfolio_2023_586 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_586.webp";
const fotograf_slubny_portfolio_2023_587 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_587.webp";
const fotograf_slubny_portfolio_2023_588 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_588.webp";
const fotograf_slubny_portfolio_2023_589 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_589.webp";
const fotograf_slubny_portfolio_2023_590 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_590.webp";
const fotograf_slubny_portfolio_2023_591 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_591.webp";
const fotograf_slubny_portfolio_2023_592 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_592.webp";
const fotograf_slubny_portfolio_2023_593 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_593.webp";
const fotograf_slubny_portfolio_2023_594 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_594.webp";
const fotograf_slubny_portfolio_2023_595 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_595.webp";
const fotograf_slubny_portfolio_2023_596 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_596.webp";
const fotograf_slubny_portfolio_2023_597 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_597.webp";
const fotograf_slubny_portfolio_2023_598 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_598.webp";
const fotograf_slubny_portfolio_2023_599 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_599.webp";
const fotograf_slubny_portfolio_2023_600 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_600.webp";
const fotograf_slubny_portfolio_2023_601 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_601.webp";

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "fotograf_na_slub_rabka_zdroj_start.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_570
    },
    {
        image: fotograf_slubny_portfolio_2023_599
    },
    {
        image: fotograf_slubny_portfolio_2023_600
    },
    {
        image: fotograf_slubny_portfolio_2023_572
    },
    {
        image: fotograf_slubny_portfolio_2023_573
    },
    {
        image: fotograf_slubny_portfolio_2023_574
    },
    {
        image: fotograf_slubny_portfolio_2023_601
    },
    {
        image: fotograf_slubny_portfolio_2023_576
    },
    {
        image: fotograf_slubny_portfolio_2023_577
    },
    {
        image: fotograf_slubny_portfolio_2023_578
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_580
    },
    {
      image: fotograf_slubny_portfolio_2023_579
    },
    {
      image: fotograf_slubny_portfolio_2023_581
    },
    {
      image: fotograf_slubny_portfolio_2023_582
    },
    {
      image: fotograf_slubny_portfolio_2023_583
    },
    {
      image: fotograf_slubny_portfolio_2023_584
    },
    {
      image: fotograf_slubny_portfolio_2023_585
    },
    {
      image: fotograf_slubny_portfolio_2023_586
    },
    {
      image: fotograf_slubny_portfolio_2023_587
    },
    {
      image: fotograf_slubny_portfolio_2023_588
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_589
    },
    {
      image: fotograf_slubny_portfolio_2023_590
    },
    {
      image: fotograf_slubny_portfolio_2023_591
    },
    {
      image: fotograf_slubny_portfolio_2023_592
    },
    {
      image: fotograf_slubny_portfolio_2023_593
    },
    {
      image: fotograf_slubny_portfolio_2023_594
    },
    {
      image: fotograf_slubny_portfolio_2023_595
    },
    {
      image: fotograf_slubny_portfolio_2023_596
    },
    {
      image: fotograf_slubny_portfolio_2023_597
    },
    {
      image: fotograf_slubny_portfolio_2023_598
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Sesja ??lubna ??? w dzie?? ??lubu czy innego dnia?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Moje pary w ramach fotoreporta??u ??lubnego dostaj?? sesj?? ??lubn?? w dniu ??lubu. Oddalamy si?? wtedy od zgie??ku przyj??cia weselnego, np. na ??ono natury, aby w trzydzie??ci minut zrobi?? pi??kne, romantyczne fotografie. Dla par, dla kt??rych taka sesja w dniu ??lubu to za ma??o, proponuj?? dodatkow?? sesj?? plenerow?? innego dnia. Wtedy mo??emy wybra?? si?? w dowolne miejsce w Polsce po??udniowej."
        }
    },{
        "@type": "Question",
        "name": "Czy mo??emy wykona?? zdj??cia grupowe?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jasne, zdj??cia grupowe s?? wa??ne r??wnie?? dla mnie, bo dla mnie jest wa??ne to, co dla Was! A z do??wiadczenia wiem, ??e fotografie ca??ej rodziny s?? tymi najcz????ciej ogl??danymi ??? wszyscy szukaj?? na nich swojego wizerunku. Wykonuj??c zdj??cia grupowe, aby uciec od patetyczno??ci, lubi?? wykorzysta?? jaki?? dodatkowy, niebanalny motyw, np. zimne ognie!"
        }
    },{
      "@type": "Question",
      "name": "Czy mo??emy zam??wi?? r??wnie?? albumy ??lubne?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak. Dla moich par przygotowuj?? r??wnie?? albumy ??lubne. Korzystam z profesjonalnych laboratori??w fotograficznych, dzi??ki kt??rym wiem, ??e produkty, kt??re proponuj??, s?? najwy??szej jako??ci."
      }
    },{
      "@type": "Question",
      "name": "Czy fotografujesz r??wnie?? ??luby humanistyczne?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, ??luby humanistyczne s?? coraz popularniejsze w Polsce. O tym, czym si?? charakteryzuj??, mo??ecie przeczyta?? na moim blogu."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ??lubny Szczawnica"
      description="Fotograf ??lubny Szczawnica"
      keywords="fotograf ??lubny Szczawnica"
      url="https://99foto.pl/fotograf-slubny-szczawnica/"
      leadNames="KAMILA i ADRIAN"
      leadTitle="FOTOGRAF NA WESELE RABKA ZDR??J, KO??CI???? ??W. MARII MAGDALENY"
      leadUrl="/fotograf-na-wesele-rabka-zdroj-kosciol-sw-marii-magdaleny"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ??LUBNY SZCZAWNICA
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Planowanie i organizacja ??lubu to przede wszystkim nieustanne podejmowanie decyzji. Ci??g??e wybory pomi??dzy jednym, a drugim. Nie spos??b wyliczy?? jak bardzo z??o??one jest to przedsi??wzi??cie. Je??li jeste??cie par?? poszukuj??c?? fotografa na sw??j ??lub, to doskonale wiecie o czym m??wi??. Szukaj??c osoby odpowiedzialnej za jedne z wa??niejszych zdj???? w Waszych ??yciu, przede wszystkim my??lcie o tym czego Wy oczekujecie i co Wam si?? podoba. Odstawcie na bok porady cioci, s??siadki czy rekomendacje z Waszej sali weselnej. To bardzo wa??na pami??tka. 
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Je??li rozpoczniecie przygotowania do ??lubu, szybko zauwa??ycie, ??e ze wszystkich stron jeste??cie atakowani propozycjami pomocy i wsp????pracy. W czasach, gdzie ka??dy fotograf chce wsp????pracowa?? z ka??d?? par?? - warto dobrze przemy??le?? temat ???dopasowania??? i oczekiwa??. Je??eli szukasz <strong>najlepszego fotografa ??lubnego w Szczawnicy</strong> to doskonale trafi??e??. Nazywam si?? Tomasz Prokop, mieszkam w Krakowie i zapraszam do mojego fotograficznego ??wiata.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ??LUBNY SZCZAWNICA - JAKI POWINIEN BY???
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Fotograf ??lubny to cz??owiek na kt??rego mo??esz liczy?? i polega?? na jego do??wiadczeniu. Jako Panna M??oda powinna?? r??wnie?? czu?? si?? dobrze i swobodnie w towarzystwie fotografa ??lubnego. Na pocz??tku nikt nie wie jakie zachowania s?? dobrze odbierane przez ludzi, a jakie zachowania ludzi od nas odpychaj??. Fotografuj??c kolejny ??lub i otrzymuj??c zlecenia od znajomych Par M??odych zadowolonych z wykonanego repora??u ??lubnego, zaczynasz wierzy?? w sw??j warsztat i nabierasz pewno??ci co do swojej osoby. Nieustanne doskonalenie swoich umiej??tno??ci to mega wa??na rzecz, kt??ra przydaje si?? w ??yciu, a w szczeg??lno??ci w fotografii ??lubnej. Otwarto???? jest kluczem do osi??gni??cia sukcesu w tej bran??y.
        </Typography>


        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA SZCZAWNICA - PIENINY I NIZINY
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Szczawnica to miejsce wyj??tkowe. Realizuj??c tam sesje ??lubne mo??emy rozpocz???? od Parku Zdrojowego, nast??pnie przespacerowa?? si?? wzd??u?? promenady, fotografuj??c wzd??u?? Dunajca. Mo??emy te?? wybra?? si?? znacznie wy??ej. Niejednokrotnie wychodzi??em na Wysoki Wierch, czy to od strony Szlachtowej, czy te?? pokonuj??c pierwszy etap trasy kolejk?? na Palenic??. Widok na zachodz??ce s??o??ce k??adz??ce si?? w Pieninach, z widokiem Tatr w oddali - trudno wyobrazi?? sobie lepsz?? sceneri?? dla zdj???? ??lubnych.
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Je??eli jeste??cie Par?? M??od??, kt??ra preferuje miejsca, gdzie ludzi jest troch?? mniej, plener ??lubny w Szczawnicy spe??ni Wasze oczekiwania. Poszukuj??c nie tylko fotografa, ale i przewodnika, kt??ry doskonale zna tamte strony trafili??cie doskonale. Zapraszam na mojego bloga, gdzie znajdziecie zdj??cia z miejsc, o kt??rych wspomnia??em. Do zobaczenia na reporta??u i na plenerze ??lubnym wkr??tce...
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          SZCZAWNICA - JAKIEGO FOTOGRAFA WYBRA???
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Najlepiej wybra?? mnie. Koniecznie powinni??cie sprawdzi?? moje wcze??niejsze realizacje i zapyta?? o rekomendacje znajomych lub osoby udzielaj??ce si?? na forach tematycznych. Zach??cam tak??e do spotkania na kawie. Sprawd??cie kim jestem. Ni?? porozumienia na innej stopie ni?? zawodowa, pomo??e Wam opanowa?? skr??powanie, a by?? mo??e ograniczy stres towarzysz??cy pozowaniu do zdj???? w dniu ??lubu. Obiecuj??, ??e mi??o sp??dzimy czas, a Wy poznacie wszystkie niuansy zwi??zane z fotografowaniem ??lubu.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA SZCZAWNICA - AMATOR CZY PROFESJONALISTA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Czy cz??sto para m??oda decyduje si?? na wyb??r profesjonalnego fotografa, czy mo??e liczy bardziej na zdj??cia od go??ci, kt??rzy obecni s?? na ca??ej uroczysto??ci? Pary m??ode raczej decyduj?? si?? jednak na profesjonalist??, poniewa?? go??cie nie zawsze musz?? z??apa?? ten odpowiedni moment w trakcie ??lubu lub wesela. Mog?? akurat si?? zaj???? zabaw?? w czasie, kiedy dziej?? si?? najciekawsze rzeczy.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Dodatkowo wiele os??b duchownych raczej preferuje profesjonalist?? przy o??tarzu, kt??ry zrobi zdj??cia dyskretnie i profesjonalnie nie przeszkadzaj??c w trakcie samej ceremonii ??lubu.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA SZCZAWNICA - KOSZT US??UGI
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Je??eli szukasz fotografa ??lubnego, warto wiedzie??, ??e mo??esz zam??wi?? sesj?? narzecze??sk??, sam reporta?? w dniu ??lubu (od przygotowa??, po p????ne godziny nocne) oraz sesj?? ??lubn?? w plenerze w Szczawnicy. S?? to g????wne sk??adowe ceny us??ugi fotografa ??lubnego. Dobra informacja jest taka, ??e je??eli organizujesz ??lub w Szczawnicy i wybierzesz moje us??ugi odpadaj?? Ci koszty dojazdu czy noclegu dla fotografa. Jestem z Krakowa i do Szczawnicy doje??d??am gratis.
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