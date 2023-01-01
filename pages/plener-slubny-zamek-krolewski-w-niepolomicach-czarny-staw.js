import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0001.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0003.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0006.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0009.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0012.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0014.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/plener_slubny_w_niepolomicach_0002.webp", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_plenerowa_niepolomice.webp"}
                    images={images}
                    headTitle={"Plener ślubny Zamek Królewski w Niepołomicach, Czarny Staw - Basia i Marcin"}
                    headDescription={"123"}
                    headKeywords={"plener ślubny niepołomice, plener ślubny Zamek Króleski w Niepołomicach, Czarny Staw w Puszczy Niepołomickiej"}
                    headUrl={"https://99foto.pl/plener-slubny-zamek-krolewski-w-niepolomicach-czarny-staw"}
                    entryContentP1={
                        'Sesja ślubna w plenerze jest świetnym i naturalnym dopełnieniem reportażu ślubnego. Czy będzie to trzydziestominutowa krótka sesja w dniu ślubu, trzygodzinny plener w jeden z wakacyjnych słonecznych dni czy całodniowa wyjazdowa sesja plenerowa w górach zależy tylko od Was. Każda para młoda poszukując dobrego fotografa ślubnego musi znaleźć odpowiedź również i na to pytanie. Pamiętajcie, że czasem nie warto szukać daleko, bo świetne miejscówki mamy tuż pod naszym nosem. Szczególnie, że Kraków i jego okolice oferują ogromną ilość świetnych miejsc na niezapomniany plener ślubny. <a href="http://www.zamekkrolewski.com.pl/" target="_blank" rel="nofollow">Plener ślubny na Zamku Królewskim w Niepołomicach</a> to świetna alternatywa dla pleneru na <a href="https://wawel.krakow.pl/" target="_blank" rel="nofollow">Zamku Królewskim na Wawelu</a> czy pleneru na <a href="http://pieskowaskala.eu/" target="_blank"  rel="nofollow">Zamku w Pieskowej Skale</a>.'
                    }
                    entryContentP2={
                        'Arkady zamkowe to zawsze miękkie światło, stonowane barwy i ciekawa architektura, pozwalające na uzyskanie ciekawych kadrów. Dopełnieniem zamkowej sesji plenerowej może być sesja zdjęciowa w lesie lub nad jeziorem. Przykładem miejsca, które z powodzeniem może zastąpić Szczyrbskie Jezioro jest <a href="https://www.niepolomice.eu/places/poland/malopolska/niepolomice/sport-1/czarny-staw-w-puszczy-niepolomickiej/" target="_blank" rel="nofollow">Czarny Staw w Puszczy Niepołomickiej</a> (no chyba, że zdjęcia nad jeziorem bez schroniska z trójkątnym dachem w tle się nie liczą). Las to wbrew pozorom nie tylko wspaniałe miejsce na grzyby i schronienie dla komarów ale też zachwycająca miejscówka na sesję plenerową. Otoczenie prawdziwej natury, kolorów zieleni i drewna potrafi wytworzyć wyjątkowy, naturalny klimat. Zdjęcia w lesie będą stanowić wspaniałe dopełnienie reportażu ślubnego z uroczystości, której motywem przewodnim był styl boho czy styl rustykalny. W imieniu Basi, Marcina i swoim zapraszam więc na krótką wycieczkę podczas której odwiedzimy <a href="http://www.zamekkrolewski.com.pl/" target="_blank" rel="nofollow">Zamek Królewski w Niepołomicach</a> i <a href="https://www.niepolomice.eu/places/poland/malopolska/niepolomice/sport-1/czarny-staw-w-puszczy-niepolomickiej/" target="_blank" rel="nofollow">Czarny Staw w Puszczy Niepołomickiej</a>. Serdecznie zapraszam na zdjęcia i życzę miłego oglądania.'
                    }
                    slug={"plener-slubny-zamek-krolewski-w-niepolomicach-czarny-staw"}
                    title={"PLENER ŚLUBNY ZAMEK KRÓLEWSKI W NIEPOŁOMICACH, CZARNY STAW - BASIA i MARCIN"}
                    tags={"plener ślubny niepołomice, plener ślubny Zamek Króleski w Niepołomicach, Czarny Staw w Puszczy Niepołomickiej"}
                    date={"31 sierpnia 2020"}
                    menuNames={"BASIA i MARCIN"}
                    menuTitle={"PLENER ŚLUBNY ZAMEK KRÓLEWSKI W NIEPOŁOMICACH, CZARNY STAW"}
                    leadNames={"NATALIA i KACPER"}
                    leadTitle={"WESELE EUFORIA MYŚLENICE, PLENER ŚLUBNY DWÓR MOGILANY"}
                    leadUrl={"/wesele-euforia-myslenice-plener-slubny-dwor-mogilany"}
                    leadImage={process.env.staticS3ImagesPath + "fotograf_slubny_wesele_mogilany_krakow.webp"}
                />
            
        );
};

export default BlogPageComponent;
