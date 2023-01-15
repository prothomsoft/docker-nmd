import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";






const fotograf_slubny_portfolio_2023_635 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_635.webp";
const fotograf_slubny_portfolio_2023_636 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_636.webp";
const fotograf_slubny_portfolio_2023_637 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_637.webp";
const fotograf_slubny_portfolio_2023_638 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_638.webp";
const fotograf_slubny_portfolio_2023_639 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_639.webp";
const fotograf_slubny_portfolio_2023_640 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_640.webp";
const fotograf_slubny_portfolio_2023_641 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_641.webp";
const fotograf_slubny_portfolio_2023_642 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_642.webp";
const fotograf_slubny_portfolio_2023_643 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_643.webp";
const fotograf_slubny_portfolio_2023_644 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_644.webp";
const fotograf_slubny_portfolio_2023_645 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_645.webp";
const fotograf_slubny_portfolio_2023_646 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_646.webp";
const fotograf_slubny_portfolio_2023_647 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_647.webp";
const fotograf_slubny_portfolio_2023_648 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_648.webp";
const fotograf_slubny_portfolio_2023_650 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_650.webp";
const fotograf_slubny_portfolio_2023_651 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_651.webp";
const fotograf_slubny_portfolio_2023_652 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_652.webp";
const fotograf_slubny_portfolio_2023_653 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_653.webp";
const fotograf_slubny_portfolio_2023_654 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_654.webp";
const fotograf_slubny_portfolio_2023_655 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_655.webp";
const fotograf_slubny_portfolio_2023_657 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_657.webp";
const fotograf_slubny_portfolio_2023_658 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_658.webp";
const fotograf_slubny_portfolio_2023_659 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_659.webp";
const fotograf_slubny_portfolio_2023_660 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_660.webp";
const fotograf_slubny_portfolio_2023_661 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_661.webp";
const fotograf_slubny_portfolio_2023_662 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_662.webp";
const fotograf_slubny_portfolio_2023_663 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_663.webp";
const fotograf_slubny_portfolio_2023_664 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_664.webp";
const fotograf_slubny_portfolio_2023_665 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_665.webp";
const fotograf_slubny_portfolio_2023_666 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_566.webp";


const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "nicola_rafal_start.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_637
    },
    {
        image: fotograf_slubny_portfolio_2023_636
    },
    {
        image: fotograf_slubny_portfolio_2023_635
    },
    {
        image: fotograf_slubny_portfolio_2023_638
    },
    {
        image: fotograf_slubny_portfolio_2023_639
    },
    {
        image: fotograf_slubny_portfolio_2023_640
    },
    {
        image: fotograf_slubny_portfolio_2023_641
    },
    {
        image: fotograf_slubny_portfolio_2023_642
    },
    {
        image: fotograf_slubny_portfolio_2023_643
    },
    {
        image: fotograf_slubny_portfolio_2023_644
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_645
    },
    {
      image: fotograf_slubny_portfolio_2023_646
    },
    {
      image: fotograf_slubny_portfolio_2023_647
    },
    {
      image: fotograf_slubny_portfolio_2023_665
    },
    {
      image: fotograf_slubny_portfolio_2023_648
    },
    {
      image: fotograf_slubny_portfolio_2023_650
    },
    {
      image: fotograf_slubny_portfolio_2023_651
    },
    {
      image: fotograf_slubny_portfolio_2023_652
    },
    {
      image: fotograf_slubny_portfolio_2023_653
    },
    {
      image: fotograf_slubny_portfolio_2023_654
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_655
    },
    {
      image: fotograf_slubny_portfolio_2023_666
    },
    {
      image: fotograf_slubny_portfolio_2023_657
    },
    {
      image: fotograf_slubny_portfolio_2023_658
    },
    {
      image: fotograf_slubny_portfolio_2023_659
    },
    {
      image: fotograf_slubny_portfolio_2023_660
    },
    {
      image: fotograf_slubny_portfolio_2023_661
    },
    {
      image: fotograf_slubny_portfolio_2023_662
    },
    {
      image: fotograf_slubny_portfolio_2023_663
    },
    {
      image: fotograf_slubny_portfolio_2023_664
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
      title="Fotograf ślubny Szczyrk"
      description="Fotograf ślubny Szczyrk"
      keywords="fotograf ślubny Szczyrk"
      url="https://99foto.pl/fotograf-slubny-szczyrk/"
      leadNames="NICOLA i RAFAŁ"
      leadTitle="OTEL ŻYWIECKI, SALA PRZYŁĘKÓWKA, WESELE W BESKIDACH"
      leadUrl="/hotel-zywiecki-sala-przylekowka-wesele-w-beskidach"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY SZCZYRK
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Poszukiwania najlepszego fotografa ślubnego w SZCZYRKu to zadanie niełatwe, ponieważ ocena jakości fotografii jest bardzo subiektywna i zależy od indywidualnych preferencji i oczekiwań pary młodej. Ważne, aby wybrać fotografa, który odpowiada twoim stylowi i upodobaniom oraz potrafi uchwycić ważne chwile i emocje z dnia ślubu. Możesz porównać oferty różnych fotografów, przejrzeć ich portfolio i przeczytać opinie innych klientów, aby znaleźć osobę, która najlepiej odpowiada Twoim potrzebom.
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
          FOTOGRAF ŚLUBNY SZCZYRK - JAKI POWINIEN BYĆ?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
          Fotograf ślubny powinien być profesjonalistą, który potrafi uchwycić ważne chwile i emocje związane z dniem ślubu. Powinien mieć doświadczenie w pracy z różnymi parami młodymi i znać techniki fotografowania, aby uzyskać jak najlepsze rezultaty. Powinien też być elastyczny i potrafić dostosować się do potrzeb i oczekiwań klientów. Ważne, aby fotograf ślubny był także osobą, z którą młoda para czuje się swobodnie i komfortowo, ponieważ w ten sposób zdjęcia będą bardziej naturalne i autentyczne.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA SZCZYRK - BOGACTWO WYJĄTKOWYCH MIEJSC
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
          SZCZYRK - IDEALNE TŁO DLA FOTOGRAFII ŚLUBNEJ
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Śląsk oferuje wiele pięknych i unikalnych miejsc, które mogą stanowić idealne tło dla fotografii ślubnej. Możliwości są praktycznie nieograniczone, ponieważ region ten obfituje w zamki, pałace, muzea, parki narodowe i rezerwaty przyrody, a także wiele innych ciekawych miejsc i obiektów, które mogą być inspiracją dla fotografii ślubnej. Ważne, aby wybrać tło, które odpowiada indywidualnym preferencjom i stylowi pary młodej, a także aby dobrze komponowało się z resztą elementów dekoracji i stylizacji ślubnej.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA SZCZYRK - PAMIĄTKA NA LATA
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
          FOTOGRAFIA ŚLUBNA SZCZYRK - ILE TO KOSZTUJE
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