import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0021.webp", height: 757 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0025.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0026.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0027.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0028.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0033.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0035.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0036.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0037.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0039.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0042.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0043.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0045.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0047.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0049.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0048.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0050.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0051.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0054.webp", height: 816 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0055.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0056.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0058.webp", height: 816 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0061.webp", height: 816 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0062.webp", height: 816 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0063.webp", height: 816 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0064.webp", height: 816 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0068.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0070.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0073.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0075.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0077.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0081.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0090.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0093.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0095.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0096.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0098.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0099.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0100.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0105.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0106.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0107.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0109.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0111.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0112.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0113.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0116.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0120.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0121.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0126.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0127.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0128.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0132.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0133.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0135.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0136.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0137.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0138.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_wieliczka_0140.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "pati_i_michal_zdjecia_slubne_w_hotelu_turowka_wieliczka_start.webp"}
                    images={images}
                    headTitle={"Fotograf na ??lub - Hotel Tur??wka - Wieliczka"}
                    headDescription={"Serdecznie zapraszam na przepi??kny ??lub Patrycji i Micha??a, kt??ry mia??em przyjemno???? fotografowa?? w super miejscu, Hotelu Tur??wka w Wieliczce."}
                    headKeywords={"fotograf na wesele krak??w,zdj??cia ??lubne w hotelu tur??wka wieliczka"}
                    headUrl={"https://99foto.pl/pati-i-michal-zdjecia-slubne-w-hotelu-turowka-wieliczka"}
                    entryContentP1={
                        'Wszystko zacz????o si?? w <a href="https://akademia-stylu.com.pl" target="_blank" rel="nofollow">Akademii Stylu</a> na naszym wsp??lnym osiedlu. Po kilku zdj??ciach z makija??u przysz??a pora na przygotowania Pana M??odego, wi??c razem z kamerzyst?? Krzy??kiem z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">Camdesign</a> odwiedzili??my mieszkanie Micha??a. Nast??pnie powr??t na Bociana i b??ogos??awie??stwo, po kt??rym udali??my si?? do <a href="https://kosciol-sebastian.pl" target="_blank" rel="nofollow">Ko??cio??a ??w. Sebastiana</a> w Wieliczce. Po ceremonii, w kt??rej aktywnie pomaga??y dzieci i spektakularnym wyj??ciu z ko??cio??a, zrobili??my wsp??lne zdj??cie grupowe. Wed??ug planu na ??yczenia go??cie musieli poczeka??, a?? dotr?? na sal?? weseln??.'
                    }
                    entryContentP2={
                        'Udali??my si?? wi??c do <a href="https://www.turowka.pl/" target="_blank" rel="nofollow">Hotelu Tur??wka</a> w Wieliczce, wyj??tkowego miejsca z klimatycznym wystrojem. Na sali czeka?? ju?? na nas zesp???? Tornado Band, kt??ry u??wietni?? zabaw?? tego wieczoru. Po setkach ??ycze?? przeplatanych kopertami, zabawa trwa??a do bia??ego rana. Pi??kny dzie??, pi??kne wspomnienia i mam nadziej?? obrazuj??ce to zdj??cia &#8211; zapraszam serdecznie na reporta?? Patrycji i Micha??a. Na koniec, pozdrowienia dla Pary M??odej, go??ci i ekipy weselnej. Blisko pi????set zdj???? z tego dnia znajdziecie w strefie klienta podaj??c has??o z mojej wizyt??wki.'
                    }
                    slug={"pati-i-michal-zdjecia-slubne-w-hotelu-turowka-wieliczka"}
                    title={"ZDJ??CIA ??LUBNE W HOTELU TUR??WKA - WIELICZKA - PATI i MICHA??"}
                    tags={"plener strbskie pleso, popradzki staw zdj??cia ??lubne, sesja ??lubna S??owacja"}
                    date={"23 sierpnia 2015"}
                    menuNames={"PATI i MICHA??"}
                    menuTitle={"ZDJ??CIA ??LUBNE W HOTELU TUR??WKA - WIELICZKA"}
                    leadNames={"OLA i PAWE??"}
                    leadTitle={"DW??R SZLACHECKI SIECIECHOWICE, REPORTA?? ??LUBNY MIECH??W"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={process.env.staticS3ImagesPath + "dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
