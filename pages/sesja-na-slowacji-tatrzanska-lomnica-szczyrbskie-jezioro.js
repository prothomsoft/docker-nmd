import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0004.webp", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0002.webp", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0005.webp", height: 526 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0006.webp", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0011.webp", height: 527 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0018.webp", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0031.webp", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0012.webp", height: 527 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0029.webp", height: 382 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0030.webp", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0039.webp", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0032.webp", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0034.webp", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0038.webp", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0041.webp", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0043.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja_slubna_na_slowacji.webp"}
                    images={images}
                    headTitle={"Sesja ślubna na Słowacji, Tatrzańska Łomnica, Jezioro Szczyrbskie"}
                    headDescription={"Piękne miejsca w Wysokich Tatrach czyli Tatrzańska Łomnica i Jezioro Szczyrbskie. Sesja ślubna Edyty i Roberta na Słowacji. Zapraszam na bloga."}
                    headKeywords={"sesja ślubna Słowacja, Tatrzańska Łomnica, Jezioro Szczyrbskie, sesja zdjęciowa w Wysokich Tatrach"}
                    headUrl={"https://99foto.pl/sesja-na-slowacji-tatrzanska-lomnica-szczyrbskie-jezioro"}
                    entryContentP1={
                        'Trafić dobrą pogodę w Tatrach, szczególnie jesienią, być tam w momencie gdy górskie szczyty oświetlają ciepłe promienie słońca, a liście mienią się w kolorach złota, to rzecz niełatwa. Jednak nie po raz pierwszy i mam taką nadzieję nie po raz ostatni, udało się nam upolować taki idealny dzień i do naszej codzienności dołożyć kilka przemiłych wspomnień i kolorowych fotograficznych kadrów. Dzień rozpoczął się wcześnie rano. Po drodze z Krakowa wiadomo duża flat white i zdrapki na Orlenie, rozmowy o przyszłych planach z Edytą i Robertem i jedno wielkie ładowanie akumulatorów boskim widokiem gór, który najnormalniej w świecie uwielbiam. Przekroczyliśmy granicę ze Słowacją i kolejką górską dostaliśmy się na Tatrzańską Łomnicę. Góry zaskakują. Tak było również i tym razem. Łomnicki Staw, który zwykle przypominał Morskie Oko niemalże zniknął. Pozwoliło nam to na rajd po kamieniach i dostęp do miejsc wcześniej niedostępnych.'
                    }
                    entryContentP2={
                        'Wykorzystując zapas czasu, delektując się promieniami słońca i wdychając powietrze, o jakim w Krakowie można tylko pomarzyć, wdrapaliśmy się dość wysoko niemalże pod sam szczyt. Po dobrych czterech godzinach zjechaliśmy na dół, ponieważ w naszym planie dnia był jeszcze zachód słońca nad Szczyrbskim Jeziorem. Kierując się opiniami, które można znaleźć na forach fotograficznych miejsce to jest najpopularniejszym miejscem plenerowym tego i ubiegłego roku. Myślę, że udało nam się wykorzystać jego potencjał i stworzyć kilka klasyków ze schroniskiem i skocznią narciarską w tle. Był to z pewnością dzień wykorzystany na maksa, zwłaszcza, że następnego dnia w górach spadł śnieg. Na koniec powiem Wam, że w sumie to dobrze, że tydzień wcześniej górale zamknęli wyjazd kolejką na Kasprowy Wierch, po prostu tak miało być. Serdecznie zapraszam do oglądania zdjęć z sesji zdjęciowej Edyty i Roberta i życzę miłego oglądania.'
                    }
                    slug={"sesja-na-slowacji-tatrzanska-lomnica-szczyrbskie-jezioro"}
                    title={"SESJA NA SŁOWACJI, TATRZAŃSKA ŁOMNICA, SZCZYRBSKIE JEZIORO - EDYTA i ROBERT"}
                    tags={"sesja ślubna Słowacja, Tatrzańska Łomnica, Jezioro Szczyrbskie, sesja zdjęciowa w Wysokich Tatrach"}
                    date={"8 października 2019"}
                    menuNames={"EDYTA i ROBERT"}
                    menuTitle={"SESJA NA SŁOWACJI, TATRZAŃSKA ŁOMNICA, SZCZYRBSKIE JEZIORO"}
                    leadNames={"TERESA i ANDRZEJ"}
                    leadTitle={"PARK MOGILANY, BUZIAKI SKĄPANE W PROMIENIACH SŁOŃCA"}
                    leadUrl={"/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca"}
                    leadImage={process.env.staticImagesPath + "sesja_narzeczenska_klasztor_w_tyncu.webp"}
                />
            
        );
};

export default BlogPageComponent;