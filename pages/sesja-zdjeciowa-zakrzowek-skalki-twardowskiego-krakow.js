import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0001.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0018.webp", height: 339 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0003.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0006.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0008.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0010.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0013.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0015.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0023.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0016.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0017.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0021.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0020.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_0022.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_start.webp"}
                    images={images}
                    headTitle={"Sesja zdj??ciowa Zakrz??wek, Ska??ki Twardowskiego Krak??w"}
                    headDescription={"Ska??ki Twardowskiego w Krakowie i sesja zdj??ciowa Justyny i Damiana. Zapraszam na bloga i kilka zdj???? z tej sesji plenerowej."}
                    headKeywords={"sesja zdj??ciowa zakrz??wek,ska??ki twardowskiego krak??w"}
                    headUrl={"https://99foto.pl/sesja-zdjeciowa-zakrzowek-skalki-twardowskiego-krakow"}
                    entryContentP1={
                        'Justyna i Damian sw??j ??lub mieli do???? daleko od Krakowa, wi??c zdj??cia ??lubne z ich najwa??niejszego dnia i super momenty wy??apywa?? inny fotograf ??lubny.  Fakt ten jednak nie przeszkodzi?? nam, ??eby si?? spotka?? i po raz kolejny odkry?? Krak??w na nowo. Zacz??li??my w Parku w Mogilanach, do???? popularn?? ostatnio miejsc??wk?? na plenery ??lubne. Wcale nas nie zdziwi??o, ??e tego popo??udnia jeszcze dwie inne pary wybra??y si?? na plener ??lubny w to miejsce. Nast??pnie dali??my si?? zaskoczy?? przez Zakrz??wek. Zaskoczy?? dlatego, ??e zwykle wchodzi??em na ten teren od strony Wawelu i tam mia??em swoje ulubione kadry. Tym razem za rad?? Damiana ze <a href="https://stylova.com" target="_blank" rel="nofollow">stylova.com</a> zaparkowali??my pod adresem Wy??om 1 i udali??my si?? na k??pielisko.'
                    }
                    entryContentP2={
                        "Na miejscu okaza??o si??, ??e jak zwykle w Krakowie nic nie mo??e by?? za darmo. Drugi raz nie dam si?? zaskoczy??. Warto by??o wej???? na kilka kadr??w, kt??re zrobili??my tego dnia. Chwil?? p????niej odwiedzili??my Stajni?? na Kazimierzu i kilka innych klimatycznych miejsc. Fotografowali??my do zmroku w ??wietnej atmosferze, wymieniaj??c uwagi o krakowskiej bran??y IT. Na szcz????cie stra?? miejska mia??a tego dnia wolne. Serdecznie zapraszam na kilka zdj???? z tego dnia. Mi??ego ogl??dania."
                    }
                    slug={"sesja-zdjeciowa-zakrzowek-skalki-twardowskiego-krakow"}
                    title={"SESJA ZDJ??CIOWA ZAKRZ??WEK, SKA??KI TWARDOWSKIEGO KRAK??W - JUSTYNA i DAMIAN"}
                    tags={"sesja zdj??ciowa zakrz??wek,ska??ki twardowskiego krak??w"}
                    date={"28 sierpnia 2017"}
                    menuNames={"JUSTYNA i DAMIAN"}
                    menuTitle={"SESJA ZDJ??CIOWA ZAKRZ??WEK, SKA??KI TWARDOWSKIEGO KRAK??W"}
                    leadNames={"ANIA i MICHA??"}
                    leadTitle={"DOM WESELNY MARION - WESELE TARN??W i ZDJ??CIA ??LUBNE"}
                    leadUrl={"/dom-weselny-marion-wesele-tarnow-i-zdjecia-slubne"}
                    leadImage={process.env.staticS3ImagesPath + "dom_weselny_marion_wesele_tarnow_i_zdjecia_slubne_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
