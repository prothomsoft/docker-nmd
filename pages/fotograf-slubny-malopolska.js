import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ImageCardSmall from "../components/imageCardSmall";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageCarousel from "../components/imageCarousel";
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";

const slub_palac_goetz_portfolio = process.env.staticS3ImagesPath + "portfolio/small/slub_palac_goetz_portfolio.webp";
const reportaz_slubny_krakow = process.env.staticS3ImagesPath + "portfolio/small/reportaz_slubny_krakow.webp";
const hotel_mercure_kasprowy_zakopane = process.env.staticS3ImagesPath + "portfolio/small/hotel_mercure_kasprowy_zakopane.webp";

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
    { image: fotograf_slubny_portfolio_2023_053 },
    { image: fotograf_slubny_portfolio_2023_075 },
    { image: fotograf_slubny_portfolio_2023_074 },
    { image: fotograf_slubny_portfolio_2023_047 },
    { image: fotograf_slubny_portfolio_2023_048 },
    { image: fotograf_slubny_portfolio_2023_049 },
    { image: fotograf_slubny_portfolio_2023_051 },
    { image: fotograf_slubny_portfolio_2023_667 },
    { image: fotograf_slubny_portfolio_2023_052 },
    { image: fotograf_slubny_portfolio_2023_044 },
  ];

  const imagesCarousel2 = [
    { image: fotograf_slubny_portfolio_2023_054 },
    { image: fotograf_slubny_portfolio_2023_055 },
    { image: fotograf_slubny_portfolio_2023_057 },
    { image: fotograf_slubny_portfolio_2023_077 },
    { image: fotograf_slubny_portfolio_2023_063 },
    { image: fotograf_slubny_portfolio_2023_059 },
    { image: fotograf_slubny_portfolio_2023_060 },
    { image: fotograf_slubny_portfolio_2023_668 },
    { image: fotograf_slubny_portfolio_2023_061 },
    { image: fotograf_slubny_portfolio_2023_058 },
  ];

  const imagesCarousel3 = [
    { image: fotograf_slubny_portfolio_2023_065 },
    { image: fotograf_slubny_portfolio_2023_066 },
    { image: fotograf_slubny_portfolio_2023_064 },
    { image: fotograf_slubny_portfolio_2023_068 },
    { image: fotograf_slubny_portfolio_2023_079 },
    { image: fotograf_slubny_portfolio_2023_069 },
    { image: fotograf_slubny_portfolio_2023_072 },
    { image: fotograf_slubny_portfolio_2023_070 },
    { image: fotograf_slubny_portfolio_2023_078 },
    { image: fotograf_slubny_portfolio_2023_071 },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Fotograf ślubny w Małopolsce, o co zapytać?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bardzo często fotografowie oferują możliwość podpisania umowy na zdjęcia ślubne przez internet. Pomyślcie, czy czasem nie lepiej się spotkać, oglądnąć przykładowe książki, porozmawiać i poznać fotografa zanim zaprosicie go do siebie do domu. Takie spotkanie to naprawdę doskonały sposób ułatwiający podjęcie dobrej decyzji."
        }
    },{
        "@type": "Question",
        "name": "Ile kosztuje i co zawiera oferowany pakiet ślubny?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fotoksiążka o grubości 140 stron w formacie 30x30 i twardej oprawie, plener w wybranym przez Was dniu po ślubie i dojazd w dniu ślubu wliczony w cenę pakietu. Tak to dodatkowe rzeczy, które wyróżniają moją ofertę ślubną wśród ofert innych fotografów w małopolsce. Spotkajmy się w Krakowie, porozmawiajmy i być może to ja będę mógł towarzyszyć Wam w tym najważniejszym dniu."
        }
    },{
      "@type": "Question",
      "name": "Na co zwrócić uwagę przeglądając zdjęcia fotografa?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ponadczasowy styl fotografii, które powinny być równie dobre w odbiorze dzisiaj jak i za kolejnych sto lat. Przeglądanie zdjęć na blogu czy w wydrukowanej fotoksiążce powinno wywoływać w nas emocje. Zdjęcia nie powinny być pozowane, najbardziej lubicie przecież spontaniczne kadry, kiedy to nie myśląc o obecności fotografa wyglądacie naturalnie."
      }
    },{
      "@type": "Question",
      "name": "Czy są przewidziane jakieś opłaty dodatkowe?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oczywiście, że nie. Wszystkie istotne informacje są zawarte w ofercie ślubnej. Cena pakietu jest stała i nie zależy od inflacji. Krótko mówiąc, podpisując umowę możecie z pewnością spać spokojnie. Bardzo często umowę fotografii ślubnej podpisuje się z dwuletnim wyprzedzeniem. Nie ma się co martwić w oczekiwaniu na ślub czas biegnie super szybko."
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ślubny Małopolska"
      description="Fotograf ślubny Małopolska"
      keywords="fotograf ślubny Małopolska"
      url="https://99foto.pl/fotograf-slubny-malopolska/"
      leadNames="JUSTYNA i DAMIAN"
      leadTitle="SYLWESTROWY ŚLUB, SALA BANKIETOWA IMPRESJA JORDANÓW"
      leadUrl="/sylwestrowy-slub-sala-bankietowa-impresja-jordanow"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY MAŁOPOLSKA
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Czy trudno jest znaleźć dobrego fotografa ślubnego w małopolsce. Nikt nie jest w stanie dokładnie odpowiedzieć na to pytanie, ponieważ uzaleźnione jest to od wielu różnych czynników, takich jak na przykład popularność i dostępność fotografów,  jak również od indywidualnych preferencji i potrzeb klientów. Tak czy inaczej, każdy prędzej czy później będzie musiał podjąć decyzję o podjęciu współpracy z fotografem ślubnym, aby uwiecznić ważne chwile ze ślubu i wesela. Moja rada to poszukać w internecie, porównać portfolio i opinie różnych klientów, a także skontaktować się z fotografem osobiście, aby upewnić się, że jest to odpowiedni człowiek, który spełni Twoje potrzeby i nie przekroczy budżetu.
        </Typography>

        <Box sx={{ pt: 2, pb: 1 }}>
          <ImageCarousel images={imagesCarousel1} autoplaySpeed={3000} />
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Warto zwrócić uwagę na doświadczenie i profesjonalizm fotografa oraz jego umiejętność dostosowywania się do wymagań klientów. Jeżeli szukasz <strong>najlepszego fotografa ślubnego w małopolsce</strong> to doskonale trafiłeś. Fotografować na Waszym ślubie będzie dla mnie zaszczytem i wspaniałą przygodą. Nazywam się Tomasz Prokop, mieszkam w Krakowie. Polecam swoje usługi fotograficzne.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ŚLUBNY MAŁOPOLSKA - JAKI POWINIEN BYĆ?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Jeśli szukasz profesjonalnego fotografa na Twój ślub, to oznacza, że chcesz kogoś, kto jest twórczy, oryginalny i niestandardowy w swoim podejściu do fotografowania. Taki fotograf powinien chcieć wykorzystać niekonwencjonalne ujęcia i perspektywy, eksperymentować z różnymi technikami i stylami, aby stworzyć unikalne i niezapomniane zdjęcia z Twojego ślubu.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          KRAKÓW, TATRY, PARKI NARODOWE i ZAMKI - FOTOGRAF ŚLUBNY MAŁOPOLSKA
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Małopolska to region w Polsce z pięknymi krajobrazami i zabytkami, które mogą stworzyć niezwykłe okoliczności dla ślubu i pleneru zdjęciowego. Oto kilka propozycji miejsc, które mogą być interesujące dla pary młodej. Kraków, miasto pełne zabytków i historii, oferuje piękne krajobrazy z Wawelem, Rynkiem Głównym, a także zabytkowymi kościołami i pałacami. Tatry, najwyższe góry w Polsce, oferujące monumentalne widoki i naturalne tło dla zdjęć z pleneru. Ojcowski Park Narodowy, piękne krajobrazy i malownicze jaskinie, które mogą stanowić dopełnienie zdjęć plenerowych. Zamek w Pieskowej Skale położony w malowniczej okolicy, w którym można zrobić zdjęcia w krużgankach zamkowych, ogrodzie i pobliskim parku. Te miejsca to tylko kilka przykładów z wielu możliwości, które oferuje Małopolska. Więcej rekomendacji i zdjęć z wybranych miejsc z pewnością znajdziecie przeglądając mojego bloga.
        </Typography>

        <Box sx={{ pt: 2, pb: 1 }}>
          <ImageCarousel images={imagesCarousel2} autoplaySpeed={5000} />
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Czy o miejscu na plener ślubny musisz decydować samodzielnie? Możesz, ale nie musisz. Istnieją fotografowie ślubni, którzy oferują usługę doboru miejsca na plener ślubny. Ja bardzo chętnie pomogę i doradzę w wyborze odpowiedniego miejsca. Będzie to o tyle ułatwione, że w większości tych miejsc miałem już okazję być, więc moje rekomendacje będą warte Waszej uwagi.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          MAŁOPOLSKA - JAKA SALA WESELNA BĘDZIE DLA MNIE ODPOWIEDNIA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Małopolska to region w Polsce z wieloma pięknymi salami weselnymi. Wybierając salę weselną ważne jest by określić ilość osób, które zapraszasz na ślub. Są miejsce idealne na mniejsze przyjęcia weselne takie jak Restauracja Grube Ryby w Zabierzowie czy Dwór Kociołek w Dobczycach. Organizując duże przyjęcie możecie rozważyć sale weselne z rozmachem Kabanosa w Spytkowicach, Nedan w Pcimiu, Impresja w Jordanowie. Wybierając fotografa ślubnego w małopolsce zwykle macie już podpisaną umowę na salę weselną, ale te kilka drobnych wskazówek na pewno nie zaszkodzi.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA MAŁOPOLSKA - PONADCZASOWOŚĆ ZDJĘĆ
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Ponadczasowa obróbka zdjęć ślubnych oznacza, że zdjęcia są przetwarzane w taki sposób, aby wyglądały pięknie i elegancko, bez użycia efektów modyfikujących, które mogą być uważane za przestarzałe po pewnym czasie. Kolory na takich zdjęciach powinny być naturalne i żywe, ostrość tych zdjęć powinna być tak dobrana, żeby były one wyraźne i czytelne, nie zaszkodzi też usunąć drobne niedoskonałości skóry, takie jak zmarszczki czy przebarwienia. Modyfikacje te jednak powinny być wprowadzane bardzo ostrożnie, by nie zatracić początkowego charakteru zdjęcia.
        </Typography>

        <Box sx={{ pt: 2, pb: 1 }}>
          <ImageCarousel images={imagesCarousel3} autoplaySpeed={7000} />
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Szukając profesjonalnego fotografa ślubnego w małopolsce, warto bliżej zapoznać się z moim portfolio, wysłać maila lub skorzystać z formularza kontaktowego na stronie internetowej, by otrzymać ofertę fotografii ślubnej w małopolsce. Ważne, aby wybrać fotografa, który spełnia wszystkie oczekiwania i jest w stanie zapewnić ponadczasowość zdjęć.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ŚLUBNA MAŁOPOLSKA - KOSZTY
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
          Koszt fotogafii ślubnej to nie tylko obecność fotografa w dniu ślubu. Pamiętajmy, że po powrocie do domu zdjęcia ślubne muszą zostać poddane selekcji, następnie dokładnej obróbce graficznej. Przygotowanie zdjęć do publikacji w galerii internetowej, układanie albumów ślubnych i książek to również zajęcie czasochłonne. Każda para ma dodatkowy dzień na czterogodzinną sesję plenerową, która jest nieodłączną częścią reportażu ślubnego. Praca nad jednym ślubem to blisko siedemdziesiąt godzin fotografowania i przygotowania zdjęć do oddania w umówionej formie.
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
                      a4={schemaData.mainEntity[3].acceptedAnswer.text} />
        </Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
            POLECANE REPORTAŻE ŚLUBNE
          </Typography>
        </Box>
        
        <Box sx={{ pt:2, pb: 2 }}></Box>
        <Grid container direction="row" alignItems="center">
          <Grid item lg={4} p={1}>
            <ImageCardSmall
              imgsrc={slub_palac_goetz_portfolio}
              imgalt="pałac goetz, ślub humanistyczny Kraków"
              linkhref="palac-goetz-slub-humanistyczny"
              title="ŚLUB HUMANISTYCZNY KRAKÓW"
              names="KAROLINA i RYAN"
            />
           </Grid>
          <Grid item lg={4} p={1}>
            <ImageCardSmall
             imgsrc={reportaz_slubny_krakow}
             imgalt="reportaż ślubny kraków"
             linkhref="dom-weselny-biala-perla-radziemice-reportaz-slubny"
             title="REPORTAŻ ŚLUBNY KRAKÓW"
             names="ŻANETA i SEBASTIAN"
            />
           </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={hotel_mercure_kasprowy_zakopane}
              imgalt="wesele w zakopanem, hotel mercury kasprowy, zespół ich troje na weselu"
              linkhref="wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje"
              title="WESELE W ZAKOPANEM"
              names="PATRYCJA i TOMASZ"
            />
          </Grid>
        </Grid>
        
      </Container>
    </LayoutSitePage>
  );
};

export default PageComponent;