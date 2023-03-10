import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0001.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0002.webp", height: 464 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0019.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0004.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0007.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0015.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0010.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0012.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0024.webp", height: 479 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0017.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0005.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0022.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0025.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/plener_poslubny_gora_chelm_0011.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_poslubna_magdy_i_mateusza_litwinska_grapa_w-czarnej_gorze_start.webp"}
                    images={images}
                    headTitle={"Sesja ??lubna Litwi??ska Grapa w Czarnej G??rze"}
                    headDescription={"Litwi??ska Grapa w Czarnej G??rze - na ten punkt widokowy w okolicach Nowego Targu zapraszam razem z Magd?? i Mateuszem."}
                    headKeywords={"sesja ??lubna krak??w,plener ??lubny krak??w"}
                    headUrl={"https://99foto.pl/sesja-poslubna-magdy-i-mateusza-litwinska-grapa-w-czarnej-gorze"}
                    entryContentP1={
                        '??lub Magdy i Mateusza odby?? si?? w <a href="https://rancholot.pl/" target="_blank" rel="nofollow">Domu Weselnym Rancho Lot</a> w Nowym Targu. Go??cie weselni jad??c w dniu ??lubu z Jordanowa, wspominanym ju?? na blogu krakowskim autobusem miejskim, mieli niepowtarzaln?? okazj?? podziwia?? wspania??y widok na Tatry. Postanowili??my wi??c p??j???? za ciosem i na plener ??lubny wybra?? si?? r??wnie?? w tamte okolice. Plan pleneru zosta?? zatwierdzony dzie?? wcze??niej i poparty praktycznymi poszukiwaniami fajnych miejsc. Zacz??li??my od punktu widokowego Litwi??ska Grapa w Czarnej G??rze. Wyraziste chmury, umiarkowane s??o??ce plus oczywi??cie filtry polaryzacyjny i po????wkowy pozwoli??y nam skopiowa?? panuj??ce warunki na ci??g zero jedynkowych warto??ci w pliku RAW.'
                    }
                    entryContentP2={
                        'Starali??my si?? ograniczy?? pozowanie do minimum. Silny wiatr skutecznie wyeliminowa?? parasolk?? i pozostawi?? nas zdanych na ??wiat??o s??oneczne odbite blend??. Z ciekawostek to Czarna G??ra jest ulubionym miejscem spotka?? lotniarzy i modelarzy, kt??rzy co roku przeprowadzaj?? Zawody Makiet Szybowc??w. W 2000 roku dla uczczenia II Tysi??clecia Chrze??cija??stwa na wierzcho??ku g??ry postawiono Krzy?? Milenijny na wz??r Krzy??a wzniesionego przed stu laty na Giewoncie. Co dalej? &#8230; udali??my si?? na <a href="https://www.aeroklub.nowytarg.pl/" target="_blank" rel="nofollow">lotnisko w Nowym Targu</a>, kt??re moim zdaniem mia??oby r??wnie du??y potencja?? jako pole golfowe. I ostatnie miejsce plenerowe tego wieczoru &#8211; okolice <a href="https://rancholot.pl/" target="_blank" rel="nofollow">Domu Weselnego Rancho Lot</a>, gdzie ??apali??my ostatnie promienie zachodz??cego s??o??ca. Mi??ego ogl??dania.'
                    }
                    slug={"sesja-poslubna-magdy-i-mateusza-litwinska-grapa-w-czarnej-gorze"}
                    title={"SESJA ??LUBNA LITWI??SKA GRAPA W CZARNEJ G??RZE - MAGDA i MATEUSZ"}
                    tags={"sesja ??lubna krak??w,plener ??lubny krak??w"}
                    date={"24 maja 2016"}
                    menuNames={"MAGDA i MATEUSZ"}
                    menuTitle={"SESJA ??LUBNA LITWI??SKA GRAPA W CZARNEJ G??RZE"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJ??CIA ??LUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={process.env.staticS3ImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
