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
                    headTitle={"Sesja ślubna Litwińska Grapa w Czarnej Górze"}
                    headDescription={"Litwińska Grapa w Czarnej Górze - na ten punkt widokowy w okolicach Nowego Targu zapraszam razem z Magdą i Mateuszem."}
                    headKeywords={"sesja ślubna kraków,plener ślubny kraków"}
                    headUrl={"https://99foto.pl/sesja-poslubna-magdy-i-mateusza-litwinska-grapa-w-czarnej-gorze"}
                    entryContentP1={
                        'Ślub Magdy i Mateusza odbył się w <a href="https://rancholot.pl/" target="_blank" rel="nofollow">Domu Weselnym Rancho Lot</a> w Nowym Targu. Goście weselni jadąc w dniu ślubu z Jordanowa, wspominanym już na blogu krakowskim autobusem miejskim, mieli niepowtarzalną okazję podziwiać wspaniały widok na Tatry. Postanowiliśmy więc pójść za ciosem i na plener ślubny wybrać się również w tamte okolice. Plan pleneru został zatwierdzony dzień wcześniej i poparty praktycznymi poszukiwaniami fajnych miejsc. Zaczęliśmy od punktu widokowego Litwińska Grapa w Czarnej Górze. Wyraziste chmury, umiarkowane słońce plus oczywiście filtry polaryzacyjny i połówkowy pozwoliły nam skopiować panujące warunki na ciąg zero jedynkowych wartości w pliku RAW.'
                    }
                    entryContentP2={
                        'Staraliśmy się ograniczyć pozowanie do minimum. Silny wiatr skutecznie wyeliminował parasolkę i pozostawił nas zdanych na światło słoneczne odbite blendą. Z ciekawostek to Czarna Góra jest ulubionym miejscem spotkań lotniarzy i modelarzy, którzy co roku przeprowadzają Zawody Makiet Szybowców. W 2000 roku dla uczczenia II Tysiąclecia Chrześcijaństwa na wierzchołku góry postawiono Krzyż Milenijny na wzór Krzyża wzniesionego przed stu laty na Giewoncie. Co dalej? &#8230; udaliśmy się na <a href="https://www.aeroklub.nowytarg.pl/" target="_blank" rel="nofollow">lotnisko w Nowym Targu</a>, które moim zdaniem miałoby równie duży potencjał jako pole golfowe. I ostatnie miejsce plenerowe tego wieczoru &#8211; okolice <a href="https://rancholot.pl/" target="_blank" rel="nofollow">Domu Weselnego Rancho Lot</a>, gdzie łapaliśmy ostatnie promienie zachodzącego słońca. Miłego oglądania.'
                    }
                    slug={"sesja-poslubna-magdy-i-mateusza-litwinska-grapa-w-czarnej-gorze"}
                    title={"SESJA ŚLUBNA LITWIŃSKA GRAPA W CZARNEJ GÓRZE - MAGDA i MATEUSZ"}
                    tags={"sesja ślubna kraków,plener ślubny kraków"}
                    date={"24 maja 2016"}
                    menuNames={"MAGDA i MATEUSZ"}
                    menuTitle={"SESJA ŚLUBNA LITWIŃSKA GRAPA W CZARNEJ GÓRZE"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={process.env.staticS3ImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
