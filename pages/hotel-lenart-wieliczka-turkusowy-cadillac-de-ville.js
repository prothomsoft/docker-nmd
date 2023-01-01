import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_001.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_002.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_003.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_004.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_005.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_006.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_012.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_013.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_008.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_007.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_010.webp", height: 382 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_011.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_009.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_015.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_014.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_017.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_016.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_018.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_019.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_020.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_021.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_022.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_023.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_024.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_025.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_026.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_027.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_028.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_029.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_030.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_031.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_032.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_033.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_034.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_035.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_036.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_037.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_038.webp", height: 382 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_039.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_040.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_042.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_041.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_044.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_043.webp", height: 762 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_045.webp", height: 566 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_046.webp", height: 805 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_047.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_048.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_049.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_050.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_051.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_052.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_053.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_054.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_055.webp", height: 566 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_056.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_057.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_058.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_059.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_060.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_061.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_062.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_063.webp", height: 382 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_064.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_065.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_066.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_067.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_068.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_069.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_070.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_071.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_072.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_073.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_074.webp", height: 526 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_075.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_076.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_077.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_078.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_079.webp", height: 762 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_080.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_081.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_082.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_083.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_084.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_085.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_086.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_087.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_088.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_089.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_090.webp", height: 806 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_091.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_092.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_093.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_094.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_095.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_096.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_097.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_098.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_099.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_100.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_101.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_102.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_103.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_104.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_105.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_106.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_107.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_108.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_109.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_110.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_111.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_112.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_113.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_114.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_115.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_116.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_117.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_118.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_119.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_120.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_121.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_122.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_123.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_124.webp", height: 382 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_125.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_126.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_127.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_128.webp", height: 383 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "hotel_lenart_wieliczka_zdjecia_slubne.webp"}
                    images={images}
                    headTitle={"Zdjęcia ślubne Hotel Lenart Wieliczka, fotograf ślubny"}
                    headDescription={"Reportaż ze ślubu Moniki i Mariusza w Hotelu Lenart w Wieliczce. Uroczystość zaślubin w Kościele św. Sebastiana w Wieliczce. Zapraszam do oglądania."}
                    headKeywords={"fotograf ślubny wieliczka, zdjęcia ślubne hotel lenart w wieliczce"}
                    headUrl={"https://99foto.pl/hotel-lenart-wieliczka-turkusowy-cadillac-de-ville"}
                    entryContentP1={
                        'Zapowiadała się bardzo ciepła słoneczna sobota, bez najmniejszej kropelki deszczu i rzeczywiście tak było. Południowe słońce podgrzało atmosferę do blisko trzydziestu stopni. Gdy dodamy do tego temperaturę wywołaną przez emocje najważniejszego i jak napisała Monika już po ślubie najpiękniejszego dnia w jej życiu, to możecie wyobrazić sobie jak było gorąco. Krótko więc od początku, czyli od przygotowań Panny Młodej, które odbyły się w <a href="https://www.facebook.com/Gabinet-Hibiskus-Wieliczka-152566164795487/" target="_blank" rel="nofollow">Gabinecie Kosmetycznym Hibiskus w Wieliczce</a>. Dziewczyny pracowały od godziny dziewiątej rano nad fryzurą, malowały i utrwalały paznokcie, a na koniec tych przygotowań mistrzowski makijaż wykonała Ola. Nie mogło zabraknąć kilku minut na przygotowania Mariusza. Podjechaliśmy więc odnaleźć się w totalnie Krakowskich klimatach, mieszkaniu rodziców Pana Młodego w samym centrum naszego pięknego miasta. W ubieraniu spinek, muchy i garnituru ślubnego asystował Wujek Mariusza. Zielony Cadillac de Ville zaparkował przed domem Moniki w Wieliczce. Mariusz szczęśliwy ujrzał Monikę po raz pierwszy tego dnia. Widziałem w jego oczach, że chciał, by chwila ta trwała wiecznie. W domu odbyło się błogosławieństwo, a Para Młoda podziękowała rodzicom. Nadszedł czas by udać się do kameralnego <a href="https://kosciol-sebastian.pl/" target="_blank" rel="nofollow">Kościoła Św. Sebastiana w Wieliczce</a>.'
                    }
                    entryContentP2={
                        'Meczu o szesnastej tym razem nie było, pomimo tego wygłoszone kazanie było tak krótkie, jakby Niemcy grali w półfinale. Sakramentalne TAK, zdjęcie grupowe, moc gorących życzeń przed Kościołem, a dosłownie chwilkę później Monika i Mariusz wylądowali na czerwonym dywanie w <a href="https://hotellenart.pl/" target="_blank" rel="nofollow">Hotelu Lenart w Wieliczce</a>. Rodzice tradycyjnie przywitali Parę Młodą chlebem i solą, a kieliszki uderzając o ziemię przeszły do historii. Razem z Krzyśkiem z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">CamDesign - Pracownia Filmu Ślubnego</a> rejestrowaliśmy każdą minutę wydarzeń na parkiecie, oraz wszystkie możliwe zabawy. Goście chętnie korzystali z foto budki, tworząc pamiątkowe wpisy w księdze gości Młodej Pary. Zabawa trwała do białego rana. Moniko i Mariuszu, dziękuję, że mogłem być tam z Wami i zapraszam na zdjęcia. Miłego oglądania. Grubo ponad pięćset zdjęć jak zwykle w strefie klienta, do której hasło znajdziecie na mojej wizytówce.'
                    }
                    slug={"hotel-lenart-wieliczka-turkusowy-cadillac-de-ville"}
                    title={"HOTEL LENART WIELICZKA, TURKUSOWY CADILLAC DE VILLE - MONIKA i MARIUSZ"}
                    tags={"fotograf ślubny wieliczka, zdjęcia ślubne hotel lenart w wieliczce"}
                    date={"28 lipca 2018"}
                    menuNames={"MONIKA i MARIUSZ"}
                    menuTitle={"HOTEL LENART WIELICZKA, TURKUSOWY CADILLAC DE VILLE"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ŚLUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={process.env.staticImagesPath + "sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
