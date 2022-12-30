import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0001.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0009.jpg", height: 382 },            
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0005.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0002.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0012.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0013.jpg", height: 851 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0015.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0017.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0019.jpg", height: 806 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0021.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0022.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0025.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0024.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0026.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0028.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0029.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0031.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0032.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0033.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0036.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0037.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0040.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0038.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0043.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0042.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0044.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0046.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0045.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0048.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0050.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0052.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0053.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0054.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0055.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0056.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0057.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0069.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0059.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0060.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0061.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0062.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0063.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0064.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0066.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0067.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0068.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0070.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0073.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0072.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0074.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0076.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0077.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0082.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0084.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0085.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0087.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0088.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0090.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0093.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0095.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0096.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0098.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0100.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0102.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0104.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0105.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0106.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0107.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0112.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0110.jpg", height: 806 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0111.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0113.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0114.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0115.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0116.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0117.jpg", height: 851 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0118.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0119.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0120.jpg", height: 805 },            
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0122.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0121.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0124.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0125.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0126.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0127.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0128.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0129.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0130.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0131.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0132.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0133.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0135.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0140.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0137.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0142.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0138.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0139.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0136.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0141.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0143.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0146.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0147.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0148.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "klaudia_przemek_start.jpg"}
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
                    leadImage={process.env.staticImagesPath + "impresja_jordanow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;