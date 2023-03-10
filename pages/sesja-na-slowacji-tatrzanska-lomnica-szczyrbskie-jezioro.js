import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0005.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0011.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0012.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0029.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0039.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0041.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/sesja_slubna_na_slowacji_0043.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_slubna_na_slowacji.webp"}
                    images={images}
                    headTitle={"Sesja ??lubna na S??owacji, Tatrza??ska ??omnica, Jezioro Szczyrbskie"}
                    headDescription={"Pi??kne miejsca w Wysokich Tatrach czyli Tatrza??ska ??omnica i Jezioro Szczyrbskie. Sesja ??lubna Edyty i Roberta na S??owacji. Zapraszam na bloga."}
                    headKeywords={"sesja ??lubna S??owacja, Tatrza??ska ??omnica, Jezioro Szczyrbskie, sesja zdj??ciowa w Wysokich Tatrach"}
                    headUrl={"https://99foto.pl/sesja-na-slowacji-tatrzanska-lomnica-szczyrbskie-jezioro"}
                    entryContentP1={
                        'Trafi?? dobr?? pogod?? w Tatrach, szczeg??lnie jesieni??, by?? tam w momencie gdy g??rskie szczyty o??wietlaj?? ciep??e promienie s??o??ca, a li??cie mieni?? si?? w kolorach z??ota, to rzecz nie??atwa. Jednak nie po raz pierwszy i mam tak?? nadziej?? nie po raz ostatni, uda??o si?? nam upolowa?? taki idealny dzie?? i do naszej codzienno??ci do??o??y?? kilka przemi??ych wspomnie?? i kolorowych fotograficznych kadr??w. Dzie?? rozpocz???? si?? wcze??nie rano. Po drodze z Krakowa wiadomo du??a flat white i zdrapki na Orlenie, rozmowy o przysz??ych planach z Edyt?? i Robertem i jedno wielkie ??adowanie akumulator??w boskim widokiem g??r, kt??ry najnormalniej w ??wiecie uwielbiam. Przekroczyli??my granic?? ze S??owacj?? i kolejk?? g??rsk?? dostali??my si?? na Tatrza??sk?? ??omnic??. G??ry zaskakuj??. Tak by??o r??wnie?? i tym razem. ??omnicki Staw, kt??ry zwykle przypomina?? Morskie Oko niemal??e znikn????. Pozwoli??o nam to na rajd po kamieniach i dost??p do miejsc wcze??niej niedost??pnych.'
                    }
                    entryContentP2={
                        'Wykorzystuj??c zapas czasu, delektuj??c si?? promieniami s??o??ca i wdychaj??c powietrze, o jakim w Krakowie mo??na tylko pomarzy??, wdrapali??my si?? do???? wysoko niemal??e pod sam szczyt. Po dobrych czterech godzinach zjechali??my na d????, poniewa?? w naszym planie dnia by?? jeszcze zach??d s??o??ca nad Szczyrbskim Jeziorem. Kieruj??c si?? opiniami, kt??re mo??na znale???? na forach fotograficznych miejsce to jest najpopularniejszym miejscem plenerowym tego i ubieg??ego roku. My??l??, ??e uda??o nam si?? wykorzysta?? jego potencja?? i stworzy?? kilka klasyk??w ze schroniskiem i skoczni?? narciarsk?? w tle. By?? to z pewno??ci?? dzie?? wykorzystany na maksa, zw??aszcza, ??e nast??pnego dnia w g??rach spad?? ??nieg. Na koniec powiem Wam, ??e w sumie to dobrze, ??e tydzie?? wcze??niej g??rale zamkn??li wyjazd kolejk?? na Kasprowy Wierch, po prostu tak mia??o by??. Serdecznie zapraszam do ogl??dania zdj???? z sesji zdj??ciowej Edyty i Roberta i ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"sesja-na-slowacji-tatrzanska-lomnica-szczyrbskie-jezioro"}
                    title={"SESJA NA S??OWACJI, TATRZA??SKA ??OMNICA, SZCZYRBSKIE JEZIORO - EDYTA i ROBERT"}
                    tags={"sesja ??lubna S??owacja, Tatrza??ska ??omnica, Jezioro Szczyrbskie, sesja zdj??ciowa w Wysokich Tatrach"}
                    date={"8 pa??dziernika 2019"}
                    menuNames={"EDYTA i ROBERT"}
                    menuTitle={"SESJA NA S??OWACJI, TATRZA??SKA ??OMNICA, SZCZYRBSKIE JEZIORO"}
                    leadNames={"TERESA i ANDRZEJ"}
                    leadTitle={"PARK MOGILANY, BUZIAKI SK??PANE W PROMIENIACH S??O??CA"}
                    leadUrl={"/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_narzeczenska_klasztor_w_tyncu.webp"}
                />
            
        );
};

export default BlogPageComponent;