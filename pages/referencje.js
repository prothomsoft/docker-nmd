import * as React from "react";
import LayoutSitePage from "../components/layoutSitePage";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import fotograf_slubny_krakow_2 from "../public/static/portfolio/fotograf_slubny_krakow_2.webp";
import fotograf_slubny_krakow_11 from "../public/static/portfolio/fotograf_slubny_krakow_11.webp";
import fotograf_slubny_krakow_12 from "../public/static/portfolio/fotograf_slubny_krakow_12.webp";
import fotograf_slubny_krakow_14 from "../public/static/portfolio/fotograf_slubny_krakow_14.webp";
import fotograf_slubny_krakow_16 from "../public/static/portfolio/fotograf_slubny_krakow_16.webp";
import fotograf_slubny_krakow_20 from "../public/static/portfolio/fotograf_slubny_krakow_20.webp";
import fotograf_slubny_krakow_21 from "../public/static/portfolio/fotograf_slubny_krakow_21.webp";
import przysiega_w_kosciele_tokarnia from "../public/static/portfolio/przysiega_w_kosciele_tokarnia.webp";
import fotograf_slubny_krakow_4 from "../public/static/portfolio/fotograf_slubny_krakow_4.webp";
import wesele_strazackie_tokarnia from "../public/static/portfolio/wesele_strazackie_tokarnia.webp";
import fotografia_slubna_krakow_44 from "../public/static/portfolio/fotografia_slubna_krakow_44.webp";

