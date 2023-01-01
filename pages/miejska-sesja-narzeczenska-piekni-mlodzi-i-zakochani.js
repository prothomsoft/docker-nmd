import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0002.webp", height: 851 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0006.webp", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0005.webp", height: 527 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0008.webp", height: 851 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0010.webp", height: 850 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0011.webp", height: 526 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0016.webp", height: 851 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0004.webp", height: 526 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0018.webp", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0020.webp", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0021.webp", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0024.webp", height: 850 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0025.webp", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0037.webp", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0028.webp", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0036.webp", height: 526 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0026.webp", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0038.webp", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0042.webp", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0043.webp", height: 527 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0019.webp", height: 850 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0013.webp", height: 762 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja_narzeczenska_krakow_kazimierz.webp"}
                    images={images}
                    headTitle={"Miejska sesja narzeczeńska w Krakowie"}
                    headDescription={"Miejska sesja narzeczeńska w Krakowie, Kazimierz, Stare Miasto, Zakrzówek. Piękni, młodzi i zakochani - Marlena i Adam. Zapraszam."}
                    headKeywords={"miejska sesja narzeczeńska, zdjęcia Kraków Stare Miasto, sesja na Kazimierzu"}
                    headUrl={"https://99foto.pl/miejska-sesja-narzeczenska-piekni-mlodzi-i-zakochani"}
                    entryContentP1={
                        "Pracując nad obróbką miejskiej sesji narzeczeńskiej Marleny i Adama słuchałem sobie jednej z ostatnich płyt Eda Sheerana, gdzie w utworze Beautiful People śpiewnie wyraża on swoje niezadowolenie ze swojego rudego wyglądu. Niewątpliwie przyszli Państwo Młodzi, których zdjęcia mam przyjemność dzisiaj pokazać na blogu, mieli o wiele więcej szczęścia i tytuł wpisu piękni, młodzi, zakochani pasuje do nich idealnie. Ślub już w sierpniu, a tymczasem wspólnie korzystając z rewelacyjnej pogody odwiedziliśmy kilka zakątków naszego pięknego Krakowa."
                    }
                    entryContentP2={
                        'Na początek wybraliśmy oczywiście Kazimierz, gdyż jest to miejsce idealne na tego typu miejskie sesje narzeczeńskie. Kraków ma swój rytm, kolory, styl, miejsca może mniej uporządkowane, ale naznaczone charakterem i opowiadające wspaniałe historie. Wybierając odpowiednią drogę i podążając tą drogą śladami zakochanych z aparatem w ręku mamy pewność stworzenia minimum kilku niezapomnianych kadrów. Pamiętajcie, że miejska sesja narzeczeńska to świetny pomysł na oswojenie się z obiektywem aparatu fotograficznego i sposób na bliższe poznanie fotografa ślubnego, który będzie Wam towarzyszył w tym najważniejszym dniu. Serdecznie zapraszam do oglądania i zachęcam do lajkowania na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Insta</a>.'
                    }
                    slug={"miejska-sesja-narzeczenska-piekni-mlodzi-i-zakochani"}
                    title={"MIEJSKA SESJA NARZECZEŃSKA, PIĘKNI, MŁODZI i ZAKOCHANI - MARLENA i ADAM"}
                    tags={"pomysł na sesję zdjęciową, ciekawe miejsca w krakowie, zdjęcia pary młodej w plenerze"}
                    date={"28 czerwca 2019"}
                    menuNames={"MARLENA i ADAM"}
                    menuTitle={"MIEJSKA SESJA NARZECZEŃSKA, PIĘKNI, MŁODZI i ZAKOCHANI"}
                    leadNames={"JOANNA i SZYMON"}
                    leadTitle={"CIEKAWE MIEJSCA W KRAKOWIE CZYLI POMYSŁ NA SESJĘ ZDJĘCIOWĄ"}
                    leadUrl={"/ciekawe-miejsca-w-krakowie-czyli-pomysl-na-sesje-zdjeciowa"}
                    leadImage={process.env.staticImagesPath + "ciekawe_miejsca_na_plener_w_krakowie.webp"}
                />
            
        );
};

export default BlogPageComponent;
