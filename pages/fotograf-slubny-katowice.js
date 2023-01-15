import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";






const fotograf_slubny_portfolio_2023_603 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_603.webp";
const fotograf_slubny_portfolio_2023_604 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_604.webp";
const fotograf_slubny_portfolio_2023_605 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_605.webp";
const fotograf_slubny_portfolio_2023_606 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_606.webp";
const fotograf_slubny_portfolio_2023_607 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_607.webp";
const fotograf_slubny_portfolio_2023_608 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_608.webp";
const fotograf_slubny_portfolio_2023_609 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_609.webp";
const fotograf_slubny_portfolio_2023_610 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_610.webp";
const fotograf_slubny_portfolio_2023_611 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_611.webp";
const fotograf_slubny_portfolio_2023_613 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_613.webp";
const fotograf_slubny_portfolio_2023_614 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_614.webp";
const fotograf_slubny_portfolio_2023_615 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_615.webp";
const fotograf_slubny_portfolio_2023_616 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_616.webp";
const fotograf_slubny_portfolio_2023_617 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_617.webp";
const fotograf_slubny_portfolio_2023_618 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_618.webp";
const fotograf_slubny_portfolio_2023_619 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_619.webp";
const fotograf_slubny_portfolio_2023_620 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_620.webp";
const fotograf_slubny_portfolio_2023_621 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_621.webp";
const fotograf_slubny_portfolio_2023_622 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_622.webp";
const fotograf_slubny_portfolio_2023_623 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_623.webp";
const fotograf_slubny_portfolio_2023_624 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_624.webp";
const fotograf_slubny_portfolio_2023_625 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_625.webp";
const fotograf_slubny_portfolio_2023_626 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_626.webp";
const fotograf_slubny_portfolio_2023_627 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_627.webp";
const fotograf_slubny_portfolio_2023_628 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_628.webp";
const fotograf_slubny_portfolio_2023_629 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_629.webp";
const fotograf_slubny_portfolio_2023_630 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_630.webp";
const fotograf_slubny_portfolio_2023_631 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_631.webp";
const fotograf_slubny_portfolio_2023_632 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_632.webp";
const fotograf_slubny_portfolio_2023_634 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_634.webp";




