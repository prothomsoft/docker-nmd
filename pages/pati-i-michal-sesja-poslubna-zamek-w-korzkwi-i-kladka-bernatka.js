import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0002.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0005.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0008.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0013.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0019.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0020.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_zamek_korzkiew_0021.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "pati_i_michal_sesja_poslubna_zamek_w_korzkwi_i_kladka_bernatka_start.webp"}
                    images={images}
                    headTitle={"Sesja ??lubna Zamek w Korzkwi,  plener ??lubny Krak??w"}
                    headDescription={"Sesja ??lubna Patrycji i Micha??a. Wybrali??my si?? do Zamku w Korzkwi, a do K??adki Bernatki dotarli??my idealnie na granicy zmroku. Zapraszam."}
                    headKeywords={"plener ??lubny krak??w,zdj??cia ??lubne k??adka bernatka"}
                    headUrl={"https://99foto.pl/pati-i-michal-sesja-poslubna-zamek-w-korzkwi-i-kladka-bernatka"}
                    entryContentP1={
                        'Patrycj?? i Micha??a ju?? znacie z <a href="https://99foto.pl/patrycja-i-michal-sesja-narzeczenska-pieskowa-skala/" target="_blank" rel="nofollow">sesji narzecze??skiej</a> i <a href="https://99foto.pl/pati-i-michal-zdjecia-slubne-w-hotelu-turowka-wieliczka/" target="_blank" rel="nofollow">zdj???? ??lubnych</a>. Tym razem spotkali??my si?? na sesji ??lubnej w Krakowie. Pocz??tkowo chcieli??my fotografowa?? w Dworze Tomaszowice. Odbywa??a si?? tam jednak impreza firmowa dla najm??odszych, wi??c by unikn???? prze??adowanych nieznajomymi lud??mi kadr??w podjechali??my krok dalej do Zamku w Korzkwi.'
                    }
                    entryContentP2={
                        "Jak si?? okaza??o by?? to strza?? w dziesi??tk??, poniewa?? trafili??my na dzie?? w kt??rym nie odbywa?? si?? tam ??aden ??lub. Po kilku zdj??ciach przenie??li??my plan zdj??ciowy na Kazimierz. Zaparkowali??my na gazowej i od razu zaatakowali??my K??adk?? Bernatk??. By?? to czas idealny, bo granica zmroku, z lekko granatowym niebem. W momencie gdy byli??my na k??adce za??wieci??y si?? te?? ??wiat??a na por??czach co otworzy??o zupe??nie nowe mo??liwo??ci dla ciekawych mam nadziej?? zdj????. Mi??ego ogl??dania."
                    }
                    slug={"pati-i-michal-sesja-poslubna-zamek-w-korzkwi-i-kladka-bernatka"}
                    title={"SESJA ??LUBNA ZAMEK W KORZKWI i K??ADKA BERNATKA - PATRYCJA i MICHA??"}
                    tags={"plener ??lubny krak??w,zdj??cia ??lubne k??adka bernatka"}
                    date={"17 wrze??nia 2015"}
                    menuNames={"PATRYCJA i MICHA??"}
                    menuTitle={"SESJA ??LUBNA ZAMEK W KORZKWI i K??ADKA BERNATKA"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJ??CIA ??LUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={process.env.staticS3ImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
