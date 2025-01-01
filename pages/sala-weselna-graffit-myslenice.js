import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

    let images = [
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0001.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0002.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0003.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0008.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0005.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0006.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0007.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0004.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0009.jpg", height: 527},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0010.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0011.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0012.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0015.jpg", height: 527},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0014.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0013.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0016.jpg", height: 527},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0017.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0018.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0019.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0020.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0021.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0022.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0023.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0024.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0025.jpg", height: 850},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0026.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0027.jpg", height: 805},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0028.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0030.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0029.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0031.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0032.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0033.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0034.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0035.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0036.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0037.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0038.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0039.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0040.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0041.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0042.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0043.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0044.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0045.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0046.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0047.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0048.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0049.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0050.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0051.jpg", height: 380},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0052.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0053.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0054.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0055.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0056.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0057.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0059.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0060.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0061.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0058.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0062.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0063.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0064.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0065.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0066.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0067.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0068.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0069.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0070.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0071.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0072.jpg", height: 762},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0073.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0074.jpg", height: 527},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0075.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0076.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0077.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0078.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0079.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0080.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0081.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0082.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0083.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0084.jpg", height: 913},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0085.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0086.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0087.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0088.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0089.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0090.jpg", height: 805},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0091.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0092.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0093.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0095.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0094.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0096.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0097.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0098.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0099.jpg", height: 383},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0100.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0101.jpg", height: 850},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0102.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0103.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0105.jpg", height: 850},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0106.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0107.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0109.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0104.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0112.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0111.jpg", height: 805},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0110.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0108.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0113.jpg", height: 763},
        { imageSrc: process.env.staticS3ImagesPath + "blog/2024/05/sala_weselna_graffit_myslenice_0114.jpg", height: 763}
    ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sala_weselna_graffit_myslenice.webp"}
                    images={images}
                    headTitle={"Sala weselna Graffit Myślenice, magia ślubu w stylu Glamour"}
                    headDescription={"Sala weselna Graffit Myślenicach, magia ślubu w stylu Glamour, reportaż ślubny Kingi i Sebastiana. Serdecznie zapraszam."}
                    headKeywords={"sala weselna Graffit Myślenice, magia ślubu w stylu Glamour, zdjęcia ślubne Myślenice"}
                    headUrl={"https://99foto.pl/sala-weselna-graffit-myslenice"}
                    entryContentP1={
                        'Fotografowanie ślubu Kingi i Sebastiana pokazało mi po raz kolejny, że każdy ślub, każda para jest unikalna. Styl glamour, który wybrali, podkreślił ich elegancję i gust, ale to prawdziwe emocje – miłość, radość, wzruszenie – były najpiękniejszą ozdobą tego dnia. Właśnie te chwile, autentyczne uczucia, tworzą historię, którą mam przyjemność opowiadać za pomocą zdjęć. Dzień ślubu zaczęliśmy od przygotowań Panny młodej, wyczarowany makeup idealnie podkreślił wyjątkową urodę Panny Młodej. Kinga i Sebastian zadbali o każdy szczegół. Wygląd Panny Młodej był nie do opisania – elegancka suknia, delikatna biżuteria. Wszystko było dopięte na ostatni guzik, tworząc spójną całość, która zachwycała gości i sprawiała, że każdy detal mówił o miłości i elegancji.'
                    }
                    entryContentP2= {
                        'Ceremonia odbyła się w Kościele Przenajświętszej Trójcy w Jordanowie. Była to podróż przez emocje – radość, wzruszenie, miłość. Ksiądz, który udzielał ślubu, zrobił to z niesamowitą energią i zaangażowaniem, dodając humoru i przypominając najpiękniejsze chwile z życia Kingi i Sebastiana. Każde słowo wypowiedziane przez niego wywoływało uśmiech na twarzach zebranych i podkreślało autentyczność i piękno tego dnia. Wieczór spędziliśmy w eleganckiej <a href="https://salagraffit.pl/" target="_blank" rel="nofollow noopener noreferrer">sali weselnej Graffit w Myślenicach</a>. Jasne wnętrza, dominacja złota i bieli, zielone akcenty – miejsce idealnie odzwierciedlało ducha glamour. Zespół muzyczny zadbał o to, aby parkiet był pełen tańczących gości, grając z pasją i sercem. Kinga swoim wdziękiem i energią zaraziła wszystkich obecnych, a ja miałem przyjemność uwieczniać każdy jej taneczny krok i uśmiech. Fotografowanie ślubów to dla mnie nie tylko praca, ale przede wszystkim pasja oraz możliwość uchwycenia najpiękniejszych momentów w życiu zakochanych ludzi. Ślub Kingi i Sebastiana, który miałem zaszczyt uwiecznić, pozostanie w mojej pamięci na długo. Było to wyjątkowe wydarzenie, pełne blasku, elegancji i prawdziwych emocji – kwintesencja stylu glamour. Zapraszam Was do obejrzenia galerii z tego niezapomnianego dnia i do przeżycia wraz ze mną jeszcze raz tych magicznych chwil. Dla mnie to nie tylko reportaż, to opowieść o dwojgu ludzi, których miłość była fundamentem tak pięknego i wyjątkowego dnia. Nie zapomnijcie o pozostawieniu like na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> i <a href="https://www.instagram.com/99foto.pl" target="_blank" rel="nofollow noopener noreferrer">Instagram</a>. Dziękuję i pozdrawiam !!!'
                    }
                    slug={"sala-weselna-graffit-myslenice"}
                    title={"SALA WESELNA GRAFFIT MYŚLENICE, MAGIA ŚLUBU W STYLU GLAMOUR - KINGA i SEBASTIAN"}
                    tags={"sala weselna Graffit Myślenice, magia ślubu w stylu Glamour, zdjęcia ślubne Myślenice"}
                    date={"25 maja 2024"}
                    menuNames={"KINGA i SEBASTIAN"}
                    menuTitle={"MAGIA ŚLUBU W STYLU GLAMOUR"}
                    leadNames={"KAROLINA i RYAN"}
                    leadTitle={"PAŁAC GOETZ, ŚLUB HUMANISTYCZNY W OKOLICACH KRAKOWA"}
                    leadUrl={"/palac-goetz-slub-humanistyczny"}
                    leadImage={process.env.staticS3ImagesPath + "palac_goetz_slub_humanistyczny.webp"}
                />
            
        );
};

export default BlogPageComponent;