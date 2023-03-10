import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0002.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0009.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0007.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0006.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0008.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0012.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0013.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0017.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0019.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0021.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0020.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0025.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0027.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0024.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "plener_slubny_zamek_pieskowa_skala.webp"}
                    images={images}
                    headTitle={"Sesja ??lubna Zamek Pieskowa Ska??a, Zamek Korzkiew"}
                    headDescription={"Zamek Pieskowa Ska??a, ??lubna sesja zdj??ciowa Kristiny i Aleksandra. Gonitwa za zachodz??cym s??o??cem i moc emocji. Na sesje tylko Krak??w. Zapraszam do ogl??dania."}
                    headKeywords={"Sesja ??lubna Zamek Pieskowa Ska??a, Zamek Korzkiew, miejsce na sesj?? plenerow?? w Krakowie"}
                    headUrl={"https://99foto.pl/sesja-slubna-w-pieskowej-skale-i-zamek-korzkiew"}
                    entryContentP1={
                        "Ostatnio du??o si?? dzieje i kilka wpis??w ??lubnych pojawi??o si?? tylko w strefie klienta. Czas to jednak zmieni?? i nadrobi?? zaleg??o??ci wpisem co prawda kr??tszym ni?? ??lubny, bo plenerowym, ale zawsze wpisem. ??lub Kristiny i Aleksandra mia??em przyjemno???? fotografowa?? w sierpniu, b??d??c jednym z zaproszonych go??ci Dworu Sierak??w. Trzy tygodnie p????niej um??wili??my si?? na sesj?? plenerow?? w Krakowie. Na poszukiwania trzech sk??adowych czyli chwili, ??wiat??a i kadru wybrali??my si?? w dobrze znane mi miejsca."
                    }
                    entryContentP2={
                        'Pierwszym z nich by?? <a href="https://korzkiew.pl/" target="_blank" rel="nofollow">Zamek w Korzkwi</a>, a drugim <a href="https://pieskowaskala.eu/" target="_blank" rel="nofollow">Zamek w Pieskowej Skale</a>. Czyli by??o zamkowo i s??onecznie. Po raz kolejny gonili??my zachodz??ce s??o??ce wspinaj??c si?? wy??ej i wy??ej. Mam nadziej?? pojawi?? si?? w tych miejscach jeszcze co najmniej raz w tym roku, korzystaj??c z urok??w polskiej z??otej jesieni. Serdecznie zapraszam na kilka zdj???? zrobionych tego popo??udnia. Mi??ego ogl??dania.'
                    }
                    slug={"sesja-slubna-w-pieskowej-skale-i-zamek-korzkiew"}
                    title={"SESJA ??LUBNA W PIESKOWEJ SKALE i ZAMEK KORZKIEW - KRISTINA i ALEKSANDR"}
                    tags={"Sesja ??lubna Zamek Pieskowa Ska??a, Zamek Korzkiew, miejsce na sesj?? plenerow?? w Krakowie"}
                    date={"19 wrze??nia 2018"}
                    menuNames={"KRISTINA i ALEKSANDR"}
                    menuTitle={"SESJA ??LUBNA W PIESKOWEJ SKALE i ZAMEK KORZKIEW"}
                    leadNames={"DAJANA i SYLWESTER"}
                    leadTitle={"OGR??D BOTANICZNY W KRAKOWIE, ??LUBNA SESJA ZDJ??CIOWA"}
                    leadUrl={"/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
                    leadImage={process.env.staticS3ImagesPath + "ogrod_botaniczny.webp"}
                />
            
        );
};

export default BlogPageComponent;
