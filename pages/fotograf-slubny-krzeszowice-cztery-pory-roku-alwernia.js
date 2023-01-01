import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0001.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0004.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0007.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0009.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0011.webp", height: 402 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0013.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0015.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0014.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0017.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0137.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0018.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0021.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0022.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0025.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0026.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0028.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0030.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0035.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0037.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0043.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0049.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0054.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0050.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0058.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0060.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0065.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0067.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0069.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0071.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0073.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0075.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0077.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0079.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0080.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0082.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0084.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0088.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0090.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0092.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0096.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0099.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0102.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0106.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0107.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0114.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0120.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0121.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0129.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0131.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0133.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/fotograf_slubny_krzeszowice_0135.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "fotograf_slubny_krzeszowice_start.webp"}
                    images={images}
                    headTitle={"Fotograf ślubny Krzeszowice, Cztery Pory Roku Alwernia"}
                    headDescription={
                        "Reportaż ze ślubu Oli i Grzegorza w Restauracji Cztery Pory Roku w Alwerni. Uroczystość zaślubin w Kościele pw. św. Marcina z Tours w Krzeszowicach. Fotograf ślubny zaprasza do oglądania."
                    }
                    headKeywords={"fotograf ślubny Krzeszowice, cztery pory roku Alwernia"}
                    headUrl={"https://99foto.pl/fotograf-slubny-krzeszowice-cztery-pory-roku-alwernia"}
                    entryContentP1={
                        'Nasza znajomość z Olą i Grześkiem rozpoczęła się wspólną wyprawą do Ogrodu Pełnego Lawendy w Ostrowie na ich sesję narzeczeńską. Podczas sesji towarzyszył nam piesek Sako. Czas płynie szybko, więc ten ważny dzień, ślubna sobota nadeszła jeszcze szybciej. Makijaż Oli wykonała Kasia w swoim salonie makijażu <a href="https://www.facebook.com/Kasia-Kardas-Make-Up-155460148296115" target="_blank" rel="nofollow">Katarzyna Kardas Make-Up</a> w Nawojowej Górze. Było wesoło i mega profesjonalnie. Następnie już razem z Darkiem z <a href="https://dbfilm.pl/" target="_blank" rel="nofollow">Filmy i Teledyski Ślubne Kraków DBFILM</a>, który filmowo dokumentował przygotowania, ceremonie i zabawę weselną udaliśmy się do Grzegorza. Niecałe piętnaście minut wystarczyło nam na wpięcie spinek do mankietów, poprawienie muszki, założenie marynarki i zawiązanie butów. W przygotowaniach Oli pomagała jej mama, pięknie dobrane detale w moim ulubionym błękitnym kolorze wyglądały niesamowicie.  Pełne emocji błogosławieństwo rozpoczęło się krótko po przyjeździe Grzegorza, który następnie porwał Olę do <a href="https://marcinkrzeszowice.pl/" target="_blank" rel="nofollow">Kościóła pw. św. Marcina z Tours</a> w Krzeszowicach. Dodam jeszcze, że za każdym razem, gdy ktoś z gości próbował otworzyć parasol, deszcz przestawał padać, więc na zdjęciach nie ma go wcale.'
                    }
                    entryContentP2={
                        'Piękny, jasny kościół, wspaniała ceremonia ślubna i wypowiedziane pewnie z uśmiechem na ustach sakramentalne TAK. Po wyjściu z kościoła zrobiliśmy zdjęcie grupowe, a Para młoda przyjęła gorące życzenia od swoich gości. Dalsza część imprezy czyli szalona zabawa weselna odbyła się <a href="https://alwernia-4poryroku.pl/" target="_blank" rel="nofollow">Restauracji Cztery Pory Roku w Alwernii</a>. Wspaniała sala weselna i super ogród z łatwością pomieścił wszystkich gości. Muzycznie było ambitnie bo grał jeden z moich ulubionych zespółów - <a href="https://www.somgorsy.pl/" target="_blank" rel="nofollow">Zespół muzyczny Somgorsy</a>. Gabrysia jak zwykle nie tylko śpiewała świetnie, ale równie dobrze prowadziła zabawy weselne. Atrakcją była fotobudka, pociąg, tort weselny i wiadomo o północy oczepiny. Świetnie zorganizowana impreza, wspaniali otwarci ludzie, których fotografowanie było czystą przyjemnością. Olu i Grześku dziękuję za zaufanie i zapraszam na zdjęcia. Miłego oglądania.'
                    }
                    slug={"fotograf-slubny-krzeszowice-cztery-pory-roku-alwernia"}
                    title={"FOTOGRAF ŚLUBNY KRZESZOWICE, CZTERY PORY ROKU ALWERNIA - OLA i GRZEGORZ"}
                    tags={"fotograf ślubny Krzeszowice, cztery pory roku Alwernia"}
                    date={"14 lipca 2018"}
                    menuNames={"OLA i GRZEGORZ"}
                    menuTitle={"FOTOGRAF ŚLUBNY KRZESZOWICE, CZTERY PORY ROKU ALWERNIA"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ŚLUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={process.env.staticS3ImagesPath + "sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
