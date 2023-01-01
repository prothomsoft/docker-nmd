import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0003.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0009.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0012.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0014.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0016.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0021.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0031.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0035.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0036.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0038.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0044.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0046.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0047.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0061.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0065.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0068.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0070.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0073.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0075.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0077.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0089.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0093.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0107.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0111.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0118.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0120.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0132.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0141.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0147.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0150.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0151.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0152.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0153.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0154.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0155.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0156.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0157.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0158.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0160.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0161.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0162.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0163.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0164.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0167.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0159.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0166.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/dom_weselny_pod_kasztanami_igolomia_0168.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "dom_weselny_pod_kasztanami_igolomia_start.webp"}
                    images={images}
                    headTitle={"Dom Weselny Pod Kasztanami Igołomnia"}
                    headDescription={"Ślub, który pod wieloma względami będzie jednym z moich ulubionych. Niesamowita energia, miejsce i ludzie w Domu Weselnym Pod Kasztanami. Zapraszam."}
                    headKeywords={"sala weselna kraków,dom weselny niepołomice,salon urody proszowice"}
                    headUrl={"https://99foto.pl/dom-weselny-pod-kasztanami-igolomia"}
                    entryContentP1={
                        'Proszowice, Nowe Brzesko, bardzo blisko do jedynego rozsławionego w okolicach Krakowa pola pełnego lawendy w Klimontowie. Dokładnie o godzinie 11.00 w <a href="https://salonurodyglow.pl/" target="_blank" rel="nofollow">Salonie urody GLOW</a> rozpoczęliśmy przygotowania do najważniejszego dnia w życiu Karoliny i Dawida. Świetna atmosfera w salonie i profesjonalny makijaż. Chwilę później wybraliśmy się do Dawida, który wbił się w garnitur uzupełniając go gustownymi dodatkami. Wpieliśmy nowe tablice rejestracyjne do ślubnego Jagura. Karolina w towarzystwie drużek ubrała suknie ślubną, buty i biżuterię. Przywitanie, błogosławieństwo pełne emocji, brama pełna serdeczności i ciepłe przywitanie młodych przez księdza w zakrystii.'
                    }
                    entryContentP2={
                        'Piękna ceremonia zaślubin miała miejsce w <a href="https://nowebrzeskoparafia.pl" target="_blank" rel="nofollow">Kościele pw. Wszystkich Świętych w Nowym Brzesku</a>. Pogoda tego dnia pozwoliła nam na życzenia ślubne pod kościołem. Tysiące uśmiechów serdeczności spadły na Parę młodą. Nadszedł czas na przywitanie chlebem i solą przez rodziców, którzy czekali na Karolinę i Dawida w <a href="https://weselapodkasztanami.pl" target="_blank" rel="nofollow">Domu Weselnym Pod Kasztanami</a> w miejscowości Igołomia. Na sali weselnej gości przywitał <a href="https://www.facebook.com/Zesp%C3%B3%C5%82-Skowyrni-967403589940752/" target="_blank" rel="nofollow">Zespół muzyczny Skowyrni</a> z okolic Nowego Targu. Pierwszy taniec i pełny parkiet od początku. Góralskie zacięcie muzyków słyszalne w każdej nucie. Pełno atrakcji, które czekały na gości tego dnia, kolejki do fotobudki, litery LOVE, pyszny tort, pieczony świniak, pociąg i pełen repertuar zabaw oczepinowych. Podczas ślubu nie tylko filmował ale dotrzymywał mi towarzystwa <a href="https://camdesign.pl" target="_blank" rel="nofollow">Krzysiek z Camdesign &#8211; Profesjonalny film ślubny</a>, który rejestrował każdą sekundę i z pewnością zmontuje niezapomniany film ślubny. Bardzo dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i wspaniałą atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"dom-weselny-pod-kasztanami-igolomia"}
                    title={"DOM WESELNY POD KASZTANAMI IGOŁOMIA - KAROLINA i DAWID"}
                    tags={"sala weselna kraków,dom weselny niepołomice,salon urody proszowice"}
                    date={"23 czerwca 2017"}
                    menuNames={"KAROLINA i DAWID"}
                    menuTitle={"DOM WESELNY POD KASZTANAMI IGOŁOMIA"}
                    leadNames={"MAGDA i GRZEGORZ"}
                    leadTitle={"SALA BANKIETOWA I WESELNA KRZCZONÓW MKA - MORZE GWIAZD"}
                    leadUrl={"/sala-bankietowa-i-weselna-krzczonow-mka-morze-gwiazd"}
                    leadImage={process.env.staticS3ImagesPath + "sala_bankietowa_i_weselna_krzczonow_mka_morze_gwiazd_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
