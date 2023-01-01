import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0027.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0032.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0036.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0043.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0047.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0048.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0049.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0050.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0052.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0056.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0054.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0055.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0059.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0069.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0078.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0080.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0081.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0086.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0090.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0092.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0116.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0117.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0129.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0134.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0136.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0140.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0147.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0148.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0150.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0151.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0152.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/fotograf_slubny_jordanow_0153.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "alina_i_janusz_zdjecia_slubne_jordanow_dworek_fantazja_start.webp"}
                    images={images}
                    headTitle={"Fotograf ślubny Jordanów, zdjęcia ślubne Dworek Fantazja"}
                    headDescription={"Do krótkiego streszczenia ich wielkiego dnia najbardziej pasują dwa słowa: było pięknie! Na moim BLOGu, krótka historia opowiedziana wyjątkowymi momentami."}
                    headKeywords={"reportaż ślubny jordanów,zdjęcia ślubne restauracja dworek fantazja"}
                    headUrl={"https://99foto.pl/alina-i-janusz-zdjecia-slubne-jordanow-dworek-fantazja"}
                    entryContentP1={
                        "Jordanów po raz kolejny. Za oknami jesień w pełni. Z pozoru szara sobota, w praktyce dzień przepełniony emocjami i wrażeniami. Reportaż ślubny Aliny i Janusza zaczęliśmy od makijażu Panny Młodej, który został mistrzowsko wykonany przez Iwonę. Spotkaliśmy się z Iwoną po raz kolejny, tym razem również na sali weselnej. Makijaż jak zwykle doskonały, wywołał zachwyt wszystkich gości i skrócił moją prace nad zdjęciami w Photoshopie o dobre kilka godzin. Kiedy Pani Młoda była już gotowa, oczarowywała każdą wchodzącą do jej pokoju osobę. Po kilku chwilach zabarwionych cieniami i szminkami nadszedł czas na pojawienie się Pana Młodego. Za oknem pojawiła się limuzyna, a Janusz elegancko przywitał się ze swoją przyszłą żoną."
                    }
                    entryContentP2={
                        'Pan młody nie wykazywał żadnych oznak stresu, oaza spokoju i dobrego humoru. Pierwsze spotkanie Aliny i Janusza, bezcenne. Po chwilach wzruszenia podczas rodzinnego błogosławieństwa udaliśmy się do Kościoła Przenajświętszej Trójcy w Jordanowie. Były łzy szczęścia i wzniosłe chwile. Stało się! Po ogłoszeniu naszej Pary mężem i żoną udaliśmy się do domu weselnego <a href="https://www.dworekfantazja.pl/" target="_blank" rel="nofollow">Dworek Fantazja w Skomielnej Białej</a>, gdzie odbyło się wesele. Za oprawę muzyczną tego dnia zadbał <a href="https://www.facebook.com/zespolmelodika" target="_blank" rel="nofollow">Zespół Melodika</a>, natomiast filmową pamiątkę tworzył Pan Piotr z <a href="https://www.facebook.com/video.foto.sonique" target="_blank" rel="nofollow">Sonique Video &#038; Fotografia</a>.  Po wejściu Młodych na salę, obiedzie i życzeniach przyszedł czas na pierwszy taniec. Parkiet został otwarty. Działo się zdecydowanie bardzo wiele, od szalonych tańców, szerokiego wachlarza zabaw weselnych po szaleństwa w <a href="https://www.facebook.com/FotobudkaWojtasa" target="_blank" rel="nofollow">fotobudce Wojtasa</a>.  Goście weselni zdecydowanie dopisali, a nasi tytułowi bohaterowie mieli co świętować. Bardzo dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i wspaniałą atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"alina-i-janusz-zdjecia-slubne-jordanow-dworek-fantazja"}
                    title={"ZDJĘCIA ŚLUBNE JORDANÓW, DWOREK FANTAZJA - ALINA i JANUSZ"}
                    tags={"reportaż ślubny jordanów,zdjęcia ślubne restauracja dworek fantazja"}
                    date={"11 listopada 2016"}
                    menuNames={"ALINA i JANUSZ"}
                    menuTitle={"ZDJĘCIA ŚLUBNE JORDANÓW, DWOREK FANTAZJA"}
                    leadNames={"KINGA i JULIEN"}
                    leadTitle={"ŚLUB CYWILNY i WESELE W PLENERZE - WITKOWA CHATA KRAKÓW"}
                    leadUrl={"/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow"}
                    leadImage={process.env.staticS3ImagesPath + "slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
