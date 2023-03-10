import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_002.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_012.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_010.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_017.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_018.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_020.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_022.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_023.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_025.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_027.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_029.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_031.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_034.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_036.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_038.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_040.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_041.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_043.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_045.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_046.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_048.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_049.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_052.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_055.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_060.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_063.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_065.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_069.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_071.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_074.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_076.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_078.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_080.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_084.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_086.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_088.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_090.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_097.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_099.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_101.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_103.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_105.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_109.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_111.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_115.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_121.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_124.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_126.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/hotel_lenart_wieliczka_128.webp", height: 383 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "hotel_lenart_wieliczka_zdjecia_slubne.webp"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Hotel Lenart Wieliczka, fotograf ??lubny"}
                    headDescription={"Reporta?? ze ??lubu Moniki i Mariusza w Hotelu Lenart w Wieliczce. Uroczysto???? za??lubin w Ko??ciele ??w. Sebastiana w Wieliczce. Zapraszam do ogl??dania."}
                    headKeywords={"fotograf ??lubny wieliczka, zdj??cia ??lubne hotel lenart w wieliczce"}
                    headUrl={"https://99foto.pl/hotel-lenart-wieliczka-turkusowy-cadillac-de-ville"}
                    entryContentP1={
                        'Zapowiada??a si?? bardzo ciep??a s??oneczna sobota, bez najmniejszej kropelki deszczu i rzeczywi??cie tak by??o. Po??udniowe s??o??ce podgrza??o atmosfer?? do blisko trzydziestu stopni. Gdy dodamy do tego temperatur?? wywo??an?? przez emocje najwa??niejszego i jak napisa??a Monika ju?? po ??lubie najpi??kniejszego dnia w jej ??yciu, to mo??ecie wyobrazi?? sobie jak by??o gor??co. Kr??tko wi??c od pocz??tku, czyli od przygotowa?? Panny M??odej, kt??re odby??y si?? w <a href="https://www.facebook.com/Gabinet-Hibiskus-Wieliczka-152566164795487/" target="_blank" rel="nofollow">Gabinecie Kosmetycznym Hibiskus w Wieliczce</a>. Dziewczyny pracowa??y od godziny dziewi??tej rano nad fryzur??, malowa??y i utrwala??y paznokcie, a na koniec tych przygotowa?? mistrzowski makija?? wykona??a Ola. Nie mog??o zabrakn???? kilku minut na przygotowania Mariusza. Podjechali??my wi??c odnale???? si?? w totalnie Krakowskich klimatach, mieszkaniu rodzic??w Pana M??odego w samym centrum naszego pi??knego miasta. W ubieraniu spinek, muchy i garnituru ??lubnego asystowa?? Wujek Mariusza. Zielony Cadillac de Ville zaparkowa?? przed domem Moniki w Wieliczce. Mariusz szcz????liwy ujrza?? Monik?? po raz pierwszy tego dnia. Widzia??em w jego oczach, ??e chcia??, by chwila ta trwa??a wiecznie. W domu odby??o si?? b??ogos??awie??stwo, a Para M??oda podzi??kowa??a rodzicom. Nadszed?? czas by uda?? si?? do kameralnego <a href="https://kosciol-sebastian.pl/" target="_blank" rel="nofollow">Ko??cio??a ??w. Sebastiana w Wieliczce</a>.'
                    }
                    entryContentP2={
                        'Meczu o szesnastej tym razem nie by??o, pomimo tego wyg??oszone kazanie by??o tak kr??tkie, jakby Niemcy grali w p????finale. Sakramentalne TAK, zdj??cie grupowe, moc gor??cych ??ycze?? przed Ko??cio??em, a dos??ownie chwilk?? p????niej Monika i Mariusz wyl??dowali na czerwonym dywanie w <a href="https://hotellenart.pl/" target="_blank" rel="nofollow">Hotelu Lenart w Wieliczce</a>. Rodzice tradycyjnie przywitali Par?? M??od?? chlebem i sol??, a kieliszki uderzaj??c o ziemi?? przesz??y do historii. Razem z Krzy??kiem z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">CamDesign - Pracownia Filmu ??lubnego</a> rejestrowali??my ka??d?? minut?? wydarze?? na parkiecie, oraz wszystkie mo??liwe zabawy. Go??cie ch??tnie korzystali z foto budki, tworz??c pami??tkowe wpisy w ksi??dze go??ci M??odej Pary. Zabawa trwa??a do bia??ego rana. Moniko i Mariuszu, dzi??kuj??, ??e mog??em by?? tam z Wami i zapraszam na zdj??cia. Mi??ego ogl??dania. Grubo ponad pi????set zdj???? jak zwykle w strefie klienta, do kt??rej has??o znajdziecie na mojej wizyt??wce.'
                    }
                    slug={"hotel-lenart-wieliczka-turkusowy-cadillac-de-ville"}
                    title={"HOTEL LENART WIELICZKA, TURKUSOWY CADILLAC DE VILLE - MONIKA i MARIUSZ"}
                    tags={"fotograf ??lubny wieliczka, zdj??cia ??lubne hotel lenart w wieliczce"}
                    date={"28 lipca 2018"}
                    menuNames={"MONIKA i MARIUSZ"}
                    menuTitle={"HOTEL LENART WIELICZKA, TURKUSOWY CADILLAC DE VILLE"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ??LUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={process.env.staticS3ImagesPath + "sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
