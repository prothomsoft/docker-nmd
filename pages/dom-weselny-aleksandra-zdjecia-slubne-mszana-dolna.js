import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0003.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0005.webp", height: 382 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0007.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0008.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0010.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0014.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0016.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0019.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0021.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0025.webp", height: 382 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0030.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0038.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0048.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0050.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0051.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0054.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0057.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0063.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0066.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0067.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0069.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0073.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0077.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0079.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0080.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0082.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0083.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0084.webp", height: 527 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0087.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0089.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0091.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0093.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0096.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0097.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0098.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0099.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0100.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0101.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0102.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0103.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0104.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0105.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0108.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0109.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0111.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0112.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0113.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0114.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0116.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0117.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0119.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0120.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0121.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0123.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0125.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0126.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0127.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0128.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0129.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0130.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0131.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0133.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0134.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0135.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0136.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0137.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0138.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0139.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0140.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0142.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0141.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0132.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0143.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0145.webp", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0147.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0146.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0148.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0115.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0149.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0150.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0151.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0144.webp", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0152.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "dom-weselny-aleksandra-zdjecia-slubne-mszana-dolna-start.webp"}
                    images={images}
                    headTitle={"Dom weselny Aleksandra, zdjęcia ślubne Mszana Dolna"}
                    headDescription={"Aleksandra to nowo powstały Dom Weselny w Mszanie Dolnej, świetne miejsce by zorganizować tam Wasz ślub. Zapraszam na reportaż ślubny Kasi i Piotra."}
                    headKeywords={"Dom weselny Aleksandra, zdjęcia ślubne Mszana Dolna, fotograf na wesele Mszana"}
                    headUrl={"https://99foto.pl/dom-weselny-aleksandra-zdjecia-slubne-mszana-dolna"}
                    entryContentP1={
                        'Święta Wielkanocne, a w szczególności lany poniedziałek to dzień otwierający parkiety w całej Polsce. Korzystając więc z okazji urwałem się na kilka godzin z Tokarni, gdzie dzieliliśmy się jajkiem z rodziną już od niedzieli, by uwiecznić ślub Kasi i Piotra. Przygotowania zaczęliśmy w Myślenicach w <a href="https://www.facebook.com/biogenika/" target="_blank" rel="nofollow">Salonie Urody Biogenika</a>. Makijaż profesjonalnie wykonała koleżanka Kasi z licealnej klasy. Chwilę później na fotelu zasiadła świadkowa Ania, czyli siostra Kasi, której zdjęcie after możecie zobaczyć na facebooku. Następnie udaliśmy się do Stróży i tam z pomocą mamy Kasia ubrała suknię ślubną, buty, podwiązkę i biżuterie. Była też chwila na kawkę i miłą rozmowę z rodzicami. Piotr mieszkał w Pcimiu, udałem się tam więc w kilka minut by sfotografować również jego przygotowania. Podczas ubierania asystowała siostra Ania. Gdy wszystko było już gotowe odbyło się pierwsze pełne emocji błogosławieństwo w domu Piotra i kolejne już wspólne w domu Kasi.'
                    }
                    entryContentP2={
                        'Po godzinie 14 udaliśmy się do <a href="https://www.diecezja.pl/parafie/lista-parafii/33-pcim/parafia-nmp-krolowej-polski.html" target="_blank" rel="nofollow"> Kościoła pw. Najświętszej Maryi Panny Królowej Polski w Stróży</a>. Ponieważ brat Kasi w najbliższej przyszłości będzie księdzem, więc zakrystia i kościół będą jego drugim domem. Czuł się tam prawdziwym gospodarzem, dzięki czemu wszystko przebiegało bardzo sprawnie i w przemiłej atmosferze. Po kazaniu Para Młoda powiedziała sakramentalne TAK. Atrakcją dla wielu gości, była schola, która dodała ceremoni charakteru grą na instumentach i pięknym śpiewem. Zrobiliśmy zdjęcie grupowe i udaliśmy się do <a href="https://www.weselamszana.pl/" target="_blank" rel="nofollow">Domu Weselnego Aleksandra w Mszanie Dolnej</a>. Goście weselny Kasi i Piotra mogli rozpocząć sezon taneczny w mega komfortowych warunkach. Parkiet zapełniał się szybko. Frekwencję na parkiecie zapewniał mega profesjolany zespół <a href="https://zespolespresso.pl/" target="_blank" rel="nofollow">Zespół Espresso</a>. Każdy szczegół został uchwycony przez filmowców z <a href="https://www.db7studio.pl/pl/" target="_blank" rel="nofollow">DB7 Studio</a>. Nie brakowało chętnych do zabaw oczepinowych, działo się dużo, a szalona zabawa trwała do białego rana. Kasiu i Piotrze wielkie dzięki, że mogłem być Waszym gościem i fotografem. Zapraszam na reportaż z tego dnia, a po więcej zdjęć do strefy klienta. Hasło znajdziecie na mojej wizytówce.'
                    }
                    slug={"dom-weselny-aleksandra-zdjecia-slubne-mszana-dolna"}
                    title={"DOM WESELNY ALEKSANDRA, ZDJĘCIA ŚLUBNE MSZANA DOLNA - KASIA i PIOTR"}
                    tags={"Dom weselny Aleksandra, zdjęcia ślubne Mszana Dolna, fotograf na wesele Mszana"}
                    date={"2 kwietnia 2018"}
                    menuNames={"KASIA i PIOTR"}
                    menuTitle={"DOM WESELNY ALEKSANDRA, ZDJĘCIA ŚLUBNE MSZANA DOLNA"}
                    leadNames={"KINGA i MACIEK"}
                    leadTitle={"DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA"}
                    leadUrl={"/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada"}
                    leadImage={process.env.staticImagesPath + "dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
