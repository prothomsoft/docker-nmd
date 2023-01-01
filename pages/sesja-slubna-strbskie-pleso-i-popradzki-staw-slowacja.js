import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0003.webp", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0009.webp", height: 527 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0011.webp", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0014.webp", height: 762 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0017.webp", height: 762 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0018.webp", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0030.webp", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0043.webp", height: 383 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0036.webp", height: 402 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0024.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp"}
                    images={images}
                    headTitle={"Sesja ślubna Strbskie Pleso, Popradzki Staw, Słowacja"}
                    headDescription={"Iwona i Marcin w idealnie wybrany dzień. Słowackie góry Strbskie Pleso, Popradzki Staw. Zapraszam na bloga i kilka zdjęć z tej sesji plenerowej."}
                    headKeywords={"sesja ślubna słowacja,plener strbskie pleso,popradzki staw zdjęcia ślubne"}
                    headUrl={"https://99foto.pl/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    entryContentP1={
                        "Tak, to był właśnie ten tydzień, długo zapowiadana pogoda, temperatura i odpowiednio pokolorowane liście. Wszystko tego dnia zapowiadało świetny plener w górach Słowacji. Zainspirowani zdjęciami kolegów fotografów, wybraliśmy się wszyscy po raz pierwszy w piękne miejsca, którymi były Popradzki Staw i Strbskie Pleso. Pierwsza miejscówka, w której nasz plan dnia podyktował nam postój to rzeka Poprad, która przecięła naszą drogę dojazdową do jeziora. Chwila niepewności i świetny widok z pewnością nie do powtórzenia już nawet następnego dnia, a co dopiero tydzień później. Ponieważ czasu do zachodu słońca było dużo, wdrapywaliśmy się przez godzinkę asfaltową drogą w miejsce, które zdecydowanie pokonuje Morskie Oko, a jest nim Popradzki Staw."
                    }
                    entryContentP2={
                        'Mniej ludzi, malownicze jezioro, ogromne góry, dużo świetnych kadrów do wypatrzenia. W drodze powrotnej zrobiliśmy też kilka zdjęć w lesie. Końcówka to szukanie dwóch kamieni z kadru <a href="https://marcinsosnicki.pl" target="_blank" rel="nofollow">Marcina Sośnickiego</a> i zachwyt nad jesienią oświetloną promieniami zachodzącego słońca. Na koniec zjedliśmy pyszny obiadek w Tatrzańskiej Łomnicy, zrelaksowani i zadowoleni wróciliśmy do naszych domów. Polecam to miejsce na plenery i mam nadzieję, że każdego roku znajdzie się jedna para, która mnie tam zabierze. Miłego oglądania.'
                    }
                    slug={"sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    title={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA - IWONA i MARCIN"}
                    tags={"plener strbskie pleso, popradzki staw zdjęcia ślubne, sesja ślubna Słowacja"}
                    date={"3 listopada 2017"}
                    menuNames={"IWONA I MARCIN"}
                    menuTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
