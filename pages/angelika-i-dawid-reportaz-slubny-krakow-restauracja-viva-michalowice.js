import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0006.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0016.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0021.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0023.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0025.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0028.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0030.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0031.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0150.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0034.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0038.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0043.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0050.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0051.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0054.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0052.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0055.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0062.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0063.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0151.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0067.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0070.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0072.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0078.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0086.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0085.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0104.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0094.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0096.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0098.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0100.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0101.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0105.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0106.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0107.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0109.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0115.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0112.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0113.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0114.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0117.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0123.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0124.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0126.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0128.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0134.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0136.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0139.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0142.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0144.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0145.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0146.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0147.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_slubny_krakow_0149.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "angelika_i_dawid_reportaz_slubny_krakow_restauracja_viva_michalowice_start.webp"}
                    images={images}
                    headTitle={"Reporta?? ??lubny Restauracja Viva Micha??owice"}
                    headDescription={"Du??o rado??ci i szcz????cia, pi??kny dzie?? i pi??kne wspomnienia. Angelika i Dawid. Najszcz????liwszy dzie?? w ??yciu tej wielce zakochanej pary."}
                    headKeywords={"fotograf na wesele krak??w, reporta?? ??lubny krak??w"}
                    headUrl={"https://99foto.pl/angelika-i-dawid-reportaz-slubny-krakow-restauracja-viva-michalowice"}
                    entryContentP1={
                        "Tym razem zapraszam na reporta?? ??lubny Angeliki i Dawida, kt??ry mia??em przyjemno???? fotografowa?? w ubieg???? sobot?? w Micha??owicach. Zdj??cia z przygotowa?? Angeliki rozpocz??li??my w Zielonkach na &#8222;Krakowskich Przedmie??ciach&#8221; w Salonie Fryzjerskim u Paw??a. Angelika okaza??a si?? by?? nie tylko zawodow?? fryzjerk??, ale i ??wietn?? wiza??ystk??. W kilka minut wykona??a sw??j makija?? i czasu wystarczy??o jeszcze na delikatne poprawki w makija??u siostry i mamy, kt??re towarzyszy??y jej podczas przygotowa?? w salonie. Uwaga, szef salonu Pawe?? i Klaudia tego samego dnia okazali si?? kr??lami parkietu, i jestem przekonany, ??e fotograf na ich ??lubie b??dzie mia?? mocno z g??rki. Prosto z salonu pojechali??my do domu rodzinnego Angeliki, by sfotografowa?? dalszy ci??g przygotowa??, a nast??pnie do Dawida, kt??ry na pi??trze wrzuci?? na siebie wszystkie elementy ??lubnej garderoby. Kr??tkie b??ogos??awie??stwo i wsp??lnie pojechali??my odebra?? Pann?? M??od??."
                    }
                    entryContentP2={
                        '??lub odby?? si?? w USC w Iwanowicach, gdzie m??odzi za??o??yli obr??czki, powiedzieli sobie TAK i do??wiadczyli pierwszego ma????e??skiego poca??unku. Impreza odby??a si?? w <a href="https://vivasportklub.pl/restauracja">Restauracji Viva</a> w Micha??owicach. Klasycznie polecia??y kieliszki z szampana, Dawid przeni??s?? Angelik?? przez pr??g i po pe??nych emocji ??yczeniach, go??cie weselni zostali zaproszeni na obiad. Dalej za spraw?? DJ Jacka &#8211; mistrza w dekoracji dymem i muzyce, kt??r?? proponowa?? go??ciom weselnym dobra zabawa trwa??a do bia??ego rana. M??odzi przygotowali szereg atrakcji, by?? poci??g, tort, pieczony ??winiak, podzi??kowania dla rodzic??w, oczepiny i kilka zabaw towarzysz??cych. Serdecznie zapraszam do ogl??dania historii Angeliki i Dawida. Wi??cej zdj???? w strefie klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"angelika-i-dawid-reportaz-slubny-krakow-restauracja-viva-michalowice"}
                    title={"REPORTA?? ??LUBNY KRAK??W, RESTAURACJA VIVA MICHA??OWICE - ANGELIKA i DAWID"}
                    tags={"fotograf na wesele krak??w, reporta?? ??lubny krak??w"}
                    date={"12 sierpnia 2016"}
                    menuNames={"ANGELIKA i DAWID"}
                    menuTitle={"REPORTA?? ??LUBNY KRAK??W, RESTAURACJA VIVA MICHA??OWICE"}
                    leadNames={"KINGA i MACIEK"}
                    leadTitle={"DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA"}
                    leadUrl={"/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada"}
                    leadImage={process.env.staticS3ImagesPath + "dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
