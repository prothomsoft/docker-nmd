import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0013.webp", height: 400 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0004.webp", height: 851 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0005.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0006.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0007.webp", height: 267 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0008.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0010.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0011.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0014.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0016.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0017.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0019.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0020.webp", height: 205 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0021.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0022.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0023.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0024.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0026.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0027.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0028.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0029.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0030.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "paulina_i_bartek_sesja_poslubna_kasprowy_wierch_i_nosal_zakopane_start.webp"}
                    images={images}
                    headTitle={"Sesja ślubna Kasprowy Wierch - Zakopane"}
                    headDescription={"Tym razem na moim blogu górskie panoramy i piękne widoki ze szczytu Kasprowego Wierchu i Nosala. Serdecznie zapraszam do oglądania."}
                    headKeywords={"zdjęcia ślubne kasprowy wierch,plener ślubny zakopane"}
                    headUrl={"https://99foto.pl/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    entryContentP1={
                        "Paulina i Bartek lubią morze, ale mają je na co dzień ponieważ mieszkają w Szczecinie i kochają góry ponieważ na ich szczycie powiedzieli sobie TAK. W niedzielę po sobotnich szaleństwach w Zajeździe Furmańskim w Zakopanym, większość gości weselnych spotkała się na szczycie Kasprowego Wierchu na krótkiej sesji fotograficznej. Mieliśmy tego popołudnia, pogodę wręcz wymarzoną do zdjęć w górach &#8211; białe chmurki na niebieskim niebie, umiarkowane słońce i bardzo dobra widoczność. Wykorzystaliśmy te okoliczności jak należy mam nadzieję."
                    }
                    entryContentP2={
                        "Następnie już w tygodniu, który cały spędziłem w Zakopanym, spotkaliśmy się ponownie i wspólnie weszliśmy na szczyt Nosala. Górka mała, ale podejście dość strome i kondycyjnie wymagające. Tym razem nie mieliśmy już tyle szczęścia do pogody i na górze spotkaliśmy mgłę, która nie chciała odpuścić. Pozdrowienia dla gości, miłego oglądania i zapraszam po więcej do strefy klienta."
                    }
                    slug={"sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    title={"SESJA ŚLUBNA KASPROWY WIERCH i NOSAL - ZAKOPANE - PAULINA i BARTEK"}
                    tags={"zdjęcia ślubne kasprowy wierch,plener ślubny zakopane"}
                    date={"17 września 2015"}
                    menuNames={"PAULINA i BARTEK"}
                    menuTitle={"SESJA ŚLUBNA KASPROWY WIERCH i NOSAL - ZAKOPANE"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
