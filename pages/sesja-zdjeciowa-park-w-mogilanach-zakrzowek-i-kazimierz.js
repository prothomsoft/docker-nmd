import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0002.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0005.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0013.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0009.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0012.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0014.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0016.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0017.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0019.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0020.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0021.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_zdjeciowa_park_w_mogilanach_zakrzowek_i_kazimierz_start.webp"}
                    images={images}
                    headTitle={"Sesja zdjęciowa Park w Mogilanach"}
                    headDescription={"Park w Mogilanach, Zakrzówek i Kazimierz to jedna z tras plenerowych, które polecam na sesje zdjęciowe w Krakowie. Sprawdźcie na moim blogu."}
                    headKeywords={"park w mogilanach,plener ślubny zakrzówek,sesja ślubna kazimierz"}
                    headUrl={"https://99foto.pl/sesja-zdjeciowa-park-w-mogilanach-zakrzowek-i-kazimierz"}
                    entryContentP1={
                        "Kraków to piękne miejsce, pełne niezwykłych miejsc i świetnie utrzymanej zieleni, a w połączeniu z dobrym popołudniowym światłem i w miłym towarzystwem Pary Młodej świetny sposób na spędzanie wolnego czasu. Sesja plenerowa w Krakowie to relaks po ślubie i okazja do zrobienia kilku zdjęć na zupełnym luzie. Julia i Piotrek to moi sąsiedzi i pomimo, że nie fotografowałem ich ślubu chętnie zgodziłem się na zdjęciową sesję ślubną. Starannie wybraliśmy miejsca tak i ułożyliśmy plan."
                    }
                    entryContentP2={
                        "Sprawdziliśmy również pogodę dzień wcześniej i o godzinie siedemnastej rozpoczęliśmy fotografowanie w pierwszym miejscu, którym był Park w Mogilanach. Jest to miejsce charakterystyczne z fajną panoramą na góry, dwiema alejkami z drzew i dworkiem, który mam nadzieje doczeka się w przyszłości renowacji. Następnie wpadliśmy na chwilę na Zakrzówek, kończąc nasze zdjęcia w plenerze na Kazimierzu. Świetnie spędzony czas w Krakowie i okolicach, kilka ciekawych zarejestrowanych opowieści Piotrka. Zapraszam na zdjęcia i miłego oglądania."
                    }
                    slug={"sesja-zdjeciowa-park-w-mogilanach-zakrzowek-i-kazimierz"}
                    title={"SESJA ZDJĘCIOWA PARK W MOGILANACH, ZAKRZÓWEK i KAZIMIERZ - JULIA i PIOTR"}
                    tags={"park w mogilanach,plener ślubny zakrzówek,sesja ślubna kazimierz"}
                    date={"16 sierpnia 2017"}
                    menuNames={"JULIA i PIOTR"}
                    menuTitle={"SESJA ZDJĘCIOWA PARK W MOGILANACH, ZAKRZÓWEK i KAZIMIERZ"}
                    leadNames={"KINGA i JULIEN"}
                    leadTitle={"ŚLUB CYWILNY i WESELE W PLENERZE - WITKOWA CHATA KRAKÓW"}
                    leadUrl={"/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow"}
                    leadImage={process.env.staticS3ImagesPath + "slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
