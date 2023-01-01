import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0001.webp", height: 741 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0003.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0004.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0005.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0006.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0010.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0011.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0012.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0013.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0014.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0015.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0016.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0017.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0018.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0019.webp", height: 851 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0021.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0022.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0023.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0024.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0025.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0026.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0031.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0032.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0033.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0035.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0037.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0040.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0043.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0045.webp", height: 757 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0047.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0048.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0050.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0051.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0055.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0057.webp", height: 757 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0060.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0062.webp", height: 757 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0063.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0064.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0067.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0069.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0073.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0074.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0077.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0078.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0079.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0080.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0082.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0083.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0085.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0086.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0087.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0088.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0089.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0091.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0092.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0093.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0096.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0097.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0100.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0101.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0102.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0103.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0104.webp", height: 851 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0105.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0107.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0108.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0109.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0111.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0112.webp", height: 851 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0113.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0114.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0115.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0116.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0117.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0119.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0120.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0121.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0123.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0124.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0125.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0126.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0127.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0128.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0129.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0130.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0131.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0132.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0133.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0134.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0135.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0136.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0137.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0138.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0139.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0140.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0141.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0142.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "wioleta_i_marcin_zdjecia_slubne_w_restauracji_victoria_rabka_zdroj_start.webp"}
                    images={images}
                    headTitle={"Zdjęcia ślubne w Restauracji Victoria - Rabka Zdrój"}
                    headDescription={"Reportaż ze ślubu Wiolety i Marcina w Restauracji Victoria - Rabka Zdrój. Uroczystość zaślubin w kościele w Łętowni. Zapraszam do oglądania."}
                    headKeywords={"fotograf na wesele kraków,zdjęcia ślubne w restauracji victoria - rabka zdrój"}
                    headUrl={"https://99foto.pl/wioleta-i-marcin-zdjecia-slubne-w-restauracji-victoria-rabka-zdroj"}
                    entryContentP1={
                        "Tego dnia było wszystko, co być powinno – szczere uśmiechy, wiele wzruszeń i pełno emocji! Przedstawiam zatem Wioletę i Marcina, którym miałem przyjemność towarzyszyć zza aparatu podczas ich najważniejszego dnia w życiu. Przygotowania zaczęliśmy popołudniową porą od makijażu. Pokój Wiolety stał się centrum dowodzenia, a do makijażu ustawiła się kolejka. Pomimo, że temat poważny to humor dopisywał, a uśmiechy trzymały się wszystkich. Chwilę później odwiedziłem dom rodzinny Marcina, który wpasował się w bardzo elegancki mundur strażacki."
                    }
                    entryContentP2={
                        'Po błogosławieństwie udaliśmy się do pięknie przystrojonego Kościoła w Łętowni. Msza była niezwykle wzruszająca, ksiądz prowadzący zadbał aby ta chwila była naprawdę wyjątkowa. Następnie udaliśmy się do <a href="https://www.victoria-rabka.pl/" target="_blank" rel="nofollow">Restauracji Wiktoria</a> w Rabce Zdrój, gdzie odbyło się wesele. Po tylu wyczerpujących emocjach, przyszedł czas na zabawę, i to jaką! Pełny pakiet, kolorowe światła i niezwalniający tempa zespół. To był piękny dzień. Pozdrowienia dla Wszystkich gości i miłego oglądania. Pamiętajcie, że więcej zdjęć znajdziecie w strefie klienta &#8211; hasło z mojej wizytówki.'
                    }
                    slug={"wioleta-i-marcin-zdjecia-slubne-w-restauracji-victoria-rabka-zdroj"}
                    title={"ZDJĘCIA ŚLUBNE W RESTAURACJI VICTORIA - RABKA ZDRÓJ - WIOLETA i MARCIN"}
                    tags={"fotograf na wesele kraków,zdjęcia ślubne w restauracji victoria - rabka zdrój"}
                    date={"1 czerwca 2015"}
                    menuNames={"WIOLETA i MARCIN"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W RESTAURACJI VICTORIA - RABKA ZDRÓJ"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
