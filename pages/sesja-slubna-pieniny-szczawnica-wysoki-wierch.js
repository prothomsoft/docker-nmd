import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0001.webp", height: 762 },

            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0004.webp", height: 567 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0007.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0012.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0017.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0027.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0018.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/06/sesja_plenerowa_pieniny_0033.webp", height: 762 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_slubna_pieniny.webp"}
                    images={images}
                    headTitle={"Plener ślubny Pieniny, Szczawnica, Wysoki Wierch"}
                    headDescription={"Plener ślubny Pieniny, podróż kolejką linową na Palenicę w Szczawnicy i dwie godziny spaceru niebieskim szlakiem. Serdecznie zapraszam na Wysoki Wierch."}
                    headKeywords={"sesja ślubna pieniny, wysoki wierch w pieninach, fotograf na sesje ślubną szczawnica"}
                    headUrl={"https://99foto.pl/sesja-slubna-pieniny-szczawnica-wysoki-wierch"}
                    entryContentP1={
                        "Zbliża się długi weekend czerwcowy, więc dla wielu z nas to doskonała okazja do wyrwania się z miasta w poszukiwaniu spokoju, czystego powietrza i pięknych widoków. Sesja ślubna w Pieninach to doskonała ku temu okazja. Być może zapytacie mnie dlaczego na sesję ślubną wybraliśmy Pieniny. Miejsce to gwarantuje nam szereg pięknych krajobrazów, rozległych pasm górskich wśród których odnajdziemy wyróżniające się Trzy Korony i Sokolice. W zasięgu wzroku mamy oddaloną panoramę Tatr, świetnie zagospodarowaną promenadę w Szczawnicy, a w bliskiej odległości Przełom Białki, zamki w Czorsztynie i Niedzicy oraz wiele innych ciekawych atrakcji turystycznych. Na nasz sobotni plener ślubny w Pieninach wyruszyliśmy z Krakowa o godzinie dziesiątej rano."
                    }
                    entryContentP2={
                        "Kolej linowa Palenica w Szczawnicy pozwoliła nam w krótkim czasie dostać się na Szafranówkę. Rozpoczęliśmy wędrówkę niebieskim szlakiem, a właściwie to leśną ścieżką, pełną pięknych krajobrazów, soczystej zieleni rozświetlonej ciepłymi promieniami słońca. W oddali obserwowaliśmy Tatry, które toczyły burzliwą walkę z żywiołem. Po dwóch godzinach marszu dotarliśmy do celu naszej wędrówki, którym był szczyt górski Wysoki Wierch. Widok z tego miejsca jest z pewnością wart dwóch godzin drobnej wspinaczki. Kilka zdjęć i szybki powrót, by wystarczyło nam czasu do odwiedzenia innych ciekawych miejsc, które mieliśmy w planach. Jakie to atrakcje i miejsca zobaczcie sami oglądając krótką relację z pleneru Eweliny i Jakuba w Pieninach. Miłego oglądania."
                    }
                    slug={"sesja-slubna-pieniny-szczawnica-wysoki-wierch"}
                    title={"SESJA ŚLUBNA PIENINY, SZCZAWNICA, WYSOKI WIERCH - EWELINA i JAKUB"}
                    tags={"sesja ślubna pieniny, wysoki wierch w pieninach, fotograf na sesje ślubną szczawnica"}
                    date={"10 czerwca 2020"}
                    menuNames={"EWELINA i JAKUB"}
                    menuTitle={"SESJA ŚLUBNA PIENINY, SZCZAWNICA, WYSOKI WIERCH"}
                    leadNames={"PATRYCJA i KRZYSZTOF"}
                    leadTitle={"PLENER ŚLUBNY NA RYNKU W KRAKOWIE"}
                    leadUrl={"/plener-slubny-na-rynku-w-krakowie"}
                    leadImage={process.env.staticS3ImagesPath + "/plener_slubny_na_rynku_w_krakowie.webp"}
                />
            
        );
};

export default BlogPageComponent;
