import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0001.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0010.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0012.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0015.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0018.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0024.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0027.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0028.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0030.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0033.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0035.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0036.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0037.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0041.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0042.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0044.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0046.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0048.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0054.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0061.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0062.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0063.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0064.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0078.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0081.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0082.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0085.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0087.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0094.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0091.webp", height: 402 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0093.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0095.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0096.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0097.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0099.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0101.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0100.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0105.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0106.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0107.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0108.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0109.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0110.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0113.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0120.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0121.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0125.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0126.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0128.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0131.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0135.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0138.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0139.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0141.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0142.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0144.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0146.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0151.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0149.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0157.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0147.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0155.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0150.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0153.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0154.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0156.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/fotograf_na_wesele_mogilany_krakow_0152.webp", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "fotograf_slubny_wesele_mogilany_krakow.webp"}
                    images={images}
                    headTitle={"Wesele Euforia My??lenice"}
                    headDescription={
                        "Wesele w Mogilanach, Sala weselna Euforia w My??lenicach, dobry fotograf ??lubny z Krakowa na weselu. Plener ??lubny Dw??r w Mogilanach. Serdecznie zaprasam na bloga."
                    }
                    headKeywords={"wesele Euforia My??lenice, plener ??lubny Dw??r Mogilany, dobry fotograf Krak??w"}
                    headUrl={"https://99foto.pl/wesele-euforia-myslenice-plener-slubny-dwor-mogilany"}
                    entryContentP1={
                        "??luby fotografuj?? juz kilka lat. Praca ta pozwala poznawa?? ciekawych ludzi i odwiedza?? nowe miejsca. Tym razem mia??em niezwykle du??o szcz????cia, pozna??em niesamowicie dopasowanych do siebie nie tylko wzrostem Natali?? i Kacpra, kt??rzy ju?? od samego pocz??tku obdarzyli mnie zaufaniem i mia??em pewno???? o ich przekonaniu, ??e zrobi?? dla nich naprawd?? dobry reporta?? ??lubny. Zaprosili mnie do ??wietnych miejsc. Ko??ci???? ??w. Bart??omieja Aposto??a w Mogilanach w s??oneczne dni to miejsce ze ??wietnym ??wiat??em, gramem cienia, gdzie mo??na poprzytula?? si?? z go????mi podczas goracych ??ycze?? i dzwonnic??, gdzie na zdj??ciu grupowym nie zabraknie miejsca dla nikogo. "
                    }
                    entryContentP2={
                        '<a href="http://www.salaeuforia.pl/" target="_blank" rel="nofollow">Dom Weselny Euforia</a> w My??lenicach, kt??ry w standardzie jest wyposa??ony w nag??o??nienie i o??wietlenie, przemi???? Pani??, kt??ra ustawi wybrane kolory i taras, na kt??rym odpalenie zimnych ogni to czysta przyjemno????. <a href="http://www.mogilany.info/inicjatwy/dwor-w-mogilanach" target="_blank" rel="nofollow">Dw??r w Mogilanach</a>, kt??rego historia si??ga szesnatego wieku, a ziele?? wygl??da tak, jakby dba?? o ni?? ca??y sztab architekt??w zieleni miejskiej. Sobota, ten najwa??niejszy dzie?? w ??yciu Natalii i Kacpra, kiedy przysi??gli sobie mi??o???? na zawsze. By?? to pi??kny ??lub i wspania??a zabawa w gronie najlepszych przyjaci???? i bliskiej rodziny. Jeszcze raz dzi??kuj?? za zaufanie i setki u??miech??w w stron?? mojego obiektywu. Serdecznie zapraszam na zdj??cia i ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"wesele-euforia-myslenice-plener-slubny-dwor-mogilany"}
                    title={"WESELE EUFORIA MY??LENICE, PLENER ??LUBNY DW??R MOGILANY - NATALIA i KACPER"}
                    tags={"wesele Euforia My??lenice, plener ??lubny Dw??r Mogilany, dobry fotograf Krak??w"}
                    date={"17 sierpnia 2020"}
                    menuNames={"NATALIA i KACPER"}
                    menuTitle={"WESELE EUFORIA MY??LENICE, PLENER ??LUBNY DW??R MOGILANY"}
                    leadNames={"PATRYCJA i TOMASZ"}
                    leadTitle={"WESELE W ZAKOPANEM, HOTEL MERCURE KASPROWY, ICH TROJE"}
                    leadUrl={"/wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje"}
                    leadImage={process.env.staticS3ImagesPath + "wesele_w_zakopanem_hotel_mercure_kasprowy.webp"}
                />
            
        );
};

export default BlogPageComponent;
