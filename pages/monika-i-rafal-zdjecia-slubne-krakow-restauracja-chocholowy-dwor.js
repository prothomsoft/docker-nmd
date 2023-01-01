import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0004.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0461.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0009.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0016.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0025.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0027.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0033.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0038.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0039.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0044.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0050.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0061.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0060.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0067.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0068.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0071.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0073.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0076.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0077.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0081.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0088.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0139.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0090.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0091.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0093.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0104.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0106.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0105.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0111.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0117.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0123.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0125.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0130.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0132.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0134.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0136.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0131.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0138.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.webp"}
                    images={images}
                    headTitle={"Zdjęcia ślubne Kraków, Restauracja Chochołowy Dwór"}
                    headDescription={"Ciekawych jak bawi się arystokracja IT serdecznie zapraszam na reportaż ze ślubu Moniki i Rafała, który odbył się w Restauracji Chochołowy Dwór."}
                    headKeywords={"fotografia ślubna kraków,reportaż ślubny kraków,zdjęcia ślubne kraków"}
                    headUrl={"https://99foto.pl/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    entryContentP1={
                        'Ta sobota należała do Moniki i Rafała, bohaterów dzisiejszej historii. Poznaliśmy się już przed ślubem podczas sesji narzeczeńskiej w <a href="https://ojcowskiparknarodowy.pl" target="_blank" rel="nofollow">Ojcowskim Parku Narodowym</a>. Zdjęcia z tej sesji trafiły do fotoksiążki, a fotoksiążka trafiła prosto do rodziców. Był to bardzo dobry pomysł na prezent. Przygotowania do tego wielkiego dnia zaczęliśmy w domu Moniki. Ubieranie sukni ślubnej i biżuterii odbyło się z pomocą Iwony i pod czujnym okiem mamy Moniki. Ponieważ Rafał mieszka blisko to również jego odwiedziłem podczas przygotowań. Błogosławieństwo odbyło się w pełnej emocji i wzruszeń kameralnej atmosferze. Po błogosławieństwie udaliśmy się do <a href="https://parafiabolechowice.pl" target="_blank" rel="nofollow">Kościoła św. Piotra i Pawła w Bolechowicach</a>.'
                    }
                    entryContentP2={
                        'Do ceremoni zostało trochę czasu, który Monika wypełniła swoimi uśmiechami. Ksiądz sparafrazował słowa papieża Franciszka, które wypowiedział on podczas Światowych Dni Młodzieży w Krakowie &#8211; chodzi oczywiście o &#8222;proszę, dziękuję, przepraszam i zimną wojnę&#8221;. Było po prostu pięknie.  Wesele odbyło się w położonej nieopodal <a href="https://chocholowydwor.pl" target="_blank" rel="nofollow">Restauracji Chochołowy Dwór w Jerzmanowicach</a>. Zabawa była przednia i na pewno dobrze sfilmowana przez <a href="https://mgfilm.com.pl" target="_blank" rel="nofollow">Movie Groovie Video</a>. Poniżej przedstawiam szereg dowodów zdjęciowych. Dziękuję Monice i Rafałowi, że mogłem być z Wami tego dnia i pozdrawiam Was serdecznie. Zapraszam na reportaż i po więcej zdjęć w strefie klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    title={"ZDJĘCIA ŚLUBNE KRAKÓW, RESTAURACJA CHOCHOŁOWY DWÓR - MONIKA i RAFAŁ"}
                    tags={"fotografia ślubna kraków,reportaż ślubny kraków,zdjęcia ślubne kraków"}
                    date={"19 sierpnia 2016"}
                    menuNames={"MONIKA i RAFAŁ"}
                    menuTitle={"ZDJĘCIA ŚLUBNE KRAKÓW, RESTAURACJA CHOCHOŁOWY DWÓR"}
                    leadNames={"OLA i PAWEŁ"}
                    leadTitle={"DWÓR SZLACHECKI SIECIECHOWICE, REPORTAŻ ŚLUBNY MIECHÓW"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={process.env.staticS3ImagesPath + "dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
