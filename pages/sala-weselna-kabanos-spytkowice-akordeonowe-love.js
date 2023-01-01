import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0001.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0003.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0005.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0009.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0011.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0013.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0014.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0015.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0033.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0017.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0018.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0020.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0022.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0025.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0016.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0030.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0035.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0048.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0047.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0036.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0037.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0038.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0034.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0042.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0044.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0046.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0051.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0052.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0055.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0056.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0057.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0062.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0068.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0069.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0072.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0080.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0088.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0091.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0093.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0094.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0095.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0096.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0099.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0100.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0106.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0112.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0114.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0115.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0116.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0117.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0118.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0120.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0121.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0122.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0124.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0127.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0128.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0130.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0131.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0134.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0136.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0140.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0143.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0147.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0151.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0152.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0153.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0154.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0155.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0150.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/11/sala_weselna_kabanos_spytkowice_0132.webp", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "przystan_kabanos_spytkowice.webp"}
                    images={images}
                    headTitle={"Sala weselna Kabanos Spytkowice, akordeonowe love"}
                    headDescription={
                        "Po kilku latach fotografowania ślubów w okolicach Łętowni, Krzczonowa, Spytkowic, Myślenic robiąc zdjęcia na ślubie w tych okolicach czuje się jak w domu. Totalnie ziomalski klimat na ślubie Amandy i Jacka. Zapraszam."
                    }
                    headKeywords={"fotograf na wesele Łętownia, sala weselna Spytkowice, zdjęcia ślubne Krzczonów"}
                    headUrl={"https://99foto.pl/sala-weselna-kabanos-spytkowice-akordeonowe-love"}
                    entryContentP1={
                        'Po kilku latach fotografowania ślubów w okolicach Łętowni, Krzczonowa, Pcimia, Tokarni, Spytkowic i Myślenic robiąc zdjęcia na ślubie w tamtych okolicach czuje się jak w domu. Totalnie ziomalski klimat gdzie każdy z uśmiechem przybija pione i nie schodzi z parkietu do białego rana. Przygotowania, na których nie ma czasu na grupówki bo tyle ciekawszych rzeczy dzieje się równocześnie. Otwartość ludzi, której współczynnik rośnie odwrotnie proporcjonalnie do odległości od szczytów górskich. Góralska mowa, która wkrada się do słownika gości weselnych często, bardzo często. Okoliczności do focenia level master. Ale do sedna. Dzień otworzyliśmy wizytą na makijażu w domowym studio wizażu <a href="https://www.facebook.com/madebymemakeup" target="_blank" rel="nofollow">Made by me Ewa Kobiałka</a>. Minka Amandy, która zebrała już żniwo na <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow">moim instagramie</a>, mówiła sama za siebie, było idealnie. Przygotowania Panny Młodej i Pana Młodego minęły błyskawicznie.'
                    }
                    entryContentP2={
                        'Jacek przyjechał Mustangiem, wygarnął kilka nut na akordeonie. Amanda była jego, nie było innej opcji. Błogosławieństwo pełne emocji i piękna ceremonia w <a href="http://letownia.katolicki.eu/" target="_blank" rel="nofollow">Kościele Świętych Apostołów Szymona i Judy Tadeusza w Łętowni</a>. Dwie nieszablonowe bramy po drodze wysprzątały baganiżnik Mustanga niemalże do zera. Tradycyjne przywitanie przez rodziców i szampanówki roztrzaskane na szczęście otworzyły wrota <a href="http://przystanwkabanosie.pl/" target="_blank" rel="nofollow">Restauracja Przystań w Kabanosie w Spytkowicach</a>. Amanda i Jacek zostali przywitani przez Gabrysię z <a href="http://www.somgorsy.pl/" target="_blank" rel="nofollow">Zespółu Muzycznego Somgorsy</a>, a ich pierwszy taniec w moment po gorących życzeniach i pysznym obiedzie otworzył parkiet. Muza na bardzo wysokim poziomie dopasowana do gustu gości dodała im skrzydeł. Sandra z <a href="https://www.facebook.com/psvideofoto/" target="_blank" rel="nofollow">PS Filmy w parze z fotografią</a> filmowała każdą sekundę dance floorowego szaleństwa z uśmiechem na ustach. Nikt nie wie kiedy to się stało, ale w pewnym momencie Gabrysia zarządziła oczepiny. Welon i krawat poszybowały w górę. Szalona zabawa w łapki na podłodze zakończyła konkurs na najbardziej wygimnastykowaną parę wesela. Dużo się działo. Zapraszam na zestaw zdjęć na żywca bez ustawek. Miłego oglądania.'
                    }
                    slug={"sala-weselna-kabanos-spytkowice-akordeonowe-love"}
                    title={"SALA WESELNA KABANOS SPYTKOWICE, AKORDEONOWE LOVE - AMANDA i JACEK"}
                    tags={"fotograf na wesele Łętownia, sala weselna Spytkowice, zdjęcia ślubne Krzczonów"}
                    date={"14 listopada 2019"}
                    menuNames={"AMANDA i JACEK"}
                    menuTitle={"SALA WESELNA KABANOS SPYTKOWICE, AKORDEONOWE LOVE"}
                    leadNames={"PATRYCJA i KRZYSZTOF"}
                    leadTitle={"DWOREK FANTAZJA SKOMIELNA BIAŁA i ŚLUB W STYLU GLAMOUR"}
                    leadUrl={"/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"}
                    leadImage={process.env.staticS3ImagesPath + "dworek_fantazja_skomielna_biala_fotograf.webp"}
                />
            
        );
};

export default BlogPageComponent;
