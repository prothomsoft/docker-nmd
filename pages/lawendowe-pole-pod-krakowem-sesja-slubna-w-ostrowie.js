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
                    headDescription={"Lawendowe pole pod Krakowem i sesja zdj??ciowa Karoliny i Dawida. Miejsce magiczne i wymarzone na zdj??cia. Serdecznie zapraszam na bloga. Mi??ego ogl??dania."}
                    headKeywords={"lawendowe pole pod krakowem,sesja ??lubna krak??w"}
                    headUrl={"https://99foto.pl/lawendowe-pole-pod-krakowem-sesja-slubna-w-ostrowie"}
                    entryContentP1={
                        "Chwil?? zaj????o nam obmy??lenie planu na sesj?? ??lubn?? Karoliny i Dawida. Szukali??my fajnych miejsc na wsch??d od Krakowa, tak by mo??na by??o przyjemnie wype??ni?? czas oczekiwania na wyjazd do Ostrowa Klimontowa na Lawendowe Pole. Wszystkie miejsca, kt??re rozwa??ali??my zosta??y jednak z ??atwo??ci?? pokonane przez Nadwi??landie czyli Kazimierz, Oper?? Krakowsk?? i Star?? Zajezdni??, wspania??y Krak??w zwyci????y?? po raz kolejny. Dojazd do Lawendowego Pola z Krakowskiego Kazimierza zajmuje oko??o pi????dziesi??ciu minut."
                    }
                    entryContentP2={
                        "S??o??ce w lipcu zachodzi do???? p????no jednak dobrze jest wyjecha?? w to miejsce przed 19, by m??c podziwia?? magiczny zach??d w lawendowych odcieniach fioletu. Tak te?? zrobili??my i miejsce nie zawiod??o. Na Karolin?? czeka?? przygotowany wcze??niej lawendowy wianek. Tego dnia fotografowa??y si?? dzieci, jedna para m??oda i nawet psiaki. Pole jest jednak niema??e i ka??dy znalaz?? tam swoje miejsce. Serdecznie zapraszam do ogl??dania zdj????, a przysz??e Pary M??ode na sesje ??lubne w lawendzie. Mi??ego ogl??dania."
                    }
                    slug={"lawendowe-pole-pod-krakowem-sesja-slubna-w-ostrowie"}
                    title={"LAWENDOWE POLE POD KRAKOWEM, SESJA ??LUBNA W OSTROWIE - KAROLINA i DAWID"}
                    tags={"lawendowe pole pod krakowem,sesja ??lubna krak??w"}
                    date={"26 czerwca 2017"}
                    menuNames={"KAROLINA i DAWID"}
                    menuTitle={"LAWENDOWE POLE POD KRAKOWEM, SESJA ??LUBNA W OSTROWIE"}
                    leadNames={"KAROLINA i DAWID"}
                    leadTitle={"DOM WESELNY POD KASZTANAMI IGO??OMIA"}
                    leadUrl={"/dom-weselny-pod-kasztanami-igolomia"}
                    leadImage={process.env.staticS3ImagesPath + "dom_weselny_pod_kasztanami_igolomia_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
