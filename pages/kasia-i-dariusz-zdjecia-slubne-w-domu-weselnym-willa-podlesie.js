import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0066.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0004.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0010.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0014.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0016.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0020.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0023.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0025.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0026.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0028.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0035.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0036.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0037.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0039.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0042.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0043.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0044.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0048.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0047.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0049.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0050.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0051.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0055.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0058.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0060.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0061.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0062.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0065.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0070.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0075.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0076.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0078.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0082.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0084.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0086.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0088.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0090.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0091.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0093.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0096.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0098.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0099.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0102_1.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0105.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0103.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0104.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0109.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0110.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0112.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0114.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0117.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0119.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0113.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0111.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "kasia_i_dariusz_zdjecia_slubne_w_domu_weselnym_willa_podlesie_start.webp"}
                    images={images}
                    headTitle={"Fotograf na wesele Willa Podlesie Rzuchowa"}
                    headDescription={"Wielki dzie??, nie zabrak??o u??miech??w, wyj??tkowej magii i ??wietnej zabawy. Zobaczcie sami jak Kasia i Darek stali si?? najszcz????liwszymi lud??mi na ??wiecie..."}
                    headKeywords={"fotograf na wesele tarn??w, fotograf na wesele willa podlesie, reporta?? ??lubny krak??w"}
                    headUrl={"https://99foto.pl/kasia-i-dariusz-zdjecia-slubne-w-domu-weselnym-willa-podlesie"}
                    entryContentP1={
                        'Tym razem troch?? dalej bo nie Krak??w, a Tarn??w. W rolach g????wnych Kasia, Darek i ich ma??a c??reczka Lidia. Przygotowania zacz??li??my od makija??u w studiu tegorocznej mistrzyni ??wiata wiza??u <a href="https://www.facebook.com/klaudiaklosmakeupartist/" target="_blank" rel="nofollow">Klaudi K??os</a>. Nast??pnie, fryzura i kilka minut po godzinie dwunastej dotarli??my do domu rodzinnego Kasi. Atmosfera by??a wyj??tkowo weso??a, czyli pe??ny luz. Darek zaskoczy?? wszystkich, zjawiaj??c si?? troch?? wcze??niej. Chwil?? p????niej przybyli go??cie z Grecji, kt??rzy jak si?? okaza??o p????niej zaskoczyli wszystkich ??wietnie wykonanym greckim show. Z biegiem czasu go??ci przybywa??o.'
                    }
                    entryContentP2={
                        'Po rodzinnym b??ogos??awie??stwie udali??my si?? do <a href="https://www.tarnowiec.diecezja.tarnow.pl/index_a.html" target="_blank" rel="nofollow">Ko??cio??a pw. ??w. J??zefa Rzemie??lnika w Tarnowcu</a>, gdzie odby?? si?? ??lub. Wyj??tkowy klimat, pi??kna msza i co najwa??niejsze, u??miech na twarzach najwi??kszych szcz????ciarzy tego dnia.  Po ceremonii udali??my si?? na sal?? weseln??. Wesele odby??o si?? w Domu Weselnym <a href="https://www.facebook.com/WillaPodlesie/" target="_blank" rel="nofollow">Willa Podlesie</a> w Rzuchowej. Co tu du??o m??wi??&#8230; go??cie zdecydowanie dopisali, zabawa by??a wyj??tkowo udana. Innymi s??owy, dzia??o si??! Przy TAKIM zespole, z TAKIMI go????mi i TAKIMI M??odymi, wesele musia??o by?? GENIALNE. Dzia??o si?? naprawd?? wiele, a pakiet w przerwach parowa?? z gor??ca (no prawie). Fotografowi, a?? ??al by??o ko??czy?? prac??&#8230; Serdeczne pozdrowienia dla Waszej tr??jki, go??ci weselnych i zespo??u. Mi??ego ogl??dania.'
                    }
                    slug={"kasia-i-dariusz-zdjecia-slubne-w-domu-weselnym-willa-podlesie"}
                    title={"ZDJ??CIA ??LUBNE W DOMU WESELNYM WILLA PODLESIE - KASIA i DAREK"}
                    tags={"fotograf na wesele tarn??w, fotograf na wesele willa podlesie, reporta?? ??lubny krak??w"}
                    date={"27 kwietnia 2016"}
                    menuNames={"KASIA i DAREK"}
                    menuTitle={"ZDJ??CIA ??LUBNE W DOMU WESELNYM WILLA PODLESIE"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"SESJA ZDJ??CIOWA DW??R TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_zdjeciowa_dwor_tomaszowice_krakow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
