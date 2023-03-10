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
                    headTitle={"Sesja ??lubna Wiolety i Marcina - Mogilany Kazimierz"}
                    headDescription={"Mega wpis pi??knej pary Wiolety i Marcina. Zdj??cia zrobili??my w parku Mogilanach i na Krakowskim Kazimierzu. Zapraszam do ogl??dania !!!"}
                    headKeywords={"sesja ??lubna krak??w,plener ??lubny krak??w"}
                    headUrl={"https://99foto.pl/sesja-poslubna-wiolety-i-marcina-mogilany-i-kazimierz"}
                    entryContentP1={
                        'Z Wiolet?? i Marcinem spotkali??my si?? ju?? w ich <a href="https://99foto.pl/wioleta-i-marcin-zdjecia-slubne-w-restauracji-victoria-rabka-zdroj" target="_blank" rel="nofollow">reporta??owym wpisie</a>, dzisiaj przyszed?? czas na plener! Obiecuj??co wygl??daj??ca alejka drzew w po??o??onym niedaleko Krakowa Parku w Mogilanach oraz du??a ilo???? bezcennego podczas s??onecznej pogody cienia, przekona??y nas do odwiedzenia tego miejsca i wykonania w??a??nie tam sesji ??lubnej.'
                    }
                    entryContentP2={
                        'Po dw??ch godzinach w parku przenie??li??my si?? w miejskie klimaty odwiedzaj??c Kazimierz w okolicach obleganej przez turyst??w K??adki Bernatki. W trakcie spaceru odwiedzili??my te?? <a href="https://www.starazajezdniakrakow.pl/" target="_blank" rel="nofollow">Star?? Zajezdni??</a> i <a href="https://www.studioqulinarne.pl/" target="_blank" rel="nofollow">Studio Kulinarne</a> &#8211; oba miejsca &#8222;image friendly&#8221;. Kilka plenerowych godzin sp??dzili??my w bardzo mi??ej atmosferze i ciekawych rozmowach na r????ne tematy. Wioli i Marcinowi dzi??kuj?? za wsp????prac?? i zapraszam na kilka klatek z tego pleneru. Wi??cej zdj???? jak zwykle w strefie klienta po wpisaniu has??a z mojej wizyt??wki. Mi??ego ogl??dania.'
                    }
                    slug={"sesja-poslubna-wiolety-i-marcina-mogilany-i-kazimierz"}
                    title={"SESJA ??LUBNA PARK W MOGILANACH i KAZIMIERZ - WIOLETA i MARCIN"}
                    tags={"sesja ??lubna krak??w,plener ??lubny krak??w"}
                    date={"15 czerwca 2015"}
                    menuNames={"WIOLETA i MARCIN"}
                    menuTitle={"SESJA ??LUBNA PARK W MOGILANACH i KAZIMIERZ"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
