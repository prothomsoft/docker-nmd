import LayoutSitePage from "../components/layoutSitePage";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const sesja_narzeczenska_1 = process.env.staticS3ImagesPath + "portfolio/sesja_narzeczenska_1.webp";
const fotograf_slubny_krakow_19 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_krakow_19.webp";
const sesja_narzeczenska_2 = process.env.staticS3ImagesPath + "portfolio/sesja_narzeczenska_2.webp";
const sesja_narzeczenska_krakow_1 = process.env.staticS3ImagesPath + "portfolio/sesja_narzeczenska_krakow_1.webp";
const sesja_narzeczenska_krakow_3 = process.env.staticS3ImagesPath + "portfolio/sesja_narzeczenska_krakow_3.webp";
const sesja_narzeczenska_kopiec_krakusa = process.env.staticS3ImagesPath + "portfolio/sesja_narzeczenska_kopiec_krakusa.webp";
const sesja_narzeczenska_kopiec_krakusa_krakow = process.env.staticS3ImagesPath + "portfolio/sesja_narzeczenska_kopiec_krakusa_krakow.webp";
const sesja_narzeczenska_stara_zajezdnia_krakow = process.env.staticS3ImagesPath + "portfolio/sesja_narzeczenska_stara_zajezdnia_krakow.webp";
const sesja_narzeczenska_stare_podgorze_krakow = process.env.staticS3ImagesPath + "portfolio/sesja_narzeczenska_stare_podgorze_krakow.webp";
const ryan_sesja_narzeczenska_2023 = process.env.staticS3ImagesPath + "portfolio/ryan_sesja_narzeczenska_2023.webp";

