import LayoutSitePage from "../components/layoutSitePage";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const  dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio = process.env.staticS3ImagesPath + "portfolio/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio.webp";
const  portfolio_0013 = process.env.staticS3ImagesPath + "portfolio/portfolio_0013.webp";
const  portfolio_0001 = process.env.staticS3ImagesPath + "portfolio/portfolio_0001.webp";
const  sala_weselna_nedan_pcim_reportaz_slubny_portfolio = process.env.staticS3ImagesPath + "portfolio/sala_weselna_nedan_pcim_reportaz_slubny_portfolio.webp";
const  portret_panny_mlodej = process.env.staticS3ImagesPath + "portfolio/portret_panny_mlodej.webp";
const  portfolio_0021 = process.env.staticS3ImagesPath + "portfolio/portfolio_0021.webp";
const  portfolio_2021_2 = process.env.staticS3ImagesPath + "portfolio/portfolio_2021_2.webp";
const  portfolio_0015 = process.env.staticS3ImagesPath + "portfolio/portfolio_0015.webp";
const  mustang_na_wesele = process.env.staticS3ImagesPath + "portfolio/mustang_na_wesele.webp";
const  martyna_slub_tesla = process.env.staticS3ImagesPath + "portfolio/martyna_slub_tesla.webp";
const  patrycja_slub = process.env.staticS3ImagesPath + "portfolio/patrycja_slub.webp";
const  dworzyszcze_wola_reportaz_slubny_pod_krakowem = process.env.staticS3ImagesPath + "portfolio/dworzyszcze_wola_reportaz_slubny_pod_krakowem.webp";
const  portfolio_0022 = process.env.staticS3ImagesPath + "portfolio/portfolio_0022.webp";
const  wesele_na_polu_golfowym_w_paczoltowicach_portfolio = process.env.staticS3ImagesPath + "portfolio/wesele_na_polu_golfowym_w_paczoltowicach_portfolio.webp";
const  aleksandra_mszana_dolna = process.env.staticS3ImagesPath + "portfolio/aleksandra_mszana_dolna.webp";
const  beata_marcin_mszana_dolna_portfolio = process.env.staticS3ImagesPath + "portfolio/beata_marcin_mszana_dolna_portfolio.webp";
const  plener_w_dniu_slubu = process.env.staticS3ImagesPath + "portfolio/plener_w_dniu_slubu.webp";
const  mustang_na_slub = process.env.staticS3ImagesPath + "portfolio/mustang_na_slub.webp";
const  kopiec_krakusa_sesja_slubna = process.env.staticS3ImagesPath + "portfolio/kopiec_krakusa_sesja_slubna.webp";

const fotograf_slubny_portfolio_2023_189 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_189.webp";
const fotograf_slubny_portfolio_2023_114 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_114.webp";
const fotograf_slubny_portfolio_2023_081 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_081.webp";
const fotograf_slubny_portfolio_2023_502 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_502.webp";
const fotograf_slubny_portfolio_2023_696 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_696.webp";
const fotograf_slubny_portfolio_2023_325 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_325.webp";
const fotograf_slubny_portfolio_2023_013 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_013.webp";
const fotograf_slubny_portfolio_2023_003 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_003.webp";
const fotograf_slubny_portfolio_2023_137 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_137.webp";
const fotograf_slubny_portfolio_2023_196 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_196.webp";
const fotograf_slubny_krakow_3 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_krakow_3.webp";
const natalia = process.env.staticS3ImagesPath + "portfolio/natalia.webp";


