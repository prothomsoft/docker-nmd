import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0004.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0002.webp", height: 851 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0005.webp", height: 851 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0006.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0008.webp", height: 851 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0014.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0015.webp", height: 851 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0016.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0018.webp", height: 762 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0019.webp", height: 764 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0026.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "agata_i_mateusz_dwor_w_tomaszowicach_zamek_w_korzkwi_i_ojcow_start.webp"}
                    images={images}
                    headTitle={"Sesja zdjęciowa Dwór Tomaszowice"}
                    headDescription={"Promienie zachodzącego słońca i trzy podkrakowskie miejsca plenerowe: Dwór w Tomaszowicach, zamki w Korzkwi i Ojcowie. Zapraszam na plener Agaty i Mateusza."}
                    headKeywords={"plener poślubny dwór tomaszowice,plener ślubny zamek korzkiew,zdjęcia ślubne ojców"}
                    headUrl={"https://99foto.pl/agata-i-mateusz-dwor-w-tomaszowicach-zamek-w-korzkwi-i-ojcow"}
                    entryContentP1={
                        "Tak, to był właśnie ten tydzień, długo zapowiadana pogoda, temperatura i odpowiednio pokolorowane liście. Wszystko tego dnia zapowiadało świetny plener w górach Słowacji. Zainspirowani zdjęciami kolegów fotografów, wybraliśmy się wszyscy po raz pierwszy w piękne miejsca, którymi były Popradzki Staw i Strbskie Pleso. Pierwsza miejscówka, w której nasz plan dnia podyktował nam postój to rzeka Poprad, która przecięła naszą drogę dojazdową do jeziora. Chwila niepewności i świetny widok z pewnością nie do powtórzenia już nawet następnego dnia, a co dopiero tydzień później. Ponieważ czasu do zachodu słońca było dużo, wdrapywaliśmy się przez godzinkę asfaltową drogą w miejsce, które zdecydowanie pokonuje Morskie Oko, a jest nim Popradzki Staw."
                    }
                    entryContentP2={
                        'Mniej ludzi, malownicze jezioro, ogromne góry, dużo świetnych kadrów do wypatrzenia. W drodze powrotnej zrobiliśmy też kilka zdjęć w lesie. Końcówka to szukanie dwóch kamieni z kadru <a href="https://marcinsosnicki.pl" rel="nofollow" target="_blank" rel="nofollow">Marcina Sośnickiego</a> i zachwyt nad jesienią oświetloną promieniami zachodzącego słońca. Na koniec zjedliśmy pyszny obiadek w Tatrzańskiej Łomnicy, zrelaksowani i zadowoleni wróciliśmy do naszych domów. Polecam to miejsce na plenery i mam nadzieję, że każdego roku znajdzie się jedna para, która mnie tam zabierze. Miłego oglądania.'
                    }
                    slug={"agata-i-mateusz-dwor-w-tomaszowicach-zamek-w-korzkwi-i-ojcow"}
                    title={"SESJA ŚLUBNA DWÓR W TOMASZOWICACH i OJCÓW - AGATA i MATEUSZ"}
                    tags={"plener poślubny dwór tomaszowice,plener ślubny zamek korzkiew,zdjęcia ślubne ojców"}
                    date={"11 sierpnia 2015"}
                    menuNames={"AGATA i MATEUSZ"}
                    menuTitle={"SESJA ŚLUBNA DWÓR W TOMASZOWICACH i OJCÓW"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
