import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0001.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0002.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0003.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0005.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0008.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0010.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0007.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0012.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0014.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0016.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0020.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0022.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0021.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0025.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0027.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0029.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0030.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0032.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/99FOTOPL_SP_149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0037.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0041.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0044.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0046.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0048.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0051.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0054.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0058.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0065.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0062.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0070.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0073.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0074.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0076.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0079.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0081.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0084.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0086.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0089.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0091.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0093.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0087.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0096.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0098.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0097.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0101.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0103.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0104.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0105.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0106.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0109.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0112.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0115.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0117.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0118.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0119.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0121.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0123.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0125.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0126.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0130.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0131.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0132.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0145.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0135.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0136.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0137.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0138.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0139.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0140.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0142.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0143.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0147.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2023/08/oberwanka_lostowka_0144.webp", height: 763 }
            ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sala_weselna_oberwanka_start.webp"}
                    images={images}
                    headTitle={"Dom weselny Oberwanka Łostówka, ślub w Beskidach"}
                    headDescription={"Dom weselny Oberwanka Łostówka, ślub w Beskidach, wesele boho. Angelika i Mateusz. Serdecznie zapraszam."}
                    headKeywords={"Dom weselny Oberwanka Łostówka, ślub w beskidach, wesele boho"}
                    headUrl={"https://99foto.pl/dom-weselny-oberwanka-lostowka"}
                    entryContentP1={
                        'Beskid Wyspowy to malowniczy region w południowej Polsce, który idealnie nadaje się jako sceneria do romantycznego ślubu i wesela. Charakteryzuje się on pięknymi krajobrazami, malowniczymi wioskami oraz tradycyjną architekturą, co sprawia, że jest to wyjątkowe miejsce na organizację uroczystości ślubnych. Wesele w Beskidzie Wyspowym można zorganizować korzystając z gościnności góralskich domów weselnych, które są doskonale przystosowane do organizacji tego typu imprez. Jednym z takich popularnych miejsc jest <a href="https://oberwanka.pl/" target="_blank" rel="nofollow noopener noreferrer">Dom Weselny Oberwanka</a> w Łostówce, który słynie z gościnności, pysznej regionalnej kuchni i pięknych widoków na górskie pasma. Każdy ślub to oczywiście ceremonia ślubna. W Beskidzie Wyspowym można znaleźć urokliwe kościoły, kaplice lub świątynie drewniane, które tworzą niepowtarzalny klimat. Para młoda może zdecydować się na ślub wśród zapierających dech w piersiach górskich widokach lub w urokliwych kościółkach położonych w malowniczych wioskach. Drewniana architektura i tradycyjne elementy wystroju nadają tym miejscom niepowtarzalny urok.'
                    }
                    entryContentP2={
                        'Wesele Angeliki i Mateusza odbyło się w <a href="https://oberwanka.pl/" target="_blank" rel="nofollow noopener noreferrer">Domu Weselnymn Oberwanka</a> w Łostówce. To tradycyjny drewniany budynek z wyjątkowym charakterem, pełen góralskiego ducha i atmosfery. Wewnątrz można zazwyczaj znaleźć pięknie zdobioną salę bankietową, gdzie odbywają się przyjęcia weselne. Kulinarna oferta wesela w <a href="https://oberwanka.pl/" target="_blank" rel="nofollow noopener noreferrer">Domu Weselnym Oberwanka</a> w Łostówce to prawdziwa uczta dla podniebienia. Podawane są tradycyjne dania góralskie, takie jak oscypki, kwaśnica, pieczeń wieprzowa, pierogi oraz różnego rodzaju przysmaki regionalne. Każdy gość może spróbować potraw, które są przygotowane z pasją i starannością, czerpiąc z bogactwa smaków tego regionu. Czternaście rodzajów mięsnych smakołyków podawanych do obiadu to nie jest przypadek. Podczas wesela w okolicach Mszany Dolnej nie może zabraknąć także tradycyjnych góralskich zabaw i tańców. Regionalne zespoły folklorystyczne często biorą udział w takich uroczystościach, aby umilić czas gościom i wprowadzić ich w góralski klimat. Impreza trwa zazwyczaj do białego rana, a atmosfera jest niezapomniana. Na koniec dnia para młoda oraz goście mogą zazwyczaj przenocować w urokliwych góralskich pensjonatach, ośrodkach wypoczynkowych lub hotelach, które oferują komfortowe warunki i wspaniały widok na otaczające je pasma górskie. Podsumowując, ślub i wesele w Beskidzie Wyspowym to niezapomniane przeżycie. Połączenie pięknej natury, góralskiego folkloru, tradycyjnej kuchni i serdeczności gości sprawia, że taka uroczystość staje się wyjątkowym wydarzeniem dla Pary Młodej oraz wszystkich uczestników. Serdecznie zapraszam na zdjęcia i do strefy klienta po więcej. Nie zapomnijcie o pozostawieniu like na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> i <a href="https://www.instagram.com/99foto.pl" target="_blank" rel="nofollow noopener noreferrer">Instagram</a>. Dziękuję i pozdrawiam !!!'
                    }
                    slug={"dom-weselny-oberwanka-lostowka"}
                    title={"DOM WESELNY OBERWANKA ŁOSTÓWKA, ŚLUB W BESKIDACH - ANGELIKA i MATEUSZ"}
                    tags={"Dom weselny Oberwanka Łostówka, ślub w Beskidach"}
                    date={"1 sierpnia 2023"}
                    menuNames={"ANGELIKA i MATEUSZ"}
                    menuTitle={"DOM WESELNY OBERWANKA ŁOSTÓWKA, ŚLUB W BESKIDACH"}
                    leadNames={"MAGDALENA i WOJCIECH"}
                    leadTitle={"DOM WESELNY PANORAMA STARY WIŚNICZ, ŚLUB PRZY ZAMKU"}
                    leadUrl={"/dom-weselny-panorama-stary-wisnicz"}
                    leadImage={process.env.staticS3ImagesPath + "dom-weselny-panorama-stary-wisnicz.webp"}
                />
            
        );
};

export default BlogPageComponent;