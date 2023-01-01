import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0003.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0014.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0015.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0018.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0022.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0023.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0027.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0029.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0032.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0034.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0042.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0045.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0046.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0049.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0052.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0054.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0057.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0065.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0068.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0069.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0070.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0072.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0074.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0078.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0082.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0088.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0091.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0097.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0106.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0116.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0117.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0120.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0127.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0138.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0140.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0147.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/02/dom_weselny_kabanos_jablonka_0115.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "dom-weselny-w-jablonce-zdjecia-slubne-przystan-w-kabanosie-start.webp"}
                    images={images}
                    headTitle={"Dom weselny w Jabłonce, zdjęcia ślubne Przystań w Kabanosie"}
                    headDescription={"Przedsylwestrowa zabawa w Karczmie Pod Kogutkiem. Reportaż ślubny z ceremonii zaślubin w Makowie Podhalańskim."}
                    headKeywords={"Dom weselny w Jabłonce, zdjęcia ślubne Przystań w Kabanosie, fotograf na wesele Jabłonka"}
                    headUrl={"https://99foto.pl/dom-weselny-w-jablonce-zdjecia-slubne-przystan-w-kabanosie"}
                    entryContentP1={
                        'Sobota rano, jeszcze zima, początek ferii zimowych w małopolsce, na Zakopiance full, korek od Rabki Zdrój, jadę do Jabłonki sfotografować ślub Joli i Tomka razem z ich prześwietnymi dzieciakami Wiktorem i Milenką. Fryzjer umknął mojej uwadze, natomiast makijaż sfotografowałem w gabinecie kosmetycznym <a href="https://www.facebook.com/VitaGabinetKosmetycznyStudioPaznokciSolarium/" target="_blank" rel="nofollow">VITA Naturalne Piękno w Jabłonce</a>. Dziewczyny Basia i Jola znały się nie od dziś. Nie wiem czy makijaż był wcześniej próbowany, ale wyszedł perfekcyjnie. Nadszedł czas na przygotowania u Tomka. Krótka chwila na poszukiwanie białego domu, na tyle nowego, że w nawigacji jeszcze się nie pojawił i świetna atmosfera, którą tworzyli wspólnie rodzice i brat Tomka. Muszka, garnitur, buty szybko zajęły swoje miejsce i nie przeszkodziła w tym trwająca Olimpiada i skaczący Kamil Stoch. Na klatce schodowej w drzwiach mieszkania Joli powitały mnie uśmiechnięte dzieciaki. Szybko przyzwyczaiły się do obecności Pana fotografa, a Milenka bardzo chętnie pozowała i chciała mieć dużo, dużo zdjęć. Iza pomogła Joli zawiązać suknie ślubną i dopasować pozostałe ważne dodatki. Tomek zjawił się w samą porę i zaczęło się błogosławieństwo.'
                    }
                    entryContentP2={
                        'Prawdziwie rodzinna atmosfera i same pozytywne emocje w powietrzu. Po błogosławieństwie udaliśmy się do <a href="https://www.diecezja.pl/parafie/lista-parafii/20-jablonka/parafia-przemienienia-panskiego.html" target="_blank" rel="nofollow">Kościoła Przemienienia Pańskiego w Jabłonce</a> w całości poświęconemu Papieżowi Janowi Pawłowi II. Wiktor i Milenka dzielnie poprowadzili rodziców do ołtarza, a ksiądz przywitał ich ciepło w zakrystii. Ceremonia przebiegła z uśmiechem na ustach i widać było wielką radość Joli i Tomka, jakby długo czekali na to sakramentalne TAK. Wesele odbyło się w Domu Weselnym w Jabłonce znanym pod nazwą <a href="https://przystanwkabanosie.pl/pl/page/27/Restauracja_Jablonka/" target="_blank" rel="nofollow">Przystań w Kabanosie</a>. Po góralsku i nie tylko przygrywał <a href="https://facebook.com/kapelazwyk" target="_blank" rel="nofollow">Zespół Zwyk</a>. Było Despacito, Sławomir i inne weselne szlagiery. Zespół zafundował też zabawę z pończochami, która skutecznie rozbawiła gości weselnych. Oczepiny wyłoniły kolejną parę, która wkrótce pojawi się przed ołtarzem, a zabawa trwała do rana. Działo się dużo jak to w górach. Jolu i Tomku cieszę się bardzo, że mogłem być tam z Wami w tych najważniejszych chwilach Waszego życia. Macie super dzieciaki. Zapraszam do oglądania wybranych zdjęć. Po więcej zapraszam do strefy klienta z hasłem z mojej wizytówki, które można było tradycyjnie już odnaleźć przy ekspresie do kawy.'
                    }
                    slug={"dom-weselny-w-jablonce-zdjecia-slubne-przystan-w-kabanosie"}
                    title={"DOM WESELNY W JABŁONCE, ZDJĘCIA ŚLUBNE PRZYSTAŃ W KABANOSIE - JOLA i TOMEK"}
                    tags={"Dom weselny w Jabłonce, zdjęcia ślubne Przystań w Kabanosie, fotograf na wesele Jabłonka"}
                    date={"10 luty 2017"}
                    menuNames={"JOLA i TOMEK"}
                    menuTitle={"DOM WESELNY W JABŁONCE, ZDJĘCIA ŚLUBNE PRZYSTAŃ W KABANOSIE"}
                    leadNames={"KINGA i MACIEK"}
                    leadTitle={"DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA"}
                    leadUrl={"/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada"}
                    leadImage={process.env.staticS3ImagesPath + "dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
