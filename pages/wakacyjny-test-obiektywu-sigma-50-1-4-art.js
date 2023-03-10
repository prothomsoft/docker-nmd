import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0001.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0011.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0009.webp", height: 472 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0013.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0024.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0027.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0048.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0055.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0042.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0053.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0046.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0050.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/wakacje_0049.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "wakacyjny_test_obiektywu_sigma_50_1_4_art_start.webp"}
                    images={images}
                    headTitle={"Test obiektywu Sigma 50 1.4 ART"}
                    headDescription={"Tym razem zupe??nie nie ??lubnie. Kilka zdj???? z naszych wakacji i testy obiektywu Sigma 50 1.4 ART. Zapraszam na bloga i ??ycz?? mi??ego ogl??dania."}
                    headKeywords={"test obiektywu sigma 50 1.4 art,sesja zdj??ciowa krak??w"}
                    headUrl={"https://99foto.pl/wakacyjny-test-obiektywu-sigma-50-1-4-art"}
                    entryContentP1={
                        "Tym razem zupe??nie nie ??lubnie. Kilka zdj???? z wakacji, kt??re razem z moim bratem i jego rodzin?? sp??dzili??my w Miszkolcu, Nyiregyhazie, a w drodze powrotnej odwiedzaj??c Tatrza??sk?? ??omnic??. Wakacje to dobry moment, ??eby przetestowa?? nowy obiektyw, sprawdzi?? czy dobrze ostrzy i b??dzie ok m??wi??c kr??tko na ??lubach. Tak si?? te?? sta??o r??wnie?? tym razem. Zabra??em ze sob?? Sigm?? 50 1.4 ART z filtrem polaryzacyjnym Marumi DHG Super. Wi??kszo???? zdj???? jest zrobiona tym obiektywem, kt??ry jak mo??na odnale???? w internecie jest najlepsz?? pi????dziesi??tk?? na rynku."
                    }
                    entryContentP2={
                        "Szersze kadry to Nikkor AF-S 28 mm f/1.8G, kt??rego jeszcze nie zamieni??em na Sigm?? 35 1.4 ART, ale my??l??, ??e jest to kwestia najbli??szych miesi??cy. Testowa??em te?? obudow?? na lustrzank?? do zdj???? podwodnych. Og??lnie warto mie?? takie co?? w przypadku wypraw na zdj??cia do Park??w Wodnych, no i mo??e kiedy?? na sesji zdj??ciowej w g??rach si?? przyda. Mi??ego ogl??dania."
                    }
                    slug={"wakacyjny-test-obiektywu-sigma-50-1-4-art"}
                    title={"WAKACYJNY TEST OBIEKTYWU SIGMA 50 1.4 ART - MARTUSIA i MICHA??"}
                    tags={"test obiektywu sigma 50 1.4 art,sesja zdj??ciowa krak??w"}
                    date={"23 lipca 2017"}
                    menuNames={"MARTUSIA i MICHA??"}
                    menuTitle={"WAKACYJNY TEST OBIEKTYWU SIGMA 50 1.4 ART"}
                    leadNames={"EWELINA i KAMIL"}
                    leadTitle={"HOTEL QUBUS KRAK??W SESJA ZDJ??CIOWA"}
                    leadUrl={"/hotel-qubus-krakow-sesja-zdjeciowa"}
                    leadImage={process.env.staticS3ImagesPath + "hotel_qubus_krakow_sesja_zdjeciowa_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
