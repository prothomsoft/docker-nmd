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
                    headTitle={"Zdj??cia ??lubne Szlachecki Dw??r Sieciechowice"}
                    headDescription={"Zawsze chcia??am G??RALA no i mam - Ania nie m??wi??a o rowerach. Serdecznie zapraszam na ??lub Ani i Ma??ka w Szlacheckim Dworze Sieciechowice. Mi??ego ogl??dania."}
                    headKeywords={"fotograf na wesele krak??w,zdj??cia ??lubne w domu weselnym dw??r szlachecki w sieciechowicach"}
                    headUrl={"https://99foto.pl/ania-i-maciek-wesele-w-domu-weselnym-szlachecki-dwor-sieciechowice"}
                    entryContentP1={
                        'Ania i Maciek poznali si?? na pierwszym roku studi??w, wi??c na sw??j wielki dzie??, kt??ry mia??em przyjemno???? fotografowa??, czekali a?? te studia si?? wreszcie sko??cz??. W samo po??udnie zacz??li??my przygotowania w domu rodzinnym Ani w Cianowicach Wielkich - makija?? i ubieranie sukni w dobrych humorach i doborowym towarzystwie si??str i rodzic??w. Chwil?? p????niej pojawi?? si?? Maciek w czerwonym Mercedesie i bieg wydarze?? nabra?? tempa. Pogoda by??a zam??wiona wi??c ??adnych stres??w z tego powodu nie by??o. Za spraw?? <a href="https://www.facebook.com/ZespolZowiyrucha/" target="_blank" rel="nofollow">Zesp????u Zowiyrucha</a> pod Krakowem zapanowa?? g??ralski klimat. Po pe??nym emocji b??ogos??awie??stwie udali??my si?? do <a href="https://www.parafiasmardzowice.pl/" target="_blank" rel="nofollow">Ko??cio??a Matki Bo??ej R????a??cowej w Smardzowicach</a>. Ceremoni?? poprowadzi?? sam Ksi??dz Proboszcz.'
                    }
                    entryContentP2={
                        'Wyg??osi?? on pi??kne kazanie w kt??rym mocno da?? do zrozumienia Tacie Ani, ??e jak jego dwie kolejne c??rki b??d?? wychodzi?? za m????, to tylko w jego ko??ciele. Nast??pnie udali??my si?? do <a href="https://www.szlacheckidwor.com.pl/" target="_blank" rel="nofollow">Domu Weselnego Szlachecki Dw??r w Sieciechowicach</a>. Rodzice przywitali Ani?? i Ma??ka tradycyjnie chlebem i sol??. Sala z ??atwo??ci?? pomie??ci??a dwustu pi????dziesi??ciu go??ci ca??ej imprezy. Po obiedzie by??y ??yczenia, pierwszy taniec i szale??stwa do samego rana. Wspomniany ju?? zesp???? <a href="https://www.facebook.com/ZespolZowiyrucha/" target="_blank" rel="nofollow">Zesp???? Zowiyrucha</a> po oczepinach zafundowa?? go??ciom 90 minut zabaw, przeplatanych ??arcikami ze samiu??kich g??r (czy jako?? tak) by??o maksymalnie weso??o. Serdecznie zapraszam do ogl??dania historii Ani i Ma??ka, a po wi??cej zdj???? do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"ania-i-maciek-wesele-w-domu-weselnym-szlachecki-dwor-sieciechowice"}
                    title={"WESELE W DOMU WESELNYM SZLACHECKI DW??R SIECIECHOWICE - ANIA i MACIEK"}
                    tags={"fotograf na wesele krak??w,zdj??cia ??lubne w domu weselnym dw??r szlachecki w sieciechowicach"}
                    date={"11 czerwca 2016"}
                    menuNames={"ANIA i MACIEK"}
                    menuTitle={"WESELE W DOMU WESELNYM SZLACHECKI DW??R SIECIECHOWICE"}
                    leadNames={"SYLWIA i BARTEK"}
                    leadTitle={"SESJA ??LUBNA KRAK??W"}
                    leadUrl={"/sylwia-i-bartek-sesja-poslubna-krakow"}
                    leadImage={process.env.staticS3ImagesPath + "sylwia_i_bartek_sesja_poslubna_krakow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
