import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0004.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0008.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0018.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0025.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0026.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/07/sesja_poslubna_kazimierz_krakow_0027.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "iga_i_marcin_sesja_poslubna_kazimierz_krakow_start.webp"}
                    images={images}
                    headTitle={"Sesja ??lubna Kazimierz Krak??w"}
                    headDescription={"Ko??ci???? na Ska??ce, Wawel, spacer bulwarami Wi??lanymi i Kazimierz. W ka??dym miejscu kilka fajnych zdj???? Igi i Marcina. Zapraszam do ogl??dania."}
                    headKeywords={"sesja ??lubna kazimierz,zdj??cia ??lubne na wawelu,fotograf na ??lub krak??w"}
                    headUrl={"https://99foto.pl/iga-i-marcin-sesja-poslubna-kazimierz-krakow"}
                    entryContentP1={
                        "Iga i Marcin w czasach studenckich mieszkali na ulicy Pauli??skiej, dlatego te?? z tego miejsca rozpocz??li??my nasz?? wypraw?? po Krakowie. Ko??ci???? na Ska??ce, wspinaczka na Wawel i tam kilka fotek, a nast??pnie prosto na Kazimierz, gdzie odwiedzili??my Stajni??, Mleczarnie, Qulinaria, Star?? Zajezdni?? i K??adk?? Bernatk??, ka??de miejsce inne i ciekawe do fotografowania."
                    }
                    entryContentP2={
                        "Przed s??o??cem chroni??y nas delikatne chmurki i lekki wiatr, wi??c pogoda by??a idealna. W drodze powrotnej zahaczyli??my nawet o zach??d s??o??ca. By??o very nice i starali??my si?? utrzyma?? dynamizm akcji w trakcie ca??ej sesji &#8211; du??o bieg??w bo Marcin to AWF-owiec. Ogl??daj??c zdj??cia mo??ecie sami zobaczy?? i oceni?? czy nasz plan uda??o si?? zrealizowa??. Mi??ego ogl??dania !!!"
                    }
                    slug={"iga-i-marcin-sesja-poslubna-kazimierz-krakow"}
                    title={"SESJA ??LUBNA KAZIMIERZ KRAK??W - IGA i MARCIN"}
                    tags={"sesja ??lubna kazimierz,zdj??cia ??lubne na wawelu,fotograf na ??lub krak??w"}
                    date={"6 lipca 2015"}
                    menuNames={"IGA i MARCIN"}
                    menuTitle={"SESJA ??LUBNA KAZIMIERZ KRAK??W"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJ??CIA ??LUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={process.env.staticS3ImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