const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "dworek_fantazja_skomielna_biala_fotograf.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_611
    },
    {
        image: fotograf_slubny_portfolio_2023_604
    },
    {
        image: fotograf_slubny_portfolio_2023_605
    },
    {
        image: fotograf_slubny_portfolio_2023_606
    },
    {
        image: fotograf_slubny_portfolio_2023_607
    },
    {
        image: fotograf_slubny_portfolio_2023_608
    },
    {
        image: fotograf_slubny_portfolio_2023_609
    },
    {
        image: fotograf_slubny_portfolio_2023_610
    },
    {
        image: fotograf_slubny_portfolio_2023_603
    },
    {
        image: fotograf_slubny_portfolio_2023_634
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_613
    },
    {
      image: fotograf_slubny_portfolio_2023_614
    },
    {
      image: fotograf_slubny_portfolio_2023_615
    },
    {
      image: fotograf_slubny_portfolio_2023_616
    },
    {
      image: fotograf_slubny_portfolio_2023_617
    },
    {
      image: fotograf_slubny_portfolio_2023_618
    },
    {
      image: fotograf_slubny_portfolio_2023_619
    },
    {
      image: fotograf_slubny_portfolio_2023_620
    },
    {
      image: fotograf_slubny_portfolio_2023_621
    },
    {
      image: fotograf_slubny_portfolio_2023_622
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_631
    },
    {
      image: fotograf_slubny_portfolio_2023_624
    },
    {
      image: fotograf_slubny_portfolio_2023_625
    },
    {
      image: fotograf_slubny_portfolio_2023_626
    },
    {
      image: fotograf_slubny_portfolio_2023_627
    },
    {
      image: fotograf_slubny_portfolio_2023_628
    },
    {
      image: fotograf_slubny_portfolio_2023_629
    },
    {
      image: fotograf_slubny_portfolio_2023_630
    },
    {
      image: fotograf_slubny_portfolio_2023_623
    },
    {
      image: fotograf_slubny_portfolio_2023_632
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Ile kosztuje reportaż ze ślubu i wesela na Śląsku?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oferuję 3 pakiety, z których wybieracie ten najbardziej dopasowany do Waszych potrzeb i oczekiwań - skrócony, pełny i rozszerzony. Różnią się one od siebie kilkoma szczegółami, ale jedna rzecz pozostaje wspólna. Bez względu na to, jaki wariant wybierzecie zawsze otrzymacie wyjątkowe fotografie ślubne ze Śląska, które będą wspaniałą pamiątką na lata. Jeśli chcecie wiedzieć więcej, zapraszam do zakładki oferta. Znajdziecie tam dokładne informacji dotyczące poszczególnych pakietów. Jeśli w trakcie czytania pojawią się jakieś pytania, zapraszam do kontaktu przez formularz kontaktowy."
        }
    },{
        "@type": "Question",
        "name": "Ile zdjęć składa się na nasz reportaż ze ślubu/wesela?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ilość fotografii jest uzależniona od wyboru pakietu. W najbardziej ekonomicznej wersji otrzymujecie 100 zdjęć wydrukowanych na papierze oraz 300 zdjęć w wersji cyfrowej. Jeśli zdecydujecie się na pakiet rozszerzony wówczas otrzymacie 300 zdjęć wydrukowanych oraz 800 cyfrowych. Więcej szczegółów znajdziecie w zakładce oferta."
        }
    },{
      "@type": "Question",
      "name": "Ile czasu pracuje na naszym ślubie/weselu fotograf ślubny na Śląsku?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ilość fotografii jest uzależniona od wyboru pakietu. W najbardziej ekonomicznej wersji otrzymujecie 100 zdjęć wydrukowanych na papierze oraz 300 zdjęć w wersji cyfrowej. Jeśli zdecydujecie się na pakiet rozszerzony wówczas otrzymacie 300 zdjęć wydrukowanych oraz 800 cyfrowych. Więcej szczegółów znajdziecie w zakładce oferta."
      }
    },{
      "@type": "Question",
      "name": "Czy otrzymamy tylko zdjęcia w wersji cyfrowej?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oczywiście, że nie. Najlepsze kadry z Waszego dnia otrzymacie również w postaci profesjonalnych wydruków. Resztę fotografii dostaniecie na pendrive w wersji elektronicznej, a także w formie internetowej galerii, którą będziecie się mogli podzielić ze znajomymi lub rodziną. Za dodatkową opłatą, mogę dla Was przygotować unikalne fotoalbumy i fotoksiążki. "
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ślubny Katowice"
      description="Fotograf ślubny Katowice"
      keywords="fotograf ślubny Katowice"
      url="https://99foto.pl/fotograf-slubny-katowice/"
      leadNames="PATRYCJA i KRZYSZTOF"
      leadTitle="DWOREK FANTAZJA SKOMIELNA BIAŁA i ŚLUB W STYLU GLAMOUR"
      leadUrl="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY KATOWICE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Poszukiwania najlepszego fotografa ślubnego w Katowicach to zadanie niełatwe, ponieważ ocena jakości fotografii jest bardzo subiektywna i zależy od indywidualnych preferencji i oczekiwań pary młodej. Ważne, aby wybrać fotografa, który odpowiada twoim stylowi i upodobaniom oraz potrafi uchwycić ważne chwile i emocje z dnia ślubu. Możesz porównać oferty różnych fotografów, przejrzeć ich portfolio i przeczytać opinie innych klientów, aby znaleźć osobę, która najlepiej odpowiada Twoim potrzebom.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Warto też zwrócić uwagę na doświadczenie i profesjonalizm fotografa oraz jego elastyczność i otwartość na sugestie i oczekiwania klientów. Jeżeli szukasz <strong>najlepszego fotografa ślubnego na Śląsku</strong> to doskonale trafiłeś. Nazywam się Tomasz Prokop, mieszkam w Krakowie i zapraszam do mojego fotograficznego świata.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ŚLUBNY KATOWICE - JAKI POWINIEN BYĆ?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
          Fotograf ślubny powinien być profesjonalistą, który potrafi uchwycić ważne chwile i emocje związane z dniem ślubu. Powinien mieć doświadczenie w pracy z różnymi parami młodymi i znać techniki fotografowania, aby uzyskać jak najlepsze rezultaty. Powinien też być elastyczny i potrafić dostosować się do potrzeb i oczekiwań klientów. Ważne, aby fotograf ślubny był także osobą, z którą młoda para czuje się swobodnie i komfortowo, ponieważ w ten sposób zdjęcia będą bardziej naturalne i autentyczne.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA KATOWICE - BOGACTWO WYJĄTKOWYCH MIEJSC
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Śląsk jest regionem o bogatej historii i kulturze, co przekłada się na wiele pięknych i unikalnych miejsc, które mogą stanowić idealne tło do zdjęć ślubnych. Warto rozważyć sesję fotograficzną w jednym z malowniczych zamków lub pałaców, takich jak np. Zamek w Pszczynie czy Pałac w Dębnie. Innym ciekawym pomysłem może być sesja w jednym z muzeów, np. Muzeum Śląskie w Katowicach czy Muzeum Karkonoskie w Jeleniej Górze.
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Jeśli para młoda lubi przyrodę, mogą wybrać się na sesję do jednego z parków narodowych lub rezerwatów przyrody, takich jak Karkonoski Park Narodowy czy Beskidy. Wszystko zależy od indywidualnych preferencji i stylu pary młodej.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          KATOWICE - IDEALNE TŁO DLA FOTOGRAFII ŚLUBNEJ
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Śląsk oferuje wiele pięknych i unikalnych miejsc, które mogą stanowić idealne tło dla fotografii ślubnej. Możliwości są praktycznie nieograniczone, ponieważ region ten obfituje w zamki, pałace, muzea, parki narodowe i rezerwaty przyrody, a także wiele innych ciekawych miejsc i obiektów, które mogą być inspiracją dla fotografii ślubnej. Ważne, aby wybrać tło, które odpowiada indywidualnym preferencjom i stylowi pary młodej, a także aby dobrze komponowało się z resztą elementów dekoracji i stylizacji ślubnej.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA KATOWICE - PAMIĄTKA NA LATA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Fotografia ślubna to niezwykle ważna pamiątka, która będzie przypominać o pięknym dniu zaślubin i wszystkich emocjach z nim związanych. Dlatego tak ważne jest, aby wybrać dobrego fotografa, który potrafi uchwycić ważne chwile i emocje oraz stworzyć piękne i unikalne zdjęcia, które będą cieszyć oko i wzruszać na długie lata.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Jeśli szukają Państwo profesjonalnego fotografa ślubnego na Śląsku, warto zacząć od zasięgnięcia opinii wśród znajomych i rodziny oraz przejrzenia portfolio różnych fotografów i porównania ich stylów i cen. Ważne, aby wybrać fotografa, który spełnia wszystkie oczekiwania i jest w stanie stworzyć piękną pamiątkę na lata.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA KATOWICE - ILE TO KOSZTUJE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
          Cena za usługi fotograficzne związane z ślubem może się różnić w zależności od wielu czynników, takich jak doświadczenie fotografa, jakość sprzętu, ilość godzin pracy, liczba wykonanych zdjęć itp. Ceny mogą wahać się od kilkuset do kilku tysięcy złotych. Ważne, aby dokładnie zapoznać się z ofertą fotografów i porównać ceny, aby mieć pewność, że otrzymuje się usługę w dobrej cenie i jakości. Nie warto decydować się na najtańszą opcję, ponieważ zdjęcia ślubne to pamiątka na lata i należy zadbać o ich jakość. Z drugiej strony, warto pamiętać, że cena nie zawsze jest wyznacznikiem jakości i warto poszukać fotografa, który jest w stanie zaoferować dobrą usługę w rozsądnej cenie.
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
            <Image src={props.item.image} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        </Box>
    )
}

export default PageComponent;