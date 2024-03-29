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
                    headTitle={"Willa Decjusza Kraków, Ślub Cywilny, Sesja Zdjęciowa"}
                    headDescription={
                        "Ślub Cywilny w międzynarodowym towarzystwie. Sesja zdjęciowa Willa Decjusza w Krakowie. Serdecznie zapraszam na bloga, a w przyszłości do zdjęć w Naszym pięknym mieście Krakowie."
                    }
                    headKeywords={"pomysł na sesje zimową, sesja ślubna zimą, miejsce na sesję ślubną w Krakowie"}
                    headUrl={"https://99foto.pl/willa-decjusza-krakow-slub-cywilny-sesja-zdjeciowa"}
                    entryContentP1={
                        'Same dobre wieści. Mój blog ma kolejnych zagranicznych gości. Pewnie już nie pamiętacie ale wiosną ubiegłego roku Kraków odwiedzili Chan i Katrina, których z przyjemnością oprowadziłem po Krakowskim Rynku. Kilka zdjęć oznaczonych jako <a href="https://99foto.pl/sesja-slubna-krakow-rynek-glowny-wawel-kazimierz/">sesja ślubna w Krakowie</a> możecie łatwo znaleźć na moim blogu. Tym razem przy okazji Ślubu Cywilnego, który odbył się w <a href="https://dworek.eu/" target="_blank" rel="nofollow">Dworku Białoprądnickim</a>, miałem okazję to słoneczne i mroźne (trzy stopnie poniżej zera) przedpołudnie spędzić w przemiłym towarzystwie Kristiny i Oli. Pewnie zastanawiacie się skąd takie imiona. Odpowiedź jest bardzo prosta Kristina pochodzi z Rosji natomiast Ola jest Norwegiem. Podczas naszych rozmów oboje mówili, że uwielbiają Polskę, jednak nie wykluczają powrotu na północ do równie pięknej Norwegii. Nasz blisko czterdziesto kilometrowy tour po Krakowie rozpoczęliśmy na Rynku Głównym.'
                    }
                    entryContentP2={
                        'Jest to MUST HAVE dla zagranicznych gości i bez foty przy Kościele Mariackim i w Sukiennicach sesja plenerowa w Krakowie się nie liczy. Następnie, głównie ze względu na lekki mrozik udaliśmy się do <a href="http://willadecjusza.pl/" target="_blank" rel="nofollow">Willi Decjusza</a>. Ola dał krótki popis fortepianowych umiejętności. Następnie w gronie rodzinnym i z tłumaczką przysięgłą na pokładzie Para Młoda powiedziała TAK podczas ślubu cywilnego we wspomnianym już <a href="https://dworek.eu/" target="_blank" rel="nofollow">Dworku Białoprądnickim</a>. Żeby nie zanudzać zdjęć z ceremoni nie zamieszczam na blogu. Toasty za zdrowie Pary Młodej nasi zagraniczni goście wznieśli w miejscu znanym z najpiekniejszego widoku w Krakowie - <a href="http://www.restauracjavidok.pl/" target="_blank" rel="nofollow">Vidok Restaurant & Cafe</a>. Byliśmy tam dokładnie w momencie, gdy słońce chyliło się ku zachodowi. Świetny dzień w międzynarodowym towarzystwie. Kilka zdjęć, w którym ujemnej temperatury starałem się nie fotografować znajdziecie poniżej. Życzę miłego oglądania.'
                    }
                    slug={"willa-decjusza-krakow-slub-cywilny-sesja-zdjeciowa"}
                    title={"WILLA DECJUSZA KRAKÓW, ŚLUB CYWILNY i SESJA ZDJĘCIOWA - KRISTINA i OLA"}
                    tags={"Willa Decjusza Kraków, Ślub Cywilny, Sesja Zdjęciowa"}
                    date={"24 lutego 2019"}
                    menuNames={"KRISTINA i OLA"}
                    menuTitle={"WILLA DECJUSZA KRAKÓW, ŚLUB CYWILNY i SESJA ZDJĘCIOWA"}
                    leadNames={"MARTA i MICHAŁ"}
                    leadTitle={"JAK ZAPLANOWAĆ I ZORGANIZOWAĆ WYMARZONY ŚLUB W ZIMIE"}
                    leadUrl={"/jak-zaplanowac-i-zorganizowac-wymarzony-slub-w-zimie"}
                    leadImage={process.env.staticS3ImagesPath + "slub_zima.webp"}
                />
            
        );
};

export default BlogPageComponent;
