import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0001.webp", height: 527 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0004.webp", height: 526 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0005.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0007.webp", height: 527 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0008.webp", height: 527 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0010.webp", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0013.webp", height: 567 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0015.webp", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0017.webp", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0020.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0021.webp", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0022.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0025.webp", height: 852 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0033.webp", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0032.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0030.webp", height: 851 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0031.webp", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0028.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0038.webp", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0037.webp", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0039.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0040.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0041.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0043.webp", height: 527 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0045.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0046.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0047.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0050.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0051.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0052.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0056.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0057.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0058.webp", height: 527 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0073.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0060.webp", height: 527 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0062.webp", height: 466 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0066.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0067.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0069.webp", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0071.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0070.webp", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0075.webp", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0076.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0077.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0078.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0079.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0080.webp", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0082.webp", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0083.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0084.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0085.webp", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0086.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0087.webp", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0089.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0090.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0091.webp", height: 566 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0093.webp", height: 566 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0094.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0095.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0096.webp", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0097.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0098.webp", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0099.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0100.webp", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0101.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0102.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0103.webp", height: 527 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0104.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0107.webp", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0108.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0109.webp", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0105.webp", height: 527 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0111.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0112.webp", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0113.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0114.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0115.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0116.webp", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0117.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0119.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0120.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0121.webp", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0122.webp", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0125.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0126.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0127.webp", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0128.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0129.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0123.webp", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0130.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0131.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0132.webp", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0133.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0134.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0135.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0136.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0142.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0138.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0139.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0140.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0141.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0143.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0137.webp", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0145.webp", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0146.webp", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0147.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "bazylika-bozego-ciala-krakow-fotoreportaz-slubny.webp"}
                    images={images}
                    headTitle={"Bazylika Bożego Ciała Kraków, Fotoreportaż Ślubny"}
                    headDescription={"Bazylika Bożego Ciała na Krakowskim Kazimierzu - miejsce na ślub wymarzone. Sierpniowa pogoda i ślub w gronie rodziny i bliskich przyjaciół. Zapraszam."}
                    headKeywords={"kraków kościoły na ślub, kościół kraków kazimierz, bazylika bożego ciała"}
                    headUrl={"https://99foto.pl/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"}
                    entryContentP1={
                        'Sierpień to gorący miesiąc ślubny z er w nazwie. Myśle więc, że dobrym pomysłem będzie rozpoczęcie go od pokazania na blogu fotoreportażu ślubnego, który w całości odbył się w naszym pięknym mieście Krakowie. Chciałem swoją gawęde rozpocząć od przedstawienia trzech wspaniałych krakowskich kościołów - <a href="http://mariacki.com/" target="_blank" rel="nofollow">Kościoła Mariackiego</a>, <a href="http://kolegiata-anna.pl/" target="_blank" rel="nofollow">Kościoła św. Anny</a> oraz <a href="http://apostolowie.pl/" target="_blank" rel="nofollow">Kościoła św. Piotra i Pawła</a>. Natomiast przedmiotem mojej troski szczegółnej jest przede wszystkim <a href="http://www.bozecialo.net/index.php/bazylika" target="_blank" rel="nofollow">Bazylika Bożego Ciała w Krakowie</a>, w której odbyła się ceremonia zaślubin Anny i Piotra. Bazylika, którą można zwiedzać i podziwiać godzinami, chłonąc historię tego miejsca, poznając i odkrywając tam wiele niezwykłych artefaktów. Poszukując kościoła na ślub w Krakowie na Kazimierzu koniecznie rozważcie atrakcje turystyczną małopolski <a href="http://www.bozecialo.net/index.php/bazylika" target="_blank" rel="nofollow">Bazylikę Bożego Ciała w Krakowie</a>. Słoneczny dzień przerywany intensywnymi i trwającymi tylko kilka minut opadami deszczu rozpoczęliśmy na ulicy Cystersów w <a href="http://klaru.pl/" target="_blank" rel="nofollow">Klaru Lashes Makeup Nails</a>. Makijaż wykonała Klaudia Rusek w swoim przestronnym studio. Delikatny makijaż tylko podkreślił niezwykłą urodę Ani.'
                    }
                    entryContentP2={
                        'Następnie Ania ubrała suknię ślubną, biżuterię i podwiązkę. Wszystko to miało miejsce w pachnącym nowością mieszkaniu na osiedlu Avia w Krakowie. Chwilkę później odbyło się błogosławieństwo, pełne emocji i nie pozbawione luzu. Tuż za ścianą deszczu, który w momencie przejazdu nie oszczędzał ozdób wpiętych do czarnego BMW Pary Młodej, czekał na Anie i Piotra wspomniany już w mojej gawędzie wspaniały kościół. Piękna ceremonia, wspaniałe kazanie, przysięga wypowiedziana z pamięci (brawa za odwagę) i sakramentalne TAK. Zdjęcie grupowe i życzenia pod kościołem fotografowane nie tylko przeze mnie, ale też zaciekawionych polskim ślubem obcokrajowców odwiedzających Kraków. Impreza sterowana przez DJ-ów, wystartowała. Zaistniała korelacja pomiędzy gośćmi na parkiecie i ciasteczkami na stole ze słodkościami. Goście pojawiali się, a ciasteczka znikały równie szybko. Wszystko to w idealnie przystosowanej do imprez weselnych sali bankietowej <a href="https://www.junior.krakow.pl/wesela-i-imprezy-okolicznosciowe/" target="_blank" rel="nofollow">Hotelu Junior</a>. Ten ważny dzień i moc jego atrakcji zarejestrowały nie tylko moje dwa aparaty. Krzyś z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">CAMDESIGN - Nowoczesny film ślubny</a> rejestrował skrzętnie każdą minutkę, stając na głowie by pokonać mnie w kategoriach niezwykłości kadru i odnajdywania najlepszego światła - kiedyś zobaczę czy zwyciężył. Aniu i Piotrze, dziękuję Wam za zaufanie przy wyborze fotografa ślubnego. Wszystkich gości weselnych zapraszam do oglądania najciekawszych moim zdaniem zdjęć na moim blogu. Zdjęcia grupowe i dużo więcej znajdziecie natomiast w strefie klienta wpisując hasło z mojej wizytówki. Gorąco zachęcam do lajkowania i udostępniania wpisu na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Insta</a> i życzę miłego oglądania.'
                    }
                    slug={"bazylika-bozego-ciala-krakow-fotoreportaz-slubny"}
                    title={"BAZYLIKA BOŻEGO CIAŁA KRAKÓW, FOTOREPORTAŻ ŚLUBNY - ANNA i PIOTR"}
                    tags={"kraków kościoły na ślub, kościół kraków kazimierz, bazylika bożego ciała"}
                    date={"8 sierpnia 2019"}
                    menuNames={"ANNA i PIOTR"}
                    menuTitle={"BAZYLIKA BOŻEGO CIAŁA KRAKÓW, FOTOREPORTAŻ ŚLUBNY"}
                    leadNames={"MARLENA i ADAM"}
                    leadTitle={"MIEJSKA SESJA NARZECZEŃSKA, PIĘKNI, MŁODZI i ZAKOCHANI"}
                    leadUrl={"/miejska-sesja-narzeczenska-piekni-mlodzi-i-zakochani"}
                    leadImage={process.env.staticImagesPath + "sesja_narzeczenska_krakow_kazimierz.webp"}
                />
            
        );
};

export default BlogPageComponent;