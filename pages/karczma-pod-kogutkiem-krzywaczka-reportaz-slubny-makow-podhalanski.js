import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0006.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0012.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0016.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0018.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0022.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0030.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0034.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0036.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0039.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0044.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0046.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0048.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0050.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0052.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0057.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0063.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0066.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0067.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0071.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0081.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0082.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0087.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0089.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0093.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0104.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0108.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0110.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0112.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0114.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0117.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0127.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0130.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0133.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0136.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0137.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0140.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0142.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0143.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0144.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0145.webp", height: 402 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0146.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0147.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0150.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0151.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0152.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0153.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0154.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0155.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0156.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0158.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0157.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0159.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0160.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0161.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0162.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0163.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0164.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0166.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0165.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0167.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0168.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0169.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0170.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0171.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0172.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0173.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0174.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0176.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0177.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0178.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0179.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0180.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0181.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0191.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0182.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0183.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0184.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0185.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0186.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0190.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0188.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0187.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0189.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/01/fotograf_slubny_makow_podhalanski_0175.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "karczma-pod-kogutkiem-reportaz-slubny-makow-podhalanski-start.webp"}
                    images={images}
                    headTitle={"Karczma Pod Kogutkiem, reportaż Maków Podhalański"}
                    headDescription={"Przedsylwestrowa zabawa w Karczmie Pod Kogutkiem. Reportaż ślubny z ceremonii zaślubin w Makowie Podhalańskim."}
                    headKeywords={"Karczma Pod Kogutkiem Krzywaczka, reportaż ślubny Maków Podhalański"}
                    headUrl={"https://99foto.pl/karczma-pod-kogutkiem-krzywaczka-reportaz-slubny-makow-podhalanski"}
                    entryContentP1={
                        'Przedsylwestrowa sobota w najdłuższy bo kończący się dopiero za rok poświąteczny weekend. W Krakowie o godzinie ósmej rano minus trzy stopnie celsjusza na termometrze i kompletny brak śniegu. Na szczęście kilkanaście kilometrów dalej i tylko godzinę jazdy samochodem później jest stopni minus dziesięć, mega biało i do tego słońce. Maków Podhalański stanął na wysokości zadania i przygotował piękne otwarcie dnia i warunki do stworzenia niezapomnianego reportażu ślubnego Małgorzaty i Rafała. Zdjęcia rozpoczęliśmy w domu rodzinnym Rafała, gdzie przy zakładaniu marynarki, spinek i muchy asystował Tato Pana Młodego. Przed wyjazdem do Gosi odbyło się też pełne emocji błogosławieństwo. O godzinie jedenestej, zachwycony widokami pokrytych śniegiem pagórków Bystrej Podhalańskiej, dotarłem do Jordanowa i zapukałem do drzwi Gosi. Było mi bardzo miło po raz kolejny spotkać rodziców Gosi. Poznaliśmy się na ślubie jej siostry Magdy z Mateuszem, dwa lata wcześniej - czas szybko leci. Wszystkich, którzy chcieliby przypomnieć sobie co się wtedy działo, zapraszam <a href="https://99foto.pl/magda-i-mateusz-zdjecia-slubne-w-domu-weselnym-rancho-lot-w-nowym-targu/" target="_blank" rel="nofollow">tutaj</a>. Makijaż w mistrzowski sposób wykonała <a href="https://www.facebook.com/iwonamiernikmakeup" target="_blank" rel="nofollow">Iwona Miernik</a>. Siostry z minimalną pomocą Mamy świetnie poradziły sobie z ubieraniem sukni ślubnej i dodatków. W mieszkaniu przybyło jeszcze kilka osób i rozpoczęło się błogosławieństwo.'
                    }
                    entryContentP2={
                        'Ceremonia zaślubim odbyła się w <a href="https://parafiamakowska.pl" target="_blank" rel="nofollow">Kościele Przemienienia Pańskiego w Makowie Podhalańskim</a>. Przemiła atmosfera w zakrystii, piękne kazanie, chóralne śpiewy scholi i najważniejsze sakramentalne TAK. Promienie zachodzącego słońca towarzyszyły nam w drodze do <a href="https://podkogutkiem.com/dom-weselny/" target="_blank" rel="nofollow">Domu Weselnego Pod Kogutkiem w Krzywaczce</a>. Gosia i Rafał zostali przywitani chebem i solą, wyrzucili w górę kieliszki z szampanem, przyjęli gorące życzenia i prezenty od gości weselnych, zatańczyli pierwszy taniec tym samym otwierając parkiet. Zespół weselny rozbawiał gości weselnych serwując zabawy i pokazując swoją wszechstronność w wynajdywaniu przebojów wywodzących się z różnych gatunków muzycznych. Gdyby nie Mateusz jego wrodzona, a moja ulubiona mimika twarzy i talent wodzirejski impreza ta nie wyglądałaby tak samo. Myślę, że "by the end of the day" Mateusz zasłużył na podwójny zestaw ratunkowy.  Cieszę się bardzo, że mogłem być tam z Wami w tych najważniejszych chwilach Waszego życia. Zapraszam do oglądania, a po dużo więcej zdjęć do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"karczma-pod-kogutkiem-krzywaczka-reportaz-slubny-makow-podhalanski"}
                    title={"KARCZMA POD KOGUTKIEM, REPORTAŻ ŚLUBNY MAKÓW PODHALAŃSKI - GOSIA I RAFAŁ"}
                    tags={"Karczma Pod Kogutkiem Krzywaczka, reportaż ślubny Maków Podhalański"}
                    date={"11 lutego 2018"}
                    menuNames={"MAŁGORZATA I RAFAŁ"}
                    menuTitle={"KARCZMA POD KOGUTKIEM, REPORTAŻ ŚLUBNY MAKÓW PODHALAŃSKI"}
                    leadNames={"KINGA i MACIEK"}
                    leadTitle={"DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA"}
                    leadUrl={"/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada"}
                    leadImage={process.env.staticS3ImagesPath + "dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
