import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0002.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0005.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0008.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0015.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0019.webp", height: 764 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0026.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "agata_i_mateusz_dwor_w_tomaszowicach_zamek_w_korzkwi_i_ojcow_start.webp"}
                    images={images}
                    headTitle={"Sesja zdj??ciowa Dw??r Tomaszowice"}
                    headDescription={"Promienie zachodz??cego s??o??ca i trzy podkrakowskie miejsca plenerowe: Dw??r w Tomaszowicach, zamki w Korzkwi i Ojcowie. Zapraszam na plener Agaty i Mateusza."}
                    headKeywords={"plener po??lubny dw??r tomaszowice,plener ??lubny zamek korzkiew,zdj??cia ??lubne ojc??w"}
                    headUrl={"https://99foto.pl/agata-i-mateusz-dwor-w-tomaszowicach-zamek-w-korzkwi-i-ojcow"}
                    entryContentP1={
                        "Tak, to by?? w??a??nie ten tydzie??, d??ugo zapowiadana pogoda, temperatura i odpowiednio pokolorowane li??cie. Wszystko tego dnia zapowiada??o ??wietny plener w g??rach S??owacji. Zainspirowani zdj??ciami koleg??w fotograf??w, wybrali??my si?? wszyscy po raz pierwszy w pi??kne miejsca, kt??rymi by??y Popradzki Staw i Strbskie Pleso. Pierwsza miejsc??wka, w kt??rej nasz plan dnia podyktowa?? nam post??j to rzeka Poprad, kt??ra przeci????a nasz?? drog?? dojazdow?? do jeziora. Chwila niepewno??ci i ??wietny widok z pewno??ci?? nie do powt??rzenia ju?? nawet nast??pnego dnia, a co dopiero tydzie?? p????niej. Poniewa?? czasu do zachodu s??o??ca by??o du??o, wdrapywali??my si?? przez godzink?? asfaltow?? drog?? w miejsce, kt??re zdecydowanie pokonuje Morskie Oko, a jest nim Popradzki Staw."
                    }
                    entryContentP2={
                        'Mniej ludzi, malownicze jezioro, ogromne g??ry, du??o ??wietnych kadr??w do wypatrzenia. W drodze powrotnej zrobili??my te?? kilka zdj???? w lesie. Ko??c??wka to szukanie dw??ch kamieni z kadru <a href="https://marcinsosnicki.pl" rel="nofollow" target="_blank" rel="nofollow">Marcina So??nickiego</a> i zachwyt nad jesieni?? o??wietlon?? promieniami zachodz??cego s??o??ca. Na koniec zjedli??my pyszny obiadek w Tatrza??skiej ??omnicy, zrelaksowani i zadowoleni wr??cili??my do naszych dom??w. Polecam to miejsce na plenery i mam nadziej??, ??e ka??dego roku znajdzie si?? jedna para, kt??ra mnie tam zabierze. Mi??ego ogl??dania.'
                    }
                    slug={"agata-i-mateusz-dwor-w-tomaszowicach-zamek-w-korzkwi-i-ojcow"}
                    title={"SESJA ??LUBNA DW??R W TOMASZOWICACH i OJC??W - AGATA i MATEUSZ"}
                    tags={"plener po??lubny dw??r tomaszowice,plener ??lubny zamek korzkiew,zdj??cia ??lubne ojc??w"}
                    date={"11 sierpnia 2015"}
                    menuNames={"AGATA i MATEUSZ"}
                    menuTitle={"SESJA ??LUBNA DW??R W TOMASZOWICACH i OJC??W"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
