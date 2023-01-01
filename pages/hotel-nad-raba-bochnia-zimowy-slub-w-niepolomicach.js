import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/01/restauracja_nad_raba_brzesko_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/01/restauracja_nad_raba_brzesko_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/01/restauracja_nad_raba_brzesko_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/01/restauracja_nad_raba_brzesko_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/01/restauracja_nad_raba_brzesko_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/01/restauracja_nad_raba_brzesko_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/01/restauracja_nad_raba_brzesko_0008.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/01/restauracja_nad_raba_brzesko_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0013.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0015.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0016.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0018.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0021.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0022.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0023.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0025.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0028.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0029.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0030.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0032.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0033.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0034.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0035.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0036.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0037.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0039.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0040.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0047.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0049.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0052.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0053.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0058.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0059.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0060.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0064.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0066.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0068.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0069.webp", height: 1054 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0070.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0071.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0073.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0074.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0075.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0076.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0077.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0078.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0081.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0083.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0085.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0086.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0087.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0088.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0092.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0093.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0096.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0099.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0102.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0103.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0108.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0106.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0109.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0113.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0115.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "hotel_nad_raba_bochnia.webp"}
                    images={images}
                    headTitle={"Hotel nad Rabą Bochnia, Zimowy ślub w Niepołomicach"}
                    headDescription={
                        "Hotel nad Rabą Bochnia, Zimowy ślub w Niepołomicach. Piękne kwiaty w środku zimy i mega wesoła grupa przyjaciół na ślubie Adrianny i Arkadiusza. Zapraszam do oglądania."
                    }
                    headKeywords={"Hotel nad Rabą Bochnia, Gospoda nad Rabą Bochnia wesela, zimowy ślub w Niepołomicach"}
                    headUrl={"https://99foto.pl/hotel-nad-raba-bochnia-zimowy-slub-w-niepolomicach"}
                    entryContentP1={
                        'Kilka centymetrów śniegu w Krakowie pojawia się wtedy, gdy w Zakopanem jest go centymetrów kilkadziesiąt. Trudno więc liczyć na śnieżnobiałe pejzaże zimowe, jednak przy odrobinie szczęścia można zamówić trochę śniegu, tak by zaczął padać godzinę przed i godzinę po ceremonii zaślubin. Takie zamówienie zostało zrealizowane dla Adrianny i Arkadiusza, których ślub miałem przyjemność fotografować w Niepołomicach. Przygotowania rozpoczęliśmy w <a href="https://www.facebook.com/MakijazowySwiatJoannaPiotrowska" target="_blank" rel="nofollow">Studio Makijażu Joanny Piotrowskiej</a>. Pierwsze trzaski migawki i pierwsze zamrożone chwile. Studio Asi i ilość sztucznie wytworzonego światła z ringów, softboxów, ścianka z logo, ściany pełne certyfikatów z ukończonych szkoleń wizażu wskazywały na to, że makijaż będzie wykonany mega profesjonalnie i rzeczywiście tak było. Następnie udaliśmy się do domu Ady gdzie czekały już ubrane w przepiękne czerwone suknie Monika i Magda oraz zawsze uśmiechnięta mama Adrianny. Kwiaty nie miały nic wspólnego z zimową aurą. Ada z pomocą druhen ubrała suknię ślubną, biżuterię i z lampką szampana w ręce i uśmiechem (po mamusi) czekała na przybycie Arkadiusza.'
                    }
                    entryContentP2={
                        'Tymczasem w Zabierzowie Bocheńskim odbywały się przygotowania Pana Młodego. Arkowi dzielnie asystowali Przemek i Sancho Pancho, którzy mierzyli się ze spinkami od mankietów, zapięciami muszki i na koniec z pięćdziesięcioma gramami dobrze zmrożonej substancji. Było wesoło i impreza zapowiadała się grubo. Po błogosławieństwie rodziców udaliśmy się do <a href="http://www.parafiajazy.pl/" target="_blank" rel="nofollow">Kościóła Matki Bożej Różańcowej w Niepołomicach</a>. Ksiądz nie szczędził sobie żartów i dbał o luźną atmosferę w Zakrystii. Tato wprowadził Adę do ołtarza i ceremonia zaślubin wystartowała. Ciekawym elementem było odczytanie krótkiej historii znajomości Ady i Arka, która wywołała prawdziwe emocje na twarzach nowożeńców i zaproszonych gości. Śnieg nie przeszkodził nam w wykonaniu zdjęcia grupowego pod Kościołem. Chwilę później wszyscy zaproszeni goście dotarli do Sali Weselnej <a href="http://hotelnadraba.pl/" target="_blank" rel="nofollow">Hotel i Gospoda nad Rabą</a> ustawiając się w długiej kolejce do gorących życzeń. Następnie młodzi zaserwowali pierwszy taniec i długą listę weselnych atrakcji. Gości na parkiecie do tańca animował <a href="http://silvermoon.com.pl/" target="_blank" rel="nofollow">Zespół Muzyczny SilverMoon</a>. Uśmiechy na twarzach najmłodszych zapewniał Minionek z <a href="https://www.facebook.com/Akademia-Animacji-Kreatywnych-2057966684489263" target="_blank" rel="nofollow">Akademii Animacji Kreatywnych</a>, a każdą sekundę tego magicznego popołudnia i wieczoru uwieczniał Krzysiek z <a href="http://www.ringoofilm.pl" target="_blank" rel="nofollow">Ringoo Film</a>. Świetny zimowy ślub, dużo pięknych niekoniecznie zimowych detali, roześmiana Para Młoda i pełni luzu Druhny i Drużbowie. Super, że mogłem być z Wami tego dnia. Dziękuję za zaufanie i zapraszam na zdjęcia. Więcej zdjęć w strefie klienta po wpisaniu hasła z wizytówki. Miłego oglądania.'
                    }
                    slug={"hotel-nad-raba-bochnia-zimowy-slub-w-niepolomicach"}
                    title={"HOTEL NAD RABĄ BOCHNIA, ZIMOWY ŚLUB W NIEPOŁOMICACH - ADA i AREK"}
                    tags={"Hotel nad Rabą Bochnia, Gospoda nad Rabą Bochnia wesela, zimowy ślub w Niepołomicach"}
                    date={"1 lutego 2018"}
                    menuNames={"ADRIANNA i ARKADIUSZ"}
                    menuTitle={"HOTEL NAD RABĄ BOCHNIA, ZIMOWY ŚLUB W NIEPOŁOMICACH"}
                    leadNames={"NATALIA i ŁUKASZ"}
                    leadTitle={"POMYSŁ NA SESJĘ ZIMOWĄ W KRAKOWIE - DWÓR JANA MATEJKI"}
                    leadUrl={"/pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki"}
                    leadImage={process.env.staticS3ImagesPath + "pomysl_na_sesje_slubna_zimowa_w_krakowie.webp"}
                />
            
        );
};

export default BlogPageComponent;