const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "brzoskwinia_ogrod_sesja_narzeczenska_start.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <LayoutSitePage
      title="Sesja narzeczeńska Kraków"
      description="Sesja narzeczeńska Kraków. Miejsca na sesję narzeczeńską. Zdjęcia spontaniczne, zero pozowania. Najlepsze miejscówki na sesję narzeczeńską w Krakowie."
      keywords="sesja narzeczeńska kraków, miejscówki na sesję narzeczeńską w Krakowie"
      url="https://99foto.pl/sesja-narzeczenska-krakow/"
      leadNames="WIKTORIA i KONRAD"
      leadTitle="BRZOSKWINIA OGRÓD, SESJA NARZECZEŃSKA"
      leadUrl="/brzoskwinia-ogrod-wesele-w-plenerze-sesja-narzeczenska"
      leadImage={pageImage}>
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            SESJA NARZECZEŃSKA KRAKÓW
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Witajcie, skoro tutaj jesteście domyślam się, że przygotowujecie się do swojej sesji narzeczeńskiej. Czytając dalej dowiecie się jak przygotować się do sesji narzeczeńskiej i co zrobić by
          sesja narzeczeńska wyszła naprawdę wyjątkowo. Jako fotograf ślubny z dziewięcioletnim doświadczeniem wiem, że samo dobre nastawienie nie wystarcza, żeby zdjęcia wyszły naprawdę wyjątkowo.
          Tak jak ze wszystkim, trzeba włożyć w sesję sporo pracy i serca, żeby jej efekty w pełni nas zadowalały. Kochani jedno jest pewne. Okres narzeczeński to wspaniały czas, który warto mieć na
          swoich fotografiach. Istnieje kilka czynników, które mają wpływ na naszą sesję narzeczeńską i które mogą znacznie ją udoskonalić. Pamiętajmy by odpowiednio je do siebie dostosować, tak by
          sesja odzwierciedlała Wasze wnętrza i w pełni Wam pasowała. Kilka z nich znajdziecie poniżej.
        </Typography>

        <Image quality={100} alt="jak przygotować się do sesji narzeczeńskiej" src={sesja_narzeczenska_krakow_1} width={1140} height={760} style={{width: '100%', height: 'auto'}} priority/>

        <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          WYBÓR MIEJSCA NA SESJĘ NARZECZEŃSKĄ
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 4 }}>
          W wyborze miejsca na sesje pamiętajmy, by miejsce to pasowało do Was i współgrało z Waszym trybem życia. Miejsce jest tłem dla zdarzeń i często pomaga opowiedzieć historię Waszej znajomości.
          Jeżeli posiadacie jakieś wspólne pasje, pokażmy je, wtedy zdjęcia nabiorą naprawdę szczególnej mocy i będą mega naturalne. Gdy podobają Wam się zdjęcia na łonie natury i zawsze o takich
          marzyliście, zrealizujemy sesję narzeczeńską w lesie, górach lub nad jeziorem. Czasami pary wybierają też plenery miejskie, ponieważ tak wygląda ich codzienne życie i to lubią. Sesję
          narzeczeńską możemy potraktować również jako przygodę. Jeżeli marzycie o jakimś miejscu, nigdy tam nie byliście, a chcielibyście to miejsce zobaczyć, zróbmy tam zdjęcia, a przy okazji
          pozwiedzajmy i pooglądajmy okolice. Stworzy to ciekawą historie, którą możecie opowiadać latami. Jeśli natomiast nie jesteście pewni, gdzie chcecie robić zdjęcia, nie martwcie się, chętnie
          przedstawię Wam kilka moich sugestii i na ich podstawie coś wspólnie ustalimy.
        </Typography>

        <Image quality={100} alt="sesja narzeczeńska Stara Zajezdnia Kraków" src={sesja_narzeczenska_stara_zajezdnia_krakow} width={1140} height={852} style={{width: '100%', height: 'auto'}} />
        
        <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
          ODPOWIEDNI STRÓJ
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Wybraliśmy już miejsce, wspaniale. Teraz nadszedł czas na wybór stroju. Pamiętajcie dopasujcie swój strój do charakteru sesji, do tego gdzie ją robimy i jak chcecie wyglądać. W swoich
          strojach unikajcie krzykliwych kolorów, jakiś geometrycznych wzorów oraz napisów. Nic nie powinno odciągać uwagi od Was i od Waszej miłości. Na sesjach narzeczeńskich preferuję pastelowe,
          stonowane kolory. One zawsze pasują do każdego charakteru sesji. U niej zawsze dobrze wygląda sukienka. U niego sprawdzi się biała koszula, to zawsze wygląda dobrze. Profesjonalne fryzury i
          makijaż nie są koniecznością, ale mogą zwiększyć Waszą pewność siebie i ułatwić przygotowanie się w dniu sesji zdjęciowej.
        </Typography>

        <Image quality={100} alt="sesja narzeczeńska w Krakowie" src={sesja_narzeczenska_2} width={1140} height={760} style={{width: '100%', height: 'auto'}} />

        <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
          UMÓW SIĘ NA MAKIJAŻ
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Sesja narzeczeńska to doskonały czas by wykonać swój próbny makijaż ślubny. Umówcie się więc ze swoją makijażystką, powiedzcie, że wybieracie się na taką sesję, i poproście ją by stworzyła
          cudowny makijaż fotograficzny. Jak wiadomo makijaż fotograficzny różni się trochę od tego zwykłego. Na pewno pomoże wyeksponować to co chcemy pokazać i ukryje to czego pokazywać nie chcemy.
          Zachęcam i zdecydowanie warto się na taki makijaż przedślubny zdecydować.
        </Typography>

        <Image quality={100} alt="sesja narzeczeńska na Rynku w Krakowie" src={ryan_sesja_narzeczenska_2023} width={1140} height={912} style={{width: '100%', height: 'auto'}} />
        
        <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
          CO ZE SOBĄ ZABRAĆ?
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Sesja narzeczeńska to zazwyczaj mini spacer. Więc moim parom doradzam, by wzięli ze sobą wygodne buty. Bardzo lubię, kiedy widzę żywe, świeże kwiaty, dużo biżuterii, która pobłyskuje w
          świetle, najważniejszy jest jednak dobry humor. Jeśli zamierzasz zabrać ze sobą zwierzęta lub dzieci to bardzo dobry pomysł i pamiątka. Najlepiej naszych sesyjnych gości sfotografować na
          początku sesji narzeczeńskiej, natomiast później dobrze gdy zaufany przyjaciel lub członek rodziny zabierze je do domu. Jeśli masz buty na zmianę, telefony, kluczyki do samochodu, postaraj
          się zmieścić wszystko w jednej torbie, żeby ułatwić transport. Zaufaj mi, będziesz zadowolony, że nie trzeba będzie nosić ze sobą więcej rzeczy niż naprawdę potrzeba.
        </Typography>

        <Image quality={100} alt="dlaczego warto zdecydować się na sesję narzeczeńską" src={sesja_narzeczenska_kopiec_krakusa_krakow} width={1140} height={762} style={{width: '100%', height: 'auto'}} />

        <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
          ZŁOTA GODZINA
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Światło na sesji odgrywa kluczową rolę w tym, by zdjęcia były klimatyczne. Dlatego na swoich sesjach zawsze mówię o złotej godzine i na taką godziną zawsze się umawiamy. Zazwyczaj sesje
          narzeczeńską robię albo o zachodzie, albo o wschodzie słońca. Światło wtedy przybiera złotą barwę i zdjęcia są naprawdę mega klimatyczne. Czas sesji zależy też od pory roku, więc w innych
          godzinach spotkamy się na wakacjach, a trochę wcześniej późną jesienią.
        </Typography>

        <Image quality={100} alt="autentyczne emocje w fotografii ślubnej" src={sesja_narzeczenska_krakow_3} width={1140} height={760} style={{width: '100%', height: 'auto'}} />

        <Typography variant="subtitle1" className={matches ? "quote-title" : ""} align="center">
          CIESZCIE SIĘ CHWILĄ
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Nie warto się stresować swoją sesją narzeczeńską. Jest to zazwyczaj długi spacer pełen uścisków, całusów, uśmiechów i przytulania. To jest czas dla Was. Poświęćcie go sobie. Wypełnijcie go
          relaksem i czujcie się swobodnie. Podczas spaceru poproszę Was, żebyście ze sobą rozmawiali i nie patrzyli na mnie. Chcę podejrzeć i sfotografować sposób, w jaki się wzajemnie rozśmieszacie,
          wasze reakcje na to, co mówi druga osoba, uśmiechy i gesty.
        </Typography>

        <Image quality={100} alt="sesja narzeczeńska Stare Podgórze Kraków" src={sesja_narzeczenska_stare_podgorze_krakow} width={1140} height={762} style={{width: '100%', height: 'auto'}} />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Obiecuję zrobić wszystko, co w mojej mocy, abyście czuli się swobodnie i komfortowo podczas sesji narzeczeńskiej. Pamiętajcie, że
          robimy zdjęcia dokumentując Waszą miłość. Jeśli skoncentrujecie się na tym i skupicie się na sobie i przyszłych planach ślubnych, wszystko będzie dobrze.
        </Typography>

        <Image quality={100} alt="sesja narzeczeńska w Krakowie" src={fotograf_slubny_krakow_19} width={1140} height={852}  style={{width: '100%', height: 'auto'}}/>

        <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          POGODA W DNIU SESJI NARZECZEŃSKIEJ
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Na sesję narzeczeńską umawiamy się zwykle z kilkudniowym wyprzedzeniem. Wiadomo, że pogody do końca przewidzieć się nie da. Dlatego też dzień przed sesją sprawdzamy pogodę w internecie
          podejmując decyzję, czy sesję byędzie można zrealizować. Jeżeli na horyzoncie pojawi się deszcz lub będzie zimno to umawiamy się na inny dzień i sprawdzanie pogody zaczynamy od początku.
        </Typography>

        <Image quality={100} alt="sesja narzeczeńska w Krakowie" src={sesja_narzeczenska_kopiec_krakusa} width={1140} height={760} style={{width: '100%', height: 'auto'}} />

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
          Napisałem już o wszystkich najważniejszych czynnikach, które wpływają na efekt naszej sesji. Przygotujcie się do niej, rozkmińcie ją w szczegółach, tak by sesja narzeczeńska ukazała Waszą
          miłość jak również Was samych jak najlepiej oraz była wspaniałą pamiątką na całe przyszłe życie. Zróbmy to tak, by Wszyscy byli naprawdę zadowoleni. Pozdrawiam i zapraszam.
        </Typography>

        <Image quality={100} alt="miłość zatrzymana na zdjęciach" src={sesja_narzeczenska_1} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        
      </Container>
    </LayoutSitePage>
  );
};

export default PageComponent;
