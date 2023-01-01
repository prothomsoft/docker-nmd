import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0002.webp", height: 851 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0003.webp", height: 850 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0005.webp", height: 762 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0006.webp", height: 850 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0007.webp", height: 527 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0016.webp", height: 527 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0010.webp", height: 850 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0012.webp", height: 850 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0017.webp", height: 527 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0018.webp", height: 850 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0022.webp", height: 527 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0025.webp", height: 527 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0021.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja-slubna-krakow-rynek-glowny-wawel-kazimierz-start.webp"}
                    images={images}
                    headTitle={"Sesja ślubna Kraków, Rynek Główny, Wawel, Kazimierz"}
                    headDescription={
                        "Piękny Kraków, piękna Katrina i dla równowagi Chan i ja. Taką kompozycje fifty/fifty możecie zobaczyć dzisiaj na moim blogu. Serdecznie zapraszam na sesje plenerowe i sesje ślubne w Krakowie. Kazimierz i Rynek Główny sprawdzają się świetnie."
                    }
                    headKeywords={"Sesja ślubna Kraków, zdjęcia ślubne na Kazimierzu, plener na Rynku w Krakowie"}
                    headUrl={"https://99foto.pl/sesja-slubna-krakow-rynek-glowny-wawel-kazimierz"}
                    entryContentP1={
                        "Chan i Katrina postanowili przebyć szmat drogi by zrealizować swoje marzenie, sesję zdjęciową w jednym z najpiękniejszych miast europejskich jakim jest Kraków. Wcześniej odwiedzili Austrię, a w Krakowie podczas czterodniowego pobytu mieli okazję zwiedzić Kopalnie Soli w Wieliczce i Obóz Koncentracyjny Auschwitz-Birkenau w Oświęcimiu. Krakowski Rynek, Zamek Królewski na Wawelu i zakamarki Kazimierza mieli okazję odkrywać ze mną na zaplanowanej już rok wcześniej sesji ślubnej w Krakowie."
                    }
                    entryContentP2={
                        "Tym razem na moim blogu miejsca znajome, starannie wyselekcjonowane, które zbierałem latami biegając z parami młodymi po naszym pięknym mieście oraz dla nas bardzo egzotyczna para, piękna Katrina i Chan. Świetnie trafiliśmy z pogodą i myślę, że dzięki tej mini wyprawie, przyszli Państwo Chi Hang będą mieli tylko dobre wspomnienia związane z Krakowem. Kilka zdań wstępu napisane, więc teraz serdecznie zapraszam do oglądania zdjęć. Warto spełniać marzenia !!!"
                    }
                    slug={"sesja-slubna-krakow-rynek-glowny-wawel-kazimierz"}
                    title={"SESJA ŚLUBNA KRAKÓW, RYNEK GŁÓWNY, WAWEL, KAZIMIERZ - CHAN i KATRINA"}
                    tags={"Sesja ślubna Kraków, zdjęcia ślubne na Kazimierzu, plener na Rynku w Krakowie"}
                    date={"4 kwietnia 2018"}
                    menuNames={"CHAN i KATRINA"}
                    menuTitle={"SESJA ŚLUBNA KRAKÓW, RYNEK GŁÓWNY, WAWEL, KAZIMIERZ"}
                    leadNames={"EWELINA i KAMIL"}
                    leadTitle={"HOTEL TADEUSZ USZEW i GÓRALSKA SALA WESELNA"}
                    leadUrl={"/hotel-tadeusz-uszew-i-goralska-sala-weselna"}
                    leadImage={process.env.staticImagesPath + "hotel_tadeusz_uszew_i_goralska_sala_weselna_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
