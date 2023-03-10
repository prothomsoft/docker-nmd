import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let imagesParagraph1 = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_002.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_003.webp", height: 763 },
        ];

        let imagesParagraph3 = [{ imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_zdjeciowa_w_krakowie_0001.webp", height: 763 }];

        let imagesParagraph2 = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_004.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_006.webp", height: 763 },
        ];

        let imagesParagraph4 = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_007.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_009.webp", height: 851 },
        ];

        let imagesParagraph5 = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_012.webp", height: 763 },
        ];

        let imagesParagraph6 = [{ imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_zdjeciowa_w_krakowie_0002.webp", height: 851 }];

        let imagesParagraph7 = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_014.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_015.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_016.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/04/99FOTOPL_SPP_017.webp", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "marlena_start.webp"}
                    headTitle={"Sesja ??lubna w Krakowie. Miejsca idealne na romantyczne kadry"}
                    headDescription={"Sesja ??lubna pi??kna, romantyczna z niesamowitymi i maj??cymi to co?? w sobie kadrami. Wybierzcie magiczny Krak??w. Zapraszam."}
                    headKeywords={"sesja ??lubna w Krakowie, miejsca plenerowe Krak??w, pomys??y na sesje ??lubn??"}
                    headUrl={"https://99foto.pl/sesja-slubna-w-krakowie-miejsca-idealnie-nadajace-sie-na-romantyczne-kadry"}
                    entryContentP1={
                        "Sesja ??lubna to prawdziwy must have ka??dej pary m??odej. Godziny przed lustrem, idealna suknia ??lubna i garnitur skrojony na miar?? po prostu musz?? zosta?? uwiecznione w obiektywie fotografa! Oczywi??cie zdj??cia ze ??lubu i wesela s?? standardem, ale wtedy nie jeste??cie sami. Wok???? was jest mn??stwo os??b, wiele si?? dzieje. Trudno o chwil?? skupienia i uwagi tylko dla siebie nawzajem. Tak?? szans?? stwarza specjalna sesja ??lubna, na kt??r?? warto si?? zdecydowa??."
                    }
                    imagesParagraph1={imagesParagraph1}
                    entryContentP2={
                        "Jest wiele pi??knych scenerii na wykonanie sesji. Zdj??cia pary m??odej wspaniale prezentuj?? si?? zar??wno na ??onie natury, jak i w oryginalnych przestrzeniach z wykorzystaniem architektury. Nie da si?? ukry??, ??e starsze polskie miasta maj?? w sobie to co??. Klimat zabytk??w po????czony z pi??kn?? przyrod?? to doskona??e t??o dla zaprezentowania waszych uczu?? w obiektywie fotografa. Je??li zastanawiacie si?? nad pi??knym miejscem, kt??re jest jednocze??nie romantyczne i daje wiele mo??liwo??ci na ciekawe kadry, Krak??w z pewno??ci?? spe??ni wasze oczekiwania!"
                    }
                    imagesParagraph2={imagesParagraph2}
                    entryContentP3={
                        "Zacznijmy od pocz??tku. Krak??w to miasto w po??udniowej Polsce, by??a stolica i siedziba kr??l??w z wielowiekow?? histori??. W Krakowie opr??cz starych, klimatycznych uliczek i wielu zabytk??w jest r??wnie?? nowoczesna architektura i sporo zieleni. Jest to miasto t??tni??ce ??yciem, z mn??stwem turyst??w, event??w, pokaz??w ulicznych i sztuki. Je??li nie znacie dobrze Krakowa, pierwsza my??l kt??ra przyjdzie wam do g??owy, to z pewno??ci?? Stare Miasto, Rynek, Sukiennice, Ko??ci???? Mariacki, Wawel i oczywi??cie pla??a nad Wis????. Ale to nie wszystkie pi??kne miejsca tego miasta!"
                    }
                    imagesParagraph3={imagesParagraph3}
                    entryContentP4={
                        "Kochacie pi??kno natury? Nie ma nic bardziej romantycznego ni?? widok ukochanej i ukochanego nad wod?? przy zachodz??cym s??o??cu? Zalew Zakrz??wek spe??ni wasze oczekiwania i marzenia o idealnej sesji zdj??ciowej! W Krakowie jest r??wnie?? wiele park??w, kt??re swoim urokiem zachwycaj?? w pi??knych wiosennych, letnich, jesiennych, a nawet zimowych kadrach."
                    }
                    imagesParagraph4={imagesParagraph4}
                    entryContentP5={
                        "Kolejne miejsca z niesamowit?? sceneri?? i widokiem to s??ynne kopce. W Krakowie jest ich kilka, cho?? najbardziej znany to oczywi??cie Kopiec Ko??ciuszki. Urokliwy jest tak??e Kopiec Krakusa i z pewno??ci?? nie tak oblegany. Je??li cenicie sobie intymn?? atmosfer?? i stronicie od ludzi, rozwa??cie Kamienio??om Liban. Jest to tajemnicze miejsce z potencja??em do niesamowitych kadr??w. Ma??o znany, ale pi??kny jest te?? Ogr??d Muzeum Archeologicznego z widokiem na Wawel."
                    }
                    imagesParagraph5={imagesParagraph5}
                    entryContentP6={
                        "Jednymi z bardziej urokliwych, r??wnie zielonych miejsc s?? dworki - na przyk??ad w Tomaszowicach, Dworek Jana Matejki czy Dworek Tetmajer??wka lub Bia??opr??dnicki. Pa??acowa, nieco za??ciankowa sesja, przepi??knie uzupe??ni wasze wesele w stylu rustykalnym lub w stylu boho. Blisko natury jest tak??e Las Wolski ??? spory zielony teren oddalony od centrum, w kt??rym jest wiele naprawd?? pi??knych, romantycznych i ustronnych miejsc. Cz??sto wybierany przez pary m??ode do sesji ??lubnej jest tak??e krakowski Ogr??d Botaniczny."
                    }
                    imagesParagraph6={imagesParagraph6}
                    entryContentP7={
                        'Pi??kne krakowskie uliczki, kt??re dodadz?? klimatu waszej sesji to na przyk??ad Grodzka lub Kanoniczna. Do nietypowych miejsc zaliczy?? mo??na na przyk??ad kolorowe schody w dzielnicy Podg??rze. Ciekawe t??o dla kadr??w daje te?? zabudowa ulicy Wawrzy??ca oraz Muzeum In??ynierii Miejskiej. Oczywi??cie nie mo??na zapomnie?? te?? o s??ynnym Kazimierzu, gdzie zdj??cia zar??wno w ci??gu dnia, jak i noc?? wychodz?? przepi??kne! Niech waszej uwadze nie umknie ulica J??zefa i brama przy pubie "Stajnia". Zdj??cia b??d?? magiczne!'
                    }
                    imagesParagraph7={imagesParagraph7}
                    entryContentP8={
                        "Podsumowuj??c, je??li marzycie o pi??knej i romantycznej sesji ??lubnej z niesamowitymi i maj??cymi ???to co????? kadrami, wybierzcie magiczny Krak??w. Jest to wr??cz raj dla mi??o??nik??w zabytk??w i architektury, ale tak??e natury! Wystarczy wybra?? tylko miejsca, kt??re najbardziej do was pasuj?? i dobrego fotografa, a efekt b??dzie niesamowity!"
                    }
                    entryContentP9={'Artyku?? powsta?? przy wsp????pracy portalu <a href="https://www.weselezklasa.pl/" target="_blank" rel="nofollow">Wesele z klas??</a>.'}
                    slug={"sesja-slubna-w-krakowie-miejsca-idealnie-nadajace-sie-na-romantyczne-kadry"}
                    title={"SESJA ??LUBNA W KRAKOWIE. MIEJSCA IDEALNE NA ROMANTYCZNE KADRY"}
                    tags={"sesja ??lubna w Krakowie, miejsca plenerowe Krak??w, pomys??y na sesje ??lubn??"}
                    date={"6 sierpnia 2019"}
                    menuNames={"SESJA ??LUBNA W KRAKOWIE"}
                    menuTitle={"MIEJSCA IDEALNE NA ROMANTYCZNE KADRY. POMYS??Y NA SESJE."}
                    leadNames={"MARLENA i ADAM"}
                    leadTitle={"MIEJSKA SESJA NARZECZE??SKA, PI??KNI, M??ODZI i ZAKOCHANI"}
                    leadUrl={"/miejska-sesja-narzeczenska-piekni-mlodzi-i-zakochani"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_narzeczenska_krakow_kazimierz.webp"}
                />
            
        );
};

export default BlogPageComponent;
