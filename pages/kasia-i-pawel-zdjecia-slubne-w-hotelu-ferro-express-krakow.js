import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0044.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0016.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0020.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0024.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0025.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0026.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0027.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0028.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0033.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0035.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0036.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0037.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0038.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0039.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0040.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0041.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0042.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0043.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0045.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0046.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0047.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0048.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0050.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0055.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0056.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0059.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0063.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0067.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0068.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0069.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0070.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0071.webp", height: 757 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0072.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0073.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0074.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0076.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0084.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0085.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0090.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0093.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0094.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0098.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0102.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0104.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0105.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0106.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0107.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0110.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0113.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0117.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0118.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/08/fotograf_na_wesele_krakow_0123.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "kasia_i_pawel_zdjecia_slubne_w_hotelu_ferro_express_krakow_start.webp"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne w Hotelu Ferro Express Krak??w"}
                    headDescription={"Zima, zima, zima bia??o i temperatura minus trzyna??cie stopni, ale tylko za oknem. Serdecznie zapraszam na zimowy ale pe??ny kolor??w ??lub Kasi i Paw??a."}
                    headKeywords={"zdj??cia ??lubne hotel ferro express krak??w,fotograf na ??lub krak??w,zdj??cia ??lubne krak??w"}
                    headUrl={"https://99foto.pl/kasia-i-pawel-zdjecia-slubne-w-hotelu-ferro-express-krakow"}
                    entryContentP1={
                        'Zima, zima, zima bia??o i temperatura minus trzyna??cie stopni, ale tylko za oknem. Dla odmiany na ??lubie Paw??a i Kasi du??o kolor??w i du??o u??miech??w w rodzinnej atmosferze. Rozpocz??li??my tradycyjnie od fryzjera wcze??nie bo o godzinie ??smej rano w Salonie Avangarda. Nast??pnie udali??my si?? na makija??. Malowanie trwa??o dobre dwie godziny i odbywa??o si?? przy d??wi??kach muzyki Dawida Podsiad??o. W mieszkaniu dziadk??w Kasi odby??o si?? b??ogos??awie??stwo, po kt??rym udali??my si?? do ??wi??tecznie przystrojonego <a href="https://parafia-azory.pl/" target="_blank" rel="nofollow">Ko??cio??a Niepokalanego Pocz??cia NMP na Azorach</a>.'
                    }
                    entryContentP2={
                        'Obowi??zkowe zdj??cie grupowe i chwil?? p????niej udali??my si?? w okolic?? Ty??ca do <a href="https://fero.krakow.pl/" target="_blank" rel="nofollow">Hotelu Ferro Express</a>.  Na sali czeka?? ju?? na nas zesp????, kt??ry u??wietni?? zabaw?? tego wieczoru. Po setkach ??ycze?? i prezent??w, zabawa trwa??a do bia??ego rana. Pi??kny dzie??, pi??kne wspomnienia i mam nadziej?? obrazuj??ce to zdj??cia ??? zapraszam serdecznie na reporta?? Kasi i Paw??a. Na koniec, pozdrowienia dla Pary M??odej, go??ci i ekipy weselnej. Blisko pi????set zdj???? z tego dnia znajdziecie w strefie klienta podaj??c has??o z mojej wizyt??wki.'
                    }
                    slug={"kasia-i-pawel-zdjecia-slubne-w-hotelu-ferro-express-krakow"}
                    title={"ZDJ??CIA ??LUBNE W HOTELU FERRO EXPRESS KRAK??W - KASIA i PAWE??"}
                    tags={"zdj??cia ??lubne hotel ferro express krak??w,fotograf na ??lub krak??w,zdj??cia ??lubne krak??w"}
                    date={"8 stycznia 2016"}
                    menuNames={"KASIA i PAWE??"}
                    menuTitle={"ZDJ??CIA ??LUBNE W HOTELU FERRO EXPRESS KRAK??W"}
                    leadNames={"JUSTYNA i DAMIA"}
                    leadTitle={"SESJA ZDJ??CIOWA ZAKRZ??WEK, SKA??KI TWARDOWSKIEGO KRAK??W"}
                    leadUrl={"/sesja-zdjeciowa-zakrzowek-skalki-twardowskiego-krakow"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
