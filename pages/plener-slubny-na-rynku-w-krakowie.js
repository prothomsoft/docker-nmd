import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0002.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0004.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0006.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0007.webp", height: 764 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0009.webp", height: 913 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0010.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0012.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0014.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0016.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0018.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0022.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0020.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0025.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0026.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0028.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0030.webp", height: 762 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "plener_slubny_na_rynku_w_krakowie.webp"}
                    images={images}
                    headTitle={"Plener ??lubny na Rynku w Krakowie"}
                    headDescription={
                        "Plener ??lubny na Rynku w Krakowie, pomys?? na sesj?? zdj??ciow?? w czasie epidemii koronawirusa. Rynek G????wny w Krakowie bez ludzi to mo??liwe - sami zobaczcie na bloga. Zapraszam."
                    }
                    headKeywords={"plener ??lubny w czasie epidemii koronawirusa, sesja zdj??ciowa na rynku w Krakowie"}
                    headUrl={"https://99foto.pl/plener-slubny-na-rynku-w-krakowie"}
                    entryContentP1={
                        "Dwudziesty kwietnia, konferencja prasowa premiera i ministra zdrowia, nowe rozporz??dzenia w ramach rozmra??ania gospodarki. Tego dnia wszyscy fotografowie i pary m??ode w Polsce w ramach wykonywania swojej pracy w czasie epidemii koronawirusa zyskali pozwolenie na wykonywanie plener??w ??lubnych bez maseczek. ??lub Patrycji i Krzy??ka odby?? si?? w pa??dzierniku, brak ??niegu zim?? przesun???? nasze plenerowe plany do wiosny. Hashtag zosta??wdomu zapewni?? nam pusty Rynek G????wny w Krakowie, do tego wybrali??my mega s??oneczny dzie?? i moment w kt??rym drzewa by??y ju?? wystarczaj??co zielone. Miejmy nadziej??, ??e taka okazja na bezludny Krak??w w historii nas wszystkich ju?? si?? nie powt??rzy i by?? to jedyny moment, kt??ry dobrze wykorzystali??my."
                    }
                    entryContentP2={
                        "Od poniedzia??ku wszyscy mo??emy wi??cej. Fotograficznie nadal mo??emy w pe??ni legalnie wykonywa?? plenery bez u??ywania maseczek. Epidemia koronowirusa potrwa jeszcze troch?? i nikt w tym roku nie spodziewa si?? ceremonii ??lubnej bez maseczek. Jedno jest pewne w oczekiwaniu na lepsze czasy na moim blogu b??d?? pojawia?? si?? wpisy plenerowe. Serdecznie zapraszam do ogl??dania.  "
                    }
                    slug={"plener-slubny-na-rynku-w-krakowie"}
                    title={"PLENER ??LUBNY NA RYNKU W KRAKOWIE - PATRYCJA i KRZYSZTOF"}
                    tags={"plener ??lubny w czasie epidemii koronawirusa, sesja zdj??ciowa na rynku w Krakowie"}
                    date={"02 maja 2020"}
                    menuNames={"PATRYCJA i KRZYSZTOF"}
                    menuTitle={"PLENER ??LUBNY NA RYNKU W KRAKOWIE"}
                    leadNames={"MARLENA i ADAM"}
                    leadTitle={"SESJA ??LUBNA W KRAKOWIE. MIEJSCA IDEALNE NA ROMANTYCZNE KADRY"}
                    leadUrl={"/sesja-slubna-w-krakowie-miejsca-idealnie-nadajace-sie-na-romantyczne-kadry"}
                    leadImage={process.env.staticS3ImagesPath + "/marlena_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
