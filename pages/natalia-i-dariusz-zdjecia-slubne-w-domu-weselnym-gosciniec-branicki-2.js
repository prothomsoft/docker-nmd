import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0008.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0017.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0019.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0022.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0025.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0027.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0035.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0036.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0039.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0040.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0042.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0046.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0051.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0054.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0055.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0056.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0058.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0059.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0061.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0064.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0066.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0069.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0070.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0072.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0074.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0076.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0078.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0080.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0081.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0085.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0086.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0088.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0090.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0093.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0094.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0095.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0097.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0098.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0102.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0105.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0106.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0107.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "natalia_i_dariusz_zdjecia_slubne_w_domu_weselnym_gosciniec_branicki_2_start.webp"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne w Domu weselnym Go??ciniec Branicki"}
                    headDescription={"Serdecznie zapraszam na otwarcie sezonu 2k16 do Domu weselnego Go??ciniec Branicki na wspania??y ??lub Natalii i Darka. Du??o fajnego dzia??o si?? tego dnia."}
                    headKeywords={"zdj??cia ??lubne go??ciniec branicki, fotograf na wesele krak??w, reporta?? ??lubny krak??w"}
                    headUrl={"https://99foto.pl/natalia-i-dariusz-zdjecia-slubne-w-domu-weselnym-gosciniec-branicki-2"}
                    entryContentP1={
                        'Po??owa kwietnia i niezwykle udany pocz??tek nowego sezonu ??lubnego. Wszystko to dzi??ki Natalii i Darkowi, kt??rzy w ubieg???? sobot?? powiedzieli sobie TAK. Tego dnia wsta??em i wiedzia??em, ??e b??dzie to wspania??y dzie??. Przygotowania zacz??li??my od zaledwie podkre??lenia urody Natalii w jej domu rodzinnym. ??adnych oznak stresu, ??wietny humor i u??miech na twarzy. Darek przyjecha?? planowo, a razem z nim przybyli jego rodzice. Ropocz????o si?? b??ogos??awie??stwo po kt??rym udali??my si?? do <a href="https://www.wzgorza.diecezja.krakow.pl" target="_blank" rel="nofollow">Ko??cio??a Mi??osierdzia Bo??ego na Wzg??rzach Krzes??awickich</a>, gdzie odby?? si?? ??lub.'
                    }
                    entryContentP2={
                        'Pomimo wynios??ej atmosfery i ca??ej powagi sytuacji, u??miech??w nie zabrak??o. Po ??yczeniach i zdj??ciu grupowym udali??my si?? na sal?? weseln?? w <a href="https://gosciniec-branicki.pl/" target="_blank" rel="nofollow">Domu weselnym &#8211; Go??cieniec Branicki</a>, gdzie na m??odych czekali ju?? rodzice, witaj??c ich chlebem i sol??. Wesele&#8230; istne szale??stwo, od pierwszych utwor??w. Doskona??a ekipa, wspaniali go??cie, naprawd?? rewelacyjny wiecz??r, kt??ry chyba nie tylko ja wspominam najlepiej. Bardzo dzi??kuj?? Natalii i Darkowi, za to, ??e mog??em towarzyszy?? im w tym szczeg??lnym dniu, naprawd?? by??a to dla mnie przyjemno????. Na szcz????cie to nie koniec przyg??d i czeka nas jeszcze sesja plenerowa&#8230; Tymczasem zapraszam na reporta?? i do strefy klienta po wi??cej zdj???? z tego dnia!'
                    }
                    slug={"natalia-i-dariusz-zdjecia-slubne-w-domu-weselnym-gosciniec-branicki-2"}
                    title={"ZDJ??CIA ??LUBNE W DOMU WESELNYM GO??CINIEC BRANICKI - NATALIA i DAREK"}
                    tags={"zdj??cia ??lubne go??ciniec branicki, fotograf na wesele krak??w, reporta?? ??lubny krak??w"}
                    date={"21 kwietnia 2016"}
                    menuNames={"NATALIA i DAREK"}
                    menuTitle={"ZDJ??CIA ??LUBNE W DOMU WESELNYM GO??CINIEC BRANICKI"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
