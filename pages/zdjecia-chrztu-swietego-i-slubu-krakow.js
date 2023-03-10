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
                    headTitle={"Fotograf na chrzest Krak??w"}
                    headDescription={"Fotograf na Chrzest ??wi??ty Krak??w. Miejsce wydarze?? Krak??w. Serdecznie zapraszam na kilka zdj???? Chrztu ??wi??tego."}
                    headKeywords={"fotograf na chrzest krak??w, restauracja szafrantu zagacie, fotografia chrztu"}
                    headUrl={"https://99foto.pl/zdjecia-chrztu-swietego-i-slubu-krakow"}
                    entryContentP1={
                        'Niedziela z wyj??tkowo zmienn?? aur??, pogoda typowo marcowa. Osiedle Ku??nicy Ko??????tajowskiej i ??lub niezwyk??y pod wieloma wzgl??dami. Dzie?? PODW??JNIE WA??NY dla ca??ej rodziny. Pierwszoplanowa rola w ca??ej uroczysto??ci zosta??a wype??niona nie przez jak to zwykle przecie?? na ??lubach bywa Pann?? M??od??, ale przez dzielnego obserwatora niedzielnych wydarze?? ma??ego Franka. Kr??tkie przygotowania w mieszkaniu, gdzie go??ci przybywa??o z minuty na minut??, a godzina zero zbli??a??a si?? wielkimi krokami. Franio, kt??ry w modnych szelkach regenerowa?? si??y korzystaj??c z popo??udniowej drzemki. Moc pozytywnej energii pomimo du??ego zamieszania.  Tak min????o b??ogos??awie??stwo rodzic??w i wszyscy udali??my si?? do pobliskiego <a href="https://www.gotyk.home.pl/" target="_blank" rel="nofollow">Ko??cio??a Chrystusa Kr??la w Krakowie</a>, gdzie rozpocz????a si?? ceremonia ??lubu i Chrztu ??wi??tego. Ksi??dz przekazuj??c mn??stwo ??yciowych rad, wyg??osi?? dowcipne kazanie, kt??re wywo??a??o u??miechy na twarzach wielu go??ci.'
                    }
                    entryContentP2={
                        'Pa??stwo M??odzi powiedzieli sobie TAK i nadszed?? czas wyzwania dla maluszka. Franek zachowa?? si?? niezwykle dzielnie podczas polewania g??owy wod?? ??wi??con??. Nieustannie obserwowa?? co te?? dooko??a niego si?? dzieje. Po ceremoni Pa??stwo M??odzi zaprosili swoich go??ci do <a href="https://www.szafrantu.pl/o-nas/62" target="_blank" rel="nofollow">Restauracji Szafrantu w Niepo??omicach</a>. Rodzice powitali M??odych chlebem i sol??, odby?? si?? klasyczny rzut kieliszkami i walka ze zmiotk??. Piotr przeni??s?? Sandr?? przez pr??g Restauracji. Po ??yczeniach i obiedzie zesp???? muzyczny <a href="https://gooroleska.pl/" target="_blank" rel="nofollow">Gooroleska</a> zaprosi?? go??ci na pierwszy taniec i do wsp??lnej zabawy. W trakcie zabawy zaserwowali go??ciom swoje najwi??ksze przeboje, kt??re warto w internecie odnale???? i przes??ucha??. Stolik Pa??stwa M??odych zdecydowanie dawa?? rad?? i ani przez moment nie pozosta?? bierny. Parkiet zape??nia?? si?? w ekspresowym tempie.  Mateusz i Kasia z <a href="https://www.blinkfilm.pl" target="_blank" rel="nofollow">Blink Film z Miechowa</a> skrupulatnie rejestrowali ka??d?? chwil??. Ogl??da??em ich portfolio i nie mam ??adnych w??tpliwo??ci, ??e powstanie mega film. Na koniec dodam, ??e kilka minut przed p????noc?? Franio pojawi?? si?? na sali i sprawdzi?? czy rodzice bawi?? si?? nadal tak dobrze jak kilka godzin wcze??niej. Dzi??kuj?? Wam Sandro i Piotrze za ten magiczny wiecz??r, za zaufanie i pozytywne emocje, by??o ??wietnie. Teraz ju?? zapraszam na kr??tk?? histori?? tego wyj??tkowego dnia.'
                    }
                    slug={"zdjecia-chrztu-swietego-i-slubu-krakow"}
                    title={"FOTOGRAF NA CHRZEST ??WI??TY KRAK??W - SANDRA, PIOTR i FRANEK"}
                    tags={"fotograf na chrzest krak??w, restauracja szafrantu zagacie, fotografia chrztu"}
                    date={"30 kwietnia 2017"}
                    menuNames={"SANDRA, PIOTR i FRANEK"}
                    menuTitle={"ZDJ??CIA CHRZTU ??WI??TEGO i ??LUBU KRAK??W"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
