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
                    headTitle={"Hotel Junior Krak??w - Reporta?? ??lubny"}
                    headDescription={
                        "Czy widzieli??cie kiedy?? ponad sto wype??nionych helem, ??wiec??cych ledowych serduchowych balonik??w wystrzelonych w kosmos kilka minut po p????nocy? Je??eli nie to zapraszam do wklikni??cia w reporta?? ze ??lubu Magdy i Piotrka. Mi??ego ogl??dania."
                    }
                    headKeywords={"Reporta?? ??lubny Hotel Junior Krak??w, balonowy sza??"}
                    headUrl={"https://99foto.pl/reportaz-slubny-hotel-junior-krakow-balonowy-szal"}
                    entryContentP1={
                        'Du??y dom, profesjonalna fryzjerka i makija??ystka oraz niezast??pieni pomocnicy pe??ni humoru, plus kilka czelend??ing task??w i klimat pod przygotowania mamy zapewniony. Tak w du??ym skr??cie m??g??bym przedstawi?? pocz??tek pi??tkowych przygotowa?? Magdy, kt??re mia??y miejsce w Skawinie. Przed dwunast?? kiedy ju?? fryzura i makija?? by??y gotowe, a na mojej karcie pami??ci w aparacie zapisany finalny look, wybrali??my si?? do Piotrka. Mia??o by?? tam kilku ziomk??w i spoko klimat... i tak w??a??nie by??o. Dru??bowie w liczno??ci po??owy przeci??tnej klasy w szkole podstawowej za??o??yli takie same muchy, a kiedy wbili si?? w garnitury to wygl??dali lepiej ni?? reprezentacja Polski na plakacie Vistuli. Nie zabrak??o te?? kr??tkiego b??ogos??awie??stwa i kilku tradycyjnych przy??piewek zaserwowanych przez S??awka, kt??ry z zawodow?? ta??m?? kr??ci?? imprez?? do przodu. Kolor r????owy zdominowa?? mieszkanie rodzic??w Magdy. Dziewczyny sprawnie przypie??y welon, butonierki i po kr??tkim b??ogos??awie??stwie udali??my si?? do <a href="https://www.szymonijuda.pl/" target="_blank" rel="nofollow">Ko??cio??a ??wi??tych Aposto????w Szymona i Judy Tadeusza w Skawinie</a>.'
                    }
                    entryContentP2={
                        'Ksi????a przywitali Par?? M??od?? w zachrystii, dope??niono formalno??ci i ceremonia za??lubin wystartowa??a. Po sakramentanym TAK nadesz??a pora na klasyczne wyj??cie z ko??cio??a przez szpaler starannie u??o??ony przez druhny i dru??b??w ??lubnych. Nast??pnie czerwony Mustang przewi??z?? Magd?? i Piotra do <a href="https://junior.krakow.pl/">Hotel Junior w Krakowie</a>, rodzice przywitali Par?? M??od?? chlebem i sol??, brat Piotrka mocno powalczy?? z petard?? i rozpocz????y si?? ??yczenia. By??y gor??ce, jak atmosfera ca??ego ??lubu i bez nawet 10 sekund nieprzerwanych salw?? ??miechu. Pierwszy taniec otworzy?? parkiet, na kt??rym swoje instrumenty roz??o??y?? <a href="https://www.primaband.pl" target="_blank" rel="nofollow">Zesp???? muzyczny Prima Band</a>. Minutk?? przed burz??, kt??rej jednak nie by??o, wyskoczyli??my na zdj??cia grupowe i plenerowe. Dalej by??y ju?? same atrakcje, tort weselny, zabawy oczepinowe i wi??nia na torcie, dmuchane helem i pod??wietlane ledami baloniki, kt??re polecia??y wysoko, wysoko, bardzo wysoko. By??y osoby, kt??ry widzia??y, ??e u??o??y??y si?? w powietrzu w krza??t serca... no c???? m??j aparat nie by??, a?? tak spostrzegawczy. Nie mog?? zapomnie?? doda??, ??e ka??d?? minut?? tych niezwyk??ych wydarze?? filmowa?? m??j dobry kolega Krzysiek z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">Pracowni Filmu ??lubnego CAMDESIGN</a>, kt??rego bardzo wszystkim przysz??ym param m??odym polecam. Magdo i Piotrze, dzi??kuj??, ??e mog??em by?? tam z Wami i zapraszam na zdj??cia. Tym razem dzia??o si?? tak du??o, ??e blisko 600 zdj???? znajdziecie w strefie klienta wpisuj??c has??o z mojej wizyt??wki. Mi??ego ogl??dania.'
                    }
                    slug={"reportaz-slubny-hotel-junior-krakow-balonowy-szal"}
                    title={"REPORTA?? ??LUBNY HOTEL JUNIOR KRAK??W, BALONOWY SZA?? - MAGDALENA i PIOTR"}
                    tags={"Reporta?? ??lubny Hotel Junior Krak??w, fotograf na wesele Skawina"}
                    date={"2 czerwca 2018"}
                    menuNames={"MAGDALENA i PIOTR"}
                    menuTitle={"REPORTA?? ??LUBNY HOTEL JUNIOR KRAK??W, BALONOWY SZA??"}
                    leadNames={"MA??GORZATA I RAFA??"}
                    leadTitle={"PLENER ??LUBNY S??OWACJA, ??OMNICKI STAW"}
                    leadUrl={"/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    leadImage={process.env.staticS3ImagesPath + "plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.webp"}
                />
            
        );
};

export default BlogPageComponent;
