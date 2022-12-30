import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0003.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0002.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0008.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0012.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0020.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0021.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0023.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0024.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0025.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0028.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0032.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0035.jpg", height: 850 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0033.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0037.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0038.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0040.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0042.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0045.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0049.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0050.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0052.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0054.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0055.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0057.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0059.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0060.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0061.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0063.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0068.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0069.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0082.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0084.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0089.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0091.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0108.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0112.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0111.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0114.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0116.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0120.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0122.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0123.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0124.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0125.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0129.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0131.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0135.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0128.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0140.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0142.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0145.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0149.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0153.jpg", height: 566 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0151.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0152.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0154.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0155.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0156.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0157.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0158.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0159.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0160.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0161.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0162.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0163.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0164.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0165.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0166.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0167.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0168.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0169.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0170.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0171.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0172.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0173.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0174.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0175.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0176.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0177.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0178.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0182.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0181.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0179.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0183.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0184.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0185.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0186.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0187.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0180.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0188.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0189.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0190.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/01/fotograf_slubny_dobczyce_0191.jpg", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "fotograf_slubny_dobczyce.jpg"}
                    images={images}
                    headTitle={"Sala Wesela Alexia Ochojno, fotograf na wesele Dobczyce"}
                    headDescription={
                        "Zimowy ślub w nowoczesnej sali weselnej Alexia Ochojno. Autentyczne emocje, zdjęcia żywe, pełne ekspresji i miłości. Historia dnia ślubu Eweliny i Jakuba opowiedziana serią fotografii. Serdecznie zapraszam."
                    }
                    headKeywords={"alexia ochojno, nowoczesna sala weselna, ślub w mogilanach, fotograf na wesele dobczyce"}
                    headUrl={"https://99foto.pl/sala-weselna-alexia-ochojno-emocje-i-swietna-zabawa"}
                    entryContentP1={
                        "Pomyślcie czy w Waszych głowach słowo zima pasuje do słowa ślub. Budując nasze wyobrażenia, bazując na tym co znamy i doświadczyliśmy wielu z nas może dojść do wniosku, że te dwa słowa nie do końca idą ze sobą w parze. Podążając za trendami w branży ślubnej i fotografując śluby nie trudno jednak zauważyć, że coraz więcej par decyduje się na organizacje przyjęć weselnych właśnie zimą uważając, że zima to idealna pora roku na tego typu imprezę. Styczniowy ślub Eweliny i Jakuba to dla mnie świetne otwarcie nowego sezonu fotograficznego, a wpis na blogu to znakomita okazja na przypomnienie Wam o mnie i moich zdjęciach.                         Prawdę mówiąc im więcej fotografuję zimowych przyjęć weselnych tym więcej plusów związanych z ich organizacją zauważam. Kraków wiadomo, śniegu tu jak na lekarstwo, ale kilka kilometrów na północ, lekki mrozik i problem poszukiwaczy śniegu wydaje się być rozwiązanym. Recepta na udany ślub to trochę słońca, piękny Kościół przybrany setkami lampek choinkowych przypominających nam o minionych świętach, nowoczesna sala weselna i oczywiście goście weselni, dla których przyjęcie ślubne to najlepsza okazja by dobrze i aktywnie spędzić długi zimowy wieczór. Tego dnia zimowy nastrój subtelnie wpisał się w scenariusz dnia ślubu Eweliny i Jakuba."
                    }
                    entryContentP2={
                        'Przygotowania rozpoczeły się w Myślenicach w <a href="https://www.facebook.com/Akademia-Urody-916777441721706/" target="_blank" rel="nofollow">Akademii Urody Damiana Pulchnego</a>. Godzinka na makijaż w domu rodzinnym Eweliny w Dobczycach, krótkie przygotowania Pana Młodego w Wieliczce, pełne emocji błogosławieństwo i piękna ceremonia poprowadzona przez zaprzyjaźnionych księży w <a href="http://www.parafiadobczyce.pl/ target="_blank" rel="nofollow">Kościele p.w. Matki Bożej Wspomożenia Wiernych w Dobczycach</a>. Ten duży skrót sobotnich wydarzeń prowadzi nas do sali <a href="http://alexiaochojno.pl/" target="_blank" rel="nofollow">Alexia w Ochojnie</a>. Mega nowoczesna sala bankietowo-weselna usytułowana nieopodal Krakowa, wymarzone miejsce na przyjęcie ślubne. Rodzice przywitali Parę Młodą chlebem i solą, a goście gorącymi życzeniami. <a href="https://www.facebook.com/pg/zespolavantago" target="_blank" rel="nofollow">Zespół muzyczny Avantago</a> wrzucił kilka szlagierów i serwował repertuar w większości podyktowany niekończącymi się dedykacjami gości weselnych. Od czasu do czasu prawie tak niepostrzeżenie jak <a href="https://www.manolofilmy.pl/" target="_blank" rel="nofollow">Grzegorz z Manolo</a> przemykał <a href="https://www.facebook.com/malinowemedia" target="_blank" rel="nofollow">Łukasz z Malinowe Media</a>. Para Młoda zapewniła swoim gościom szampańską zabawę do białego rana i przygotowała istny festiwal atrakcji. Bardzo dziękuję za zaufanie i serdecznie zapraszam na kilka zdjęć z tego dnia. Życzę miłego oglądania.'
                    }
                    slug={"sala-weselna-alexia-ochojno-emocje-i-swietna-zabawa"}
                    title={"SALA WESELNA ALEXIA OCHOJNO, EMOCJE i ŚWIETNA ZABAWA - EWELINA i JAKUB"}
                    tags={"alexia ochojno, nowoczesna sala weselna, ślub w mogilanach, fotograf na wesele dobczyce"}
                    date={"26 stycznia 2020"}
                    menuNames={"EWELINA i JAKUB"}
                    menuTitle={"SALA WESELNA ALEXIA OCHOJNO, EMOCJE i ŚWIETNA ZABAWA"}
                    leadNames={"AMANDA i JACEK"}
                    leadTitle={"SALA WESELNA KABANOS SPYTKOWICE, AKORDEONOWE LOVE"}
                    leadUrl={"/sala-weselna-kabanos-spytkowice-akordeonowe-love"}
                    leadImage={process.env.staticImagesPath + "przystan_kabanos_spytkowice.jpg"}
                />
            
        );
};

export default BlogPageComponent;
