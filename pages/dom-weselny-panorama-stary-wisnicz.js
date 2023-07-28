import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0151.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0004.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0006.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0008.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0010.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0014.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0149.webp", height: 429 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0020.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0022.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0023.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0024.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0025.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0028.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0030.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0033.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0035.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0037.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0042.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0045.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0048.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0047.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0051.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0053.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0058.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0056.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0059.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0061.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0062.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0064.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0065.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0071.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0068.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0069.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0066.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0073.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0076.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0078.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0080.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0081.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0089.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0086.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0088.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0092.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0093.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0094.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0096.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0099.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0100.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0102.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0104.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0105.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0107.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0108.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0110.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0111.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0113.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0114.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0116.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0118.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0120.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0121.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0123.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0124.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0127.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0128.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0130.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0132.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0138.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0139.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0141.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0136.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0145.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0146.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0147.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0142.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0143.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/07/panorama_nowy_wisnicz_0148.webp", height: 763 }
            ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "dom-weselny-panorama-stary-wisnicz.webp"}
                    images={images}
                    headTitle={"Dom weselny Panorama Stary Wiśnicz, ślub przy Zamku"}
                    headDescription={"Dom weselny Panorama Stary Wiśnicz, ślub przy Zamku, wesele w modnej sali. Magdalena i Wojciech. Serdecznie zapraszam."}
                    headKeywords={"Dom weselny Panorama Stary Wiśnicz, ślub przy zamku, wesele w modnej sali"}
                    headUrl={"https://99foto.pl/dom-weselny-panorama-stary-wisnicz"}
                    entryContentP1={
                        'Wymarzony dzień ślubu Magdaleny i Wojciecha zaczyna się pewnie od śniadania, ale tak naprawdę od przygotowań ślubnych w studio makijażu <a href="https://www.facebook.com/WiolettaWlodarczykMiniMakeupArt" target="_blank" rel="nofollow noopener noreferrer">Mini Make-up Art</a>, w którym doświadczona wizażystka Wioletta tworzy piękny makijaż. Siedząc przed lustrem, Magdalena cieszy się chwilą relaksu i podziwia efekt końcowy - delikatny, ale podkreślający jej naturalną urodę. Kiedy nadchodzi moment, aby przejść do ceremonii, Magdalena czuje, że serce bije mocniej ze wzruszenia i podekscytowania. W kościele <a href="https://www.parafialeszczyna.pl/" target="_blank" rel="nofollow noopener noreferrer">Parafia NMP Częstochowskiej w Leszczynie</a> panuje atmosfera pełna emocji, a gdy razem z Wojciechem wędrują do ołtarza, nie mogą powstrzymać łez wzruszenia. Błogosławieństwo i wymienianie przysiąg są najważniejszym momentem tego dnia. Podczas ich składania w powietrzu da się wyczuć ogromną miłość i zaufanie. Te wzruszające chwile na zawsze pozostaną w pamięci.'
                    }
                    entryContentP2={
                        'Po ceremonii kościelnej czas na przyjęcie weselne, pełne radości i zabawy. Magdalena i Wojciech wybrali cudowne miejsce, które idealnie pasuje do atmosfery, którą chcieli stworzyć - elegancka sala bankietowa <a href="https://panorama-wisnicz.pl/" target="_blank" rel="nofollow noopener noreferrer">Panorama Stary Wiśnicz</a> z pięknym ogrodem i widokiem na urokliwy <a href="http://zamekwisnicz.pl/" target="_blank" rel="nofollow noopener noreferrer">Zamek Wiśnicz</a>. Dekoracje na sali weselnej zostały starannie zaprojektowane, aby podkreślić romantyczny nastrój i tworzyć przytulne miejsce dla Pary Młodej i gości weselnych. Podczas przyjęcia weselnego wszyscy bawią się do białego rana. Parkiet jest pełen energii, a dobra muzyka, którą zapewnia <a href="https://zespolmila.pl/" target="_blank" rel="nofollow noopener noreferrer">Zespół muzyczny Mila</a> wciąga wszystkich na parkiet. Wszyscy goście wspaniale się bawią, tańczą i śmieją się, tworząc niezapomnianą atmosferę radości i miłości. Nie brakuje również atracji, takich jak iskierki do nieba, wymarzony tort weselny, który jest prawdziwym dziełem sztuki i doskonale smakuje oraz fotobudki trzy de. Nie zabrakło również szczerych podziękowań dla rodziców za ich wsparcie i miłość. Zabawy oczepinowe, doprowadzają gości do łez, a krzesła odmawiają posłuszeństwa. Nic dodać nic ująć, był to dzień ślubu pełen wzruszeń, piękna, radości i szalonej zabawy. Dzień ślubu to niezapomniane przeżycie, które zostanie na zawsze w sercach Pary młodej, w ich wspomnieniach i w albumie na zdjęciach ślubnych. Serdecznie zapraszam na zdjęcia i do strefy klienta po więcej. Nie zapomnijcie o pozostawieniu like na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> i <a href="https://www.instagram.com/99foto.pl" target="_blank" rel="nofollow noopener noreferrer">Instagram</a>. Za wszystkie lajki bardzo dziękuję.'
                    }
                    slug={"dom-weselny-panorama-stary-wisnicz"}
                    title={"DOM WESELNY PANORAMA STARY WIŚNICZ, ŚLUB PRZY ZAMKU - MAGDALENA i WOJCIECH"}
                    tags={"Dom weselny Panorama Stary Wiśnicz, ślub przy Zamku"}
                    date={"09 lipca 2023"}
                    menuNames={"MAGDALENA i WOJCIECH"}
                    menuTitle={"DOM WESELNY PANORAMA STARY WIŚNICZ, ŚLUB PRZY ZAMKU"}
                    leadNames={"NATALIA i KRZYSZTOF"}
                    leadTitle={"DOM WESELNY MOGIELICA JURKÓW, RUSTYKALNE WESELE"}
                    leadUrl={"/dom-weselny-mogielica-jurkow-rustykalne-wesele"}
                    leadImage={process.env.staticS3ImagesPath + "dom_weselny_mogielica_fotograf_slubny_mszana.webp"}
                />
            
        );
};

export default BlogPageComponent;