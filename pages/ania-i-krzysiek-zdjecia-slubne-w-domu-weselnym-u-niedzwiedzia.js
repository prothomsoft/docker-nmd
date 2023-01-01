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
                    headTitle={"Zdjęcia ślubne w Domu Weselnym U Niedźwiedzia"}
                    headDescription={"Mega weselna petarda ślubna Ani i Krzyśka. Piękni, młodzi, wspaniałe miejsca i przeszalona muzyczna banda... serdecznie zapraszam!"}
                    headKeywords={"fotograf na wesele kraków, zdjęcia ślubne w domu weselnym u niedźwiedzia, fotograf na wesele kraków"}
                    headUrl={"https://99foto.pl/ania-i-krzysiek-zdjecia-slubne-w-domu-weselnym-u-niedzwiedzia"}
                    entryContentP1={
                        'Ślub Ani i Krzyśka odbył się w długi weekend majowy. Na przygotowania wybrałem się do domu rodzinnego Ani do Lachowic. Zaczęliśmy od zdjęć z makijażu, który z każdą minutą podkreślał niezwykłą urodę Ani. Chwilę później pojawił się Krzysiek i rozpoczęło się pierwsze w tym dniu błogosławieństwo. Zapowiedzi pogodowe na ten dzień okazały się zupełnie nietrafione i mieliśmy piękną pogodę od początku do końca. Drugie błogosławieństwo odbyło się już u Krzyśka w Krakowie. Na ceremonię w dobrym nastroju spacerkiem udaliśmy się do <a href="https://krakow.saletyni.pl/" target="_blank" rel="nofollow">Kościoła pw. Matki Bożej Saletyńskiej</a>. Obrączki, przez które trochę wcześniej mi się dostało do ołtarza dostarczyła mała gwiazda całej imprezy.'
                    }
                    entryContentP2={
                        'Po ciekawym kazaniu w cudownej atmosferze i jeszcze lepszych humorach, Ania i Krzysiek powiedzieli sobie TAK. Następnie zrobiliśmy zdjęcie grupowe i młodzi odebrali moc gorących życzeń od swoich gości. Zabawa weselna odbyła się w <a href="https://www.uniedzwiedzia.pl/" target="_blank" rel="nofollow">Domu Weselnym U Niedźwiedzia</a>. <a href="https://www.facebook.com/zespolselavi/" target="_blank" rel="nofollow">Zespół SeLaVi</a> zachwycał gości rozpiętością swojego repertuaru od &#8222;Nothing else matters&#8221; w mistrzowskim wykonaniu do &#8222;Ona widzi we mnie piniądz&#8221;, które słyszałem premierowo w tym sezonie. Ten wieczór stanowczo przejdzie do historii. Działo się mnóstwo i wszędzie. Niesamowity wieczór, niesamowici ludzie. Dziękuję, że mogłem być tego dnia z Wami! Po więcej zdjęć zapraszam do strefy klienta. Miłego oglądania.'
                    }
                    slug={"ania-i-krzysiek-zdjecia-slubne-w-domu-weselnym-u-niedzwiedzia"}
                    title={"ZDJĘCIA ŚLUBNE W DOMU WESELNYM U NIEDŹWIEDZIA - ANIA i KRZYSIEK"}
                    tags={"fotograf na wesele kraków, zdjęcia ślubne w domu weselnym u niedźwiedzia, fotograf na wesele kraków"}
                    date={"6 maja 2016"}
                    menuNames={"ANIA i KRZYSIEK"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W DOMU WESELNYM U NIEDŹWIEDZIA"}
                    leadNames={"MONIKA i RAFAŁ"}
                    leadTitle={"ZDJĘCIA ŚLUBNE KRAKÓW, RESTAURACJA CHOCHOŁOWY DWÓR"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={process.env.staticS3ImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
