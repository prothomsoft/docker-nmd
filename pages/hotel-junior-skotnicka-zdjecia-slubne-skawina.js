import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0003.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0018.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0021.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0024.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0025.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0027.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0033.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0034.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0035.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0036.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0039.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0040.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0042.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0043.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0044.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0045.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0046.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0048.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0049.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0050.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0051.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0052.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0053.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0054.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0056_1.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0059.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0061.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0064.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0066.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0068.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0069.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0076.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0077.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0078.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0081.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0084.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0085.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0090.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0092.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0094.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0098.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0099.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0100.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0104.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0107.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0105.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0109.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0110.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0111.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0113.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0114.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0115.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0117.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0118.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0119.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0120.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0121.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0122.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0123.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0124.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0125.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0116.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0127.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/04/zdjecia_ze_slubu_w_skawinie_0128.webp", height: 762 }];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "hotel-junior-skotnicka.webp"}
                    images={images}
                    headTitle={"Hotel Junior Skotnicka, zdj??cia ??lubne Skawina"}
                    headDescription={"Pi??kni i m??odzi Kinga i Pawe??. Du??o s??o??ca, u??miech??w i pozytywnej energii. Hotelu Junior Skotnicka i impreza do bia??ego rana. Zapraszam."}
                    headKeywords={"Hotel Junior Skotnicka, dobry fotograf ??lubny Skawina, zdj??cia ??lubne w Skawinie"}
                    headUrl={"https://99foto.pl/hotel-junior-skotnicka-zdjecia-slubne-skawina"}
                    entryContentP1={
                        'Pi??tek, pi??teczek, pi??tunio to dla niekt??rych kolejny dzie?? sp??dzony w pracy i oczekiwanie na nadchodz??cy weekend, dla innych jeden z najwa??niejszych dni w ??yciu i okazja do ??wi??towania w gronie najbli??szych. Ten wiosenny dzie?? rozpocz??li??my od makija??u Kingi, kt??ry wykona??a Michalina Mikrut z <a href="https://www.facebook.com/allureofmakeup/" target="_blank" rel="nofollow">Allure of Makeup</a>. Mi??a atmosfera i blisko godzina rozm??w pozwoli??a mi pozna?? kilka zagadnie?? bran??y wiza??u. Pi??tna??cie minut p????niej byli??my ju?? w mieszkaniu rodzic??w Kingi, gdzie Mama w turkusowej sukience pomaga??a Kindze w ubieraniu suknii ??lubnej i wszystkich niezb??dnych dodatk??w. Dos??ownie tu?? za rogiem skawi??skiego osiedla czeka?? na mnie Pawe??, kt??ry od rana dzielnie jak na wzorowego tat?? przysta??o zajmowa?? si?? Maksem. Gdy mucha siad??a pod ko??nierzem bia??ej koszuli, razem z rodzicami Paw??a wyruszyli??my na spotkanie z King?? i wsp??lne b??ogos??awie??stwo. Nie brakowa??o wzrusze?? w momencie gdy rodzice sk??adali gor??ce ??yczenia swoim kochanym dzieciom.'
                    }
                    entryContentP2={
                        'Kilka minut sp??dzonych pod <a href="https://www.milosierdzieskawina.org/" target="_blank" rel="nofollow">Ko??ci????em pw. Mi??osierdzia Bo??ego w Skawinie</a> pozwoli??o przywita?? pozosta??ych go??ci weselnych. Ksi??dz wprowadzi?? Par?? M??od?? przed o??tarz i rozpocz????a si?? ceremonia za??lubin. Rado???? na twarzach Kingi i Paw??a by??a nie do opisania. Wida?? by??o, ??e na ten moment czekali d??ugo, jak m??wi?? Pawe?? blisko trzy lata. Po ceremoni korzystaj??c z pi??knej wiosennej pogody i s??onecznego dnia zrobili??my zdj??cie grupowe pod Ko??cio??em. Go??ci weselnych przywita?? <a href="https://www.junior.krakow.pl/" target="_blank" rel="nofollow">Hotel Junior Skotnicka</a>, po??o??ony w bliskiej odleg??o??ci od Skawiny. Kieliszki rozbi??y si?? o ziemi??, Para M??oda przyj????a moc gor??cych ??ycze??, a dzieciaki pe??ne gar??cie pysznych czekoladowych cuks??w. Po obiedzie i deserze parkiet otworzy?? pierwszy taniec. Zesp???? muzyczny, mocno rockowy z charyzmatycznym wokalist??, kt??ry na szcz????cie do domu samochodem wraca?? nie musia?? da?? czadu. Klimat by?? jak we Wroc??awiu pod Kredk?? i O????wkiem, za moich studenckich czas??w. Impreza kr??ci??a si?? do bia??ego rana. Kingo i Pawle, dzi??kuj?? za to, ??e mog??em by?? z Wami i fotografowa?? te niezwyk??e chwile. Zapraszam na kilka zdj???? z tego dnia i ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"hotel-junior-skotnicka-zdjecia-slubne-skawina"}
                    title={"HOTEL JUNIOR SKOTNICKA, ZDJ??CIA ??LUBNE SKAWINA - KINGA i PAWE??"}
                    tags={"Hotel Junior Skotnicka, dobry fotograf ??lubny Skawina, zdj??cia ??lubne w Skawinie"}
                    date={"29 kwietnia 2019"}
                    menuNames={"KINGA i PAWE??"}
                    menuTitle={"HOTEL JUNIOR SKOTNICKA, ZDJ??CIA ??LUBNE SKAWINA"}
                    leadNames={"KRISTINA i OLA"}
                    leadTitle={"WILLA DECJUSZA KRAK??W, ??LUB CYWILNY i SESJA ZDJ??CIOWA"}
                    leadUrl={"/willa-decjusza-krakow-slub-cywilny-sesja-zdjeciowa"}
                    leadImage={process.env.staticS3ImagesPath + "willa_decjusza_krakow_slub_cywilny_sesja_zdjeciowa_1.webp"}
                />
            
        );
};

export default BlogPageComponent;
