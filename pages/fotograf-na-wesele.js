import * as React from "react";
import LayoutSitePage from "../components/layoutSitePage";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const wakacje_bukowina = process.env.staticS3ImagesPath + "portfolio/wakacje_bukowina.webp";

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "plener_slubny_park_mogilany.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <LayoutSitePage
      title="Fotograf na wesele Kraków"
      description="Fotograf na wesele z Krakowa. Zapraszam do zapoznania się z portfolio i skorzystania z mojej oferty. Gwarantuję wysokość jakość usług i konkurencyjne ceny."
      keywords="sesja zdjęciowa kraków,fotograf na wesele kraków"
      url="https://99foto.pl/misja-i-faq/"
      leadNames="ANNA i TOMASZ"
      leadTitle="WYMARZONY PLENER ŚLUBNY W KRAKOWIE, SPRAWDZONE MIEJSCA"
      leadUrl="/wymarzony-plener-slubny-w-krakowie-sprawdzone-miejsca"
      leadImage={pageImage}>
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>
        <Box sx={{ py: 2 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
            KILKA SŁÓW O MNIE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Mam na imię Tomek i jestem fotografem ślubnym. Mieszkam w Krakowie z moją żoną Anią i trójką kochanych dzieciaków. Fotografia ślubna od zawsze była moją największą pasją, która przy
          odrobinie szczęścia stała się moim sposobem na życie. Uwielbiam fotografować szczęśliwych ludzi, odwiedzać nowe miejsca i poszukiwać idealnego światła. Fotografię ślubną traktuję jako
          niesamowitą przygodę, która pozwala mi spełniać marzenia. Jestem przekonany, że najlepsze zdjęcia są jeszcze przede mną.
        </Typography>

        <Image alt="fotograf na wesele kraków" src={wakacje_bukowina} width={1140} height={762} style={{width: '100%', height: 'auto'}} priority />

        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF NA WESELE KRAKÓW
          </Typography>
        </Box>

        <Typography align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Kiedy spojrzę w przeszłość na kilka ślubów, które miałem przyjemność fotografować, mogę powiedzieć jedno: każdy ślub jest inny. Para młoda i idealnie dopracowane detale są po prostu piękne.
          Goście weselni swoją radością sprawiają, że dzień ten staje się wyjątkowy, a całe tygodnie i miesiące przygotowań mają swój szczęśliwy finał w tym dniu pełnym uczuć, radości i wzruszeń.
        </Typography>
        <Typography align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Zapytacie mnie dlaczego zajmuję się fotografią ślubną?
        </Typography>
        <Typography align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Otóż chcę zatrzymać czas, sfotografować Twoich rodziców, trzymających się za ręce i wycierających łzy wzruszenia w kościelnej ławce. Taniec Twojej młodszej siostry z chłopakiem, którego być
          może poślubi już za trzy lata. Dzieci sąsiadów, które rosną bardzo, ale to bardzo szybko i Twój pierwszy już małżeński pocałunek. Twojego najlepszego przyjaciela wykonującego mocno
          wyćwiczony, jeszcze studniówkowy taneczny popis, a być może nawet byłego chłopaka, który ze łzą w oku przytrzyma Cię w objęciach trochę dłużej, korzystając z takiej okazji podczas składania
          życzeń ślubnych.
        </Typography>

        <Typography align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Masz jak w banku, że ślubny tort zniknie w czasie krótszym niż godzina, kwiaty zwiędną wkrótce po ceremonii, a suknia ślubna wróci do szafy rano następnego dnia. Ale zdjęcia - pomyśl - one
          zostaną na zawsze. Będą z wami kiedy narodzą się wasze dzieci, kiedy będziecie przechodzić przez największą w karierze małżeńskiej kłótnię. Zawsze będą przypominać wam jak bardzo się
          kochacie. Kiedy waszych rodziców już nie będzie z wami, zdacie sobie sprawę, że ślub to była ostatnia okazja na podziękowania i na wspólny taniec.
        </Typography>
        <Typography align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Moją misją jest więc uwiecznienie tych wszystkich chwil, podarowanie Wam zdjęć w albumie, który przetrwa wieki i przypomni wam dlaczego chcieliście wydać tak idealne i tak bardzo drogie
          przyjęcie ślubne.
        </Typography>
        <Typography align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Jeżeli planujesz swój ślub właśnie teraz to zapomnij o targach ślubnych, wyłącz internet i zamknij katalogi mody ślubnej. Popatrz na osobę z którą chcesz przejść przez życie. Przypomnij
          sobie dlaczego to robisz i pamiętaj o tym, żeby gdy dzień ślubu nadejdzie cieszyć się nim z całego serca. Zero stresu z powodu sukni ślubnej, pierwszego tańca, pocałunków na forum rodziny,
          czekoladowej fontanny czy kwiatów.
        </Typography>
        <Typography align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Pamiętaj, kiedy impreza się skończy, będziecie już na zawsze razem otoczeni ludźmi, którzy doskonale was znają i kochają najbardziej na świecie. Wybierając mnie na Waszego fotografa ślubnego
          będziecie mieli też album pełny bezcennych zdjęć.
        </Typography>
        <Typography align="right" color="text.secondary" sx={{ pb: 3 }}>
          Pozdrawiam i zapraszam serdecznie do skorzystania z moich usług.
        </Typography>
        <Typography align="right" color="text.secondary" sx={{ pb: 3 }}>
          Tomasz Prokop - Fotograf Ślubny Kraków
        </Typography>
      </Container>    
    </LayoutSitePage>
  );
};

export default PageComponent;
