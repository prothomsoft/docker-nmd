import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import FaqAccordion from "../components/faqAccordion";
import LayoutSitePage from "../components/layoutSitePage";






const fotograf_slubny_portfolio_2023_603 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_603.webp";
const fotograf_slubny_portfolio_2023_604 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_604.webp";
const fotograf_slubny_portfolio_2023_605 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_605.webp";
const fotograf_slubny_portfolio_2023_606 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_606.webp";
const fotograf_slubny_portfolio_2023_607 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_607.webp";
const fotograf_slubny_portfolio_2023_608 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_608.webp";
const fotograf_slubny_portfolio_2023_609 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_609.webp";
const fotograf_slubny_portfolio_2023_610 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_610.webp";
const fotograf_slubny_portfolio_2023_611 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_611.webp";
const fotograf_slubny_portfolio_2023_613 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_613.webp";
const fotograf_slubny_portfolio_2023_614 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_614.webp";
const fotograf_slubny_portfolio_2023_615 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_615.webp";
const fotograf_slubny_portfolio_2023_616 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_616.webp";
const fotograf_slubny_portfolio_2023_617 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_617.webp";
const fotograf_slubny_portfolio_2023_618 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_618.webp";
const fotograf_slubny_portfolio_2023_619 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_619.webp";
const fotograf_slubny_portfolio_2023_620 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_620.webp";
const fotograf_slubny_portfolio_2023_621 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_621.webp";
const fotograf_slubny_portfolio_2023_622 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_622.webp";
const fotograf_slubny_portfolio_2023_623 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_623.webp";
const fotograf_slubny_portfolio_2023_624 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_624.webp";
const fotograf_slubny_portfolio_2023_625 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_625.webp";
const fotograf_slubny_portfolio_2023_626 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_626.webp";
const fotograf_slubny_portfolio_2023_627 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_627.webp";
const fotograf_slubny_portfolio_2023_628 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_628.webp";
const fotograf_slubny_portfolio_2023_629 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_629.webp";
const fotograf_slubny_portfolio_2023_630 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_630.webp";
const fotograf_slubny_portfolio_2023_631 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_631.webp";
const fotograf_slubny_portfolio_2023_632 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_632.webp";
const fotograf_slubny_portfolio_2023_634 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_634.webp";




