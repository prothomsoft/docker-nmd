import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0001.webp", height: 741 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0019.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0025.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0026.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0033.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0035.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0037.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0040.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0043.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0045.webp", height: 757 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0047.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0048.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0050.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0051.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0055.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0057.webp", height: 757 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0060.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0062.webp", height: 757 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0063.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0064.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0067.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0069.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0073.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0074.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0077.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0078.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0085.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0088.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0096.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0102.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0104.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0107.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0111.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0112.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0114.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0115.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0117.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0120.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0124.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0129.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0130.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0131.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0137.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0138.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0139.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0141.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/06/wioleta_marcin_blog_0142.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "wioleta_i_marcin_zdjecia_slubne_w_restauracji_victoria_rabka_zdroj_start.webp"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne w Restauracji Victoria - Rabka Zdr??j"}
                    headDescription={"Reporta?? ze ??lubu Wiolety i Marcina w Restauracji Victoria - Rabka Zdr??j. Uroczysto???? za??lubin w ko??ciele w ????towni. Zapraszam do ogl??dania."}
                    headKeywords={"fotograf na wesele krak??w,zdj??cia ??lubne w restauracji victoria - rabka zdr??j"}
                    headUrl={"https://99foto.pl/wioleta-i-marcin-zdjecia-slubne-w-restauracji-victoria-rabka-zdroj"}
                    entryContentP1={
                        "Tego dnia by??o wszystko, co by?? powinno ??? szczere u??miechy, wiele wzrusze?? i pe??no emocji! Przedstawiam zatem Wiolet?? i Marcina, kt??rym mia??em przyjemno???? towarzyszy?? zza aparatu podczas ich najwa??niejszego dnia w ??yciu. Przygotowania zacz??li??my popo??udniow?? por?? od makija??u. Pok??j Wiolety sta?? si?? centrum dowodzenia, a do makija??u ustawi??a si?? kolejka. Pomimo, ??e temat powa??ny to humor dopisywa??, a u??miechy trzyma??y si?? wszystkich. Chwil?? p????niej odwiedzi??em dom rodzinny Marcina, kt??ry wpasowa?? si?? w bardzo elegancki mundur stra??acki."
                    }
                    entryContentP2={
                        'Po b??ogos??awie??stwie udali??my si?? do pi??knie przystrojonego Ko??cio??a w ????towni. Msza by??a niezwykle wzruszaj??ca, ksi??dz prowadz??cy zadba?? aby ta chwila by??a naprawd?? wyj??tkowa. Nast??pnie udali??my si?? do <a href="https://www.victoria-rabka.pl/" target="_blank" rel="nofollow">Restauracji Wiktoria</a> w Rabce Zdr??j, gdzie odby??o si?? wesele. Po tylu wyczerpuj??cych emocjach, przyszed?? czas na zabaw??, i to jak??! Pe??ny pakiet, kolorowe ??wiat??a i niezwalniaj??cy tempa zesp????. To by?? pi??kny dzie??. Pozdrowienia dla Wszystkich go??ci i mi??ego ogl??dania. Pami??tajcie, ??e wi??cej zdj???? znajdziecie w strefie klienta &#8211; has??o z mojej wizyt??wki.'
                    }
                    slug={"wioleta-i-marcin-zdjecia-slubne-w-restauracji-victoria-rabka-zdroj"}
                    title={"ZDJ??CIA ??LUBNE W RESTAURACJI VICTORIA - RABKA ZDR??J - WIOLETA i MARCIN"}
                    tags={"fotograf na wesele krak??w,zdj??cia ??lubne w restauracji victoria - rabka zdr??j"}
                    date={"1 czerwca 2015"}
                    menuNames={"WIOLETA i MARCIN"}
                    menuTitle={"ZDJ??CIA ??LUBNE W RESTAURACJI VICTORIA - RABKA ZDR??J"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W G??RALSKIM KLIMACIE PRZYSTA?? KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticS3ImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
