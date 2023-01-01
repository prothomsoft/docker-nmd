import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0005.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0012.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0016.webp", height: 566 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0017.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0019.webp", height: 402 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0022.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0024.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0026.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0030.webp", height: 805 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0031.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0033.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0035.webp", height: 382 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0036.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0039.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0041.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0047.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0048.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0050.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0057.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0067.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0073.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0074.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0076.webp", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0077.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0079.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0080.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0082.webp", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0083.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0087.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0089.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0091.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0097.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0093.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0096.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0099.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0100.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0101.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0102.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0104.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0103.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0105.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0107.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0109.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0108.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0111.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0112.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0113.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0114.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0115.webp", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0116.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0117.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0119.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0120.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0121.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0123.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0125.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0126.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0128.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0127.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0129.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0130.webp", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0131.webp", height: 382 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0132.webp", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0133.webp", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0134.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0135.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0136.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0137.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0138.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0139.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0140.webp", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0141.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0142.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0143.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0144.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0145.webp", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0146.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0147.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0158.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0148.webp", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0149.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0150.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0151.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0152.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0153.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0154.webp", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0155.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0156.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0157.webp", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0159.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "dom_weselny_euforia_myslenice_1.webp"}
                    images={images}
                    headTitle={"Dom Weselny Euforia Myślenice i słonecznie LOVE"}
                    headDescription={"Dom weselny Euforia Myślenice i słoneczne LOVE. Dużo słońca w jedną z wrześniowych sobót. Reportaż ślubny Izabeli i Arkadiusza. Zapraszam do oglądania."}
                    headKeywords={"dom weselny euforia myślenice, sala na wesele blisko Krakowa, fotograf ślubny Myślenice"}
                    headUrl={"https://99foto.pl/dom-weselny-euforia-myslenice-i-sloneczne-love"}
                    entryContentP1={
                        'Spory kawałek drogi od Krakowa i mała miejscowość Skrzydlna, a w niej dom z pięknym widokiem na otaczające go pokryte lasem górki. Arkadiusz i jego siostra Natalia czekali na mnie i kilka minut przed godziną dziewiątą rano wystartowaliśmy z przygotowaniami Pana Młodego. Brak pogodowej nudy czyli na zmianę trochę deszczu, trochę słońca i już nie tak ciepło bo tylko osiem stopni. Podczas gdy ja odliczałem ilość kilometrów do Jordanowa, jadąc tam przez Mszanę Dolną, Rabkę Zdrój na fotelu genialnej wizażystki <a href="https://www.facebook.com/patrycjaantoszmakeup/" target="_blank" rel="nofollow">Patrycji Antosz</a> siedziała już Izabela, przygotowywując się do najważniejszego dnia w swoim życiu. Studio wizażu Patrycji odwiedzam często przy okazji wykonywania zdjęć na ślubach w Jordanowie i okolicach. Zawsze czeka mnie tam jakaś pozytywna zmiana, a każdy kolejny makijaż jest arcydziełem. Gdy uroda Izy została już podkreślona wybraliśmy się do jej domu rodzinnego w miejscowości Toporzysko. Salon dopracowany w najmniejszym szczególe posłużył genialnie jako sceneria dla przygotowań i błogosławieństwa, którego udzieli rodzice.'
                    }
                    entryContentP2={
                        'Trafić do <a href="https://www.parafiatoporzysko.pl/" target="_blank" rel="nofollow">Kościoła p.w. Najświętszej Najświętszej Maryi Panny Matki Kościoła w Toporzysku</a> było bardzo łatwo bo wystarczyło zejść z górki. Babcia Izy udzieliła błogosławieństwa jako pierwsza pozdrawiając młodych z okna domu. Dumny Tato odprowadził Izabelę do ołtarza i ksiądz proboszcz rozpoczął ceremonię zaślubim. W kościele tym uwagę przykłuwały witraże, a kilka promieni słonecznych, które oświetliły wnętrze Kośćioła pod koniec Mszy Świętej wprowadziły wszystkich nas w dobry humor. Ścigając się z kapelą góralską po Zakopiance i penetrując objazdy w okolicach Skomielnej Białej dotarliśmy do miejsca zabawy weselnej. <a href="https://www.salaeuforia.pl/" target="_blank" rel="nofollow">Dom Weselny Euforia</a> w Myślenicach czekał na przybyłych gości w pełnej gotowości. Luksusowa sala weselna, ze zintegrowanym oświetleniem, nagłośnieniem i stołami zastawionymi wyszukanymi smakołykami, a w ten specjalny dzień ubrana w piękne kwiaty, wywołała zachwyt na twarzach kolejno wchodzących na nią gości weselnych. Rozpoczęły się pełne uścisków i uśmiechów życzenia. Duży parkiet pomieścił wszystkich podczas pierwszego tańca. Później był tort i wiele atrakcji przygotowanych dla gości. Góralskie klimaty wprowadzał <a href="https://sykowni.pl/" target="_blank" rel="nofollow">Zespół Sykowni</a>. Każdą minutę tych wydarzeń nagrywał trzy osobowy zespół film mejkerów z <a href="https://www.facebook.com/filmykoliber/" target="_blank" rel="nofollow">Filmy Koliber</a>. Impreza trwała do białego rana, a parkiet momentami rozgrzewał się do czerwoności. Dziękuję za zaufanie i zapraszam na kilka zdjęć z tego dnia. Miłego oglądania.'
                    }
                    slug={"dom-weselny-euforia-myslenice-i-sloneczne-love"}
                    title={"DOM WESELNY EUFORIA MYŚLENICE i SŁONECZNE LOVE - IZABELA i ARKADIUSZ"}
                    tags={"dom weselny euforia myślenice, sala na wesele blisko Krakowa, fotograf ślubny Myślenice"}
                    date={"3 października 2018"}
                    menuNames={"IZABELA i ARKADIUSZ"}
                    menuTitle={"DOM WESELNY EUFORIA MYŚLENICE i SŁONECZNE LOVE"}
                    leadNames={"PAULINA i PAWEŁ"}
                    leadTitle={"SALA WESELNA TRIANA MOGILANY, REPORTAŻ ŚLUBNY MYŚLENICE"}
                    leadUrl={"/sala-bankietowa-triana-mogilany-reportaz-slubny-podstolice"}
                    leadImage={process.env.staticImagesPath + "sala_bankietowa_triana_mogilany.webp"}
                />
            
        );
};

export default BlogPageComponent;
