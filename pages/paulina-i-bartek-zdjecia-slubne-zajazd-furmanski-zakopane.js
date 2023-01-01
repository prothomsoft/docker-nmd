import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0004.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0007.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0008.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0010.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0011.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0013.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0014.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0015.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0016.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0017.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0021.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0022.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0023.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0029.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0030.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0032.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0041.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0050.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0051.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0052.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0055.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0057.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0058.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0060.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0061.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0062.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0063.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0067.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0070.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0071.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0073.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0075.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0076.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0077.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0079.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0080.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0083.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0084.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0085.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0087.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0088.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0089.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0091.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0092.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0093.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0094.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0096.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0097.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0098.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0099.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0100.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0101.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0102.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0103.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0104.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0105.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0108.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0109.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0111.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0112.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0113.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "paulina_i_bartek_zdjecia_slubne_zajazd_furmanski_zakopane_start.webp"}
                    images={images}
                    headTitle={"Zdjęcia ślubne Zajazd Furmański Zakopane"}
                    headDescription={"Serdecznie zapraszam na historię Pauliny i Bartka, którzy na co dzień mieszkają w Szczecinie, a góry pokochali tak bardzo, że Zakopane wybrali na ślub."}
                    headKeywords={"fotograf na wesele zakopane,zdjęcia ślubne zajazd furmański"}
                    headUrl={"https://99foto.pl/paulina-i-bartek-zdjecia-slubne-zajazd-furmanski-zakopane"}
                    entryContentP1={
                        "Paulina i Bartek na co dzień mieszkają w Szczecinie. Góry jednak kochają tak bardzo, że Zakopane wybrali na miejsce swojego ślubu. Zamieszkali w Willi Orion pod okiem przemiłej gospodyni i zaplanowali swój ślub w Zajeździe Furmańskim. Ten dzień rozpoczęliśmy wcześnie o godzinie ósmej rano, od fryzur w zakopiańskim salonie fryzjerskim. Następnie makijaż i suknia ślubna, której ubieranie odbyło się w pokoju z ciekawą historią. Para młoda powiedziała TAK w Urzędzie Stanu Cywilnego w Zakopanym i zaprosiła gości do zajazdu na ciąg dalszy góralskich przygód."
                    }
                    entryContentP2={
                        "Na miejscu gości przywitała kapela góralska, w grającej której chłopaki bardzo przypadli do gustu Babci Pauliny. Zabawa trwała do białego rana i para DJ-ów, która zastąpiła górali, gdy Ci wyczerpali swój repertuar, świetnie poprowadziła całą imprezę. Pozdrowienia dla gości weselnych i miłego oglądania. Przypominam, że blisko 500 zdjęć znajdziecie w strefie klienta."
                    }
                    slug={"paulina-i-bartek-zdjecia-slubne-zajazd-furmanski-zakopane"}
                    title={"ZDJĘCIA ŚLUBNE ZAJAZD FURMAŃSKI ZAKOPANE - PAULINA i BARTEK"}
                    tags={"fotograf na wesele zakopane,zdjęcia ślubne zajazd furmański"}
                    date={"14 września 2015"}
                    menuNames={"PAULINA i BARTEK"}
                    menuTitle={"ZDJĘCIA ŚLUBNE ZAJAZD FURMAŃSKI ZAKOPANE"}
                    leadNames={"MONIKA i RAFAŁ"}
                    leadTitle={"ZDJĘCIA ŚLUBNE KRAKÓW, RESTAURACJA CHOCHOŁOWY DWÓR"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={process.env.staticImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
