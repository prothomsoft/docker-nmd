import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0007.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0004.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0005.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0011.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0012.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0020.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0023.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0043.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0027.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0029.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0035.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0040.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0041.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0044.webp", height: 567 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0045.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0047.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0054.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0057.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0059.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0061.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0066.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0072.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0074.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0076.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0082.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0081.webp", height: 761 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0049.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0085.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0091.webp", height: 402 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0094.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0100.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0106.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0108.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0111.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0151.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0150.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0128.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0139.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0145.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0147.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0152.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "zielone_wzgorze_koniusza.webp"}
                    images={images}
                    headTitle={"Zielone Wzg??rze Koniusza, TAK w promieniach s??o??ca"}
                    headDescription={"Zielone Wzg??rze Koniusza, fotograf ??lubny Proszowice. TAK w promieniach s??o??ca, garbus i du??o kwiat??w na ??lubie Karoliny i Mateusza. Zapraszam do ogl??dania."}
                    headKeywords={"Zielone Wzg??rze Koniusza, fotograf ??lubny Proszowice, garbus do ??lubu"}
                    headUrl={"https://99foto.pl/zielone-wzgorze-koniusza-tak-w-promieniach-slonca"}
                    entryContentP1={
                        'We wrze??niu 2016 roku, czyli dwa lata temu na przygotowaniach do <a href="https://99foto.pl/natalia-marcin-i-maja-reportaz-slubny-gosciniec-branicki/" target="_blank" rel="nofollow">??lubu Natalii i Marcina</a>, kt??ry mo??na ogl??dn???? na moim blogu, pozna??em Karolin??. Nie jestem do ko??ca pewien czy dobrze zaobserwowa??em, ale w??a??nie wtedy pod Ko??cio??em na Wzg??rzach Krzes??awickich Karolina przedstawia??a znajomym swojego nowego ch??opaka Mateusza. No iskrzy??o mi??dzy nimi i po dw??ch latach spotkali??my si?? ponownie po to by postawi?? kropk?? nad i. Dzie?? rozpocz??li??my od przygotowa?? Karoliny w <a href="https://www.facebook.com/pages/category/Beauty-Salon/Odpicuj-Si%C4%99-322995571499190/" target="_blank" rel="nofollow">Studio Odpicuj si??</a>. Profesjonalny makija?? wykona??a <a href="https://aleksandra-szczepanek.com.pl/" target="_blank" rel="nofollow">Aleksandra Szczepanek</a>. Nast??pnie nie zwa??aj??c na utrudnienia w ruchu zwi??zane z odbywaj??cym si?? w Krakowie maratonem, przebili??my si?? do Nowej Huty, dok??adniej na Osiedle Kalinowe w celu uwiecznienia przygotowa?? Mateusza. Pisz?? w liczbie mnogiej poniewa?? od samego rana biegali??my fotografuj??c i filmuj??c z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">Krzy??kiem z CAMDESIGN</a>, kt??rego bardzo polecam wszystkim przysz??ym nowo??e??com. By??o tak jak lubi??, dzia??o si?? du??o i mo??na by??o darowa?? sobie ustawki skupiaj??c si?? na fajnych momentach. Przygotowania u Karoliny przebieg??y w rodzinnej atmosferze. Dom wype??nia??y ??miechy bawi??cych si?? dzieciak??w i nutka napi??cia budowanego zbli??aj??cym si?? przybyciem Mateusza.'
                    }
                    entryContentP2={
                        'First look, wpinanie butonierek, b??ogos??awie??stwo rodzic??w i ubrany w przepi??kne kwiaty Garbus odtransportowa?? Par?? M??od?? do <a href="https://parafia.kalinowe.pl/" target="_blank" rel="nofollow">Ko??ci????a ??w. J??zefa Oblubie??ca Naj??wi??tszej Maryi Panny w Krakowie</a>. Troch?? ju?? tych ??lub??w mam na swoim koncie, ale w takiej ceremonii mia??em okazj?? uczestniczy?? po raz pierwszy. Ksi??dz by?? gospodarzem przez du??e gie. Ju?? na pocz??tku poprzesadza?? go??ci do przednich ??awek, poprosi?? aparaciarzy by oszcz??dzali nogi podczas kazania, przez blisko p???? godziny pr??bowa?? bezskutecznie zrozumie?? natur?? kobiety, by na sam koniec zaprosi?? wszystkich go??ci do przodu by napewno nie przegapili chwili, w kt??rej obr??czki trafi?? na swoje miejsce. No i co, by??y ??zy, poca??unki, pe??no emocji. Po wyj??ciu z ko??cio??a przywita??a nas polska z??ota jesie??. Wykorzystuj??c te nieziemskie warunki zrobili??my zdj??cie grupowe i ruszyli??my w stron?? Proszowic do <a href="https://www.salazielonewzgorze.pl/" target="_blank" rel="nofollow">Sali Weselnej Zielone Wzg??rze w miejscowo??ci Koniusza</a>. Na parkiecie go??ci przywita?? Artur z <a href="https://artmuz.krakow.pl/" target="_blank" rel="nofollow">Zesp????u Muzycznego ART MUZ</a>. Para M??oda zata??czy??a pierwszy taniec, pokroi??a torta i zaprosi??a go??ci weselnych do wsp??lnej zabawy na parkiecie. Artur kr??ci?? zabaw?? na poziomie jako frontment niemal??e zwisaj??c ze sceny. Pewnie gdyby szuka?? pracy na etacie to stacja telewizyjna TVN przygarn????aby go jego talent ju?? po pierwszym interview. By??a te?? fotobudka, litery LOVE i du??o pysznych rzeczy na z??b. Dzi??ki, ??e mog??em sfotografowa?? Wasz ??lub. By??o tak jak si?? spodziewa??em emocjonalnie i energetycznie. Zapraszam na wybrane zdj??cia, a po wi??cej do strefy klienta.'
                    }
                    slug={"zielone-wzgorze-koniusza-tak-w-promieniach-slonca"}
                    title={"ZIELONE WZG??RZE KONIUSZA, TAK W PROMIENIACH S??O??CA - KAROLINA i MATEUSZ"}
                    tags={"Zielone Wzg??rze Koniusza, fotograf ??lubny Proszowice, garbus do ??lubu"}
                    date={"23 pa??dziernika 2018"}
                    menuNames={"KAROLINA i MATEUSZ"}
                    menuTitle={"ZIELONE WZG??RZE KONIUSZA, TAK W PROMIENIACH S??O??CA"}
                    leadNames={"IZABELA i ARKADIUSZ"}
                    leadTitle={"SESJA ??LUBNA JESIENI?? - PA??AC GOETZ??W OKOCIMSKICH"}
                    leadUrl={"/sesja-slubna-jesienia-palac-goetzow-okocimskich"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_slubna_jesienia.webp"}
                />
            
        );
};

export default BlogPageComponent;
