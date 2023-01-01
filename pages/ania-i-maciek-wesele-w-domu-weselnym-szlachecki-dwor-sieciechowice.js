import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0010.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0012.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0014.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0017.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0021.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0024.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0026.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0028.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0035.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0036.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0040.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0043.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0044.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0046.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0049.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0051.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0052.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0055.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0053.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0054.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0063.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0066.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0068.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0070.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0071.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0074.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0075.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0076.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0078.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0081.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0085.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0088.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0095.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0099.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0102.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0104.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0105.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0106.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0109.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0110.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0111.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0113.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0115.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0116.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0121.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0123.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0125.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0126.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0127.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_slubny_krakow_0122.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "ania_i_maciek_wesele_w_domu_weselnym_szlachecki_dwor_sieciechowice_start.webp"}
                    images={images}
                    headTitle={"Zdjęcia ślubne Szlachecki Dwór Sieciechowice"}
                    headDescription={"Zawsze chciałam GÓRALA no i mam - Ania nie mówiła o rowerach. Serdecznie zapraszam na ślub Ani i Maćka w Szlacheckim Dworze Sieciechowice. Miłego oglądania."}
                    headKeywords={"fotograf na wesele kraków,zdjęcia ślubne w domu weselnym dwór szlachecki w sieciechowicach"}
                    headUrl={"https://99foto.pl/ania-i-maciek-wesele-w-domu-weselnym-szlachecki-dwor-sieciechowice"}
                    entryContentP1={
                        'Ania i Maciek poznali się na pierwszym roku studiów, więc na swój wielki dzień, który miałem przyjemność fotografować, czekali aż te studia się wreszcie skończą. W samo południe zaczęliśmy przygotowania w domu rodzinnym Ani w Cianowicach Wielkich - makijaż i ubieranie sukni w dobrych humorach i doborowym towarzystwie sióstr i rodziców. Chwilę później pojawił się Maciek w czerwonym Mercedesie i bieg wydarzeń nabrał tempa. Pogoda była zamówiona więc żadnych stresów z tego powodu nie było. Za sprawą <a href="https://www.facebook.com/ZespolZowiyrucha/" target="_blank" rel="nofollow">Zespółu Zowiyrucha</a> pod Krakowem zapanował góralski klimat. Po pełnym emocji błogosławieństwie udaliśmy się do <a href="https://www.parafiasmardzowice.pl/" target="_blank" rel="nofollow">Kościoła Matki Bożej Różańcowej w Smardzowicach</a>. Ceremonię poprowadził sam Ksiądz Proboszcz.'
                    }
                    entryContentP2={
                        'Wygłosił on piękne kazanie w którym mocno dał do zrozumienia Tacie Ani, że jak jego dwie kolejne córki będą wychodzić za mąż, to tylko w jego kościele. Następnie udaliśmy się do <a href="https://www.szlacheckidwor.com.pl/" target="_blank" rel="nofollow">Domu Weselnego Szlachecki Dwór w Sieciechowicach</a>. Rodzice przywitali Anię i Maćka tradycyjnie chlebem i solą. Sala z łatwością pomieściła dwustu pięćdziesięciu gości całej imprezy. Po obiedzie były życzenia, pierwszy taniec i szaleństwa do samego rana. Wspomniany już zespół <a href="https://www.facebook.com/ZespolZowiyrucha/" target="_blank" rel="nofollow">Zespół Zowiyrucha</a> po oczepinach zafundował gościom 90 minut zabaw, przeplatanych żarcikami ze samiućkich gór (czy jakoś tak) było maksymalnie wesoło. Serdecznie zapraszam do oglądania historii Ani i Maćka, a po więcej zdjęć do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"ania-i-maciek-wesele-w-domu-weselnym-szlachecki-dwor-sieciechowice"}
                    title={"WESELE W DOMU WESELNYM SZLACHECKI DWÓR SIECIECHOWICE - ANIA i MACIEK"}
                    tags={"fotograf na wesele kraków,zdjęcia ślubne w domu weselnym dwór szlachecki w sieciechowicach"}
                    date={"11 czerwca 2016"}
                    menuNames={"ANIA i MACIEK"}
                    menuTitle={"WESELE W DOMU WESELNYM SZLACHECKI DWÓR SIECIECHOWICE"}
                    leadNames={"SYLWIA i BARTEK"}
                    leadTitle={"SESJA ŚLUBNA KRAKÓW"}
                    leadUrl={"/sylwia-i-bartek-sesja-poslubna-krakow"}
                    leadImage={process.env.staticS3ImagesPath + "sylwia_i_bartek_sesja_poslubna_krakow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
