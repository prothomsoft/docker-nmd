import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0002.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0004.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0007.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0011.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0015.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0017.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "zuza_i_jarek_sesja_poslubna_kopiec_kosciuszki_i_wawel_start.webp"}
                    images={images}
                    headTitle={"Sesja zdj??ciowa Kopiec Ko??ciuszki"}
                    headDescription={"Krak??w i jego najbardziej znane miejsce na plener czyli Kopiec Ko??ciuszki i Wawel. Sesja ??lubna Zuzy i Jarka. Zapraszam do ogl??dania."}
                    headKeywords={"zdj??cia ??lubne wawel,plener ??lubny kopiec ko??ciuszki"}
                    headUrl={"https://99foto.pl/zuza-i-jarek-sesja-poslubna-kopiec-kosciuszki-i-wawel"}
                    entryContentP1={
                        'Zuz?? i Jarka znacie ju?? z <a href="https://99foto.pl/zuza-i-jarek-zdjecia-slubne-modrzewiowe-wzgorze-zakliczyn/" target="_blank" rel="nofollow">tego ??lubnego wpisu</a> na moim blogu. Spotkali??my si?? w tygodniu po ??lubie w ramach wspominanego ju?? urlopu w ojczy??nie w Krakowie na plenerowej sesji ??lubnej. Pocz??tkowo planowali??my sesj?? w okolicach Tarnowa lub w Brzesku w Pa??acu Goetz??w, jednak w ko??cu postawili??my na Krak??w wybieraj??c Kopiec Ko??ciuszki i Wawel.'
                    }
                    entryContentP2={
                        "Miejsca te podobnie jak Rynek, Kazimierz, Mogilany, Kryspin??w, Tyniec mo??na uzna?? za wizyt??wk?? Krakowa i wszystkim, kt??rzy decyduj?? si?? na sesj?? w Krakowie bardzo je polecam. Trzy godzinna sesja min????a nam w dobrych humorach i delikatnych starciach ze stra??nikami KR??LEWSKIEJ TRAWY WAWELU. Mi??ego ogl??dania."
                    }
                    slug={"zuza-i-jarek-sesja-poslubna-kopiec-kosciuszki-i-wawel"}
                    title={"SESJA ??LUBNA KOPIEC KO??CIUSZKI i WAWEL - ZUZA i JAREK"}
                    tags={"zdj??cia ??lubne wawel,plener ??lubny kopiec ko??ciuszki"}
                    date={"23 wrze??nia 2015"}
                    menuNames={"ZUZA i JAREK"}
                    menuTitle={"SESJA ??LUBNA KOPIEC KO??CIUSZKI i WAWEL"}
                    leadNames={"MONIKA i RAFA??"}
                    leadTitle={"ZDJ??CIA ??LUBNE KRAK??W, RESTAURACJA CHOCHO??OWY DW??R"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={process.env.staticS3ImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
