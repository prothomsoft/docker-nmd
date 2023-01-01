import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0003.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0018.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0021.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0024.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0025.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0027.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0033.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0034.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0035.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0036.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0039.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0040.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0042.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0043.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0044.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0045.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0046.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0048.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0049.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0050.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0051.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0052.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0053.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0054.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0056_1.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0059.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0061.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0064.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0066.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0068.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0069.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0076.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0077.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0078.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0081.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0084.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0085.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0090.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0092.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0094.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0098.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0099.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0100.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0104.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0107.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0105.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0109.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0110.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0111.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0113.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0114.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0115.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0117.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0118.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0119.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0120.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0121.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0122.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0123.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0124.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0125.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0116.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0127.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0128.webp", height: 762 }];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "hotel-junior-skotnicka.webp"}
                    images={images}
                    headTitle={"Hotel Junior Skotnicka, zdjęcia ślubne Skawina"}
                    headDescription={"Piękni i młodzi Kinga i Paweł. Dużo słońca, uśmiechów i pozytywnej energii. Hotelu Junior Skotnicka i impreza do białego rana. Zapraszam."}
                    headKeywords={"Hotel Junior Skotnicka, dobry fotograf ślubny Skawina, zdjęcia ślubne w Skawinie"}
                    headUrl={"https://99foto.pl/hotel-junior-skotnicka-zdjecia-slubne-skawina"}
                    entryContentP1={
                        'Piątek, piąteczek, piątunio to dla niektórych kolejny dzień spędzony w pracy i oczekiwanie na nadchodzący weekend, dla innych jeden z najważniejszych dni w życiu i okazja do świętowania w gronie najbliższych. Ten wiosenny dzień rozpoczęliśmy od makijażu Kingi, który wykonała Michalina Mikrut z <a href="https://www.facebook.com/allureofmakeup/" target="_blank" rel="nofollow">Allure of Makeup</a>. Miła atmosfera i blisko godzina rozmów pozwoliła mi poznać kilka zagadnień branży wizażu. Piętnaście minut później byliśmy już w mieszkaniu rodziców Kingi, gdzie Mama w turkusowej sukience pomagała Kindze w ubieraniu suknii ślubnej i wszystkich niezbędnych dodatków. Dosłownie tuż za rogiem skawińskiego osiedla czekał na mnie Paweł, który od rana dzielnie jak na wzorowego tatę przystało zajmował się Maksem. Gdy mucha siadła pod kołnierzem białej koszuli, razem z rodzicami Pawła wyruszyliśmy na spotkanie z Kingą i wspólne błogosławieństwo. Nie brakowało wzruszeń w momencie gdy rodzice składali gorące życzenia swoim kochanym dzieciom.'
                    }
                    entryContentP2={
                        'Kilka minut spędzonych pod <a href="https://www.milosierdzieskawina.org/" target="_blank" rel="nofollow">Kościółem pw. Miłosierdzia Bożego w Skawinie</a> pozwoliło przywitać pozostałych gości weselnych. Ksiądz wprowadził Parę Młodą przed ołtarz i rozpoczęła się ceremonia zaślubin. Radość na twarzach Kingi i Pawła była nie do opisania. Widać było, że na ten moment czekali długo, jak mówił Paweł blisko trzy lata. Po ceremoni korzystając z pięknej wiosennej pogody i słonecznego dnia zrobiliśmy zdjęcie grupowe pod Kościołem. Gości weselnych przywitał <a href="https://www.junior.krakow.pl/" target="_blank" rel="nofollow">Hotel Junior Skotnicka</a>, położony w bliskiej odległości od Skawiny. Kieliszki rozbiły się o ziemię, Para Młoda przyjęła moc gorących życzeń, a dzieciaki pełne garście pysznych czekoladowych cuksów. Po obiedzie i deserze parkiet otworzył pierwszy taniec. Zespół muzyczny, mocno rockowy z charyzmatycznym wokalistą, który na szczęście do domu samochodem wracać nie musiał dał czadu. Klimat był jak we Wrocławiu pod Kredką i Ołówkiem, za moich studenckich czasów. Impreza kręciła się do białego rana. Kingo i Pawle, dziękuję za to, że mogłem być z Wami i fotografować te niezwykłe chwile. Zapraszam na kilka zdjęć z tego dnia i życzę miłego oglądania.'
                    }
                    slug={"hotel-junior-skotnicka-zdjecia-slubne-skawina"}
                    title={"HOTEL JUNIOR SKOTNICKA, ZDJĘCIA ŚLUBNE SKAWINA - KINGA i PAWEŁ"}
                    tags={"Hotel Junior Skotnicka, dobry fotograf ślubny Skawina, zdjęcia ślubne w Skawinie"}
                    date={"29 kwietnia 2019"}
                    menuNames={"KINGA i PAWEŁ"}
                    menuTitle={"HOTEL JUNIOR SKOTNICKA, ZDJĘCIA ŚLUBNE SKAWINA"}
                    leadNames={"KRISTINA i OLA"}
                    leadTitle={"WILLA DECJUSZA KRAKÓW, ŚLUB CYWILNY i SESJA ZDJĘCIOWA"}
                    leadUrl={"/willa-decjusza-krakow-slub-cywilny-sesja-zdjeciowa"}
                    leadImage={process.env.staticS3ImagesPath + "willa_decjusza_krakow_slub_cywilny_sesja_zdjeciowa_1.webp"}
                />
            
        );
};

export default BlogPageComponent;
