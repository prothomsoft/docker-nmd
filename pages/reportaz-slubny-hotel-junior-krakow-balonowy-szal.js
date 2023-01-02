import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0003.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0005.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0007.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0011.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0012.webp", height: 567 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0014.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0016.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0018.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0019.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0021.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0023.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0025.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0027.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0031.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0032.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0033.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0035.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0038.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0041.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0043.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0045.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0047.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0050.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0048.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0059.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0062.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0063.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0071.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0072.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0074.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0079.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0083.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0106.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0090.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0094.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0096.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0100.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0102.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0105.webp", height: 762 },
            ,
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0109.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0111.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0112.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0114.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0115.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0117.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0122.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0124.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0127.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0130.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0131.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0137.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0141.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0144.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_skawina_0145.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "reportaz-slubny-hotel-junior-krakow-balonowy-szal-start.webp"}
                    images={images}
                    headTitle={"Hotel Junior Kraków - Reportaż Ślubny"}
                    headDescription={
                        "Czy widzieliście kiedyś ponad sto wypełnionych helem, świecących ledowych serduchowych baloników wystrzelonych w kosmos kilka minut po północy? Jeżeli nie to zapraszam do wkliknięcia w reportaż ze ślubu Magdy i Piotrka. Miłego oglądania."
                    }
                    headKeywords={"Reportaż ślubny Hotel Junior Kraków, balonowy szał"}
                    headUrl={"https://99foto.pl/reportaz-slubny-hotel-junior-krakow-balonowy-szal"}
                    entryContentP1={
                        'Duży dom, profesjonalna fryzjerka i makijażystka oraz niezastąpieni pomocnicy pełni humoru, plus kilka czelendżing tasków i klimat pod przygotowania mamy zapewniony. Tak w dużym skrócie mógłbym przedstawić początek piątkowych przygotowań Magdy, które miały miejsce w Skawinie. Przed dwunastą kiedy już fryzura i makijaż były gotowe, a na mojej karcie pamięci w aparacie zapisany finalny look, wybraliśmy się do Piotrka. Miało być tam kilku ziomków i spoko klimat... i tak właśnie było. Drużbowie w liczności połowy przeciętnej klasy w szkole podstawowej założyli takie same muchy, a kiedy wbili się w garnitury to wyglądali lepiej niż reprezentacja Polski na plakacie Vistuli. Nie zabrakło też krótkiego błogosławieństwa i kilku tradycyjnych przyśpiewek zaserwowanych przez Sławka, który z zawodową taśmą kręcił imprezą do przodu. Kolor różowy zdominował mieszkanie rodziców Magdy. Dziewczyny sprawnie przypieły welon, butonierki i po krótkim błogosławieństwie udaliśmy się do <a href="https://www.szymonijuda.pl/" target="_blank" rel="nofollow">Kościoła Świętych Apostołów Szymona i Judy Tadeusza w Skawinie</a>.'
                    }
                    entryContentP2={
                        'Księża przywitali Parę Młodą w zachrystii, dopełniono formalności i ceremonia zaślubin wystartowała. Po sakramentanym TAK nadeszła pora na klasyczne wyjście z kościoła przez szpaler starannie ułożony przez druhny i drużbów ślubnych. Następnie czerwony Mustang przewiózł Magdę i Piotra do <a href="https://junior.krakow.pl/">Hotel Junior w Krakowie</a>, rodzice przywitali Parę Młodą chlebem i solą, brat Piotrka mocno powalczył z petardą i rozpoczęły się życzenia. Były gorące, jak atmosfera całego ślubu i bez nawet 10 sekund nieprzerwanych salwą śmiechu. Pierwszy taniec otworzył parkiet, na którym swoje instrumenty rozłożył <a href="https://www.primaband.pl" target="_blank" rel="nofollow">Zespół muzyczny Prima Band</a>. Minutkę przed burzą, której jednak nie było, wyskoczyliśmy na zdjęcia grupowe i plenerowe. Dalej były już same atrakcje, tort weselny, zabawy oczepinowe i wiśnia na torcie, dmuchane helem i podświetlane ledami baloniki, które poleciały wysoko, wysoko, bardzo wysoko. Były osoby, który widziały, że ułożyły się w powietrzu w krzałt serca... no cóż mój aparat nie był, aż tak spostrzegawczy. Nie mogę zapomnieć dodać, że każdą minutę tych niezwykłych wydarzeń filmował mój dobry kolega Krzysiek z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">Pracowni Filmu Ślubnego CAMDESIGN</a>, którego bardzo wszystkim przyszłym param młodym polecam. Magdo i Piotrze, dziękuję, że mogłem być tam z Wami i zapraszam na zdjęcia. Tym razem działo się tak dużo, że blisko 600 zdjęć znajdziecie w strefie klienta wpisując hasło z mojej wizytówki. Miłego oglądania.'
                    }
                    slug={"reportaz-slubny-hotel-junior-krakow-balonowy-szal"}
                    title={"REPORTAŻ ŚLUBNY HOTEL JUNIOR KRAKÓW, BALONOWY SZAŁ - MAGDALENA i PIOTR"}
                    tags={"Reportaż ślubny Hotel Junior Kraków, fotograf na wesele Skawina"}
                    date={"2 czerwca 2018"}
                    menuNames={"MAGDALENA i PIOTR"}
                    menuTitle={"REPORTAŻ ŚLUBNY HOTEL JUNIOR KRAKÓW, BALONOWY SZAŁ"}
                    leadNames={"MAŁGORZATA I RAFAŁ"}
                    leadTitle={"PLENER ŚLUBNY SŁOWACJA, ŁOMNICKI STAW"}
                    leadUrl={"/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    leadImage={process.env.staticS3ImagesPath + "plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.webp"}
                />
            
        );
};

export default BlogPageComponent;
