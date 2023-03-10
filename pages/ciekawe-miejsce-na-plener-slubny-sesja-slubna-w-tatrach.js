import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0003.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0026.webp", height: 407 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0004.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0006.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0010.webp", height: 567 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0014.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0015.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0028.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0024.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/slubna_sesja_zdjeciowa_w_gorach_0027.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_slubna_w_tatrach.webp"}
                    images={images}
                    headTitle={"Ciekawe miejsce na plener ??lubny, sesja ??lubna w Tatrach"}
                    headDescription={
                        "Tym razem na moim blogu znajdziecie ciekawe miejsce na plener ??lubny. Sesja ??lubna w Tatrach to ??wietny moment by wyrwa?? si?? z miasta i odetchn???? ??wie??ym powietrzem w g??rach. Zapraszam do ogl??dania."
                    }
                    headKeywords={"sesja ??lubna w tatrach, plener ??lubny w g??rach, miejsce na plener ??lubny, ciekawe miejsca na sesj?? ??lubn??"}
                    headUrl={"https://99foto.pl/ciekawe-miejsce-na-plener-slubny-sesja-slubna-w-tatrach"}
                    entryContentP1={
                        "Pary, kt??re decyduj?? si?? na sesj?? ??lubn?? w Tatrach bardzo cz??sto polegaj?? na moim do??wiadczeniu i pytaj?? o ciekawe miejsca na plener ??lubny w g??rach. Odpowiadaj??c na te pytania bardzo cz??sto zaczynam opowie???? od najbardziej popularnej tatrza??skiej lokalizacji, w kt??rej cz??sto realizowane s?? plenery ??lubne.  Jest to oczywi??cie Kasprowy Wierch, na kt??ry mo??na ??atwo dosta?? si?? kolejk?? linow??. Wycieczk?? zaczyna si?? w Ku??nicach i bardzo dobrze schodzi si?? ??????tym szlakiem w kierunku Czarnego Stawu G??sienicowego, kt??ry rewelacyjnie wygl??da na zdj??ciach ??lubnych. Kolejn?? ??wietn?? miejsc??wk?? jest oczywi??cie Morskie Oko. Podej??cie do najwi??kszego jeziora Tatr rozpoczyna si?? w Palenicy Bia??cza??skiej. O??miokilometrowy odcinek drogi do jeziora mo??emy pokona?? fasi??giem lub mniej kosztownie mkn???? na biszkoptach. W schronisku mo??na powt??rzy?? przygotowania i rozpocz???? w??dr??wk?? wok???? jeziora w poszukiwaniu super ??wiat??a i niezwyk??ych kadr??w."
                    }
                    entryContentP2={
                        "Najlepiej by?? tam wcze??nie rano, gdy rycerze i kr??lowe nocy jeszcze odsypiaj??. Kolejn?? rekomendacj?? miejsca na plener ??lubny w g??rach s?? Tatry, ale tym razem strona s??owacka, kt??ra otwiera przed nami nowe mo??liwo??ci. Czterdzie??ci minut samochodem dalej na p????noc, brak op??at za fotografowanie na terenie Tatrza??skiego Parku Narodowego, zdecydowanie mniej ludzi - czego mo??na chcie?? wi??cej. Tatrza??ska ??omnica, Szczyrbskie Jezioro, Popradzki Staw to pi??kne miejsca, kt??re s?? gwarancj?? pi??knych zdj????, ale te?? ??wietnie prze??ytego dnia w g??rach. Na moim blogu znajdziecie wpisy z g??rskich wypraw, kt??re s?? ju?? za nami. Tymczasem serdecznie zapraszam na zdj??cia i do zobaczenia na szlaku podczas Waszej sesji ??lubnej. Mi??ego ogl??dania."
                    }
                    slug={"ciekawe-miejsce-na-plener-slubny-sesja-slubna-w-tatrach"}
                    title={"CIEKAWE MIEJSCE NA PLENER ??LUBNY, SESJA ??LUBNA W TATRACH - MARTA i MARCIN"}
                    tags={"sesja ??lubna w tatrach, plener ??lubny w g??rach, miejsce na plener ??lubny, ciekawe miejsca na sesj?? ??lubn??"}
                    date={"14 sierpnia 2018"}
                    menuNames={"MARTA i MARCIN"}
                    menuTitle={"CIEKAWE MIEJSCE NA PLENER ??LUBNY, SESJA ??LUBNA W TATRACH"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ??LUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={process.env.staticS3ImagesPath + "sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
