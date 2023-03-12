import LayoutSitePage from "../components/layoutSitePage";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const ogrod_botaniczny = process.env.staticS3ImagesPath + "portfolio/ogrod_botaniczny.webp";
const portfolio_0002 = process.env.staticS3ImagesPath + "portfolio/portfolio_0002.webp";
const plener_0002 = process.env.staticS3ImagesPath + "portfolio/plener_0002.webp";
const portfolio_0014 = process.env.staticS3ImagesPath + "portfolio/portfolio_0014.webp";
const portfolio_0008 = process.env.staticS3ImagesPath + "portfolio/portfolio_0008.webp";
const portfolio_0009 = process.env.staticS3ImagesPath + "portfolio/portfolio_0009.webp";
const portfolio_300 = process.env.staticS3ImagesPath + "portfolio/portfolio_300.webp";
const sesja_zdjeciowa_krakow_5_portfolio = process.env.staticS3ImagesPath + "portfolio/sesja_zdjeciowa_krakow_5_portfolio.webp";
const chan_kristina_sesja_slubna_krakow = process.env.staticS3ImagesPath + "portfolio/chan_kristina_sesja_slubna_krakow.webp";
const sesja_zdjeciowa_palac_goetzow_brzesko = process.env.staticS3ImagesPath + "portfolio/sesja_zdjeciowa_palac_goetzow_brzesko.webp";
const plener_slubny_konie = process.env.staticS3ImagesPath + "portfolio/plener_slubny_konie.webp";
const plener_slubny_w_gorach = process.env.staticS3ImagesPath + "portfolio/plener_slubny_w_gorach.webp";
const plener_slubny_slowacja = process.env.staticS3ImagesPath + "portfolio/plener_slubny_slowacja.webp";
const portfolio_0003 = process.env.staticS3ImagesPath + "portfolio/portfolio_0003.webp";
const sesja_zdjeciowa_szczyrbskie = process.env.staticS3ImagesPath + "portfolio/sesja_zdjeciowa_szczyrbskie.webp";
const portfolio_2021_1 = process.env.staticS3ImagesPath + "portfolio/portfolio_2021_1.webp";
const fotograf_slubny_krakow_17 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_krakow_17.webp";
const fotograf_slubny_krakow_10 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_krakow_10.webp";
const fotograf_slubny_portfolio_2023_170 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_170.webp"; //plener
const fotograf_slubny_portfolio_2023_570 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_570.webp"; //plener
const fotograf_slubny_portfolio_2023_555 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_555.webp"; //plener
const fotograf_slubny_portfolio_2023_539 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_539.webp"; //plener
const fotograf_slubny_portfolio_2023_312 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_312.webp"; //plener
const fotograf_slubny_portfolio_2023_192 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_192.webp"; //plener
const fotograf_slubny_portfolio_2023_415 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_415.webp"; //plener
const fotograf_slubny_krakow_7 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_krakow_7.webp"; //plener
const fotograf_slubny_krakow_9 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_krakow_9.webp"; //plener

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "sesja_slubna_sukiennice_hotel_stary_krakow_start.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <LayoutSitePage
      title="Plener ślubny Kraków"
      description="Plener ślubny w Krakowie to atrakcje turystyczne w pięknym miejscu. Spotkajmy się, odkryjmy fajne miejsca, zróbmy niezapomniane zdjęcia. Zapraszam."
      keywords="plener ślubny Kraków, sesja ślubna w krakowie"
      url="https://99foto.pl/plener-slubny-krakow/"
      leadNames="OLGA i DAWID"
      leadTitle="SESJA W KRAKOWIE SUKIENNICE, HOTEL STARY, BULWARY WIŚLANE - "
      leadUrl="/sesja-slubna-w-krakowie-sukiennice-hotel-stary-bulwary-wislane"
      leadImage={pageImage}>
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            PLENER ŚLUBNY KRAKÓW
          </Typography>
        </Box>
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Odwiedzając moją stronę internetową trafiliście do fotografa, który od zawsze proponuje i z całego serca namawia na sesje zdjęciowe w Krakowie. Trafiliście do fotografa, który swoim
          portfolio udowadnia, że nie trzeba jechać na koniec świata by zrobić niezapomniane zdjęcia ślubne. Kraków znany w zimie głównie ze smogu już wiosną zamienia się w piękne, chętnie odwiedzane
          przez turystów i pełne historii miasto. Fajnych miejsc na sesję zdjęciową nie trzeba tu poszukiwać długo. Łatwo odnajdziemy każdy styl by uwiecznić w nim Waszą miłość.
        </Typography>

        <Image alt="sesja zdjęciowa Kraków" src={fotograf_slubny_krakow_10} width={1140} height={760} style={{width: '100%', height: 'auto'}} priority />
        
        <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          DEFINICJA PLENERU ŚLUBNEGO
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Plener ślubny to integralna część reportażu ślubnego, który pomimo innej specyfiki stanowi jego nieodłączne dopełnienie. Plener ślubny rządzi się swoimi prawami. W odróżnieniu od reportażu
          ślubnego, w którym uczestniczą zaproszeni na uroczystość ślubną goście, których jednym z zadań jest niespuszczanie z oka Pary Młodej, podczas pleneru ślubnego jesteście tylko Wy i Wasza
          miłość.
        </Typography>

        <Image alt="sesja zdjęciowa Kraków" src={portfolio_0002} width={1140} height={851} style={{width: '100%', height: 'auto'}}  />
        <Image alt="miejska sesja ślubna" src={fotograf_slubny_portfolio_2023_415} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Miejsce reportażu ślubnego jest zwykle mniej lub bardziej określone przez okoliczności, takie jakie jak miejsce zamieszkania Panny Młodej, korzystna oferta sali weselnej, dostępność
          zaprzyjaźnionej makijażystki. Plener ślubny pozwala na zaplanowanie wszystkich tych rzeczy jeszcze raz, tak samo lub inaczej. Wybranie miejsc, w których być może jeszcze nie byliście, a
          chcielibyście je odwiedzić. Przez trzy godziny jesteście tyko Wy i są z Wami uczucia. Zdjęcia plenerowe, które powstają w tym czasie to czysta magia i pamiątka na pozostałą część Waszego
          życia.
        </Typography>
        
        <Image alt="sesja zdjęciowa w zieleni" src={fotograf_slubny_portfolio_2023_570} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="plener śłubny Bulwary Wiślane" src={plener_0002} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        
        <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          KIEDY ZROBIĆ PLENER ŚLUBNY
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Najczęście wybieranym sposobem przeprowadzenia ślubnej sesji zdjęciowej jest zrealizowanie jej w dniu innym niż ślub. Pozwala to na lepsze przygotowanie się do zdjęć i dokładniejsze
          zaplanowanie miejsca i czasu sesji. Sesja plenerowa w wybranym dniu po ślubie może również z łatwością przerodzić się w ciekawą przygodę. Najważniejszym czynnikiem wpływającym na to jakie
          zdjęcia uda nam się tego dnia zrobić jest stworzenie swobodnej i luźnej atmosfery. W trakcie wspólnego spaceru porozmawiamy na różne tematy, pośmiejemy się tak by trzy godziny zaplanowane na
          plener ślubny, minęły w oka mgnieniu i stały się dobrym wspomnieniem.
        </Typography>

        <Image alt="sesja ślubna Ogród Botaniczny Kraków" src={ogrod_botaniczny} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="ciekawe miejsca na sesje plenerową w Krakowie" src={plener_slubny_konie} width={1140} height={555} style={{width: '100%', height: 'auto'}}  />
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Kilka zdjęć plenerowych w dniu ślubu? Pozostawianie gości weselnych na sali nie leży w dobrym tonie, jednak gdy w trakcie naszego ślubu, za oknem zauważymy piękny zachód słońca, a sala
          weselna dysponuje małym ogrodem lub ciekawym otoczeniem to warto poświęcić kilka minut na zdjęcia. 
        </Typography>

        <Image alt="plener ślubny w Krakowie" src={fotograf_slubny_portfolio_2023_170} width={1140} height={760} style={{width: '100%', height: 'auto'}} /> 
        <Image alt="sesja ślubna Zamek w Korzkwi" src={portfolio_0014} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
       
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Goście na pewno będą wyrozumiali i zrozumieją, a zdjęcia wykonane w ten sposób na pewno
          pozostaną w stylu i klimacie wesela. Będziecie mieli dokładnie takie same dodatki, bukiet ślubny, makijaż i fryzurę. Wykonując plener ślubny w dniu Waszego ślubu zachowujemy spójność zdjęć
          plenerowych z reportażem ślubnym, co dla niektórych z Was może być niezwykle istotne.
        </Typography>

        <Image alt="sesja ślubna na Rynku Głównym w Krakowie" src={chan_kristina_sesja_slubna_krakow} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Image alt="gadżety przydatne podczas sesji poślubnej" src={fotograf_slubny_portfolio_2023_192} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
        <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
          WSKAZÓWKI I REKOMENDACJE MIEJSC
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Na północ od Krakowa rozciągają się atrakcje turystyczne Jury Krakowsko-Częstochowskiej reprezentowane przez Ojcowski Park Narodowy, Zamek w Pieskowej Skale, Dwór w Tomaszowicach czy Zamek w
          Korzkwi. Zachód Krakowa to Zalew w Kryspinowie, Dolina Bolechowicka, Zamek w Przegorzałach, Kopiec Kościuszki i Skałki Twardowskiego. Południe to Park w Mogilanach, Kopiec Kraka i Park
          Bednarskiego. Wschód Krakowa natomiast to industrialne klimaty Nowej Huty oraz Muzeum Lotnictwa na Czyżynach.
        </Typography>

        <Image alt="oryginalne zdjęcia z pleneru ślubnego" src={portfolio_0008} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Centrum to kwintesencja Krakowa czyli Bulwary Wiślane, klimatyczny Kazimierz, Plac Nowy, kluby i restauracje reprezentowane przez Mleczarnię, Alchemię, Starą Zajezdnie czy też Studio
          Qulinarne. Stare Miasto i niezliczona ilość uliczek, Wawel, Planty, Zaułek Czartoryskich, Opera Krakowska, Sukiennice i Rynek Główny, Browar Lubicz, Hotel Stary - wymieniać przeróżne miejsca
          można długo.
        </Typography>

        <Image alt="sesja zdjęciowa Pałac Goetza Brzesko" src={sesja_zdjeciowa_palac_goetzow_brzesko} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Image alt="jakie miejsce wybrać na plener ślubny w Krakowie" src={fotograf_slubny_portfolio_2023_539} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Przygotowując się do sesji zdjęciowej i szukając odpowiedzi na pytanie gdzie można zrobić sesję fotograficzną w Krakowie, wpiszcie miejsca z powyższego paragrafu, a gwarantuję, że
          znajdziecie coś dla Was. Niezliczona ilość zakątków, ciekawych miejsc tych bardziej znanych i dopiero czekających na odkrycie.
        </Typography>

        <Image alt="sesja ślubna Ogród Botaniczny Kraków" src={portfolio_2021_1} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Image alt="plener ślubny w górach" src={fotograf_slubny_krakow_17} width={1140} height={849} style={{width: '100%', height: 'auto'}}  />
     
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Sesja zdjęciowa w Krakowie to przede wszystkim dobry plan w układaniu którego bardzo chętnie Wam pomogę, konsultując logistykę miejsc, podpowiadając pory dnia, które będą najlepsze dla danej
          lokalizacji. Zdjęcia z pleneru mają być niezwykłe i niepowtarzalne dlatego warto poświęcić chwilę na znalezienie odpowiednich rekwizytów, które nadadzą sesji oryginalności.
        </Typography>

        <Image alt="budowanie kreatywności w fotografii ślubnej" src={plener_slubny_slowacja} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Image alt="miłość na zdjęciach plenerowych" src={fotograf_slubny_krakow_7} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Warto też przygotować makijaż i fryzurę zbliżone do tego z dnia ślubu . Pamiętajcie też, by koniecznie zabrać ze sobą dobry humor - jest to bardzo ważne.
        </Typography>

        <Image alt="magia fotografii ślubnej" src={portfolio_0009} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Image alt="sesja ślubna Ogród Botaniczny Kraków" src={portfolio_0003} width={1140} height={525} style={{width: '100%', height: 'auto'}}  />

        <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
          PASJA I KREATYWNOŚĆ
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Fotografia jest moją pasją od lat. Jak nie trudno zgadnąć skala kreatywności poczas sesji zdjęciowych sięga zenitu. Kilka chwil w dzień poprzedzający Waszą sesję zdjęciową warto spędzić na
          przeanalizowaniu moich i istniejacych już w internecie prac innych fotografów ślubnych wykonanych w miejscach lub okolicach miejsc do których się wybieramy.
        </Typography>

        <Image alt="chwila, światło, kadr w fotografii ślubnej" src={portfolio_300} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="miejscówki polecane na plener ślubny" src={fotograf_slubny_krakow_9} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Budowanie kreatywności, poszukiwanie szczerości i wyjątkowości w kadrze to ciągła praca. Wierzcie mi, że im dalej jestem, tym więcej pracy widzę przed sobą. Każda kolejna sesja zdjęciowa
          buduje świadomość tego co mam mieć w kadrze i jak mam tego szukać. Tysiące przeglądniętych zdjęć pozwalają zdefiniować kadr, znaleźć inspirację i odpowiedzieć na pytanie co i jak chcę
          pokazywać.
        </Typography>

        <Image alt="sesja zdjęciowa kraków" src={sesja_zdjeciowa_krakow_5_portfolio} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="sesja ślubna Ogród Botaniczny Kraków" src={sesja_zdjeciowa_szczyrbskie} width={1140} height={525} style={{width: '100%', height: 'auto'}} />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Trzy godziny fotografowania, najczęściej dwa lub trzy wybrane miejsca w Krakowie i okolicach, blisko pięćset zdjęć, z których starannie selekcjonuję blisko sto zdjęć do obróbki graficznej.
          Emocje, emocje i jeszcze raz emocje. Zero ustawek i balast sprzętowy ograniczony do niezbędnego minimum. Osobiście czerpię prawdziwą przyjemność w poszukiwaniu prawdziwych emocji w moich
          zdjęciach, zdobywania Waszego zaufania i odnajdywaniu kadrów w przeróżnych miejscach dzięki niekończącej się magii światła.
        </Typography>
        
        <Image alt="plener ślubny Kopiec Krakusa" src={plener_slubny_w_gorach} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Image alt="plener ślubny w Zamku" src={fotograf_slubny_portfolio_2023_312} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
    
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Plener ślubny w Krakowie to najlepszy moment na upamiętnienie tych najpiękniejszych i najromantyczniejszych chwil na fotografiach. To chwila na oderwanie się od rzeczywistości i wcielenie w
          rolę rozluźnionego modela. Spotkajmy się w Krakowie, wspólnie znajdźmy chwilę, światło, kadr, zachowajmy je na zawsze. Serdecznie zapraszam.
        </Typography>

        <Image alt="Ogród Botaniczny, wymarzone miejsce na sesję ślubną" src={fotograf_slubny_portfolio_2023_555} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
      </Container>
    </LayoutSitePage>
  );
};

export default PageComponent;
