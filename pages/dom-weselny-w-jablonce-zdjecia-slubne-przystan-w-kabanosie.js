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
                    headTitle={"Dom weselny w Jab??once, zdj??cia ??lubne Przysta?? w Kabanosie"}
                    headDescription={"Przedsylwestrowa zabawa w Karczmie Pod Kogutkiem. Reporta?? ??lubny z ceremonii za??lubin w Makowie Podhala??skim."}
                    headKeywords={"Dom weselny w Jab??once, zdj??cia ??lubne Przysta?? w Kabanosie, fotograf na wesele Jab??onka"}
                    headUrl={"https://99foto.pl/dom-weselny-w-jablonce-zdjecia-slubne-przystan-w-kabanosie"}
                    entryContentP1={
                        'Sobota rano, jeszcze zima, pocz??tek ferii zimowych w ma??opolsce, na Zakopiance full, korek od Rabki Zdr??j, jad?? do Jab??onki sfotografowa?? ??lub Joli i Tomka razem z ich prze??wietnymi dzieciakami Wiktorem i Milenk??. Fryzjer umkn???? mojej uwadze, natomiast makija?? sfotografowa??em w gabinecie kosmetycznym <a href="https://www.facebook.com/VitaGabinetKosmetycznyStudioPaznokciSolarium/" target="_blank" rel="nofollow">VITA Naturalne Pi??kno w Jab??once</a>. Dziewczyny Basia i Jola zna??y si?? nie od dzi??. Nie wiem czy makija?? by?? wcze??niej pr??bowany, ale wyszed?? perfekcyjnie. Nadszed?? czas na przygotowania u Tomka. Kr??tka chwila na poszukiwanie bia??ego domu, na tyle nowego, ??e w nawigacji jeszcze si?? nie pojawi?? i ??wietna atmosfera, kt??r?? tworzyli wsp??lnie rodzice i brat Tomka. Muszka, garnitur, buty szybko zaj????y swoje miejsce i nie przeszkodzi??a w tym trwaj??ca Olimpiada i skacz??cy Kamil Stoch. Na klatce schodowej w drzwiach mieszkania Joli powita??y mnie u??miechni??te dzieciaki. Szybko przyzwyczai??y si?? do obecno??ci Pana fotografa, a Milenka bardzo ch??tnie pozowa??a i chcia??a mie?? du??o, du??o zdj????. Iza pomog??a Joli zawi??za?? suknie ??lubn?? i dopasowa?? pozosta??e wa??ne dodatki. Tomek zjawi?? si?? w sam?? por?? i zacz????o si?? b??ogos??awie??stwo.'
                    }
                    entryContentP2={
                        'Prawdziwie rodzinna atmosfera i same pozytywne emocje w powietrzu. Po b??ogos??awie??stwie udali??my si?? do <a href="https://www.diecezja.pl/parafie/lista-parafii/20-jablonka/parafia-przemienienia-panskiego.html" target="_blank" rel="nofollow">Ko??cio??a Przemienienia Pa??skiego w Jab??once</a> w ca??o??ci po??wi??conemu Papie??owi Janowi Paw??owi II. Wiktor i Milenka dzielnie poprowadzili rodzic??w do o??tarza, a ksi??dz przywita?? ich ciep??o w zakrystii. Ceremonia przebieg??a z u??miechem na ustach i wida?? by??o wielk?? rado???? Joli i Tomka, jakby d??ugo czekali na to sakramentalne TAK. Wesele odby??o si?? w Domu Weselnym w Jab??once znanym pod nazw?? <a href="https://przystanwkabanosie.pl/pl/page/27/Restauracja_Jablonka/" target="_blank" rel="nofollow">Przysta?? w Kabanosie</a>. Po g??ralsku i nie tylko przygrywa?? <a href="https://facebook.com/kapelazwyk" target="_blank" rel="nofollow">Zesp???? Zwyk</a>. By??o Despacito, S??awomir i inne weselne szlagiery. Zesp???? zafundowa?? te?? zabaw?? z po??czochami, kt??ra skutecznie rozbawi??a go??ci weselnych. Oczepiny wy??oni??y kolejn?? par??, kt??ra wkr??tce pojawi si?? przed o??tarzem, a zabawa trwa??a do rana. Dzia??o si?? du??o jak to w g??rach. Jolu i Tomku ciesz?? si?? bardzo, ??e mog??em by?? tam z Wami w tych najwa??niejszych chwilach Waszego ??ycia. Macie super dzieciaki. Zapraszam do ogl??dania wybranych zdj????. Po wi??cej zapraszam do strefy klienta z has??em z mojej wizyt??wki, kt??re mo??na by??o tradycyjnie ju?? odnale???? przy ekspresie do kawy.'
                    }
                    slug={"dom-weselny-w-jablonce-zdjecia-slubne-przystan-w-kabanosie"}
                    title={"DOM WESELNY W JAB??ONCE, ZDJ??CIA ??LUBNE PRZYSTA?? W KABANOSIE - JOLA i TOMEK"}
                    tags={"Dom weselny w Jab??once, zdj??cia ??lubne Przysta?? w Kabanosie, fotograf na wesele Jab??onka"}
                    date={"10 luty 2017"}
                    menuNames={"JOLA i TOMEK"}
                    menuTitle={"DOM WESELNY W JAB??ONCE, ZDJ??CIA ??LUBNE PRZYSTA?? W KABANOSIE"}
                    leadNames={"KINGA i MACIEK"}
                    leadTitle={"DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA"}
                    leadUrl={"/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada"}
                    leadImage={process.env.staticS3ImagesPath + "dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
