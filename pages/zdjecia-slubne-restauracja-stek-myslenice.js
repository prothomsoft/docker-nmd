import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0002.webp", height: 527 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0003.webp", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0011.webp", height: 382 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0141.webp", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0140.webp", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0139.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0008.webp", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0016.webp", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0013.webp", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0014.webp", height: 527 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0028.webp", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0029.webp", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0142.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0143.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0033.webp", height: 850 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0035.webp", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0144.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0037.webp", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0040.webp", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0044.webp", height: 806 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0047.webp", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0050.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0057.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0067.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0073.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0076.webp", height: 806 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0078.webp", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0077.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0079.webp", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0081.webp", height: 382 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0080.webp", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0083.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0087.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0089.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0091.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0093.webp", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0096.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0097.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0100.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0102.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0101.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0103.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0104.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0105.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0108.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0109.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0111.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0112.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0113.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0114.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0115.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0116.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0117.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0119.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0120.webp", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0121.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0125.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0126.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0127.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0128.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0129.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0130.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0132.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0131.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0133.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0135.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0134.webp", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0123.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "zdjecia_slubne_restauracja_stek_myslenice_start.webp"}
                    images={images}
                    headTitle={"Zdjęcia ślubne Restauracja Stek Myślenice"}
                    headDescription={"Restauracja Stek Myślenice, świetne miejsce na zabawę trwającą do białego rana. Zobaczcie jak super było na ślubie Sylwii i Tomka. Miłego oglądania."}
                    headKeywords={"fotograf ślubny myślenice,restauracja stek myślenice"}
                    headUrl={"https://99foto.pl/zdjecia-slubne-restauracja-stek-myslenice"}
                    entryContentP1={
                        "Bardzo słoneczny i ciepły początek kwietnia zwiastował piękną, pełną białych kwiatów na drzewach wiosnę. W połowie drogi miesiąc stracił wątek i powrócił do niższych zimowych temperatur, a w górach nawet do pokaźnej warstwy śniegu. Wyobrażam więc sobie, że sobotnie przedpołudnie w Filipowicach, gdzie rozpoczęliśmy reportaż ślubny z najważniejszego dnia Sylwii i Tomka, minął między innymi na sprawdzaniu pogody i wyczekiwaniu na wymarzone słońce. Udało się i pogoda w drugiej części dnia dopisała, a krótki plener w Zarabiu u stóp Góry Chełm, który zrobiliśmy na dosłownie kilka chwil opuszczając gości, doświetlały ciepłe promienie zachodzącego słońca. Ale może zacznę od początku. Kilka minut po godzinie dwunastej pod domem Sylwii pojawił się szybki samochód, z którego wysiadł Tomek. Chwilę później w rękach Sylwii wylądował piękny bukiet kwiatów, a Tomasz w zamian otrzymał kilka słodkich buziaków."
                    }
                    entryContentP2={
                        'Tradycyjnie rodzice pobłogosławili Młodych po czym udaliśmy się do <a href="https://sanktuarium.myslenice.pl/" target="_blank" rel="nofollow">Kościoła Narodzenia Najświętszej Maryi Panny w Myślenicach</a> na ceremonię zaślubin. Ponieważ jak już wspomniałem samochód był szybki, to droga do Myślenic lekko przypominała wyścig. Po podwójnym TAK i nałożeniu obrączek na twarzach Młodych pojawiły się ogromne uśmiechy. Życzenia i zabawa weselna odbyła się w <a href="https://stek.com.pl/myslenice/" target="_blank" rel="nofollow">Restauracji Stek w Myślenicach</a>. Tomasz przeniósł Sylwię przez próg i po lampce szampana Młodzi przyjęli gorące życzenia od przybyłych gości. Za sprawą dj-a Dawida, parkiet zapełniał się bardzo szybko i szaleństw, tańców na nim nie było końca. Od czasu do czasu przez salę przejeżdżał pociąg, ten z daleka i pojawiały się postacie w maskach, prześmiesznych kapeluszach, kolorowych okularach i ponadczasowych perukach. Nie zabrakło też podziękowań dla rodziców, przepysznego torta i tradycyjnych oczepin. Sylwio i Tomku, bardzo Wam dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i genialną atmosferę. Życzę miłego oglądania, a po więcej zdjęć zapraszam Was i gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"zdjecia-slubne-restauracja-stek-myslenice"}
                    title={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK MYŚLENICE - SYLWIA i TOMASZ"}
                    tags={"fotograf ślubny myślenice,restauracja stek myślenice"}
                    date={"28 kwietnia 2017"}
                    menuNames={"SYLWIA i TOMASZ"}
                    menuTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK MYŚLENICE"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
