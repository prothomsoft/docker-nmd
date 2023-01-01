import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0002.webp", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0004.webp", height: 852 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0005.webp", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0006.webp", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0008.webp", height: 851 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0010.webp", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0012.webp", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0015.webp", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0018.webp", height: 851 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0021.webp", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0022.webp", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0025.webp", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0026.webp", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0027.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "iga_i_marcin_sesja_poslubna_kazimierz_krakow_start.webp"}
                    images={images}
                    headTitle={"Sesja ślubna Kazimierz Kraków"}
                    headDescription={"Kościół na Skałce, Wawel, spacer bulwarami Wiślanymi i Kazimierz. W każdym miejscu kilka fajnych zdjęć Igi i Marcina. Zapraszam do oglądania."}
                    headKeywords={"sesja ślubna kazimierz,zdjęcia ślubne na wawelu,fotograf na ślub kraków"}
                    headUrl={"https://99foto.pl/iga-i-marcin-sesja-poslubna-kazimierz-krakow"}
                    entryContentP1={
                        "Iga i Marcin w czasach studenckich mieszkali na ulicy Paulińskiej, dlatego też z tego miejsca rozpoczęliśmy naszą wyprawę po Krakowie. Kościół na Skałce, wspinaczka na Wawel i tam kilka fotek, a następnie prosto na Kazimierz, gdzie odwiedziliśmy Stajnię, Mleczarnie, Qulinaria, Starą Zajezdnię i Kładkę Bernatkę, każde miejsce inne i ciekawe do fotografowania."
                    }
                    entryContentP2={
                        "Przed słońcem chroniły nas delikatne chmurki i lekki wiatr, więc pogoda była idealna. W drodze powrotnej zahaczyliśmy nawet o zachód słońca. Było very nice i staraliśmy się utrzymać dynamizm akcji w trakcie całej sesji &#8211; dużo biegów bo Marcin to AWF-owiec. Oglądając zdjęcia możecie sami zobaczyć i ocenić czy nasz plan udało się zrealizować. Miłego oglądania !!!"
                    }
                    slug={"iga-i-marcin-sesja-poslubna-kazimierz-krakow"}
                    title={"SESJA ŚLUBNA KAZIMIERZ KRAKÓW - IGA i MARCIN"}
                    tags={"sesja ślubna kazimierz,zdjęcia ślubne na wawelu,fotograf na ślub kraków"}
                    date={"6 lipca 2015"}
                    menuNames={"IGA i MARCIN"}
                    menuTitle={"SESJA ŚLUBNA KAZIMIERZ KRAKÓW"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={process.env.staticImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
