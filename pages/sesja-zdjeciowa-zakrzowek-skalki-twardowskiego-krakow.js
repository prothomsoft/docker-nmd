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
                    headTitle={"Sesja zdjęciowa Zakrzówek, Skałki Twardowskiego Kraków"}
                    headDescription={"Skałki Twardowskiego w Krakowie i sesja zdjęciowa Justyny i Damiana. Zapraszam na bloga i kilka zdjęć z tej sesji plenerowej."}
                    headKeywords={"sesja zdjęciowa zakrzówek,skałki twardowskiego kraków"}
                    headUrl={"https://99foto.pl/sesja-zdjeciowa-zakrzowek-skalki-twardowskiego-krakow"}
                    entryContentP1={
                        'Justyna i Damian swój ślub mieli dość daleko od Krakowa, więc zdjęcia ślubne z ich najważniejszego dnia i super momenty wyłapywał inny fotograf ślubny.  Fakt ten jednak nie przeszkodził nam, żeby się spotkać i po raz kolejny odkryć Kraków na nowo. Zaczęliśmy w Parku w Mogilanach, dość popularną ostatnio miejscówką na plenery ślubne. Wcale nas nie zdziwiło, że tego popołudnia jeszcze dwie inne pary wybrały się na plener ślubny w to miejsce. Następnie daliśmy się zaskoczyć przez Zakrzówek. Zaskoczyć dlatego, że zwykle wchodziłem na ten teren od strony Wawelu i tam miałem swoje ulubione kadry. Tym razem za radą Damiana ze <a href="https://stylova.com" target="_blank" rel="nofollow">stylova.com</a> zaparkowaliśmy pod adresem Wyłom 1 i udaliśmy się na kąpielisko.'
                    }
                    entryContentP2={
                        "Na miejscu okazało się, że jak zwykle w Krakowie nic nie może być za darmo. Drugi raz nie dam się zaskoczyć. Warto było wejść na kilka kadrów, które zrobiliśmy tego dnia. Chwilę później odwiedziliśmy Stajnię na Kazimierzu i kilka innych klimatycznych miejsc. Fotografowaliśmy do zmroku w świetnej atmosferze, wymieniając uwagi o krakowskiej branży IT. Na szczęście straż miejska miała tego dnia wolne. Serdecznie zapraszam na kilka zdjęć z tego dnia. Miłego oglądania."
                    }
                    slug={"sesja-zdjeciowa-zakrzowek-skalki-twardowskiego-krakow"}
                    title={"SESJA ZDJĘCIOWA ZAKRZÓWEK, SKAŁKI TWARDOWSKIEGO KRAKÓW - JUSTYNA i DAMIAN"}
                    tags={"sesja zdjęciowa zakrzówek,skałki twardowskiego kraków"}
                    date={"28 sierpnia 2017"}
                    menuNames={"JUSTYNA i DAMIAN"}
                    menuTitle={"SESJA ZDJĘCIOWA ZAKRZÓWEK, SKAŁKI TWARDOWSKIEGO KRAKÓW"}
                    leadNames={"ANIA i MICHAŁ"}
                    leadTitle={"DOM WESELNY MARION - WESELE TARNÓW i ZDJĘCIA ŚLUBNE"}
                    leadUrl={"/dom-weselny-marion-wesele-tarnow-i-zdjecia-slubne"}
                    leadImage={process.env.staticS3ImagesPath + "dom_weselny_marion_wesele_tarnow_i_zdjecia_slubne_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
