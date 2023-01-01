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
                    headTitle={"Park Mogilany, buziaki skąpane w promieniach słońca"}
                    headDescription={"Mury Opactwa Tynieckiego, zieleń Parku w Mogilanach i moc buziaków skąpanych w promieniach zachodzącego słońca. Sesja narzeczeńska Teresy i Andrzeja w Krakowie. Zapraszam na bloga."}
                    headKeywords={"sesja narzeczeńska Kraków, Park Mogilany, Opactwo Benedyktynów Tyniec, Opactwo Tynieckie"}
                    headUrl={"https://99foto.pl/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca"}
                    entryContentP1={
                        'Długa historia moi drodzy. Rozpoczyna się ona trzy lata temu na ślubie Pauliny i Darka w <a href="https://www.skansensmakow.pl/wesela/" target="_blank" rel="nofollow">Skansenie Smaków w Kryspinowie</a>. Podczas przygotowań Pauliny poznałem siostrę Teresy Anię. W tak zwanym międzyczasie Piotr kupił pierścionek, zaplanował oświadczyny, a gdy Ania powiedziała TAK wspólnie wybrali sale weselną, ustalili datę ślubu i wybrali fotografa. Miałem szczęscie bo wypadło na mnie. Ekipa na ślubie Ani i Piotra w <a href="http://kajasowka.com.pl/oferta-imprez/" target="_blank" rel="nofollow">Kasztelu Kajasówka</a> była mocno zaprzyjaźniona, a gdy do tego dodamy, że imprezę prowadził DJ Dawid, legenda krakowskich dance florów, którego miałem okazję poznać już chwilę temu, poczułem się dosłownie jak domu. Wiemy, czas płynie szybko i już za rok na Orawie spotkamy się na ślubie Teresy i Andrzeja. Będzie to w perspektywie czterech lat trzeci ślub, na którym po raz kolejny spotka się ta sama doskonale zaprzyjaźniona grupa przyjaciół - może nie ze sobą, ale ze swoim ulubionym fotografem na pewno. Ale tym czasem postanowiliśmy dobrze wykorzystać czas przedślubny i umówić się na kilka zdjęć podczas sesji narzeczeńskiej oczywiście w Krakowie.'
                    }
                    entryContentP2={
                        'Zadanie było łatwe. Instagramowe foty serwowane momentami przez Terczi i Andrzeja zapowiadały bardzo fotogeniczną parę, której nie będzie trzeba namawiać do spontanicznych reakcji, niezliczonej ilości buziaków i uśmiechów. Miejsca na plener wybrała Teresa, kierując się wpisami na moim blogu. Wybraliśmy <a href="http://www.parki.org.pl/parki-dworskie-i-przypalacowe/park-w-mogilanach" target="_blank" rel="nofollow">Park w Mogilanach</a> i <a href="http://opactwotynieckie.pl/" target="_blank" rel="nofollow">Opactwo Benedyktynów w Tyńcu</a>. Trochę rozmawialiśmy, dużo fotografowaliśmy, było zupełnie bezstresowo. Czas przeznaczony na sesję skończył się szybko jak wszystkie dobre rzeczy. Znajdźcie chwilę, pooglądajcie zdjęcia i sprawdźcie sami czy dobrze nam poszło. Jeżeli stwierdzicie, że tak to zostawcie proszę kciuka w górę na fejsie. Pamiętajcie, że warto zrobić sesję narzeczeńską w Krakowie jeszcze przed ślubem, poznać fotografa czyli mnie, przyzwyczaić się do obiektywu aparatu, złapać kilka ustawień ciała w których wyglądacie i czujecie się świetnie. Serdecznie zapraszam, a tymczasem życzę miłego oglądania.'
                    }
                    slug={"park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca"}
                    title={"PARK MOGILANY, BUZIAKI SKĄPANE W PROMIENIACH SŁOŃCA - TERESA i ANDRZEJ"}
                    tags={"sesja narzeczeńska Kraków, Park Mogilany, Opactwo Benedyktynów Tyniec, Opactwo Tynieckie"}
                    date={"30 sierpnia 2019"}
                    menuNames={"TERESA I ANDRZEJ"}
                    menuTitle={"PARK MOGILANY I MOC BUZIAKÓW SKĄPANYCH W PROMIENIACH SŁOŃCA"}
                    leadNames={"ANNA i PIOTR"}
                    leadTitle={"BAZYLIKA BOŻEGO CIAŁA KRAKÓW, FOTOREPORTAŻ ŚLUBNY"}
                    leadUrl={"/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"}
                    leadImage={process.env.staticS3ImagesPath + "bazylika-bozego-ciala-krakow-fotoreportaz-slubny.webp"}
                />
            
        );
};

export default BlogPageComponent;