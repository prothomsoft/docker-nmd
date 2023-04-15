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
                    headTitle={"Plener ślubny na Rynku w Krakowie"}
                    headDescription={
                        "Plener ślubny na Rynku w Krakowie, pomysł na sesję zdjęciową w czasie epidemii koronawirusa. Rynek Główny w Krakowie bez ludzi to możliwe - sami zobaczcie na bloga. Zapraszam."
                    }
                    headKeywords={"plener ślubny w czasie epidemii koronawirusa, sesja zdjęciowa na rynku w Krakowie"}
                    headUrl={"https://99foto.pl/plener-slubny-na-rynku-w-krakowie"}
                    entryContentP1={
                        "Dwudziesty kwietnia, konferencja prasowa premiera i ministra zdrowia, nowe rozporządzenia w ramach rozmrażania gospodarki. Tego dnia wszyscy fotografowie i pary młode w Polsce w ramach wykonywania swojej pracy w czasie epidemii koronawirusa zyskali pozwolenie na wykonywanie plenerów ślubnych bez maseczek. Ślub Patrycji i Krzyśka odbył się w pażdzierniku, brak śniegu zimą przesunął nasze plenerowe plany do wiosny. Hashtag zostańwdomu zapewnił nam pusty Rynek Główny w Krakowie, do tego wybraliśmy mega słoneczny dzień i moment w którym drzewa były już wystarczająco zielone. Miejmy nadzieję, że taka okazja na bezludny Kraków w historii nas wszystkich już się nie powtórzy i był to jedyny moment, który dobrze wykorzystaliśmy."
                    }
                    entryContentP2={
                        "Od poniedziałku wszyscy możemy więcej. Fotograficznie nadal możemy w pełni legalnie wykonywać plenery bez używania maseczek. Epidemia koronowirusa potrwa jeszcze trochę i nikt w tym roku nie spodziewa się ceremonii ślubnej bez maseczek. Jedno jest pewne w oczekiwaniu na lepsze czasy na moim blogu będą pojawiać się wpisy plenerowe. Serdecznie zapraszam do oglądania.  "
                    }
                    slug={"plener-slubny-na-rynku-w-krakowie"}
                    title={"PLENER ŚLUBNY NA RYNKU W KRAKOWIE - PATRYCJA i KRZYSZTOF"}
                    tags={"plener ślubny w czasie epidemii koronawirusa, sesja zdjęciowa na rynku w Krakowie"}
                    date={"02 maja 2020"}
                    menuNames={"PATRYCJA i KRZYSZTOF"}
                    menuTitle={"PLENER ŚLUBNY NA RYNKU W KRAKOWIE"}
                    leadNames={"MARLENA i ADAM"}
                    leadTitle={"SESJA ŚLUBNA W KRAKOWIE. MIEJSCA IDEALNE NA ROMANTYCZNE KADRY"}
                    leadUrl={"/sesja-slubna-w-krakowie-miejsca-idealnie-nadajace-sie-na-romantyczne-kadry"}
                    leadImage={process.env.staticS3ImagesPath + "marlena_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
