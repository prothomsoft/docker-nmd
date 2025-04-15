import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0023.webp", height: 850 },    
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0004.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0006.webp", height: 763 },          
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0002.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0010.webp", height: 850 },  
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0009.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0012.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0014.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0015.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0017.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0018.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0020.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0022.webp", height: 763 }, 
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0021.webp", height: 763 },                 
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0025.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0024.webp", height: 763 },  
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0028.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0032.webp", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_slubna_sukiennice_hotel_stary_krakow_start.webp"}
                    images={images}
                    headTitle={"Sesja ślubna w Krakowie, Sukiennice, Hotel Stary, Bulwary Wiślane"}
                    headDescription={"Sesja ślubna w Krakowie jednym z najpiękniejszych i najbardziej historycznych miejsc na mapie Polski. Sukiennice, Sky Bar Hotel Stary, Bulwary Wiślane i jeszcze kilka ciekawych zakamarków. Zapraszam na bloga."}
                    headKeywords={"Sesja ślubna w Krakowie, Plener ślubny Sukiennice, Sky Ba Hotel Stary, Bulwary Wiślane"}
                    headUrl={"https://99foto.pl/sesja-slubna-w-krakowie-sukiennice-hotel-stary-bulwary-wislane"}
                    entryContentP1={
                        'Kraków i o nim będzie pisane jako o jednym z najpiękniejszych i najbardziej historycznych miejsc na mapie Polski. Osobiście nie mam żadnych wątpliwości, że wybór miejsc w Krakowie w kontekście sesji ślubnej nie jest łatwy, ale ich ilość i różnorodność w tym mieście pozwala spełnić oczekiwania każdej młodej pary. Szczególnie gdy jej marzeniem są wyjątkowe i magiczne zdjęcia plenerowe. Praktycznie w jednym miejscu możemy odszukać zakątki pełne zieleni w zróżnicowanych barwach i ciekawe fragmenty miejskiej architektury. Poznanie ciekawych miejsc na sesje ślubną w Krakowie zajęło mi trochę czasu, czasu mile spędzonego podczas kilkunastu sesji plenerowych. Możecie mi wierzyć, że doświadczenie to procentuje, a korzystając z niego możemy od razu sprecyzować plan sesji zdjęciowej i wybrać z tego pięknego miasta tylko najciekawsze fragmenty.'
                    }
                    entryContentP2={
                        'Świetnie się złożyło, że Olga i Dawid byli tak mocno związani z Krakowem, że nie wyobrażali sobie swojej sesji ślubnej w żadnym innym miejscu. Moje plenery przebiegają w luźnej atmosferze. Jako fotograf odpowiadam za wyszukiwanie miejsc, tworzenie kadrów i znajdowanie optymalnego światła. Kilka godzin spędzonych w miłej atmosferze i bez wielkich szaleńst w pozach zwykle pozwala zbudować Wasze zaufanie, a co za tym idzie każdy kolejny kadr ma potencjał by stać się lepszym od poprzedniego. Tym razem było mocno spacerowo. Zaczęliśmy blisko Teatru Słowackiego, następnie odwiedziliśmy Sky Bar w Hotelu Starym, przeszliśmy przez Rynek Główny i Sukiennice, minęliśmy Kościół Piotra i Pawła, ulicą poselską przespacerowaliśmy się do Powiśla. Plener ślubny kończyliśmy wieczorową porą bo przecież już wrzesień na Bulwarach Wiślanych korzystając z oświetlenia Hotelu Forum. Zapraszam na kilka kadrów z tego dnia i życzę miłego oglądania.'
                    }
                    slug={"sesja-slubna-w-krakowie-sukiennice-hotel-stary-bulwary-wislane"}
                    title={"SESJA W KRAKOWIE SUKIENNICE, HOTEL STARY, BULWARY WIŚLANE - OLGA i DAWID"}
                    tags={"Sesja ślubna w Krakowie, Plener ślubny Sukiennice, Sky Bar Hotel Stary, Bulwary Wiślane"}
                    date={"23 września 2020"}
                    menuNames={"OLGA i DAWID"}
                    menuTitle={"SESJA W KRAKOWIE SUKIENNICE, HOTEL STARY, BULWARY WIŚLANE"}
                    leadNames={"BASIA i MARCIN"}
                    leadTitle={"PLENER ŚLUBNY ZAMEK KRÓLEWSKI W NIEPOŁOMICACH"}
                    leadUrl={"/plener-slubny-zamek-krolewski-w-niepolomicach-czarny-staw"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_plenerowa_niepolomice.webp"}
                />
            
        );
};

export default BlogPageComponent;
