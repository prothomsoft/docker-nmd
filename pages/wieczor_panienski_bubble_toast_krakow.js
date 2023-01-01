import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0003.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0005.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0007.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0009.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0011.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0014.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0018.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0019.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0020.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0021.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0024.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0029.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0034.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0036.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0042.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0049.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0050.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0056.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0065.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/02/wieczor_panienski_martyna_0071.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "wieczor_panienski_bubble_toast_krakow.webp"}
                    images={images}
                    headTitle={"Wieczór panieński Bubble Toast Kraków"}
                    headDescription={
                        "Wieczór panieński Martyny. Zapraszam na zdjęcia."
                    }
                    headKeywords={"Wieczór panieński Bubble Toast Kraków"}
                    headUrl={"https://99foto.pl/wieczor_panienski_bubble_toast_krakow"}
                    entryContentP1={
                        "Zapraszam na kilka zdjęć z wieczoru panieńskiego Martyny. Kulki w Bubble Toast na Placu Szczepańskim w Krakowie i małe conieco w Restauracji Boccanera. Miłego oglądania."
                    }
                    entryContentP2={""}
                    slug={"wieczor_panienski_bubble_toast_krakow"}
                    title={"WIECZÓR PANIEŃSKI MARTYNY - BUBBLE TOAST KRAKÓW, RESTAURACJA BOCCANERA"}
                    tags={"Wieczór panieński Bubble Toast Kraków"}
                    date={"03 luty 2020"}
                    menuNames={"WIECZÓR PANIEŃSKI MARTYNY"}
                    menuTitle={"BUBBLE TOAST KRAKÓW, RESTAURACJA BOCCANERA"}
                    leadNames={"ANNA i PIOTR"}
                    leadTitle={"BAZYLIKA BOŻEGO CIAŁA KRAKÓW, FOTOREPORTAŻ ŚLUBNY"}
                    leadUrl={"/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"}
                    leadImage={process.env.staticS3ImagesPath + "bazylika-bozego-ciala-krakow-fotoreportaz-slubny.webp"}
                />
            
        );
};

export default BlogPageComponent;
