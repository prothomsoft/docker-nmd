import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0003.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0004.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0005.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0006.webp", height: 852 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0007.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0008.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0010.webp", height: 851 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0011.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0014.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0016.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0017.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0019.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0022.webp", height: 762 },
            { imageSrc: "/static/blog/2015/09/99FOTOPL_SPM_087.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "aga_i_michal_sesja_poslubna_wawel_rynek_krakow_start.webp"}
                    images={images}
                    headTitle={"Plener ślubny w sercu Krakowa. Krakowski Rynek Główny i Wawel."}
                    headDescription={"Plener ślubny na Krakowskim Rynku, zdjęcia ślubne Wawel. Zapraszam do oglądania."}
                    headKeywords={"plener ślubny krakowski rynek, zdjęcia ślubne wawel"}
                    headUrl={"https://99foto.pl/aga-i-michal-sesja-poslubna-wawel-rynek-krakow"}
                    entryContentP1={
                        "Kraków i jego najbardziej znane miejsce na plener czyli Rynek i Wawel przez wielu określane są mianem miejsc oklepanych. Dlatego też młodzi najczęściej mało entuzjastycznie przyjmują propozycję sesji ślubnej właśnie tam. Tymczasem wędrując przez Kraków z aparatem można odkryć wiele ciekawych zakamarków, co więcej dysponując odrobiną czasu i wychodząc ze strefy komfortu w poszukiwaniu nowych ujęć, można odkryć nowe kadry i ciekawe miejsca. Mam nadzieję, że było dokładnie tak i tym razem."
                    }
                    entryContentP2={
                        "Agnieszka i Michał wychowali się w Krakowie, a na Wawelu spędzali swój szkolny wolny czas i bardzo się cieszę, że pomimo tego krakowski Rynek i Wawel był dla nich wciąż atrakcyjnym, a momentami może nawet sentymentalnym miejscem na plener. Spacer rozpoczęliśmy od Teatru Słowackiego skąd przez Rynek dotarliśmy do Wawelu. Zapraszam na zdjęcia i miłego oglądania."
                    }
                    slug={"aga-i-michal-sesja-poslubna-wawel-rynek-krakow"}
                    title={"PLENER ŚLUBNY WAWEL RYNEK KRAKÓW - AGNIESZKA i MICHAŁ"}
                    tags={"plener ślubny krakowski rynek,zdjęcia ślubne wawel"}
                    date={"27 września 2015"}
                    menuNames={"AGNIESZKA i MICHAŁ"}
                    menuTitle={"PLENER ŚLUBNY WAWEL RYNEK KRAKÓW"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
