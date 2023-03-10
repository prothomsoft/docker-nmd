import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0004.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0007.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0008.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0010.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0013.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0016.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0020.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0019.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0023.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0026.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0028.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0030.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0033.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0034.webp", height: 766 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0036.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0038.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0039.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0047.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0053.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0057.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0059.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_kalwaria_zebrzydowska_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0066.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0067.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0069.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0071.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0072.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0077.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0084.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0086.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0089.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0090.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0095.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0099.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0101.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0106.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0108.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0112.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0114.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0117.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0120.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0126.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0128.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0130.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0133.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0136.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0147.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0149.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0150.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0151.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0153.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0152.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0154.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0156.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0155.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0157.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0158.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0159.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0160.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0161.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0168.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0162.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0163.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0165.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0164.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0166.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_kalwaria_zebrzydowska_0167.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice-start.webp"}
                    images={images}
                    headTitle={"Fotograf ??lubny Kalwaria Zebrzydowska, Arkadia Wadowice"}
                    headDescription={
                        "Czy widzieli??cie kiedy?? ponad sto wype??nionych helem, ??wiec??cych ledowych serduchowych balonik??w wystrzelonych w kosmos kilka minut po p????nocy? Je??eli nie to zapraszam do wklikni??cia w reporta?? ze ??lubu Magdy i Piotrka. Mi??ego ogl??dania."
                    }
                    headKeywords={"Fotograf ??lubny Kalwaria Zebrzydowska, Arkadia Wadowice"}
                    headUrl={"https://99foto.pl/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice"}
                    entryContentP1={
                        'S??oneczny dzie??, mn??stwo zieleni i powietrze o jakim mieszka??cy Krakowa mog?? tyko pomarzy??. Drugi raz w tym sezonie ??lubnym odwiedzi??em Lanckoron??. Tym razem w pierwszej kolejno??ci uda??em si?? na odnaleziony poprzednim razem punkt widokowy po zdj??cie kontekstowe, a nast??pnie uda??em si?? prosto na przygotowania do Sylwestra. Ubranie ??lubnego garnituru, spinek i muchy trwa??o kilka chwil podczas kt??rych asystowa?? Adrian. Wyszli??my jeszcze do ogrodu ogarn???? portret Pana M??odego i chwil?? p????niej by??em w drodze do Kalwarii Zebrzydowskiej gdzie swoje przygotowania rozpocz????a ju?? Dajana. Wykonanie perfekcyjnego makija??u by??o dla niej zadaniem ??atwym, poniewa?? na co dzie?? profesjonalnie zajmuj?? si?? wiza??em, dzia??aj??c pod mark?? <a href="https://www.facebook.com/dajanasajdakmakeup/" target="_blank" rel="nofollow">Dajana Sajdak Make Up</a>. W ubieraniu sukni ??lubnej i bi??uterii pomaga??a mama Dajany. Du??o pozytywnej energii sp??yn????o od Krzy??ka i Tomka z <a href="https://www.tokksa.pl/" target="_blank" rel="nofollow">TOKKSA - Insired by your life</a>, kt??rzy dokumentowali przebieg przygotowa??, ceremoni i zabawy weselnej. W ko??cu czas oczekiwania dobieg?? ko??ca i przed drzwiami zjawi?? si?? Sylwester. Gor??cy buziak na powitanie, pe??ne emocji b??ogos??awie??stwo i wsp??lnie udali??my si?? do <a href="https://www.kalwaria.diecezja.krakow.pl/" target="_blank" rel="nofollow">Ko??cio??a pw. ??w. J??zefa</a> w Kalwarii Zebrzydowskiej. Oczekuj??c na przyjazd Pary M??odej mia??em przyjemno???? spotka?? Ani?? i Micha??a, kt??rych ??lub fotografowa??em w ubieg??ym roku. Bocian, kt??ry kr????y?? podczas ich ??lubu w trakcie sk??adania ??ycze?? adresu nie pomyli?? i do pi????set plus zosta?? im ju?? nie dwa, a tylko jeden krok.'
                    }
                    entryContentP2={
                        'Fotografowanie Dajany i Sylwestra podczas ceremoni za??lubin by??y czyst?? przyjemno??ci??. Spok??j i koncentracja, b??ysk szcz????cia w oku i niezwyk??a rado???? tu?? po wypowiedzianym sakramentalnym TAK. Kolejne minuty tego pe??nego wra??e?? dnia sp??dzili??my w Domu Weselnym <a href="https://www.arkadia-wadowice.pl/glowna.html" target="_blank" rel="nofollow">Arkadia Wadowice</a>. Rodzice przywitali Par?? M??od??, a po ??yczeniach pierwszy taniec otworzy?? parkiet. <a href="https://www.facebook.com/TangoLuz" target="_blank" rel="nofollow">Zesp???? Tango Luz z Chrzanowa</a>, kt??ry nie pozwala?? go??ciom posiedzie?? na miejscu, serwowa?? pere??ki repertuaru weselnego, momentami si??gaj??c po numery gwiazd polskiego rocka. Oczywi??cie nie zabrak??o atrakcji, takich jak tort weselny, podzi??kowania dla rodzic??w, podczas kt??rych pola??y si?? ??zy, poci??g i tradycyjne oczepiny. Grubo po p????nocy muzycy oddali instrumenty i koncertowy popis zaserwowali sami Pa??stwo M??odzi, pod scen?? by??o naprawd?? gor??co. Pewnie powsta??oby kilka paragraf??w tekstu wi??cej gdybym chcia?? opisa?? wszystko to, co dzia??o si?? podczas tego pe??nego wra??e?? dnia. Ale wiecie co, ??atwiej b??dzie jak zerkniecie na zdj??cia i zobaczycie co si?? dzia??o na w??asne oczy. Tradycyjnie wi??cej zdj???? odnajdziecie w strefie klienta, korzystaj??c z has??a z mojej wizyt??wki. Mi??ego ogl??dania.'
                    }
                    slug={"fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice"}
                    title={"FOTOGRAF ??LUBNY WADOWICE, SALA WESELNA ARKADIA - DAJANA i SYLWESTER"}
                    tags={"Fotograf ??lubny Kalwaria Zebrzydowska, Arkadia Wadowice"}
                    date={"10 czerwca 2018"}
                    menuNames={"DAJANA i SYLWESTER"}
                    menuTitle={"FOTOGRAF ??LUBNY WADOWICE, SALA WESELNA ARKADIA"}
                    leadNames={"MAGDALENA i PIOTR"}
                    leadTitle={"REPORTA?? ??LUBNY HOTEL JUNIOR KRAK??W, BALONOWY SZA??"}
                    leadUrl={"/reportaz-slubny-hotel-junior-krakow-balonowy-szal"}
                    leadImage={process.env.staticS3ImagesPath + "reportaz-slubny-hotel-junior-krakow-balonowy-szal-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
