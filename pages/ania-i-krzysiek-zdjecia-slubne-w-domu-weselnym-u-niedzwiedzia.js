import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0006.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0008.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0011.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0014.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0015.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0019.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0020.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0022.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0024.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0027.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0030.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0034.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0039.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0041.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0044.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0048.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0049.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0050.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0059.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0062.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0065.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0069.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0072.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0074.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0076.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0077.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0078.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0081.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0084.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0087.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0088.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0093.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0094.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0098.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0099.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0100.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0101.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0104.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0107.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0110.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0112.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0114.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_krakow_0115.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "ania_i_krzysiek_zdjecia_slubne_w_domu_weselnym_u_niedzwiedzia_start.webp"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne w Domu Weselnym U Nied??wiedzia"}
                    headDescription={"Mega weselna petarda ??lubna Ani i Krzy??ka. Pi??kni, m??odzi, wspania??e miejsca i przeszalona muzyczna banda... serdecznie zapraszam!"}
                    headKeywords={"fotograf na wesele krak??w, zdj??cia ??lubne w domu weselnym u nied??wiedzia, fotograf na wesele krak??w"}
                    headUrl={"https://99foto.pl/ania-i-krzysiek-zdjecia-slubne-w-domu-weselnym-u-niedzwiedzia"}
                    entryContentP1={
                        '??lub Ani i Krzy??ka odby?? si?? w d??ugi weekend majowy. Na przygotowania wybra??em si?? do domu rodzinnego Ani do Lachowic. Zacz??li??my od zdj???? z makija??u, kt??ry z ka??d?? minut?? podkre??la?? niezwyk???? urod?? Ani. Chwil?? p????niej pojawi?? si?? Krzysiek i rozpocz????o si?? pierwsze w tym dniu b??ogos??awie??stwo. Zapowiedzi pogodowe na ten dzie?? okaza??y si?? zupe??nie nietrafione i mieli??my pi??kn?? pogod?? od pocz??tku do ko??ca. Drugie b??ogos??awie??stwo odby??o si?? ju?? u Krzy??ka w Krakowie. Na ceremoni?? w dobrym nastroju spacerkiem udali??my si?? do <a href="https://krakow.saletyni.pl/" target="_blank" rel="nofollow">Ko??cio??a pw. Matki Bo??ej Salety??skiej</a>. Obr??czki, przez kt??re troch?? wcze??niej mi si?? dosta??o do o??tarza dostarczy??a ma??a gwiazda ca??ej imprezy.'
                    }
                    entryContentP2={
                        'Po ciekawym kazaniu w cudownej atmosferze i jeszcze lepszych humorach, Ania i Krzysiek powiedzieli sobie TAK. Nast??pnie zrobili??my zdj??cie grupowe i m??odzi odebrali moc gor??cych ??ycze?? od swoich go??ci. Zabawa weselna odby??a si?? w <a href="https://www.uniedzwiedzia.pl/" target="_blank" rel="nofollow">Domu Weselnym U Nied??wiedzia</a>. <a href="https://www.facebook.com/zespolselavi/" target="_blank" rel="nofollow">Zesp???? SeLaVi</a> zachwyca?? go??ci rozpi??to??ci?? swojego repertuaru od &#8222;Nothing else matters&#8221; w mistrzowskim wykonaniu do &#8222;Ona widzi we mnie pini??dz&#8221;, kt??re s??ysza??em premierowo w tym sezonie. Ten wiecz??r stanowczo przejdzie do historii. Dzia??o si?? mn??stwo i wsz??dzie. Niesamowity wiecz??r, niesamowici ludzie. Dzi??kuj??, ??e mog??em by?? tego dnia z Wami! Po wi??cej zdj???? zapraszam do strefy klienta. Mi??ego ogl??dania.'
                    }
                    slug={"ania-i-krzysiek-zdjecia-slubne-w-domu-weselnym-u-niedzwiedzia"}
                    title={"ZDJ??CIA ??LUBNE W DOMU WESELNYM U NIED??WIEDZIA - ANIA i KRZYSIEK"}
                    tags={"fotograf na wesele krak??w, zdj??cia ??lubne w domu weselnym u nied??wiedzia, fotograf na wesele krak??w"}
                    date={"6 maja 2016"}
                    menuNames={"ANIA i KRZYSIEK"}
                    menuTitle={"ZDJ??CIA ??LUBNE W DOMU WESELNYM U NIED??WIEDZIA"}
                    leadNames={"MONIKA i RAFA??"}
                    leadTitle={"ZDJ??CIA ??LUBNE KRAK??W, RESTAURACJA CHOCHO??OWY DW??R"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={process.env.staticS3ImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
