import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/beata.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0012.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0018.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0022.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0027.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0028.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0031.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0033.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0035.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0038.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0039.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0041.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0042.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0043.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0044.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0046.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0048.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0049.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0050.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0054.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0056.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0058.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0059.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0060.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0061.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0062.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0063.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0064.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0065.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0131.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0067.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0068.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0070.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0071.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0073.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0074.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0075.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0078.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0084.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0085.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0089.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0097.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0099.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0101.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0102.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0108.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0109.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0111.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0112.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0113.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0115.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0116.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0117.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0118.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0123.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0125.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0128.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/reportaz_slubny_krakow_0106.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "beata_i_marcin_reportaz_slubny_mszana_dolna_hotel_gorski_raj_start.webp"}
                    images={images}
                    headTitle={"Reporta?? ??lubny Krak??w, zdj??cia w Hotelu G??rski Raj"}
                    headDescription={"Malowniczo po??o??ony Nied??wied?? i konkuruj??cy z najpi??kniejszymi w Krakowie Ko??ci???? ??w. Micha??a w Mszanie Dolnej. Serdecznie zapraszam na reporta?? ??lubny."}
                    headKeywords={"reporta?? ??lubny krak??w,fotograf na wesele krak??w,zdj??cia ??lubne w hotelu g??rski raj nied??wied??"}
                    headUrl={"https://99foto.pl/beata-i-marcin-reportaz-slubny-mszana-dolna-hotel-gorski-raj"}
                    entryContentP1={
                        'Drugi raz w tym roku odwiedzam Mszan?? Doln?? i przepi??kny <a href="https://www.parafiamszanadolna.pl/" target="_blank" rel="nofollow">Ko??ci???? ??w. Micha??a</a>, kt??ry z powodzeniem mo??e konkurowa?? z Krakowskimi pere??kami, jakimi s?? <a href="https://kolegiata-anna.pl/" target="_blank" rel="nofollow">Ko??ci???? ??w. Anny</a> czy <a href="https://www.mariacki.com/index.php/pl/" target="_blank" rel="nofollow">Bazylika Mariacka</a>. Do wykonania reporta??u ponad rok wcze??niej zaprosili mnie Beata i Marcin. Zdj??cia zacz??li??my od przygotowa??. Fryzura, staranny i delikatny makija?? oraz ubieranie sukni ??lubnej odby??o si?? w dobrych humorach i rodzinnej atmosferze. Ju?? chwil?? p????niej p??dzi??em do Nied??wiedzia, a dok??adniej m??wi??c do <a href="https://www.gorskiraj.com" target="_blank" rel="nofollow">Hotelu G??rski Raj</a> gdzie odby??y si?? przygotowania Pana M??odego.'
                    }
                    entryContentP2={
                        'iedy ju?? Marcin odebra?? swoj?? przysz???? ??on??, b??ogos??awie??stwo od rodzic??w i upewni?? si??, ??e w samochodzie jest wystarczaj??co du??o sprz??t??w, ??eby przebrn???? przez bramy udali??my si?? do <a href="https://www.parafiamszanadolna.pl/" target="_blank" rel="nofollow">Ko??cio??a ??wi??tego Micha??a</a> w Mszanie Dolnej. Podczas ceremoni m??odzi powiedzieli sobie sakramentalne TAK i z u??miechem na ustach udali si?? do sali weselnej. Tam tradycyjnie rodzice przywitali ich chlebem i sol??. Zabawa trwa??a do samego rana, a DJ serwowa?? go??ciom weselnym niespotykan?? ilo???? zabaw i niespodzianek (w????czaj??c w to po mistrzowsku przeprowadzony konkurs z grosikiem i ekspresem do kawy). Wspania??y wiecz??r i przepi??kny dzie?? pe??ny wspomnie??. Zapraszam zatem na kr??tk?? histori?? Beaty i Marcina! Mi??ego ogl??dania.'
                    }
                    slug={"beata-i-marcin-reportaz-slubny-mszana-dolna-hotel-gorski-raj"}
                    title={"REPORTA?? ??LUBNY MSZANA DOLNA - HOTEL G??RSKI RAJ - BEATA i MARCIN"}
                    tags={"reporta?? ??lubny krak??w,fotograf na wesele krak??w,zdj??cia ??lubne w hotelu g??rski raj nied??wied??"}
                    date={"3 listopada 2017"}
                    menuNames={"BEATA i MARCIN"}
                    menuTitle={"REPORTA?? ??LUBNY MSZANA DOLNA - HOTEL G??RSKI RAJ"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJ??CIA ??LUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={process.env.staticS3ImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
