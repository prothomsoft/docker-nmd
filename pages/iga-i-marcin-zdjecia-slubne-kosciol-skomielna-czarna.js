import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0002.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0020.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0025.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0028.webp", height: 743 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0036.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0042.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0044.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0046.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0049.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0053.webp", height: 757 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0054.webp", height: 757 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0055.webp", height: 757 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0056.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0064.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0065.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0068.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0073.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0074.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0075.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0076.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0084.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0088.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0090.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0093.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0094.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0096.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0098.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0100.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0102.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0105.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0107.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0109.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0111.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0113.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0114.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0116.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0117.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0118.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0122.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0123.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0124.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0127.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0128.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0129.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0130.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/iga_marcin_blog_0131.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "iga_i_marcin_zdjecia_slubne_kosciol_skomielna_czarna_start.webp"}
                    images={images}
                    headTitle={"Fotograf ??lubny Skomielna Czarna"}
                    headDescription={"Serdecznie zapraszam na mojego bloga i reporta?? ??lubny Igi i Marcina. P??dz?? DU??YM FIATEM rocznik 74 do Ko??cio??a w Skomielnej Czarnej. Zapraszam !!!"}
                    headKeywords={"fotograf na wesele krak??w,zdj??cia ??lubne w restauracji victoria - rabka zdr??j"}
                    headUrl={"https://99foto.pl/iga-i-marcin-zdjecia-slubne-kosciol-skomielna-czarna"}
                    entryContentP1={
                        'Iga i Marcin to dzisiejsi bohaterowie kolejnego ??lubnego wpisu. Z t?? sympatyczn?? par?? mieli??my ju?? okazj?? spotka?? si?? na <a href="https://99foto.pl/wioleta-i-marcin-zdjecia-slubne-w-restauracji-victoria-rabka-zdroj" target="_blank" rel="nofollow">weselu Wiolety i Marcina</a>, dlatego wiedzia??em, ??e o u??miechy tego dnia martwi?? si?? nie musz??. Przygotowania do tego dnia zacz??li??my od Marcina w jego malowniczo po??o??onym domu. Po??udniowe bia??e chmurki na niebieskim niebie wygl??da??y bajecznie. Nast??pnie DU??YM Fiatem rocznik siedem cztery udali??my si?? do domu rodzinnego Igi. Celowo pomin??li??my przygotowania Panny M??odej, podsumowuj??c je tylko kilkoma zdj??ciami ju?? po b??ogos??awie??stwie.'
                    }
                    entryContentP2={
                        'Co dalej? W dobrych humorach udali??my si?? do Ko??cio??a p.w. Nawiedzenia NMP w Skomielnej Czarnej. Iga i Marcin w oczekiwaniu na dzwi??k organ??w z u??miechem witali nadchodz??cych go??ci. Widok m??odej pary wchodz??cej do ko??cio??a, spowodowa??, ??e niekt??rym ??ezka zakr??ci??a si?? w oku. Po pi??knej mszy udali??my na wesele do <a href="https://www.victoria-rabka.pl/" target="_blank" rel="nofollow">Restauracji Viktoria</a> w Rabce Zdr??j. Wesele zaliczam do zdecydowanie top najhuczniejszych wesel w tym roku. Doskona??a ekipa i dos??ownie pe??ny parkiet od pocz??tku do ko??ca mojego pobytu. Zabawa by??a ??wietna. Pozdrowienia dla Wszystkich go??ci i mi??ego ogl??dania. Pami??tajcie, ??e wi??cej zdj???? znajdziecie w strefie klienta ??? has??o z mojej wizyt??wki.'
                    }
                    slug={"iga-i-marcin-zdjecia-slubne-kosciol-skomielna-czarna"}
                    title={"ZDJ??CIA ??LUBNE SKOMIELNA CZARNA - IGA i MARCIN"}
                    tags={"fotograf na wesele krak??w,zdj??cia ??lubne w restauracji victoria - rabka zdr??j"}
                    date={"8 czerwca 2015"}
                    menuNames={"IGA i MARCIN"}
                    menuTitle={"ZDJ??CIA ??LUBNE SKOMIELNA CZARNA"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"SESJA ZDJ??CIOWA DW??R TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_zdjeciowa_dwor_tomaszowice_krakow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
