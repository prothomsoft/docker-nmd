import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0002.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0003.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0006.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0007.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0008.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0009.webp", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0010.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0011.webp", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0012.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0013.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0014.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0015.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0017.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0019.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0022.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0025.webp", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0027.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0028.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0029.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0030.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0032.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0033.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0034.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0035.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0036.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0038.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0039.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0041.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0042.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0044.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0045.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0047.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0049.webp", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0051.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0050.webp", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0053.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0054.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0055.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0057.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0058.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0059.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0060.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0061.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0062.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0063.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0064.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0067.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0069.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0068.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0072.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0073.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0074.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0075.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_event_firmowy_krakow_0056.webp", height: 382 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "fotograf_na_event_firmowy_krakow.webp"}
                    images={images}
                    headTitle={"Fotograf na event firmowy Kraków, impreza plenerowa Chochołowy Dwór"}
                    headDescription={
                        "Event firmowy w Krakowie. Rodzinny klimat, niezliczona ilość atrakcji i blisko dwieście osób, pracowników firmy SmartRecruiters z dzieciakami. Serdecznie zapraszam na zdjęcia."
                    }
                    headKeywords={"Fotograf na event firmowy Kraków, impreza plenerowa firmowa Chochołowy Dwór"}
                    headUrl={"https://99foto.pl/fotograf-na-event-firmowy-krakow"}
                    entryContentP1={
                        "Event firmowy w Krakowie. Blisko dwieście osób pracownicy z rodzinami i ich spotkanie w środku lata. Wymarzona pogoda i miejsce pełne atrakcji dla dużych i małych. To już trzeci raz jak miałem przyjemność zatrzymywać rodzinne chwile podczas imprezy firmowej w Smartach. Grupówki gdzieś tam wiszą na lodówce. Zapraszam na zdjęcia i życzę miłego oglądania."
                    }
                    entryContentP2={""}
                    slug={"fotograf-na-event-firmowy-krakow"}
                    title={"FOTOGRAF NA EVENT FIRMOWY KRAKÓW, IMPREZA PLENEROWA CHOCHOŁOWY DWÓR"}
                    tags={"Fotograf na event firmowy Kraków, impreza plenerowa firmowa Chochołowy Dwór"}
                    date={"14 grudnia 2018"}
                    menuNames={"FIRMA SMARTRECRUITERS"}
                    menuTitle={"FOTOGRAF NA EVENT FIRMOWY KRAKÓW, IMPREZA PLENEROWA CHOCHOŁOWY DWÓR"}
                    leadNames={"FIRMA SMARTRECRUITERS"}
                    leadTitle={"WIGILA FIRMOWA i FOTOGRAF NA WIGILIĘ FIRMOWĄ W KRAKOWIE"}
                    leadUrl={"/fotograf-na-wigilie-firmowa-w-krakowie"}
                    leadImage={process.env.staticImagesPath + "wigilia_smartrecruiters.webp"}
                />
            
        );
};

export default BlogPageComponent;
