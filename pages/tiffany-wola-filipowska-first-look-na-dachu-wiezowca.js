import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0003.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0014.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0018.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0020.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0154.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0021.webp", height: 850 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0023.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0029.webp", height: 419 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0026.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0028.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0030.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0031.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0033.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0034.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0036.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0040.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0050.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0051.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0053.webp", height: 805 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0055.webp", height: 762 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0057.webp", height: 805 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0152.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0064.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0065.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0067.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0071.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0073.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0074.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0077.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0079.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0080.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0083.webp", height: 762 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0085.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0087.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0089.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0091.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0092.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0093.webp", height: 566 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0096.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0097.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0099.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0100.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0101.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0102.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0103.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0104.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0105.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0108.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0109.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0112.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0111.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0113.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0114.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0115.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0116.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0117.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0119.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0120.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0121.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0123.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0125.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0126.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0128.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0129.webp", height: 805 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0131.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0130.webp", height: 382 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0132.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0133.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0134.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0135.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0136.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0137.webp", height: 762 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0138.webp", height: 382 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0140.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0139.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0149.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0141.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0143.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0144.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0145.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0146.webp", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0147.webp", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0148.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0142.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0150.webp", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0151.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "restauracja_tiffany_wola_filpowska.webp"}
                    images={images}
                    headTitle={"Restauracja Tiffany Wola Filipowska, fotograf na ślub Krzeszowice"}
                    headDescription={
                        "Restauracja Tiffany Wola Filipowska i reportaż ze ślubu Marty i Marcina w Krzeszowicach. First look na jednym z najwyższych wieżowców w Krakowie. Zapraszam do oglądania."
                    }
                    headKeywords={"restauracja tiffany wola filipowska, fotograf na ślub krzeszowice, first look na dachu wieżowca"}
                    headUrl={"https://99foto.pl/tiffany-wola-filipowska-first-look-na-dachu-wiezowca"}
                    entryContentP1={
                        'Ślub Marty i Marcina to wydarzenie od początku owiane aurą tajemniczości. Marta zaplanowała first look na jednym z najwyższych wieżowców w Krakowie, z genialnym widokiem na linię wytyczoną przebiegiem Zakopianki, wieżami Sanktuarium w Łagiewnikach, Zamkiem na Wawelu czy Klasztorem Kamedułów na Bielanach wyróżniającymi się na mapie tej panoramy. Oczywiście była to niespodzianka dla Marcina, który do końca nie mógł zrozumieć dlaczego w tak piękny i ważny dzień ma łazić po dachach. Domyślam się jednak, że w momencie pierwszego spotkania uśmiech Marty przysłonił mu cały świat i cały ten panoramiczny widok. Przygotowania rozpoczęły się o godzinie jedenastej blisko ronda Mogilskiego w Salonie Kosmetycznym, gdzie nad delikatnym, mającym na celu tylko delikatnie podkreślić niezwykłą urodę Marty pracowała Agnieszka. Świetnie urządzone miejsce z klimatem, który starałem się oddać na zdjęciach. Po wspomnianym już przywitaniu Pary Młodej i błogosławieństwie rodziców wszyscy pędząc obwodnicą Krakowa w mniej niż godzinkę udaliśmy się do <a href="https://marcinkrzeszowice.pl/" target="_blank" rel="nofollow">Kościóła św. Marcina z Tours w Krzeszowicach</a>. Tym razem temat z organistą był dogadany i drzwi na chór stały otworem. Pełne uśmiechów przywitanie gości, którzy z uwagi na temperaturę zjawili się pod kościołem kilka minut przed ceremonią. Ksiądz, który wygłosił świetne kazanie i przeprowadził ceremonię z humorem. Wreszcie moment najważniejszy i sakramentalne TAK.'
                    }
                    entryContentP2={
                        'Obserwowałem Martę przez cały ten długi dzień i mam wrażenie, że w odróżnieniu od większości kobiet, jest mało rzeczy, które potrafią wyprowadzić ją z równowagi. Trzymam kciuki, żeby tak pozostało. Po zdjęciu grupowym pod kościołem Para Młoda zaprosiła gości do <a href="https://restauracja-tiffany.business.site/" target="_blank" rel="nofollow">Restauracji Tiffany w Woli Filipowskiej</a>. Rzut kieliszkami i moc gorących życzeń przyjętych krok przed napisem LOVE. Zespół Muzyczny <a href="https://www.easyband.pl" target="_blank" rel="nofollow">Easy Band</a> z dwójką charyzmatycznych wokalistów grał na granicy rocka szerokim łukiem omijając szlagierowe przeboje disco polo. Był pokaz filmowy, tort i fotobudka <a href="https://www.foto4fun.com.pl/" target="_blank" rel="nofollow">Foto4Fun</a>. Każdą minutę tego ważnego dnia rejestrował Grzegorz z <a href="https://www.facebook.com/gemcofilms/" target="_blank" rel="nofollow">Gemco films</a>, którego cenię za profesjonalizm i Dominik, którego zapamiętam z uwagi na poczucie humoru. Super dzień i świetna impreza. Marto i Marcinie, dziękuję za zaufanie i widzimy się niedługo w górach. Zapraszam na zdjęcia, a po więcej do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"tiffany-wola-filipowska-first-look-na-dachu-wiezowca"}
                    title={"TIFFANY WOLA FILIPOWSKA, FIRST LOOK NA DACHU WIEŻOWCA - MARTA i MARCIN"}
                    tags={"restauracja tiffany wola filipowska, fotograf na ślub krzeszowice, first look na dachu wieżowca"}
                    date={"3 sierpnia 2018"}
                    menuNames={"MARTA i MARCIN"}
                    menuTitle={"TIFFANY WOLA FILIPOWSKA, FIRST LOOK NA DACHU WIEŻOWCA"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ŚLUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={process.env.staticImagesPath + "sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
