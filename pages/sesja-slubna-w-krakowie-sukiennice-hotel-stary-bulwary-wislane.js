import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0023.webp", height: 850 },    
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0004.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0006.webp", height: 763 },          
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0002.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0010.webp", height: 850 },  
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0009.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0012.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0014.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0015.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0017.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0018.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0020.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0022.webp", height: 763 }, 
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0021.webp", height: 763 },                 
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0025.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0024.webp", height: 763 },  
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0028.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/09/sesja_slubna_sukiennice_hotel_stary_krakow_0032.webp", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_slubna_sukiennice_hotel_stary_krakow_start.webp"}
                    images={images}
                    headTitle={"Sesja ??lubna w Krakowie, Sukiennice, Hotel Stary, Bulwary Wi??lane"}
                    headDescription={"Sesja ??lubna w Krakowie jednym z najpi??kniejszych i najbardziej historycznych miejsc na mapie Polski. Sukiennice, Sky Bar Hotel Stary, Bulwary Wi??lane i jeszcze kilka ciekawych zakamark??w. Zapraszam na bloga."}
                    headKeywords={"Sesja ??lubna w Krakowie, Plener ??lubny Sukiennice, Sky Ba Hotel Stary, Bulwary Wi??lane"}
                    headUrl={"https://99foto.pl/sesja-slubna-w-krakowie-sukiennice-hotel-stary-bulwary-wislane"}
                    entryContentP1={
                        'Krak??w i o nim b??dzie pisane jako o jednym z najpi??kniejszych i najbardziej historycznych miejsc na mapie Polski. Osobi??cie nie mam ??adnych w??tpliwo??ci, ??e wyb??r miejsc w Krakowie w kontek??cie sesji ??lubnej nie jest ??atwy, ale ich ilo???? i r????norodno???? w tym mie??cie pozwala spe??ni?? oczekiwania ka??dej m??odej pary. Szczeg??lnie gdy jej marzeniem s?? wyj??tkowe i magiczne zdj??cia plenerowe. Praktycznie w jednym miejscu mo??emy odszuka?? zak??tki pe??ne zieleni w zr????nicowanych barwach i ciekawe fragmenty miejskiej architektury. Poznanie ciekawych miejsc na sesje ??lubn?? w Krakowie zaj????o mi troch?? czasu, czasu mile sp??dzonego podczas kilkunastu sesji plenerowych. Mo??ecie mi wierzy??, ??e do??wiadczenie to procentuje, a korzystaj??c z niego mo??emy od razu sprecyzowa?? plan sesji zdj??ciowej i wybra?? z tego pi??knego miasta tylko najciekawsze fragmenty.'
                    }
                    entryContentP2={
                        '??wietnie si?? z??o??y??o, ??e Olga i Dawid byli tak mocno zwi??zani z Krakowem, ??e nie wyobra??ali sobie swojej sesji ??lubnej w ??adnym innym miejscu. Moje plenery przebiegaj?? w lu??nej atmosferze. Jako fotograf odpowiadam za wyszukiwanie miejsc, tworzenie kadr??w i znajdowanie optymalnego ??wiat??a. Kilka godzin sp??dzonych w mi??ej atmosferze i bez wielkich szale??st w pozach zwykle pozwala zbudowa?? Wasze zaufanie, a co za tym idzie ka??dy kolejny kadr ma potencja?? by sta?? si?? lepszym od poprzedniego. Tym razem by??o mocno spacerowo. Zacz??li??my blisko Teatru S??owackiego, nast??pnie odwiedzili??my Sky Bar w Hotelu Starym, przeszli??my przez Rynek G????wny i Sukiennice, min??li??my Ko??ci???? Piotra i Paw??a, ulic?? poselsk?? przespacerowali??my si?? do Powi??la. Plener ??lubny ko??czyli??my wieczorow?? por?? bo przecie?? ju?? wrzesie?? na Bulwarach Wi??lanych korzystaj??c z o??wietlenia Hotelu Forum. Zapraszam na kilka kadr??w z tego dnia i ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"sesja-slubna-w-krakowie-sukiennice-hotel-stary-bulwary-wislane"}
                    title={"SESJA W KRAKOWIE SUKIENNICE, HOTEL STARY, BULWARY WI??LANE - OLGA i DAWID"}
                    tags={"Sesja ??lubna w Krakowie, Plener ??lubny Sukiennice, Sky Bar Hotel Stary, Bulwary Wi??lane"}
                    date={"23 wrze??nia 2020"}
                    menuNames={"OLGA i DAWID"}
                    menuTitle={"SESJA W KRAKOWIE SUKIENNICE, HOTEL STARY, BULWARY WI??LANE"}
                    leadNames={"BASIA i MARCIN"}
                    leadTitle={"PLENER ??LUBNY ZAMEK KR??LEWSKI W NIEPO??OMICACH, CZARNY STAW"}
                    leadUrl={"/plener-slubny-zamek-krolewski-w-niepolomicach-czarny-staw"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_plenerowa_niepolomice.webp"}
                />
            
        );
};

export default BlogPageComponent;
