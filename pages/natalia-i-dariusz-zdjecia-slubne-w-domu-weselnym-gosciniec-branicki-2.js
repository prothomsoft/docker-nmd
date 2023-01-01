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
                    headTitle={"Zdjęcia Ślubne w Domu weselnym Gościniec Branicki"}
                    headDescription={"Serdecznie zapraszam na otwarcie sezonu 2k16 do Domu weselnego Gościniec Branicki na wspaniały ślub Natalii i Darka. Dużo fajnego działo się tego dnia."}
                    headKeywords={"zdjęcia ślubne gościniec branicki, fotograf na wesele kraków, reportaż ślubny kraków"}
                    headUrl={"https://99foto.pl/natalia-i-dariusz-zdjecia-slubne-w-domu-weselnym-gosciniec-branicki-2"}
                    entryContentP1={
                        'Połowa kwietnia i niezwykle udany początek nowego sezonu ślubnego. Wszystko to dzięki Natalii i Darkowi, którzy w ubiegłą sobotę powiedzieli sobie TAK. Tego dnia wstałem i wiedziałem, że będzie to wspaniały dzień. Przygotowania zaczęliśmy od zaledwie podkreślenia urody Natalii w jej domu rodzinnym. Żadnych oznak stresu, świetny humor i uśmiech na twarzy. Darek przyjechał planowo, a razem z nim przybyli jego rodzice. Ropoczęło się błogosławieństwo po którym udaliśmy się do <a href="https://www.wzgorza.diecezja.krakow.pl" target="_blank" rel="nofollow">Kościoła Miłosierdzia Bożego na Wzgórzach Krzesławickich</a>, gdzie odbył się ślub.'
                    }
                    entryContentP2={
                        'Pomimo wyniosłej atmosfery i całej powagi sytuacji, uśmiechów nie zabrakło. Po życzeniach i zdjęciu grupowym udaliśmy się na salę weselną w <a href="https://gosciniec-branicki.pl/" target="_blank" rel="nofollow">Domu weselnym &#8211; Gościeniec Branicki</a>, gdzie na młodych czekali już rodzice, witając ich chlebem i solą. Wesele&#8230; istne szaleństwo, od pierwszych utworów. Doskonała ekipa, wspaniali goście, naprawdę rewelacyjny wieczór, który chyba nie tylko ja wspominam najlepiej. Bardzo dziękuję Natalii i Darkowi, za to, że mogłem towarzyszyć im w tym szczególnym dniu, naprawdę była to dla mnie przyjemność. Na szczęście to nie koniec przygód i czeka nas jeszcze sesja plenerowa&#8230; Tymczasem zapraszam na reportaż i do strefy klienta po więcej zdjęć z tego dnia!'
                    }
                    slug={"natalia-i-dariusz-zdjecia-slubne-w-domu-weselnym-gosciniec-branicki-2"}
                    title={"ZDJĘCIA ŚLUBNE W DOMU WESELNYM GOŚCINIEC BRANICKI - NATALIA i DAREK"}
                    tags={"zdjęcia ślubne gościniec branicki, fotograf na wesele kraków, reportaż ślubny kraków"}
                    date={"21 kwietnia 2016"}
                    menuNames={"NATALIA i DAREK"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W DOMU WESELNYM GOŚCINIEC BRANICKI"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
