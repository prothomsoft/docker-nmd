import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0001.webp", height: 527 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0009.webp", height: 382 },            
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0004.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0006.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0005.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0003.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0002.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0007.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0008.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0012.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0011.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0013.webp", height: 851 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0010.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0014.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0015.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0016.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0017.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0018.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0019.webp", height: 806 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0023.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0021.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0022.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0025.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0020.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0024.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0026.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0027.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0028.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0029.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0030.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0031.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0032.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0033.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0034.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0036.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0035.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0037.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0040.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0038.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0039.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0041.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0043.webp", height: 527 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0042.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0044.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0046.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0045.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0047.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0048.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0049.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0050.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0051.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0052.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0053.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0054.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0055.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0056.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0057.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0058.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0069.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0059.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0060.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0061.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0062.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0063.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0064.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0066.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0067.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0068.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0070.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0071.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0073.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0075.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0072.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0074.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0076.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0078.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0079.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0077.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0080.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0081.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0082.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0083.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0084.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0085.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0086.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0087.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0089.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0088.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0090.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0091.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0092.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0093.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0094.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0095.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0096.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0097.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0098.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0099.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0100.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0101.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0102.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0104.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0103.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0105.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0106.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0107.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0112.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0109.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0110.webp", height: 806 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0111.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0113.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0108.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0114.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0115.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0116.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0117.webp", height: 851 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0118.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0119.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0120.webp", height: 805 },            
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0122.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0121.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0123.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0124.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0125.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0126.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0127.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0128.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0129.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0130.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0131.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0132.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0133.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0134.webp", height: 763 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0135.webp", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0140.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0137.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0142.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0138.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0139.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0136.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0141.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0143.webp", height: 527 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0145.webp", height: 763 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0146.webp", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0147.webp", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0148.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "klaudia_przemek_start.webp"}
                    images={images}
                    headTitle={"Karolinka Bystra Podhalańska, Wesele Strażackie"}
                    headDescription={"Sala weselna Karolinka Bystra Podhalańska. Wesele strażackie wynikające z tradycji rodzinnych. Klaudia i Przemysław. Serdecznie zapraszam."}
                    headKeywords={"Sala weselna Karolinka Bystra Podhalańska, dom weselny karolinka"}
                    headUrl={"https://99foto.pl/sala-weselna-karolinka-bystra-podhalanska"}
                    entryContentP1={
                        '<a href="https://parafiatokarnia.pl/" target="_blank" rel="nofollow noopener noreferrer">Kościół Matki Bożej Śnieżnej w Tokarni</a> odwiedzam regularnie przy okazji weekendowych wizyt czy imprez rodzinnych. Tym razem po raz pierwszy po generalnym remoncie fotografowałem w tym Kościele ceremonię ślubną Klaudii i Przemka. Oglądając zdjęcia zobaczycie, że był to doskonale zorganizowany ślub z oprawą strażacką, którą przygotowały zastępy strażackie z Tokarni i Wadowic. Kilka minut przygotowań u Przemka i od razu mogłem się zorientować, że strażakiem nie został on z przypadku, a służba w straży pożarnej jest bardzo ważna dla niego i jego całej rodziny. Dlatego też zamiast garnituru wybrał mundur strażacki. Było to więc prawdziwe wesele strażackie z asystą samochodów pożarniczych, strażacką bramą weselną, specjalnie przygotowanymi zadaniami i szpalerem reprezentacyjnym utworzonym podczas ceremoni i przy wyjściu z Kościoła.'
                    }
                    entryContentP2={
                        'Reportaż ślubny z tego ważnego dla Klaudii i Przemka dnia rozpoczął się w domu Panny Młodej od makijażu, który doskonale wykonała Marlena z <a href="https://www.instagram.com/marlenazadoramakeup" target="_blank" rel="nofollow noopener noreferrer">Marlena Zadora Makeup</a>. Nie wiem czy wiecie, ale ślub Marleny miałem przyjemmość fotografować trzy lata temu i wtedy również strażacy z Tokarni uczcili ślub Marleny i Maćka. Po pięknej ceremonii ślubnej odwiedziliśmy <a href="https://www.facebook.com/domweselnykarolinka" target="_blank" rel="nofollow noopener noreferrer">Dom Weselny Karolinka w Bystrej Podhalańskiej</a>. Gdy wszyscy goście dotarli na sale weselną, rodzice przywitali Parę Młodą chlebem i solą, Przemek przeniósł Klaudię przez próg, i po obiedzie rozpoczęły się życzenia. <a href="https://www.planujemywesele.pl/40916-zespol-nieznani" target="_blank" rel="nofollow noopener noreferrer">Zespół muzyczny Nieznani</a> wystartował z playlistą i po pierwszym tańcu parkiet zapełnił się błyskawicznie. Na koniec muszę wspomnieć o Sylwku i podwójnej roli Wojtka z <a href="https://www.facebook.com/Studio-Foto-Video-CLIP-348143895304294/" target="_blank" rel="nofollow noopener noreferrer">Studio Foto-Video CLIP</a>. Wojtka widziałem już w roli wodzireja ze skrzypcami w dłoni, a tym razem wcielił się w prezesa, który wszystkich znał i wprowadzał doskonały klimat podczas całego reportażu ślubnego. Serdecznie zapraszam na zdjęcia i życzę miłego oglądania. Klikajcie lajki na <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">insta</a> i <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">facebook</a> jeżeli wpis się podoba i do zobaczenia na kolejnym weselu.'
                    }
                    slug={"sala-weselna-karolinka-bystra-podhalanska"}
                    title={"KAROLINKA BYSTRA PODHALAŃSKA, WESELE STRAŻACKIE - KLAUDIA i PRZEMYSŁAW"}
                    tags={"Sala weselna Karolinka Bystra Podhalańska, dom weselny karolinka"}
                    date={"1 maja 2022"}
                    menuNames={"KLAUDIA i PRZEMYSŁAW"}
                    menuTitle={"KAROLINKA BYSTRA PODHALAŃSKA, WESELE STRAŻACKIE"}
                    leadNames={"JUSTYNA i DAMIAN"}
                    leadTitle={"SYLWESTROWY ŚLUB, SALA BANKIETOWA IMPRESJA JORDANÓW"}
                    leadUrl={"/sylwestrowy-slub-sala-bankietowa-impresja-jordanow"}
                    leadImage={process.env.staticImagesPath + "impresja_jordanow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;