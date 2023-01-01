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
                    headTitle={"Wesele w Bystrej i Ogród Pełen Lawendy w Klimontowie"}
                    headDescription={"Nowoczesnw sala weselna Karolinka w Bystrej. Ostatnie promienie zachodzącego słońca w Ogrodzie Pełnym Lawendy w Klimontowie. Serdecznie zapraszam."}
                    headKeywords={"wesele w bystrej, ogród pełen lawendy klimontów, plener o zachodzie słońca"}
                    headUrl={"https://99foto.pl/wesele-w-bystrej-i-ogrod-pelen-lawendy-w-klimontowie"}
                    entryContentP1={
                        "Niedziela i popołudniowa kawa to najlepszy moment by wygodnie usiąść w fotelu i zaglądnąć na bloga i do strefy klienta tak po prostu dla przypomnienia sobie wydarzeń ubiegłej soboty. Tym razem w jednym wpisie blogowym zawarłem wybrane zdjęcia ślubne i dla wytrwałych w scrollowaniu kilka zdjęć z pleneru, który zrobiliśmy w tygodniu po ślubie w Ogrodzie Pełnym Lawendy w Klimontowie. Osoby, które śledzą mojego bloga i wpisy na facebooku wiedzą, że bardzo często odwiedzam okolice Jordanowa, Bystrej, Naprawy i Krzczonowa. Tym razem miałem przyjemność fotografowąć piękny ślub Natalii i Tomasza. Niedługo spotykamy się w podobnym składzie na ślubie Kasi i Michała, a za rok balujemy u Patrycji i Bartka. Mam nadzieję, że przy Statule Wolności w Karolince spotkamy się w tym składzie jeszcze nie raz. Kto był ten wie, że wieżę Eiffla można zobaczyć nie tylko w Paryżu."
                    }
                    entryContentP2={
                        "Dzień rozpoczęliśmy od makijażu w Mszanie, następnie sprintem wybraliśmy się do Krzczonowa na przygotowania Natalii i Naprawy dopiąć przygotowania Tomasza na ostatni guzik. Przyjaciele Pary Młodej stanęli na wysokości zadania i przygotowali niesamowite bramy wyciągając drobne zabawki ze swoich garaży. Tomasz jedną skrzynkę zostawił strażakom i imprezę w Bystrej uznaliśmy za otwartą. Robert i Przemek starannie dobierali muzę i pobili rekord w ilości przeprowadzonych konkursów. Goście bawili się świętnie do białego rana i poprawiali temat jeszcze dnia następnego. Serdecznie zapraszam na kilka zdjęć z tego dnia i kilka zdjęć ze słonecznego pleneru na Lawendowym Polu w Klimontowie. W strefie klienta znajdziecie rekordową ilość zdjęć. Miłego oglądania."
                    }
                    slug={"wesele-w-bystrej-i-ogrod-pelen-lawendy-w-klimontowie"}
                    title={"WESELE W BYSTREJ I OGRÓD PEŁEN LAWENDY W KLIMONTOWIE - NATALIA i TOMASZ"}
                    tags={"wesele w bystrej, ogród pełen lawendy klimontów, plener o zachodzie słońca"}
                    date={"05 lipca 2020"}
                    menuNames={"NATALIA i TOMASZ"}
                    menuTitle={"WESELE W BYSTREJ I OGRÓD PEŁEN LAWENDY W KLIMONTOWIE"}
                    leadNames={"PATRYCJA i KRZYSZTOF"}
                    leadTitle={"DWOREK FANTAZJA SKOMIELNA BIAŁA i ŚLUB W STYLU GLAMOUR"}
                    leadUrl={"/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"}
                    leadImage={process.env.staticS3ImagesPath + "dworek_fantazja_skomielna_biala_fotograf.webp"}
                />
            
        );
};

export default BlogPageComponent;
