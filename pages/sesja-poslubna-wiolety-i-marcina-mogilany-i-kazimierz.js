import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0001.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0004.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0009.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0016.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0025.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0027.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_poslubna_wiolety_i_marcina_mogilany_i_kazimierz_start.webp"}
                    images={images}
                    headTitle={"Sesja ślubna Wiolety i Marcina - Mogilany Kazimierz"}
                    headDescription={"Mega wpis pięknej pary Wiolety i Marcina. Zdjęcia zrobiliśmy w parku Mogilanach i na Krakowskim Kazimierzu. Zapraszam do oglądania !!!"}
                    headKeywords={"sesja ślubna kraków,plener ślubny kraków"}
                    headUrl={"https://99foto.pl/sesja-poslubna-wiolety-i-marcina-mogilany-i-kazimierz"}
                    entryContentP1={
                        'Z Wioletą i Marcinem spotkaliśmy się już w ich <a href="https://99foto.pl/wioleta-i-marcin-zdjecia-slubne-w-restauracji-victoria-rabka-zdroj" target="_blank" rel="nofollow">reportażowym wpisie</a>, dzisiaj przyszedł czas na plener! Obiecująco wyglądająca alejka drzew w położonym niedaleko Krakowa Parku w Mogilanach oraz duża ilość bezcennego podczas słonecznej pogody cienia, przekonały nas do odwiedzenia tego miejsca i wykonania właśnie tam sesji ślubnej.'
                    }
                    entryContentP2={
                        'Po dwóch godzinach w parku przenieśliśmy się w miejskie klimaty odwiedzając Kazimierz w okolicach obleganej przez turystów Kładki Bernatki. W trakcie spaceru odwiedziliśmy też <a href="https://www.starazajezdniakrakow.pl/" target="_blank" rel="nofollow">Starą Zajezdnię</a> i <a href="https://www.studioqulinarne.pl/" target="_blank" rel="nofollow">Studio Kulinarne</a> &#8211; oba miejsca &#8222;image friendly&#8221;. Kilka plenerowych godzin spędziliśmy w bardzo miłej atmosferze i ciekawych rozmowach na różne tematy. Wioli i Marcinowi dziękuję za współpracę i zapraszam na kilka klatek z tego pleneru. Więcej zdjęć jak zwykle w strefie klienta po wpisaniu hasła z mojej wizytówki. Miłego oglądania.'
                    }
                    slug={"sesja-poslubna-wiolety-i-marcina-mogilany-i-kazimierz"}
                    title={"SESJA ŚLUBNA PARK W MOGILANACH i KAZIMIERZ - WIOLETA i MARCIN"}
                    tags={"sesja ślubna kraków,plener ślubny kraków"}
                    date={"15 czerwca 2015"}
                    menuNames={"WIOLETA i MARCIN"}
                    menuTitle={"SESJA ŚLUBNA PARK W MOGILANACH i KAZIMIERZ"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
