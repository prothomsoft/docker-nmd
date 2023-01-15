import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";


const fotograf_slubny_portfolio_2023_300 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_300.webp";
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
const fotograf_slubny_portfolio_2023_317 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_317.webp";
const fotograf_slubny_portfolio_2023_318 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_318.webp";
const fotograf_slubny_portfolio_2023_321 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_321.webp";
const fotograf_slubny_portfolio_2023_322 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_322.webp";
const fotograf_slubny_portfolio_2023_323 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_323.webp";
const fotograf_slubny_portfolio_2023_324 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_324.webp";
const fotograf_slubny_portfolio_2023_325 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_325.webp";
const fotograf_slubny_portfolio_2023_326 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_326.webp";
const fotograf_slubny_portfolio_2023_327 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_327.webp";
const fotograf_slubny_portfolio_2023_329 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_329.webp";
const fotograf_slubny_portfolio_2023_330 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_330.webp";
const fotograf_slubny_portfolio_2023_331 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_331.webp";
const fotograf_slubny_portfolio_2023_332 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_332.webp";


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
        image: fotograf_slubny_portfolio_2023_300
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
      image: fotograf_slubny_portfolio_2023_314
    },
    {
      image: fotograf_slubny_portfolio_2023_316
    },
    {
      image: fotograf_slubny_portfolio_2023_315
    },
    {
      image: fotograf_slubny_portfolio_2023_317
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
      image: fotograf_slubny_portfolio_2023_322
    },
    {
      image: fotograf_slubny_portfolio_2023_321
    },
    {
      image: fotograf_slubny_portfolio_2023_330
    },
    {
      image: fotograf_slubny_portfolio_2023_323
    },
    {
      image: fotograf_slubny_portfolio_2023_324
    },
    {
      image: fotograf_slubny_portfolio_2023_325
    },
    {
      image: fotograf_slubny_portfolio_2023_326
    },
    {
      image: fotograf_slubny_portfolio_2023_327
    },
    {
      image: fotograf_slubny_portfolio_2023_332
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
      title="Fotograf ślubny Chrzanów"
      description="Fotograf ślubny Chrzanów"
      keywords="fotograf ślubny Chrzanów"
      url="https://99foto.pl/fotograf-slubny-chrzanow/"
      leadNames="NATALIA i KACPER"
      leadTitle="WESELE EUFORIA MYŚLENICE, PLENER ŚLUBNY DWÓR MOGILANY"
      leadUrl="/wesele-euforia-myslenice-plener-slubny-dwor-mogilany"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY CHRZANÓW
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Poszukiwania najlepszego fotografa ślubnego w Chrzanowie to zadanie niełatwe, ponieważ ocena jakości fotografii jest bardzo subiektywna i zależy od indywidualnych preferencji i oczekiwań pary młodej. Ważne, aby wybrać fotografa, który odpowiada twoim stylowi i upodobaniom oraz potrafi uchwycić ważne chwile i emocje z dnia ślubu. Możesz porównać oferty różnych fotografów, przejrzeć ich portfolio i przeczytać opinie innych klientów, aby znaleźć osobę, która najlepiej odpowiada Twoim potrzebom.
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
          FOTOGRAF ŚLUBNY CHRZANÓW - JAKI POWINIEN BYĆ?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
          Fotograf ślubny powinien być profesjonalistą, który potrafi uchwycić ważne chwile i emocje związane z dniem ślubu. Powinien mieć doświadczenie w pracy z różnymi parami młodymi i znać techniki fotografowania, aby uzyskać jak najlepsze rezultaty. Powinien też być elastyczny i potrafić dostosować się do potrzeb i oczekiwań klientów. Ważne, aby fotograf ślubny był także osobą, z którą młoda para czuje się swobodnie i komfortowo, ponieważ w ten sposób zdjęcia będą bardziej naturalne i autentyczne.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA CHRZANÓW - BOGACTWO WYJĄTKOWYCH MIEJSC
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
          CHRZANÓW - IDEALNE TŁO DLA FOTOGRAFII ŚLUBNEJ
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Śląsk oferuje wiele pięknych i unikalnych miejsc, które mogą stanowić idealne tło dla fotografii ślubnej. Możliwości są praktycznie nieograniczone, ponieważ region ten obfituje w zamki, pałace, muzea, parki narodowe i rezerwaty przyrody, a także wiele innych ciekawych miejsc i obiektów, które mogą być inspiracją dla fotografii ślubnej. Ważne, aby wybrać tło, które odpowiada indywidualnym preferencjom i stylowi pary młodej, a także aby dobrze komponowało się z resztą elementów dekoracji i stylizacji ślubnej.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA CHRZANÓW - PAMIĄTKA NA LATA
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
          FOTOGRAFIA ŚLUBNA CHRZANÓW - ILE TO KOSZTUJE
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