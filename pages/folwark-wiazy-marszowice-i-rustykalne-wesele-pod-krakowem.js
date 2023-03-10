import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0005.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0001.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0003.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0007.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0008.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0010.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0012.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0013.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0016.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0022.webp", height: 312 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0025.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0029.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0032.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0039.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0044.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0050.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0054.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0056.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0057.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0059.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0064.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0066.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0067.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0069.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0070.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0071.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0084.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0081.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0083.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0085.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0087.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0088.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0091.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0095.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0097.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0101.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0098.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0106.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0110.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0114.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0115.webp", height: 324 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0116.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0119.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0125.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0127.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0131.webp", height: 764 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0135.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/wesele_folwark_wiazy_0128.webp", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "wesele_folwark_wiazy_marszowice.webp"}
                    images={images}
                    headTitle={"Folwark Wi??zy Marszowice, Rustykalne wesele pod Krakowem"}
                    headDescription={"Wesele w stodole. Rustykalne wesele pod Krakowem czyli Folwark Wi??zy w Marszowicach. Miejsce dla os??b, kt??re chc?? zorganizowa?? sw??j ??lub w stylu boho."}
                    headKeywords={"wesele w stodole, rustykalne wesele pod krakowem, folwark wi??zy marszowice, ??lub boho"}
                    headUrl={"https://99foto.pl/folwark-wiazy-marszowice-i-rustykalne-wesele-pod-krakowem"}
                    entryContentP1={
                        "Pomy??lcie, gdyby tak zapomnie?? o jasnych salach ??lubnych i pozwoli?? pu??ci?? wodze fantazji i przenie???? si?? w miejsce bliskie natury, pe??ne zieleni i pewnego rodzaju prostoty w pozytywnym tego s??owa znaczeniu. Miejsce gdzie klimat tworzy drewno i wykonane z niego sto??y, ramki, skrzynki, dekoracje, kt??re z ??atwo??ci?? znajdziemy w produkcjach filmowych rodem z Hollywood. Kto?? ju?? to wymy??li?? okre??li?? ??luby tego typu mianem ??lub??w rustykalnych lub boho i dok??adnie zdefiniowa?? natur?? wystroju ??lubnych wn??trz. Rustykalne wesele to nawi??zanie do ??wiat??a, harmonii i natury. Styl rustykalny wywodzi si?? z klimatu wiejskiego, a dominuj??ca biel i przyt??umione ??wiat??o cz??sto prze??amywane s?? bogat?? palet?? przer????nych barw."
                    }
                    entryContentP2={
                        "Nie mam ??adnych w??tpliwo??ci, ??e dla fan??w rustykalnego wystroju Folwark Wi??zy w Marszowicach jest spe??nieniem ??lubnych marze??. Jest to z pewno??ci?? niezwykle urokliwe miejsce, kt??re idealnie wpisuje si?? w klimat boho. Paulina i Wojtek najpierw zakochali si?? w sobie, by nast??pnie pokocha?? to miejsce i bezwzgl??dnie zorganizowa?? w nim sw??j wymarzony ??lub. Przyznaj??, ??e klimat panuj??cy w Folwarku Wi??zy w Marszowicach sprawi??, ??e czu??em si?? tak, jakbym by?? w??r??d ludzi, kt??ry znam od bardzo dawna. Wspania??a Para M??oda, pi??kna druhna Ania i gotowy na ka??de wyzwanie Damian, du??o s??o??ca i zesp???? muzyczny, kt??ry nie tylko repertuarem ale i wizerunkiem wpisa?? si?? w klimat tej imprezy. Serdecznie zapraszam na zdj??cia i ??ycz?? mi??ego ogl??dania. "
                    }
                    slug={"folwark-wiazy-marszowice-i-rustykalne-wesele-pod-krakowem"}
                    title={"FOLWARK WI??ZY MARSZOWICE i RUSTYKALNE WESELE POD KRAKOWEM - PAULA i WOJTEK"}
                    tags={"wesele w stodole, rustykalne wesele pod krakowem, folwark wi??zy marszowice, ??lub boho"}
                    date={"14 lipca 2020"}
                    menuNames={"PAULA i WOJTEK"}
                    menuTitle={"FOLWARK WI??ZY MARSZOWICE i RUSTYKALNE WESELE POD KRAKOWEM"}
                    leadNames={"NATALIA i TOMASZ"}
                    leadTitle={"WESELE W BYSTREJ I OGR??D PE??EN LAWENDY W KLIMONTOWIE"}
                    leadUrl={"/wesele-w-bystrej-i-ogrod-pelen-lawendy-w-klimontowie"}
                    leadImage={process.env.staticS3ImagesPath + "karolinka_bystra_podhalanska_wesele.webp"}
                />
            
        );
};

export default BlogPageComponent;
