import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0041.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0060.webp", height: 785 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0040.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0038.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0047_1.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0042.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0048.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0045_1.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0049_1.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0050.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0051.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0052.webp", height: 301 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0053.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0057.webp", height: 872 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0059.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_zdjeciowa_kopiec_kraka_przegorzaly_kryspinow_start.webp"}
                    images={images}
                    headTitle={"Sesja zdjęciowa Kopiec Kraka, Przegorzały, Kryspinów"}
                    headDescription={"Natalia i Tomasz na plener ślubny wybrali Kopiec Krakusa na Krakowskim Podgórzu, Zamek w Przegorzałach i zachód słońca nad jeziorem w Kryspinowie."}
                    headKeywords={"kopiec kraka,zamek przegorzały,sesja zdjęciowa kryspinów"}
                    headUrl={"https://99foto.pl/sesja-zdjeciowa-kopiec-kraka-przegorzaly-kryspinow"}
                    entryContentP1={
                        "Natalia i Tomasz na plener ślubny wybrali Kopiec Krakusa na Krakowskim Podgórzu, Zamek w Przegorzałach i zachód słońca nad jeziorem w Kryspinowie. Pomimo, że miejsca te odwiedzałem nie pierwszy raz to starałem się wymazać z mojej pamięci istniejące już kadry i skupić się na poszukiwaniu nowych, jeszcze nie odkrytych miejsc. W pobliżu Kopca znajduje się również kamieniołom Liban, który był niegdyś karnym obozem pracy. Miejsce dobre na industrialną sesję narzeczeńską, ale kompletnie nieużyteczne dla Panny Młodej w białej sukni ślubnej."
                    }
                    entryContentP2={
                        "Pogoda tego dnia była świetna, niebieskie niebo i białe chmurki bardzo pomagały. Restauracja u Ziyada była pełna gości, którzy popijając kawkę podziwiali piękne widoki z restauracyjnego tarasu. Wpadł nowy kadr w tym miejscu, z którego jestem bardzo zadowolony. Plener dokończyliśmy w Kryspinowie delektując się ostatnimi promieniami zachodzącego słońca. Myślę, że wszyscy spędziliśmy miłe popołudnie w fajnych miejscach, dobrych humorach i przy świetnej pogodzie. Zapraszam na zdjęcia z tej wyprawy plenerowej i życzę miłego oglądania."
                    }
                    slug={"sesja-zdjeciowa-kopiec-kraka-przegorzaly-kryspinow"}
                    title={"SESJA ZDJĘCIOWA KOPIEC KRAKA, PRZEGORZAŁY, KRYSPINÓW - NATALIA i TOMASZ"}
                    tags={"kopiec kraka,zamek przegorzały,sesja zdjęciowa kryspinów"}
                    date={"14 czerwca 2017"}
                    menuNames={"NATALIA i TOMASZ"}
                    menuTitle={"SESJA ZDJĘCIOWA KOPIEC KRAKA, PRZEGORZAŁY, KRYSPINÓW"}
                    leadNames={"KINGA i MACIEK"}
                    leadTitle={"DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA"}
                    leadUrl={"/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada"}
                    leadImage={process.env.staticS3ImagesPath + "dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
