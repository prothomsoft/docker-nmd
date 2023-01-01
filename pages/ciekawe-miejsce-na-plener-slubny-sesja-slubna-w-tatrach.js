import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0003.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0026.webp", height: 407 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0004.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0006.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0010.webp", height: 567 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0014.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0015.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0028.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0024.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0027.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_slubna_w_tatrach.webp"}
                    images={images}
                    headTitle={"Ciekawe miejsce na plener ślubny, sesja ślubna w Tatrach"}
                    headDescription={
                        "Tym razem na moim blogu znajdziecie ciekawe miejsce na plener ślubny. Sesja ślubna w Tatrach to świetny moment by wyrwać się z miasta i odetchnąć świeżym powietrzem w górach. Zapraszam do oglądania."
                    }
                    headKeywords={"sesja ślubna w tatrach, plener ślubny w górach, miejsce na plener ślubny, ciekawe miejsca na sesję ślubną"}
                    headUrl={"https://99foto.pl/ciekawe-miejsce-na-plener-slubny-sesja-slubna-w-tatrach"}
                    entryContentP1={
                        "Pary, które decydują się na sesję ślubną w Tatrach bardzo często polegają na moim doświadczeniu i pytają o ciekawe miejsca na plener ślubny w górach. Odpowiadając na te pytania bardzo często zaczynam opowieść od najbardziej popularnej tatrzańskiej lokalizacji, w której często realizowane są plenery ślubne.  Jest to oczywiście Kasprowy Wierch, na który można łatwo dostać się kolejką linową. Wycieczkę zaczyna się w Kuźnicach i bardzo dobrze schodzi się żółtym szlakiem w kierunku Czarnego Stawu Gąsienicowego, który rewelacyjnie wygląda na zdjęciach ślubnych. Kolejną świetną miejscówką jest oczywiście Morskie Oko. Podejście do największego jeziora Tatr rozpoczyna się w Palenicy Białczańskiej. Ośmiokilometrowy odcinek drogi do jeziora możemy pokonać fasiągiem lub mniej kosztownie mknąć na biszkoptach. W schronisku można powtórzyć przygotowania i rozpocząć wędrówkę wokół jeziora w poszukiwaniu super światła i niezwykłych kadrów."
                    }
                    entryContentP2={
                        "Najlepiej być tam wcześnie rano, gdy rycerze i królowe nocy jeszcze odsypiają. Kolejną rekomendacją miejsca na plener ślubny w górach są Tatry, ale tym razem strona słowacka, która otwiera przed nami nowe możliwości. Czterdzieści minut samochodem dalej na północ, brak opłat za fotografowanie na terenie Tatrzańskiego Parku Narodowego, zdecydowanie mniej ludzi - czego można chcieć więcej. Tatrzańska Łomnica, Szczyrbskie Jezioro, Popradzki Staw to piękne miejsca, które są gwarancją pięknych zdjęć, ale też świetnie przeżytego dnia w górach. Na moim blogu znajdziecie wpisy z górskich wypraw, które są już za nami. Tymczasem serdecznie zapraszam na zdjęcia i do zobaczenia na szlaku podczas Waszej sesji ślubnej. Miłego oglądania."
                    }
                    slug={"ciekawe-miejsce-na-plener-slubny-sesja-slubna-w-tatrach"}
                    title={"CIEKAWE MIEJSCE NA PLENER ŚLUBNY, SESJA ŚLUBNA W TATRACH - MARTA i MARCIN"}
                    tags={"sesja ślubna w tatrach, plener ślubny w górach, miejsce na plener ślubny, ciekawe miejsca na sesję ślubną"}
                    date={"14 sierpnia 2018"}
                    menuNames={"MARTA i MARCIN"}
                    menuTitle={"CIEKAWE MIEJSCE NA PLENER ŚLUBNY, SESJA ŚLUBNA W TATRACH"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ŚLUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={process.env.staticS3ImagesPath + "sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
