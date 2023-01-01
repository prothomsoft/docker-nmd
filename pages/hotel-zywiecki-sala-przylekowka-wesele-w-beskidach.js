import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0003.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0002.webp", height: 382 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0004.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0005.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0006.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0007.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0008.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0009.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0010.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0011.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0012.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0013.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0015.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0014.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0016.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0017.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0019.webp", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0018.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0021.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0020.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0024.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0022.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0023.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0025.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0026.webp", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0033.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0031.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0030.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0028.webp", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0032.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0027.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0034.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0035.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0036.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0038.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0037.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0039.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0040.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0041.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0042.webp", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0043.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0044.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0046.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0045.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0047.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0048.webp", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0049.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0050.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0051.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0052.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0053.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0054.webp", height: 762 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0056.webp", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0055.webp", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0057.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0058.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0060.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0061.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0062.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0063.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0064.webp", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0065.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0066.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0082.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0067.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0068.webp", height: 762 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0070.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0069.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0071.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0072.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0073.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0074.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0075.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0076.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0077.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0078.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0079.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0081.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0080.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0083.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0084.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0085.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0086.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0087.webp", height: 527 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0088.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0089.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0090.webp", height: 731 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0091.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0092.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0093.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0094.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0095.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0096.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0097.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0099.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0098.webp", height: 805 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0100.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0102.webp", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0101.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0103.webp", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0108.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0106.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0109.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0107.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0110.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0111.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0112.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0104.webp", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0113.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0114.webp", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0115.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0105.webp", height: 382 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0116.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0117.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0119.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0120.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0122.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0121.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0123.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0124.webp", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0125.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0118.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0126.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0127.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0128.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0129.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0130.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0131.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0132.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0133.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0141.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0134.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0135.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0142.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0136.webp", height: 762 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0137.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0138.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0143.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0144.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0145.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0146.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0147.webp", height: 762 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0149.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0150.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0151.webp", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0148.webp", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0139.webp", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0140.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "nicola_rafal_start.webp"}
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
                    leadImage={process.env.staticImagesPath + "klaudia_przemek_start.webp"}
                />
            
        );
};

export default BlogPageComponent;