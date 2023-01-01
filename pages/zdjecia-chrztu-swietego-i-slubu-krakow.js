import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0155.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0011.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0017.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0043.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0046.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0156.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0088.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0117.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0123.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0131.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0137.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0138.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0147.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0150.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0151.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0152.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0153.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0154.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/04/fotograf_slubny_krakow_0136.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "zdjecia_chrztu_swietego_i_slubu_krakow_start.webp"}
                    images={images}
                    headTitle={"Fotograf na chrzest Kraków"}
                    headDescription={"Fotograf na Chrzest Święty Kraków. Miejsce wydarzeń Kraków. Serdecznie zapraszam na kilka zdjęć Chrztu Świętego."}
                    headKeywords={"fotograf na chrzest kraków, restauracja szafrantu zagacie, fotografia chrztu"}
                    headUrl={"https://99foto.pl/zdjecia-chrztu-swietego-i-slubu-krakow"}
                    entryContentP1={
                        'Niedziela z wyjątkowo zmienną aurą, pogoda typowo marcowa. Osiedle Kuźnicy Kołłątajowskiej i ślub niezwykły pod wieloma względami. Dzień PODWÓJNIE WAŻNY dla całej rodziny. Pierwszoplanowa rola w całej uroczystości została wypełniona nie przez jak to zwykle przecież na ślubach bywa Pannę Młodą, ale przez dzielnego obserwatora niedzielnych wydarzeń małego Franka. Krótkie przygotowania w mieszkaniu, gdzie gości przybywało z minuty na minutę, a godzina zero zbliżała się wielkimi krokami. Franio, który w modnych szelkach regenerował siły korzystając z popołudniowej drzemki. Moc pozytywnej energii pomimo dużego zamieszania.  Tak minęło błogosławieństwo rodziców i wszyscy udaliśmy się do pobliskiego <a href="https://www.gotyk.home.pl/" target="_blank" rel="nofollow">Kościoła Chrystusa Króla w Krakowie</a>, gdzie rozpoczęła się ceremonia Ślubu i Chrztu Świętego. Ksiądz przekazując mnóstwo życiowych rad, wygłosił dowcipne kazanie, które wywołało uśmiechy na twarzach wielu gości.'
                    }
                    entryContentP2={
                        'Państwo Młodzi powiedzieli sobie TAK i nadszedł czas wyzwania dla maluszka. Franek zachował się niezwykle dzielnie podczas polewania głowy wodą święconą. Nieustannie obserwował co też dookoła niego się dzieje. Po ceremoni Państwo Młodzi zaprosili swoich gości do <a href="https://www.szafrantu.pl/o-nas/62" target="_blank" rel="nofollow">Restauracji Szafrantu w Niepołomicach</a>. Rodzice powitali Młodych chlebem i solą, odbył się klasyczny rzut kieliszkami i walka ze zmiotką. Piotr przeniósł Sandrę przez próg Restauracji. Po życzeniach i obiedzie zespół muzyczny <a href="https://gooroleska.pl/" target="_blank" rel="nofollow">Gooroleska</a> zaprosił gości na pierwszy taniec i do wspólnej zabawy. W trakcie zabawy zaserwowali gościom swoje największe przeboje, które warto w internecie odnaleźć i przesłuchać. Stolik Państwa Młodych zdecydowanie dawał radę i ani przez moment nie pozostał bierny. Parkiet zapełniał się w ekspresowym tempie.  Mateusz i Kasia z <a href="https://www.blinkfilm.pl" target="_blank" rel="nofollow">Blink Film z Miechowa</a> skrupulatnie rejestrowali każdą chwilę. Oglądałem ich portfolio i nie mam żadnych wątpliwości, że powstanie mega film. Na koniec dodam, że kilka minut przed północą Franio pojawił się na sali i sprawdził czy rodzice bawią się nadal tak dobrze jak kilka godzin wcześniej. Dziękuję Wam Sandro i Piotrze za ten magiczny wieczór, za zaufanie i pozytywne emocje, było świetnie. Teraz już zapraszam na krótką historię tego wyjątkowego dnia.'
                    }
                    slug={"zdjecia-chrztu-swietego-i-slubu-krakow"}
                    title={"FOTOGRAF NA CHRZEST ŚWIĘTY KRAKÓW - SANDRA, PIOTR i FRANEK"}
                    tags={"fotograf na chrzest kraków, restauracja szafrantu zagacie, fotografia chrztu"}
                    date={"30 kwietnia 2017"}
                    menuNames={"SANDRA, PIOTR i FRANEK"}
                    menuTitle={"ZDJĘCIA CHRZTU ŚWIĘTEGO i ŚLUBU KRAKÓW"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
