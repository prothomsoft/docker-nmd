import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0001.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0003.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0004.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0007.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0013.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0020.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0040.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/willa_decjusza_sesja_zdjeciowa_slub_cywilny_0022.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "willa_decjusza_krakow_slub_cywilny_sesja_zdjeciowa_1.webp"}
                    images={images}
                    headTitle={"Willa Decjusza Krak??w, ??lub Cywilny, Sesja Zdj??ciowa"}
                    headDescription={
                        "??lub Cywilny w mi??dzynarodowym towarzystwie. Sesja zdj??ciowa Willa Decjusza w Krakowie. Serdecznie zapraszam na bloga, a w przysz??o??ci do zdj???? w Naszym pi??knym mie??cie Krakowie."
                    }
                    headKeywords={"pomys?? na sesje zimow??, sesja ??lubna zim??, miejsce na sesj?? ??lubn?? w Krakowie"}
                    headUrl={"https://99foto.pl/willa-decjusza-krakow-slub-cywilny-sesja-zdjeciowa"}
                    entryContentP1={
                        'Same dobre wie??ci. M??j blog ma kolejnych zagranicznych go??ci. Pewnie ju?? nie pami??tacie ale wiosn?? ubieg??ego roku Krak??w odwiedzili Chan i Katrina, kt??rych z przyjemno??ci?? oprowadzi??em po Krakowskim Rynku. Kilka zdj???? oznaczonych jako <a href="https://99foto.pl/sesja-slubna-krakow-rynek-glowny-wawel-kazimierz/">sesja ??lubna w Krakowie</a> mo??ecie ??atwo znale???? na moim blogu. Tym razem przy okazji ??lubu Cywilnego, kt??ry odby?? si?? w <a href="https://dworek.eu/" target="_blank" rel="nofollow">Dworku Bia??opr??dnickim</a>, mia??em okazj?? to s??oneczne i mro??ne (trzy stopnie poni??ej zera) przedpo??udnie sp??dzi?? w przemi??ym towarzystwie Kristiny i Oli. Pewnie zastanawiacie si?? sk??d takie imiona. Odpowied?? jest bardzo prosta Kristina pochodzi z Rosji natomiast Ola jest Norwegiem. Podczas naszych rozm??w oboje m??wili, ??e uwielbiaj?? Polsk??, jednak nie wykluczaj?? powrotu na p????noc do r??wnie pi??knej Norwegii. Nasz blisko czterdziesto kilometrowy tour po Krakowie rozpocz??li??my na Rynku G????wnym.'
                    }
                    entryContentP2={
                        'Jest to MUST HAVE dla zagranicznych go??ci i bez foty przy Ko??ciele Mariackim i w Sukiennicach sesja plenerowa w Krakowie si?? nie liczy. Nast??pnie, g????wnie ze wzgl??du na lekki mrozik udali??my si?? do <a href="http://willadecjusza.pl/" target="_blank" rel="nofollow">Willi Decjusza</a>. Ola da?? kr??tki popis fortepianowych umiej??tno??ci. Nast??pnie w gronie rodzinnym i z t??umaczk?? przysi??g???? na pok??adzie Para M??oda powiedzia??a TAK podczas ??lubu cywilnego we wspomnianym ju?? <a href="https://dworek.eu/" target="_blank" rel="nofollow">Dworku Bia??opr??dnickim</a>. ??eby nie zanudza?? zdj???? z ceremoni nie zamieszczam na blogu. Toasty za zdrowie Pary M??odej nasi zagraniczni go??cie wznie??li w miejscu znanym z najpiekniejszego widoku w Krakowie - <a href="http://www.restauracjavidok.pl/" target="_blank" rel="nofollow">Vidok Restaurant & Cafe</a>. Byli??my tam dok??adnie w momencie, gdy s??o??ce chyli??o si?? ku zachodowi. ??wietny dzie?? w mi??dzynarodowym towarzystwie. Kilka zdj????, w kt??rym ujemnej temperatury stara??em si?? nie fotografowa?? znajdziecie poni??ej. ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"willa-decjusza-krakow-slub-cywilny-sesja-zdjeciowa"}
                    title={"WILLA DECJUSZA KRAK??W, ??LUB CYWILNY i SESJA ZDJ??CIOWA - KRISTINA i OLA"}
                    tags={"Willa Decjusza Krak??w, ??lub Cywilny, Sesja Zdj??ciowa"}
                    date={"24 lutego 2019"}
                    menuNames={"KRISTINA i OLA"}
                    menuTitle={"WILLA DECJUSZA KRAK??W, ??LUB CYWILNY i SESJA ZDJ??CIOWA"}
                    leadNames={"MARTA i MICHA??"}
                    leadTitle={"JAK ZAPLANOWA?? I ZORGANIZOWA?? WYMARZONY ??LUB W ZIMIE"}
                    leadUrl={"/jak-zaplanowac-i-zorganizowac-wymarzony-slub-w-zimie"}
                    leadImage={process.env.staticS3ImagesPath + "slub_zima.webp"}
                />
            
        );
};

export default BlogPageComponent;
