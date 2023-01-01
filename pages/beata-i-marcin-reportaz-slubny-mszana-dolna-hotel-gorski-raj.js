import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2016/06/beata.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0002.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0003.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0005.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0008.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0007.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0012.webp", height: 527 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0013.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0017.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0018.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0019.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0021.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0022.webp", height: 527 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0023.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0027.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0028.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0030.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0031.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0033.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0035.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0038.webp", height: 383 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0039.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0041.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0042.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0043.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0044.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0046.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0048.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0049.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0050.webp", height: 852 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0054.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0056.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0057.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0058.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0059.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0060.webp", height: 527 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0061.webp", height: 806 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0062.webp", height: 526 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0063.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0064.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0065.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0131.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0067.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0068.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0070.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0071.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0073.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0074.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0075.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0077.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0078.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0079.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0080.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0132.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0083.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0084.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0085.webp", height: 383 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0086.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0087.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0089.webp", height: 852 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0091.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0093.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0096.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0097.webp", height: 383 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0099.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0100.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0101.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0102.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0103.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0104.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0105.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0108.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0109.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0111.webp", height: 806 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0112.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0113.webp", height: 527 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0115.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0116.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0117.webp", height: 806 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0118.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0119.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0120.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0121.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0123.webp", height: 383 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0125.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0126.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0127.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0128.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0129.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0114.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0106.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "beata_i_marcin_reportaz_slubny_mszana_dolna_hotel_gorski_raj_start.webp"}
                    images={images}
                    headTitle={"Reportaż ślubny Kraków, zdjęcia w Hotelu Górski Raj"}
                    headDescription={"Malowniczo położony Niedźwiedź i konkurujący z najpiękniejszymi w Krakowie Kościół Św. Michała w Mszanie Dolnej. Serdecznie zapraszam na reportaż ślubny."}
                    headKeywords={"reportaż ślubny kraków,fotograf na wesele kraków,zdjęcia ślubne w hotelu górski raj niedźwiedź"}
                    headUrl={"https://99foto.pl/beata-i-marcin-reportaz-slubny-mszana-dolna-hotel-gorski-raj"}
                    entryContentP1={
                        'Drugi raz w tym roku odwiedzam Mszanę Dolną i przepiękny <a href="https://www.parafiamszanadolna.pl/" target="_blank" rel="nofollow">Kościół Św. Michała</a>, który z powodzeniem może konkurować z Krakowskimi perełkami, jakimi są <a href="https://kolegiata-anna.pl/" target="_blank" rel="nofollow">Kościół Św. Anny</a> czy <a href="https://www.mariacki.com/index.php/pl/" target="_blank" rel="nofollow">Bazylika Mariacka</a>. Do wykonania reportażu ponad rok wcześniej zaprosili mnie Beata i Marcin. Zdjęcia zaczęliśmy od przygotowań. Fryzura, staranny i delikatny makijaż oraz ubieranie sukni ślubnej odbyło się w dobrych humorach i rodzinnej atmosferze. Już chwilę później pędziłem do Niedźwiedzia, a dokładniej mówiąc do <a href="https://www.gorskiraj.com" target="_blank" rel="nofollow">Hotelu Górski Raj</a> gdzie odbyły się przygotowania Pana Młodego.'
                    }
                    entryContentP2={
                        'iedy już Marcin odebrał swoją przyszłą żonę, błogosławieństwo od rodziców i upewnił się, że w samochodzie jest wystarczająco dużo sprzętów, żeby przebrnąć przez bramy udaliśmy się do <a href="https://www.parafiamszanadolna.pl/" target="_blank" rel="nofollow">Kościoła Świętego Michała</a> w Mszanie Dolnej. Podczas ceremoni młodzi powiedzieli sobie sakramentalne TAK i z uśmiechem na ustach udali się do sali weselnej. Tam tradycyjnie rodzice przywitali ich chlebem i solą. Zabawa trwała do samego rana, a DJ serwował gościom weselnym niespotykaną ilość zabaw i niespodzianek (włączając w to po mistrzowsku przeprowadzony konkurs z grosikiem i ekspresem do kawy). Wspaniały wieczór i przepiękny dzień pełny wspomnień. Zapraszam zatem na krótką historię Beaty i Marcina! Miłego oglądania.'
                    }
                    slug={"beata-i-marcin-reportaz-slubny-mszana-dolna-hotel-gorski-raj"}
                    title={"REPORTAŻ ŚLUBNY MSZANA DOLNA - HOTEL GÓRSKI RAJ - BEATA i MARCIN"}
                    tags={"reportaż ślubny kraków,fotograf na wesele kraków,zdjęcia ślubne w hotelu górski raj niedźwiedź"}
                    date={"3 listopada 2017"}
                    menuNames={"BEATA i MARCIN"}
                    menuTitle={"REPORTAŻ ŚLUBNY MSZANA DOLNA - HOTEL GÓRSKI RAJ"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={process.env.staticImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
