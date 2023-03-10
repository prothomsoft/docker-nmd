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
      title="Plener ??lubny Krak??w"
      description="Plener ??lubny w Krakowie to atrakcje turystyczne w pi??knym miejscu. Spotkajmy si??, odkryjmy fajne miejsca, zr??bmy niezapomniane zdj??cia. Zapraszam."
      keywords="plener ??lubny Krak??w, sesja ??lubna w krakowie"
      url="https://99foto.pl/plener-slubny-krakow/"
      leadNames="OLGA i DAWID"
      leadTitle="SESJA W KRAKOWIE SUKIENNICE, HOTEL STARY, BULWARY WI??LANE - "
      leadUrl="/sesja-slubna-w-krakowie-sukiennice-hotel-stary-bulwary-wislane"
      leadImage={pageImage}>
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            PLENER ??LUBNY KRAK??W
          </Typography>
        </Box>
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Odwiedzaj??c moj?? stron?? internetow?? trafili??cie do fotografa, kt??ry od zawsze proponuje i z ca??ego serca namawia na sesje zdj??ciowe w Krakowie. Trafili??cie do fotografa, kt??ry swoim
          portfolio udowadnia, ??e nie trzeba jecha?? na koniec ??wiata by zrobi?? niezapomniane zdj??cia ??lubne. Krak??w znany w zimie g????wnie ze smogu ju?? wiosn?? zamienia si?? w pi??kne, ch??tnie odwiedzane
          przez turyst??w i pe??ne historii miasto. Fajnych miejsc na sesj?? zdj??ciow?? nie trzeba tu poszukiwa?? d??ugo. ??atwo odnajdziemy ka??dy styl by uwieczni?? w nim Wasz?? mi??o????.
        </Typography>

        <Image alt="sesja zdj??ciowa Krak??w" src={fotograf_slubny_krakow_10} width={1140} height={760} style={{width: '100%', height: 'auto'}} priority />
        
        <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          DEFINICJA PLENERU ??LUBNEGO
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Plener ??lubny to integralna cz?????? reporta??u ??lubnego, kt??ry pomimo innej specyfiki stanowi jego nieod????czne dope??nienie. Plener ??lubny rz??dzi si?? swoimi prawami. W odr????nieniu od reporta??u
          ??lubnego, w kt??rym uczestnicz?? zaproszeni na uroczysto???? ??lubn?? go??cie, kt??rych jednym z zada?? jest niespuszczanie z oka Pary M??odej, podczas pleneru ??lubnego jeste??cie tylko Wy i Wasza
          mi??o????.
        </Typography>

        <Image alt="sesja zdj??ciowa Krak??w" src={portfolio_0002} width={1140} height={851} style={{width: '100%', height: 'auto'}}  />
        <Image alt="miejska sesja ??lubna" src={fotograf_slubny_portfolio_2023_415} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Miejsce reporta??u ??lubnego jest zwykle mniej lub bardziej okre??lone przez okoliczno??ci, takie jakie jak miejsce zamieszkania Panny M??odej, korzystna oferta sali weselnej, dost??pno????
          zaprzyja??nionej makija??ystki. Plener ??lubny pozwala na zaplanowanie wszystkich tych rzeczy jeszcze raz, tak samo lub inaczej. Wybranie miejsc, w kt??rych by?? mo??e jeszcze nie byli??cie, a
          chcieliby??cie je odwiedzi??. Przez trzy godziny jeste??cie tyko Wy i s?? z Wami uczucia. Zdj??cia plenerowe, kt??re powstaj?? w tym czasie to czysta magia i pami??tka na pozosta???? cz?????? Waszego
          ??ycia.
        </Typography>
        
        <Image alt="sesja zdj??ciowa w zieleni" src={fotograf_slubny_portfolio_2023_570} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="plener ????ubny Bulwary Wi??lane" src={plener_0002} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        
        <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          KIEDY ZROBI?? PLENER ??LUBNY
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Najcz????cie wybieranym sposobem przeprowadzenia ??lubnej sesji zdj??ciowej jest zrealizowanie jej w dniu innym ni?? ??lub. Pozwala to na lepsze przygotowanie si?? do zdj???? i dok??adniejsze
          zaplanowanie miejsca i czasu sesji. Sesja plenerowa w wybranym dniu po ??lubie mo??e r??wnie?? z ??atwo??ci?? przerodzi?? si?? w ciekaw?? przygod??. Najwa??niejszym czynnikiem wp??ywaj??cym na to jakie
          zdj??cia uda nam si?? tego dnia zrobi?? jest stworzenie swobodnej i lu??nej atmosfery. W trakcie wsp??lnego spaceru porozmawiamy na r????ne tematy, po??miejemy si?? tak by trzy godziny zaplanowane na
          plener ??lubny, min????y w oka mgnieniu i sta??y si?? dobrym wspomnieniem.
        </Typography>

        <Image alt="sesja ??lubna Ogr??d Botaniczny Krak??w" src={ogrod_botaniczny} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="ciekawe miejsca na sesje plenerow?? w Krakowie" src={plener_slubny_konie} width={1140} height={555} style={{width: '100%', height: 'auto'}}  />
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Kilka zdj???? plenerowych w dniu ??lubu? Pozostawianie go??ci weselnych na sali nie le??y w dobrym tonie, jednak gdy w trakcie naszego ??lubu, za oknem zauwa??ymy pi??kny zach??d s??o??ca, a sala
          weselna dysponuje ma??ym ogrodem lub ciekawym otoczeniem to warto po??wi??ci?? kilka minut na zdj??cia. 
        </Typography>

        <Image alt="plener ??lubny w Krakowie" src={fotograf_slubny_portfolio_2023_170} width={1140} height={760} style={{width: '100%', height: 'auto'}} /> 
        <Image alt="sesja ??lubna Zamek w Korzkwi" src={portfolio_0014} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
       
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Go??cie na pewno b??d?? wyrozumiali i zrozumiej??, a zdj??cia wykonane w ten spos??b na pewno
          pozostan?? w stylu i klimacie wesela. B??dziecie mieli dok??adnie takie same dodatki, bukiet ??lubny, makija?? i fryzur??. Wykonuj??c plener ??lubny w dniu Waszego ??lubu zachowujemy sp??jno???? zdj????
          plenerowych z reporta??em ??lubnym, co dla niekt??rych z Was mo??e by?? niezwykle istotne.
        </Typography>

        <Image alt="sesja ??lubna na Rynku G????wnym w Krakowie" src={chan_kristina_sesja_slubna_krakow} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Image alt="gad??ety przydatne podczas sesji po??lubnej" src={fotograf_slubny_portfolio_2023_192} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
        <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
          WSKAZ??WKI I REKOMENDACJE MIEJSC
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Na p????noc od Krakowa rozci??gaj?? si?? atrakcje turystyczne Jury Krakowsko-Cz??stochowskiej reprezentowane przez Ojcowski Park Narodowy, Zamek w Pieskowej Skale, Dw??r w Tomaszowicach czy Zamek w
          Korzkwi. Zach??d Krakowa to Zalew w Kryspinowie, Dolina Bolechowicka, Zamek w Przegorza??ach, Kopiec Ko??ciuszki i Ska??ki Twardowskiego. Po??udnie to Park w Mogilanach, Kopiec Kraka i Park
          Bednarskiego. Wsch??d Krakowa natomiast to industrialne klimaty Nowej Huty oraz Muzeum Lotnictwa na Czy??ynach.
        </Typography>

        <Image alt="oryginalne zdj??cia z pleneru ??lubnego" src={portfolio_0008} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Centrum to kwintesencja Krakowa czyli Bulwary Wi??lane, klimatyczny Kazimierz, Plac Nowy, kluby i restauracje reprezentowane przez Mleczarni??, Alchemi??, Star?? Zajezdnie czy te?? Studio
          Qulinarne. Stare Miasto i niezliczona ilo???? uliczek, Wawel, Planty, Zau??ek Czartoryskich, Opera Krakowska, Sukiennice i Rynek G????wny, Browar Lubicz, Hotel Stary - wymienia?? przer????ne miejsca
          mo??na d??ugo.
        </Typography>

        <Image alt="sesja zdj??ciowa Pa??ac Goetza Brzesko" src={sesja_zdjeciowa_palac_goetzow_brzesko} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Image alt="jakie miejsce wybra?? na plener ??lubny w Krakowie" src={fotograf_slubny_portfolio_2023_539} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Przygotowuj??c si?? do sesji zdj??ciowej i szukaj??c odpowiedzi na pytanie gdzie mo??na zrobi?? sesj?? fotograficzn?? w Krakowie, wpiszcie miejsca z powy??szego paragrafu, a gwarantuj??, ??e
          znajdziecie co?? dla Was. Niezliczona ilo???? zak??tk??w, ciekawych miejsc tych bardziej znanych i dopiero czekaj??cych na odkrycie.
        </Typography>

        <Image alt="sesja ??lubna Ogr??d Botaniczny Krak??w" src={portfolio_2021_1} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Image alt="plener ??lubny w g??rach" src={fotograf_slubny_krakow_17} width={1140} height={849} style={{width: '100%', height: 'auto'}}  />
     
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Sesja zdj??ciowa w Krakowie to przede wszystkim dobry plan w uk??adaniu kt??rego bardzo ch??tnie Wam pomog??, konsultuj??c logistyk?? miejsc, podpowiadaj??c pory dnia, kt??re b??d?? najlepsze dla danej
          lokalizacji. Zdj??cia z pleneru maj?? by?? niezwyk??e i niepowtarzalne dlatego warto po??wi??ci?? chwil?? na znalezienie odpowiednich rekwizyt??w, kt??re nadadz?? sesji oryginalno??ci.
        </Typography>

        <Image alt="budowanie kreatywno??ci w fotografii ??lubnej" src={plener_slubny_slowacja} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Image alt="mi??o???? na zdj??ciach plenerowych" src={fotograf_slubny_krakow_7} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Warto te?? przygotowa?? makija?? i fryzur?? zbli??one do tego z dnia ??lubu . Pami??tajcie te??, by koniecznie zabra?? ze sob?? dobry humor - jest to bardzo wa??ne.
        </Typography>

        <Image alt="magia fotografii ??lubnej" src={portfolio_0009} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Image alt="sesja ??lubna Ogr??d Botaniczny Krak??w" src={portfolio_0003} width={1140} height={525} style={{width: '100%', height: 'auto'}}  />

        <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
          PASJA I KREATYWNO????
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Fotografia jest moj?? pasj?? od lat. Jak nie trudno zgadn???? skala kreatywno??ci poczas sesji zdj??ciowych si??ga zenitu. Kilka chwil w dzie?? poprzedzaj??cy Wasz?? sesj?? zdj??ciow?? warto sp??dzi?? na
          przeanalizowaniu moich i istniejacych ju?? w internecie prac innych fotograf??w ??lubnych wykonanych w miejscach lub okolicach miejsc do kt??rych si?? wybieramy.
        </Typography>

        <Image alt="chwila, ??wiat??o, kadr w fotografii ??lubnej" src={portfolio_300} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="miejsc??wki polecane na plener ??lubny" src={fotograf_slubny_krakow_9} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Budowanie kreatywno??ci, poszukiwanie szczero??ci i wyj??tkowo??ci w kadrze to ci??g??a praca. Wierzcie mi, ??e im dalej jestem, tym wi??cej pracy widz?? przed sob??. Ka??da kolejna sesja zdj??ciowa
          buduje ??wiadomo???? tego co mam mie?? w kadrze i jak mam tego szuka??. Tysi??ce przegl??dni??tych zdj???? pozwalaj?? zdefiniowa?? kadr, znale???? inspiracj?? i odpowiedzie?? na pytanie co i jak chc??
          pokazywa??.
        </Typography>

        <Image alt="sesja zdj??ciowa krak??w" src={sesja_zdjeciowa_krakow_5_portfolio} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="sesja ??lubna Ogr??d Botaniczny Krak??w" src={sesja_zdjeciowa_szczyrbskie} width={1140} height={525} style={{width: '100%', height: 'auto'}} />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Trzy godziny fotografowania, najcz????ciej dwa lub trzy wybrane miejsca w Krakowie i okolicach, blisko pi????set zdj????, z kt??rych starannie selekcjonuj?? blisko sto zdj???? do obr??bki graficznej.
          Emocje, emocje i jeszcze raz emocje. Zero ustawek i balast sprz??towy ograniczony do niezb??dnego minimum. Osobi??cie czerpi?? prawdziw?? przyjemno???? w poszukiwaniu prawdziwych emocji w moich
          zdj??ciach, zdobywania Waszego zaufania i odnajdywaniu kadr??w w przer????nych miejscach dzi??ki nieko??cz??cej si?? magii ??wiat??a.
        </Typography>
        
        <Image alt="plener ??lubny Kopiec Krakusa" src={plener_slubny_w_gorach} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Image alt="plener ??lubny w Zamku" src={fotograf_slubny_portfolio_2023_312} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
    
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2, pb: 3 }}>
          Plener ??lubny w Krakowie to najlepszy moment na upami??tnienie tych najpi??kniejszych i najromantyczniejszych chwil na fotografiach. To chwila na oderwanie si?? od rzeczywisto??ci i wcielenie w
          rol?? rozlu??nionego modela. Spotkajmy si?? w Krakowie, wsp??lnie znajd??my chwil??, ??wiat??o, kadr, zachowajmy je na zawsze. Serdecznie zapraszam.
        </Typography>

        <Image alt="Ogr??d Botaniczny, wymarzone miejsce na sesj?? ??lubn??" src={fotograf_slubny_portfolio_2023_555} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
      </Container>
    </LayoutSitePage>
  );
};

export default PageComponent;
