import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0044.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0016.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0020.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0024.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0025.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0026.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0027.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0028.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0033.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0035.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0036.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0037.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0038.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0039.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0040.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0041.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0042.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0043.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0045.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0046.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0047.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0048.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0050.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0055.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0056.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0059.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0063.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0067.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0068.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0069.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0070.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0071.webp", height: 757 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0072.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0073.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0074.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0076.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0084.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0085.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0090.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0093.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0094.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0098.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0102.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0104.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0105.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0106.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0107.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0110.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0113.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0117.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0118.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0123.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "kasia_i_pawel_zdjecia_slubne_w_hotelu_ferro_express_krakow_start.webp"}
                    images={images}
                    headTitle={"Zdjęcia ślubne w Hotelu Ferro Express Kraków"}
                    headDescription={"Zima, zima, zima biało i temperatura minus trzynaście stopni, ale tylko za oknem. Serdecznie zapraszam na zimowy ale pełny kolorów ślub Kasi i Pawła."}
                    headKeywords={"zdjęcia ślubne hotel ferro express kraków,fotograf na ślub kraków,zdjęcia ślubne kraków"}
                    headUrl={"https://99foto.pl/kasia-i-pawel-zdjecia-slubne-w-hotelu-ferro-express-krakow"}
                    entryContentP1={
                        'Zima, zima, zima biało i temperatura minus trzynaście stopni, ale tylko za oknem. Dla odmiany na ślubie Pawła i Kasi dużo kolorów i dużo uśmiechów w rodzinnej atmosferze. Rozpoczęliśmy tradycyjnie od fryzjera wcześnie bo o godzinie ósmej rano w Salonie Avangarda. Następnie udaliśmy się na makijaż. Malowanie trwało dobre dwie godziny i odbywało się przy dźwiękach muzyki Dawida Podsiadło. W mieszkaniu dziadków Kasi odbyło się błogosławieństwo, po którym udaliśmy się do świątecznie przystrojonego <a href="https://parafia-azory.pl/" target="_blank" rel="nofollow">Kościoła Niepokalanego Poczęcia NMP na Azorach</a>.'
                    }
                    entryContentP2={
                        'Obowiązkowe zdjęcie grupowe i chwilę później udaliśmy się w okolicę Tyńca do <a href="https://fero.krakow.pl/" target="_blank" rel="nofollow">Hotelu Ferro Express</a>.  Na sali czekał już na nas zespół, który uświetnił zabawę tego wieczoru. Po setkach życzeń i prezentów, zabawa trwała do białego rana. Piękny dzień, piękne wspomnienia i mam nadzieję obrazujące to zdjęcia – zapraszam serdecznie na reportaż Kasi i Pawła. Na koniec, pozdrowienia dla Pary Młodej, gości i ekipy weselnej. Blisko pięćset zdjęć z tego dnia znajdziecie w strefie klienta podając hasło z mojej wizytówki.'
                    }
                    slug={"kasia-i-pawel-zdjecia-slubne-w-hotelu-ferro-express-krakow"}
                    title={"ZDJĘCIA ŚLUBNE W HOTELU FERRO EXPRESS KRAKÓW - KASIA i PAWEŁ"}
                    tags={"zdjęcia ślubne hotel ferro express kraków,fotograf na ślub kraków,zdjęcia ślubne kraków"}
                    date={"8 stycznia 2016"}
                    menuNames={"KASIA i PAWEŁ"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W HOTELU FERRO EXPRESS KRAKÓW"}
                    leadNames={"JUSTYNA i DAMIA"}
                    leadTitle={"SESJA ZDJĘCIOWA ZAKRZÓWEK, SKAŁKI TWARDOWSKIEGO KRAKÓW"}
                    leadUrl={"/sesja-zdjeciowa-zakrzowek-skalki-twardowskiego-krakow"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
