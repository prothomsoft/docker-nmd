import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0003.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0002.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0008.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0012.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0020.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0021.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0023.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0024.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0025.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0027.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0028.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0032.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0035.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0033.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0037.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0038.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0040.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0042.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0045.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0049.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0050.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0052.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0054.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0055.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0057.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0059.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0060.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0061.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0063.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0068.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0069.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0082.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0084.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0089.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0091.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0108.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0112.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0111.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0114.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0116.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0120.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0122.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0123.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0124.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0125.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0129.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0131.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0135.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0128.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0140.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0142.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0145.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0147.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0149.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0150.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0153.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0151.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0152.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0154.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0155.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0156.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0157.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0158.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0159.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0160.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0161.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0162.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0163.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0164.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0165.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0166.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0167.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0168.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0169.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0170.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0171.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0172.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0173.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0174.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0175.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0176.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0177.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0178.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0182.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0181.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0179.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0183.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0184.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0185.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0186.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0187.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0180.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0188.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0189.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0190.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/01/fotograf_slubny_dobczyce_0191.webp", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "fotograf_slubny_dobczyce.webp"}
                    images={images}
                    headTitle={"Sala Wesela Alexia Ochojno, fotograf na wesele Dobczyce"}
                    headDescription={
                        "Zimowy ??lub w nowoczesnej sali weselnej Alexia Ochojno. Autentyczne emocje, zdj??cia ??ywe, pe??ne ekspresji i mi??o??ci. Historia dnia ??lubu Eweliny i Jakuba opowiedziana seri?? fotografii. Serdecznie zapraszam."
                    }
                    headKeywords={"alexia ochojno, nowoczesna sala weselna, ??lub w mogilanach, fotograf na wesele dobczyce"}
                    headUrl={"https://99foto.pl/sala-weselna-alexia-ochojno-emocje-i-swietna-zabawa"}
                    entryContentP1={
                        "Pomy??lcie czy w Waszych g??owach s??owo zima pasuje do s??owa ??lub. Buduj??c nasze wyobra??enia, bazuj??c na tym co znamy i do??wiadczyli??my wielu z nas mo??e doj???? do wniosku, ??e te dwa s??owa nie do ko??ca id?? ze sob?? w parze. Pod????aj??c za trendami w bran??y ??lubnej i fotografuj??c ??luby nie trudno jednak zauwa??y??, ??e coraz wi??cej par decyduje si?? na organizacje przyj???? weselnych w??a??nie zim?? uwa??aj??c, ??e zima to idealna pora roku na tego typu imprez??. Styczniowy ??lub Eweliny i Jakuba to dla mnie ??wietne otwarcie nowego sezonu fotograficznego, a wpis na blogu to znakomita okazja na przypomnienie Wam o mnie i moich zdj??ciach.                         Prawd?? m??wi??c im wi??cej fotografuj?? zimowych przyj???? weselnych tym wi??cej plus??w zwi??zanych z ich organizacj?? zauwa??am. Krak??w wiadomo, ??niegu tu jak na lekarstwo, ale kilka kilometr??w na p????noc, lekki mrozik i problem poszukiwaczy ??niegu wydaje si?? by?? rozwi??zanym. Recepta na udany ??lub to troch?? s??o??ca, pi??kny Ko??ci???? przybrany setkami lampek choinkowych przypominaj??cych nam o minionych ??wi??tach, nowoczesna sala weselna i oczywi??cie go??cie weselni, dla kt??rych przyj??cie ??lubne to najlepsza okazja by dobrze i aktywnie sp??dzi?? d??ugi zimowy wiecz??r. Tego dnia zimowy nastr??j subtelnie wpisa?? si?? w scenariusz dnia ??lubu Eweliny i Jakuba."
                    }
                    entryContentP2={
                        'Przygotowania rozpocze??y si?? w My??lenicach w <a href="https://www.facebook.com/Akademia-Urody-916777441721706/" target="_blank" rel="nofollow">Akademii Urody Damiana Pulchnego</a>. Godzinka na makija?? w domu rodzinnym Eweliny w Dobczycach, kr??tkie przygotowania Pana M??odego w Wieliczce, pe??ne emocji b??ogos??awie??stwo i pi??kna ceremonia poprowadzona przez zaprzyja??nionych ksi????y w <a href="http://www.parafiadobczyce.pl/ target="_blank" rel="nofollow">Ko??ciele p.w. Matki Bo??ej Wspomo??enia Wiernych w Dobczycach</a>. Ten du??y skr??t sobotnich wydarze?? prowadzi nas do sali <a href="http://alexiaochojno.pl/" target="_blank" rel="nofollow">Alexia w Ochojnie</a>. Mega nowoczesna sala bankietowo-weselna usytu??owana nieopodal Krakowa, wymarzone miejsce na przyj??cie ??lubne. Rodzice przywitali Par?? M??od?? chlebem i sol??, a go??cie gor??cymi ??yczeniami. <a href="https://www.facebook.com/pg/zespolavantago" target="_blank" rel="nofollow">Zesp???? muzyczny Avantago</a> wrzuci?? kilka szlagier??w i serwowa?? repertuar w wi??kszo??ci podyktowany nieko??cz??cymi si?? dedykacjami go??ci weselnych. Od czasu do czasu prawie tak niepostrze??enie jak <a href="https://www.manolofilmy.pl/" target="_blank" rel="nofollow">Grzegorz z Manolo</a> przemyka?? <a href="https://www.facebook.com/malinowemedia" target="_blank" rel="nofollow">??ukasz z Malinowe Media</a>. Para M??oda zapewni??a swoim go??ciom szampa??sk?? zabaw?? do bia??ego rana i przygotowa??a istny festiwal atrakcji. Bardzo dzi??kuj?? za zaufanie i serdecznie zapraszam na kilka zdj???? z tego dnia. ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"sala-weselna-alexia-ochojno-emocje-i-swietna-zabawa"}
                    title={"SALA WESELNA ALEXIA OCHOJNO, EMOCJE i ??WIETNA ZABAWA - EWELINA i JAKUB"}
                    tags={"alexia ochojno, nowoczesna sala weselna, ??lub w mogilanach, fotograf na wesele dobczyce"}
                    date={"26 stycznia 2020"}
                    menuNames={"EWELINA i JAKUB"}
                    menuTitle={"SALA WESELNA ALEXIA OCHOJNO, EMOCJE i ??WIETNA ZABAWA"}
                    leadNames={"AMANDA i JACEK"}
                    leadTitle={"SALA WESELNA KABANOS SPYTKOWICE, AKORDEONOWE LOVE"}
                    leadUrl={"/sala-weselna-kabanos-spytkowice-akordeonowe-love"}
                    leadImage={process.env.staticS3ImagesPath + "przystan_kabanos_spytkowice.webp"}
                />
            
        );
};

export default BlogPageComponent;
