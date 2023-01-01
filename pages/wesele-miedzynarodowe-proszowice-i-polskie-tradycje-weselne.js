import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0001.webp", height: 527 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0002.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0003.webp", height: 526 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0004.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0005.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0006.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0007.webp", height: 527 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0009.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0010.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0011.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0012.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0014.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0015.webp", height: 526 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0017.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0018.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0019.webp", height: 527 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0020.webp", height: 526 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0021.webp", height: 383 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0022.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0023.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0024.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0026.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0029.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0031.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0032.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0033.webp", height: 526 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0034.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0037.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0038.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0040.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0041.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0042.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0043.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0045.webp", height: 527 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0049.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0050.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0053.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0052.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0054.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0056.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0057.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0063.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0064.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0066.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0067.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0068.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0069.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0070.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0071.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0072.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0073.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0075.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0076.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0077.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0079.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0080.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0081.webp", height: 526 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0082.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0083.webp", height: 566 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0084.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0086.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0087.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0088.webp", height: 806 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0089.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0090.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0091.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0093.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0092.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0096.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0097.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0099.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0100.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0101.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0102.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0103.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0104.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0105.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0106.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0108.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0109.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0110.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0111.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0112.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0113.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0115.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0114.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0130.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0116.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0118.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0132.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0117.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0119.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0120.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0121.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0122.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0123.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0126.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0125.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0128.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0129.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0131.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0127.webp", height: 382 }

        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sala_weselna_biala_wilczyca_kocmyrzow.webp"}
                    images={images}
                    headTitle={"Wesele Międzynarodowe Proszowice ✔️ Polskie Tradycje Weselne"}
                    headDescription={"Sala weselna Biała Wilczyca Kocmyrzów. Międzynarodowe wesele połączone z polskimi tradycjami weselnymi. Monika i Martin, piękni, młodzi, szczęśliwi. Zapraszam."}
                    headKeywords={"Wesele międzynarodowe, polskie tradycje weselne, fotograf na wesele Proszowice"}
                    headUrl={"https://99foto.pl/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne"}
                    entryContentP1={
                        'Bardzo dobrze wspominam studenckie czasy i zupełnie niezwiązane z nauką wakacyjne wyjazdy zagraniczne. To właśnie tam wśród ciągnących się w nieskończoność ścieżek fasolowych znalazłem prawdziwą motywację do tego by nauczyć się języka angielskiego. Nigdy nie sądziłem, że umiejętność ta będzie tak ważna w mojej karierze fotografa ślubnego. Branża ślubna się zmienia, mamy coraz więcej wesel w okresie zimowym, rośnie świadomość klientów poszukujących dobrego fotografa ślubnego, który wykona ich wymarzone zdjęcia. Mamy też coraz więcej par młodych, które decydują się na zaproszenie gości innych narodowości do Polski i zorganizowanie międzynarodowego ślubu i wesela właśnie w naszym kraju. Międzynarodowa ekipa przyjaciół jest na pewno gwarancją udanej zabawy. Jako lokalni patrioci doskonale znamy polskie tradycje weselne. Każdy z nas wielokrotnie gościł na ślubach w bliższej lub dalszej rodzinie, weselach znajomych i kolegów z pracy. Nasi zagraniczni goście natomiast na naszych polskich weselach bawią się świetnie ponieważ doceniają wszystko to, co nam już zwyczajnie spowszedniało. Tak, bardzo często nie doceniamy pysznego jedzenia, dekoracji wykonanych z żywych kwiatów, muzyki, która odsłuchana w Spotifaju wielokrotnie napędza nas do tańca. Dla zagranicznych gości, którzy przyjeżdżają do naszego kraju na wesela, elementy te wywołują fascynacje tym co się dzieje, jak się dzieje i ile się dzieje. Ten krótki wstęp prowadzi nas prosto do Proszowic...'
                    }
                    entryContentP2={
                        'Właśnie tam w domu rodzinnym Moniki rozpoczęliśmy przygotowania do tego międzynarodowego ślubu i wesela. Makijaż, fryzjer, ubieranie sukni i oczekiwanie na przyjazd Pana Młodego, wszystko z uśmiechem na ustach  i tym czymś w oczach. Rodzinnie, wspaniale i na luzie, tylko tak można oddać atmosferę tego przedpołudnia w kilku słowach. Ceremonia zaślubin odbyła się w <a href="http://parafiaproszowice.com.pl/" target="_blank" rel="nofollow">Kościele pw. Wniebowzięcia NMP i św. Jana Chrzciciela</a> w Proszowicach. Piękny gotycki Kościół wypełniony po brzegi zaproszonymi na ceremonię gośćmi. Kazanie w języku polskim i przesłanie wygłoszone pod koniec ceremonii w języku angielskim. Uśmiechy i emocje w momencie wypowiadania słów przysięgi małżeńskiej. Gdy część oficjalna dobiegła końca Monika i Martin zaprosili gości do oddalonej tylko 15 kilometrów od Krakowa <a href="https://wedding.pl/sale-weselne/biala-wilczyca-1" target="_blank" rel="nofollow">Sali Weselnej Biała Wilczyca</a>. Wystrzały armatnie powitały przybyłych na impreze gości. W trakcie życzeń serwowano lemoniadę i zimne lody, było więc pysznie. Grupa LIMONCELLO dzielnie walczyła na parkiecie do upadłego. Odpowiednią muzę na najwyższym poziome serwował <a href="https://www.facebook.com/zespolfunkey/" target="_blank" rel="nofollow">Zespół FunKey</a>. Na zdjęcia grupowe wbiliśmy w złotej godzinie, czyli najlepszej możliwej porze dnia. Dużo się działo i potwierdzam, że międzynarodowe towarzystwo i wesele międzynarodowe jest gwarancją dobrej, co ja piszę najlepszej zabawy. Serdecznie zapraszam na zdjęcia. Więcej znajdziecie w strefie klienta wpisując hasło z mojej wizytówki. Życzy się miłego oglądania i lajkowania na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow">Insta</a>.'
                    }
                    slug={"wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne"}
                    title={"WESELE MIĘDZYNARODOWE i POLSKIE TRADYCJE WESELNE - MONIKA i MARTIN"}
                    tags={"Wesele międzynarodowe, polskie tradycje weselne, fotograf na wesele Proszowice"}
                    date={"6 czerwca 2019"}
                    menuNames={"MONIKA i MARTIN"}
                    menuTitle={"WESELE MIĘDZYNARODOWE PROSZOWICE i POLSKIE TRADYCJE WESELNE"}
                    leadNames={"MARLENA i MACIEK"}
                    leadTitle={"KAROLINKA BYSTRA PODHALAŃSKA, POGODOWI SZCZĘŚCIARZE"}
                    leadUrl={"/sala-weselna-karolinka-bystra-podhalanska"}
                    leadImage={process.env.staticImagesPath + "restauracja_karolinka_bystra_podhalanska.webp"}
                />
            
        );
};

export default BlogPageComponent;