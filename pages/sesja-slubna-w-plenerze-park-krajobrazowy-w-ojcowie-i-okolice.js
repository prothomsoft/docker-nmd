import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0003.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0005.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0006.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0009.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0011.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0014.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0012.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0021.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0016.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0018.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0020.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0022.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0023.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/sesja_zdjeciowa_ojcow_0008.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_slubna_w_plenerze_park_krajobrazowy_w_ojcowie_i_okolice_start.webp"}
                    images={images}
                    headTitle={"Sesja ślubna w plenerze Kraków"}
                    headDescription={"Park krajobrazowy w Ojcowie i okolice to świetne miejsce na sesję ślubną w plenerze. Sesja ślubna w plenerze musi się tam udać. Zapraszam na bloga."}
                    headKeywords={"sesja ślubna w plenerze,zamek pieskowa skała,park krajobrazowy w ojcowie"}
                    headUrl={"https://99foto.pl/sesja-slubna-w-plenerze-park-krajobrazowy-w-ojcowie-i-okolice"}
                    entryContentP1={
                        'Sesja ślubna w plenerze to zwykle poszukiwanie trzech składowych chwili, światła i kadru. Każda para młoda musi sobie odpowiedzieć na pytanie, czy warto jechać pół dnia do innego miasta, żeby zrobić sesję zdjęciową. Może warto ten czas wykorzystać inaczej i zdecydować się na sesję w Krakowie. Zdecydowanie inaczej jest gdy chcecie mieć góry w tle, wtedy rzeczywiście warto się zastanowić nad wyjazdem. W ubiegłym tygodniu razem z Olą i Pawłem polowaliśmy na odpowiedni moment w <a href="https://korzkiew.pl/" target="_blank" rel="nofollow">Zamku Korzkiew</a> i w <a href="https://ojcowskiparknarodowy.pl/" target="_blank" rel="nofollow">Parku Krajobrazowym w Ojcowie</a>.'
                    }
                    entryContentP2={
                        'Dzień był mega słoneczny i pomimo, że mamy już początek września udało nam się świetnie trafić na zachodzące słońce. Taki był plan, który udało się zrealizować. <a href="https://pieskowaskala.eu/" target="_blank" rel="nofollow">Pieskowa Skała</a> jest świetnym miejscem ponieważ można tam wychodzić, wyżej i wyżej za każdym razem oszukując czas i oglądając słońce z trochę innej perspektywy. Zobaczcie sami. Zapraszam na zdjęcia.'
                    }
                    slug={"sesja-slubna-w-plenerze-park-krajobrazowy-w-ojcowie-i-okolice"}
                    title={"SESJA ŚLUBNA W PLENERZE, PARK KRAJOBRAZOWY OJCÓW - OLA i PAWEŁ"}
                    tags={"Park Krajobrazowy w Ojcowie, Sesja ślubna w plenerze, Zamek Pieskowa Skała"}
                    date={"4 września 2017"}
                    menuNames={"OLA i PAWEŁ"}
                    menuTitle={"SESJA ŚLUBNA W PLENERZE, PARK KRAJOBRAZOWY OJCÓW"}
                    leadNames={"OLA i PAWEŁ"}
                    leadTitle={"DWÓR SZLACHECKI SIECIECHOWICE, REPORTAŻ ŚLUBNY MIECHÓW"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={process.env.staticS3ImagesPath + "dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
