import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0019.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0003.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0006.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0008.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0011.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0022.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0014.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/lawendowe_pole_pod_krakowem_0024.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "lawendowe_pole_pod_krakowem_sesja_slubna_w_ostrowie_start.webp"}
                    images={images}
                    headTitle={"Lawendowe pole pod Krakowem"}
                    headDescription={"Lawendowe pole pod Krakowem i sesja zdjęciowa Karoliny i Dawida. Miejsce magiczne i wymarzone na zdjęcia. Serdecznie zapraszam na bloga. Miłego oglądania."}
                    headKeywords={"lawendowe pole pod krakowem,sesja ślubna kraków"}
                    headUrl={"https://99foto.pl/lawendowe-pole-pod-krakowem-sesja-slubna-w-ostrowie"}
                    entryContentP1={
                        "Chwilę zajęło nam obmyślenie planu na sesję ślubną Karoliny i Dawida. Szukaliśmy fajnych miejsc na wschód od Krakowa, tak by można było przyjemnie wypełnić czas oczekiwania na wyjazd do Ostrowa Klimontowa na Lawendowe Pole. Wszystkie miejsca, które rozważaliśmy zostały jednak z łatwością pokonane przez Nadwiślandie czyli Kazimierz, Operę Krakowską i Starą Zajezdnię, wspaniały Kraków zwyciężył po raz kolejny. Dojazd do Lawendowego Pola z Krakowskiego Kazimierza zajmuje około pięćdziesięciu minut."
                    }
                    entryContentP2={
                        "Słońce w lipcu zachodzi dość późno jednak dobrze jest wyjechać w to miejsce przed 19, by móc podziwiać magiczny zachód w lawendowych odcieniach fioletu. Tak też zrobiliśmy i miejsce nie zawiodło. Na Karolinę czekał przygotowany wcześniej lawendowy wianek. Tego dnia fotografowały się dzieci, jedna para młoda i nawet psiaki. Pole jest jednak niemałe i każdy znalazł tam swoje miejsce. Serdecznie zapraszam do oglądania zdjęć, a przyszłe Pary Młode na sesje ślubne w lawendzie. Miłego oglądania."
                    }
                    slug={"lawendowe-pole-pod-krakowem-sesja-slubna-w-ostrowie"}
                    title={"LAWENDOWE POLE POD KRAKOWEM, SESJA ŚLUBNA W OSTROWIE - KAROLINA i DAWID"}
                    tags={"lawendowe pole pod krakowem,sesja ślubna kraków"}
                    date={"26 czerwca 2017"}
                    menuNames={"KAROLINA i DAWID"}
                    menuTitle={"LAWENDOWE POLE POD KRAKOWEM, SESJA ŚLUBNA W OSTROWIE"}
                    leadNames={"KAROLINA i DAWID"}
                    leadTitle={"DOM WESELNY POD KASZTANAMI IGOŁOMIA"}
                    leadUrl={"/dom-weselny-pod-kasztanami-igolomia"}
                    leadImage={process.env.staticS3ImagesPath + "dom_weselny_pod_kasztanami_igolomia_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
