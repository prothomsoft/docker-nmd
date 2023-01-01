import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0002.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0003.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0005.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0007.webp", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0008.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0009.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0011.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0012.webp", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0014.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0017.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0018.webp", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0019.webp", height: 851 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0021.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0024.webp", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0029.webp", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0031.webp", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0032.webp", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0035.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0034.webp", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0037.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0036.webp", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0038.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0039.webp", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0042.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0046.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0048.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0050.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0051.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0054.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0057.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0059.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0060.webp", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0062.webp", height: 805 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0065.webp", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0067.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0068.webp", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0069.webp", height: 805 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0070.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0071.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0072.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0073.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0074.webp", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0077.webp", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0079.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0080.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0083.webp", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0085.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0086.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0087.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0089.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0090.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0091.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0093.webp", height: 805 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0094.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0095.webp", height: 805 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0096.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0102.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0097.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0098.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0099.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0100.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0101.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0131.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0103.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0105.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0106.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0107.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0108.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0109.webp", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0110.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0111.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0112.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0113.webp", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0114.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0115.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0116.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0117.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0119.webp", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0120.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0121.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0122.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0123.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0124.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0125.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0126.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0127.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0128.webp", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0129.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0130.webp", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0104.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sylwia_i_bartek_zdjecia_slubne_w_jordanowie_start.webp"}
                    images={images}
                    headTitle={"Fotograf ślubny Jordanów ✔️ Tomasz Prokop Fotograf Ślubny"}
                    headDescription={"Twarz Marilyn Monroe podpisaną Dziękuję, że jesteś w dalekim Trondheim wyklikał Bartek dla ukochanej Sylwii. Kilka łez poleciało... Zapraszam na reportaż."}
                    headKeywords={"fotograf na wesele kraków,reportaż ślubny kraków,zdjęcia ślubne dom weselny karolinka"}
                    headUrl={"https://99foto.pl/sylwia-i-bartek-zdjecia-slubne-w-jordanowie"}
                    entryContentP1={
                        "W Jordanowie fotografowałem już kilka razy. Zawsze spotykam się tam z niezwykłą otwartością ludzi i podziwiam ich umiejętność odstresowania i oddania się szalonej zabawie. Tym razem nie mogło być inaczej &#8211; udowodnili to Sylwia i Bartek. Przygotowania odbyły się w domu rodzinnym Sylwii. Panna młoda zastosowała jedno z moich ulubionych powiedzeń &#8211; jeśli chcesz coś mieć zrobione dobrze, zrób to sam &#8211; i jako znana już w okolicach Trondheim wizażystka makijaż wykonała samodzielnie. Mocno trzymaliśmy kciuki za pogodę, która pewnie dlatego wytrzymała do samego końca. Udało mi się też tym razem zrobić jedno z moich ulubionych zdjęć z przygotowań Pana Młodego. Ciekawe czy oglądając reportaż zgadniecie, które to zdjęcie."
                    }
                    entryContentP2={
                        "Po rodzinnym błogosławieństwie udaliśmy się do kościoła Świętej Siostry Faustyny Kowalskiej w Naprawie, gdzie wysłuchaliśmy pięknie przygotowanego kazania. W trakcie ceremonii zespół specjalny, na zamówienie też specjalne, zmontował zestaw nagłośnieniowy i usłyszeliśmy piosenkę Elvisa. Łapy młodych poszły w górę w geście YEAH !!! Następnie udaliśmy się do pięknej sali w Domu Weselnym Karolinka w Bystrej Podhalańskiej. Sylwia i Bartek otworzyli parkiet w pięknym stylu i towarzystwie najmłodszych gości, a po ich pierwszym tańcu zaczęły się taneczne szaleństwa.  Zabawa była przednia. Przed północą Bartek przygotował specjalną niespodziankę &#8211; obraz Marylin Monroe z napisem &#8222;Dziękuję, że jesteś&#8221;. Wręczenie tej pamiątki poprzedzone prezentacją filmową jak to arcydzieło powstawało wycisnęło kilka łez z oczu zebranych gości. Nie zabrakło też podziękowania dla rodziców. To był zdecydowanie piękny dzień! Zapraszam do obejrzenia historii Sylwii i Bartka, a po więcej zdjęć do strefy klienta z hasłem z mojej wizytówki."
                    }
                    slug={"sylwia-i-bartek-zdjecia-slubne-w-jordanowie"}
                    title={"ZDJĘCIA ŚLUBNE W JORDANOWIE - SYLWIA i BARTEK"}
                    tags={"fotograf na wesele kraków,reportaż ślubny kraków,zdjęcia ślubne dom weselny karolinka"}
                    date={"3 czerwca 2016"}
                    menuNames={"SYLWIA i BARTEK"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W JORDANOWIE"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
