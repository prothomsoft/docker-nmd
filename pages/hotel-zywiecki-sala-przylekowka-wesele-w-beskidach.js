import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0002.jpg", height: 382 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0006.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0009.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0011.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0012.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0019.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0021.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0024.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0023.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0025.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0026.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0033.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0031.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0028.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0035.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0036.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0037.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0040.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0042.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0043.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0044.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0046.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0045.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0048.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0049.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0050.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0052.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0053.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0054.jpg", height: 762 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0056.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0055.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0057.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0060.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0061.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0062.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0063.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0064.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0065.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0066.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0067.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0068.jpg", height: 762 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0070.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0069.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0072.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0073.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0074.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0077.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0078.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0084.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0087.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0089.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0090.jpg", height: 731 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0093.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0095.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0096.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0097.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0098.jpg", height: 805 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0100.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0102.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0103.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0106.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0107.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0110.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0111.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0112.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0104.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0113.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0114.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0115.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0105.jpg", height: 382 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0116.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0117.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0119.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0120.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0122.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0121.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0124.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0125.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0118.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0126.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0127.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0128.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0129.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0130.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0131.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0132.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0133.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0141.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0134.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0135.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0142.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0136.jpg", height: 762 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0137.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0138.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0143.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0144.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0145.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0146.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0147.jpg", height: 762 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0149.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0150.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0151.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0148.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0139.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0140.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "nicola_rafal_start.jpg"}
                    images={images}
                    headTitle={"Hotel żywiecki, Sala weselna Przyłękówka, Wesele w Beskidach"}
                    headDescription={"Hotel żywiecki, sala weselna Przyłękówka. Wesele w beskidach i kwitnące magnolie. Nicole i Rafał. Serdecznie zapraszam."}
                    headKeywords={"Hotel żywiecki, sala weselna Przyłękówka, wesele w Beskidach"}
                    headUrl={"https://99foto.pl/hotel-zywiecki-sala-przylekowka-wesele-w-beskidach"}
                    entryContentP1={
                        'Długi weekend majowy, mała wyprawa w Beskidy i okolice Żywca na ślub Nicoli i Rafała w Gilowicach. Pierwsze zdjęcie to Jezioro Żywieckie, nad którym odbywały się od rana zawody wędkarskie. Następnie makijaż, w mieszkaniu babci Nicoli. Fachowe dyskusje w trakcie ponieważ Nicola jest zawodową wizażystką i sama wykonuje makijaże ślubne pod marką  <a href="https://www.instagram.com/nicolekobza.style" target="_blank" rel="nofollow noopener noreferrer">Nicola Kobza Style</a>. Oczywiście nie obyło się bez ciasteczka i kawy, jak to u babci. Następnie pojechaliśmy do Gilowic, gdzie już razem z Krzyśkiem z <a href="https://camdesign.pl/" target="_blank" rel="nofollow noopener noreferrer">Camdesign - Nowoczesny film ślubny</a> rejestrowaliśmy ten ważny dzień. Domek świetny, magnolie, które okresem kwitnienia wstrzeliły się w datę ślubu Nicoli i Rafała, dodały temu miejscu niezwykłego uroku. Druhny dzielnie pomagały nie tylko z suknią ślubną, kolczykami, branzoletkami, ale też z szampanem, który wylądował w stylowych kieliszkach. Wesele w Beskidach to świetny pomysł.'
                    }
                    entryContentP2={
                        'Odwiedziliśmy też dom Rafała, przed którym czekał mercedes ślubny i taki mały pilot, wóz strażacki. Tiger ogarnał ubieranie Rafała, rozlał Dziką Geś wszystkim chętnym, sprawdził czy obrączki są na miejscu. Wystartowaliśmy na wspólne błogosławieństwo. Pierwszy pocałunek, emocje, uśmiechy, łzy radości. Pokonując przygotowaną przez sąsiadów bramę, przez strażaków i piłkarzy gilowickiego klubu sportowego dojechaliśmy do <a href="http://gilowice.duszpasterstwa.bielsko.pl/" target="_blank" rel="nofollow noopener noreferrer">Kościoła Św. Andrzeja Aposttoła w Gilowicach</a>. Ceremonię poprowadził zaprzyjaźniony ksiądz, więc sakramentalne TAK nabrało rodzinnego charakteru. Po zdjęciu grupowym, korzystając z pięknej pogody zostaliśmy na życzeniach pod Kościołem. Nie wiem czy można napisać, że orkiestra strażacka podgrywała w tle, ale tak własnie było. Następnie udaliśmy się do Hotelu Żywieckiego i jego <a href="http://weselewbeskidach.pl/" target="_blank" rel="nofollow noopener noreferrer">sali weselnej Przyłękówka</a>. Gości na parkiecie przywitał Sebastian z <a href="https://www.facebook.com/GOREST.S" target="_blank" rel="nofollow noopener noreferrer">Gorest S</a> i impreza wystartowała. Dużo atrakcji, które sami sprawdźcie na zdjęciach. Nicola i Rafał dziękuję za zaufanie i zapraszam na zdjęcia. Pamiętajcie by kliknąć lajka na <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">insta</a> lub <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">facebook</a> jeśli wpis się podoba i do zobaczenia na kolejnym weselu.'
                    }
                    slug={"hotel-zywiecki-sala-przylekowka-wesele-w-beskidach"}
                    title={"HOTEL ŻYWIECKI, SALA PRZYŁĘKÓWKA, WESELE W BESKIDACH - NICOLA i RAFAŁ"}
                    tags={"Hotel żywiecki, sala weselna Przyłękówka, wesele w Beskidach"}
                    date={"3 maja 2022"}
                    menuNames={"NICOLA i RAFAŁ"}
                    menuTitle={"HOTEL ŻYWIECKI, SALA PRZYŁĘKÓWKA, WESELE W BESKIDACH"}
                    leadNames={"KLAUDIA i PRZEMYSŁAW"}
                    leadTitle={"KAROLINKA BYSTRA PODHALAŃSKA, WESELE STRAŻACKIE"}
                    leadUrl={"/sala-weselna-karolinka-bystra-podhalanska"}
                    leadImage={process.env.staticImagesPath + "klaudia_przemek_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;