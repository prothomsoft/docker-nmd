import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0016.webp", height: 762 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0001.webp", height: 851 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0003.webp", height: 851 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0005.webp", height: 851 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0007.webp", height: 852 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0009.webp", height: 851 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0010.webp", height: 851 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0011.webp", height: 851 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0014.webp", height: 851 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0020.webp", height: 382 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0018.webp", height: 852 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0021.webp", height: 851 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "natalia_i_marcin_sesja_slubna_pieskowa_skala_i_ojcow_start.webp"}
                    images={images}
                    headTitle={"Sesja ślubna Pieskowa Skała i Ojców"}
                    headDescription={"Kolejna odsłona pięknej jesieni. Tym razem w imieniu Natalii i Marcina zapraszam do Pieskowej Skały i Ojcowa."}
                    headKeywords={"sesja ślubna pieskowa skała,plener ojców"}
                    headUrl={"https://99foto.pl/natalia-i-marcin-sesja-slubna-pieskowa-skala-i-ojcow"}
                    entryContentP1={
                        "Od ślubu Natalii i Marcina minęło już trochę czasu. Można byłoby powiedzieć, że długo czekaliśmy na różnokolorowe liście i jesienną aurę w Ojcowskim Parku Narodowym i Pieskowej Skale, jednak nie byłaby to stuprocentowa prawda. Jak się pewnie domyślacie powstrzymała nas jesienna pogoda, która oprócz deszczu serwowała temperaturę zwykle poniżej 10 kresek na termometrze. Ale w końcu prognozy sprawdziły się i w może nie najbardziej słoneczny, ale bezdeszczowy i ciepły dzień wybraliśmy się w zaplanowane miejsce."
                    }
                    entryContentP2={
                        "Pracowaliśmy razem z Przemkiem, filmowcem na ślubie Natalii i Marcina, który pracowicie zbierał materiały na teledysk ślubny. Marcin pozował z wrodzonym luzem, a Natalia dzielnie pokonywała trudności w terenie ze szpilkami w rękach. Bardzo udany dzień, po którym po raz kolejny stwierdzam, że Pieskowa Skała to świetne miejsce na plener ślubny. Miłego oglądania."
                    }
                    slug={"natalia-i-marcin-sesja-slubna-pieskowa-skala-i-ojcow"}
                    title={"SESJA ŚLUBNA PIESKOWA SKAŁA I OJCÓW - NATALIA i MARCIN"}
                    tags={"sesja ślubna pieskowa skała,plener ojców"}
                    date={"31 października 2016"}
                    menuNames={"NATALIA i MARCIN"}
                    menuTitle={"SESJA ŚLUBNA PIESKOWA SKAŁA I OJCÓW"}
                    leadNames={"SABINA i WIESIEK"}
                    leadTitle={"ZDJĘCIA ŚLUBNE DWOREK FANTAZJA SKOMIELNA BIAŁA"}
                    leadUrl={"/sabina-i-wiesiek-zdjecia-slubne-dworek-fantazja-skomielna-biala"}
                    leadImage={process.env.staticImagesPath + "sabina_i_wiesiek_zdjecia_slubne_dworek_fantazja_skomielna_biala_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
