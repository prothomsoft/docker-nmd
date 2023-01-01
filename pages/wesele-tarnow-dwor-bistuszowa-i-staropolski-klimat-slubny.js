import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0003.webp", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0006.webp", height: 382 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0010.webp", height: 762 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0011.webp", height: 383 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0024.webp", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0027.webp", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0028.webp", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0031.webp", height: 806 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0033.webp", height: 850 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0041.webp", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0049.webp", height: 762 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0050.webp", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0052.webp", height: 383 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0057.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0067.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0073.webp", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0077.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0079.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0080.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0083.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0086.webp", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0087.webp", height: 762 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0088.webp", height: 510 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0089.webp", height: 762 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0091.webp", height: 762 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0093.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0094.webp", height: 383 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0096.webp", height: 762 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0097.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0099.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0100.webp", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0101.webp", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0102.webp", height: 566 },
            { imageSrc: "/static/blog/2017/05/99FOTOPL_SP_300_WEB.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0104.webp", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0105.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0107.webp", height: 762 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0108.webp", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0109.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0111.webp", height: 762 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0112.webp", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0103.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "wesele-tarnow_dwor_bistuszowa_i_staropolski_klimat_slubny_start.webp"}
                    images={images}
                    headTitle={"Dwór Bistuszowa, sala weselna na ślub plenerowy"}
                    headDescription={"Dwór w miejscowości Bistuszowa, klasyczny i barokowy wystrój, który przeniósł gości weselnych w dawne czasy i stworzył staropolską atmosferę. Zapraszam."}
                    headKeywords={"wesele tarnów,dwór bistuszowa,dom weselny tarnów,ślub plenerowy"}
                    headUrl={"https://99foto.pl/wesele-tarnow-dwor-bistuszowa-i-staropolski-klimat-slubny"}
                    entryContentP1={
                        'Ostatnio mam coraz większe szczęście do par, którym towarzyszę w ich najważniejszym dniu. Ola i Przemek to absolutnie wyjątkowi ludzie. Spotkaliśmy się już wcześniej na sesji narzeczeńskiej i już wtedy wiedziałem, że będzie fajny ślub i z pewnością mega zdjęcia. Poszukując sali weselnej w Tarnowie, Ola i Przemek szukali miejsca, które dzięki klasycznemu i barokowemu wystrojowi pozwoli przenieść gości weselnych w dawne czasy i stworzy staropolską atmosferę. Pozytywne opinie, których pełno można znaleźć w internecie pozwoliły im dokonać właściwego wyboru <a href="https://www.dworbistuszowa.pl/" target="_blank" rel="nofollow">Dwór Bistuszowa</a> okazał się być wymarzonym miejscem na ich ślub. Siedemnastowieczny dwór, przebudowany i odrestaurowany sto lat później, którego mocną stroną jest park dworski, przepiękna aleja lipowa to świetne miejsce na ślub plenerowy. Reportaż ślubny rozpoczęliśmy właśnie w tym tego dnia oddanym do dyspozycji Oli miejscu.'
                    }
                    entryContentP2={
                        'Wizażystka Ewa wykonała profesjonalny makijaż, a ja w tym czasie zdążyłem zwiedzić dworek i sfotografować ślubne detale. W ubieraniu sukni ślubnej Oli pomagała Ola, najlepsza przyjaciółka i niemalże siostra bliźniaczka. Adrianowi, kamerzyście z <a href="https://www.kraskastudio.pl/" target="_blank" rel="nofollow">Kraska Wedding Studio</a> bardzo spodobała się ksywa drugiej Oli i dzięki niej udało mu się kilka razy rozbawić dziewczyny. Po błogosławieństwie udaliśmy się do <a href="https://sanktuariumtuchow.pl/" target="_blank" rel="nofollow">Bazyliki Nawiedzenia Najświętszej Maryi Panny w Tuchowie</a>. Piękny kościół, który warto odwiedzić przemierzając małopolskę. Kazanie księdza kilkukrotnie wywołało uśmiech na twarzach Pary Młodej. Sakramentalne TAK, zdjęcie grupowe przy ołtarzu plenerowym i wszyscy udaliśmy się do Dworu Bistuszowa, gdzie na młodych czekał szereg atrakcji i niespodzianek. Pierwszą z nich było powitanie chlebem i solą w którym udział wzięła przebrana w staropolski strój właścicielka Dworu. Przemek otworzył drzwi lśniącego bielą Jaguara i przeprowadził Ole szpalerem wykonanym przez zaproszonych gości. Altana na moment stała się domem życzeń ślubnych, przy których nie zabrakło wzruszeń i radości. Krótki deszcz był kolejną atrakcją, która nikogo nie zaskoczyła i nadała charakteru całemu wydarzeniu.  W altanie czekał już Zespół Muzyczny Hit Street, który uświetnił zabawę tego wieczoru. Plenerowa zabawa trwała do białego rana, natomiast oczepiny tego wieczoru to istne szaleństwo. W tak zwanym między czasie zrobiliśmy wspólne zdjęcia rodzinne, które są moim zdaniem równie ważne jak reportaż ślubny. Same wspaniałe wspomnienia i mam nadzieję odzwierciedlające to fotografie poniżej. Miłego oglądania, a po więcej zdjęć zapraszam do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"wesele-tarnow-dwor-bistuszowa-i-staropolski-klimat-slubny"}
                    title={"WESELE TARNÓW, DWÓR BISTUSZOWA i STAROPOLSKI KLIMAT ŚLUBNY - OLA i PRZEMEK"}
                    tags={"wesele tarnów,dwór bistuszowa,dom weselny tarnów,ślub plenerowy"}
                    date={"14 maja 2017"}
                    menuNames={"OLA i PRZEMEK"}
                    menuTitle={"WESELE TARNÓW, DWÓR BISTUSZOWA i STAROPOLSKI KLIMAT ŚLUBNY"}
                    leadNames={"EWELINA i KAMIL"}
                    leadTitle={"HOTEL QUBUS KRAKÓW SESJA ZDJĘCIOWA"}
                    leadUrl={"/hotel-qubus-krakow-sesja-zdjeciowa"}
                    leadImage={process.env.staticImagesPath + "hotel_qubus_krakow_sesja_zdjeciowa_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
