import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0003.webp", height: 388 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0013.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0018.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0010.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0017.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0019.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0034.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "hotel_qubus_krakow_sesja_zdjeciowa_start.webp"}
                    images={images}
                    headTitle={"Hotel Qubus Kraków, sesja zdjęciowa"}
                    headDescription={"Taras widokowy Hotelu QUBUS w Krakowie, Lawendowe Pole i historia w którą nie uwierzycie. W imieniu Eweliny i Kamila serdecznie zapraszam na mojego bloga."}
                    headKeywords={"hotel qubus kraków,sesja zdjęciowa kraków"}
                    headUrl={"https://99foto.pl/hotel-qubus-krakow-sesja-zdjeciowa"}
                    entryContentP1={
                        'Moja przygoda z wchodzeniem do najróżniejszych miejsc w Krakowie związana jest z mało fajnymi wspomnieniami. Zwykle właściciele nie chcą udostępniać swoich wnętrz na potrzeby sesji zdjęciowych, a jeżeli już dają się namówić to co tu dużo mówić, tanio nie jest. Tym razem było inaczej. Zanim zaparkowałem auto na ulicy gazowej, czyli plenerowym punkcie startowym dla Starej Zajezdni, Stajni, a jednym słowem Kazimierza, podjechałem do <a href="https://www.qubushotel.com/pl/hotele/krakow/1/" target="_blank" rel="nofollow">Hotelu Qubus</a> by sprawdzić czy fontanna przed hotelem działa. Włączona nie była, więc wszedłem do środka pytając czy można wykorzystać widokowy taras hotelowy do zdjęć ślubnych i czy z okazji przyjazdu Donalda  Trumpa do Polski, Panowie Recepcjoniści (z dużej bo jest szacun) by tej fontanny nie odpalili.'
                    }
                    entryContentP2={
                        "W pierwszej chwili odpowiedź była, że nie da rady, ale kiedy trzydzieści minut później już z Eweliną i Kamilem zaczęliśmy robić tam zdjęcia wyszedł przemiły Pan i zaproponował, że fontannę specjalnie dla nas włączy. Kilka minut później podziwialiśmy widok z tarasu widokowego Hotelu Qubus. Widok jest świetny. Nie odpuściliśmy też klatki zdjęciowej w stylowym korytarzu i na basenie. Dalsza część sesji odbyła się na Lawendowym Polu i nie będę Was zanudzał szczegółami. Zdjęcia niech wystarczą jako relacja. Miłego oglądania."
                    }
                    slug={"hotel-qubus-krakow-sesja-zdjeciowa"}
                    title={"HOTEL QUBUS KRAKÓW SESJA ZDJĘCIOWA - EWELINA i KAMIL"}
                    tags={"hotel qubus kraków,sesja zdjęciowa kraków"}
                    date={"10 lipca 2017"}
                    menuNames={"EWELINA i KAMIL"}
                    menuTitle={"HOTEL QUBUS KRAKÓW SESJA ZDJĘCIOWA"}
                    leadNames={"EWELINA i KAMIL"}
                    leadTitle={"HOTEL TADEUSZ USZEW i GÓRALSKA SALA WESELNA"}
                    leadUrl={"/hotel-tadeusz-uszew-i-goralska-sala-weselna"}
                    leadImage={process.env.staticS3ImagesPath + "hotel_tadeusz_uszew_i_goralska_sala_weselna_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
