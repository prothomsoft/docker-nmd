import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0001.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0002.jpg", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0003.jpg", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0004.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0005.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0006.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0007.jpg", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0008.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0009.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0010.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0011.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0012.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0013.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0014.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0015.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0016.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0017.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0018.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0019.jpg", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0020.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0021.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0022.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0023.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0024.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0025.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0026.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0027.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0029.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0030.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0031.jpg", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0032.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0033.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0034.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0035.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0036.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0037.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0038.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0039.jpg", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0040.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0041.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0042.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0043.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0044.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0045.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0046.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0047.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0048.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0049.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0050.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0051.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0052.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0053.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0054.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0055.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0058.jpg", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0057.jpg", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0059.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0060.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0061.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0062.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0063.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0064.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0065.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0066.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0067.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0068.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0069.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0070.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0071.jpg", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0072.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0073.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0074.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0075.jpg", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0076.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0056.jpg", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0077.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0078.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0079.jpg", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0080.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0081.jpg", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0082.jpg", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0083.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0084.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0085.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0086.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0087.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0088.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0091.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0089.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0092.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0090.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0093.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0094.jpg", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0095.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0108.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0096.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0097.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0106.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0098.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0099.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0100.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0101.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0102.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0103.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0104.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0105.jpg", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0107.jpg", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2024/08/sala_weselna_willa_orchidea_waksmund_0109.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sala_weselna_willa_orchidea_waksmund.webp"}
                    images={images}
                    headTitle={"Sala weselna Willa Orchidea Waksmund, Ślub na Podhalu"}
                    headDescription={"Reportaż ze ślubu Weroniki i Marcina w Sali Weselnej Willa Orchidea Waksmund. Ślub na Podhalu i góralskie klimaty. Zapraszam do oglądania."}
                    headKeywords={"Sala weselna Willa Orchidea, ślub na Podhalu, fotografia ślubna Waksmund"}
                    headUrl={"https://99foto.pl/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    entryContentP1={
                        'Kilkukrotnie już pisałem, że wesela w górach mają swój niepowtarzalny klimat. Było tak i tym razem na ślubie Weroniki i Marcina w Waksmundzie. Ósma rano, flat white na Orlenie, przejazd przez świetnie mi znane pienińskie zakątki, czyli Sromowce Wyżne brzegiem Jeziora Czorsztyńskiego i pierwszy przystanek Dom Panny Młodej. W tym miejscu rozpoczęliśmy przygotowania. Makijażystki przyjechały do Waksmundu z Krakowa, makijaż musiał być perfekcyjny, a dzień zaplanowany co do najdrobniejszego szczegółu. Podczas przygotowań Weronice towarzyszyły druhny. Wszystkie dziewczyny wyglądały rewelacyjnie i błyskawicznie pomogły zapanować nad detalami, założyć suknie, biżuterię, podwiązkę i buty. W oczekiwaniu na Marcina, który podróżował białym Porsche ze Szlembarku w dobrych humorach popijaliśmy szampana. Dalej już błogosławieństwo, wzruszenia i przejazd do Kościoła pw. Świętej Trójcy w Łopusznej.'
                    }
                    entryContentP2={
                        'Po drodze krótki plener, w <a hred="https://muzeumtatrzanskie.pl/filie/dwor-w-lopusznej/" target="_blank" rel="nofollow">Dworze Tetmajerów</a>, gdzie trochę się powygłupialiśmy. Ksiądz prowadzący ceremonię z pewnością dawno nie widział tylu uśmiechów w trakcie Mszy Świętej. Zdjęcie grupowe i udaliśmy się do położonej w pobliżu <a href="https://www.willa-orchidea.pl/" target="_blank" rel="nofollow">Sali weselnej Willa Orchidea</a>. Sala ta fioletami elewacji zaprasza gości z daleka i trudno ją przeoczyć podróżując w tamtych stronach. Rodzice przywitali młodych chlebem i solą, następnie goście zjedli obiad i ustawili się w długiej kolejce do życzeń. Weronika czarowała uśmiechem, Marcin nie oszczędzał gorących uścisków, prezentów na stoliku w mgnieniu oka przybywało. Nadszedł czas na pierwszy taniec, tort weselny i cały zestaw zabaw. Animatorki zabawiały dzieciaki, a rodzice korzystali z zasłużonej chwili wolności. Gościom weselnym na parkiecie towarzyszyły dzwięki z konsolety <a href="https://www.gmusic.pl/" target="_blank" rel="nofollow">DJ GMusic Grzegorza Molendysa</a>, z którym to bawiliśmy się już na niejednym szalonym weselu. Jestem pewny, że po oczepinach zabawa trwała do samego rana, albo nawet do poniedziałku, bo jak to w górach w planie były przecież oczepiny. Weroniko i Marcinie, świetna impreza, oby takich więcej. Dzięki, że mogłem Wam towarzyszyć i do zobaczenia po sąsiedzku w Slow City. Koniec pisania i początek oglądania. Nie zapomnijcie o pozostawieniu like na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> i <a href="https://www.instagram.com/99foto.pl" target="_blank" rel="nofollow noopener noreferrer">Instagram</a>. Serdecznie zapraszam.'
                    }
                    slug={"sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    title={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ŚLUB NA PODHALU - WERONIKA i MARCIN"}
                    tags={"Sala weselna Willa Orchidea, ślub na Podhalu, fotografia ślubna Waksmund"}
                    date={"24 sierpnia 2024"}
                    menuNames={"WERONIKA i MARCIN"}
                    menuTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ŚLUB NA PODHALU"}
                    leadNames={"KINGA i SEBASTIAN"}
                    leadTitle={"MAGIA ŚLUBU W STYLU GLAMOUR"}
                    leadUrl={"/sala-weselna-graffit-myslenice"}
                    leadImage={process.env.staticS3ImagesPath + "sala_weselna_graffit_myslenice.webp"}
                />
            
        );
};

export default BlogPageComponent;
