import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0005.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0012.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0016.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0017.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0019.webp", height: 402 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0022.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0024.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0026.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0030.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0031.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0033.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0035.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0036.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0039.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0041.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0047.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0048.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0050.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0057.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0074.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0076.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0077.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0097.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0096.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0101.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0107.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0114.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0115.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0130.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0131.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0132.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0133.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0137.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0140.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0142.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0145.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0146.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0147.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0158.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0148.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0150.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0151.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0152.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0153.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0154.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0155.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0156.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0157.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/dom_weselny_euforia_myslenice_0159.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "dom_weselny_euforia_myslenice_1.webp"}
                    images={images}
                    headTitle={"Dom Weselny Euforia My??lenice i s??onecznie LOVE"}
                    headDescription={"Dom weselny Euforia My??lenice i s??oneczne LOVE. Du??o s??o??ca w jedn?? z wrze??niowych sob??t. Reporta?? ??lubny Izabeli i Arkadiusza. Zapraszam do ogl??dania."}
                    headKeywords={"dom weselny euforia my??lenice, sala na wesele blisko Krakowa, fotograf ??lubny My??lenice"}
                    headUrl={"https://99foto.pl/dom-weselny-euforia-myslenice-i-sloneczne-love"}
                    entryContentP1={
                        'Spory kawa??ek drogi od Krakowa i ma??a miejscowo???? Skrzydlna, a w niej dom z pi??knym widokiem na otaczaj??ce go pokryte lasem g??rki. Arkadiusz i jego siostra Natalia czekali na mnie i kilka minut przed godzin?? dziewi??t?? rano wystartowali??my z przygotowaniami Pana M??odego. Brak pogodowej nudy czyli na zmian?? troch?? deszczu, troch?? s??o??ca i ju?? nie tak ciep??o bo tylko osiem stopni. Podczas gdy ja odlicza??em ilo???? kilometr??w do Jordanowa, jad??c tam przez Mszan?? Doln??, Rabk?? Zdr??j na fotelu genialnej wiza??ystki <a href="https://www.facebook.com/patrycjaantoszmakeup/" target="_blank" rel="nofollow">Patrycji Antosz</a> siedzia??a ju?? Izabela, przygotowywuj??c si?? do najwa??niejszego dnia w swoim ??yciu. Studio wiza??u Patrycji odwiedzam cz??sto przy okazji wykonywania zdj???? na ??lubach w Jordanowie i okolicach. Zawsze czeka mnie tam jaka?? pozytywna zmiana, a ka??dy kolejny makija?? jest arcydzie??em. Gdy uroda Izy zosta??a ju?? podkre??lona wybrali??my si?? do jej domu rodzinnego w miejscowo??ci Toporzysko. Salon dopracowany w najmniejszym szczeg??le pos??u??y?? genialnie jako sceneria dla przygotowa?? i b??ogos??awie??stwa, kt??rego udzieli rodzice.'
                    }
                    entryContentP2={
                        'Trafi?? do <a href="https://www.parafiatoporzysko.pl/" target="_blank" rel="nofollow">Ko??cio??a p.w. Naj??wi??tszej Naj??wi??tszej Maryi Panny Matki Ko??cio??a w Toporzysku</a> by??o bardzo ??atwo bo wystarczy??o zej???? z g??rki. Babcia Izy udzieli??a b??ogos??awie??stwa jako pierwsza pozdrawiaj??c m??odych z okna domu. Dumny Tato odprowadzi?? Izabel?? do o??tarza i ksi??dz proboszcz rozpocz???? ceremoni?? za??lubim. W ko??ciele tym uwag?? przyk??uwa??y witra??e, a kilka promieni s??onecznych, kt??re o??wietli??y wn??trze Ko????io??a pod koniec Mszy ??wi??tej wprowadzi??y wszystkich nas w dobry humor. ??cigaj??c si?? z kapel?? g??ralsk?? po Zakopiance i penetruj??c objazdy w okolicach Skomielnej Bia??ej dotarli??my do miejsca zabawy weselnej. <a href="https://www.salaeuforia.pl/" target="_blank" rel="nofollow">Dom Weselny Euforia</a> w My??lenicach czeka?? na przyby??ych go??ci w pe??nej gotowo??ci. Luksusowa sala weselna, ze zintegrowanym o??wietleniem, nag??o??nieniem i sto??ami zastawionymi wyszukanymi smako??ykami, a w ten specjalny dzie?? ubrana w pi??kne kwiaty, wywo??a??a zachwyt na twarzach kolejno wchodz??cych na ni?? go??ci weselnych. Rozpocz????y si?? pe??ne u??cisk??w i u??miech??w ??yczenia. Du??y parkiet pomie??ci?? wszystkich podczas pierwszego ta??ca. P????niej by?? tort i wiele atrakcji przygotowanych dla go??ci. G??ralskie klimaty wprowadza?? <a href="https://sykowni.pl/" target="_blank" rel="nofollow">Zesp???? Sykowni</a>. Ka??d?? minut?? tych wydarze?? nagrywa?? trzy osobowy zesp???? film mejker??w z <a href="https://www.facebook.com/filmykoliber/" target="_blank" rel="nofollow">Filmy Koliber</a>. Impreza trwa??a do bia??ego rana, a parkiet momentami rozgrzewa?? si?? do czerwono??ci. Dzi??kuj?? za zaufanie i zapraszam na kilka zdj???? z tego dnia. Mi??ego ogl??dania.'
                    }
                    slug={"dom-weselny-euforia-myslenice-i-sloneczne-love"}
                    title={"DOM WESELNY EUFORIA MY??LENICE i S??ONECZNE LOVE - IZABELA i ARKADIUSZ"}
                    tags={"dom weselny euforia my??lenice, sala na wesele blisko Krakowa, fotograf ??lubny My??lenice"}
                    date={"3 pa??dziernika 2018"}
                    menuNames={"IZABELA i ARKADIUSZ"}
                    menuTitle={"DOM WESELNY EUFORIA MY??LENICE i S??ONECZNE LOVE"}
                    leadNames={"PAULINA i PAWE??"}
                    leadTitle={"SALA WESELNA TRIANA MOGILANY, REPORTA?? ??LUBNY MY??LENICE"}
                    leadUrl={"/sala-bankietowa-triana-mogilany-reportaz-slubny-podstolice"}
                    leadImage={process.env.staticS3ImagesPath + "sala_bankietowa_triana_mogilany.webp"}
                />
            
        );
};

export default BlogPageComponent;
