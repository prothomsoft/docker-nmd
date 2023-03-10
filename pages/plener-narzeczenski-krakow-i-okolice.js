import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0002.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0004.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0006.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0011.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0013.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0014.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0016.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0017.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0022.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/plener_narzeczenski_krakow_i_okolice_0023.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "plener_narzeczenski_krakow_i_okolice_start.webp"}
                    images={images}
                    headTitle={"Plener narzecze??ski Krak??w"}
                    headDescription={"Plener narzecze??ski staje si?? integraln?? cze??ci?? planowanego ??lubu. Serdecznie zapraszam na zdj??cia Aliny i Micha??a, kt??rzy zabrali ze sob?? Bruna."}
                    headKeywords={"plener narzecze??ski krak??w,sesja narzecze??ska ojc??w"}
                    headUrl={"https://99foto.pl/plener-narzeczenski-krakow-i-okolice"}
                    entryContentP1={
                        "Plener narzecze??ski bardzo cz??sto staje si?? integraln?? cze??ci?? planowanego ??lubu. Spotkanie z fotografem przed ??lubem pozwala oswoi?? si?? z aparatem i zdoby?? troch?? do??wiadczenia w pozowaniu przed obiektywem. Sesja narzecze????ka jest te?? ??wietn?? okazj?? do poznania fotografa jako cz??owieka, prze??amania pierwszych lod??w w tej znajomo??ci. Osobi??cie mo??ecie przekona?? si?? w jakiej atmosferze powsta?? b??d?? Wasze zdj??cia ??lubne, a obecno???? fotografa w Waszym domu nie b??dzie stresuj??ca, poniewa?? b??dzie to osoba, kt??r?? mieli??cie okazj?? pozna?? osobi??cie."
                    }
                    entryContentP2={
                        'Zdj??cia w plenerze s?? okazj?? do pokazanie innej strony Waszego zwi??zku. Mo??ecie zabra?? ze sob?? psa tak jak zrobili to Alina i Micha??, gitar?? i zapali?? ognisko, lista pomys????w jest nieograniczona. Sesja narzecze??ska mo??e mie?? miejsce w mie??cie, w lesie, w domu, w parku ??? wszystko zale??y od Waszych preferencji. Zdj??cia, kt??re s?? wynikiem sesji mog?? by?? pomocne przy przygotowywaniu zaprosze?? ??lubnych lub dekoracji sali. Mog?? te?? by?? super dodatkiem do prezentu dla rodzic??w. Bardzo cz??sto jedno ze zdj???? sesji narzecze??skiej staje si?? zdj??ciem profilowym na Facebook czy Google+. Sesja narzecze??ska jest tylko dla Was i w??a??nie z tego powodu jest wyj??tkowa. Mam nadziej??, ??e Was przekona??em, a tymczasem zapraszam na zdj??cia Aliny, Micha??a i Bruna, kt??re zrobili??my w jedno s??oneczne popo??udnie w <a href="https://korzkiew.pl/" target="_blank" rel="nofollow">Zamku Korzkiew</a> i <a href="https://pieskowaskala.eu/" target="_blank" rel="nofollow">Pieskowej Skale</a>. Mi??ego ogl??dania.'
                    }
                    slug={"plener-narzeczenski-krakow-i-okolice"}
                    title={"PLENER NARZECZE??SKI KRAK??W I OKOLICE - ALINA, MICHA?? i RUDI"}
                    tags={"plener narzecze??ski krak??w,sesja narzecze??ska ojc??w"}
                    date={"7 sierpnia 2017"}
                    menuNames={"ALINA, MICHA?? i RUDI"}
                    menuTitle={"PLENER NARZECZE??SKI KRAK??W i OKOLICE"}
                    leadNames={"JOANNA i GRZEGORZ"}
                    leadTitle={"WESELE NA POLU GOLFOWYM W PACZ????TOWICACH"}
                    leadUrl={"/wesele-na-polu-golfowym-w-paczoltowicach"}
                    leadImage={process.env.staticS3ImagesPath + "wesele_na_polu_golfowym_w_paczoltowicach_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
