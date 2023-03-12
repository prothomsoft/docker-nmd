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
      title="Reportaż ślubny Kraków"
      description="Reportaż ślubny Kraków, chwila, światło i kadr. Reportaż ślubny pełny kolorów i autentycznych emocji. Twoje fotografie z reporterskim charakterem i bez pozowania."
      keywords="reportaż ślubny kraków, zdjęcia ślubne"
      url="https://99foto.pl/reportaz-slubny-krakow/"
      leadNames="ANNA i PIOTR"
      leadTitle="BAZYLIKA BOŻEGO CIAŁA KRAKÓW, FOTOREPORTAŻ ŚLUBNY"
      leadUrl="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"
      leadImage={pageImage}>
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            REPORTAŻ ŚLUBNY KRAKÓW
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Pierwsze pytanie, które pojawia się w głowie każdego to określenie różnicy pomiędzy zdjęciami ze ślubu i wesela, które wykonują na przykład goście weselni, a reportażem ślubnym przygotowanym
          przez profesjonalnego fotografa. Na pewno nie raz widzieliście zdjęcia, które są w większości ujęciami pozowanymi i brak im reporterskiego charakteru. Oglądając reportaż ślubny, stajemy się
          obserwatorem wydarzeń, możemy przyjrzeć się szczegółom i jesteśmy w stanie doświadczyć prawdziwych emocji. Praca fotografa ślubnego polega więc na obserwacji i selektywnym gromadzeniu
          niepowtarzalnych, ważnych momentów, które finalnie utworzą historię tego jednego z najważniejszych dni w życiu Pary Młodej.
        </Typography>

       

        
        
        
        
        
 
        <Image alt="miłość zatrzymana na zdjęciach" src={portfolio_2021_2} width={1140} height={760} style={{width: '100%', height: 'auto'}} priority/>
        <Image alt="autentyczne emocje na zdjęciach ślubnych" src={fotograf_slubny_portfolio_2023_013} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Niezwykle ważne jest zachowanie dyskrecji i fotografowanie zdarzeń bez ich jakiegokolwiek reżyserowania. Pomimo, że takie podejście do tworzenia reportażu ślubnego jest z całą pewnością
          bardziej wymagające to pozwala ono na utworzenie materiału fotograficznego, który pozwoli przeżywać te wyjątkowe chwile na nowo, za każdym razem gdy zaglądniemy do naszego ślubnego albumu.
        </Typography>

        <Image alt="Miejsca, wydarzenia, emocje w fotografii ślubnej" src={portfolio_0013} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="pozowane zdjęcia grupowe" src={mustang_na_wesele} width={1140} height={761} style={{width: '100%', height: 'auto'}} />

        

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Pamiętajmy, że nie każda bliska nam osoba jest gościem naszego ślubu, dlatego album ślubny powinien być niebanalny i pokazać piękno dnia, oraz przekazać emocje, dobrą zabawę, która temu dniu
          towarzyszyła. Reportaż ślubny zamknięty w albumie to wyjątkowa pamiątka z Waszego ślubu. Reportaż ślubny to sztuka wymagajaca doświadczenia i umiejętności wybierania rzeczy najważniejszych,
          wychwytywania emocji i przedstawiania ich w najlepszy możliwy sposób.
        </Typography>

        
        <Image alt="pozowane zdjęcia grupowe" src={natalia} width={1140} height={761} style={{width: '100%', height: 'auto'}} />
        <Image alt="dobry fotograf w Krakowie" src={fotograf_slubny_portfolio_2023_003} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        
        <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF JAKO REPORTER ŚLUBNY
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Doskonaląc warsztat fotografa ślubnego, spędzając długie godziny na selekcji zdjęć, jako reportażyści rysujemy w naszych głowach obraz elementów, na które należy położyć największy nacisk tworząc
          historię ślubną. Skupiamy się na fotografowaniu spontanicznych zdarzeń, przedstawiamy otoczenie w najlepszy możliwy sposób, eksponujemy detale i skrupulatnie rejestrujemy emocje. Egzekwowanie
          tych elementów jest możliwe, dzięki umiejętności przewidywania nadchodzących zdarzeń, budowania kadru oraz doskonałej znajmości najwyższej jakości sprzętu fotograficznego.
        </Typography>

        <Image alt="Własny styl w fotografii ślubnej" src={sala_weselna_nedan_pcim_reportaz_slubny_portfolio} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="najlepsze zdjęcia ślubne roku" src={fotograf_slubny_portfolio_2023_196} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Pamiętajmy jednak, że osoba zajmująca się fotografią ślubną to osoba, która poświęciła setki godzin na odkrywanie nowych technik, doskonalenie warsztatu, podpatrywanie mistrzów, próby i
          błędy, analizowanie sytuacji i wyciąganie wynikających z nich wniosków. Kilka lat bacznego obserwowania rynku fotografii ślubnej, pasja i upór w dążeniu do celu z pewnością pozwoliło mi
          stworzyć zdjęcia i wypracować styl warty Waszej uwagi. W trakcie reportażu lubię obserwować wydarzenia, sporadycznie wyrywam się z drobnymi sugestiami.
        </Typography>

        <Image alt="Autentyczne emocje w fotografii ślubnej" src={portret_panny_mlodej} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
        
        

        <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          MOJE PODEJŚCIE DO REPORTAŻU ŚLUBNEGO
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Kocham eksperymenty, czerpanie esencji z przemijających trendów, konsekwencję w dążeniu do celu, lubię mieć plan nie pozwalający wkraść się przypadkowi. Reportaż ślubny to dla mnie pasja i
          sposób na życie. Reportaż ślubny to zależność pomiędzy czasem ekspozycji, przysłoną i czułością ISO. Reportaż ślubny to jednocześnie
          zależnośc pomiędzy chwilą, światłem i kadrem. W obu przypadkach jest to zawsze kompromis poparty pomysłem i doskonałym warsztatem, który pozwala ten pomysł zrealizować. Fotografia ślubna to
          moim zdaniem przede wszystkim reportaż i temat człowieka w kadrze. Bez niego nie ma co mówić o uczuciach, radości, łzach wzruszenia, słowach, które układają się tworząc chwile, które chcemy
          zatrzymać na wieki. Światło to według mojej definicji kontekst. Nadaje ono miejscu charakter, tworzy tło dla wydarzeń i pozwala eksponować emocje.
        </Typography>

        <Image alt="Zdjęcia pełne kolorów i autentycznych emocji" src={portfolio_0021} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="fotograf na wesele Kraków" src={fotograf_slubny_portfolio_2023_114} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Kadr to wiedza, setki przeglądniętych zdjęć i budowane latami poczucie estetyki. Reportaż ślubny wykorzystuje te narzędzia tworząc opowieść o ludziach, miejscach, wydarzeniach i emocjach.
          Każde zdjęcie ślubne zaczyna się od pomysłu. To zwykle konfrontacja pomiędzy powstałym w naszej głowie ideałem i możliwościami jakie stwarza nam zastana sytuacja. Sprzęt fotograficzny jest
          na pewno ważny, ale nie przeceniajmy jego wartości. W dzisiejszych czasach, ludzie bardzo często posługują się doskonałymi aparatami i obiektywami. Mój reportaż ślubny wciąga osobę
          oglądającą w ciąg wydarzeń, tak by mogła ona poczuć to, co czują osoby będące na zdjęciach. Uważam, że jestem na Waszym ślubie by dokumentować ten ważny dzień, pokazywać, że jestem tam dla
          Was i będę opowiadał o Was. Staram się uchwycić Was takimi, jakimi jesteście. Moje rozmowy z Wami w dniu ślubu czy sesji zdjęciowych są tylko i wyłącznie towarzyskie.
        </Typography>

        <Image alt="fotografia, pasja tworzenia reportaży ślubnych" src={portfolio_0015} width={1140} height={761} style={{width: '100%', height: 'auto'}} />
        <Image alt="polecany fotograf ślubny w Krakowie" src={fotograf_slubny_portfolio_2023_081} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Jestem fanem autentycznych emocji. Staram się nie prosić o uśmiech i cierpliwie czekam, aż przyjdzie on sam. W mojej pracy fotografa ślubnego kieruję się planem, doświadczeniem, ograniczając
          przypadek do minimum. Ślub to najpiękniejszy i najszczęśliwszy dzień w Waszym życiu, a moim zadaniem jest zatrzymać w kadrze coś niesamowitego czyli Waszą miłość. Dlatego właśnie reportaż
          ślubny stał się moją pasją i drogą przez życie. Autentyczne emocje to znajdziecie oglądając moje reportaże ślubne. Staram się, abyście po latach, wertując zdjęcia w albumie ślubnym mogli
          odnaleźć Wasze emocje i wrócić do niesamowitych chwil dnia Waszego ślubu.
        </Typography>

        <Image alt="uczucia zatrzymane w kadrze" src={fotograf_slubny_portfolio_2023_137} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Image alt="doświadczony fotograf na wesele z Krakowa" src={martyna_slub_tesla} width={1140} height={525} style={{width: '100%', height: 'auto'}}/>
        
        <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
          POZOWANE ZDJĘCIA GRUPOWE
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Reportaż ślubny określony definicją jest przerywany w dwóch, a czasem nawet trzech momentach w których wykonujemy pamiątkowe pozowane zdjęcia grupowe. Pierwszy moment to po błogosławieństwie,
          wspólne zdjęcie z rodzicami, drugi to zdjęcie grupowe zaraz po wyjściu z Kościoła i trzeci to zdjęcia grupowe z gośćmi na sali weselnej. Warto przewidzieć czas na te pamiątkowe ujęcia,
          szczególnie jeżeli ceremonia rozpoczyna się trochę później a na sali weselnej dla Waszych gości przygotowaliście moc atrakcji.
        </Typography>

        <Image alt="fotografia ślubna dla wymagających" src={fotograf_slubny_portfolio_2023_502} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        
        <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
          ZAUFANIE DO FOTOGRAFA
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Naszym wspólnym celem jest zgromadzenie maksymalnie dobrego materiału dokumentującego Wasz ślub. Bardzo ważne jest by zaufać fotografowi, zdać się na jego doświadczenie, pozwolić mu na
          swobodną pracę, a najlepiej to zupełnie zapomnieć o jego obecności. Kadry, na których Wasz wzrok nie będzie skierowany w stronę obiektywu aparatu fotograficznego będą zdecydowanie lepsze. Musicie zaufać fotografowi i uwierzyć,
          że trzyma on rękę na pulsie i tworzy dla Was niezapomnianą pamiątkę. Takie podejście to gwarancja autentycznej opowieści ślubnej.
        </Typography>

        <Image alt="fotograf nie za miliony monet" src={fotograf_slubny_portfolio_2023_696} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        <Image alt="Zdjęcia pełne kolorów i autentycznych emocji" src={patrycja_slub} width={1140} height={761} style={{width: '100%', height: 'auto'}} />
        
        

        <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
          PRZYGOTOWUJEMY HARMONOGRAM DNIA
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Wreszcie zbliża się ten wyczekiwany przez kilka tygodni, miesięcy, a może i lat Wasz wymarzony dzień ślubu. Ale tak na prawdę z tyłu głowy są myśli jak to będzie tak
          naprawdę wyglądało. Na którą godzinę umówić fryzjerkę, na którą makijażystkę, o której godzinie zrobić błogosławieństwo. Tego typu myśli przechodzą przez głowę wszystkich Par Młodych, które
          biorą ślub. Jeżeli do Waszego ślubu zostało jeszcze kilka dni warto usiąść razem i poświęcając kilka minut określić sobie rozkład dnia na ślubny poranek. Dzięki temu na pewno zyskacie
          większą pewność siebie, nie zgubicie się, a trzymając się tego harmonogramu będziecie mieli spokojnieszy dzień.
        </Typography>

        <Image alt="Harmonogram dnia ślubu" src={dworzyszcze_wola_reportaz_slubny_pod_krakowem} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="sesja ślubna Ogród Botaniczny Kraków" src={kopiec_krakusa_sesja_slubna} width={1140} height={760} style={{width: '100%', height: 'auto'}}/>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Warto wziąść kartkę, długopis i planowanie rozpocząć od wpisania godziny o której rozpoczyna się ślub w
          Kościele. Od tego punktu zaczynamy planowanie całego dnia. Na początek weźmy pod uwagę, że przed Kościołem dobrze być dwadzieścia minut wcześniej z tego względu, że bardzo często dokumenty
          podpisuje się tuż przed rozpoczęciem Mszy Świętej. Piętnasta czterdzieści, jesteśmy na miejscu, idziemy do księdza, dokumenty podpisują świadkowie, podpisujecie Wy, wracacie i witając przybywających gości czekacie na
          rozpoczęcie się ceremonii ślubnej tuż przed wejściem do Kościoła.
        </Typography>

        <Image alt="podpisanie dokumentów przez świadków wesela" src={portfolio_0022}width={1140} height={761} style={{width: '100%', height: 'auto'}}/>
        <Image alt="idealne miejsca na organizacje przyjęcia ślubnego w Krakowie" src={fotograf_slubny_portfolio_2023_325} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Przed wyjściem do Kościoła czekają Was ślubne przygotowania. Dobrze gdy określicie ile czasu jedzie się z domu Panny Młodej do Kościoła. Przed wyjazdem planujemy błogosławieństwo, które
          zwykle trwa około piętnastu minut. Wszystko zapisujemy na naszej kartce. Do harmonogramu warto też wpisać godzinę przyjazdu Pana Młodego. Niech to będzie godzina piętnasta, czyli tak
          naprawdę dziesięć minut przed rozpoczęciem się błogosławieństwa. Pamiętajmy, że zanim dojdzie do przyjazdu Pana Młodego warto, aby Panna Młoda była już ubrana, przygotowana i oczekiwała na
          Pana Młodego. Jeżeli chodzi o ubieranie to tak naprawdę wszystko zależy od tego jaki rodzaj sukni wybraliście. Na ubieranie sukni najlepiej przyjąć około trzydzestu minut. Myśle, że bez
          względu na to jaką suknie ma Panna Młoda oraz jaką ilość biżuterii do założenia czas ten jest optymalny. Dobrze też przeznaczyć dodatkowe dziesięc minut na portret Panny Młodej.
        </Typography>

        <Image alt="przyjazd Pana Młodego do domu Panny Młodej" src={mustang_na_slub} width={1140} height={761} style={{width: '100%', height: 'auto'}} />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Bardzo ważnymi, a wręcz kluczowymi elementami przygotowań każdej Panny młodej jest przepiękna fryzura i wspaniały makijaż. Jeżeli jest tak, że makijażystka przyjeżdża do Was do domu,
          zadbajcie o to, by Wasz makijaż był ostatni w kolejce, czyli tuż przed ubraniem sukni ślubnej. Czas profesjonalnego makijażu to zwykle jedna godzina, czasem może zająć trochę więcej czasu.
          Zarezerwujcie również czas dla fryzjerki.
        </Typography>

        <Image alt="Błogosławieństwo rodziców i zdjęcia grupowe" src={wesele_na_polu_golfowym_w_paczoltowicach_portfolio} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="Ogromne możliwości w fotografii ślubnej" src={portfolio_0001} width={1140} height={760} style={{width: '100%', height: 'auto'}} />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Przygotowania Pana Młodego i często pierwsze błogosławieństwo w jego rodzinnym domu, również powinno stać się punktem harmonogramu. Przy planowaniu tego elementu dobrze jest zarezerwować
          około dwudziestu minut, umieszczając przygotowania Pana Młodego po przygotowaniach Panny Młodej przed wspólnym błogosławieństwem lub jeżeli odległość pomiedzy domami młodych jest znaczna to
          przed makijażem ślubnym.
        </Typography>

        <Image alt="Dobry plan na dzień Waszego ślubu" src={plener_w_dniu_slubu} width={1140} height={912} style={{width: '100%', height: 'auto'}} />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Tak właśnie wygląda dzień ślubu widziany oczami przyszłej Pary Młodej, tak może również wyglądać dzień Waszego ślubu.
        </Typography>

        <Image alt="ślub i zero stresu" src={aleksandra_mszana_dolna} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="reportaż ślubny Kraków" src={fotograf_slubny_portfolio_2023_189} width={1140} height={760} style={{width: '100%', height: 'auto'}}  />
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Pamiętajcie, że jest bardzo ważne, żeby taki harmonogram w dniu ślubu powstał i gdzieś w domu leżał, żeby wszyscy mieli do niego dostęp i aby się do tego harmonogramu stosować. Pomoże Wam to trzymać
          się ram czasowych, unikniecie dzięki temu nadmiernej ilości stresu i po prostu będziecie bardziej spokojni.
        </Typography>

        <Image alt="Dekoracja sali weselnej w stylu rustykalnym" src={dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        <Image alt="" src={fotograf_slubny_krakow_3} width={1140} height={760} style={{width: '100%', height: 'auto'}} priority />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Serdecznie zapraszam do odwiedzenia{" "}
          <Link href="/blog">
            mojego bloga
          </Link>{" "}
          i obejrzenia pełnych reportaży ślubnych, sesji zdjęciowych, zdjęć pełnych kolorów i autentycznych emocji. Oglądając moje prace sami ocenicie czy moja definicja stylu w fotografii ślubnej
          będzie odpowiadać Waszym preferencjom. Wspólnie znajdźmy chwilę, światło, kadr, zachowajmy je na zawsze.
        </Typography>
        <Image alt="styl w fotografii ślubnej" src={beata_marcin_mszana_dolna_portfolio} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
        
      </Container>
    </LayoutSitePage>
  );
};

export default PageComponent;
