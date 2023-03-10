import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0003.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0005.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0006.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0009.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0011.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0014.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0012.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0021.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0016.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0018.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0020.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0022.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0023.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0008.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_slubna_w_plenerze_park_krajobrazowy_w_ojcowie_i_okolice_start.webp"}
                    images={images}
                    headTitle={"Sesja ??lubna w plenerze Krak??w"}
                    headDescription={"Park krajobrazowy w Ojcowie i okolice to ??wietne miejsce na sesj?? ??lubn?? w plenerze. Sesja ??lubna w plenerze musi si?? tam uda??. Zapraszam na bloga."}
                    headKeywords={"sesja ??lubna w plenerze,zamek pieskowa ska??a,park krajobrazowy w ojcowie"}
                    headUrl={"https://99foto.pl/sesja-slubna-w-plenerze-park-krajobrazowy-w-ojcowie-i-okolice"}
                    entryContentP1={
                        'Sesja ??lubna w plenerze to zwykle poszukiwanie trzech sk??adowych chwili, ??wiat??a i kadru. Ka??da para m??oda musi sobie odpowiedzie?? na pytanie, czy warto jecha?? p???? dnia do innego miasta, ??eby zrobi?? sesj?? zdj??ciow??. Mo??e warto ten czas wykorzysta?? inaczej i zdecydowa?? si?? na sesj?? w Krakowie. Zdecydowanie inaczej jest gdy chcecie mie?? g??ry w tle, wtedy rzeczywi??cie warto si?? zastanowi?? nad wyjazdem. W ubieg??ym tygodniu razem z Ol?? i Paw??em polowali??my na odpowiedni moment w <a href="https://korzkiew.pl/" target="_blank" rel="nofollow">Zamku Korzkiew</a> i w <a href="https://ojcowskiparknarodowy.pl/" target="_blank" rel="nofollow">Parku Krajobrazowym w Ojcowie</a>.'
                    }
                    entryContentP2={
                        'Dzie?? by?? mega s??oneczny i pomimo, ??e mamy ju?? pocz??tek wrze??nia uda??o nam si?? ??wietnie trafi?? na zachodz??ce s??o??ce. Taki by?? plan, kt??ry uda??o si?? zrealizowa??. <a href="https://pieskowaskala.eu/" target="_blank" rel="nofollow">Pieskowa Ska??a</a> jest ??wietnym miejscem poniewa?? mo??na tam wychodzi??, wy??ej i wy??ej za ka??dym razem oszukuj??c czas i ogl??daj??c s??o??ce z troch?? innej perspektywy. Zobaczcie sami. Zapraszam na zdj??cia.'
                    }
                    slug={"sesja-slubna-w-plenerze-park-krajobrazowy-w-ojcowie-i-okolice"}
                    title={"SESJA ??LUBNA W PLENERZE, PARK KRAJOBRAZOWY OJC??W - OLA i PAWE??"}
                    tags={"Park Krajobrazowy w Ojcowie, Sesja ??lubna w plenerze, Zamek Pieskowa Ska??a"}
                    date={"4 wrze??nia 2017"}
                    menuNames={"OLA i PAWE??"}
                    menuTitle={"SESJA ??LUBNA W PLENERZE, PARK KRAJOBRAZOWY OJC??W"}
                    leadNames={"OLA i PAWE??"}
                    leadTitle={"DW??R SZLACHECKI SIECIECHOWICE, REPORTA?? ??LUBNY MIECH??W"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={process.env.staticS3ImagesPath + "dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
