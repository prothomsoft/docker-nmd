import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0002.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0005.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0007.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0015.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0019.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0021.webp", height: 757 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0023.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0024.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0025.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0026.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0027.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0028.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0031.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0032.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0033.webp", height: 852 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0034.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0035.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0036.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0037.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0038.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0039.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0042.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0043.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0045.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0047.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0049.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0048.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0050.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0051.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0054.webp", height: 816 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0055.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0056.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0057.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0058.webp", height: 816 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0061.webp", height: 816 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0062.webp", height: 816 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0063.webp", height: 816 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0064.webp", height: 816 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0067.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0068.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0070.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0073.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0075.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0077.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0079.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0080.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0081.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0082.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0083.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0087.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0089.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0090.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0091.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0092.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0093.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0095.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0096.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0097.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0098.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0099.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0100.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0101.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0102.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0103.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0104.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0105.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0106.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0107.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0108.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0109.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0111.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0112.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0113.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0114.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0115.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0116.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0117.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0119.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0120.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0121.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0123.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0125.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0126.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0127.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0128.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0129.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0130.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0131.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0132.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0133.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0134.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0135.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0136.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0137.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0138.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0139.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0140.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "pati_i_michal_zdjecia_slubne_w_hotelu_turowka_wieliczka_start.webp"}
                    images={images}
                    headTitle={"Fotograf na ślub - Hotel Turówka - Wieliczka"}
                    headDescription={"Serdecznie zapraszam na przepiękny ślub Patrycji i Michała, który miałem przyjemność fotografować w super miejscu, Hotelu Turówka w Wieliczce."}
                    headKeywords={"fotograf na wesele kraków,zdjęcia ślubne w hotelu turówka wieliczka"}
                    headUrl={"https://99foto.pl/pati-i-michal-zdjecia-slubne-w-hotelu-turowka-wieliczka"}
                    entryContentP1={
                        'Wszystko zaczęło się w <a href="https://akademia-stylu.com.pl" target="_blank" rel="nofollow">Akademii Stylu</a> na naszym wspólnym osiedlu. Po kilku zdjęciach z makijażu przyszła pora na przygotowania Pana Młodego, więc razem z kamerzystą Krzyśkiem z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">Camdesign</a> odwiedziliśmy mieszkanie Michała. Następnie powrót na Bociana i błogosławieństwo, po którym udaliśmy się do <a href="https://kosciol-sebastian.pl" target="_blank" rel="nofollow">Kościoła św. Sebastiana</a> w Wieliczce. Po ceremonii, w której aktywnie pomagały dzieci i spektakularnym wyjściu z kościoła, zrobiliśmy wspólne zdjęcie grupowe. Według planu na życzenia goście musieli poczekać, aż dotrą na salę weselną.'
                    }
                    entryContentP2={
                        'Udaliśmy się więc do <a href="https://www.turowka.pl/" target="_blank" rel="nofollow">Hotelu Turówka</a> w Wieliczce, wyjątkowego miejsca z klimatycznym wystrojem. Na sali czekał już na nas zespół Tornado Band, który uświetnił zabawę tego wieczoru. Po setkach życzeń przeplatanych kopertami, zabawa trwała do białego rana. Piękny dzień, piękne wspomnienia i mam nadzieję obrazujące to zdjęcia &#8211; zapraszam serdecznie na reportaż Patrycji i Michała. Na koniec, pozdrowienia dla Pary Młodej, gości i ekipy weselnej. Blisko pięćset zdjęć z tego dnia znajdziecie w strefie klienta podając hasło z mojej wizytówki.'
                    }
                    slug={"pati-i-michal-zdjecia-slubne-w-hotelu-turowka-wieliczka"}
                    title={"ZDJĘCIA ŚLUBNE W HOTELU TURÓWKA - WIELICZKA - PATI i MICHAŁ"}
                    tags={"plener strbskie pleso, popradzki staw zdjęcia ślubne, sesja ślubna Słowacja"}
                    date={"23 sierpnia 2015"}
                    menuNames={"PATI i MICHAŁ"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W HOTELU TURÓWKA - WIELICZKA"}
                    leadNames={"OLA i PAWEŁ"}
                    leadTitle={"DWÓR SZLACHECKI SIECIECHOWICE, REPORTAŻ ŚLUBNY MIECHÓW"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={process.env.staticImagesPath + "dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