const PageComponent = () => {
  const pageImage = process.env.staticS3ImagesPath + "dworek_fantazja_skomielna_biala_fotograf.webp";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const imagesCarousel1 = [
    {
        image: fotograf_slubny_portfolio_2023_611
    },
    {
        image: fotograf_slubny_portfolio_2023_604
    },
    {
        image: fotograf_slubny_portfolio_2023_605
    },
    {
        image: fotograf_slubny_portfolio_2023_606
    },
    {
        image: fotograf_slubny_portfolio_2023_607
    },
    {
        image: fotograf_slubny_portfolio_2023_608
    },
    {
        image: fotograf_slubny_portfolio_2023_609
    },
    {
        image: fotograf_slubny_portfolio_2023_610
    },
    {
        image: fotograf_slubny_portfolio_2023_603
    },
    {
        image: fotograf_slubny_portfolio_2023_634
    }
  ]

  const imagesCarousel2 = [
    {
      image: fotograf_slubny_portfolio_2023_613
    },
    {
      image: fotograf_slubny_portfolio_2023_614
    },
    {
      image: fotograf_slubny_portfolio_2023_615
    },
    {
      image: fotograf_slubny_portfolio_2023_616
    },
    {
      image: fotograf_slubny_portfolio_2023_617
    },
    {
      image: fotograf_slubny_portfolio_2023_618
    },
    {
      image: fotograf_slubny_portfolio_2023_619
    },
    {
      image: fotograf_slubny_portfolio_2023_620
    },
    {
      image: fotograf_slubny_portfolio_2023_621
    },
    {
      image: fotograf_slubny_portfolio_2023_622
    }
  ]

  const imagesCarousel3 = [
    {
      image: fotograf_slubny_portfolio_2023_631
    },
    {
      image: fotograf_slubny_portfolio_2023_624
    },
    {
      image: fotograf_slubny_portfolio_2023_625
    },
    {
      image: fotograf_slubny_portfolio_2023_626
    },
    {
      image: fotograf_slubny_portfolio_2023_627
    },
    {
      image: fotograf_slubny_portfolio_2023_628
    },
    {
      image: fotograf_slubny_portfolio_2023_629
    },
    {
      image: fotograf_slubny_portfolio_2023_630
    },
    {
      image: fotograf_slubny_portfolio_2023_623
    },
    {
      image: fotograf_slubny_portfolio_2023_632
    }
  ]


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Jak wygl??da obr??bka i kolorystyka zdj?????",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ceni?? sobie kolor i naturalno???? ??? podkre??lam to przy samym fotografowaniu, jak i p????niej, przy edycji. Dlatego te?? barwy zdj????, kt??re wykonuj?? i kt??re p????niej edytuj??, nie odbiegaj?? od rzeczywisto??ci. Co z fotografiami czarno-bia??ymi? Oddaj?? je tylko wtedy, je??li naturalne kolory odci??gaj?? uwag?? od g????wnego motywu zdj??cia i chc??, aby na pierwszy plan wysuwa??a si?? ciekawa faktura, emocje czy ??wiat??ocie??."
        }
    },{
        "@type": "Question",
        "name": "Jaki jest czas pracy fotografa ??lubnego?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fotografowie w swoich ofertach posiadaj?? cz??sto pakiety godzinowe, najcz????ciej od 10 do 12 godzin pracy. Zazwyczaj fotograf pracuje do oczepin lub paru minut po p????nocy, ale coraz popularniejsze s?? reporta??e ko??cz??ce si?? oko??o 22.00. Tak naprawd?? wszystko zale??y od indywidualnych ustale??.  W mojej ofercie s?? pakiety dla par organizuj??cych intymne ceremonie ??lubne, oraz dla tych kt??re chcia??yby mie?? ca??odzienny fotoreporta??."
        }
    },{
      "@type": "Question",
      "name": "Czy nasze fotografie zabezpieczane s?? przed ich utrat???",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Utrata zdj???? jest tragedi?? dla par m??odych. Mo??ecie tego unikn????, korzystaj??c z us??ug profesjonalnego fotografa ??lubnego, a nie fotoamatora, kt??ry o poni??szym sposobie pracy i zabezpieczenia nawet nie s??ysza??. Fotografuj??c, zapisuj?? zdj??cia jednocze??nie na dw??ch kartach pami??ci, dodatkowo pracuj?? na dw??ch aparatach jednocze??nie, wi??c Wasze zdj??cia s?? automatycznie rejestrowane na czterech niezale??nych kartach pami??ci. Po powrocie do domu fotografie kopiuj?? na dwa dyski zewn??trzne. Dzie?? po ??lubie Wasze zdj??cia maj?? ju?? nie 4 kopie, a 6 kopii w niezale??nych od siebie miejscach. Dzi??ki takim rozwi??zaniom wiem, ??e reporta??e moich par s?? bezpieczne."
      }
    },{
      "@type": "Question",
      "name": "Czy robisz sesje narzecze??skie?",
      "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, uwielbiam tego rodzaju sesje. Jak si?? odbywaj??? Po prostu idziemy na przyjemny spacer, na kt??rym wszyscy s?? zrelaksowani i pozytywnie nastawieni. Mo??emy wybra?? si?? na wsp??ln?? eksploracj?? miasta, mo??emy te?? wybra?? lokalizacj?? na ??onie natury. "
      }
    }
]}

  return (
    
    <LayoutSitePage
      title="Fotograf ??lubny Katowice"
      description="Fotograf ??lubny Katowice"
      keywords="fotograf ??lubny Katowice"
      url="https://99foto.pl/fotograf-slubny-katowice/"
      leadNames="PATRYCJA i KRZYSZTOF"
      leadTitle="DWOREK FANTAZJA SKOMIELNA BIA??A i ??LUB W STYLU GLAMOUR"
      leadUrl="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"
      leadImage={pageImage}
      schemaData={schemaData}>
        
      <Container sx={{ pt: 8 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ??LUBNY KATOWICE
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Jako fotograf ??lubny przywi??zuj?? wag?? nie tylko do tego, aby Wasz reporta?? ??lubny by?? przepi??kny ??? ogromnie wa??ne jest dla mnie aby by?? unikalny, niepowtarzalny oraz ??eby??cie ze wzruszeniem i u??miechem mogli po latach przegl??da?? sw??j album ??lubny.
        </Typography>

        <Carousel animation="slide" duration="300">
            {
                imagesCarousel1.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Nie lubi?? sztucznych, ustawianych kadr??w i nie ingeruj?? w przebieg ??lubu i wesela ??? czuj?? za to ogromn?? ekscytacj?? tworz??c fotografie ??lubne z najwa??niejszego dnia w Waszym ??yciu. Emocje, jakie towarzysz?? mi, s?? bardzo podobne do tych jakie Wy prze??ywacie w dniu ??lubu - ekscytuj??ce oczekiwanie, poprzez wzruszenia podczas ceremonii, a ko??cz??c na radosnej zabawie. To w??a??nie jest kwintesencja zdj???? ??lubnych. Je??eli szukasz <strong>najlepszego fotografa ??lubnego na ??l??sku</strong> to doskonale trafi??e??. Nazywam si?? Tomasz Prokop, mieszkam w Krakowie i zapraszam do mojego fotograficznego ??wiata.
        </Typography>
     

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAF ??LUBNY KATOWICE - JAKI POWINIEN BY???
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Poszukujecie ??wie??ego i nowatorskiego spojrzenia na zdj??cia ??lubne? Nie lubicie przesadnie pozowanych i sztucznie wygl??daj??cych fotografii? Jeszcze si?? nie znamy, a ju?? mamy w kwestiach fundamentalnych wiele ze sob?? wsp??lnego. Tworz?? reporta??, kt??ry b??dzie wyj??tkowych zapisem najwa??niejszych dni waszego ??ycia, bez sztampy, powtarzalno??ci i planowania. Dobry reporta?? ??lubny to kwestia obserwacji, skupienia si?? na historii i doprowadzenie do sytuacji, w kt??rej poszczeg??lne zdj??cia uk??adaj?? si?? w sp??jn?? i przemy??lan?? ca??o????.
        </Typography>


        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          KATOWICE - IDEALNE T??O DLA FOTOGRAFII ??LUBNEJ
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        W Katowicach wasz?? uwag?? powinny zwr??ci?? trzy miejsca. Centrum Katowic to idealne miejsce na miejsk?? nowoczesn?? sesj?? ??lubn??. Z biegiem lat stolica wojew??dztwa ??l??skiego bardzo zmieni??a swoje oblicze. Tradycje ??l??skie s?? tu dalej widoczne, ale centrum miasta jest bardzo nowoczesne. To miejsce mocno industrialne pe??ne geometrycznych kszta??t??w z??agodzonych spor?? ilo??ci?? zieleni miejskiej. Katowicka Strefa Kultury jest ciekawym t??em dla sesji ??lubnych. Dlatego te?? ch??tnie jest ono wybierane przez pary m??ode ze ??l??ska. Jako najbardziej fotogeniczny obiekt, idealny na miejskie plenery ??lubne w Katowicach uzna?? trzeba katowicki Spodek. Hala  widowiskowo - sportowa Spodek jest jednym z symboli Katowic od wielu ju?? lat. Na jego charakterystycznego kszta??tu odbywa si?? wiele r????nych sesji zdj??ciowych. 
        </Typography>

        <Carousel animation="slide" duration="500">
            {
                imagesCarousel2.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Bardzo dobrze te?? sprawdzi si?? Mi??dzynarodowe Centrum Kongresowe. Niezwyk??a, bardzo geometryczna bry??a budynku MCK wyr????nia si?? industrialn?? estetyk?? oraz niezwyk??ym designem. Tworzy jedno z najbardziej fotografowanych miejsc w ca??ej Katowickiej Strefie Kultury. Idealnym t??em dla przeszklonego niezwyk??ego budynku jest zielona kaskadowo po??o??ona dolina prowadz??ca schodami a?? do Spodka. M??ode pary bardzo ch??tnie wybieraj?? w??a??nie to miejsce jako sw??j plener ??lubny w Katowickiej Strefie Kultury. 
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA KATOWICE - MIEJSCA NA SESJE
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 1 }}>
        Sesje ??lubn?? mo??na te?? wykona?? na Nikiszowcu to sesja na wskro?? ??l??ska, czerpi??ca gar??ciami z jego tradycji w dodatku w samym sercu regionu. Nikiszowiec jest dzielnic?? Katowic o niepowtarzalnym i unikalnym klimacie. Je??li chcecie cofn???? si?? w czasie i poczu?? jak si?? mieszka??o w dzielnicy robotniczej 100 lat temu, to Nikiszowiec jest ku temu idealny. Zbudowane z czerwonej ceg??y trzykondygnacyjne bloki tworz?? czworoboczne osiedla z wewn??trznymi dziedzi??cami. Ca??a dzielnica jest ??ywym pomnikiem kultury ??l??skiej. T?? w??a??nie atmosfer?? odczuwaln?? na ka??dym kroku idealnie daje si?? wple???? w organizowane plenery ??lubne na Nikiszowcu. Czerwone budynki naznaczone z??bem czasu, ceglane mury poro??ni??te bluszczem, ??cie??ki i uliczki pe??ne zakamark??w, bram i ??uk??w daj?? niesko??czone mo??liwo??ci ciekawych i romantycznych kadr??w w industrialnym ??l??skim stylu.  
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA KATOWICE - PAMI??TKA NA LATA
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 3 }}>
        Ka??de wydarzenie ma swoj?? histori??, tre???? i swoist?? moc kt??r?? trzeba dostrzec i umiej??tnie zapisa??. Czyli zrobi?? ponadczasowe zdj??cia, kt??re b??d?? wyra??nym echem tamtych chwil. Warto pami??ta??, ??e za 20, 30 i wi??cej lat kolejne pokolenia b??d?? wpatrywa?? si?? w te wspomnienia. Zastan??wmy si?? co chcemy im przekaza??. Jak?? warto???? maj?? nie???? ze sob?? Wasze historie. Jak maj?? by?? zapami??tane i jak opowiedziane.
        </Typography>

        <Carousel animation="slide" duration="700">
            {
                imagesCarousel3.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pt: 2 }}>
        Nie ma jednoznacznej definicji. To sk??adowa wielu zdarze??: ???  do??wiadczenia fotografa, jego umiej??tno??ci, wyczucia, jego wra??liwo??ci i techniki. Tego w jaki spos??b obserwuje wydarzenie, jak postrzega ??wiat??o, jakich technik u??ywa. Czy wie w jaki spos??b opowie histori??, czy po prostu improwizuje. Na tym polega magia fotografii, ??e ka??dy tw??rca inaczej widzi. Inaczej opowiada, i to ??e opowie??ci s?? r????ne daje nam pole wyboru. Wy mo??ecie zdecydowa?? jak Wasze wspomnienia zostan?? opowiedziane. Pami??tajcie, ??e ka??da Wasza Historia jest warta zapami??tania.
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
          FOTOGRAFIA ??LUBNA KATOWICE - BLISKO CZY DALEKO
          </Typography>
        </Box>
        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 1 }}>
        Jako fotograf ??lubny przywi??zuj?? ogromn?? wag?? do tego by tworzy?? dla Was niepowtarzalne zdj??cia ??lubne, kt??re skrupulatnie uk??adam w historie mi??osne, tak aby odda?? w Wasze r??ce unikalny reporta?? ??lubny, kt??ry b??dzie zwie??czeniem tego wyj??tkowego dnia. Ogl??daj??c swoje fotografie ??lubne b??dziecie nie tylko wspomina?? jak wygl??dali??cie w dniu ??lubu, ale r??wnie?? jak si?? czuli??cie w tych magicznych chwilach. Du???? uwag?? zwracam tak??e na Wasze otoczenie, rodzin?? i znajomych, poniewa?? wiem, ??e relacje z najbli??szymi b??d?? po latach dla Was jedn?? z najcenniejszych pami??tek ze ??lubu i wesela. Ka??dy fotograf ??lubny opowiada na sw??j spos??b historie mi??osne - je??li chcecie abym to w??a??nie ja napisa?? Wasz??, to koniecznie musimy si?? pozna??! 
        </Typography>

        <Box sx={{ pt: 2, pb : 1 }}>
          <Typography variant="h2" className={matches ? "quote-title" : ""} align="center">
            NAJCZ????CIEJ ZADAWANE PYTANIA
          </Typography>
        </Box>
        
        <Box sx={{ pt:2, pb: 2 }}>
        <FaqAccordion q1={schemaData.mainEntity[0].name}
                            a1={schemaData.mainEntity[0].acceptedAnswer.text} 
                            q2={schemaData.mainEntity[1].name}
                            a2={schemaData.mainEntity[1].acceptedAnswer.text}
                            q3={schemaData.mainEntity[2].name}
                            a3={schemaData.mainEntity[2].acceptedAnswer.text}
                            q4={schemaData.mainEntity[3].name}
                            a4={schemaData.mainEntity[3].acceptedAnswer.text}  />
        </Box>
      </Container>
    </LayoutSitePage>
  );
};

const CarouselItem = (props) => {
    return (
        <Box>
            <Image src={props.item.image} width={1140} height={760} style={{width: '100%', height: 'auto'}} />
        </Box>
    )
}

export default PageComponent;