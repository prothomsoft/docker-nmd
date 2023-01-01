import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0003.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0004.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0007.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0008.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0011.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0012.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0010.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0017.webp", height: 383 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0019.webp", height: 383 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0027.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0026.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0028.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0029.webp", height: 382 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0031.webp", height: 382 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0032.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0033.webp", height: 382 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0035.webp", height: 382 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0036.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0039.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0041.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0042.webp", height: 383 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0044.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0045.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0046.webp", height: 527 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0050.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0047.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0049.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0051.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0052.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0054.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0056.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0055.webp", height: 526 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0057.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0058.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0059.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0169.webp", height: 526 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0067.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0070.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0071.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0073.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0077.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0078.webp", height: 527 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0079.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0080.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0083.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0087.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0089.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0091.webp", height: 382 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0093.webp", height: 761 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0094.webp", height: 383 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0095.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0096.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0097.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0099.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0100.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0101.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0102.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0103.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0104.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0105.webp", height: 383 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0127.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0108.webp", height: 851 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0111.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0112.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0113.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0114.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0115.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0116.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0117.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0119.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0120.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0121.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0123.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0125.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0126.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0128.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0129.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0130.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0131.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0132.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0133.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0134.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0135.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0136.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0137.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0138.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0139.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0140.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0141.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0142.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0143.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0144.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0145.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0146.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0147.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0149.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0148.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0150.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0151.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0152.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0154.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0153.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0155.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0156.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0157.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0158.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0159.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0160.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0161.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0162.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0163.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0164.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0165.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0166.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0167.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_slubny_krakow_0168.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "paulina_i_darek_reportaz_slubny_krakow_skansen_smakow_w_kryspinowie_start.webp"}
                    images={images}
                    headTitle={"Skansen Smaków Kryspinów - ślub nad zalewem"}
                    headDescription={"Pierwszym tańcem w chmurach Paulina i Darek otworzyli parkiet restauracji Skansen Smaków w Kryspinowie. Ogromna dawka emocji, uczuć i miłości."}
                    headKeywords={"skansen smaków Kryspinów, ślub nad zalewem, fotograf ślubny"}
                    headUrl={"https://99foto.pl/paulina-i-darek-reportaz-slubny-krakow-skansen-smakow-w-kryspinowie"}
                    entryContentP1={
                        "W historii facebookowych zdjęć można odnaleźć studniówkę, na której Paulina i Darek tańczą maturalnego poloneza w jednej parze. Poznali się jeszcze wcześniej, a ich miłość przetrwała czasy studenckie by w ubiegłą sobotę doprowadzić ich do ołtarza, gdzie powiedzieli sobie sakramentalne TAK. Przygotowania rozpoczęliśmy w salonie fryzjerskim w Liszkach o godzinie 9 rano. Następnie udaliśmy się do domu Pauliny w Czułowie, gdzie wizażystka wykonała bardzo profesjonalny makijaż. Ania towarzyszyła Paulinie podczas ubierania sukni ślubnej i wspierała ją pięknym uśmiechem w każdej sytuacji. Chwilę później byłem już w Minkowie w domu Darka. W drodze powrotnej na naszej drodze napotkaliśmy bramę. Panowie bramowicze tanio skóry nie sprzedali."
                    }
                    entryContentP2={
                        'Po błogosławieństwie udaliśmy się do <a href="https://parafialiszki.pl/" target="_blank" rel="nofollow">Kościoła p.w. św. Mikołaja w Liszkach</a>. Bardzo ładny, odnowiony kościół i piękna ceremonia. Po mszy świętej zrobiliśmy zdjęcie grupowe i Para Młoda zaprosiła gości do składania życzeń. Przy tej okacji sfotografowałem tony uśmiechów. Po życzeniach udaliśmy do Restauracji <a href="https://www.skansensmakow.pl/" target="_blank" rel="nofollow">Skansen Smaków w Kryspinowie</a>, gdzie odbyło się wesele. Państwo młodzi zatańczyli w chmurach i otworzyli parkiet pierwszym tańcem. Chmury na salę sprowadzili podobnie jak całą muzę tej imprezy Jola i Leszek z DJ Lecho &#8211; Dekoracja światłem, których serdecznie pozdrawiam. Szaleństwom na parkiecie nie było końca i zabawa trwała do białego rana. Paulino i Darku, dziękuję Wam, że mogłem być z Wami tego dnia i do zobaczenia na plenerze. Miłego oglądania, a po więcej zdjęć tradycyjnie już zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"paulina-i-darek-reportaz-slubny-krakow-skansen-smakow-w-kryspinowie"}
                    title={"SKANSEN SMAKÓW KRYSPINÓW, ŚLUB NAD ZALEWEM - PAULINA i DAREK"}
                    tags={"skansen smaków Kryspinów, ślub nad zalewem, fotograf ślubny"}
                    date={"28 lipca 2016"}
                    menuNames={"PAULINA i DAREK"}
                    menuTitle={"SKANSEN SMAKÓW KRYSPINÓW, ŚLUB NAD ZALEWEM"}
                    leadNames={"EWELINA i KAMIL"}
                    leadTitle={"HOTEL TADEUSZ USZEW i GÓRALSKA SALA WESELNA"}
                    leadUrl={"/hotel-tadeusz-uszew-i-goralska-sala-weselna"}
                    leadImage={process.env.staticImagesPath + "hotel_tadeusz_uszew_i_goralska_sala_weselna_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
