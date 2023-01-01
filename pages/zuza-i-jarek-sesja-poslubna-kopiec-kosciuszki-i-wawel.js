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
                    headTitle={"Sesja zdjęciowa Kopiec Kościuszki"}
                    headDescription={"Kraków i jego najbardziej znane miejsce na plener czyli Kopiec Kościuszki i Wawel. Sesja ślubna Zuzy i Jarka. Zapraszam do oglądania."}
                    headKeywords={"zdjęcia ślubne wawel,plener ślubny kopiec kościuszki"}
                    headUrl={"https://99foto.pl/zuza-i-jarek-sesja-poslubna-kopiec-kosciuszki-i-wawel"}
                    entryContentP1={
                        'Zuzę i Jarka znacie już z <a href="https://99foto.pl/zuza-i-jarek-zdjecia-slubne-modrzewiowe-wzgorze-zakliczyn/" target="_blank" rel="nofollow">tego ślubnego wpisu</a> na moim blogu. Spotkaliśmy się w tygodniu po ślubie w ramach wspominanego już urlopu w ojczyźnie w Krakowie na plenerowej sesji ślubnej. Początkowo planowaliśmy sesję w okolicach Tarnowa lub w Brzesku w Pałacu Goetzów, jednak w końcu postawiliśmy na Kraków wybierając Kopiec Kościuszki i Wawel.'
                    }
                    entryContentP2={
                        "Miejsca te podobnie jak Rynek, Kazimierz, Mogilany, Kryspinów, Tyniec można uznać za wizytówkę Krakowa i wszystkim, którzy decydują się na sesję w Krakowie bardzo je polecam. Trzy godzinna sesja minęła nam w dobrych humorach i delikatnych starciach ze strażnikami KRÓLEWSKIEJ TRAWY WAWELU. Miłego oglądania."
                    }
                    slug={"zuza-i-jarek-sesja-poslubna-kopiec-kosciuszki-i-wawel"}
                    title={"SESJA ŚLUBNA KOPIEC KOŚCIUSZKI i WAWEL - ZUZA i JAREK"}
                    tags={"zdjęcia ślubne wawel,plener ślubny kopiec kościuszki"}
                    date={"23 września 2015"}
                    menuNames={"ZUZA i JAREK"}
                    menuTitle={"SESJA ŚLUBNA KOPIEC KOŚCIUSZKI i WAWEL"}
                    leadNames={"MONIKA i RAFAŁ"}
                    leadTitle={"ZDJĘCIA ŚLUBNE KRAKÓW, RESTAURACJA CHOCHOŁOWY DWÓR"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={process.env.staticS3ImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
