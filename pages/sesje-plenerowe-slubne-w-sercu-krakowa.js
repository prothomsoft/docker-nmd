import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0022.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0023.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0004.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0006.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0009.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0011.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0013.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0002.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/sesja_zdjeciowa_krakow_0010.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesje_plenerowe_slubne_w_sercu_krakowa_start.webp"}
                    images={images}
                    headTitle={"Sesje plenerowe ??lubne Krak??w"}
                    headDescription={"Serdecznie zapraszam na sesje plenerowe ??lubne do Krakowa. Mieszkam w tym mie??cie i potrafi?? zaproponowa?? fajne miejsca na niezapomniane zdj??cia."}
                    headKeywords={"sesja zdj??ciowa krak??w,plener ??lubny na wawelu"}
                    headUrl={"https://99foto.pl/sesje-plenerowe-slubne-w-sercu-krakowa"}
                    entryContentP1={
                        "Krak??w to miejsce pi??kne, niezwyk??e i spe??niaj??ce wszystkie kryteria niezb??dne do wykonania niezapomnianej plenerowej sesji ??lubnej. Dodajmy do tego jeszcze ??wietnie przygotowan??, u??miechni??t?? par?? czyli Natali?? i Piotra, gram kreatywnych pomys????w fotografa, kilka promieni majowego s??o??ca i mog?? powiedzie??, ??e zdj??cia praktycznie robi??y si?? same. Nie mia??em okazji fotografowa?? ??lubu Natalii i Piotra. ??lub ten odby?? si?? blisko rok temu. Od czego mamy jednak facebook, instagram i wyszukiwarki internetowe. M??odzi wpisali has??o sesja zdj??ciowa Krak??w i w ten spos??b mieli??my okazj?? mi??o sp??dzi?? jedno popo??udnie, przeszukuj??c Krak??w w poszukiwaniu inspiracji i ciekawych kadr??w."
                    }
                    entryContentP2={
                        "Zwiedzanie miasta rozpocz??li??my od bordowej elewacji Opery Krakowskiej. Nast??pnie ulic?? Kopernika przeszli??my w okolic?? Ko??cio??a Mariackiego. Przemili Krakowscy gospodarze Muzeum Narodowego w Sukiennicach i Hotelu Starego nie zezwolili nam na wej??cie do ich obiekt??w, bez dodatkowych przez nikogo oficjalnie nie okre??lonych op??at. Przeszli??my na Plac Szczepa??ski pod fontanny, nast??pnie pod Uniwersytet Jagielo??ski, gdzie kwitn?? r????nokolorowe tulipany. Przespacerowali??my si?? ulic?? Grodzk?? do Wawelu na moment zatrzymuj??c si?? pod Ko??cio??em Piotra i Paw??a. Odwiedzili??my nowe budynki Powi??la, miejce o du??ym potencjale, kt??re ca??y czas odkrywam. Ostatnie kadry tego dnia zrobili??my na Wawelu. Serdecznie zapraszam na kilka zdj???? z tego dnia i kilka kadr??w, kt??re odnalaz??em po raz kolejny opuszczaj??c stref?? komfortu. Mi??ego ogl??dania."
                    }
                    slug={"sesje-plenerowe-slubne-w-sercu-krakowa"}
                    title={"SESJE PLENEROWE ??LUBNE W SERCU KRAKOWA - NATALIA i PIOTR"}
                    tags={"sesja zdj??ciowa krak??w,plener ??lubny na wawelu"}
                    date={"11 maja 2017"}
                    menuNames={"NATALIA i PIOTR"}
                    menuTitle={"SESJE PLENEROWE ??LUBNE W SERCU KRAKOWA"}
                    leadNames={"EWELINA i KAMIL"}
                    leadTitle={"HOTEL QUBUS KRAK??W SESJA ZDJ??CIOWA"}
                    leadUrl={"/hotel-qubus-krakow-sesja-zdjeciowa"}
                    leadImage={process.env.staticS3ImagesPath + "hotel_qubus_krakow_sesja_zdjeciowa_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
