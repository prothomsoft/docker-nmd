import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2016/09/natalia.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0002.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0004.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0006.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0009.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0007.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0015.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0016.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0017.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0018.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0020.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0021.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0023.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0024.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0025.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0026.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0027.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0031.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0032.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0038.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0039.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0040.webp", height: 805 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0042.webp", height: 527 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0048.webp", height: 439 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0049.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0050.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0051.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0057.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0063.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0064.webp", height: 805 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0066.webp", height: 526 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0067.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0068.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0071.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0072.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0073.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0077.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0078.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0079.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0080.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0081.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0083.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0084.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0087.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0089.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0091.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0093.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0096.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0097.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0098.webp", height: 806 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0099.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0100.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0101.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0102.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0103.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0104.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0105.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0107.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0108.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0110.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0111.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0112.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0113.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0114.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0115.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0116.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0117.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0119.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0120.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0121.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0123.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0126.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0125.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0127.webp", height: 764 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0128.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0129.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0130.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0131.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0132.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0133.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0134.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0135.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0136.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0137.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0138.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0139.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0140.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0141.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0142.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0143.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0144.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0145.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0146.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0147.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0148.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0149.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0150.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0151.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0152.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0153.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0154.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0155.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0156.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0157.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0158.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0159.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0160.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "natalia_marcin_i_maja_reportaz_slubny_gosciniec_branicki_start.webp"}
                    images={images}
                    headTitle={"Reportaż ślubny Gościniec Branicki, Kraków"}
                    headDescription={"Kraków Nowa Huta, Wzgórza Krzesławickie i Branice, miejsca które odwiedziłem fotografując ślub Natalii i Marcina. Dużo, dużo fajnych kadrów."}
                    headKeywords={"reportaż ślubny kraków,zdjęcia ślubne gościniec branicki"}
                    headUrl={"https://99foto.pl/natalia-marcin-i-maja-reportaz-slubny-gosciniec-branicki"}
                    entryContentP1={
                        'Kraków Nowa Huta, Wzgórza Krzesławickie i Branice, miejsca te mogłem odwiedzić fotografując ważny dzień w życiu Natalii, Marcina i ich małej córeczki Mai. Przygotowania rozpoczęliśmy już przed południem. Wizażystka w pierwszej kolejności zajęła się fryzurami i makijażem druhen Karoliny i Moniki.  Kiedy dziewczyny potwierdziły, że wyglądają świetnie w fotelu usiadła Natalia. Maja, przychodząc co kilka minut, sprawdzała czy fryzura i makijaż mamy są już gotowe. Po godzinie układania i malowania nadszedł czas na ubieranie sukni ślubnej, a następnie na pełne wzruszeń błogosławieństwo. W świetnych humorach wyruszyliśmy do <a href="https://www.wzgorza.diecezja.krakow.pl/" target="_blank" rel="nofollow">Kościoła Miłosierdzia Bożego w Krakowie na Wzgórzach Krzesławickich</a>.'
                    }
                    entryContentP2={
                        'Ksiądz przywitał Natalię i Marcina w zachrystii, udzielił kilku rad i rozpoczęła się wzruszająca ceremonia, podczas której młodzi wypowiedzieli sakramentalne TAK. Przywitanie chlebem i solą oraz życzenia odbyły się w <a href="https://gosciniec-branicki.pl" target="_blank" rel="nofollow">Domu Weselnym Gościniec Branicki</a>. Kieliszki z szampanem uległy planowanemu zniszczeniu gwarantując dużo szczęścia w przyszłości. Po obiedzie młodzi zatańczyli pierwszy taniec i zaprosili gości do wspólnej zabawy. Świetny klimat, szalona zabawa i wesoła ekipa. <a href="https://www.planujemywesele.pl/35133-zespol-muzyczny-prospect" target="_blank" rel="nofollow">Zespół Muzyczny Prospect</a> dbał o frekwencję na parkiecie do białego rana. Wielkie, wielkie dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i genialną atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"natalia-marcin-i-maja-reportaz-slubny-gosciniec-branicki"}
                    title={"REPORTAŻ ŚLUBNY GOŚCINIEC BRANICKI - NATALIA, MARCIN i MAJA"}
                    tags={"reportaż ślubny kraków,zdjęcia ślubne gościniec branicki"}
                    date={"29 września 2016"}
                    menuNames={"NATALIA, MARCIN i MAJA"}
                    menuTitle={"REPORTAŻ ŚLUBNY GOŚCINIEC BRANICKI"}
                    leadNames={"JULITA i PAWEŁ"}
                    leadTitle={"REPORTAŻ ŚLUBNY KOŚCIÓŁ NA SKAŁCE KRAKÓW"}
                    leadUrl={"/julita-i-pawel-reportaz-slubny-kosciol-na-skalce-krakow"}
                    leadImage={process.env.staticImagesPath + "julita_i_pawel_reportaz_slubny_kosciol_na_skalce_krakow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