const PageComponent = () => {
  const pageImage = process.env.staticImagesPath + "plener_slubny_zamek_pieskowa_skala_krakow.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <LayoutSitePage
      title="Referencje od Par Młodych ✔️ Tomasz Prokop Fotograf Ślubny"
      description="Referencje od Par Młodych. Kilka dobrych słów, które jako polecany fotograf na wesele otrzymałem po wykonaniu reportażu ślubnego. Zapraszam do lektury."
      keywords="Referencje od Par Młodych, Polecany fotograf na wesele Kraków"
      url="https://99foto.pl/referencje/"
      leadNames="MARTYNA i MICHAŁ"
      leadTitle="PLENER ŚLUBNY ZAMEK PIESKOWA SKAŁA"
      leadUrl="/plener-slubny-zamek-pieskowa-skala"
      leadImage={pageImage}>
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            REFERENCJE OD PAR MŁODYCH
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Nie jestem pewna, czy Tomek zasługuje na 5 gwiazdek... bo w naszej opinii należy Mu się znacznie więcej! Niekrępująca atmosfera, profesjonalizm i czujne oko obserwatora były cechami, których
          szukałam u fotografa ślubnego i które z pewnością znalazłam u Tomka. Piękne zdjęcia jednej z koleżanek nakłoniły nas do zmiany fotografa ślubnego na miesiąc przed weselem, ale dziś patrząc
          na nasze fotografie wiem, że ta szalona decyzja była strzałem w dziesiątkę! Każdej parze poszukującej fotografa ślubnego z pełnym przekonaniem polecamy Tomasza - choć reportaże na Jego blogu
          są chyba wystarczającą rekomendacją :) Raz jeszcze dziękujemy Ci Tomku za piękne i szybko oddane zdjęcia, współpracę z Tobą będziemy zawsze miło wspominać!{" "}
          <Link href="/sala-weselna-nedan-pcim-reportaz-slubny" >
            Anna i Krzysztof
          </Link>
          .
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Od samego początku współpraca z Tomkiem przebiegała idealnie :) Pełen pomysłów w głowie i zapału do pracy, a przy okazji napełniony dobrą energią, która dodała nam &quot;powera&quot; w tym ważnym dla
          nas dniu! Błyskawiczna obsługa z pięknymi zdjęciami :) Jak tylko wybierać to zdecydowanie Tomka ! :) Dziękujemy i na pewno kiedyś jeszcze się zobaczymy.{" "}
          <Link href="/hotel-qubus-krakow-sesja-zdjeciowa">
            Ewelina i Kamil
          </Link>
          .
        </Typography>

        <Image alt="sala weselna Nedan Pcim" src={fotograf_slubny_krakow_20} style={{width: '100%', height: 'auto'}} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Tomku Twoje zdjęcia pokazują Twoją pasje i zaangażowanie, pełen profesjonalizm i pracę jaką wkładasz w to aby były nietuzinkowe. Świetna gra świateł, idealnie dobrane kolory i bardzo
          trafione czarnobiałe fotografie. Pokazałeś na zdjęciach nas takich jacy jesteśmy, a to chyba najpiękniejsze.{" "}
          <Link href="/palac-goetz-wesele-plener-slubny">
            Anna i Paweł
          </Link>
          .
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Serdecznie polecamy. Niezwykle profesjonalne podejście, bardzo miła atmosfera i przepiękne zdjęcia! Długo zastanawialiśmy się nad wyborem fotografa, ale wiemy, że nie mogliśmy lepiej wybrać.
          Tomku, dziękujemy za piękną pamiątkę i serdecznie pozdrawiamy.{" "}
          <Link href="/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie">
            Natalia i Piotr
          </Link>
          .
        </Typography>

        <Image alt="piękne zdjęcia, pełne emocji reportaże ślubne" src={fotograf_slubny_krakow_2} style={{width: '100%', height: 'auto'}} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Tomek zajmuje się fotografią ślubną z pasją, robi świetne zdjęcia, a do tego zna sie na tej sztuce! Poza tym jest wspaniałym, uśmiechniętym człowiekiem i praca z nim to czysta przyjemność
          :-) słyszałam, że najlepszy aparaciarz to taki, na którego nie zwraca się uwagi i Tomek taki jest. Cichaczem pstryka fotki i przez to są naturalne, a na plenerze daje mnóstwo super pomysłów
          :-) dziękujemy Tomku za zdjęcia ślubne i wczorajszy plener (to był dla nas z Pawłem wspaniały prezent na rocznice) !!!{" "}
          <Link href="/kasia-i-pawel-zimowa-sesja-slubna-w-gorach">
            Kasia i Paweł
          </Link>
          .
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Dziękujemy bardzo za przepiękną pamiątkę, zdjęcia rewelacja, choć ten dzień bardzo szybko minął przez bardzo duże emocje nie wiele pamietamy ale dzięki Tomkowi są zatrzymane wszystkie chwilę
          na zdjęciach. Jakość, szybkość w realizacji materiału wszystko na SZÓSTKĘ Z DUŻYM PLUSEM. Jeszcze raz dziękujemy bardzo i będziemy zawsze polecać!. Natalia i Krzysztof.
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Chcielibyśmy bardzo podziękować za pełen profesjonalizm zarówno w dniu ślubu jak i na sesji! Rewelacyjne zdjęcia, super współpraca, nie da się ukryć że Tomasz robi to, co lubi i robi to z
          pasją i zamiłowaniem do fotografii! Polecamy pod każdym względem!{" "}
          <Link href="/pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki">
            Natalia i Łukasz
          </Link>
          .
        </Typography>
        
        <Image alt="ślub w hotelu kasprowy zakopane" src={przysiega_w_kosciele_tokarnia} style={{width: '100%', height: 'auto'}} />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Dziękujemy, dziękujemy, dziękujemy. Byliśmy pewni że nasza współpraca z Tomkiem przebiegnie idealnie i tak właśnie było. Polecamy wszystkim z całego serca!!!{" "}
          <Link href="/zielone-wzgorze-koniusza-tak-w-promieniach-slonca">
            Karola i Mati
          </Link>
          .
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Serdecznie polecamy Tomka! Świetny, bardzo profesjonalny fotograf, a jednoczesnie przesympatyczny i zawsze uśmiechnięty człowiek. Zdjęcia gotowe w ekspresowym tempie, a każde z nich
          wyjątkowe. Pozostaną dla nas przepiękną pamiątką na zawsze! Tomku, to była prawdziwa przyjemność z Tobą współpracować! Bardzo dziękujemy za wszystko! Maria i Amaury.
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Z całego serca polecamy Tomka jako fotografa ślubnego! Miła i profesjonalna współpraca, świetne ujęcia i bardzo szybka realizacja - po tygodniu mieliśmy już zdjęcia do oglądania - coś
          pięknego. Bardzo polecamy tym, którzy się jeszcze zastanawiają.{" "}
          <Link href="/sesja-slubna-w-krakowie-sukiennice-hotel-stary-bulwary-wislane">
            Olga i Dawid
          </Link>
        </Typography>

        <Image alt="pełne emocji reportaże ślubne, niezapomniane sesje plenerowe" src={fotograf_slubny_krakow_21} style={{width: '100%', height: 'auto'}} />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          W każdym calu zajebisty fotograf, a przede wszystkim człowiek!!! Polecam z czystym sumieniem. Jeżeli ktoś oczekuje pełnego zaangażowania, precyzji, kompetencji, sprytnego oka oraz wielu
          wielu innych drobnych jak i większych zdolności od fotografa - to właśnie znalazł odpowiednią osobę! Jeżeli chcesz aby fotograf plątał Ci się pod nogami albo szturchał Cię bez słowa
          przepraszam, to tutaj takiej osoby nie znajdziesz. Tomek, to ciepły człowiek o wielkim sercu do swojej pasji. Zrobi wszystko, żeby zachować Twoje najpiękniejsze chwile w życiu!{" "}
          <Link href="/paulina-i-bartek-sesja-poslubna-kasprowy-wierch-i-nosal-zakopane">
            Paulina i Bartek
          </Link>
          .
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Pełen profesjonalizm i zaangażowanie! Dyskretna i bardzo efektowna praca Tomka robi wrażenie tak jak Jego zdjęcia :) spokój i usmiech :) świetna współpraca! Dziękujemy Tomek.{" "}
          <Link href="/sylwia-i-bartek-sesja-poslubna-krakow">
            Sylwia i Bartek
          </Link>
          .
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Tomku dziekujemy jesteśmy oczarowani zdjęciami. W 100% polecamy Tomka pełen profesjonalizm, otwartość i zaangażowanie w to co robi jest na najwyższym poziomie. Agnieszka i Mateusz.
        </Typography>

        <Image alt="wesele w stylu boho i rustykalnym" src={fotograf_slubny_krakow_12} style={{width: '100%', height: 'auto'}} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Tak jak już wiele osób pisało - Tomek to profesjonalista w każdym calu! W niesamowity sposób uwiecznia na zdjęciach najważniejsze chwile – pełne wzruszeń, pozytywnych emocji i radości.
          Wtapia się w gości, dzięki czemu zdjęcia są mega naturalne. Stwarza genialną atmosferę, jest przesympatyczny i ciągle uśmiechnięty – praca z Nim to sama przyjemność! A zdjęcia dostarcza
          błyskawicznie! Tomku, raz jeszcze dziękujemy za przepiękne zdjęcia, dzięki którym wspomnienia powracają! Wszystkim gorąco polecamy!{" "}
          <Link href="/sesja-zdjeciowa-kopiec-kraka-przegorzaly-kryspinow">
            Natalia i Tomasz
          </Link>
          .
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Najlepszy Fotograf na świecie !!! Jesteśmy o tym przekonani na 100%! Uchwyci każdą piękną chwilę, wszystkie zdjęcia naturalne, pełne pasji, magiczne, robione z sercem... Jako człowiek -
          świetny Gość ! :) Tacy ludzie to skarb :) Pokochaliśmy Tomka od pierwszego wrażania :) Dziękujemy za wszystko i polecamy z całych serduszek. Edyta i Dawid.
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Tomek super fotograf!!! Robi przepiękne zdjęcia. Już na pierwszym spotkaniu wiedziałam, że wybór Tomka to był strzał w 10. Jest profesjonalistą, a jak się ogląda jego zdjęcia to aż łezka w
          oku się kręci. Będziemy mieć super pamiątkę. Dziękujemy jeszcze raz za wspaniałą współprace. Polecamy z calego serca! Ola i Rafał.
        </Typography>
       
        <Image alt="wesele na polu golfowym w Paczółtowicach" src={fotograf_slubny_krakow_4} style={{width: '100%', height: 'auto'}} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Piękne zdjęcia i pełen profesjonalizm. Dziękujemy jeszcze raz za wspaniałą współprace. Szczerze polecam.{" "}
          <Link href="/hotel-lenart-wieliczka-turkusowy-cadillac-de-ville">
            Monika i Mariusz
          </Link>
          .
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Tomka poznałam 5 lat temu przy okazji ślubu i wesela przyjaciółki. Już wtedy zwróciła moją uwagę jakość jego zdjęć, ich naturalność, ujęte w nich emocje. Tomek nie prosił uczestników o
          pozowanie do zdjęć, ale raczej robił je w locie, a dodatkowo dbał o dobrą atmosferę. Uznaliśmy z Mężem, że dostosujemy datę naszej uroczystości do jego dostępności i jesteśmy bardzo
          zadowoleni z tej współpracy. Zdjęcia były piękne (ślub, wesele, sesja plenerowa), dobrze obrobione i szybko pojawiły się na stronie internetowej. Tomek bez problemu poradził sobie z
          wyzwaniami, takimi jak odblaski od okularów (powłoka blue care). Serdecznie polecamy! Anna i Grzegorz.
        </Typography>

        <Image alt="samochód ślubny tesla" src={fotografia_slubna_krakow_44} style={{width: '100%', height: 'auto'}} />
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Serdecznie polecamy Tomka! To świetny, niezwykle profesjonalny fotograf, który jest zaangażowany w swoją pracę, a przy tym jest przesympatyczny i zawsze uśmiechnięty. Zdjęcia otrzymaliśmy w
          ekspresowym tempie, na każdym z nich Tomek uchwycił piękne chwile z naszego dnia. Zdjęcia są przepiękną pamiątką! Tomku, to była przyjemność z Tobą współpracować! Jeszcze raz dziękujemy za
          przepiękne zdjęcia!{" "}
          <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny">
            Anna i Piotr
          </Link>
          .
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Tomku póki co Ryśka nie ma w domu i nie widział zdjęć a ja rano przez chwilę tylko miałam dostęp do internetu ale zdjęcia są SUPER. Nie wiem czy wszycy tak reagują ale mnie bardzo wzruszyły
          te zdjęcia i przeniosły do tego pamiętnego dnia... Mają niesamowitą magię... Patrycja i Ryszard.
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Otwarty, profesjonalny i cierpliwy, polecamy Tomka każdemu! Zdjęcia które wykonuje są piękne i klimatyczne, współprace z nim będziemy bardzo miło wspominać.{" "}
          <Link href="/sala-bankietowa-triana-mogilany-reportaz-slubny-podstolice">
            Paulina i Paweł
          </Link>
          .
        </Typography>

        <Image alt="dobry fotograf ślubny kraków" src={wesele_strazackie_tokarnia} style={{width: '100%', height: 'auto'}} />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Niesamowicie się cieszymy, że to właśnie Tomek &quot;łapał chwile&quot; na naszym ślubie! Pasja i profesjonalizm widoczne są na każdym zdjęciu, i każde z nich można oprawić i powiesić na ścianie.
          Dodatkowo pozytywne nastawienie, serdeczność i uśmiech zdecydowanie ułatwiają przeżycie tego dnia bez dodatkowego stresu, ponieważ Tomek od pierwszej rozmowy sprawia wrażenie jakby znało się
          go długi, długi czas. Niesamowicie szybki czas realizacji, zdjęcia otrzymaliśmy dokładnie po 7 dniach. Polecam z całego serca, bardzo się cieszę że na siebie trafiliśmy i że to właśnie Tomek
          towarzyszył nam w tym ważnym dla nas dniu! jeszcze raz DZIĘKUJEMY! Patrycja i Grzegorz.
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Serdecznie dziękujemy za uwiecznienie wspaniałych chwil. Polecamy współpracę z Tomkiem wszystkim szukającym najwyższej jakości usług i pełnego profesjonalizmu.{" "}
          <Link href="/dom-weselny-biala-perla-radziemice-reportaz-slubny">
            Żaneta i Sebastian
          </Link>
          .
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Gorące podziękowania dla Tomka za wspaniałą pamiątkę z naszego wesela, które odbyło się 15 sierpnia tego roku. Współpraca, podejście do tematu, zaangażowanie na bardzo wysokim poziomie.
          Materiał z wesela otrzymaliśmy w ekspresowym terminie. Wszystkim serdecznie polecamy!{" "}
          <Link href="/patrycja-i-michal-sesja-narzeczenska-pieskowa-skala">
            Patrycja i Michał
          </Link>
          .
        </Typography>
        
        <Image alt="sesja zdjęciowa kopiec kraka" src={fotograf_slubny_krakow_11} style={{width: '100%', height: 'auto'}} />
        

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Tomku, dziękujemy ogromnie za przepiękną pamiątkę jaką mamy dzięki Tobie. Twoje zaangażowanie i ogrom pomysłów widać w każdym ujęciu. Nie mogliśmy wymarzyć sobie lepszego fotografa. Polecamy
          wszystkim !{" "}
          <Link href="/fotograf-slubny-krzeszowice-cztery-pory-roku-alwernia">
            Aleksandra i Grzegorz
          </Link>
          .
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Zaangażowany, baczny obserwator wydarzeń, profesjonalista z pasją i pomysłowością. Czego efektem są piękne zdjęcia! Dziękujemy i polecamy!{" "}
          <Link href="/palac-goetza-brzesko-sluba-sesja-zdjeciowa">
            Magdalena i Łukasz
          </Link>
          .
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Tomek jest świetnym fotografem. Każdy ważny moment jest uchwycony w magiczny sposób. Nie ma zdjęcia, które by sie powtarzało. Efekty mówią same za siebie, wystarczy tylko popatrzeć na bloga.
          Atmosfera, która stwarza jest rewelacyjna. Gorąco polecam.{" "}
          <Link href="/wesele-tarnow-dwor-bistuszowa-i-staropolski-klimat-slubny">
            Aleksandra i Przemek
          </Link>
          .
        </Typography>
        
        <Image alt="Ślub w Bazylice Bożego Ciała w Krakowie" src={fotograf_slubny_krakow_14} style={{width: '100%', height: 'auto'}} />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Tomku, z całego serca dziękujemy za cudowne zdjęcia z naszego ślubu. Lepszych nie mogliśmy sobie wymarzyć. Jesteśmy totalnie oczarowani relacją, która dla nas stworzyłeś. Idealnie uchwycone
          chwile, oryginalne i niebanalne kadry, naturalność, swoboda i spontaniczność – to wszystko składa się na naszą piękną historię, którą ujęcie po ujęciu możemy przeżywać na nowo za każdym
          razem kiedy wracamy do Twoich zdjęć.{" "}
          <Link href="/plener-w-beskidach-sesja-slubna-w-beskidzie-slaskim">
            Magdalena i Jonasz
          </Link>
          .
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Serdecznie polecamy Tomka! To świetny, niezwykle profesjonalny fotograf, który jest zaangażowany w swoją pracę, a przy tym jest przesympatyczny i zawsze uśmiechnięty. Zdjęcia otrzymaliśmy w
          ekspresowym tempie, na każdym z nich Tomek uchwycił piękne chwile z naszego dnia. Zdjęcia są przepiękną pamiątką! Tomku, to była przyjemność z Tobą współpracować! Jeszcze raz dziękujemy za
          przepiękne zdjęcia{" "}
          <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny">
            Anna i Piotr
          </Link>
          .
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Jednym słowem - człowek zajmujący się fotogafią ślubną z pasją, co widać po efektach. Już nie możemy doczekać się zdjęć z sesji. W przyszłości jeśli będę miała szukać fotografa, na pewno
          zadzwonię do Tomka. Dziękujemy za przepiękne zdjęcia, zaangazowanie, uśmiech i energię, która udzieliła sie również nam. Do zobaczenia.{" "}
          <Link href="/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow">
            Aleksandra i Paweł
          </Link>
          .
        </Typography>

        <Image alt="sala weselna Alexandra Mszana Dolna" src={fotograf_slubny_krakow_16} style={{width: '100%', height: 'auto'}} />

        
      </Container>
    </LayoutSitePage>
  );
};

export default PageComponent;
