import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0003.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0022.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0027.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0035.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0039.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0042.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0046.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0047.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0052.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0055.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0056.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0058.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0059.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0062.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0063.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0064.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0065.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0066.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0068.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0069.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0072.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0074.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0075.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0077.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0078.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0081.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0084.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0085.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0090.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0093.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0094.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0095.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0096.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0098.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0099.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0100.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0102.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0105.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0106.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0109.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0110.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0113.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0114.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0116.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0117.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0119.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0123.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0126.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0128.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0129.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0131.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/09/fotograf_na_wesele_zakliczyn_0132.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "zuza_i_jarek_zdjecia_slubne_modrzewiowe_wzgorze_zakliczyn_start.webp"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Modrzewiowe Wzg??rze - Zakliczyn"}
                    headDescription={"Reporta?? ze ??lubu Zuzy i Jarka w Restauracji Modrzewiowe Wzg??rze - Zakliczyn. Uroczysto???? za??lubin w Ko??ciele pw. ??w. Miko??aja Biskupa w Brzozowej."}
                    headKeywords={"fotograf na ??lub fa??ciszowa,zdj??cia ??lubne zakliczyn,restauracja modrzewiowe wzg??rze"}
                    headUrl={"https://99foto.pl/zuza-i-jarek-zdjecia-slubne-modrzewiowe-wzgorze-zakliczyn"}
                    entryContentP1={
                        'Idealnie wykorzystany urlop w ojczy??nie &#8211; tak kr??tko podsumowa??bym tygodniowy powr??t Zuzi i Jarka do polskiej rzeczywisto??ci. Dzie?? rozpocz??li??my w salonie kosmetycznym w Ci????kowicach. Nast??pnie mia??em przyjemno???? uczestniczy?? w d??ugotrwa??ym procesie dmuchania balon??w i dogl??da?? hodowli udomowionego raka. Po b??ogos??awie??stwie udali??my si?? do <a href="https://www.brzozowa.diecezja.tarnow.pl/" target="_blank" rel="nofollow">ko??cio??a pw. ??w. Miko??aja Biskupa w Brzozowej</a>. Po ceremoni i zdj??ciu grupowym na ??yczenia udali??my si?? do <a href="https://www.modrzewiowe-wzgorze.pl/" target="_blank" rel="nofollow">Osady Wypoczynku i Zdrowia Modrzewiowe Wzg??rze</a> w Fa??ciszowej.'
                    }
                    entryContentP2={
                        "Pa??stwo M??odzi tak rozgrzali parkiet pierwszym ta??cem, ??e p????niej nie pozostawa?? pusty. Go??cie zdecydowanie dopisali, a zabawa by??a naprawd?? przednia. Dla tych co maj?? w??tpliwo??ci lub niejasne wspomnienia z tego wieczoru, zapraszam poni??ej. O dobry klimat imprezy zadba?? Zesp???? Hit Street z Jas??a. Serdeczne pozdrowienia dla ca??ej weselnej ekipy, go??ci oraz oczywi??cie mojej pary ??? Zuzy i Jarka. Ju?? nied??ugo ich sesja plenerowa, lecz tymczasem, zapraszam na ich reporta??!"
                    }
                    slug={"zuza-i-jarek-zdjecia-slubne-modrzewiowe-wzgorze-zakliczyn"}
                    title={"ZDJ??CIA ??LUBNE MODRZEWIOWE WZG??RZE ZAKLICZYN - ZUZA i JAREK"}
                    tags={"fotograf na ??lub fa??ciszowa,zdj??cia ??lubne zakliczyn,restauracja modrzewiowe wzg??rze"}
                    date={"19 wrze??nia 2015"}
                    menuNames={"ZUZA i JAREK"}
                    menuTitle={"ZDJ??CIA ??LUBNE MODRZEWIOWE WZG??RZE ZAKLICZYN"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"SESJA ZDJ??CIOWA DW??R TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_zdjeciowa_dwor_tomaszowice_krakow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
