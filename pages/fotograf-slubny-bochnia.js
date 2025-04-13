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

const hotel_mercure_kasprowy_zakopane = process.env.staticS3ImagesPath + "portfolio/small/hotel_mercure_kasprowy_zakopane.webp";
const dworzyszcze_wola_reportaz_slubny_pod_krakowem = process.env.staticS3ImagesPath + "portfolio/small/dworzyszcze_wola_reportaz_slubny_pod_krakowem.webp";
const fotograf_na_wesele_rabka_zdroj_portfolio = process.env.staticS3ImagesPath + "portfolio/small/fotograf_na_wesele_rabka_zdroj_portfolio.webp";

const imagesCarousel1 = [
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_157.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_158.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_159.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_160.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_672.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_162.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_163.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_164.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_165.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_166.webp" },
];

const imagesCarousel2 = [
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_167.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_168.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_169.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_170.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_171.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_172.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_173.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_187.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_174.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_176.webp" },
];

const imagesCarousel3 = [
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_177.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_186.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_179.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_180.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_182.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_181.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_184.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_183.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_185.webp" },
  { image: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_178.webp" },
];

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "dom_weselny_mogielica_fotograf_slubny_mszana.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Jak długo trwa oczekiwanie na otrzymanie zdjęć?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zdjęcia z Twojego ślubu są gotowe w tygodniu po ślubie. Fotografie zostają udostępnione w strefie klienta i są zabezpieczone hasłem. Goście weselni zainteresowani zdjęciami mogą otrzymać hasło zabierając jedną z wizytówek, które zawsze zostawiam przy ekspresie do kawy. Jeżeli tego nie zrobili w dniu ślubu tomogą skontaktować się z Wami i zapytać o hasło."
        }
    },{
        "@type": "Question",
        "name": "Czy w Twoim pakiecie jest uwzględniony plener ślubny?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oczywiście, plener ślubny jest doskonałym uzupełnieniem reportażu ślubnego. Zwykle znajdujemy kilka minut w dniu ślubu na zdjęcia przed salą weselną. Robiąc plener w dniu ślubu zawsze wtedy musicie pamiętać, o tym, że goście weselni na Was czekają. Czas na plenerze w wybranym dniu po ślubie to czas dla Was, praktycznie nieograniczony, w którym można dać sobie sto buziaków i uścisków, zwiedzić piękne miejsca, porozmawiać, pośmiać się i nacieszyć promieniami zachodzącego słońca."
        }
    },{
      "@type": "Question",
      "name": "Czy mogę skontaktować się z poprzednimi klientami?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fotografią ślubną zajmuje się blisko dziesięt lat. Każdego roku oddaje trzydzieści pięć fotoksiążek ślubnych, które są moim portfolio i najlepszą reklamą. Najlepiej popytać o fotografa najbliższą rodzinę, poszukać w internecie i jest duże prawdopodobieństwo, że nawet w ten przypadkowy sposób na siebie natrafimy."
      }
    },{
      "@type": "Question",
      "name": "Czy masz doświadczenie w fotografii ślubnej?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Doświadczenie w fotografii ślubnej to bardzo ważna rzecz. Zawsze fotograf ma tylko jedną szansę, żeby dobrze uchwycić mijające chwile. Pewność siebie, umiejętność przewidywania nadchodzących po sobie wydarzeń to rzeczy, które nabywmy z czasem. Każdy pamięta swoje pierwsze dzieła i postęp, który zaobserwował po latach pracy w zawodzie. Fotografia nie jest inna i warto postawić na sprawdzonego i doświadczonego fotografa ślubnego."
      }
    }
]}

  return (
    <LayoutSitePage
      title="Fotograf ślubny Bochnia"
      description="Fotograf ślubny Bochnia, organizujesz ślub i wesele w Bochni, szukasz idealnego fotografa ślubnego? Super, że odnalazłeś moją stronę w internecie!"
      keywords="fotograf ślubny Bochnia, organizacja ślubu w Bochni, wesele w Bochni"
      url="https://99foto.pl/fotograf-slubny-bochnia/"
      leadNames="NATALIA i KRZYSZTOF"
      leadTitle="DOM WESELNY MOGIELICA JURKÓW, RUSTYKALNE WESELE"
      leadUrl="/dom-weselny-mogielica-jurkow-rustykalne-wesele"
      leadImage={pageImage}
      schemaData={schemaData}
    >
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb: 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY BOCHNIA
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Ten dzień, kiedy wszystkie szczegóły organizacyjne dotyczące sali weselnej, zespołu są już znane i coś podpowiada Ci, że trzeba pójść krok dalej i rozglądnąć się za odpowiednim fotografem ślubnym. Organizujesz ślub w Bochni i dobrze byłoby gdyby znalazł się fotograf ślubny, który nie musi przemierzyć pół polski by sfotografować Twój ślub. Przygotowujesz kubek kawy i szukając w internecie trafiasz na moją stronę. Myślisz czy to przypadek, że spośród tylu ofert zaglądnąłem właśnie tutaj. Przeglądasz zdjęcia, wybrane reportaże ślubne na blogu, widzisz spójne kolory, emocje i zastanawiasz się, czy to czasem nie jest ten człowiek, który zrobi Twoje zdjęcia ślubne.
        </Typography>
        <Box sx={{ pt: 2, pb: 1 }}>
          <ImageCarousel images={imagesCarousel1} autoplaySpeed={3000} />
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Tego się nie dowiemy, tak długo jak nie zadzwonisz do mnie lub nie wypełnisz formularza kontaktowego. Jeżeli szukasz <strong>najlepszego fotografa ślubnego w Bochni</strong> to całkiem dobrze trafiłeś. Nazywam się Tomasz Prokop, mieszkam w Krakowie i bardzo chętnie sfotografuję Twój ślub.
        </Typography>

        <Box sx={{ pt: 2, pb: 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY BOCHNIA - ZDJĘCIA ŚLUBNE, KTÓRE ZACHWYCAJĄ
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
          Ilość zdjęć publikowanych każdego dnia w internecie, ich jakość nawet z IPhona z każdym dniem podnosi poprzeczkę i ułatwiając wykonywanie pracy powoduje, że ilość osób, które chciałyby zacząć fotografować profesjonalnie znacząco wzrasta. Dlatego poszukując <strong>fotografa ślubnego w Bochni</strong> pamiętaj o kilku prostych zasadach. Wybierz doświadczonego i utalentowanego fotografa, który ma dobre portfolio i pozytywne opinie od innych par. Koniecznie porozmawiaj z fotografem o swoich preferencjach, aby upewnić się, że będzie on w stanie dostarczyć materiał w pełni Ciebie satysfakcjonujący. Skorzystaj z opcji pleneru zdjęciowego, aby uzupełnić reportaż ślubny o zdjęcia w naturze, na które ilość czasu jest praktycznie nieograniczona. Staraj się wybierać fotografów oferujących spójny styl bez przesadnego retuszu i efektów z programów graficznych, ponieważ mogą one po pewnym czasie po prostu wyjść z mody. Zwróć uwagę na detale, takie jak kompozycja, oświetlenie. Pamiętaj, że najwaźniejsze są emocje, emocje i jeszcze raz emocje, one na każdym zdjęciu muszą się znaleźć.
        </Typography>

        <Box sx={{ pt: 2, pb: 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
            MIEJSCA PLENEROWE - FOTOGRAFIA ŚLUBNA BOCHNIA
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Poszukując miejsc na plener ślubny pomyślcie Bochnia. Dlaczego? Ponieważ jest to miasto, które z uwagi na zabytki i krajobrazy jest warte polecenia. Lista ciekawych miejsc jest długa, ale wymieńmy tylko kilka z nich, w których można wyczarować magiczne zdjęcia plenerowe. Kopalnia Soli Bochnia - to najstarsza działająca kopalnia soli w Europie, można tam zwiedzić podziemia i sprawdzić skąd bierze się sól. Kościół św. Kingi - piękny gotycki kościół z czternastego wieku, który jest jednym z najważniejszych zabytków Bochni. Czternastowieczny Ratusz, położony na wzgórzu nad miastem Zamek Kmitów, z którego roztacza się wspaniały widok na okolicę.
        </Typography>


        <ImageCarousel images={imagesCarousel2} autoplaySpeed={2000} />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Park Zdrojowy czy Muzeum Soli tam też warto zaglądnąć. Blisko mamy też do wspaniałego Pałacu Goetza, czarującego wspaniałym ogrodem i monumentalnymi schodami, na których uwierzcie mi zdjęcia robią się same. Warto rozważyć okolice Bochni i zdecydować się na ślub i plener właśnie tam.
        </Typography>

        <Box sx={{ pt: 2, pb: 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
            WESELE W BOCHNI - ZAREZERWUJ FOTOGRAFA ŚLUBNEGO JUŻ DZISIAJ
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
          Spójna historia przepełniona Waszymi uczuciami, relacjami z osobami najbliższymi, towarzyszącymi Wam tego dnia to wszystko składa się na idealny reportaż ślubny.
          Fotografie ślubne to piękne portrety, detale, które pokazują smaczki i budują klimat miejsca i kadry wyjęte prosto z życia, pełne emocji, wzruszeń i radości.
          Album fotograficzny, który otrzymujecie to zbiór emocji, które pozostaną z Wami przez długie lata. Nie przesadzę stwierdzając, że będziecie go przeglądać setki razy,
          odkrywając nowe rzeczy, ale przede wszystkim wracając do tych niezapomnianych chwil z radością, a czasem nawet łzami wspomnień. To wszystko może być faktem,
          gdy zdecydujesz się na usługi profesjonalnego fotografa, który będzie w stanie urzeczywistnić te marzenia.
        </Typography>

        <Box sx={{ pt: 2, pb: 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAFIA ŚLUBNA BOCHNIA - WRAŹLIWOŚĆ FOTOGRAFA
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Każdy fotograf to doskonały obserwator, uwielbiający przebywać w nowych miejscach i poznawać ciekawych ludzi. Obserwator jest tutaj słowem kluczowym, ponieważ trudno być w tym zawodzie, mając charakter lidera, który uwielbia przebywać w centrum zainteresowania, opowiadać anegdoty i odciągać swoją osobą uwagę od rzeczy ważnych.
          Uruchomienie migawki aparatu pozwala nam ukraść kilka chwil i zmagazynować je na kartach pamięci. Coś co nigdy się nie powtórzy ma szanse pozostania z nami na zawsze. To dążenie to zapisywania chwil pchało fotografię do przodu przez setki lat. Jestem pewny, że w najbliższej przyszłości nic w tym temacie nie ulegnie radykalnym zmianom.
        </Typography>

        <ImageCarousel images={imagesCarousel3} autoplaySpeed={4000}/>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
          Jeśli szukają Państwo profesjonalnego fotografa ślubnego na Bochni, serdecznie zapraszam do przejrzenia mojego portfolio i przejrzenia zdjęc na blogu. Ważne, aby wybrać fotografa, który spełnia wszystkie Wasze oczekiwania i jest w stanie stworzyć piękną pamiątkę na lata.
        </Typography>

        <Box sx={{ pt: 2, pb: 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAFIA ŚLUBNA BOCHNIA - CENNIK USŁUG
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
          Pewnie myślicie, że tanio już było. Nie jest to regułą. Cena za usługi fotograficzne związane ze ślubem może się różnić w zależności od doświadczenia fotografa, jakości sprzętu, ilości godzin pracy, liczby wykonanych zdjęć itp. Ceny fotografii ślubnej mogą wahać się od kilkuset do nawet kilku tysięcy złotych. Ważne, aby dokładnie zapoznać się z ofertą fotografów, porównać ceny i mieć pewność, że otrzymuje się usługę może nie najtańszą, ale w doskonałej jakości. Zawesze poszukujcie fotografa, który może zaoferować bardzo dobre zdjęcia w rozsądnej cenie.
        </Typography>

        <Box sx={{ pt: 2, pb: 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
            NAJCZĘŚCIEJ ZADAWANE PYTANIA
          </Typography>
        </Box>

        <Box sx={{ pt: 2, pb: 2 }}>
          <FaqAccordion
            q1={schemaData.mainEntity[0].name}
            a1={schemaData.mainEntity[0].acceptedAnswer.text}
            q2={schemaData.mainEntity[1].name}
            a2={schemaData.mainEntity[1].acceptedAnswer.text}
            q3={schemaData.mainEntity[2].name}
            a3={schemaData.mainEntity[2].acceptedAnswer.text}
            q4={schemaData.mainEntity[3].name}
            a4={schemaData.mainEntity[3].acceptedAnswer.text}
          />
        </Box>

        <Box sx={{ pt: 2, pb: 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
            POLECANE REPORTAŻE ŚLUBNE
          </Typography>
        </Box>

        <Box sx={{ pt: 2, pb: 2 }}>
          <Grid container direction="row" alignItems="center">
            <Grid item lg={4} p={1}>
              <ImageCardSmall
                imgsrc={hotel_mercure_kasprowy_zakopane}
                imgalt="wesele w zakopanem, hotel mercury kasprowy, zespół ich troje na weselu"
                linkhref="wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje"
                title="WESELE W ZAKOPANEM"
                names="PATRYCJA i TOMASZ"
              />
            </Grid>
            <Grid item lg={4} p={1}>
              <ImageCardSmall
                imgsrc={dworzyszcze_wola_reportaz_slubny_pod_krakowem}
                imgalt="wesele w stylu boho i rustykalnym"
                linkhref="wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"
                title="WESELE STYL RUSTYKALNY"
                names="SYLWIA i MICHAŁ"
              />
            </Grid>
            <Grid item lg={4} p={1}>
              <ImageCardSmall
                imgsrc={fotograf_na_wesele_rabka_zdroj_portfolio}
                imgalt="fotograf na wesele Rabka Zdrój"
                linkhref="fotograf-na-wesele-rabka-zdroj-kosciol-sw-marii-magdaleny"
                title="FOTOGRAF NA WESELE RABKA"
                names="KAMILA i ADRIAN"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </LayoutSitePage>
  );
};

export default PageComponent;