import LayoutSitePage from "../components/layoutSitePage";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import { Typography } from "@mui/material";
import ImageCardGridHistoryNormalImages from "../components/imageCardGridHistoryNormalImages";
import ImageCardGridHistorySmallImages from "../components/imageCardGridHistorySmallImages";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from "next/link";

const PageComponent = () => {

  const pageImage = process.env.staticS3ImagesPath + "sesja_slubna_jesienia.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <LayoutSitePage
      title="Reportaże ślubne Kraków, sesje plenerowe Kraków"
      description="Portfolio fotografa ślubnego, w którym zobaczycie wybrane reportaże ślubne i sesje plenerowe. Dziesięć lat doświadczenia w fotografowaniu ślubów. Kliknij i sprawdź."
      keywords="reportaże ślubne i sesje plenerowe, portfolio fotografa ślubnego"
      url="https://99foto.pl/sesja-slubna-jesienia-palac-goetzow-okocimskich/"
      leadNames="IZABELA i ARKADIUSZ"
      leadTitle="SESJA ŚLUBNA JESIENIĄ - PAŁAC GOETZÓW"
      leadUrl="/sesja-slubna-jesienia-palac-goetzow-okocimskich"
      leadImage={pageImage}>
      <Container sx={{ pt:8, pb: 5 }}>
        <Box sx={{pt:13, display: { xs: "none", lg: "block", xl: "block" }}}></Box>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            REPORTAŻE ŚLUBNE i SESJE PLENEROWE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{pb:2}}>
          Śluby, sesje zdjęciowe to znakomita okazja do tworzenia, odkrywania nowych miejsc, poznawania ciekawych ludzi, poszukiwania idealnego światła, rejestrowania wydarzeń pełnych autentycznych
          emocji. Fotograf ślubny w mojej definicji to osoba mająca we krwi kreatywność i umiejętność łatwego nawiązywania kontaktu z ludźmi, wnikliwy obserwator pozostający w cieniu wydarzeń i
          rejestrujący bieg zdarzeń z największą dyskrecją. Fotografia ślubna to pasja, którą rozwijam każdego dnia obserwując pracę najlepszych fotografów ślubnych w branży, poszukując nowych miejsc
          na niezapomniane sesje zdjęciowe, obserwując powstające i znikające trendy w fotografii ślubnej.
        </Typography>

        <Box sx={{display: { xs: "block", sm: "none",  md: "none" , lg: "block", xl: "block" }}}>
            <ImageCardGridHistorySmallImages />
        </Box>

        <Box sx={{display: { xs: "none", sm: "block",  md: "block" , lg: "none", xl: "none" }}}>
          <ImageCardGridHistoryNormalImages />
        </Box>
       
        
        <Box sx={{ py: 2 }}>
          <Typography variant="h2" className={matches ? 'quote-title' : ''} align="center">
            EMOCJE, UCZUCIA I KOLORY ZATRZYMANE W KAŻDYM KADRZE
          </Typography>
        </Box>
       
        <Typography variant="body1" align="justify" color="text.secondary" sx={{pb:2}}>
          Często mówimy o fotografowaniu sercem, jednak moim zdaniem świat sztuki, wrażliwość artystyczna, niezwykłość to nie wszystko. Fotograf ślubny chętnie śledzi premiery sprzętowe w świecie
          komputerów, aparatów, obiektywów, programów do obróbki zdjęć i sprzętu oświetleniowego. W ten sposób zdobywam informacje i doskonale mój warsztat, rozbudowywuję zaplecze sprzętowe, a to
          wszystko ogromnie ułatwia moją pracę. Stosowanie nowości technicznych w praktyce pozwala mi utrzymać dystans od zdjęć wykonanych przez innych uczestników ślubu. Fotografią ślubną zajmuję się
          już blisko dziesięć lat i uwielbiam miasto Kraków jako główne miejsce mojej działalności.
        </Typography>
        <Typography variant="body1" align="justify" color="text.secondary" sx={{pb:2}}>
          Chcę by wykonane zdjęcia ślubne wyglądały dobrze za rok, dwa i trzy lata. Upór i konsekwencja w dążeniu do wcześniej wyznaczonego celu pozwalają mi być w miejscu, w którym jestem i na pewno
          pozwolą pokonywać kolejne wyzwania i realizować nowe cele. W przyszłości chciałbym robić dokładnie to samo, co przez ostatnie kilka lat, tylko być w tym coraz lepszy. Wielokrotnie miałem
          przyjemność rozmawiać z parami, które w moich zdjęciach doceniły fotografowane ludzkie emocje, łzy wzruszenia podczas ceremonii, uśmiechy, radość z szalonej zabawy.
        </Typography>
        <Typography variant="body1" align="justify" color="text.secondary" sx={{pb:2}}>
          Pary te opowiadały mi o pozytywnym przyjęciu mojej osoby w gronie ich najbliższych znajomych i rodziny. Komplementowały żywe kolory i umiejętnie wykorzystane światło zarówno zastane jak i
          pochodzące z lamp błyskowych. To jak patrzę i jakie mam nastawienie ma ogromny wpływ na moją pracę. Pary wybierając fotografa najpierw patrzą na zdjęcia potem chcą poznać mnie jako człowieka
          by sprawdzić czy będą się dobrze czuć w moim towarzystwie. Nikt nie lubi stresu, dlatego nasze sesje zdjęciowe przebiegają w przyjemnej atmosferze. Zawsze planujemy nasze plenery, a podczas
          robienia zdjęć daję Wam pełną swobodę w wyrażaniu emocji i zachęcam do odsłonięcia części siebie.
        </Typography>
        <Typography variant="body1" align="justify" color="text.secondary" sx={{pb:4}}>
          Wybierając fotografa ślubnego kierujcie się sercem, ale weźcie też pod uwagę jego umiejętności, doświadczenie i zaangażowanie. Koniecznie skonfrontujcie to z Waszymi oczekiwaniami.
          Pamiętajmy, że tak ważnego wydarzenia jak Wasz ślub nie będzie drugi raz, a zdjęcia jakie zrobi Wam wybrany fotograf ślubny pozostaną z Wami na zawsze. Serdecznie zachęcam do odwiedzenia{" "}
          <Link href="/blog">
            mojego bloga
          </Link>{" "}
          . Przeglądając umieszczone tam zdjęcia ocenisz mój sposób postrzegania otaczającego nas świata. Polecam Kraków i okolice. Serdecznie zapraszam.
        </Typography>
      </Container>
      <ParallaxImageFooter leadImage={pageImage} leadUrl="" height="70vh" />
    </LayoutSitePage>
  );
};

export default PageComponent;
