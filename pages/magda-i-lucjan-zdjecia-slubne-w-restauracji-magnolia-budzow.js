import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0004.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0005.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0007.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0010.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0011.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0014.webp", height: 757 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0016.webp", height: 757 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0020.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0022.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0023.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0024.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0027.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0028.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0029.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0030.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0031.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0032.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0034.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0035.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0037.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0038.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0039.webp", height: 851 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0040.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0041.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0042.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0043.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0044.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0045.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0047.webp", height: 757 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0049.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0050.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0051.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0053.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0056.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0057.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0060.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0061.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0062.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0064.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0066.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0067.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0068.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0069.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0071.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0073.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0074.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0075.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0077.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0078.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0079.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0080.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0081.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0082.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0083.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0084.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0085.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0086.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0087.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0088.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0089.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0090.webp", height: 851 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0091.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0093.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0094.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0096.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0097.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0098.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0099.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0100.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0101.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0102.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0103.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0104.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0105.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0108.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0109.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0110.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0111.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0112.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0113.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0114.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0115.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0116.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0117.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0119.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0120.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0121.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0122.webp", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0123.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0125.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "magda_i_lucjan_zdjecia_slubne_w_restauracji_magnolia_budzow_start.webp"}
                    images={images}
                    headTitle={"Zdjęcia ślubne Restauracja Magnolia Budzów"}
                    headDescription={"W niedzielne deszczowe popołudnie zapraszam na nowy wpis na moim blogu. Tym razem historia ślubna Magdy mamy Kacpra i Lucjana kibica Wisły Kraków."}
                    headKeywords={"zdjęcia ślubne restauracja magnolia budzów,fotograf na wesele stronie,fotograf na ślub zakrzów"}
                    headUrl={"https://99foto.pl/magda-i-lucjan-zdjecia-slubne-w-restauracji-magnolia-budzow"}
                    entryContentP1={
                        'Magdę, Kacpra i Lucjana mieliście okazję już poznać podczas sesji, którą wykonaliśmy w Ogrodzie Botanicznym w Krakowie. Dzisiaj część druga naszej wspólnej przygody, a niedługo będzie też i trzecia. Ten oto najważniejszy dzień rozpoczęliśmy w Wadowicach, gdzie <a href="https://www.facebook.com/pages/Lena-Czechowicz-Make-up-Fun/416942605060114" target="_blank" rel="nofollow">Lena Czechowicz</a> wykonała mistrzowski makijaż. Przygotowania do ślubu i błogosławieństwo miało miejsce w Stroniu, w domu rodzinnym Lucjana. Dalej pierwsza brama, na której Lucjana zaskoczyli klubowi koledzy. Były race, śpiewy oraz celny strzał do bramki.'
                    }
                    entryContentP2={
                        'Ksiądz z uśmiechem na ustach przeprowadził młodych przez ceremonię i wkrótce potem znaleźliśmy się w <a href="https://magnolia-restauracja.pl/" target="blank">Restauracji Magnolia</a> w miejscowości Budzów. Zespół muzyczny z Rzeszowa dawał radę i parkiet zapełniał się bardzo szybko. Humory dopisywały, co jak myślę udało się też uwiecznić na zdjęciach. Pozdrowienia dla Wszystkich gości i miłego oglądania. Pamiętajcie, że więcej zdjęć znajdziecie w strefie klienta – o hasło pytajcie Magdę lub Lucjana.'
                    }
                    slug={"magda-i-lucjan-zdjecia-slubne-w-restauracji-magnolia-budzow"}
                    title={"ZDJĘCIA ŚLUBNE W RESTAURACJI MAGNOLIA BUDZÓW - MAGDA i LUCJAN"}
                    tags={"zdjęcia ślubne restauracja magnolia budzów,fotograf na wesele stronie,fotograf na ślub zakrzów"}
                    date={"28 czerwca 2015"}
                    menuNames={"MAGDA i LUCJAN"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W RESTAURACJI MAGNOLIA BUDZÓW"}
                    leadNames={"MONIKA i RAFAŁ"}
                    leadTitle={"ZDJĘCIA ŚLUBNE KRAKÓW, RESTAURACJA CHOCHOŁOWY DWÓR"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={process.env.staticImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
