import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0006.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0010.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rynek_wawel_krakow_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/99FOTOPL_SPM_087.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "aga_i_michal_sesja_poslubna_wawel_rynek_krakow_start.webp"}
                    images={images}
                    headTitle={"Plener ??lubny w sercu Krakowa. Krakowski Rynek G????wny i Wawel."}
                    headDescription={"Plener ??lubny na Krakowskim Rynku, zdj??cia ??lubne Wawel. Zapraszam do ogl??dania."}
                    headKeywords={"plener ??lubny krakowski rynek, zdj??cia ??lubne wawel"}
                    headUrl={"https://99foto.pl/aga-i-michal-sesja-poslubna-wawel-rynek-krakow"}
                    entryContentP1={
                        "Krak??w i jego najbardziej znane miejsce na plener czyli Rynek i Wawel przez wielu okre??lane s?? mianem miejsc oklepanych. Dlatego te?? m??odzi najcz????ciej ma??o entuzjastycznie przyjmuj?? propozycj?? sesji ??lubnej w??a??nie tam. Tymczasem w??druj??c przez Krak??w z aparatem mo??na odkry?? wiele ciekawych zakamark??w, co wi??cej dysponuj??c odrobin?? czasu i wychodz??c ze strefy komfortu w poszukiwaniu nowych uj????, mo??na odkry?? nowe kadry i ciekawe miejsca. Mam nadziej??, ??e by??o dok??adnie tak i tym razem."
                    }
                    entryContentP2={
                        "Agnieszka i Micha?? wychowali si?? w Krakowie, a na Wawelu sp??dzali sw??j szkolny wolny czas i bardzo si?? ciesz??, ??e pomimo tego krakowski Rynek i Wawel by?? dla nich wci???? atrakcyjnym, a momentami mo??e nawet sentymentalnym miejscem na plener. Spacer rozpocz??li??my od Teatru S??owackiego sk??d przez Rynek dotarli??my do Wawelu. Zapraszam na zdj??cia i mi??ego ogl??dania."
                    }
                    slug={"aga-i-michal-sesja-poslubna-wawel-rynek-krakow"}
                    title={"PLENER ??LUBNY WAWEL RYNEK KRAK??W - AGNIESZKA i MICHA??"}
                    tags={"plener ??lubny krakowski rynek,zdj??cia ??lubne wawel"}
                    date={"27 wrze??nia 2015"}
                    menuNames={"AGNIESZKA i MICHA??"}
                    menuTitle={"PLENER ??LUBNY WAWEL RYNEK KRAK??W"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W G??RALSKIM KLIMACIE PRZYSTA?? KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticS3ImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
