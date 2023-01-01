import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0001.webp", height: 850 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0004.webp", height: 850 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0005.webp", height: 335 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0006.webp", height: 850 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0009.webp", height: 852 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0010.webp", height: 850 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0015.webp", height: 850 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0018.webp", height: 527 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0020.webp", height: 383 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0022.webp", height: 527 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0023.webp", height: 850 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0024.webp", height: 806 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0017.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "kasia_i_pawel_zimowa_sesja_slubna_w_gorach_start.webp"}
                    images={images}
                    headTitle={"Zimowa sesja ślubna w górach"}
                    headDescription={"Trochę nam wczoraj tyłki zmarzły, ale warto było, żeby odetchnąć świeżym powietrzem i zrobić kilka niezapomnianych zdjęć. Miłego oglądania."}
                    headKeywords={"zimowa sesja ślubna w górach,plener ślubny czarna góra"}
                    headUrl={"https://99foto.pl/kasia-i-pawel-zimowa-sesja-slubna-w-gorach"}
                    entryContentP1={
                        "Minus trzydzieści na termometrach w górach, pełno śniegu, czyste niebo i świecące słońce. Stok na Czarnej Górze pełny narciarzy. Po drugiej stronie tego wzniesienia fajowa panorama tatr i bielutki, zupełnie niewydeptany śnieg. Trochę nam tyłki zmarzły tego dnia, ale warto było, żeby odetchnąć świeżym powietrzem i zrobić kilka niezapomnianych zdjęć."
                    }
                    entryContentP2={
                        "Na plener wyjechaliśmy o godzinie ósmej rano z Krakowa. Po drodze zabraliśmy dróżkę Anię, której za pomoc przy zdjęciach bardzo dziękuję. Paweł dzielnie przemierzał śnieg w butach ślubnych bez czapki. Natomiast wszystkie Panie mogą brać przykład z Kasi, bo rok po ślubie, a suknia wciąż pasuje. Miłego oglądania."
                    }
                    slug={"kasia-i-pawel-zimowa-sesja-slubna-w-gorach"}
                    title={"ZIMOWA SESJA ŚLUBNA W GÓRACH - KASIA i PAWEŁ"}
                    tags={"zimowa sesja ślubna w górach,plener ślubny czarna góra"}
                    date={"8 stycznia 2017"}
                    menuNames={"KASIA i PAWEŁ"}
                    menuTitle={"ZIMOWA SESJA ŚLUBNA W GÓRACH"}
                    leadNames={"OLA i PAWEŁ"}
                    leadTitle={"DWÓR SZLACHECKI SIECIECHOWICE, REPORTAŻ ŚLUBNY MIECHÓW"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={process.env.staticImagesPath + "dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
