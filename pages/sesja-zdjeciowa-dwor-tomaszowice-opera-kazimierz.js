import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0003.webp", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0016.webp", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0009.webp", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0010.webp", height: 383 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0014.webp", height: 851 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0006.webp", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0019.webp", height: 806 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0021.webp", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0024.webp", height: 806 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0026.webp", height: 805 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0031.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja_zdjeciowa_dwor_tomaszowice_krakow_start.webp"}
                    images={images}
                    headTitle={"Sesja zdjęciowa Dwór Tomaszowice, Opera Krakowska, Kazimierz"}
                    headDescription={"Serdecznie zapraszam na ostatni w tym roku jesienny i krakowski plener Karoliny i Bartka. Dwór Tomaszowice, Opera Krakowska i zakamarki Kazimierza."}
                    headKeywords={"sesja zdjęciowa dwór tomaszowice, plener ślubny kazimierz kraków"}
                    headUrl={"https://99foto.pl/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    entryContentP1={
                        "Dzisiaj zapraszam na ostatni w tym roku jesienny krakowski plener Karoliny i Bartka. Do zrealizowania planu A, który zakładał, że wybieramy się do Zakopanego i spacerujemy do Morskiego Oka, zabrakło nam dosłownie jednego dnia. Akurat w sobotę, początek tego wolnego weekendu, w którym mieliśmy się wybrać w góry gęsta mgła przysłoniła świat i to nie tylko w Krakowie, wszędzie."
                    }
                    entryContentP2={
                        "Pozostał więc plan B i sprawdzone krakowskie miejsca gwarantujące świetne zdjęcia podczas jesiennej aury. Mówię tutaj o Dworze w Tomaszowicach, który zachwyca swoim angielskim stylem i sercu Krakowa, czyli Kazimierzu. Oglądając zdjęcia zauważycie, że Karolina i Bartek to świetni modele. Niektóre pozy, które sami zaproponowali nadały tej sesji wyjątkowego charakteru. Bardzo miło spędziliśmy czas w sobotnie przedpołudnie i bardzo chce Wam pokazać tą sesję zdjęciową bo warto wrócić do tych ostatnich promieni jesiennego słońca. Miłego oglądania. "
                    }
                    slug={"sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    title={"SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ - KAROLINA i BARTEK"}
                    tags={"SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ"}
                    date={"13 LISTOPADA 2017"}
                    menuNames={"KAROLINA i BARTEK"}
                    menuTitle={"SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
