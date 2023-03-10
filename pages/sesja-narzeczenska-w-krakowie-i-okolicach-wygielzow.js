import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0001.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0010.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0013.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0002.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0023.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0036.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0027.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0032.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0033.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0035.webp", height: 377 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0034.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja-narzeczenska-w-krakowie-i-okolicach-wygielzow-start.webp"}
                    images={images}
                    headTitle={"Sesja narzecze??ska w Krakowie i okolicach"}
                    headDescription={"Sesja narzecze??ska w Krakowie, Nadwi??la??ski Park Etnograficzny Wygie??z??w, Zamek Lipowiec"}
                    headKeywords={"sesja narzecze??ska w Krakowie"}
                    headUrl={"https://99foto.pl/sesja-narzeczenska-w-krakowie-i-okolicach-wygielzow"}
                    entryContentP1={
                        'Magde i Damiana pozna??em rok temu. Ju?? wtedy podczas naszego pierwszego spotkania pomy??leli??my, ??e sesja narzecze??ska przed ??lubem to ??wietny pomys??.  Uda??o nam si?? znale???? czas i trafi?? odpowiedni?? pogod??, wi??c spontanicznie um??wili??my si?? na zdj??cia. ??eby dotrze?? do miejsca naszego pleneru trzeba min???? Zalew w Kryspinowie, Kasztel Kajas??wka, Cztery Pory Roku by jad??c dalej w stron?? O??wi??cimia w ko??cu trafi?? do <a href="https://mnpe.pl/" target="_blank" rel="nofollow">Nadwi??la??skiego Parku Etnograficznego</a> w Wygie??zowie. Miejsce to jest szczeg??lne dla Magdy i Damiana poniewa?? ju?? pod koniec wrze??nia tego roku w Ko??ciele z Ryczowa, kt??ry jest cz????ci?? skansenu wypowiedz?? sakramentalne TAK. Na naszej sesji narzecze??skiej nie brakowa??o ??wietnego ??wiat??a, kt??re to malowa??o wszystko ciep??ymi barwami.'
                    }
                    entryContentP2={
                        "W??dkowanie pasja Damiana zaprowadzi??y nas nad pi??kne jezioro, gdzie w ciszy i spokoju mo??na by??o podziwia?? widok k??ad??cego si?? na tafli wody s??o??ca, smakuj??c czerwone p????wytrawne winko. Ostatnie promienie zachodz??cego s??o??ca ogl??dali??my w okolicach Chrzanowa wdrapuj??c si?? na po??o??ony w tej okolicy punkt widokowy. Magda nie tylko rewelacyjnie wygl??da??a, ale r??wnie?? mega profesjonalnie pozowa??a do zdj????. Pami??tajcie, ??e sesja narzecze??ska w Krakowie lub najbli??szych okolicach to nie strata czasu, ale ??wietna okazja na mile sp??dzone chwile i kilka pami??tkowych zdj????. Life isn't perfect but it has perfect moments... Poznajcie Magd?? i Damiana, kt??rzy na pewno na moim blogu pojawi?? si?? ponownie ju?? wkr??tce. Mi??ego ogl??dania."
                    }
                    slug={"sesja-narzeczenska-w-krakowie-i-okolicach-wygielzow"}
                    title={"SESJA NARZECZE??SKA W KRAKOWIE ??? WYGIE??Z??W - MAGDALENA I DAMIAN"}
                    tags={"Sesja narzecze??ska w Krakowie, Nadwi??la??ski Park Etnograficzny Wygie??z??w, Zamek Lipowiec"}
                    date={"9 lipca 2018"}
                    menuNames={"MAGDALENA i DAMIAN"}
                    menuTitle={"SESJA NARZECZE??SKA W KRAKOWIE ??? WYGIE??Z??W"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ??LUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={process.env.staticS3ImagesPath + "sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
