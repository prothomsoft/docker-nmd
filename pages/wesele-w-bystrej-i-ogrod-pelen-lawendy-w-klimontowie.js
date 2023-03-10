import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0002.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0012.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0010.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0014.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0015.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0016.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0017.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0024.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0028.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0029.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0039.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0033.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0035.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0036.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0048.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0049.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0051.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0053.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0055.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0059.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0061.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0064.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0066.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0067.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0068.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0069.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0071.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0074.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0079.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0082.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0083.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0086.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0088.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0091.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0095.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0096.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0098.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0101.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0108.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0109.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0111.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0115.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0117.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0120.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0123.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0122.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/07/karolinka_bystra_podhalanska_wesele_0127.webp", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "karolinka_bystra_podhalanska_wesele.webp"}
                    images={images}
                    headTitle={"Wesele w Bystrej i Ogr??d Pe??en Lawendy w Klimontowie"}
                    headDescription={"Nowoczesnw sala weselna Karolinka w Bystrej. Ostatnie promienie zachodz??cego s??o??ca w Ogrodzie Pe??nym Lawendy w Klimontowie. Serdecznie zapraszam."}
                    headKeywords={"wesele w bystrej, ogr??d pe??en lawendy klimont??w, plener o zachodzie s??o??ca"}
                    headUrl={"https://99foto.pl/wesele-w-bystrej-i-ogrod-pelen-lawendy-w-klimontowie"}
                    entryContentP1={
                        "Niedziela i popo??udniowa kawa to najlepszy moment by wygodnie usi?????? w fotelu i zagl??dn???? na bloga i do strefy klienta tak po prostu dla przypomnienia sobie wydarze?? ubieg??ej soboty. Tym razem w jednym wpisie blogowym zawar??em wybrane zdj??cia ??lubne i dla wytrwa??ych w scrollowaniu kilka zdj???? z pleneru, kt??ry zrobili??my w tygodniu po ??lubie w Ogrodzie Pe??nym Lawendy w Klimontowie. Osoby, kt??re ??ledz?? mojego bloga i wpisy na facebooku wiedz??, ??e bardzo cz??sto odwiedzam okolice Jordanowa, Bystrej, Naprawy i Krzczonowa. Tym razem mia??em przyjemno???? fotografow???? pi??kny ??lub Natalii i Tomasza. Nied??ugo spotykamy si?? w podobnym sk??adzie na ??lubie Kasi i Micha??a, a za rok balujemy u Patrycji i Bartka. Mam nadziej??, ??e przy Statule Wolno??ci w Karolince spotkamy si?? w tym sk??adzie jeszcze nie raz. Kto by?? ten wie, ??e wie???? Eiffla mo??na zobaczy?? nie tylko w Pary??u."
                    }
                    entryContentP2={
                        "Dzie?? rozpocz??li??my od makija??u w Mszanie, nast??pnie sprintem wybrali??my si?? do Krzczonowa na przygotowania Natalii i Naprawy dopi???? przygotowania Tomasza na ostatni guzik. Przyjaciele Pary M??odej stan??li na wysoko??ci zadania i przygotowali niesamowite bramy wyci??gaj??c drobne zabawki ze swoich gara??y. Tomasz jedn?? skrzynk?? zostawi?? stra??akom i imprez?? w Bystrej uznali??my za otwart??. Robert i Przemek starannie dobierali muz?? i pobili rekord w ilo??ci przeprowadzonych konkurs??w. Go??cie bawili si?? ??wi??tnie do bia??ego rana i poprawiali temat jeszcze dnia nast??pnego. Serdecznie zapraszam na kilka zdj???? z tego dnia i kilka zdj???? ze s??onecznego pleneru na Lawendowym Polu w Klimontowie. W strefie klienta znajdziecie rekordow?? ilo???? zdj????. Mi??ego ogl??dania."
                    }
                    slug={"wesele-w-bystrej-i-ogrod-pelen-lawendy-w-klimontowie"}
                    title={"WESELE W BYSTREJ I OGR??D PE??EN LAWENDY W KLIMONTOWIE - NATALIA i TOMASZ"}
                    tags={"wesele w bystrej, ogr??d pe??en lawendy klimont??w, plener o zachodzie s??o??ca"}
                    date={"05 lipca 2020"}
                    menuNames={"NATALIA i TOMASZ"}
                    menuTitle={"WESELE W BYSTREJ I OGR??D PE??EN LAWENDY W KLIMONTOWIE"}
                    leadNames={"PATRYCJA i KRZYSZTOF"}
                    leadTitle={"DWOREK FANTAZJA SKOMIELNA BIA??A i ??LUB W STYLU GLAMOUR"}
                    leadUrl={"/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"}
                    leadImage={process.env.staticS3ImagesPath + "dworek_fantazja_skomielna_biala_fotograf.webp"}
                />
            
        );
};

export default BlogPageComponent;
