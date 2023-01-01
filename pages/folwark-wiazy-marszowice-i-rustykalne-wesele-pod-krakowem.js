import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0005.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0001.webp", height: 527 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0003.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0007.webp", height: 526 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0008.webp", height: 527 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0010.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0012.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0013.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0016.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0022.webp", height: 312 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0025.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0029.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0032.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0039.webp", height: 805 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0112.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0044.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0050.webp", height: 382 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0054.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0056.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0057.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0073.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0059.webp", height: 527 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0064.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0066.webp", height: 382 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0113.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0067.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0069.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0070.webp", height: 762 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0071.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0077.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0079.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0084.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0080.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0081.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0083.webp", height: 527 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0085.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0087.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0089.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0088.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0091.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0093.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0095.webp", height: 527 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0096.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0097.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0099.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0100.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0101.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0102.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0098.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0103.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0104.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0106.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0105.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0108.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0109.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0110.webp", height: 527 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0111.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0114.webp", height: 762 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0115.webp", height: 324 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0116.webp", height: 527 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0117.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0121.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0119.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0120.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0123.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0126.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0133.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0125.webp", height: 527 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0127.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0132.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0129.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0134.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0131.webp", height: 764 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0130.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0136.webp", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0135.webp", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0128.webp", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "wesele_folwark_wiazy_marszowice.webp"}
                    images={images}
                    headTitle={"Folwark Wiązy Marszowice, Rustykalne wesele pod Krakowem"}
                    headDescription={"Wesele w stodole. Rustykalne wesele pod Krakowem czyli Folwark Wiązy w Marszowicach. Miejsce dla osób, które chcą zorganizować swój ślub w stylu boho."}
                    headKeywords={"wesele w stodole, rustykalne wesele pod krakowem, folwark wiązy marszowice, ślub boho"}
                    headUrl={"https://99foto.pl/folwark-wiazy-marszowice-i-rustykalne-wesele-pod-krakowem"}
                    entryContentP1={
                        "Pomyślcie, gdyby tak zapomnieć o jasnych salach ślubnych i pozwolić puścić wodze fantazji i przenieść się w miejsce bliskie natury, pełne zieleni i pewnego rodzaju prostoty w pozytywnym tego słowa znaczeniu. Miejsce gdzie klimat tworzy drewno i wykonane z niego stoły, ramki, skrzynki, dekoracje, które z łatwością znajdziemy w produkcjach filmowych rodem z Hollywood. Ktoś już to wymyślił określił śluby tego typu mianem ślubów rustykalnych lub boho i dokładnie zdefiniował naturę wystroju ślubnych wnętrz. Rustykalne wesele to nawiązanie do światła, harmonii i natury. Styl rustykalny wywodzi się z klimatu wiejskiego, a dominująca biel i przytłumione światło często przełamywane są bogatą paletą przeróżnych barw."
                    }
                    entryContentP2={
                        "Nie mam żadnych wątpliwości, że dla fanów rustykalnego wystroju Folwark Wiązy w Marszowicach jest spełnieniem ślubnych marzeń. Jest to z pewnością niezwykle urokliwe miejsce, które idealnie wpisuje się w klimat boho. Paulina i Wojtek najpierw zakochali się w sobie, by następnie pokochać to miejsce i bezwzględnie zorganizować w nim swój wymarzony ślub. Przyznaję, że klimat panujący w Folwarku Wiązy w Marszowicach sprawił, że czułem się tak, jakbym był wśród ludzi, który znam od bardzo dawna. Wspaniała Para Młoda, piękna druhna Ania i gotowy na każde wyzwanie Damian, dużo słońca i zespół muzyczny, który nie tylko repertuarem ale i wizerunkiem wpisał się w klimat tej imprezy. Serdecznie zapraszam na zdjęcia i życzę miłego oglądania. "
                    }
                    slug={"folwark-wiazy-marszowice-i-rustykalne-wesele-pod-krakowem"}
                    title={"FOLWARK WIĄZY MARSZOWICE i RUSTYKALNE WESELE POD KRAKOWEM - PAULA i WOJTEK"}
                    tags={"wesele w stodole, rustykalne wesele pod krakowem, folwark wiązy marszowice, ślub boho"}
                    date={"14 lipca 2020"}
                    menuNames={"PAULA i WOJTEK"}
                    menuTitle={"FOLWARK WIĄZY MARSZOWICE i RUSTYKALNE WESELE POD KRAKOWEM"}
                    leadNames={"NATALIA i TOMASZ"}
                    leadTitle={"WESELE W BYSTREJ I OGRÓD PEŁEN LAWENDY W KLIMONTOWIE"}
                    leadUrl={"/wesele-w-bystrej-i-ogrod-pelen-lawendy-w-klimontowie"}
                    leadImage={process.env.staticImagesPath + "karolinka_bystra_podhalanska_wesele.webp"}
                />
            
        );
};

export default BlogPageComponent;
