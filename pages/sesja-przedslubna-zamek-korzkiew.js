import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_001.webp", height: 850 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0003.webp", height: 850 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0008.webp", height: 527 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0006.webp", height: 850 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0011.webp", height: 527 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0014.webp", height: 527 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0015.webp", height: 527 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0019.webp", height: 527 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0022.webp", height: 850 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0032.webp", height: 383 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0033.webp", height: 527 },
            { imageSrc: "/static/blog/2017/07/sesja_narzeczenska_krakow_0013.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja_narzeczenska_krakow_start.webp"}
                    images={images}
                    headTitle={"Sesja przedślubna w Krakowie"}
                    headDescription={"Sesja przedślubna Kingi Maćka. Ciekawe i najlepsze miejsce plenerowe na sesję zdjęciową. Kraków i okolice. Serdecznie zapraszam."}
                    headKeywords={"sesja przedślubna w krakowie,zamek korzkiew,zamek pieskowa skała"}
                    headUrl={"https://99foto.pl/sesja-przedslubna-zamek-korzkiew"}
                    entryContentP1={
                        'Tym razem jeden wpis na blogu łączy sesję narzeczeńską i sesję ślubną Kingi i Maćka. Postanowiłem wybrać najlepsze kadry, które udało nam się stworzyć podczas blisko ośmiu godzin spacerowania i fotografowania miasta Krakowa i jego okolic. Kinga i Maciek bardzo dbali o detale na obu sesjach, przygotowując sobie <a href="https://koloryholi.pl/" target="_blank" rel="nofollow">kolorki holi</a>, strój strażacki, balony wypełnione helem i przepiękny wianek. Sesja narzeczeńska miała pokazać Kraków jako miasto i ograniczyć kolor zielony w kadrze,  wybraliśmy więc w pierwszej kolejności Kazimierz.'
                    }
                    entryContentP2={
                        'Rozległą łąkę, z której obserwowaliśmy zachód słońca znaleźliśmy w pobliżu Lasku Wolskiego. Po drodze do tego miejsca na chwilę zatrzymaliśmy się pod <a href="https://www.uziyada.krakow.pl/" target="_blank" rel="nofollow">Zamkiem w Przegorzałach</a>. Sesja ślubna to bardziej odległe okolice Krakowa, czyli <a href="https://korzkiew.pl/" target="_blank" rel="nofollow">Zamek w Korzkwi</a> i <a href="https://pieskowaskala.eu/" target="_blank" rel="nofollow">Zamek w Pieskowej Skale</a>. Dwa dni wspaniałej pogody, świetnie wykorzystany czas i prawdziwy przekrój miasta Krakowa. Mega podziękowania dla Kingi i Maćka za perfekcyjne przygotowanie do naszych sesji plenerowych. Serdecznie zapraszam na zdjęcia i życzę miłego oglądania.'
                    }
                    slug={"sesja-przedslubna-zamek-korzkiew"}
                    title={"SESJA PRZEDŚLUBNA ZAMEK KORZKIEW KRAKÓW - KINGA i MACIEK"}
                    tags={"sesja przedślubna w krakowie,zamek korzkiew,zamek pieskowa skała"}
                    date={"2 lipca 2017"}
                    menuNames={"KINGA i MACIEK"}
                    menuTitle={"SESJA PRZEDŚLUBNA ZAMEK KORZKIEW KRAKÓW"}
                    leadNames={"KAROLINA i DAWID"}
                    leadTitle={"LAWENDOWE POLE POD KRAKOWEM, SESJA ŚLUBNA W OSTROWIE"}
                    leadUrl={"/lawendowe-pole-pod-krakowem-sesja-slubna-w-ostrowie"}
                    leadImage={process.env.staticImagesPath + "lawendowe_pole_pod_krakowem_sesja_slubna_w_ostrowie_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
