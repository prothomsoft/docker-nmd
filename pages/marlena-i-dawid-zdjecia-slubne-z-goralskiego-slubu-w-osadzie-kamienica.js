import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0003.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0008.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0009.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0012.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0010.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0013.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0011.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0016.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0021.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0023.webp", height: 806 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0028.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0031.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0034.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0040.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0041.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0043.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0044.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0045.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0046.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0048.webp", height: 395 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0049.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0050.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0057.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0058.webp", height: 816 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0060.webp", height: 816 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0061.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0065.webp", height: 816 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0066.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0067.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0072.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0073.webp", height: 816 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0074.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0077.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0079.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0080.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0081.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0083.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0082.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0084.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0085.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0086.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0087.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0088.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0089.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0091.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0092.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0093.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0096.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0097.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0099.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0100.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0101.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0102.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0103.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0104.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0105.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0108.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0109.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0111.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0112.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0113.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0114.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0115.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0116.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0117.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0119.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0120.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0121.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0123.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0125.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0126.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0127.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0161.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0129.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0130.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0131.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0132.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0133.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0134.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0135.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0136.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0137.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0138.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0139.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0140.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0141.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0142.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0143.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0144.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0145.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0146.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0147.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0148.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0149.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0150.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0151.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0152.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0153.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0154.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0155.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0160.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0157.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0158.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0159.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0156.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_krakow_0128.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "marlena_i_dawid_zdjecia_slubne_z_goralskiego_slubu_w_osadzie_kamienica_start.webp"}
                    images={images}
                    headTitle={"Zdjęcia ślubne, góralski ślub w osadzie kamienica"}
                    headDescription={"Ostatnia sobota to powrót w tamte strony i góralski ślub Marleny i Dawida w miejscowości Kamienica. Górale to potrafią się bawić. Fotograf ślubny zaprasza."}
                    headKeywords={"fotograf na wesele kraków,reportaż ślubny kraków"}
                    headUrl={"https://99foto.pl/marlena-i-dawid-zdjecia-slubne-z-goralskiego-slubu-w-osadzie-kamienica"}
                    entryContentP1={
                        'Jakieś siedem lat temu w miejscowości Maniowy goście bawili się na moim weselu. Ostatnia sobota to powrót w tamte góralskie strony i góralski ślub Marleny i Dawida w miejscowości Kamienica, przez którą w drodze do Krościenka przejeżdżałem już setki razy. Przygotowanie rozpoczęliśmy w <a href="https://www.facebook.com/Salon-Fryzjerski-anette-1464590760459423/" target="_blank" rel="nofollow">Salonie Fryzjerskim Annete</a> w Szczawie. Gdy fryzura była już gotowa pojechaliśmy do domu Marleny, gdzie kontynuowaliśmy przygotowania. Góralscy drużbowie znali setki przyśpiewek i w finlandzkim tonie długo nie pozwalali wyjść Marlenie z domu. Błogosławieństwo i chwilę później byliśmy już w drodze do <a href="https://www.parafia-kamienica-tarnow.pl/" target="_blank" rel="nofollow">Kościoła Przemienienia Pańskiego w Kamienicy</a>. Po drodze na młodych czekały trzy bramy przygotowane z największą starannością i według góralskiej tradycji.'
                    }
                    entryContentP2={
                        'W kościele okazało się, że atmosfera niczym nie różniła się od tej w domu. Od pierwszych minut dało się wyczuć przyjacielskie relacje księży i młodych, jak się potem dowiedziałem budowane przez lata ich uczestnictwa w życiu religijnym parafii. Na mszy nie zabrakło oczywiście pięknej oprawy muzycznej. W <a href="https://www.osada-kamienica.ns48.pl/" target="_blank" rel="nofollow">Osadzie Kamienica</a> rodzice przywitali młodych chlebem i solą. <a href="https://www.jarezytko.pl/pl_PL/" target="_blank" rel="nofollow">Zespół Jare Zytko</a> dbał o świetny klimat na parkiecie. Szalona zabawa i super ekipa z góralską kulturą w sercach potwierdza, że czasem warto wybrać się dalej niż Kraków. Wasz fotograf ślubny dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i genialną atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"marlena-i-dawid-zdjecia-slubne-z-goralskiego-slubu-w-osadzie-kamienica"}
                    title={"ZDJĘCIA ŚLUBNE Z GÓRALSKIEGO ŚLUBU W OSADZIE KAMIENICA - MARLENA i DAWID"}
                    tags={"fotograf na wesele kraków,reportaż ślubny kraków"}
                    date={"2 września 2016"}
                    menuNames={"MARLENA i DAWID"}
                    menuTitle={"ZDJĘCIA ŚLUBNE Z GÓRALSKIEGO ŚLUBU W OSADZIE KAMIENICA"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
