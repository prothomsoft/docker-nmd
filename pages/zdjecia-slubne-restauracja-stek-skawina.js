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
                    headTitle={"Fotograf ślubny Skawina"}
                    headDescription={"Ciepły wrześniowy dzień i lawina fajnych kadrów. To wszystko na pięknym ślubie Karoliny i Bartka. Fotograf ślubny ze Skawiny zaprasza."}
                    headKeywords={"fotograf ślubny skawina,zdjęcia ślubne restauracja stek"}
                    headUrl={"https://99foto.pl/zdjecia-slubne-restauracja-stek-skawina"}
                    entryContentP1={
                        'W jedną z jesiennych i słonecznych sobót miałem przyjemność towarzyszyć Karolinie i Bartkowi, poznając ich rodziny, znajomych i fotografując jeden z ich najważniejszych dni w życiu. Przygotowania zaczęliśmy w Skawinie w <a href="https://www.prestige-hs.pl/" target="_blank" rel="nofollow">Salonie Fryzjerskim Prestige Hair Studio</a>. Gdy przyjechałem na miejsce Gosia z <a href="https://www.facebook.com/MalgorzataLisowskaNailsMakeUp/" target="_blank" rel="nofollow">Nails &#038; Make-Up Małgorzata Lisowska</a> pracowała już nad makijażem Mamy Karoliny. Następnie dzięki świetnej współpracy udało nam się przesunąć stanowisko wizażystki w miejsce idealne, które otworzyło nowe możliwości i morze wpaniałych kadrów. W świetnej atmosferze spędziliśmy kolejne minuty, a może nawet godziny. Następnie przyjechał Bartek i zabrał Karolinę do swojego domu rodzinnego. Bartek ubierał garnitur z Piotrkiem na górze, Karolina z Julią na dole, biegałem po schodach mocno, ale warto było. Pełne emocji, wzruszeń błogosławieństwo i chwilę później udaliśmy się do <a href="https://www.szymonijuda.pl/" target="_blank" rel="nofollow">Kościoła św. Apostołów Szymona i Judy Tadeusza w Skawinie</a>.'
                    }
                    entryContentP2={
                        'Wizyta w zakrystii i kilka żartów księdza, chwila oczekiwania na gości,  gorące przywitania i piękna ceremonia z sakramentalnym TAK. Po wyjściu z Kościoła zaprosiliśmy gości do zdjęcia grupowego, oraz życzeń w promieniach ciepłego wrześniowego słońca. Po życzeniach dosłownie za rogiem, również w Skawinie na młodych czekali rodzice z tradycyjnym chleblem i solą, oraz zespół <a href="https://www.zmthebest.pl/" target="_blank" rel="nofollow">ZM THE BEST z Katowic</a>, który od początku profesjonalnie prowadził całą imprezę. <a href="https://www.restauracjastek.pl/" target="_blank" rel="nofollow">Restauracja Stek Skawina</a> przywitała swoich gości pysznym obiadem i lodowym deserem. Młodzi otworzyli parkiet pierwszym tańcem. A jak już ten parkiet został otwarty to trudno byłoby go zamknąć. Pełna frekwencja, świetna zabawa i szaleństwa, którym nie było końca. Szczególne zapraszam do zerknięcia na tę część reportażu na moim blogu. Działo się dużo i to nie tylko na parkiecie.  Niesamowity wrześniowy dzień, spędzony w przemiłym towarzystwie. Karolino i Bartku super, że mogłem być tam z Wami w tych najważniejszych chwilach Waszego życia. Zapraszam do oglądania wybranych zdjęć, a więcej znajdziecie w strefie klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"zdjecia-slubne-restauracja-stek-skawina"}
                    title={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA - KAROLINA I BARTEK"}
                    tags={"Fotograf ślubny Skawina, Zdjęcia ślubne Restauracja Stek"}
                    date={"22 PAŹDZIERNIKA 2017"}
                    menuNames={"KAROLINA i BARTEK"}
                    menuTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA"}
                    leadNames={"ANETA i DAMIAN"}
                    leadTitle={"OPACTWO CYSTERSÓW W MOGILE, SESJA ZDJĘCIOWA KASPROWY"}
                    leadUrl={"/opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy"}
                    leadImage={process.env.staticS3ImagesPath + "opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
