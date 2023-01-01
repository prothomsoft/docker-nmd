import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0135.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0006.webp", height: 382 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0008.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0015.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0021.webp", height: 762 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0022.webp", height: 526 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0024.webp", height: 527 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0026.webp", height: 806 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0032.webp", height: 527 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0037.webp", height: 805 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0038.webp", height: 382 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0039.webp", height: 527 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0042.webp", height: 527 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0048.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0050.webp", height: 527 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0054.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0056.webp", height: 1007 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0057.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0061.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0063.webp", height: 527 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0064.webp", height: 527 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0067.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0068.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0069.webp", height: 527 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0070.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0071.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0074.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0077.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0075.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0076.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0079.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0073.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0080.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0081.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0083.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0087.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0089.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0091.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0092.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0093.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0094.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0096.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0097.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0099.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0100.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0101.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0102.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0103.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0104.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0105.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0106.webp", height: 382 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0108.webp", height: 762 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0109.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0110.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0111.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0112.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0113.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0114.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0115.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0116.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0117.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0118.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0119.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0120.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0121.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0123.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0124.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0125.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0126.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0127.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0128.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0130.webp", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0132.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0133.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0136.webp", height: 850 },
            { imageSrc: "/static/blog/2017/08/99FOTOPL_SPP_002.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0138.webp", height: 850 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0139.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0140.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0141.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0152.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0143.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0144.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0145.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0147.webp", height: 806 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0153.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0146.webp", height: 850 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0149.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0151.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0150.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0148.webp", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0142.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "fotograf_na_wesele_jordanow_straznica_pcim_start.webp"}
                    images={images}
                    headTitle={"Fotograf na wesele Jordanów, Strażnica Pcim"}
                    headDescription={"Serdecznie zapraszam do Jordanowa, Strażnicy w Pcimiu i Kościoła w Naprawie gdzie sakramentalne TAK powiedzieli sobie Kasia i Grzesiek. Miłego oglądania."}
                    headKeywords={"fotograf na wesele jordanów,strażnica pcim"}
                    headUrl={"https://99foto.pl/fotograf-na-wesele-jordanow-straznica-pcim"}
                    entryContentP1={
                        "Sobota w długi sierpniowy weekend rozpoczęła się wcześnie, bo o godzinie ósmej rano. Jadąc Zakopianką do Jordanowa na makijaż Kasi miałem okazje podziwiac spowodowane zmiennością aury wspaniałe niemalże górskie widoki. Trudno było zatrzymać się w Bystrej Podhalańskiej, bo aż chciałoby się popędzić dalej. Ale właśnie w Jordanowie Kasia rozpoczęła swoje przygotowania do ślubu. Fajny gabinet kosmetyczny i chwilę później jeszcze nie do końca zamieszkały ale gustownie urządzony salon fryzjerski w Rabce Zdrój."
                    }
                    entryContentP2={
                        'Kiedy fryzura i makijaż były gotowe siostra Kasi Ewa pomogła ubrać suknię ślubną, buty i biżuterię (wiem, że już za rok Kasia się siostrze odwdzięczy). Następnie razem z kamerzystą Kubą, jak się później okazało, Andrzejem Wajdą całego ślubu, udaliśmy się do domu rodzinnego Grześka. Pierwsze i drugie błogosławieństwo w świetnej rodzinnej atmosferze i chwilę później nerwowe oczekiwanie na walczącego z korkami na Zakopiance księdza w <a href="https://www.naprawa.parafia.info.pl/" target="blank">Kościele Parafialnym Św. Siostry Faustyny Kowalskiej w Naprawie</a>. Kwadrans studencki i rozpoczęliśmy ceremonię podczas której młodzi powiedzieli sobie sakramentalne TAK. Po zdjęciu grupowym udaliśmy się na <a href="https://www.osp.pcim.pl/" target="_blank" rel="nofollow">salę weselną w Strażnicy OSP w Pcimiu</a>. Rodzice przywitali młodych chlebem i solą, goście złożyli gorące życzenia i z podziwem oglądali pierwszy taniec Kasi i Grześka. Pełny parkiet to zasługa <a href="https://www.wiarusy.info/" target="_blank" rel="nofollow">Zespółu Muzycznego, Kapeli Wiarusy z Mszany Dolnej</a>. Świetny, spędzony w miłym towarzystwie dzień. Cieszę się bardzo, że mogłem być tam z Wami w tych najważniejszych chwilach Waszego życia. Zapraszam do oglądania, a po więcej zdjęć do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"fotograf-na-wesele-jordanow-straznica-pcim"}
                    title={"FOTOGRAF NA WESELE JORDANÓW, STRAŻNICA PCIM - KASIA i GRZEGORZ"}
                    tags={"fotograf na wesele jordanów,strażnica pcim"}
                    date={"18 sierpnia 2017"}
                    menuNames={"KASIA i GRZEGORZ"}
                    menuTitle={"FOTOGRAF NA WESELE JORDANÓW, STRAŻNICA PCIM"}
                    leadNames={"JULIA i PIOTR"}
                    leadTitle={"SESJA ZDJĘCIOWA PARK W MOGILANACH, ZAKRZÓWEK i KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-park-w-mogilanach-zakrzowek-i-kazimierz"}
                    leadImage={process.env.staticImagesPath + "sesja_zdjeciowa_park_w_mogilanach_zakrzowek_i_kazimierz_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
