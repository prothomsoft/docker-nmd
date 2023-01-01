import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0008.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0010.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0006.webp", height: 382 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0044.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0037.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0011.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0060.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0012.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0013.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0016.webp", height: 852 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0063.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0017.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0018.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0019.webp", height: 383 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0020.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0022.webp", height: 816 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0024.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0027.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0028.webp", height: 383 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0029.webp", height: 816 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0034.webp", height: 382 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0035.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0038.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0036.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0045.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0050.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0055.webp", height: 382 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0056.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0057.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0058.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0065.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0067.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0072.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0073.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0076.webp", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0077.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "michas_i_martusia_wakacje_wroclaw_i_kudowa_zdroj_start.webp"}
                    images={images}
                    headTitle={"Sesja rodzinna Kraków"}
                    headDescription={"Afrykanarium, Kolejkowo, SkyTower i Szczeliniec Wielki. Zapraszam na kilka wakacyjnych zdjęć Michasia i Martusi z Wrocławia i Kudowy Zdrój. Miłego oglądania."}
                    headKeywords={"sesja rodzinna kraków,fotograf rodzinny kraków,fotografia rodzinna kraków"}
                    headUrl={"https://99foto.pl/michas-i-martusia-wakacje-wroclaw-i-kudowa-zdroj"}
                    entryContentP1={
                        "Dwa tygodnie pełnego luzu i nasze wakacje, które spędziliśmy we Wrocławiu i Kudowie Zdrój, czyli chwilowa przerwa od zdjęć ślubnych i sesji plenerowych. Michaś i Martusia mieli te dwa tygodnie wypełnione atrakcjami. W pierwszej kolejności odwiedziliśmy Wrocławskie ZOO i nowo otwarte Afrykarium. Świetne miejsce, nowoczesne i na pewno warte zobaczenia. Następnie wybraliśmy się do Parku Wodnego, fajniejszego niż ten w Krakowie. Później kolejkowo, wyjazd na 49 piętro w Sky Tower, finał Euro dla Portugali i nadszedł czas wyjazdu do Kudowy Zdrój."
                    }
                    entryContentP2={
                        "Do Kudowy Zdrój w poniedziałek prosto na obiadek jechaliśmy drogą stu zakrętów przez Radków i Karłów. Na miejscu zwiedziliśmy Park Zdrojowy, a Michaś i Martusia wdrapali się dzielnie na Szczeliniec Wielki. Miejsca bardzo wakacyjne i godne polecenia jeżeli ktoś chce pochodzić w lekkich górach z dzieciakami. Wszystkie zdjęcia zrobiłem jednym aparatem i tylko dwoma obiektywami, wakacyjny zestaw minimum. Korzystając z ostatnich urlopowych dni wybrałem kilka zdjęć. Miłego oglądania."
                    }
                    slug={"michas-i-martusia-wakacje-wroclaw-i-kudowa-zdroj"}
                    title={"WAKACJE WROCŁAW i KUDOWA ZDRÓJ - MICHAŚ i MARTUSIA"}
                    tags={"sesja rodzinna kraków,fotograf rodzinny kraków,fotografia rodzinna kraków"}
                    date={"15 lipca 2016"}
                    menuNames={"MICHAŚ i MARTUSIA"}
                    menuTitle={"WAKACJE WROCŁAW i KUDOWA ZDRÓJ"}
                    leadNames={"JOANNA i GRZEGORZ"}
                    leadTitle={"WESELE NA POLU GOLFOWYM W PACZÓŁTOWICACH"}
                    leadUrl={"/wesele-na-polu-golfowym-w-paczoltowicach"}
                    leadImage={process.env.staticImagesPath + "wesele_na_polu_golfowym_w_paczoltowicach_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
