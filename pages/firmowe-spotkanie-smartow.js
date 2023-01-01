import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0001.webp", height: 527 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0002.webp", height: 566 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0006.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0004.webp", height: 527 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0005.webp", height: 526 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0007.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0008.webp", height: 382 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0010.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0011.webp", height: 382 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0013.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0015.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0016.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0018.webp", height: 382 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0019.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0020.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0021.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0024.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0025.webp", height: 382 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0026.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0027.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0028.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0029.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0030.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0032.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0034.webp", height: 382 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0035.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0036.webp", height: 382 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0037.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0038.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0039.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0040.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0041.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0042.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0044.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0045.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0047.webp", height: 382 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0048.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0049.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0050.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0046.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/impreza_smartow_0051.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "impreza_smartow.webp"}
                    images={images}
                    headTitle={"Fotograf na event firmowy Kraków, impreza plenerowa Chochołowy Dwór"}
                    headDescription={
                        "Event firmowy w Krakowie. Rodzinny klimat, niezliczona ilość atrakcji i blisko dwieście osób, pracowników firmy SmartRecruiters z dzieciakami. Serdecznie zapraszam na zdjęcia."
                    }
                    headKeywords={"Fotograf na event firmowy Kraków, impreza plenerowa firmowa Chochołowy Dwór"}
                    headUrl={"https://99foto.pl/firmowe-spotkanie-smartow"}
                    entryContentP1={
                        "Event firmowy w Krakowie. Turniej piłkarzyków i ping ponga rozegrany z gośćmi z San Francisco. Kilka zdjęć z imprezy firmowej Smartów. Zapraszam i życzę miłego oglądania."
                    }
                    entryContentP2={""}
                    slug={"firmowe-spotkanie-smartow"}
                    title={"FIRMOWE SPOTKANIE SMARTÓW - TURNIEJ PIŁKARZYKÓW"}
                    tags={"Fotograf na event firmowy Kraków, turniej piłkarzyków w firmie"}
                    date={"5 września 2019"}
                    menuNames={"SMARTRECRUITERS"}
                    menuTitle={"FIRMOWE SPOTKANIE SMARTÓW - TURNIEJ PIŁKARZYKÓW"}
                    leadNames={"SMARTRECRUITERS"}
                    leadTitle={"FOTOGRAF NA EVENT FIRMOWY KRAKÓW, IMPREZA PLENEROWA CHOCHOŁOWY DWÓR"}
                    leadUrl={"/fotograf-na-event-firmowy-krakow"}
                    leadImage={process.env.staticImagesPath + "fotograf_na_event_firmowy_krakow.webp"}
                />
            
        );
};

export default BlogPageComponent;
