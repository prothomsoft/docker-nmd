import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_002.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_003.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_005.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_032.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_007.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_008.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_010.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_012.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_031.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_015.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_017.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_019.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_020.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_021.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_023.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_025.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_028.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_029.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_026.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_033.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/08/sesja_narzeczenska_w_krakowie_016.webp", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_narzeczenska_klasztor_w_tyncu.webp"}
                    images={images}
                    headTitle={"Park Mogilany, buziaki sk??pane w promieniach s??o??ca"}
                    headDescription={"Mury Opactwa Tynieckiego, ziele?? Parku w Mogilanach i moc buziak??w sk??panych w promieniach zachodz??cego s??o??ca. Sesja narzecze??ska Teresy i Andrzeja w Krakowie. Zapraszam na bloga."}
                    headKeywords={"sesja narzecze??ska Krak??w, Park Mogilany, Opactwo Benedyktyn??w Tyniec, Opactwo Tynieckie"}
                    headUrl={"https://99foto.pl/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca"}
                    entryContentP1={
                        'D??uga historia moi drodzy. Rozpoczyna si?? ona trzy lata temu na ??lubie Pauliny i Darka w <a href="https://www.skansensmakow.pl/wesela/" target="_blank" rel="nofollow">Skansenie Smak??w w Kryspinowie</a>. Podczas przygotowa?? Pauliny pozna??em siostr?? Teresy Ani??. W tak zwanym mi??dzyczasie Piotr kupi?? pier??cionek, zaplanowa?? o??wiadczyny, a gdy Ania powiedzia??a TAK wsp??lnie wybrali sale weseln??, ustalili dat?? ??lubu i wybrali fotografa. Mia??em szcz??scie bo wypad??o na mnie. Ekipa na ??lubie Ani i Piotra w <a href="http://kajasowka.com.pl/oferta-imprez/" target="_blank" rel="nofollow">Kasztelu Kajas??wka</a> by??a mocno zaprzyja??niona, a gdy do tego dodamy, ??e imprez?? prowadzi?? DJ Dawid, legenda krakowskich dance flor??w, kt??rego mia??em okazj?? pozna?? ju?? chwil?? temu, poczu??em si?? dos??ownie jak domu. Wiemy, czas p??ynie szybko i ju?? za rok na Orawie spotkamy si?? na ??lubie Teresy i Andrzeja. B??dzie to w perspektywie czterech lat trzeci ??lub, na kt??rym po raz kolejny spotka si?? ta sama doskonale zaprzyja??niona grupa przyjaci???? - mo??e nie ze sob??, ale ze swoim ulubionym fotografem na pewno. Ale tym czasem postanowili??my dobrze wykorzysta?? czas przed??lubny i um??wi?? si?? na kilka zdj???? podczas sesji narzecze??skiej oczywi??cie w Krakowie.'
                    }
                    entryContentP2={
                        'Zadanie by??o ??atwe. Instagramowe foty serwowane momentami przez Terczi i Andrzeja zapowiada??y bardzo fotogeniczn?? par??, kt??rej nie b??dzie trzeba namawia?? do spontanicznych reakcji, niezliczonej ilo??ci buziak??w i u??miech??w. Miejsca na plener wybra??a Teresa, kieruj??c si?? wpisami na moim blogu. Wybrali??my <a href="http://www.parki.org.pl/parki-dworskie-i-przypalacowe/park-w-mogilanach" target="_blank" rel="nofollow">Park w Mogilanach</a> i <a href="http://opactwotynieckie.pl/" target="_blank" rel="nofollow">Opactwo Benedyktyn??w w Ty??cu</a>. Troch?? rozmawiali??my, du??o fotografowali??my, by??o zupe??nie bezstresowo. Czas przeznaczony na sesj?? sko??czy?? si?? szybko jak wszystkie dobre rzeczy. Znajd??cie chwil??, poogl??dajcie zdj??cia i sprawd??cie sami czy dobrze nam posz??o. Je??eli stwierdzicie, ??e tak to zostawcie prosz?? kciuka w g??r?? na fejsie. Pami??tajcie, ??e warto zrobi?? sesj?? narzecze??sk?? w Krakowie jeszcze przed ??lubem, pozna?? fotografa czyli mnie, przyzwyczai?? si?? do obiektywu aparatu, z??apa?? kilka ustawie?? cia??a w kt??rych wygl??dacie i czujecie si?? ??wietnie. Serdecznie zapraszam, a tymczasem ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca"}
                    title={"PARK MOGILANY, BUZIAKI SK??PANE W PROMIENIACH S??O??CA - TERESA i ANDRZEJ"}
                    tags={"sesja narzecze??ska Krak??w, Park Mogilany, Opactwo Benedyktyn??w Tyniec, Opactwo Tynieckie"}
                    date={"30 sierpnia 2019"}
                    menuNames={"TERESA I ANDRZEJ"}
                    menuTitle={"PARK MOGILANY I MOC BUZIAK??W SK??PANYCH W PROMIENIACH S??O??CA"}
                    leadNames={"ANNA i PIOTR"}
                    leadTitle={"BAZYLIKA BO??EGO CIA??A KRAK??W, FOTOREPORTA?? ??LUBNY"}
                    leadUrl={"/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"}
                    leadImage={process.env.staticS3ImagesPath + "bazylika-bozego-ciala-krakow-fotoreportaz-slubny.webp"}
                />
            
        );
};

export default BlogPageComponent;