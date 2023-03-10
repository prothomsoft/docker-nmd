import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0003.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0016.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0009.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0010.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0014.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0006.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0019.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0021.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0024.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0026.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0031.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_zdjeciowa_dwor_tomaszowice_krakow_start.webp"}
                    images={images}
                    headTitle={"Sesja zdj??ciowa Dw??r Tomaszowice, Opera Krakowska, Kazimierz"}
                    headDescription={"Serdecznie zapraszam na ostatni w tym roku jesienny i krakowski plener Karoliny i Bartka. Dw??r Tomaszowice, Opera Krakowska i zakamarki Kazimierza."}
                    headKeywords={"sesja zdj??ciowa dw??r tomaszowice, plener ??lubny kazimierz krak??w"}
                    headUrl={"https://99foto.pl/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    entryContentP1={
                        "Dzisiaj zapraszam na ostatni w tym roku jesienny krakowski plener Karoliny i Bartka. Do zrealizowania planu A, kt??ry zak??ada??, ??e wybieramy si?? do Zakopanego i spacerujemy do Morskiego Oka, zabrak??o nam dos??ownie jednego dnia. Akurat w sobot??, pocz??tek tego wolnego weekendu, w kt??rym mieli??my si?? wybra?? w g??ry g??sta mg??a przys??oni??a ??wiat i to nie tylko w Krakowie, wsz??dzie."
                    }
                    entryContentP2={
                        "Pozosta?? wi??c plan B i sprawdzone krakowskie miejsca gwarantuj??ce ??wietne zdj??cia podczas jesiennej aury. M??wi?? tutaj o Dworze w Tomaszowicach, kt??ry zachwyca swoim angielskim stylem i sercu Krakowa, czyli Kazimierzu. Ogl??daj??c zdj??cia zauwa??ycie, ??e Karolina i Bartek to ??wietni modele. Niekt??re pozy, kt??re sami zaproponowali nada??y tej sesji wyj??tkowego charakteru. Bardzo mi??o sp??dzili??my czas w sobotnie przedpo??udnie i bardzo chce Wam pokaza?? t?? sesj?? zdj??ciow?? bo warto wr??ci?? do tych ostatnich promieni jesiennego s??o??ca. Mi??ego ogl??dania. "
                    }
                    slug={"sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    title={"SESJA ZDJ??CIOWA DW??R TOMASZOWICE, OPERA, KAZIMIERZ - KAROLINA i BARTEK"}
                    tags={"SESJA ZDJ??CIOWA DW??R TOMASZOWICE, OPERA, KAZIMIERZ"}
                    date={"13 LISTOPADA 2017"}
                    menuNames={"KAROLINA i BARTEK"}
                    menuTitle={"SESJA ZDJ??CIOWA DW??R TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