const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "bazylika-bozego-ciala-krakow-fotoreportaz-slubny.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <LayoutSitePage
      title="Reporta?? ??lubny Krak??w"
      description="Reporta?? ??lubny Krak??w, chwila, ??wiat??o i kadr. Reporta?? ??lubny pe??ny kolor??w i autentycznych emocji. Twoje fotografie z reporterskim charakterem i bez pozowania."
      keywords="reporta?? ??lubny krak??w, zdj??cia ??lubne"
      url="https://99foto.pl/reportaz-slubny-krakow/"
      leadNames="ANNA i PIOTR"
      leadTitle="BAZYLIKA BO??EGO CIA??A KRAK??W, FOTOREPORTA?? ??LUBNY"
      leadUrl="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"
      leadImage={pageImage}>
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            REPORTA?? ??LUBNY KRAK??W
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Pierwsze pytanie, kt??re pojawia si?? w g??owie ka??dego to okre??lenie r????nicy pomi??dzy zdj??ciami ze ??lubu i wesela, kt??re wykonuj?? na przyk??ad go??cie weselni, a reporta??em ??lubnym przygotowanym
          przez profesjonalnego fotografa. Na pewno nie raz widzieli??cie zdj??cia, kt??re s?? w wi??kszo??ci uj??ciami pozowanymi i brak im reporterskiego charakteru. Ogl??daj??c reporta?? ??lubny, stajemy si??
          obserwatorem wydarze??, mo??emy przyjrze?? si?? szczeg????om i jeste??my w stanie do??wiadczy?? prawdziwych emocji. Praca fotografa ??lubnego polega wi??c na obserwacji i selektywnym gromadzeniu
          niepowtarzalnych, wa??nych moment??w, kt??re finalnie utworz?? histori?? tego jednego z najwa??niejszych dni w ??yciu Pary M??odej.
        </Typography>

       

        
        
        
        
        
 
        <Image alt="mi??o???? zatrzymana na zdj??ciach" src={portfolio_2021_2} width={1140} height={760} style={{width: '100%', height: 'auto'}} priority/>
        <Image alt="autentyczne emocje na zdj??ciach ??lubnych" src={fotograf_slubny_portfolio_2023_013} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Niezwykle wa??ne jest zachowanie dyskrecji i fotografowanie zdarze?? bez ich jakiegokolwiek re??yserowania. Pomimo, ??e takie podej??cie do tworzenia reporta??u ??lubnego jest z ca???? pewno??ci??
          bardziej wymagaj??ce to pozwala ono na utworzenie materia??u fotograficznego, kt??ry pozwoli prze??ywa?? te wyj??tkowe chwile na nowo, za ka??dym razem gdy zagl??dniemy do naszego ??lubnego albumu.
        </Typography>

        <Image alt="Miejsca, wydarzenia, emocje w fotografii ??lubnej" src={portfolio_0013} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="pozowane zdj??cia grupowe" src={mustang_na_wesele} width={1140} height={761} style={{width: '100%', height: 'auto'}} />

        

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Pami??tajmy, ??e nie ka??da bliska nam osoba jest go??ciem naszego ??lubu, dlatego album ??lubny powinien by?? niebanalny i pokaza?? pi??kno dnia, oraz przekaza?? emocje, dobr?? zabaw??, kt??ra temu dniu
          towarzyszy??a. Reporta?? ??lubny zamkni??ty w albumie to wyj??tkowa pami??tka z Waszego ??lubu. Reporta?? ??lubny to sztuka wymagajaca do??wiadczenia i umiej??tno??ci wybierania rzeczy najwa??niejszych,
          wychwytywania emocji i przedstawiania ich w najlepszy mo??liwy spos??b.
        </Typography>

        
        <Image alt="pozowane zdj??cia grupowe" src={natalia} width={1140} height={761} style={{width: '100%', height: 'auto'}} />
        <Image alt="dobry fotograf w Krakowie" src={fotograf_slubny_portfolio_2023_003} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        
        <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF JAKO REPORTER ??LUBNY
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Doskonal??c warsztat fotografa ??lubnego, sp??dzaj??c d??ugie godziny na selekcji zdj????, jako reporta??y??ci rysujemy w naszych g??owach obraz element??w, na kt??re nale??y po??o??y?? najwi??kszy nacisk tworz??c
          histori?? ??lubn??. Skupiamy si?? na fotografowaniu spontanicznych zdarze??, przedstawiamy otoczenie w najlepszy mo??liwy spos??b, eksponujemy detale i skrupulatnie rejestrujemy emocje. Egzekwowanie
          tych element??w jest mo??liwe, dzi??ki umiej??tno??ci przewidywania nadchodz??cych zdarze??, budowania kadru oraz doskona??ej znajmo??ci najwy??szej jako??ci sprz??tu fotograficznego.
        </Typography>

        <Image alt="W??asny styl w fotografii ??lubnej" src={sala_weselna_nedan_pcim_reportaz_slubny_portfolio} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="najlepsze zdj??cia ??lubne roku" src={fotograf_slubny_portfolio_2023_196} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Pami??tajmy jednak, ??e osoba zajmuj??ca si?? fotografi?? ??lubn?? to osoba, kt??ra po??wi??ci??a setki godzin na odkrywanie nowych technik, doskonalenie warsztatu, podpatrywanie mistrz??w, pr??by i
          b????dy, analizowanie sytuacji i wyci??ganie wynikaj??cych z nich wniosk??w. Kilka lat bacznego obserwowania rynku fotografii ??lubnej, pasja i up??r w d????eniu do celu z pewno??ci?? pozwoli??o mi
          stworzy?? zdj??cia i wypracowa?? styl warty Waszej uwagi. W trakcie reporta??u lubi?? obserwowa?? wydarzenia, sporadycznie wyrywam si?? z drobnymi sugestiami.
        </Typography>

        <Image alt="Autentyczne emocje w fotografii ??lubnej" src={portret_panny_mlodej} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
        
        

        <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          MOJE PODEJ??CIE DO REPORTA??U ??LUBNEGO
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Kocham eksperymenty, czerpanie esencji z przemijaj??cych trend??w, konsekwencj?? w d????eniu do celu, lubi?? mie?? plan nie pozwalaj??cy wkra???? si?? przypadkowi. Reporta?? ??lubny to dla mnie pasja i
          spos??b na ??ycie. Reporta?? ??lubny to zale??no???? pomi??dzy czasem ekspozycji, przys??on?? i czu??o??ci?? ISO. Reporta?? ??lubny to jednocze??nie
          zale??no??c pomi??dzy chwil??, ??wiat??em i kadrem. W obu przypadkach jest to zawsze kompromis poparty pomys??em i doskona??ym warsztatem, kt??ry pozwala ten pomys?? zrealizowa??. Fotografia ??lubna to
          moim zdaniem przede wszystkim reporta?? i temat cz??owieka w kadrze. Bez niego nie ma co m??wi?? o uczuciach, rado??ci, ??zach wzruszenia, s??owach, kt??re uk??adaj?? si?? tworz??c chwile, kt??re chcemy
          zatrzyma?? na wieki. ??wiat??o to wed??ug mojej definicji kontekst. Nadaje ono miejscu charakter, tworzy t??o dla wydarze?? i pozwala eksponowa?? emocje.
        </Typography>

        <Image alt="Zdj??cia pe??ne kolor??w i autentycznych emocji" src={portfolio_0021} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="fotograf na wesele Krak??w" src={fotograf_slubny_portfolio_2023_114} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Kadr to wiedza, setki przegl??dni??tych zdj???? i budowane latami poczucie estetyki. Reporta?? ??lubny wykorzystuje te narz??dzia tworz??c opowie???? o ludziach, miejscach, wydarzeniach i emocjach.
          Ka??de zdj??cie ??lubne zaczyna si?? od pomys??u. To zwykle konfrontacja pomi??dzy powsta??ym w naszej g??owie idea??em i mo??liwo??ciami jakie stwarza nam zastana sytuacja. Sprz??t fotograficzny jest
          na pewno wa??ny, ale nie przeceniajmy jego warto??ci. W dzisiejszych czasach, ludzie bardzo cz??sto pos??uguj?? si?? doskona??ymi aparatami i obiektywami. M??j reporta?? ??lubny wci??ga osob??
          ogl??daj??c?? w ci??g wydarze??, tak by mog??a ona poczu?? to, co czuj?? osoby b??d??ce na zdj??ciach. Uwa??am, ??e jestem na Waszym ??lubie by dokumentowa?? ten wa??ny dzie??, pokazywa??, ??e jestem tam dla
          Was i b??d?? opowiada?? o Was. Staram si?? uchwyci?? Was takimi, jakimi jeste??cie. Moje rozmowy z Wami w dniu ??lubu czy sesji zdj??ciowych s?? tylko i wy????cznie towarzyskie.
        </Typography>

        <Image alt="fotografia, pasja tworzenia reporta??y ??lubnych" src={portfolio_0015} width={1140} height={761} style={{width: '100%', height: 'auto'}} />
        <Image alt="polecany fotograf ??lubny w Krakowie" src={fotograf_slubny_portfolio_2023_081} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Jestem fanem autentycznych emocji. Staram si?? nie prosi?? o u??miech i cierpliwie czekam, a?? przyjdzie on sam. W mojej pracy fotografa ??lubnego kieruj?? si?? planem, do??wiadczeniem, ograniczaj??c
          przypadek do minimum. ??lub to najpi??kniejszy i najszcz????liwszy dzie?? w Waszym ??yciu, a moim zadaniem jest zatrzyma?? w kadrze co?? niesamowitego czyli Wasz?? mi??o????. Dlatego w??a??nie reporta??
          ??lubny sta?? si?? moj?? pasj?? i drog?? przez ??ycie. Autentyczne emocje to znajdziecie ogl??daj??c moje reporta??e ??lubne. Staram si??, aby??cie po latach, wertuj??c zdj??cia w albumie ??lubnym mogli
          odnale???? Wasze emocje i wr??ci?? do niesamowitych chwil dnia Waszego ??lubu.
        </Typography>

        <Image alt="uczucia zatrzymane w kadrze" src={fotograf_slubny_portfolio_2023_137} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Image alt="do??wiadczony fotograf na wesele z Krakowa" src={martyna_slub_tesla} width={1140} height={525} style={{width: '100%', height: 'auto'}}/>
        
        <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
          POZOWANE ZDJ??CIA GRUPOWE
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Reporta?? ??lubny okre??lony definicj?? jest przerywany w dw??ch, a czasem nawet trzech momentach w kt??rych wykonujemy pami??tkowe pozowane zdj??cia grupowe. Pierwszy moment to po b??ogos??awie??stwie,
          wsp??lne zdj??cie z rodzicami, drugi to zdj??cie grupowe zaraz po wyj??ciu z Ko??cio??a i trzeci to zdj??cia grupowe z go????mi na sali weselnej. Warto przewidzie?? czas na te pami??tkowe uj??cia,
          szczeg??lnie je??eli ceremonia rozpoczyna si?? troch?? p????niej a na sali weselnej dla Waszych go??ci przygotowali??cie moc atrakcji.
        </Typography>

        <Image alt="fotografia ??lubna dla wymagaj??cych" src={fotograf_slubny_portfolio_2023_502} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        
        <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
          ZAUFANIE DO FOTOGRAFA
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Naszym wsp??lnym celem jest zgromadzenie maksymalnie dobrego materia??u dokumentuj??cego Wasz ??lub. Bardzo wa??ne jest by zaufa?? fotografowi, zda?? si?? na jego do??wiadczenie, pozwoli?? mu na
          swobodn?? prac??, a najlepiej to zupe??nie zapomnie?? o jego obecno??ci. Kadry, na kt??rych Wasz wzrok nie b??dzie skierowany w stron?? obiektywu aparatu fotograficznego b??d?? zdecydowanie lepsze. Musicie zaufa?? fotografowi i uwierzy??,
          ??e trzyma on r??k?? na pulsie i tworzy dla Was niezapomnian?? pami??tk??. Takie podej??cie to gwarancja autentycznej opowie??ci ??lubnej.
        </Typography>

        <Image alt="fotograf nie za miliony monet" src={fotograf_slubny_portfolio_2023_696} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Image alt="Zdj??cia pe??ne kolor??w i autentycznych emocji" src={patrycja_slub} width={1140} height={761} style={{width: '100%', height: 'auto'}} />
        
        

        <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
          PRZYGOTOWUJEMY HARMONOGRAM DNIA
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Wreszcie zbli??a si?? ten wyczekiwany przez kilka tygodni, miesi??cy, a mo??e i lat Wasz wymarzony dzie?? ??lubu. Ale tak na prawd?? z ty??u g??owy s?? my??li jak to b??dzie tak
          naprawd?? wygl??da??o. Na kt??r?? godzin?? um??wi?? fryzjerk??, na kt??r?? makija??ystk??, o kt??rej godzinie zrobi?? b??ogos??awie??stwo. Tego typu my??li przechodz?? przez g??ow?? wszystkich Par M??odych, kt??re
          bior?? ??lub. Je??eli do Waszego ??lubu zosta??o jeszcze kilka dni warto usi?????? razem i po??wi??caj??c kilka minut okre??li?? sobie rozk??ad dnia na ??lubny poranek. Dzi??ki temu na pewno zyskacie
          wi??ksz?? pewno???? siebie, nie zgubicie si??, a trzymaj??c si?? tego harmonogramu b??dziecie mieli spokojnieszy dzie??.
        </Typography>

        <Image alt="Harmonogram dnia ??lubu" src={dworzyszcze_wola_reportaz_slubny_pod_krakowem} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="sesja ??lubna Ogr??d Botaniczny Krak??w" src={kopiec_krakusa_sesja_slubna} width={1140} height={760} style={{width: '100%', height: 'auto'}}/>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Warto wzi?????? kartk??, d??ugopis i planowanie rozpocz???? od wpisania godziny o kt??rej rozpoczyna si?? ??lub w
          Ko??ciele. Od tego punktu zaczynamy planowanie ca??ego dnia. Na pocz??tek we??my pod uwag??, ??e przed Ko??cio??em dobrze by?? dwadzie??cia minut wcze??niej z tego wzgl??du, ??e bardzo cz??sto dokumenty
          podpisuje si?? tu?? przed rozpocz??ciem Mszy ??wi??tej. Pi??tnasta czterdzie??ci, jeste??my na miejscu, idziemy do ksi??dza, dokumenty podpisuj?? ??wiadkowie, podpisujecie Wy, wracacie i witaj??c przybywaj??cych go??ci czekacie na
          rozpocz??cie si?? ceremonii ??lubnej tu?? przed wej??ciem do Ko??cio??a.
        </Typography>

        <Image alt="podpisanie dokument??w przez ??wiadk??w wesela" src={portfolio_0022}width={1140} height={761} style={{width: '100%', height: 'auto'}}/>
        <Image alt="idealne miejsca na organizacje przyj??cia ??lubnego w Krakowie" src={fotograf_slubny_portfolio_2023_325} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Przed wyj??ciem do Ko??cio??a czekaj?? Was ??lubne przygotowania. Dobrze gdy okre??licie ile czasu jedzie si?? z domu Panny M??odej do Ko??cio??a. Przed wyjazdem planujemy b??ogos??awie??stwo, kt??re
          zwykle trwa oko??o pi??tnastu minut. Wszystko zapisujemy na naszej kartce. Do harmonogramu warto te?? wpisa?? godzin?? przyjazdu Pana M??odego. Niech to b??dzie godzina pi??tnasta, czyli tak
          naprawd?? dziesi???? minut przed rozpocz??ciem si?? b??ogos??awie??stwa. Pami??tajmy, ??e zanim dojdzie do przyjazdu Pana M??odego warto, aby Panna M??oda by??a ju?? ubrana, przygotowana i oczekiwa??a na
          Pana M??odego. Je??eli chodzi o ubieranie to tak naprawd?? wszystko zale??y od tego jaki rodzaj sukni wybrali??cie. Na ubieranie sukni najlepiej przyj???? oko??o trzydzestu minut. My??le, ??e bez
          wzgl??du na to jak?? suknie ma Panna M??oda oraz jak?? ilo???? bi??uterii do za??o??enia czas ten jest optymalny. Dobrze te?? przeznaczy?? dodatkowe dziesi??c minut na portret Panny M??odej.
        </Typography>

        <Image alt="przyjazd Pana M??odego do domu Panny M??odej" src={mustang_na_slub} width={1140} height={761} style={{width: '100%', height: 'auto'}} />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Bardzo wa??nymi, a wr??cz kluczowymi elementami przygotowa?? ka??dej Panny m??odej jest przepi??kna fryzura i wspania??y makija??. Je??eli jest tak, ??e makija??ystka przyje??d??a do Was do domu,
          zadbajcie o to, by Wasz makija?? by?? ostatni w kolejce, czyli tu?? przed ubraniem sukni ??lubnej. Czas profesjonalnego makija??u to zwykle jedna godzina, czasem mo??e zaj???? troch?? wi??cej czasu.
          Zarezerwujcie r??wnie?? czas dla fryzjerki.
        </Typography>

        <Image alt="B??ogos??awie??stwo rodzic??w i zdj??cia grupowe" src={wesele_na_polu_golfowym_w_paczoltowicach_portfolio} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="Ogromne mo??liwo??ci w fotografii ??lubnej" src={portfolio_0001} width={1140} height={760} style={{width: '100%', height: 'auto'}} />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Przygotowania Pana M??odego i cz??sto pierwsze b??ogos??awie??stwo w jego rodzinnym domu, r??wnie?? powinno sta?? si?? punktem harmonogramu. Przy planowaniu tego elementu dobrze jest zarezerwowa??
          oko??o dwudziestu minut, umieszczaj??c przygotowania Pana M??odego po przygotowaniach Panny M??odej przed wsp??lnym b??ogos??awie??stwem lub je??eli odleg??o???? pomiedzy domami m??odych jest znaczna to
          przed makija??em ??lubnym.
        </Typography>

        <Image alt="Dobry plan na dzie?? Waszego ??lubu" src={plener_w_dniu_slubu} width={1140} height={912} style={{width: '100%', height: 'auto'}} />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Tak w??a??nie wygl??da dzie?? ??lubu widziany oczami przysz??ej Pary M??odej, tak mo??e r??wnie?? wygl??da?? dzie?? Waszego ??lubu.
        </Typography>

        <Image alt="??lub i zero stresu" src={aleksandra_mszana_dolna} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="reporta?? ??lubny Krak??w" src={fotograf_slubny_portfolio_2023_189} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Pami??tajcie, ??e jest bardzo wa??ne, ??eby taki harmonogram w dniu ??lubu powsta?? i gdzie?? w domu le??a??, ??eby wszyscy mieli do niego dost??p i aby si?? do tego harmonogramu stosowa??. Pomo??e Wam to trzyma??
          si?? ram czasowych, unikniecie dzi??ki temu nadmiernej ilo??ci stresu i po prostu b??dziecie bardziej spokojni.
        </Typography>

        <Image alt="Dekoracja sali weselnej w stylu rustykalnym" src={dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="" src={fotograf_slubny_krakow_3} width={1140} height={760} style={{width: '100%', height: 'auto'}} priority />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Serdecznie zapraszam do odwiedzenia{" "}
          <Link href="/blog">
            mojego bloga
          </Link>{" "}
          i obejrzenia pe??nych reporta??y ??lubnych, sesji zdj??ciowych, zdj???? pe??nych kolor??w i autentycznych emocji. Ogl??daj??c moje prace sami ocenicie czy moja definicja stylu w fotografii ??lubnej
          b??dzie odpowiada?? Waszym preferencjom. Wsp??lnie znajd??my chwil??, ??wiat??o, kadr, zachowajmy je na zawsze.
        </Typography>
        <Image alt="styl w fotografii ??lubnej" src={beata_marcin_mszana_dolna_portfolio} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
        
      </Container>
    </LayoutSitePage>
  );
};

export default PageComponent;
