import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0001.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0005.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0013.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0020.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_rabkoland_0022.webp", height: 762 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "monika_i_marek_sesja_poslubna_rabkoland_rabka_zdroj_start.webp"}
                    images={images}
                    headTitle={"Sesja ??lubna Rabkoland - Rabka Zdr??j"}
                    headDescription={"Czy magiczne miasteczko Rabkoland to miejsce odpowiednie na sesj?? ??lubn??? Koniecznie sprawd??cie na moim blogu. Zapraszam w imieniu Marka i Moniki."}
                    headKeywords={"plener po??lubny rabkoland,zdj??cia ??lubne weso??e miasteczko,fotograf na wesele rabka zdr??j"}
                    headUrl={"https://99foto.pl/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    entryContentP1={
                        'Monik?? i Marka poznali??cie ju?? na <a href="https://99foto.pl/monika-i-marek-sesja-narzeczenska-zawadka-tokarnia-jordanow/" target="_blank" rel="nofollow">sesji narzecze??skiej</a> w Zawadce, przypominam miejscu idealnym na wycieczk?? rowerow?? i <a href="https://99foto.pl/monika-i-marek-zdjecia-slubne-dworek-fantazja-skomielna-biala/" target="_blank" rel="nofollow">??lubie</a>, kt??ry odby?? si?? w Dworku Fantazja w Skomielnej Bia??ej. Plener po??lubny pocz??tkowo planowali??my zrobi?? w <a href="https://skansen.bystra-sidzina.net/" target="_blank" rel="nofollow">Skansenie Bystra-Sidzina</a>, ale Monika zgodzi??a si?? na moj?? propozycj?? i w poszukiwaniu kolor??w wybrali??my si?? do <a href="https://www.rabkoland.pl/" target="_blank" rel="nofollow">Rabkolandu</a>.'
                    }
                    entryContentP2={
                        "Kilka minut przed wej??ciem na plac zabaw odbyli??my jeszcze sentymentaln?? podr???? do Dworku Fantazja, gdzie po starej znajomo??ci wykorzystali??my r??wnie jak dworek fantyzyjny ogr??d. Humory dopisywa??y i by??a to sesja, na kt??rej bardzo si?? razem po??miali??my. Dobre humory Marka i Moni wida?? te?? na zdj??ciach, a niedzielne popo??udnie zosta??o dobrze wykorzystane. Mi??ego ogl??dania."
                    }
                    slug={"sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    title={"SESJA ??LUBNA RABKOLAND - RABKA ZDR??J - MONIKA i MAREK"}
                    tags={"plener po??lubny rabkoland,zdj??cia ??lubne weso??e miasteczko,fotograf na wesele rabka zdr??j"}
                    date={"22 wrze??nia 2015"}
                    menuNames={"MONIKA i MAREK"}
                    menuTitle={"SESJA ??LUBNA RABKOLAND - RABKA ZDR??J"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
