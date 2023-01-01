import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0005.webp", height: 527 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0009.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0010.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0013.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0015.webp", height: 530 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0023.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0018.webp", height: 806 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0019.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0021.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0024.webp", height: 850 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0025.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0027.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0029.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0030.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0031.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0033.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0034.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0036.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0038.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0041.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0043.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0045.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0047.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0049.webp", height: 527 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0054.webp", height: 806 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0055.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0056.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0057.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0058.webp", height: 527 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0050.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0059.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0062.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0065.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0067.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0072.webp", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0073.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0074.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0076.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0077.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0078.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0079.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0080.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0083.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0085.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0087.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0089.webp", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0091.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0092.webp", height: 762 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0093.webp", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0120.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0119.webp", height: 762 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0096.webp", height: 806 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0097.webp", height: 762 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0098.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0117.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0099.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0123.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0100.webp", height: 762 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0101.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0102.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0103.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0104.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0105.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0106.webp", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0109.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0110.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0111.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0112.webp", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0113.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0114.webp", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0115.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0116.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0118.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0121.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0108.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0125.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "slub-w-lanckoronie-restauracja-old-joker-jaroszowice-start.webp"}
                    images={images}
                    headTitle={"Ślub w Lanckoronie, Restauracja Old Joker Jaroszowice"}
                    headDescription={
                        "Tonący w wielu odcieniach zieleni piękny ślub w Lanckoronie. Eleganckie wnętrza Restauracji Old Joker w Jaroszowicach. Serdecznie zapraszam na reportaż Alicji i Grzegorza. Miłego oglądania."
                    }
                    headKeywords={"Ślub w Lanckoronie, Restauracja Old Joker Jaroszowice"}
                    headUrl={"https://99foto.pl/slub-w-lanckoronie-restauracja-old-joker-jaroszowice"}
                    entryContentP1={
                        'Ten reportaż rozpoczynam od zdjęcia pełnego słońca i soczystej zieleni, którego celem jest wprowadzenie Was w typowy dla Lanckorony klimat, który towarzyszył nam przez cały ślubny dzień. Alicja i Grzesiek mieszkają teraz w Anglii, jednak nie wyobrażają sobie życia w miejscu innym niż ich ukochane rodzinne miasto. Obiecali, że na pewno kiedyś wrócą do Lanckorony na dłużej do Polski. Podczas pleneru, na który wybraliśmy się do <a href="https://www.wawel.krakow.pl/pl/" target="_blank" rel="nofollow">Zamku Królewskiego na Wawelu</a> i na podziwianie zachodu słońca z <a href="https://podgorze.pl/kopiec-krakusa/" target="_blank" rel="nofollow">Kopca Krakusa</a> dowiedziałem się, że ich wspólna historia pisze się już bardzo długo. W jednym z jej punktów pewnego pięknego dnia Grzegorz przygotował niespodziankę i oświadczył się Alicji w <a href="https://restauracja-padre.pl/padre-krakow/" target="_blank" rel="nofollow">Restauracji Padre</a> na Krakowskim Rynku. W ubiegłą sobotę dotarliśmy do kolejnego ważnego etapu, do dnia ślubu, który połączył Alicję i Grzegorza na zawsze. Dzień ten rozpoczął się w Salonie Kosmetycznym i Fryzjerskim w Sułkowicach. Makijaż wykonała bardzo miła Pani Ula. Chwilę później miejsce Alicji zajęła jej siostra Sabina i salon kosmetyczny zaczął żyć własnym życiem. Ubieranie sukni ślubnej, przygotowania u Grzegorza, pełne emocji błogosławieństwa i wspólne zdjęcia grupowe to preludium do najważniejszego momentu, sakramentalnego TAK, które Para Młoda wypowiedziała w <a href="https://www.parafia.lanckorona.pl/" target="_blank" rel="nofollow">Kościele narodzenia św. Jana Chrzciciela w Lanckoronie</a>.'
                    }
                    entryContentP2={
                        'Dodatkową atrakcją były utwory wykonywane przez Anię z <a href="https://www.facebook.com/aniaspiewaigra/" target="_blank" rel="nofollow">Oprawa Muzyczna Ślubów Kraków</a>, gitarka i śpiew brzmiały bosko. Lawina kwiatów przy wyjściu z kościoła i Alicja zaprosiła gości do <a href="https://www.oldjoker.pl/" target="_blank" rel="nofollow">Restauracji Old Joker</a> w Jaroszowicach pod Wadowicami. Zdjęcie grupowe, moc gorących życzeń i minutę po obiedzie Para Młoda otworzyła parkiet pierwszym tańcem. <a href="https://www.facebook.com/zespolmuzycznypokusa/" target="_blank" rel="nofollow">Zespół muzyczny Pokusa</a>, który pozdrawiam, stanął na wysokości zadania i dbał o dobry nastrój gości. Taniec stał się motywem przewodnim oczepin, a jak się pewnie domyślacie nie zabrakło pysznego torta i innych atrakcji, które z pewnością pozwoliły gościom weselnym zapamiętać ten ślub na długo. Alicjo i Grzegorzu, dzięki za zaufanie i umożliwienie mi fotografowania Waszego ślubu. Kilka zdjęć z tego dnia i kilka fotek ze wspomnianego już krakowskiego pleneru poniżej. Miłego oglądania. Więcej zdjęć jak zwykle w strefie klienta, do której hasło znajdziecie na mojej wizytówce.'
                    }
                    slug={"slub-w-lanckoronie-restauracja-old-joker-jaroszowice"}
                    title={"ŚLUB W LANCKORONIE, RESTAURACJA OLD JOKER JAROSZOWICE - ALICJA i GRZEGORZ"}
                    tags={"Ślub w Lanckoronie, Restauracja Old Joker Jaroszowice, fotograf na wesele Wadowice"}
                    date={"26 maja 2018"}
                    menuNames={"ALICJA i GRZEGORZ"}
                    menuTitle={"ŚLUB W LANCKORONIE, RESTAURACJA OLD JOKER JAROSZOWICE"}
                    leadNames={"MAŁGORZATA I RAFAŁ"}
                    leadTitle={"PLENER ŚLUBNY SŁOWACJA, ŁOMNICKI STAW"}
                    leadUrl={"/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    leadImage={process.env.staticImagesPath + "plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.webp"}
                />
            
        );
};

export default BlogPageComponent;
