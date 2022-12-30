import LayoutSitePage from "../components/layoutSitePage";
import Container from "@mui/material/Container";
import Link from "next/link";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const PageComponent = () => {

    const pageImage = process.env.staticImagesPath + "plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg";
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <LayoutSitePage
      title="Polityka prywatności (RODO)"
      description="Polityka prywatności (RODO), ochrona danych osobowych, profesjonalny fotograf ślubny"
      keywords="polityka prywatności, ochrona danych osobowych, profesjonalny fotograf ślubny"
      url="https://99foto.pl/polityka-prywatnosci-rodo/"
      leadNames="MAŁGORZATA I RAFAŁ"
      leadTitle="PLENER ŚLUBNY SŁOWACJA, ŁOMNICKI STAW i SZCZYRBSKIE JEZIORO"
      leadUrl="/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"
      leadImage={pageImage}>
      <Container sx={{ pt: 8, pb: 5 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            POLITYKA PRYWATNOŚCI - RODO
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Nawiązując współpracę ze mną, podpisując umowę, wysyłając zapytanie za pomocą formularza na stronie internetowej lub przez email, przekazujecie mi swoje dane osobowe, których staję się
          administratorem i które jestem zobowiązany przetwarzać zgodnie z obowiązującym prawem. Dnia 25 maja 2018 roku w życie weszło rozporządzenie Parlamentu Europejskiego 2016/679 z dnia 27
          kwietnia 2016 roku nazwane RODO, które narzuca na wszystkich przedsiębiorców nowe prawa i obowiązki w związku z przetwarzaniem danych osobowych.
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Jako profesjonalny fotograf ślubny prowadzący legalnie swoją działalność gospodarczą na terenie Unii Europejskiej wprowadziłem szereg regulacji i zabezpieczeń, aby Twoje dane były
          przechowywane zgodnie z regułami RODO. Wprowadziłem zasadę minimalizacji pobieranych danych przy jednoczesnym zabezpieczeniu ich najlepszymi dostępnymi metodami.
        </Typography>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            Kto jest administratorem Twoich danych osobowych?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Administratorem danych osobowych jest Tomasz Prokop - Fotograf Ślubny Kraków, 31-231 Kraków, ul. Bociana 4A/35. Kontakt w sprawach związanych z ochroną danych osobowych możliwy jest za
          pośrednictwem adresu email:{" "}
          <Link href="mailto:tomasz@99foto.pl" target="_blank" rel="nofollow">
            tomasz@99foto.pl
          </Link>
          . Bardzo chętnie odpowiem na dodatkowe pytania.
        </Typography>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            Skąd mam Twoje dane osobowe?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Otrzymałem je od Ciebie w różnych sytuacjach na przykład telefonicznie, przez email, gdy wypełniłeś formularz na mojej stronie internetowej, gdy wysłałeś do mnie wiadomość z mediów
          społecznościowych lub podpisałeś ze mną umowę dotyczącą wykonania reportażu ślubnego lub sesji zdjęciowej.
        </Typography>

        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            W jakim celu wykorzystuję Twoje dane osobowe?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          W trakcie mojej pracy Twoje dane osobowe są używane do następujących celów:
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          - realizacji postanowień umowy czyli wykonania fotografii, wydrukowania wykonanych zdjęć, zamieszczenia zdjęć w strefie klienta z hasłem dostępu
          <br />- kontaktu z Tobą w celach związanych z realizacją zawartej przez nas umowy
          <br />- w trakcie zlecenia utrwalania Twojego wizerunku w postaci fotografii
          <br />- za dodatkową zgodą wyrażoną w umowie publikacji Twojego wizerunku w formie zdjęć na mojej stronie internetowej lub w mediach społecznościowych
        </Typography>

        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            Jakie są Twoje prawa w zakresie przetwarzania danych osobowych?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Masz prawo dostępu, modyfikacji, usunięcia oraz prawo do wyrażenia sprzeciwu wobec przetwarzania Twoich danych osobowych.
        </Typography>

        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            Czy udostępniam Twoje dane osobowe?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Twoich danych osobowych nie udostępniam nikomu. To najważniejsza polityka mojej działalności. Nikt nie może podejrzeć treści naszych umów czy zobaczyć listy kontaktów. Fotografie przekazuję
          tylko osobom upoważnionym do tego w zawartej przez nas umowie.
        </Typography>

        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            Jak długo przechowuję Twoje dane osobowe?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Twoje dane osobowe przechowywane są przez czas obowiązywania umowy zawartej z Tobą, a także w zależności od przeznaczenia w celach wykonania obowiązków wynikających z przepisów prawa, w tym
          w szczególności podatkowych i rachunkowych, dochodzenie roszczeń oraz zapobieganie nadużyciom i oszustwom, maksymalnie 6 lat od dnia zakończenia wykonania umowy.
        </Typography>

        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            Jak zabezpieczam Twoje dane osobowe?
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Dostęp do poczty, mediów społecznościowych, plików z danymi jest zabezpieczony hasłem i ograniczony tylko do dwóch urządzeń w mojej firmie. Dyski twarde, na których przechowuję fotografie są
          zabezpieczone przed dostępem fizycznym. Archiwa fotografii są zanonimizowane, skatalogowane i każda sesja zabezpieczona jest hasłem dostępu.
        </Typography>
      </Container>
      <ParallaxImageFooter leadImage={pageImage} leadUrl="" height="70vh" />
    </LayoutSitePage>
  );
};

export default PageComponent;