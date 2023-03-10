import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0017.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0009.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0023.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0025.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0026.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0195.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0032.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0033.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0037.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0038.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0036.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0039.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0040.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0042.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0047.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0051.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0052.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0053.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0057.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0059.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0067.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0069.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0070.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0072.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0076.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0077.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0085.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0092.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0095.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0097.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0104.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0106.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0107.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0110.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0111.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0115.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0118.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0121.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0122.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0130.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0133.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0138.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0147.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0150.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0151.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0152.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0153.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0154.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0155.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0156.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0157.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0158.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0160.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0161.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0162.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0159.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0163.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0164.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0165.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0166.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0167.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0168.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0169.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0170.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0172.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0173.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0174.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0171.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0175.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0176.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0177.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0186.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0179.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0180.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0181.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0182.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0183.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0184.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0185.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0187.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0189.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0188.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0190.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0191.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0192.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0193.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0194.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0178.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.webp"}
                    images={images}
                    headTitle={"Fotograf ??lubny Skawina"}
                    headDescription={"Ciep??y wrze??niowy dzie?? i lawina fajnych kadr??w. To wszystko na pi??knym ??lubie Karoliny i Bartka. Fotograf ??lubny ze Skawiny zaprasza."}
                    headKeywords={"fotograf ??lubny skawina,zdj??cia ??lubne restauracja stek"}
                    headUrl={"https://99foto.pl/zdjecia-slubne-restauracja-stek-skawina"}
                    entryContentP1={
                        'W jedn?? z jesiennych i s??onecznych sob??t mia??em przyjemno???? towarzyszy?? Karolinie i Bartkowi, poznaj??c ich rodziny, znajomych i fotografuj??c jeden z ich najwa??niejszych dni w ??yciu. Przygotowania zacz??li??my w Skawinie w <a href="https://www.prestige-hs.pl/" target="_blank" rel="nofollow">Salonie Fryzjerskim Prestige Hair Studio</a>. Gdy przyjecha??em na miejsce Gosia z <a href="https://www.facebook.com/MalgorzataLisowskaNailsMakeUp/" target="_blank" rel="nofollow">Nails &#038; Make-Up Ma??gorzata Lisowska</a> pracowa??a ju?? nad makija??em Mamy Karoliny. Nast??pnie dzi??ki ??wietnej wsp????pracy uda??o nam si?? przesun???? stanowisko wiza??ystki w miejsce idealne, kt??re otworzy??o nowe mo??liwo??ci i morze wpania??ych kadr??w. W ??wietnej atmosferze sp??dzili??my kolejne minuty, a mo??e nawet godziny. Nast??pnie przyjecha?? Bartek i zabra?? Karolin?? do swojego domu rodzinnego. Bartek ubiera?? garnitur z Piotrkiem na g??rze, Karolina z Juli?? na dole, biega??em po schodach mocno, ale warto by??o. Pe??ne emocji, wzrusze?? b??ogos??awie??stwo i chwil?? p????niej udali??my si?? do <a href="https://www.szymonijuda.pl/" target="_blank" rel="nofollow">Ko??cio??a ??w. Aposto????w Szymona i Judy Tadeusza w Skawinie</a>.'
                    }
                    entryContentP2={
                        'Wizyta w zakrystii i kilka ??art??w ksi??dza, chwila oczekiwania na go??ci,  gor??ce przywitania i pi??kna ceremonia z sakramentalnym TAK. Po wyj??ciu z Ko??cio??a zaprosili??my go??ci do zdj??cia grupowego, oraz ??ycze?? w promieniach ciep??ego wrze??niowego s??o??ca. Po ??yczeniach dos??ownie za rogiem, r??wnie?? w Skawinie na m??odych czekali rodzice z tradycyjnym chleblem i sol??, oraz zesp???? <a href="https://www.zmthebest.pl/" target="_blank" rel="nofollow">ZM THE BEST z Katowic</a>, kt??ry od pocz??tku profesjonalnie prowadzi?? ca???? imprez??. <a href="https://www.restauracjastek.pl/" target="_blank" rel="nofollow">Restauracja Stek Skawina</a> przywita??a swoich go??ci pysznym obiadem i lodowym deserem. M??odzi otworzyli parkiet pierwszym ta??cem. A jak ju?? ten parkiet zosta?? otwarty to trudno by??oby go zamkn????. Pe??na frekwencja, ??wietna zabawa i szale??stwa, kt??rym nie by??o ko??ca. Szczeg??lne zapraszam do zerkni??cia na t?? cz?????? reporta??u na moim blogu. Dzia??o si?? du??o i to nie tylko na parkiecie.  Niesamowity wrze??niowy dzie??, sp??dzony w przemi??ym towarzystwie. Karolino i Bartku super, ??e mog??em by?? tam z Wami w tych najwa??niejszych chwilach Waszego ??ycia. Zapraszam do ogl??dania wybranych zdj????, a wi??cej znajdziecie w strefie klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"zdjecia-slubne-restauracja-stek-skawina"}
                    title={"ZDJ??CIA ??LUBNE RESTAURACJA STEK SKAWINA - KAROLINA I BARTEK"}
                    tags={"Fotograf ??lubny Skawina, Zdj??cia ??lubne Restauracja Stek"}
                    date={"22 PA??DZIERNIKA 2017"}
                    menuNames={"KAROLINA i BARTEK"}
                    menuTitle={"ZDJ??CIA ??LUBNE RESTAURACJA STEK SKAWINA"}
                    leadNames={"ANETA i DAMIAN"}
                    leadTitle={"OPACTWO CYSTERS??W W MOGILE, SESJA ZDJ??CIOWA KASPROWY"}
                    leadUrl={"/opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy"}
                    leadImage={process.env.staticS3ImagesPath + "opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
