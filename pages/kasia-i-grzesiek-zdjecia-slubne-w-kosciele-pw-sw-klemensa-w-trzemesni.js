import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0004.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0009.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0013.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0017.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0019.webp", height: 1007 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0025.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0030.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0041.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0042.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0044.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0046.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0047.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0050.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0052.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0053.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0056.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0059.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0060.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0064.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0066.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0067.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0069.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0072.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0076.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0086.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0094.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0102.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0108.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0110.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0109.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0112.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0114.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0116.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0118.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0119.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0121.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0125.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0131.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0132.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0133.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0134.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0141.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0462.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0144.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0147.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0149.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0150.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0151.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "kasia_i_grzesiek_zdjecia_slubne_w_kosciele_pw_sw_klemensa_w_trzemesni_start.webp"}
                    images={images}
                    headTitle={"Zdjęcia ślubne Trzemeśnia, reportaż ślubny Myślenice"}
                    headDescription={"Bardzo serdecznie zapraszam do odwiedzenia mojego bloga i oglądnięcia relacji z pięknego ślubu Kasi i Grześka. Miłego ogądania."}
                    headKeywords={"reportaż ślubny kraków,zdjęcia ślubne osp trzemeśnia"}
                    headUrl={"https://99foto.pl/kasia-i-grzesiek-zdjecia-slubne-w-kosciele-pw-sw-klemensa-w-trzemesni"}
                    entryContentP1={
                        "Dzisiaj przenosimy się w okolice Krakowa, blisko Dobczyc do miejscowości Trzemeśnia. Bohaterami wpisu są tym razem Kasia i Grzegorz. Przygotowanie rozpoczęliśmy w domu rodzinny Kasi, gdzie zastałem wspaniałą rodzinną atmosferę. W rolę wizażystki wcieliła się siostra Kasi Emilia, wykonując profesjonalny makijaż z tysiącem pięknych uśmiechów w pakiecie. Fotograf miał jak to czasem mówię mocno z górki. Chwilę później, gdy makijaż był już gotowy Kasia ubrała suknie ślubną, biżuterię, buty, podwiązkę i oficjalnie zgłosiła swoją gotowość do nadchodzących w ten wyjątkowy dzień wydarzeń. Przyjechał Tomek i srebrną Laguną wskazał nam drogę do domu Grześka. Na miejscu miło było znaleźć wspólny temat w szczególności, że było to muzykowanie."
                    }
                    entryContentP2={
                        'Krótkie błogosławieństwo i nadszedł czas by odebrać Kasię i stawić się w Kościele o umówionej godzinie. Po drugim tego dnia wzruszającym błogosławieństwie w drodze do Kościoła <a href="https://parafia-trzemesnia.pl" target="_blank" rel="nofollow">pw. św. Klemensa w Trzemeśni</a> samochód młodych musiał zatrzymywać się aż dwa razy. Za każdym razem Kasia i Grzegorz spotykali się z ogromną serdecznością tworzących bramę sąsiadów. Pogoda tego dnia bardzo dopisała, a z racji tego, że w zasięgu wzroku znajdował się kościół i sala weselna, dało się odczuć pełną swobodę. Kościół zaskoczył mnie swoim pięknym wnętrzem, które dopełniło wzruszającą ceremonię ze wspaniałą oprawą muzyczną. Po zdjęciu grupowym i życzeniach udaliśmy się na salę, gdzie odbyło się wesele. Na miejscu czekał już zespół muzyczny, który zapewnił muzyczną oprawę tego dnia. Państwo Młodzi otworzyli parkiet swoim pierwszym tańcem. Świetny klimat, szalona zabawa i naprawdę przesympatyczna ekipa. Wielkie, wielkie dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i genialną atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"kasia-i-grzesiek-zdjecia-slubne-w-kosciele-pw-sw-klemensa-w-trzemesni"}
                    title={"ZDJĘCIA ŚLUBNE W KOŚCIELE PW. ŚW. KLEMENSA TRZEMEŚNIA - KASIA i GRZESIEK"}
                    tags={"reportaż ślubny kraków,zdjęcia ślubne osp trzemeśnia"}
                    date={"24 sierpnia 2016"}
                    menuNames={"KASIA i GRZESIEK"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W KOŚCIELE PW. ŚW. KLEMENSA TRZEMEŚNIA"}
                    leadNames={"MONIKA i RAFAŁ"}
                    leadTitle={"ZDJĘCIA ŚLUBNE KRAKÓW, RESTAURACJA CHOCHOŁOWY DWÓR"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={process.env.staticS3ImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
