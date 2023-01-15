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
const fotograf_slubny_portfolio_2023_211 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_211.webp";
const fotograf_slubny_portfolio_2023_212 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_212.webp";
const fotograf_slubny_portfolio_2023_213 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_213.webp";
const fotograf_slubny_portfolio_2023_214 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_214.webp";
const fotograf_slubny_portfolio_2023_215 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_215.webp";
const fotograf_slubny_portfolio_2023_216 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_216.webp";
const fotograf_slubny_portfolio_2023_217 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_217.webp";
const fotograf_slubny_portfolio_2023_218 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_218.webp";
const fotograf_slubny_portfolio_2023_219 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_219.webp";


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
      image: fotograf_slubny_portfolio_2023_211
    },
    {
      image: fotograf_slubny_portfolio_2023_214
    },
    {
      image: fotograf_slubny_portfolio_2023_213
    },
    {
      image: fotograf_slubny_portfolio_2023_212
    },
    {
      image: fotograf_slubny_portfolio_2023_215
    },
    {
      image: fotograf_slubny_portfolio_2023_216
    },
    {
      image: fotograf_slubny_portfolio_2023_217
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
      title="Fotograf ślubny Olkusz"
      description="Fotograf ślubny Olkusz"
      keywords="fotograf ślubny Olkusz"
      url="https://99foto.pl/fotograf-slubny-olkusz/"
      leadNames="SYLWIA i MICHAŁ"
      leadTitle="WESELE W STYLU BOHO, SALA DWORZYSZCZE WOLA, KRAKÓW"
      leadUrl="/wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY OLKUSZ
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Poszukiwania najlepszego fotografa ślubnego w Olkuszu to zadanie niełatwe, ponieważ ocena jakości fotografii jest bardzo subiektywna i zależy od indywidualnych preferencji i oczekiwań pary młodej. Ważne, aby wybrać fotografa, który odpowiada twoim stylowi i upodobaniom oraz potrafi uchwycić ważne chwile i emocje z dnia ślubu. Możesz porównać oferty różnych fotografów, przejrzeć ich portfolio i przeczytać opinie innych klientów, aby znaleźć osobę, która najlepiej odpowiada Twoim potrzebom.
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
          FOTOGRAF ŚLUBNY OLKUSZ - JAKI POWINIEN BYĆ?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
          Fotograf ślubny powinien być profesjonalistą, który potrafi uchwycić ważne chwile i emocje związane z dniem ślubu. Powinien mieć doświadczenie w pracy z różnymi parami młodymi i znać techniki fotografowania, aby uzyskać jak najlepsze rezultaty. Powinien też być elastyczny i potrafić dostosować się do potrzeb i oczekiwań klientów. Ważne, aby fotograf ślubny był także osobą, z którą młoda para czuje się swobodnie i komfortowo, ponieważ w ten sposób zdjęcia będą bardziej naturalne i autentyczne.
        </Typography>

        

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA OLKUSZ - BOGACTWO WYJĄTKOWYCH MIEJSC
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
          OLKUSZ - IDEALNE TŁO DLA FOTOGRAFII ŚLUBNEJ
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Śląsk oferuje wiele pięknych i unikalnych miejsc, które mogą stanowić idealne tło dla fotografii ślubnej. Możliwości są praktycznie nieograniczone, ponieważ region ten obfituje w zamki, pałace, muzea, parki narodowe i rezerwaty przyrody, a także wiele innych ciekawych miejsc i obiektów, które mogą być inspiracją dla fotografii ślubnej. Ważne, aby wybrać tło, które odpowiada indywidualnym preferencjom i stylowi pary młodej, a także aby dobrze komponowało się z resztą elementów dekoracji i stylizacji ślubnej.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA OLKUSZ - PAMIĄTKA NA LATA
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
          FOTOGRAFIA ŚLUBNA OLKUSZ - ILE TO KOSZTUJE
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