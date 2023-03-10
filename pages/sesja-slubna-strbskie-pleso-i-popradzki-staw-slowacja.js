import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0003.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0009.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0011.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0018.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0030.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0043.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0036.webp", height: 402 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0024.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp"}
                    images={images}
                    headTitle={"Sesja ??lubna Strbskie Pleso, Popradzki Staw, S??owacja"}
                    headDescription={"Iwona i Marcin w idealnie wybrany dzie??. S??owackie g??ry Strbskie Pleso, Popradzki Staw. Zapraszam na bloga i kilka zdj???? z tej sesji plenerowej."}
                    headKeywords={"sesja ??lubna s??owacja,plener strbskie pleso,popradzki staw zdj??cia ??lubne"}
                    headUrl={"https://99foto.pl/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    entryContentP1={
                        "Tak, to by?? w??a??nie ten tydzie??, d??ugo zapowiadana pogoda, temperatura i odpowiednio pokolorowane li??cie. Wszystko tego dnia zapowiada??o ??wietny plener w g??rach S??owacji. Zainspirowani zdj??ciami koleg??w fotograf??w, wybrali??my si?? wszyscy po raz pierwszy w pi??kne miejsca, kt??rymi by??y Popradzki Staw i Strbskie Pleso. Pierwsza miejsc??wka, w kt??rej nasz plan dnia podyktowa?? nam post??j to rzeka Poprad, kt??ra przeci????a nasz?? drog?? dojazdow?? do jeziora. Chwila niepewno??ci i ??wietny widok z pewno??ci?? nie do powt??rzenia ju?? nawet nast??pnego dnia, a co dopiero tydzie?? p????niej. Poniewa?? czasu do zachodu s??o??ca by??o du??o, wdrapywali??my si?? przez godzink?? asfaltow?? drog?? w miejsce, kt??re zdecydowanie pokonuje Morskie Oko, a jest nim Popradzki Staw."
                    }
                    entryContentP2={
                        'Mniej ludzi, malownicze jezioro, ogromne g??ry, du??o ??wietnych kadr??w do wypatrzenia. W drodze powrotnej zrobili??my te?? kilka zdj???? w lesie. Ko??c??wka to szukanie dw??ch kamieni z kadru <a href="https://marcinsosnicki.pl" target="_blank" rel="nofollow">Marcina So??nickiego</a> i zachwyt nad jesieni?? o??wietlon?? promieniami zachodz??cego s??o??ca. Na koniec zjedli??my pyszny obiadek w Tatrza??skiej ??omnicy, zrelaksowani i zadowoleni wr??cili??my do naszych dom??w. Polecam to miejsce na plenery i mam nadziej??, ??e ka??dego roku znajdzie si?? jedna para, kt??ra mnie tam zabierze. Mi??ego ogl??dania.'
                    }
                    slug={"sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    title={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA - IWONA i MARCIN"}
                    tags={"plener strbskie pleso, popradzki staw zdj??cia ??lubne, sesja ??lubna S??owacja"}
                    date={"3 listopada 2017"}
                    menuNames={"IWONA I MARCIN"}
                    menuTitle={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W G??RALSKIM KLIMACIE PRZYSTA?? KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticS3ImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
