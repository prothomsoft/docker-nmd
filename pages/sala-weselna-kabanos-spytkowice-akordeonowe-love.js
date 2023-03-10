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
                        "Po kilku latach fotografowania ??lub??w w okolicach ????towni, Krzczonowa, Spytkowic, My??lenic robi??c zdj??cia na ??lubie w tych okolicach czuje si?? jak w domu. Totalnie ziomalski klimat na ??lubie Amandy i Jacka. Zapraszam."
                    }
                    headKeywords={"fotograf na wesele ????townia, sala weselna Spytkowice, zdj??cia ??lubne Krzczon??w"}
                    headUrl={"https://99foto.pl/sala-weselna-kabanos-spytkowice-akordeonowe-love"}
                    entryContentP1={
                        'Po kilku latach fotografowania ??lub??w w okolicach ????towni, Krzczonowa, Pcimia, Tokarni, Spytkowic i My??lenic robi??c zdj??cia na ??lubie w tamtych okolicach czuje si?? jak w domu. Totalnie ziomalski klimat gdzie ka??dy z u??miechem przybija pione i nie schodzi z parkietu do bia??ego rana. Przygotowania, na kt??rych nie ma czasu na grup??wki bo tyle ciekawszych rzeczy dzieje si?? r??wnocze??nie. Otwarto???? ludzi, kt??rej wsp????czynnik ro??nie odwrotnie proporcjonalnie do odleg??o??ci od szczyt??w g??rskich. G??ralska mowa, kt??ra wkrada si?? do s??ownika go??ci weselnych cz??sto, bardzo cz??sto. Okoliczno??ci do focenia level master. Ale do sedna. Dzie?? otworzyli??my wizyt?? na makija??u w domowym studio wiza??u <a href="https://www.facebook.com/madebymemakeup" target="_blank" rel="nofollow">Made by me Ewa Kobia??ka</a>. Minka Amandy, kt??ra zebra??a ju?? ??niwo na <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow">moim instagramie</a>, m??wi??a sama za siebie, by??o idealnie. Przygotowania Panny M??odej i Pana M??odego min????y b??yskawicznie.'
                    }
                    entryContentP2={
                        'Jacek przyjecha?? Mustangiem, wygarn???? kilka nut na akordeonie. Amanda by??a jego, nie by??o innej opcji. B??ogos??awie??stwo pe??ne emocji i pi??kna ceremonia w <a href="http://letownia.katolicki.eu/" target="_blank" rel="nofollow">Ko??ciele ??wi??tych Aposto????w Szymona i Judy Tadeusza w ????towni</a>. Dwie nieszablonowe bramy po drodze wysprz??ta??y bagani??nik Mustanga niemal??e do zera. Tradycyjne przywitanie przez rodzic??w i szampan??wki roztrzaskane na szcz????cie otworzy??y wrota <a href="http://przystanwkabanosie.pl/" target="_blank" rel="nofollow">Restauracja Przysta?? w Kabanosie w Spytkowicach</a>. Amanda i Jacek zostali przywitani przez Gabrysi?? z <a href="http://www.somgorsy.pl/" target="_blank" rel="nofollow">Zesp????u Muzycznego Somgorsy</a>, a ich pierwszy taniec w moment po gor??cych ??yczeniach i pysznym obiedzie otworzy?? parkiet. Muza na bardzo wysokim poziomie dopasowana do gustu go??ci doda??a im skrzyde??. Sandra z <a href="https://www.facebook.com/psvideofoto/" target="_blank" rel="nofollow">PS Filmy w parze z fotografi??</a> filmowa??a ka??d?? sekund?? dance floorowego szale??stwa z u??miechem na ustach. Nikt nie wie kiedy to si?? sta??o, ale w pewnym momencie Gabrysia zarz??dzi??a oczepiny. Welon i krawat poszybowa??y w g??r??. Szalona zabawa w ??apki na pod??odze zako??czy??a konkurs na najbardziej wygimnastykowan?? par?? wesela. Du??o si?? dzia??o. Zapraszam na zestaw zdj???? na ??ywca bez ustawek. Mi??ego ogl??dania.'
                    }
                    slug={"sala-weselna-kabanos-spytkowice-akordeonowe-love"}
                    title={"SALA WESELNA KABANOS SPYTKOWICE, AKORDEONOWE LOVE - AMANDA i JACEK"}
                    tags={"fotograf na wesele ????townia, sala weselna Spytkowice, zdj??cia ??lubne Krzczon??w"}
                    date={"14 listopada 2019"}
                    menuNames={"AMANDA i JACEK"}
                    menuTitle={"SALA WESELNA KABANOS SPYTKOWICE, AKORDEONOWE LOVE"}
                    leadNames={"PATRYCJA i KRZYSZTOF"}
                    leadTitle={"DWOREK FANTAZJA SKOMIELNA BIA??A i ??LUB W STYLU GLAMOUR"}
                    leadUrl={"/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"}
                    leadImage={process.env.staticS3ImagesPath + "dworek_fantazja_skomielna_biala_fotograf.webp"}
                />
            
        );
};

export default BlogPageComponent;
