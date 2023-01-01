import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0046.webp", height: 778 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0002.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0005.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0008.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0010.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0011.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0013.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0015.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0016.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0017.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0019.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0021.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0022.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0023.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0024.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0026.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0028.webp", height: 805 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0029.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0030.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0031.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0033.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0035.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0037.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0039.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0041.webp", height: 805 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0044.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0049.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0050.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0053.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0056.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0057.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0058.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0059.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0060.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0061.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0066.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0067.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0072.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0073.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0074.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0075.webp", height: 806 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0077.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0079.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0080.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0082.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0083.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0087.webp", height: 383 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0089.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0090.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0091.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0093.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0096.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0097.webp", height: 851 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0099.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0100.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0101.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0102.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0103.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0105.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0104.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0106.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0108.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0109.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0110.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0111.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0112.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0113.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0114.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0115.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0116.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0117.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0118.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0119.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0120.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0121.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0123.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0122.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0126.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0125.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0127.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0128.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0129.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0130.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0131.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0132.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0133.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0134.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0135.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0136.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0137.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0138.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0140.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0139.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0141.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0142.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0143.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0144.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0145.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0146.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0147.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0149.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0148.webp", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0150.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0151.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0152.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0153.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0154.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0155.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0156.webp", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0157.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0159.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0158.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0160.webp", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0107.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "julita_i_pawel_reportaz_slubny_kosciol_na_skalce_krakow_start.webp"}
                    images={images}
                    headTitle={"Reportaż ślubny Kościół na Skałce Kraków"}
                    headDescription={"W imieniu Julity i Pawła serdecznie zapraszam na reportaż ślubny do pięknej Bazyliki Św. Michała Archanioła na Skałce. Ogrom emocji, radości, łzy wzruszenia."}
                    headKeywords={"reportaż ślubny kraków,zdjęcia ślubne szafran zagacie"}
                    headUrl={"https://99foto.pl/julita-i-pawel-reportaz-slubny-kosciol-na-skalce-krakow"}
                    entryContentP1={
                        'Każdy fotograf lubi kolekcjonować za pomocą swoich zdjeć miejsca niezwykłe. Myślę też, że kazdy się zgodzi z tym, że marzeniem każdego fotografa ślubnego są śluby, które odbywają się w najpiękniejszych polskich kościołach. Lista tych kościołów nie jest bardzo długa. Na pewno pierwsze trzy miejsca w Krakowie zajmują <a href="https://www.mariacki.com/index.php/pl/" target="_blank" rel="nofollow">Bazylika Mariacka</a>, <a href="https://kolegiata-anna.pl/" target="_blank" rel="nofollow">Uniwersytecka Kolegiata św. Anny</a> i <a href="https://www.skalka.paulini.pl/" target="_blank" rel="nofollow">Bazylika Św. Michała Archanioła na Skałce</a>. Julita i Paweł wybrali świetne i wybór ten pozwolił mi zrobić fajne zdjęcia w pięknym kościele, za co bardzo im dziękuję. Sobotni dzień rozpoczęliśmy od przygotowań w domu Julity w Głogoczowie. Wizażystka wykonała perfekcyjny makijaż, a chwilę później odbyło się błogosławieństwo.'
                    }
                    entryContentP2={
                        'Następnie sprintem, to dobre słowo, udaliśmy się do Krakowa i wspomnianej już <a href="https://www.skalka.paulini.pl/" target="_blank" rel="nofollow">Bazyliki Św. Michała Archanioła na Skałce</a>. Po pięknym kazaniu Julita i Paweł powiedzieli sobie tak. Pierwszy raz ksiądz zachęcał mnie do wejścia na prezbiterium podczas przysięgi małżeńskiej, świetna sprawa. Zdjęcie grupowe, życzenia i chwilę później przenieśliśmy się do <a href="https://www.szafran.com.pl" target="_blank" rel="nofollow">Sali Bankietowej Szafran w Zagaciu</a>. Młodych chlebem i solą przywitali rodzice i klasycznie już poleciały kieliszki z szampana. Dalej za sprawą DJ-ów parkiet zapełniał się bardzo szybko. Goście weselni tańczyli do białego rana. Młodzi przygotowali pociąg, tort, oczepiny i kilka zabaw towarzyszących. Zapraszam do oglądania historii Julity i Pawła. Więcej zdjęć w strefie klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"julita-i-pawel-reportaz-slubny-kosciol-na-skalce-krakow"}
                    title={"REPORTAŻ ŚLUBNY KOŚCIÓŁ NA SKAŁCE KRAKÓW - JULITA i PAWEŁ"}
                    tags={"reportaż ślubny kraków,zdjęcia ślubne szafran zagacie"}
                    date={"14 września 2016"}
                    menuNames={"JULITA i PAWEŁ"}
                    menuTitle={"REPORTAŻ ŚLUBNY KOŚCIÓŁ NA SKAŁCE KRAKÓW"}
                    leadNames={"MARLENA i DAWID"}
                    leadTitle={"ZDJĘCIA ŚLUBNE Z GÓRALSKIEGO ŚLUBU W OSADZIE KAMIENICA"}
                    leadUrl={"/marlena-i-dawid-zdjecia-slubne-z-goralskiego-slubu-w-osadzie-kamienica"}
                    leadImage={process.env.staticImagesPath + "marlena_i_dawid_zdjecia_slubne_z_goralskiego_slubu_w_osadzie_kamienica_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
