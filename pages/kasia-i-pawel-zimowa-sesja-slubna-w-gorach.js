import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0001.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0004.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0005.webp", height: 335 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0006.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0009.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0010.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0015.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0018.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0020.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0022.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0023.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0024.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/zimowa_sesja_slubna_w_gorach_0017.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "kasia_i_pawel_zimowa_sesja_slubna_w_gorach_start.webp"}
                    images={images}
                    headTitle={"Zimowa sesja ??lubna w g??rach"}
                    headDescription={"Troch?? nam wczoraj ty??ki zmarz??y, ale warto by??o, ??eby odetchn???? ??wie??ym powietrzem i zrobi?? kilka niezapomnianych zdj????. Mi??ego ogl??dania."}
                    headKeywords={"zimowa sesja ??lubna w g??rach,plener ??lubny czarna g??ra"}
                    headUrl={"https://99foto.pl/kasia-i-pawel-zimowa-sesja-slubna-w-gorach"}
                    entryContentP1={
                        "Minus trzydzie??ci na termometrach w g??rach, pe??no ??niegu, czyste niebo i ??wiec??ce s??o??ce. Stok na Czarnej G??rze pe??ny narciarzy. Po drugiej stronie tego wzniesienia fajowa panorama tatr i bielutki, zupe??nie niewydeptany ??nieg. Troch?? nam ty??ki zmarz??y tego dnia, ale warto by??o, ??eby odetchn???? ??wie??ym powietrzem i zrobi?? kilka niezapomnianych zdj????."
                    }
                    entryContentP2={
                        "Na plener wyjechali??my o godzinie ??smej rano z Krakowa. Po drodze zabrali??my dr????k?? Ani??, kt??rej za pomoc przy zdj??ciach bardzo dzi??kuj??. Pawe?? dzielnie przemierza?? ??nieg w butach ??lubnych bez czapki. Natomiast wszystkie Panie mog?? bra?? przyk??ad z Kasi, bo rok po ??lubie, a suknia wci???? pasuje. Mi??ego ogl??dania."
                    }
                    slug={"kasia-i-pawel-zimowa-sesja-slubna-w-gorach"}
                    title={"ZIMOWA SESJA ??LUBNA W G??RACH - KASIA i PAWE??"}
                    tags={"zimowa sesja ??lubna w g??rach,plener ??lubny czarna g??ra"}
                    date={"8 stycznia 2017"}
                    menuNames={"KASIA i PAWE??"}
                    menuTitle={"ZIMOWA SESJA ??LUBNA W G??RACH"}
                    leadNames={"OLA i PAWE??"}
                    leadTitle={"DW??R SZLACHECKI SIECIECHOWICE, REPORTA?? ??LUBNY MIECH??W"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={process.env.staticS3ImagesPath + "dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
