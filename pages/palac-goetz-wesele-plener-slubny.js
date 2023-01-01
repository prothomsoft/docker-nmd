import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
    let images = [
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_001.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_002.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_003.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_020.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_012.webp", height: 851 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_008.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_016.webp", height: 805 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_006.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_024.webp", height: 594 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_011.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_014.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_017.webp", height: 526 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_018.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_015.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_023.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_009.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_022.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_005.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_004.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_007.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_013.webp", height: 762 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_021.webp", height: 527 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_019.webp", height: 762 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/03/palac_goetz_sesja_slubna_010.webp", height: 763 },
    ];

    return (
        <BlogPageComponentNew
            slide={process.env.staticS3ImagesPath + "sesja_slubna_palac_goetza.webp"}
            images={images}
            headTitle={"Pałac Goetz, miejsce na wesele i plener ślubny marzeń"}
            headDescription={"Zapraszam Was do Brzeska. Pałac Goetz, miejsce na eleganckie wesele i plener ślubny marzeń. Serdecznie zapraszam na bloga..."}
            headKeywords={"Pałac Goetz Brzesko, eleganckie wesele w pałacu, plener ślubny marzeń"}
            headUrl={"https://99foto.pl/palac-goetz-wesele-plener-slubny"}
            entryContentP1={
                "Zapraszam Was do Brzeska. Pałac Goetz to miejsce niecodzienne i idealne na plener ślubny. Nie wiem czy filantrop i mecenas sztuki Albin Goetz planował, że wzniesiony przez niego okazały pałac w przyszłości będzie pełnił rolę liceum ogólnokształcącego, doprowadzony do ruiny przetrwa trudne czasy i w końcu odzyska dawny blask, stając się miejscem idealnym na wesele czy plener ślubny. Jest to bez wątpienie jedno z najbardziej popularnych miejsc plenerowych w Małopolsce. Koszt związany z możliwością wykonania zdjęć ślubnych w pałacu gwarantuje względny spokój tego miejsca. Gdyby nie to kolejka chętnych do zdjęć par młodych i towarzyszących im fotografów ślubnych byłaby nie krótsza od tej na Kasprowy Wierch w Zakopanem."
            }
            entryContentP2={
                "Pałac Goetz jest miejscem niezwykłym. Znajdziemy tam nie tylko monumentalne schody, ale też wytworną czytelnię wykorzystywaną w produkcjach filmowych, przepiękny ogród i kaplicę, w której każdego roku kilka par młodych przyrzeka sobie miłość na zawsze. Sesja ślubna, którą za moment obejrzycie spełnia marzenia Anny i Pawła. Przeglądając internet trafili oni na mojego bloga i jeden z wpisów o sesji ślubnej w Pałacu Goetz. Pomimo, że nie fotografowałem ich ślubu blogowe zdjęcia podpowiedziały im, że dam radę i zatrzymamy czas na ponadczasowych fotografiach. Serdecznie zapraszam na kilka zdjęć z tego pleneru i jak zwykle życzę miłego oglądania."
            }
            slug={"palac-goetz-wesele-plener-slubny"}
            title={"PAŁAC GOETZ MIEJSCE NA WESELE i PLENER ŚLUBNY MARZEŃ - ANNA i PAWEŁ"}
            tags={"Pałac Goetz Brzesko, eleganckie wesele w pałacu, plener ślubny marzeń"}
            date={"14 marca 2021"}
            menuNames={"ANNA i PAWEŁ"}
            menuTitle={"PAŁAC GOETZ MIEJSCE NA WESELE i PLENER ŚLUBNY MARZEŃ"}
            leadNames={"TERESA i ANDRZEJ"}
            leadTitle={"PLENER ŚLUBNY W KRAKOWSKIM OGRODZIE BOTANICZNYM"}
            leadUrl={"/plener-slubny-w-krakowskim-ogrodzie-botanicznym"}
            leadImage={process.env.staticS3ImagesPath + "plener_slubny_krakowski_ogrod_botaniczny.webp"}
        />
    );
};

export default BlogPageComponent;
