import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0041.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0050.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0051.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0052.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0055.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0058.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0060.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0061.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0062.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0063.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0070.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0071.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0073.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0075.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0076.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0077.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0084.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0085.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0088.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0094.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0096.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0098.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0099.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0102.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0104.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0105.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0109.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0111.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0112.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakopane_0113.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "paulina_i_bartek_zdjecia_slubne_zajazd_furmanski_zakopane_start.webp"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Zajazd Furma??ski Zakopane"}
                    headDescription={"Serdecznie zapraszam na histori?? Pauliny i Bartka, kt??rzy na co dzie?? mieszkaj?? w Szczecinie, a g??ry pokochali tak bardzo, ??e Zakopane wybrali na ??lub."}
                    headKeywords={"fotograf na wesele zakopane,zdj??cia ??lubne zajazd furma??ski"}
                    headUrl={"https://99foto.pl/paulina-i-bartek-zdjecia-slubne-zajazd-furmanski-zakopane"}
                    entryContentP1={
                        "Paulina i Bartek na co dzie?? mieszkaj?? w Szczecinie. G??ry jednak kochaj?? tak bardzo, ??e Zakopane wybrali na miejsce swojego ??lubu. Zamieszkali w Willi Orion pod okiem przemi??ej gospodyni i zaplanowali sw??j ??lub w Zaje??dzie Furma??skim. Ten dzie?? rozpocz??li??my wcze??nie o godzinie ??smej rano, od fryzur w zakopia??skim salonie fryzjerskim. Nast??pnie makija?? i suknia ??lubna, kt??rej ubieranie odby??o si?? w pokoju z ciekaw?? histori??. Para m??oda powiedzia??a TAK w Urz??dzie Stanu Cywilnego w Zakopanym i zaprosi??a go??ci do zajazdu na ci??g dalszy g??ralskich przyg??d."
                    }
                    entryContentP2={
                        "Na miejscu go??ci przywita??a kapela g??ralska, w graj??cej kt??rej ch??opaki bardzo przypadli do gustu Babci Pauliny. Zabawa trwa??a do bia??ego rana i para DJ-??w, kt??ra zast??pi??a g??rali, gdy Ci wyczerpali sw??j repertuar, ??wietnie poprowadzi??a ca???? imprez??. Pozdrowienia dla go??ci weselnych i mi??ego ogl??dania. Przypominam, ??e blisko 500 zdj???? znajdziecie w strefie klienta."
                    }
                    slug={"paulina-i-bartek-zdjecia-slubne-zajazd-furmanski-zakopane"}
                    title={"ZDJ??CIA ??LUBNE ZAJAZD FURMA??SKI ZAKOPANE - PAULINA i BARTEK"}
                    tags={"fotograf na wesele zakopane,zdj??cia ??lubne zajazd furma??ski"}
                    date={"14 wrze??nia 2015"}
                    menuNames={"PAULINA i BARTEK"}
                    menuTitle={"ZDJ??CIA ??LUBNE ZAJAZD FURMA??SKI ZAKOPANE"}
                    leadNames={"MONIKA i RAFA??"}
                    leadTitle={"ZDJ??CIA ??LUBNE KRAK??W, RESTAURACJA CHOCHO??OWY DW??R"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={process.env.staticS3ImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
