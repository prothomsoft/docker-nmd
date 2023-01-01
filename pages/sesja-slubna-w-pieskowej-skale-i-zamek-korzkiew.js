import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0002.webp", height: 850 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0009.webp", height: 850 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0007.webp", height: 850 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0006.webp", height: 527 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0003.webp", height: 762 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0008.webp", height: 850 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0012.webp", height: 851 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0013.webp", height: 527 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0017.webp", height: 527 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0019.webp", height: 527 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0021.webp", height: 850 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0031.webp", height: 762 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0020.webp", height: 527 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0025.webp", height: 527 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0027.webp", height: 850 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0024.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "plener_slubny_zamek_pieskowa_skala.webp"}
                    images={images}
                    headTitle={"Sesja ślubna Zamek Pieskowa Skała, Zamek Korzkiew"}
                    headDescription={"Zamek Pieskowa Skała, ślubna sesja zdjęciowa Kristiny i Aleksandra. Gonitwa za zachodzącym słońcem i moc emocji. Na sesje tylko Kraków. Zapraszam do oglądania."}
                    headKeywords={"Sesja ślubna Zamek Pieskowa Skała, Zamek Korzkiew, miejsce na sesję plenerową w Krakowie"}
                    headUrl={"https://99foto.pl/sesja-slubna-w-pieskowej-skale-i-zamek-korzkiew"}
                    entryContentP1={
                        "Ostatnio dużo się dzieje i kilka wpisów ślubnych pojawiło się tylko w strefie klienta. Czas to jednak zmienić i nadrobić zaległości wpisem co prawda krótszym niż ślubny, bo plenerowym, ale zawsze wpisem. Ślub Kristiny i Aleksandra miałem przyjemność fotografować w sierpniu, będąc jednym z zaproszonych gości Dworu Sieraków. Trzy tygodnie później umówiliśmy się na sesję plenerową w Krakowie. Na poszukiwania trzech składowych czyli chwili, światła i kadru wybraliśmy się w dobrze znane mi miejsca."
                    }
                    entryContentP2={
                        'Pierwszym z nich był <a href="https://korzkiew.pl/" target="_blank" rel="nofollow">Zamek w Korzkwi</a>, a drugim <a href="https://pieskowaskala.eu/" target="_blank" rel="nofollow">Zamek w Pieskowej Skale</a>. Czyli było zamkowo i słonecznie. Po raz kolejny goniliśmy zachodzące słońce wspinając się wyżej i wyżej. Mam nadzieję pojawić się w tych miejscach jeszcze co najmniej raz w tym roku, korzystając z uroków polskiej złotej jesieni. Serdecznie zapraszam na kilka zdjęć zrobionych tego popołudnia. Miłego oglądania.'
                    }
                    slug={"sesja-slubna-w-pieskowej-skale-i-zamek-korzkiew"}
                    title={"SESJA ŚLUBNA W PIESKOWEJ SKALE i ZAMEK KORZKIEW - KRISTINA i ALEKSANDR"}
                    tags={"Sesja ślubna Zamek Pieskowa Skała, Zamek Korzkiew, miejsce na sesję plenerową w Krakowie"}
                    date={"19 września 2018"}
                    menuNames={"KRISTINA i ALEKSANDR"}
                    menuTitle={"SESJA ŚLUBNA W PIESKOWEJ SKALE i ZAMEK KORZKIEW"}
                    leadNames={"DAJANA i SYLWESTER"}
                    leadTitle={"OGRÓD BOTANICZNY W KRAKOWIE, ŚLUBNA SESJA ZDJĘCIOWA"}
                    leadUrl={"/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
                    leadImage={process.env.staticImagesPath + "ogrod_botaniczny.webp"}
                />
            
        );
};

export default BlogPageComponent;
