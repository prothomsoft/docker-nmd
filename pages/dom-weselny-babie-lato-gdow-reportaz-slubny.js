import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0156.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0002.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0009.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0020.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0022.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0025.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0030.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0031.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0032.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0159.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0039.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0040.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0046.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0048.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0051.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0052.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0071.webp", height: 757 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0056.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0061.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0064.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0076.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0079.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0080.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0084.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0088.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0094.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0099.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0104.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0105.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0108.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0110.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0150.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0151.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0152.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0153.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0154.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/dom_weselny_babie_lato_gdow_0155.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/05/babie_lato_gdow_0133.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "dom_weselny_babie_lato_gdow_reportaz_slubny_start.webp"}
                    images={images}
                    headTitle={"Dom Weselny Babie Lato Gd??w"}
                    headDescription={"Bryan Adams i All For Love, tak?? dedykacj?? na Facebook w pi??tkowy wiecz??r Tomasz zbudowa?? klimat sobotniego ??lubu. Co by??o dalej sprawd??cie na moim blogu."}
                    headKeywords={"babie lato gd??w,fotograf piaski nowe krak??w"}
                    headUrl={"https://99foto.pl/dom-weselny-babie-lato-gdow-reportaz-slubny"}
                    entryContentP1={
                        'Bryan Adams i All For Love, tak?? dedykacj?? na Facebook w pi??tkowy wiecz??r Tomasz zbudowa?? klimat sobotniego ??lubu.  Co by??o dalej? Wymarzona pogoda, troch?? s??o??ca i orze??wiaj??ce podmuchy majowego wiatru. Tym razem reporta?? ??lubny rozpocz??li??my w Krakowie, a dok??adniej na Woli Duchackiej w <a href="https://annaptak.com.pl" target="_blank" rel="nofollow">Salonie Fryzjerskim Anny Ptak</a>. Od godziny 10 rano trwa??y tam przygotowania, podczas kt??rych panie fryzjerka i wiza??ystka pracowa??y nad perfekcyjnym makija??em i pi??knym upi??ciem w??os??w Natalii. ??wietnie u??o??ony plan dnia, pozwoli?? mi pozna?? i d??u??sz?? chwil?? porozmawia?? z rodzicami Natalii, kt??rych serdecznie pozdrawiam. Kilka minut po dwunastej do????czy??a do nas druhna Ewa, kt??ra razem z mam?? Natalii pomog??a jej ubra?? sukni?? ??lubn??, buty, podwi??zk?? i bi??uteri??. Kilka zdj???? u Tomka, kt??ry mieszka?? tu?? za rogiem, a dalej ju?? tylko emocje i ??zy wzruszenia podczas wsp??lnego b??ogos??awie??stwa rodzic??w.'
                    }
                    entryContentP2={
                        'Po b??ogos??awie??stwie wolnym krokiem, wszyscy udali??my si?? do <a href="https://parafiapiaskinowe.pl" target="_blank" rel="nofollow">Ko??cio??a Matki Bo??ej R????a??cowej w Krakowie</a>. To ju?? drugi raz (pierwszy to <a href="https://99foto.pl/gosia-i-kuba-zdjecia-slubne-w-restauracji-savana-lezkowice/" target="_blank" rel="nofollow">??lub Gosi i Kuby</a>), kiedy m??odzi w zakrystii czuli si?? niemal??e tak swobodnie jak w domu. Ceremonia za??lubin by??a celebrowana przez kilku ksie??y. Nie zabrak??o pi??knego kazania, oprawy muzycznej w wykonaniu scholi z??o??onej ze znajomych z duszpasterstwa i najwa??niejszego momentu, sakramentalnego TAK, kt??re po????czy??o m??odych na zawsze. Podczas ??ycze?? da??o si?? s??ysze?? dowcipne przemowy, kt??rych nast??pstwem by??y salwy ??miechu. Natalia i Tomek zaprosili swoich go??ci do <a href="https://babielato-gdow.pl" target="_blank" rel="nofollow">Domu Weselnego Babie Lato w Gdowie</a>. Tradycyjnie rodzice przywitali m??odych chlebem i sol??, kieliszki rozbi??y si?? g??adko i po zdj??ciu grupowym rozpocz???? si?? uroczysty obiad. Na sali weselnej go??ci przywita?? <a href="https://www.vocal.com.pl" target="_blank" rel="nofollow">Zesp???? muzyczny VOCAL z ??ywca</a>. Pierwszy taniec i bardzo mi??a cz?????? wieczoru, niespodzianka skrywana przed m??odymi do ko??ca, pokaz multimedialny i wyst??p w dopieszczonej co do szczeg????u choreografii. Na parkiecie dzia??o si?? bardzo du??o i by??o wida??, ??e go??cie weselni bawili si?? doskonale. Na pewno te?? mo??na pozazdro??ci?? Natalii i Tomkowi wspania??ych rodzic??w i bardzo oddanej grupy najbli??szych przyjaci????. Bardzo dzi??kuj?? za ten wyj??tkowy dzie??, ciep??e przyj??cie i wspania???? atmosfer??. Mi??ego ogl??dania, a po wi??cej zdj???? zapraszam go??ci weselnych do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"dom-weselny-babie-lato-gdow-reportaz-slubny"}
                    title={"DOM WESELNY BABIE LATO GD??W - REPORTA?? ??LUBNY - NATALIA i TOMASZ"}
                    tags={"babie lato gd??w,fotograf piaski nowe krak??w"}
                    date={"1 czerwca 2017"}
                    menuNames={"NATALIA i TOMASZ"}
                    menuTitle={"DOM WESELNY BABIE LATO GD??W - REPORTA?? ??LUBNY"}
                    leadNames={"OLA i PRZEMEK"}
                    leadTitle={"WESELE TARN??W, DW??R BISTUSZOWA i STAROPOLSKI KLIMAT ??LUBNY"}
                    leadUrl={"/wesele-tarnow-dwor-bistuszowa-i-staropolski-klimat-slubny"}
                    leadImage={process.env.staticS3ImagesPath + "wesele-tarnow_dwor_bistuszowa_i_staropolski_klimat_slubny_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
