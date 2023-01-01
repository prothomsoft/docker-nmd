import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2017/07/wakacje_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0001.webp", height: 527 },
            { imageSrc: "/static/blog/2017/07/wakacje_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0011.webp", height: 805 },
            { imageSrc: "/static/blog/2017/07/wakacje_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0009.webp", height: 472 },
            { imageSrc: "/static/blog/2017/07/wakacje_0013.webp", height: 383 },
            { imageSrc: "/static/blog/2017/07/wakacje_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0024.webp", height: 806 },
            { imageSrc: "/static/blog/2017/07/wakacje_0057.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0027.webp", height: 527 },
            { imageSrc: "/static/blog/2017/07/wakacje_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0048.webp", height: 382 },
            { imageSrc: "/static/blog/2017/07/wakacje_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0055.webp", height: 850 },
            { imageSrc: "/static/blog/2017/07/wakacje_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0042.webp", height: 527 },
            { imageSrc: "/static/blog/2017/07/wakacje_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0053.webp", height: 526 },
            { imageSrc: "/static/blog/2017/07/wakacje_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0046.webp", height: 805 },
            { imageSrc: "/static/blog/2017/07/wakacje_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0050.webp", height: 526 },
            { imageSrc: "/static/blog/2017/07/wakacje_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0049.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "wakacyjny_test_obiektywu_sigma_50_1_4_art_start.webp"}
                    images={images}
                    headTitle={"Test obiektywu Sigma 50 1.4 ART"}
                    headDescription={"Tym razem zupełnie nie ślubnie. Kilka zdjęć z naszych wakacji i testy obiektywu Sigma 50 1.4 ART. Zapraszam na bloga i życzę miłego oglądania."}
                    headKeywords={"test obiektywu sigma 50 1.4 art,sesja zdjęciowa kraków"}
                    headUrl={"https://99foto.pl/wakacyjny-test-obiektywu-sigma-50-1-4-art"}
                    entryContentP1={
                        "Tym razem zupełnie nie ślubnie. Kilka zdjęć z wakacji, które razem z moim bratem i jego rodziną spędziliśmy w Miszkolcu, Nyiregyhazie, a w drodze powrotnej odwiedzając Tatrzańską Łomnicę. Wakacje to dobry moment, żeby przetestować nowy obiektyw, sprawdzić czy dobrze ostrzy i będzie ok mówiąc krótko na ślubach. Tak się też stało również tym razem. Zabrałem ze sobą Sigmę 50 1.4 ART z filtrem polaryzacyjnym Marumi DHG Super. Większość zdjęć jest zrobiona tym obiektywem, który jak można odnaleźć w internecie jest najlepszą pięćdziesiątką na rynku."
                    }
                    entryContentP2={
                        "Szersze kadry to Nikkor AF-S 28 mm f/1.8G, którego jeszcze nie zamieniłem na Sigmę 35 1.4 ART, ale myślę, że jest to kwestia najbliższych miesięcy. Testowałem też obudowę na lustrzankę do zdjęć podwodnych. Ogólnie warto mieć takie coś w przypadku wypraw na zdjęcia do Parków Wodnych, no i może kiedyś na sesji zdjęciowej w górach się przyda. Miłego oglądania."
                    }
                    slug={"wakacyjny-test-obiektywu-sigma-50-1-4-art"}
                    title={"WAKACYJNY TEST OBIEKTYWU SIGMA 50 1.4 ART - MARTUSIA i MICHAŚ"}
                    tags={"test obiektywu sigma 50 1.4 art,sesja zdjęciowa kraków"}
                    date={"23 lipca 2017"}
                    menuNames={"MARTUSIA i MICHAŚ"}
                    menuTitle={"WAKACYJNY TEST OBIEKTYWU SIGMA 50 1.4 ART"}
                    leadNames={"EWELINA i KAMIL"}
                    leadTitle={"HOTEL QUBUS KRAKÓW SESJA ZDJĘCIOWA"}
                    leadUrl={"/hotel-qubus-krakow-sesja-zdjeciowa"}
                    leadImage={process.env.staticImagesPath + "hotel_qubus_krakow_sesja_zdjeciowa_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
