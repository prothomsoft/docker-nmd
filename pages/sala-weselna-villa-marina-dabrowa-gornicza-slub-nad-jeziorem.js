import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0003.webp", height: 850 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0004.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0005.webp", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0009.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0014.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0018.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0019.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0021.webp", height: 805 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0022.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0024.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0026.webp", height: 805 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0032.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0033.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0036.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0039.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0042.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0044.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0046.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0048.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0050.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0053.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0057.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0061.webp", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0065.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0067.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0068.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0072.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0073.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0074.webp", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0075.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0077.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0079.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0080.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0083.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0087.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0088.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0089.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0091.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0092.webp", height: 472 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0093.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0096.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0069.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0097.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0099.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0100.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0101.webp", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0102.webp", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0103.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0104.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0105.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0107.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0108.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0109.webp", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0111.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0112.webp", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0113.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0114.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0115.webp", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0116.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0117.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0119.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0120.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0121.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0125.webp", height: 762 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0123.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0124.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0126.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0127.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0129.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0130.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0131.webp", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0132.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0133.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0134.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0135.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0136.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0148.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0137.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0138.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0139.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0141.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0140.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0143.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0144.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0145.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0146.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0147.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0150.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0149.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0142.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0128.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem-start.webp"}
                    images={images}
                    headTitle={"Sala weselna Villa Marina Dąbrowa Górnicza, ślub nad jeziorem"}
                    headDescription={
                        "Sala weselena Villa Marina jest położona nad brzegiem jeziora Pogoria w bezpiecznej odległości od centrum miasta, malowniczej okolicy w otoczeniu lasu. Zapraszam na zdjęcia ślubne Sandry i Maćka."
                    }
                    headKeywords={"Villa Marina Dąbrowa Górnicza, sala weselna nad jeziorem, ślub na śląsku"}
                    headUrl={"https://99foto.pl/sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem"}
                    entryContentP1={
                        'Dokładnie tydzień temu zachęcony niezwykłą, pachnącą na klipach internetowych wakacyjnym klimatem salą weselną <a href="https://villamarina.eu/" target="_blank" rel="nofollow">Villa Marina w Dąbrowie Górniczej</a>, wybrałem się na zdjęcia ślubne trochę dalej niż zwykle. Powiem jedno było warto i śląsk zapamiętam bardzo dobrze i na bardzo długo. Przy okazji upolowałem fajne kadry, które na pewno rozszerzą moje dotychczasowe porfolio. Dzień rozpoczęliśmy w Tarnowskich Górach w domu rodzinnym Sandry, gdzie Magda pomalowała Pannę Młodą. Staraliśmy się nie przeszkadzać Magdzie w pracy, może nie do końca się udało, ale kilka drobnych próśb cierpliwie przez nią wysłuchiwanych, pozwoliło nam świetnie współpracować i zrobić fajne zdjęcia. Kolejne kilka minut zostało skradzione przez ubieranie sukni ślubnej i tak oto wszystko zostało finalnie dopięte na ostatni guzik. Pojechaliśmy więć na przygotowania do Maćka. Było to bardzo dynamiczne piętnaście minut, w których Pan Młody założył spinki, muchę, buty, zegarek i marynarkę. Pierwszy pocałunek, błogosławieństwo, dwie bramy przygotowane przez sąsiadów i dotarliśmy do <a href="https://parafia.bobrowniki.tgory.pl/" target="_blank" rel="nofollow">Kościoła pw. Przemienienia Pańskiego</a> w Tarnowskich Górach. Ceremonia, podczas której goście procesyjnie przeszli za ołtarz, oraz piękne kazanie wygłoszone przez charyzmatycznego księdza i wreszcie sakramentalne TAK.'
                    }
                    entryContentP2={
                        'Po wyjściu z kościoła Parę Młodą przywitało piękne słońce i deszcz... monet, które goście wyrzucili na szczęcie. Garść gorących życzeń, po których Para Młoda zaprosiła gości weselnych na mniej oficjalną część imprezy do wspomnianej już <a href="https://villamarina.eu/" target="_blank" rel="nofollow">Sali Bankietowej Villa Marina w Dąbrowie Górniczej</a>. Sala weselena Villa Marina i ośrodek wypoczynkowy położony są nad brzegiem jeziora Pogoria w bezpiecznej odległości od centrum miasta, malowniczej okolicy w otoczeniu lasu. Każdy z gości po dotarciu na miejsce nie krył zachwytu rozwodząc się nad wspaniałością tego miejsca. Sandra i Maciek przyjęli resztę gorących życzeń od wszystkich gości weselnych i otworzyli parkiet pierwszym tańcem. <a href="https://zespol-lavado.pl" target="_blank" rel="nofollow">Zespół Lavado</a>, który grał dla nas tego wieczoru stanął na wysokości zadania. Świetne brzmienie gitary, Grzegorz i jego saksofon wyrzucający z lekkością motyla niezliczoną ilość perfekcyjnie poukładanych dźwięków, wybitny głos wokalistki i szeroki wachlarz utworów zostaną w naszych głowach na długo. Po raz kolejny miałem też możliwość spotkać się i współpracować z Krzysiem z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">CAMDESIGN - Pracownia Filmu Ślubnego</a>, który nagrywał, rejestrował i filmował jednocześnie. Naprawdę super impreza w wakacyjnym klimacie, którego w kwietniu nikt przecież by się nie mógł spodziewać. Sandro i Maćku, dzięki za zaufanie i zaproszenie mnie na Wasz ślub. Nie przedłużająć serdecznie zapraszam do oglądania zdjęć, a po kilka więcej do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem"}
                    title={"VILLA MARINA DĄBROWA GÓRNICZA, ŚLUB NAD JEZIOREM - SANDRA i MACIEK"}
                    tags={"Villa Marina Dąbrowa Górnicza, sala weselna nad jeziorem, ślub na śląsku"}
                    date={"20 kwietnia 2018"}
                    menuNames={"SANDRA i MACIEK"}
                    menuTitle={"VILLA MARINA DĄBROWA GÓRNICZA, ŚLUB NAD JEZIOREM"}
                    leadNames={"NATALIA i PIOTR"}
                    leadTitle={"HOTEL MARGERITA, MAGICZNY WYSTRÓJ SALI WESELNEJ W KRAKOWIE"}
                    leadUrl={"/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie"}
                    leadImage={process.env.staticImagesPath + "hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
