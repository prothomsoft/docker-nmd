import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0006.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0020.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0033.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0035.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0036.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0037.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0039.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0040.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0041.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0042.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0043.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0044.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0045.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0047.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0048.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0049.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0052.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0054.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0056.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0058.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0059.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0062.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0063.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0065.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0066.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0067.webp", height: 764 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0069.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0071.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0072.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0074.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0075.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0076.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0078.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0081.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0090.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0093.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0094.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0095.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0105.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "aga-michal-i-zuzia-zdjecia-slubne-zajazd-polesie-przybyslawice_start.webp"}
                    images={images}
                    headTitle={"Zdjęcia ślubne Zajazd Polesie Przybysławice"}
                    headDescription={"Reportaż ze ślubu Agi i Michała w Zajeździe Polesie - Przybysławice. Uroczystość zaślubin w Kościele pw. Św. Judy Tadeusza w Krakowie. Zapraszam do oglądania."}
                    headKeywords={"fotograf na wesele kraków,zdjęcia ślubne w restauracji zajazd polesie"}
                    headUrl={"https://99foto.pl/aga-michal-i-zuzia-zdjecia-slubne-zajazd-polesie-przybyslawice"}
                    entryContentP1={
                        'W poprzednim wpisie poznaliście Jarka i Zuzę, którzy do Polski na swój ślub przyjechali z Niemiec, tym razem historia się powtarza ponieważ Aga, Michał i Zuzia odwiedzili rodzinne strony w tym samym celu przybywając do nas jednak nie z Niemiec, a z Holandii. Tym razem wszystko odbyło się w Krakowie i niedalekich okolicach. Makijaż perfekcyjnie wykonała Natalia, chwilę później odbyło się błogosławieństwo, gdzie Zuzia dzielnie towarzyszyła rodzicom. Ślub odbył się w <a href="https://www.parafiaczyzyny.pl/" rel="nofollow" target="_blank" rel="nofollow">Kościele pw. Św. Judy Tadeusza</a> w Krakowie-Czyżynach.'
                    }
                    entryContentP2={
                        'Po grupowym zdjęciu przed kościołem wszyscy wyruszyliśmy do Przybysławic i znajdującego się tam <a href="https://zajazd-polesie.eu/" rel="nofollow" target="_blank" rel="nofollow">Zajazdu Polesie</a>. Zabawa weselna odbywała się w gronie rodzinnym, a najmłodsze pociechy nie opuszczały parkietu nawet na chwilę. DJ, którego pozdrawiam, dbał o dobre humory gości, samodzielnie dmuchając balony dla najmłodszych, proponując ciekawe zabawy i gorące rytmy (piosenki góralski zapełniały parkiet z automatu). Były podziękowania dla rodziców, tort, a zabawa trwała do białego rana. Miłego oglądania i zapraszam po więcej zdjęć do strefy klienta.'
                    }
                    slug={"aga-michal-i-zuzia-zdjecia-slubne-zajazd-polesie-przybyslawice"}
                    title={"ZDJĘCIA ŚLUBNE ZAJAZD POLESIE PRZYBYSŁAWICE - AGA, MICHAŁ i ZUZIA"}
                    tags={"fotograf na wesele kraków,zdjęcia ślubne w restauracji zajazd polesie"}
                    date={"26 września 2015"}
                    menuNames={"AGA, MICHAŁ i ZUZIA"}
                    menuTitle={"ZDJĘCIA ŚLUBNE ZAJAZD POLESIE PRZYBYSŁAWICE"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={process.env.staticS3ImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.webp"}
                />
            
        );
};

export default BlogPageComponent;