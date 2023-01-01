import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [

            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0011.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0013.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0015.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0021.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0001.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0003.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0005.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0008.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0026.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0027.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0028.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0030.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0032.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0035.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0049.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0042.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0054.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0041.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0050.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0048.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0051.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0052.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0055.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0056.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0058.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0059.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0060.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0061.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0062.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0063.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0064.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0065.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0066.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0067.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0068.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0069.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0070.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0071.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0072.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0073.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0074.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0075.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0077.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0078.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0079.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0081.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0084.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0085.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0090.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0091.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0093.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0094.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0095.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0096.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0098.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0099.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0105.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0107.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0108.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0088.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0106.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0110.webp", height: 762 }];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sala-bankietowa-szafrantu.webp"}
                    images={images}
                    headTitle={"Sala bankietowa Szafrantu, fotografia ślubna Niepołomice"}
                    headDescription={"Przepiękne miejsce na ceremonię ślubną. Wspaniali Karolina i Kamil. Duża dawka emocji, uśmiechów i pozytywnej energii. Sala bankietowa Szafrantu i impreza do białego rana. Zapraszam."}
                    headKeywords={"Sala bankietowa Szafrantu, fotografia ślubna Niepołomice"}
                    headUrl={"https://99foto.pl/sala-bankietowa-szafrantu-fotografia-slubna-niepolomice"}
                    entryContentP1={
                        'Tym razem na reportaż ślubny zapraszam Was do Niepołomic gdzie podczas fotografowania ślubu Karoliny i Kamila odkryłem miejsce niezwykłe. Kraków słynie z <a href="http://mariacki.com/" target="_blank" rel="nofollow">Bazyliki Mariackiej</a>, czasem wspomina się o <a href="http://kolegiata-anna.pl/"  target="_blank" rel="nofollow">Uniwersyteckiej Kolegiacie Św. Anny</a> zupełnie natomiast zapominając o <a href="https://www.staniatki.pl/" target="_blank" rel="nofollow">Kościele Św. Wojciecha Biskupa i Męczennika w Staniątkach</a>. Właśnie w tym pięknym miejscu Karolina ślubowała Kamilowi miłość, wierność i uczciwość małżeńską. Cofnijmy się jednak w czasie do przygotowań, które rozpoczęły się pod okiem <a href="https://www.instagram.com/alexandradomagala/" target="_blank" rel="nofollow">Aleksandry Domagały</a>. Karolina wybrała <a href="http://www.hotelnovum.pl/" target="_blank" rel="nofollow">Hotel Novum w Niepołomicach</a> jako miejsce gdzie musiały pomieścić się kufry, pędzle i palety cieni skompletowane przez Olę. W czasie krótszym niż jedna godzina uroda Panny Młodej została perfekcyjnie podkreślona i mogliśmy odwiedzić Kamila, który czekał w gotowości by rozpocząć swoje przygotowania i piętnastoletnią whisky. Następnie wróciliśmy do domu rodzinnego Karoliny, na wspólne błogosławieństwo. Wszystkie miejsca odwiedzaliśmy wspólnie z Grześkiem i Dawidem z <a href="https://manolofilmy.pl/" target="_blank" rel="nofollow">Manolo filmy</a>. Był z nami jeszcze Filip, który pilotował drona w momentami ryzykownych warunkach.'
                    }
                    entryContentP2={
                        'Piękna ceremonia w jeszcze piękniejszym <a href="https://www.staniatki.pl/" target="_blank" rel="nofollow">Kościele Św. Wojciecha Biskupa i Męczennika w Staniątkach</a>, zdjęcie grupowe tuż po wyjściu i Para Młoda zaprosiła swoich gości weselnych do <a href="https://www.szafrantu.pl/" target="_blank" rel="nofollow">Sali Bankietowej w Restauracji Szafrantu w Niepołomicach</a>. Para młoda została przywitana chlebem i solą, przyjęła gorące życzenia gości i pierwszym tańcem otworzyła parkiet. Imprezę z radiowym zacięciem poprowadził <a href="http://tomaszjanda.pl/" target="_blank" rel="nofollow">DJ Tomasz Janda</a>. Lista atrakcji tego wieczoru była dłuższa niż zwykle. Krótki plener z wymarzonym garbusem, tort weselny, podziękowania dla rodziców wykonane popisowo i z jajem, sztuczne ognie tuż po zabawach oczepinowych. Działo się dużo i z pewnością było co fotografować. Karolino i Kamilu, dziękuję za zaufanie i zapraszam na kilka zdjęć z tego dnia. Więcej znajdziecie w strefie klienta wpisując hasło z mojej wizytówki. Serdecznie zapraszam i życzę miłego oglądania.'
                    }
                    slug={"sala-bankietowa-szafrantu-fotografia-slubna-niepolomice"}
                    title={"SALA BANKIETOWA SZAFRANTU, FOTOGRAFIA ŚLUBNA NIEPOŁOMICE - KAROLINA i KAMIL"}
                    tags={"Sala bankietowa Szafrantu, fotografia ślubna Niepołomice"}
                    date={"8 maja 2019"}
                    menuNames={"KAROLINA i KAMIL"}
                    menuTitle={"SALA BANKIETOWA SZAFRANTU, FOTOGRAFIA ŚLUBNA NIEPOŁOMICE"}
                    leadNames={"KINGA i PAWEŁ"}
                    leadTitle={"HOTEL JUNIOR SKOTNICKA, ZDJĘCIA ŚLUBNE SKAWINA"}
                    leadUrl={"/hotel-junior-skotnicka-zdjecia-slubne-skawina"}
                    leadImage={process.env.staticS3ImagesPath + "hotel-junior-skotnicka.webp"}
                />
            
        );
};

export default BlogPageComponent;
