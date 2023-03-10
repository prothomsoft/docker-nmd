import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0013.webp", height: 400 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0004.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0007.webp", height: 267 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0020.webp", height: 205 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0026.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0027.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0028.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kasprowy_wierch_0030.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "paulina_i_bartek_sesja_poslubna_kasprowy_wierch_i_nosal_zakopane_start.webp"}
                    images={images}
                    headTitle={"Sesja ??lubna Kasprowy Wierch - Zakopane"}
                    headDescription={"Tym razem na moim blogu g??rskie panoramy i pi??kne widoki ze szczytu Kasprowego Wierchu i Nosala. Serdecznie zapraszam do ogl??dania."}
                    headKeywords={"zdj??cia ??lubne kasprowy wierch,plener ??lubny zakopane"}
                    headUrl={"https://99foto.pl/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    entryContentP1={
                        "Paulina i Bartek lubi?? morze, ale maj?? je na co dzie?? poniewa?? mieszkaj?? w Szczecinie i kochaj?? g??ry poniewa?? na ich szczycie powiedzieli sobie TAK. W niedziel?? po sobotnich szale??stwach w Zaje??dzie Furma??skim w Zakopanym, wi??kszo???? go??ci weselnych spotka??a si?? na szczycie Kasprowego Wierchu na kr??tkiej sesji fotograficznej. Mieli??my tego popo??udnia, pogod?? wr??cz wymarzon?? do zdj???? w g??rach &#8211; bia??e chmurki na niebieskim niebie, umiarkowane s??o??ce i bardzo dobra widoczno????. Wykorzystali??my te okoliczno??ci jak nale??y mam nadziej??."
                    }
                    entryContentP2={
                        "Nast??pnie ju?? w tygodniu, kt??ry ca??y sp??dzi??em w Zakopanym, spotkali??my si?? ponownie i wsp??lnie weszli??my na szczyt Nosala. G??rka ma??a, ale podej??cie do???? strome i kondycyjnie wymagaj??ce. Tym razem nie mieli??my ju?? tyle szcz????cia do pogody i na g??rze spotkali??my mg????, kt??ra nie chcia??a odpu??ci??. Pozdrowienia dla go??ci, mi??ego ogl??dania i zapraszam po wi??cej do strefy klienta."
                    }
                    slug={"sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    title={"SESJA ??LUBNA KASPROWY WIERCH i NOSAL - ZAKOPANE - PAULINA i BARTEK"}
                    tags={"zdj??cia ??lubne kasprowy wierch,plener ??lubny zakopane"}
                    date={"17 wrze??nia 2015"}
                    menuNames={"PAULINA i BARTEK"}
                    menuTitle={"SESJA ??LUBNA KASPROWY WIERCH i NOSAL - ZAKOPANE"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W G??RALSKIM KLIMACIE PRZYSTA?? KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticS3ImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
