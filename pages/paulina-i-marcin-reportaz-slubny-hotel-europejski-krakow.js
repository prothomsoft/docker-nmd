import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_krakow_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_krakow_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_krakow_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_krakow_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_krakow_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_krakow_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_krakow_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_krakow_0010.webp", height: 383 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_krakow_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_krakow_0008.webp", height: 643 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_krakow_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_krakow_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_krakow_0004.webp", height: 762 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_krakow_0012.webp", height: 762 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_krakow_0013.webp", height: 762 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0016.webp", height: 383 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0018.webp", height: 762 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0019.webp", height: 762 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0028.webp", height: 382 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0030.webp", height: 762 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0031.webp", height: 382 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0033.webp", height: 383 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_krakow_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0001.webp", height: 383 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0003.webp", height: 383 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0005.webp", height: 383 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0008.webp", height: 762 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0015.webp", height: 762 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0018.webp", height: 382 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0022.webp", height: 527 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0024.webp", height: 762 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0029.webp", height: 762 },
            { imageSrc: "/static/blog/2016/12/fotograf_slubny_kosciol_swietej_anny_krakow_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0030.webp", height: 762 },
            { imageSrc: "/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0031.webp", height: 762 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0003.webp", height: 762 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0004.webp", height: 762 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0008.webp", height: 806 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0011.webp", height: 762 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0013.webp", height: 383 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0015.webp", height: 383 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0019.webp", height: 383 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0024.webp", height: 383 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0032.webp", height: 383 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0034.webp", height: 762 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0036.webp", height: 851 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0044.webp", height: 383 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0048.webp", height: 383 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0050.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0051.webp", height: 762 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0052.webp", height: 382 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0057.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0060.webp", height: 851 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0067.webp", height: 382 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0073.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0077.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0078.webp", height: 762 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0079.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0080.webp", height: 762 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0083.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0087.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0089.webp", height: 763 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0088.webp", height: 762 },
            { imageSrc: "/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0025.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "paulina_i_marcin_reportaz_slubny_hotel_europejski_krakow_start.webp"}
                    images={images}
                    headTitle={"Reportaż Ślubny Hotel Europejski Kraków"}
                    headDescription={"Kraków - sala balowa w Hotel Europejskim i przepiękny Kościół Świętej Anny. W imieniu Pauliny i Marcina zapraszam na reportaż z ich ślubu. Miłego oglądania."}
                    headKeywords={"reportaż ślubny kościół Świętej anny kraków,zdjęcia ślubne hotel europejski"}
                    headUrl={"https://99foto.pl/paulina-i-marcin-reportaz-slubny-hotel-europejski-krakow"}
                    entryContentP1={
                        'Wydawałoby się, że śluby odbywają się w miesiącach letnich, żeby nie powiedzieć wakacyjnych, gdy jednak przyjrzymy się tematowi nieco bliżej okazuje się, że fotograf ślubny może fotografować cały rok w szczególności w Krakowie. Koniec listopada, trochę wcześniej w czasie jesienne epizody nie tylko z deszczem, ale i śniegiem, na szczęście w dzień ślubu Pauliny i Marcina pogoda na zamówienie. Przygotowania zaczęliśmy na Osiedlu Oświecenia w mieszkaniu Pauliny gdzie świetny makijaż wykonała Ania z <a href="https://www.facebook.com/Wodzia-make-up-story-539847282771161/" target="_blank" rel="nofollow">Wodzia make-up story</a>. W międzyczasie sfotografowałem przepiękną suknię ślubną i obrączki. Czas oczekiwania na przybycie Marcina minął błyskawicznie i rozpoczęło się pełne wzruszeń błogosławieństwo.'
                    }
                    entryContentP2={
                        'Chwilę później byliśmy już w <a href="https://kolegiata-anna.pl/" target="_blank" rel="nofollow">Kościele Świętej Anny w Krakowie</a>, gdzie odbyła się ceremonia zaślubin. Jest to przepiękny kościół, w którym trudno odmówić sobie przyjemności tworzenia szerokich kadrów, pełnych historycznych detali. Ksiądz wygłosił piękne kazanie, młodzi odważnie bo z pamięci wypowiedzieli słowa przysięgi i dorożką przez Rynek w Krakowie udali się do sali balowej w <a href="https://he.pl" target="_blank" rel="nofollow">Hotelu Europejskim</a>. Dalej za sprawą DJ-ów parkiet zapełniał się bardzo szybko. Goście weselni tańczyli do białego rana. Młodzi przygotowali pociąg, tort, oczepiny i kilka zabaw towarzyszących. Serdecznie zapraszam do oglądania historii Pauliny i Marcina. Więcej zdjęć w strefie klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"paulina-i-marcin-reportaz-slubny-hotel-europejski-krakow"}
                    title={"REPORTAŻ ŚLUBNY HOTEL EUROPEJSKI KRAKÓW - PAULINA i MARCIN"}
                    tags={"reportaż ślubny kościół Świętej anny kraków,zdjęcia ślubne hotel europejski"}
                    date={"3 grudnia 2016"}
                    menuNames={"PAULINA i MARCIN"}
                    menuTitle={"REPORTAŻ ŚLUBNY HOTEL EUROPEJSKI KRAKÓW - PAULINA i MARCIN"}
                    leadNames={"ALINA i JANUSZ"}
                    leadTitle={"ZDJĘCIA ŚLUBNE JORDANÓW, DWOREK FANTAZJA"}
                    leadUrl={"/alina-i-janusz-zdjecia-slubne-jordanow-dworek-fantazja"}
                    leadImage={process.env.staticImagesPath + "alina_i_janusz_zdjecia_slubne_jordanow_dworek_fantazja_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
