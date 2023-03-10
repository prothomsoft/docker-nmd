import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0003.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0005.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0007.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0009.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0008.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0011.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0013.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0016.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0019.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0021.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0024.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0026.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/sesja_poslubna_krakow_0010.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sylwia_i_bartek_sesja_poslubna_krakow_start.webp"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne na Rynku w Krakowie"}
                    headDescription={"Wtorkowe popo??udnie z gwarantowan?? pogod?? i bia??ymi chmurkami sp??dzili??my z Sylwi?? i Barkiem spaceruj??c po Krakowie. Mi??ego ogl??dania."}
                    headKeywords={"sesja ??lubna kazimierz,plener ??lubny krak??w,zdj??cia ??lubne na rynku w krakowie"}
                    headUrl={"https://99foto.pl/sylwia-i-bartek-sesja-poslubna-krakow"}
                    entryContentP1={
                        "Tak, to by?? w??a??nie ten tydzie??, d??ugo zapowiadana pogoda, temperatura i odpowiednio pokolorowane li??cie. Wszystko tego dnia zapowiada??o ??wietny plener w g??rach S??owacji. Zainspirowani zdj??ciami koleg??w fotograf??w, wybrali??my si?? wszyscy po raz pierwszy w pi??kne miejsca, kt??rymi by??y Popradzki Staw i Strbskie Pleso. Pierwsza miejsc??wka, w kt??rej nasz plan dnia podyktowa?? nam post??j to rzeka Poprad, kt??ra przeci????a nasz?? drog?? dojazdow?? do jeziora. Chwila niepewno??ci i ??wietny widok z pewno??ci?? nie do powt??rzenia ju?? nawet nast??pnego dnia, a co dopiero tydzie?? p????niej. Poniewa?? czasu do zachodu s??o??ca by??o du??o, wdrapywali??my si?? przez godzink?? asfaltow?? drog?? w miejsce, kt??re zdecydowanie pokonuje Morskie Oko, a jest nim Popradzki Staw."
                    }
                    entryContentP2={
                        'Mniej ludzi, malownicze jezioro, ogromne g??ry, du??o ??wietnych kadr??w do wypatrzenia. W drodze powrotnej zrobili??my te?? kilka zdj???? w lesie. Ko??c??wka to szukanie dw??ch kamieni z kadru <a href="https://marcinsosnicki.pl" target="_blank" rel="nofollow">Marcina So??nickiego</a> i zachwyt nad jesieni?? o??wietlon?? promieniami zachodz??cego s??o??ca. Na koniec zjedli??my pyszny obiadek w Tatrza??skiej ??omnicy, zrelaksowani i zadowoleni wr??cili??my do naszych dom??w. Polecam to miejsce na plenery i mam nadziej??, ??e ka??dego roku znajdzie si?? jedna para, kt??ra mnie tam zabierze. Mi??ego ogl??dania.'
                    }
                    slug={"sylwia-i-bartek-sesja-poslubna-krakow"}
                    title={"SESJA ??LUBNA KRAK??W - SYLWIA i BARTEK"}
                    tags={"sesja ??lubna kazimierz,plener ??lubny krak??w,zdj??cia ??lubne na rynku w krakowie"}
                    date={"9 czerwca 2016"}
                    menuNames={"SYLWIA i BARTEK"}
                    menuTitle={"SESJA ??LUBNA KRAK??W"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"SESJA ZDJ??CIOWA DW??R TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_zdjeciowa_dwor_tomaszowice_krakow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
