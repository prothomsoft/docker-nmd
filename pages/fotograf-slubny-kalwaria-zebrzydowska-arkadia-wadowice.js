import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0004.webp", height: 382 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0007.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0008.webp", height: 805 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0010.webp", height: 382 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0013.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0016.webp", height: 527 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0020.webp", height: 566 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0019.webp", height: 527 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0023.webp", height: 805 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0026.webp", height: 566 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0028.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0030.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0033.webp", height: 527 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0034.webp", height: 766 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0036.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0038.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0039.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0047.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0050.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0053.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0057.webp", height: 850 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0059.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_kalwaria_zebrzydowska_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0066.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0067.webp", height: 805 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0069.webp", height: 850 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0080.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0071.webp", height: 382 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0072.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0077.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0079.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0083.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0084.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0087.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0086.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0089.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0091.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0090.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0093.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0095.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0096.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0097.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0099.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0100.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0101.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0102.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0103.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0104.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0105.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0106.webp", height: 527 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0108.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0111.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0112.webp", height: 805 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0113.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0114.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0115.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0116.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0117.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0119.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0120.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0121.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0123.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0125.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0126.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0127.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0128.webp", height: 805 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0129.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0130.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0131.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0132.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0133.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0134.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0135.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0136.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0137.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0138.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0139.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0140.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0141.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0142.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0109.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0143.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0144.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0145.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0146.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0147.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0148.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0149.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0150.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0151.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0153.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0152.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0154.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0156.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0155.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0157.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0158.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0159.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0160.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0161.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0168.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0162.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0163.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0165.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0164.webp", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0166.webp", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0167.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice-start.webp"}
                    images={images}
                    headTitle={"Fotograf ślubny Kalwaria Zebrzydowska, Arkadia Wadowice"}
                    headDescription={
                        "Czy widzieliście kiedyś ponad sto wypełnionych helem, świecących ledowych serduchowych baloników wystrzelonych w kosmos kilka minut po północy? Jeżeli nie to zapraszam do wkliknięcia w reportaż ze ślubu Magdy i Piotrka. Miłego oglądania."
                    }
                    headKeywords={"Fotograf ślubny Kalwaria Zebrzydowska, Arkadia Wadowice"}
                    headUrl={"https://99foto.pl/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice"}
                    entryContentP1={
                        'Słoneczny dzień, mnóstwo zieleni i powietrze o jakim mieszkańcy Krakowa mogą tyko pomarzyć. Drugi raz w tym sezonie ślubnym odwiedziłem Lanckoronę. Tym razem w pierwszej kolejności udałem się na odnaleziony poprzednim razem punkt widokowy po zdjęcie kontekstowe, a następnie udałem się prosto na przygotowania do Sylwestra. Ubranie ślubnego garnituru, spinek i muchy trwało kilka chwil podczas których asystował Adrian. Wyszliśmy jeszcze do ogrodu ogarnąć portret Pana Młodego i chwilę później byłem w drodze do Kalwarii Zebrzydowskiej gdzie swoje przygotowania rozpoczęła już Dajana. Wykonanie perfekcyjnego makijażu było dla niej zadaniem łatwym, ponieważ na co dzień profesjonalnie zajmuję się wizażem, działając pod marką <a href="https://www.facebook.com/dajanasajdakmakeup/" target="_blank" rel="nofollow">Dajana Sajdak Make Up</a>. W ubieraniu sukni ślubnej i biżuterii pomagała mama Dajany. Dużo pozytywnej energii spłynęło od Krzyśka i Tomka z <a href="https://www.tokksa.pl/" target="_blank" rel="nofollow">TOKKSA - Insired by your life</a>, którzy dokumentowali przebieg przygotowań, ceremoni i zabawy weselnej. W końcu czas oczekiwania dobiegł końca i przed drzwiami zjawił się Sylwester. Gorący buziak na powitanie, pełne emocji błogosławieństwo i wspólnie udaliśmy się do <a href="https://www.kalwaria.diecezja.krakow.pl/" target="_blank" rel="nofollow">Kościoła pw. św. Józefa</a> w Kalwarii Zebrzydowskiej. Oczekując na przyjazd Pary Młodej miałem przyjemność spotkać Anię i Michała, których ślub fotografowałem w ubiegłym roku. Bocian, który krążył podczas ich ślubu w trakcie składania życzeń adresu nie pomylił i do pięćset plus został im już nie dwa, a tylko jeden krok.'
                    }
                    entryContentP2={
                        'Fotografowanie Dajany i Sylwestra podczas ceremoni zaślubin były czystą przyjemnością. Spokój i koncentracja, błysk szczęścia w oku i niezwykła radość tuż po wypowiedzianym sakramentalnym TAK. Kolejne minuty tego pełnego wrażeń dnia spędziliśmy w Domu Weselnym <a href="https://www.arkadia-wadowice.pl/glowna.html" target="_blank" rel="nofollow">Arkadia Wadowice</a>. Rodzice przywitali Parę Młodą, a po życzeniach pierwszy taniec otworzył parkiet. <a href="https://www.facebook.com/TangoLuz" target="_blank" rel="nofollow">Zespół Tango Luz z Chrzanowa</a>, który nie pozwalał gościom posiedzieć na miejscu, serwował perełki repertuaru weselnego, momentami sięgając po numery gwiazd polskiego rocka. Oczywiście nie zabrakło atrakcji, takich jak tort weselny, podziękowania dla rodziców, podczas których polały się łzy, pociąg i tradycyjne oczepiny. Grubo po północy muzycy oddali instrumenty i koncertowy popis zaserwowali sami Państwo Młodzi, pod sceną było naprawdę gorąco. Pewnie powstałoby kilka paragrafów tekstu więcej gdybym chciał opisać wszystko to, co działo się podczas tego pełnego wrażeń dnia. Ale wiecie co, łatwiej będzie jak zerkniecie na zdjęcia i zobaczycie co się działo na własne oczy. Tradycyjnie więcej zdjęć odnajdziecie w strefie klienta, korzystając z hasła z mojej wizytówki. Miłego oglądania.'
                    }
                    slug={"fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice"}
                    title={"FOTOGRAF ŚLUBNY WADOWICE, SALA WESELNA ARKADIA - DAJANA i SYLWESTER"}
                    tags={"Fotograf ślubny Kalwaria Zebrzydowska, Arkadia Wadowice"}
                    date={"10 czerwca 2018"}
                    menuNames={"DAJANA i SYLWESTER"}
                    menuTitle={"FOTOGRAF ŚLUBNY WADOWICE, SALA WESELNA ARKADIA"}
                    leadNames={"MAGDALENA i PIOTR"}
                    leadTitle={"REPORTAŻ ŚLUBNY HOTEL JUNIOR KRAKÓW, BALONOWY SZAŁ"}
                    leadUrl={"/reportaz-slubny-hotel-junior-krakow-balonowy-szal"}
                    leadImage={process.env.staticImagesPath + "reportaz-slubny-hotel-junior-krakow-balonowy-szal-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
