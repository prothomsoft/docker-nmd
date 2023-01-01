import * as React from "react";
import LayoutSitePage from "../components/layoutSitePage";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
const portret_panny_mlodej = process.env.staticS3ImagesPath + "portfolio/portret_panny_mlodej.webp";
const pomysl_na_sesje_slubna_zimowa_w_krakowie = process.env.staticS3ImagesPath + "portfolio/pomysl_na_sesje_slubna_zimowa_w_krakowie.webp";

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "dom-weselny-biala-perla-radziemice-reportaz-slubny.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <LayoutSitePage
      title="Oferta Fotografa Ślubnego ✔️ Tomasz Prokop Fotograf Ślubny"
      description="Jedno kliknięcie ⬆️ znajdziesz fotografa na Twój ślub. Sprawdź ofertę fotografii ślubnej. Kraków i bliskie okolice. Piękne kolory ❤️ autentyczne emocje. Serdecznie zapraszam."
      keywords="Oferta Fotografa Ślubnego, Oferta Sesji Plenerowej Kraków"
      url="https://99foto.pl/oferta-fotografii-slubnej/"
      leadNames="ŻANETA i SEBASTIAN"
      leadTitle="DOM WESELNY BIAŁA PERŁA RADZIEMICE, REPORTAŻ ŚLUBNY"
      leadUrl="/dom-weselny-biala-perla-radziemice-reportaz-slubny"
      leadImage={pageImage}>
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>
        <Box sx={{ pt: 2, pb: 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            OFERTA FOTOGRAFII ŚLUBNEJ
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Serdecznie zapraszam do zapoznania się z moją ofertą. Proponuję jeden pakiet ślubny, którego podstawą jest wyjątkowy reportaż z dnia Waszego ślubu, fotoksiążka i plener w wybranym dniu po
          ślubie. Przed podpisaniem umowy zwykle spotykamy się w Krakowie. Na spotkaniu odpowiadam na Wasze pytania i możecie oglądnąć przykładowe fotoksiążki i albumy ślubne. Zapraszam
          do oglądania zdjęć w portfolio, oraz do oglądania wpisów na blogu. Jeżeli zdjęcia te przypadną Wam do gustu to zapraszam do wypełnienia formularza kontaktowego lub rozmowy telefonicznej.
          Jest to najlepszy sposób by poznać cenę, umówić się na niezobowiązujące spotkanie na którym zdecydujecie co będzie dalej.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} xl={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" align="center" sx={{ pb: 2 }}>
                  REPORTAŻ ŚLUBNY OBEJMUJĄCY
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
                  przygotowania, błogosławieństwo
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
                  ceremonię w kościele lub USC
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
                  przyjęcie weselne do oczepin włącznie (do godz. 1.00)
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary">
                  sesję ślubną w wybranym dniu po ślubie
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6} xl={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" align="center" sx={{ pb: 2 }}>
                  OTRZYMUJECIE
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
                  fotoksiążkę - minimum 140 stron w twardej oprawie, format 30x30cm
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
                  pendrive w etui - minimum 450 zdjęć poddanych starannej obróbce graficznej
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
                  dojazd w dniu ślubu GRATIS
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary">
                  internetową galerię zdjęć w strefie klienta zabezpieczoną hasłem
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ pt: 2 }}>
          <Image alt="oferta fotografii ślubnej" src={portret_panny_mlodej} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        </Box>

        <Box sx={{ pt: 2, py: 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            OFERTA SESJI ZDJĘCIOWEJ
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Plener ślubny jest częścią pakietu reportażu ślubnego, jednak można go również zamówić jako osobny produkt. W tej formie wykonuję zwykle sesje narzeczeńskie, sesje rodzinne, fotografie
          podczas Chrztu Świętego, czy też imprez firmowych. Pakiet ten typowo nie zawiera fotoksiążki jednak może być dowolnie rozszerzony i tak jak w przypadku reportażu ślubnego ofertę możemy
          dostosować do waszych preferencji kontaktując się mailowo lub telefonicznie. Istnieje też możliwość podarowania tego pakietu bliskim lub znajomym w formie Vouchera. Serdecznie zapraszam.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} xl={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" align="center" sx={{ pb: 2 }}>
                  SESJA ZDJĘCIOWA OBEJMUJĄCA
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
                  trzy godziny fotografowania
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 5 }}>
                  dwa lub trzy wybrane miejsca plenerowe
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6} xl={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" align="center" sx={{ pb: 2 }}>
                  OTRZYMUJECIE
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
                  pendrive w etui - minimum 80 zdjęć poddanych starannej obróbce graficznej
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
                  dojazd do 30 km na sesję zdjęciową GRATIS
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary">
                  internetową galerię zdjęć w strefie klienta zabezpieczoną hasłem
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ pt: 2 }}>
          <Image alt="oferta sesji zdjęciowej" src={pomysl_na_sesje_slubna_zimowa_w_krakowie} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        </Box>
      </Container>
    </LayoutSitePage>
  );
};

export default PageComponent;
