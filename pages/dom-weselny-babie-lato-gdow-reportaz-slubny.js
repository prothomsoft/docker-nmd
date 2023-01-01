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
                    headTitle={"Dom Weselny Babie Lato Gdów"}
                    headDescription={"Bryan Adams i All For Love, taką dedykacją na Facebook w piątkowy wieczór Tomasz zbudował klimat sobotniego ślubu. Co było dalej sprawdźcie na moim blogu."}
                    headKeywords={"babie lato gdów,fotograf piaski nowe kraków"}
                    headUrl={"https://99foto.pl/dom-weselny-babie-lato-gdow-reportaz-slubny"}
                    entryContentP1={
                        'Bryan Adams i All For Love, taką dedykacją na Facebook w piątkowy wieczór Tomasz zbudował klimat sobotniego ślubu.  Co było dalej? Wymarzona pogoda, trochę słońca i orzeźwiające podmuchy majowego wiatru. Tym razem reportaż ślubny rozpoczęliśmy w Krakowie, a dokładniej na Woli Duchackiej w <a href="https://annaptak.com.pl" target="_blank" rel="nofollow">Salonie Fryzjerskim Anny Ptak</a>. Od godziny 10 rano trwały tam przygotowania, podczas których panie fryzjerka i wizażystka pracowały nad perfekcyjnym makijażem i pięknym upięciem włosów Natalii. Świetnie ułożony plan dnia, pozwolił mi poznać i dłuższą chwilę porozmawiać z rodzicami Natalii, których serdecznie pozdrawiam. Kilka minut po dwunastej dołączyła do nas druhna Ewa, która razem z mamą Natalii pomogła jej ubrać suknię ślubną, buty, podwiązkę i biżuterię. Kilka zdjęć u Tomka, który mieszkał tuż za rogiem, a dalej już tylko emocje i łzy wzruszenia podczas wspólnego błogosławieństwa rodziców.'
                    }
                    entryContentP2={
                        'Po błogosławieństwie wolnym krokiem, wszyscy udaliśmy się do <a href="https://parafiapiaskinowe.pl" target="_blank" rel="nofollow">Kościoła Matki Bożej Różańcowej w Krakowie</a>. To już drugi raz (pierwszy to <a href="https://99foto.pl/gosia-i-kuba-zdjecia-slubne-w-restauracji-savana-lezkowice/" target="_blank" rel="nofollow">ślub Gosi i Kuby</a>), kiedy młodzi w zakrystii czuli się niemalże tak swobodnie jak w domu. Ceremonia zaślubin była celebrowana przez kilku ksieży. Nie zabrakło pięknego kazania, oprawy muzycznej w wykonaniu scholi złożonej ze znajomych z duszpasterstwa i najważniejszego momentu, sakramentalnego TAK, które połączyło młodych na zawsze. Podczas życzeń dało się słyszeć dowcipne przemowy, których następstwem były salwy śmiechu. Natalia i Tomek zaprosili swoich gości do <a href="https://babielato-gdow.pl" target="_blank" rel="nofollow">Domu Weselnego Babie Lato w Gdowie</a>. Tradycyjnie rodzice przywitali młodych chlebem i solą, kieliszki rozbiły się gładko i po zdjęciu grupowym rozpoczął się uroczysty obiad. Na sali weselnej gości przywitał <a href="https://www.vocal.com.pl" target="_blank" rel="nofollow">Zespół muzyczny VOCAL z Żywca</a>. Pierwszy taniec i bardzo miła część wieczoru, niespodzianka skrywana przed młodymi do końca, pokaz multimedialny i występ w dopieszczonej co do szczegółu choreografii. Na parkiecie działo się bardzo dużo i było widać, że goście weselni bawili się doskonale. Na pewno też można pozazdrościć Natalii i Tomkowi wspaniałych rodziców i bardzo oddanej grupy najbliższych przyjaciół. Bardzo dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i wspaniałą atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"dom-weselny-babie-lato-gdow-reportaz-slubny"}
                    title={"DOM WESELNY BABIE LATO GDÓW - REPORTAŻ ŚLUBNY - NATALIA i TOMASZ"}
                    tags={"babie lato gdów,fotograf piaski nowe kraków"}
                    date={"1 czerwca 2017"}
                    menuNames={"NATALIA i TOMASZ"}
                    menuTitle={"DOM WESELNY BABIE LATO GDÓW - REPORTAŻ ŚLUBNY"}
                    leadNames={"OLA i PRZEMEK"}
                    leadTitle={"WESELE TARNÓW, DWÓR BISTUSZOWA i STAROPOLSKI KLIMAT ŚLUBNY"}
                    leadUrl={"/wesele-tarnow-dwor-bistuszowa-i-staropolski-klimat-slubny"}
                    leadImage={process.env.staticS3ImagesPath + "wesele-tarnow_dwor_bistuszowa_i_staropolski_klimat_slubny_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
