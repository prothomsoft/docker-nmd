import React from "react";
import LayoutStartPage from "../components/layoutStartPage";
import { Typography } from "@mui/material";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import Container from "@mui/material/Container";
import Link from "next/link";
import Box from "@mui/material/Box";
import ImageCardGridStartNormalImages from "../components/imageCardGridStartNormalImages";
import ImageCardGridStartSmallImages from "../components/imageCardGridStartSmallImages";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Index = () => {
  const pageImage = process.env.staticS3ImagesPath + "plener_slubny_na_rynku_w_krakowie.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <LayoutStartPage
      title="Fotograf Ślubny Kraków - Tomasz Prokop"
      description="Kliknij i sprawdź moje portfolio. Pełne emocji reportaże ślubne i piękne zdjęcia plenerowe. Serdecznie zapraszam. Fotograf ślubny Kraków."
      keywords="fotograf ślubny Kraków, fotograf na wesele, fotografia ślubna Kraków"
      url="https://99foto.pl"
      leadNames="PATRYCJA i KRZYSZTOF"
      leadTitle="FOTOGRAF ŚLUBNY W KRAKOWIE"
      leadUrl="/plener-slubny-na-rynku-w-krakowie"
      leadImage={pageImage}
      slide={matches ? process.env.staticS3ImagesPath + "lomnicki_staw_portfolio_start.webp" : process.env.staticS3ImagesPath + "ogrod_botaniczny.webp"}
      menuNames=""
      menuTitle="">
      <Container sx={{ pb: 3 }}>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY KRAKÓW
          </Typography>
        </Box>    
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
        Witam na mojej stronie internetowej. Poszukujesz fotografa ślubnego? Jeśli tak, to doskonale trafiłeś. Fotografia jest moją pasją odkąd pamiętam, śluby fotografuję już blisko dziesięć lat. Serdecznie zapraszam do odwiedzenia{" "}
          <Link href="/blog" passHref>
            mojego bloga
          </Link>{" "}
          oraz obejrzenia{" "}
          <Link href="/reportaz-slubny-krakow" passHref>
            reportaży ślubnych
          </Link>
          ,{" "}
          <Link href="/plener-slubny-krakow" passHref>
            plenerów ślubnych
          </Link>
          ,{" "}
          <Link href="/sesja-narzeczenska-krakow" passHref>
            sesji narzeczeńskich
          </Link>
          , zdjęć pełnych kolorów i autentycznych emocji. Moje prace wyróżnia reporterskie podejście do fotografii czyli jak najmniej ustawianych, reżyserowanych zdjęć, jak najwięcej kadrów
          przedstawiających emocje i spontaniczne reakcje. Oglądając moje prace sami ocenicie czy moje zdjęcia się Wam spodobają. Fotografuję w Krakowie i bliskich okolicach. Wspólnie znajdźmy chwilę,
          światło, kadr, zachowajmy je na zawsze.
        </Typography>
        <Box sx={{ py: 2 }}>
          <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
            POLECANE REPORTAŻE I SESJE ŚLUBNE
          </Typography>
        </Box>

        <Box sx={{display: { sm: "block",  md: "block" , lg: "none", xl: "none" }}}>
          <ImageCardGridStartNormalImages />
        </Box>
        
        <Box sx={{display: { xs: "none", sm: "none",  md: "none" , lg: "block", xl: "block" }}}>
            <ImageCardGridStartSmallImages />
        </Box>

      </Container>

      <ParallaxImageFooter leadImage={process.env.staticS3ImagesPath + "sesja_slubna_jesienia.webp"} leadUrl="" height="70vh" />

      <Container sx={{ py: 3 }}>
        <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
          ZNAJDŹMY CHWILĘ, ŚWIATŁO, KADR
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Moja przygoda z fotografią ślubną rozpoczęła się blisko dziesięć lat temu. Mam nadzieję, że kilka poniższych akapitów pozwoli Wam zapoznać się z rzeczami, które uważam za niezwykle ważne w
          fotografii ślubnej, które zainspirowały mnie do spędzenia ogromnej ilości czasu w moim życiu na fotografowania ślubów w mój własny, niepowtarzalny sposób. Zdaję sobie sprawę, że kilka słów
          to często za mało, żeby napisać o ludziach, miłości, relacjach, fajnych miejscach i ciekawych rzeczach, które niesie ze sobą przygoda zwana fotografią ślubną. Fotografując przez wiele lat
          zauważyłem, że każdy ślub jest inny czasem chaotyczny i pełen akcji, czasem zaplanowany co do sekundy i mega spokojny, ale zawsze pełny emocji i niepowtarzalny. Pamiętajcie, że z
          przyjemnością rozpocznę z Wami przygodę fotografując Wasz dzień. Gwarantuję, że otrzymacie piękne zdjęcia, które będą przywoływać Wasze wspomnienia przez wiele lat.
        </Typography>

        <Typography variant="subtitle1" align="center">
          KOLOR I ŚWIATŁO
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Sposób, w jaki oddaję światło i kolor, jest rzeczą nad którą od początku bardzo ciężko pracuję. Zawsze było dla mnie bardzo ważne, aby rozwinąć moją wizję i styl w coś, co naprawdę jest
          moje, co oznacza, że ​​zdjęcia ślubne wykonane przez innych fotografów ślubnych nie będą wyglądać tak jak te zrobione przeze mnie na Waszym ślubie.
        </Typography>

        <Typography variant="subtitle1" align="center">
          MAGICZNE WYDARZENIA ZAMKNIĘTE W KAPSULE CZASU
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Czy zgodzicie się ze mną, że zdjęcia są magiczne. W swojej naturze w sposób szczególny służą przyszłym pokoleniom chroniąc i zachowując Wasz ślub i wspomnienia na zawsze. Za każdym razem,
          gdy spojrzycie do albumu ślubnego, przypomnicie sobie obecne w dniu ślubu uczucia i emocje. Fotografie z tego najważniejszego dnia w życiu pomogą Wam zachować pamięć o ślubie i przekazać ją
          przyszłym pokoleniom. Pamiętajcie, że album ślubny to niewątpliwie taka mała kapsuła czasu, która pozwala Wam wrócić do dnia ślubu wtedy, kiedy tylko macie na to ochotę.
        </Typography>

        <Typography variant="subtitle1" align="center">
          EMOCJE I ENERGIA
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Jako fotograf ślubny z Krakowa chcę dać Wam zdjęcia, które pokochacie na zawsze. Zdjęcia, które są znaczące, prawdziwe, pełne emocji i życia. Cieszcie się tym dniem z całego serca, dużo się uśmiechajcie, a kwestie
          organizacyjne w dniu ślubu zostawcie w gestii zaufanych znajomych lub bliskiej rodziny. Takie podejście znacznie ułatwi moją pracę i zagwarantuję Wam wspaniałe zdjęcia.
        </Typography>

        <Typography variant="subtitle1" align="center">
          NIEZAPOMNIANE CHWILE I NIEOCZEKIWANE MOMENTY
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Wasz dzień ślubu jest jednym z najważniejszych dni w Waszynm życiu. Zapraszacie całą rodzinę, wszystkich ulubionych znajomych, a wśród nich prawdziwych przyjaciół w jednym szczególnym
          miejscu, chcąc spędzić z nimi niesamowite chwile. Wszyscy wiemy o tym, że będą uściski, pocałunki, gorące życzenia, czasem wyciskające łzy z oczu przemówienia. Najlepsze momenty dzieją się
          nieoczekiwanie i bardzo często są nie do opisania. Moja praca jako fotografa ślubnego, polega na wyszukiwaniu tych ulotnych chwil i uchwyceniu ich na pięknych fotografiach.
        </Typography>

        <Typography variant="subtitle1" align="center">
          SZTUKA I KREATYWNOŚĆ
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Dobre zdjęcie musi zawierać w sobie ogromną dawkę emocji i dlatego reportażowe podejście do fotografii ślubnej jest dla mnie szczególnie ważne. W trakcie reportażu nie spędzam czasu na
          pozowaniu ludzi, wykonywaniu setek zdjęć grupowych lub powtarzaniu momentów, które już się wydarzyły. Podczas sesji plenerowych, które prawie zawsze odbywają się w wybranym dniu po ślubie
          staram się zdobyć Wasze zaufanie, pomóc Wam odnaleźć pewność siebie przed obiektywem aparatu i przelać Wasze uczucia na fotografie ślubne w sposób kreatywny i niebanalny.
        </Typography>

        <Typography variant="subtitle1" align="center">
          MIŁOŚĆ I SZCZĘŚCIE
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Jestem pewny, że chcecie mieć piękny wizualny zapis Waszego ślubu. Ślub zorganizowany przez Was jest szczególny, ponieważ został przecież zorganizowany według Waszego pomysłu, a napędu
          nadchodzącym wydarzeniom nadadzą najbliższe Wam osoby. Tego dnia jako fotograf ślubny chcę być tam dla Was. Chcę, aby miłość i szczęście między Wami zdominowało Wasze zdjęcia ślubne.
          Uchwycenie rzeczywistości, miłości i Waszego szczęścia w tym niezwykłym dniu jest dla mnie najważniejsze.
        </Typography>
      </Container>
      <ParallaxImageFooter leadImage={pageImage} leadUrl="" height="70vh" />
    </LayoutStartPage>
  );
};

export default Index;
