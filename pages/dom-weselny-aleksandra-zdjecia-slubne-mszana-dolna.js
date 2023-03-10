import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0003.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0005.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0007.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0008.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0010.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0014.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0016.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0021.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0025.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0030.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0038.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0048.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0050.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0051.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0054.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0063.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0066.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0069.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0077.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0079.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0082.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0084.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0089.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0093.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0098.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0105.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0113.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0141.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0145.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0147.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0150.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0151.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0152.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "dom-weselny-aleksandra-zdjecia-slubne-mszana-dolna-start.webp"}
                    images={images}
                    headTitle={"Dom weselny Aleksandra, zdj??cia ??lubne Mszana Dolna"}
                    headDescription={"Aleksandra to nowo powsta??y Dom Weselny w Mszanie Dolnej, ??wietne miejsce by zorganizowa?? tam Wasz ??lub. Zapraszam na reporta?? ??lubny Kasi i Piotra."}
                    headKeywords={"Dom weselny Aleksandra, zdj??cia ??lubne Mszana Dolna, fotograf na wesele Mszana"}
                    headUrl={"https://99foto.pl/dom-weselny-aleksandra-zdjecia-slubne-mszana-dolna"}
                    entryContentP1={
                        '??wi??ta Wielkanocne, a w szczeg??lno??ci lany poniedzia??ek to dzie?? otwieraj??cy parkiety w ca??ej Polsce. Korzystaj??c wi??c z okazji urwa??em si?? na kilka godzin z Tokarni, gdzie dzielili??my si?? jajkiem z rodzin?? ju?? od niedzieli, by uwieczni?? ??lub Kasi i Piotra. Przygotowania zacz??li??my w My??lenicach w <a href="https://www.facebook.com/biogenika/" target="_blank" rel="nofollow">Salonie Urody Biogenika</a>. Makija?? profesjonalnie wykona??a kole??anka Kasi z licealnej klasy. Chwil?? p????niej na fotelu zasiad??a ??wiadkowa Ania, czyli siostra Kasi, kt??rej zdj??cie after mo??ecie zobaczy?? na facebooku. Nast??pnie udali??my si?? do Str????y i tam z pomoc?? mamy Kasia ubra??a sukni?? ??lubn??, buty, podwi??zk?? i bi??uterie. By??a te?? chwila na kawk?? i mi???? rozmow?? z rodzicami. Piotr mieszka?? w Pcimiu, uda??em si?? tam wi??c w kilka minut by sfotografowa?? r??wnie?? jego przygotowania. Podczas ubierania asystowa??a siostra Ania. Gdy wszystko by??o ju?? gotowe odby??o si?? pierwsze pe??ne emocji b??ogos??awie??stwo w domu Piotra i kolejne ju?? wsp??lne w domu Kasi.'
                    }
                    entryContentP2={
                        'Po godzinie 14 udali??my si?? do <a href="https://www.diecezja.pl/parafie/lista-parafii/33-pcim/parafia-nmp-krolowej-polski.html" target="_blank" rel="nofollow"> Ko??cio??a pw. Naj??wi??tszej Maryi Panny Kr??lowej Polski w Str????y</a>. Poniewa?? brat Kasi w najbli??szej przysz??o??ci b??dzie ksi??dzem, wi??c zakrystia i ko??ci???? b??d?? jego drugim domem. Czu?? si?? tam prawdziwym gospodarzem, dzi??ki czemu wszystko przebiega??o bardzo sprawnie i w przemi??ej atmosferze. Po kazaniu Para M??oda powiedzia??a sakramentalne TAK. Atrakcj?? dla wielu go??ci, by??a schola, kt??ra doda??a ceremoni charakteru gr?? na instumentach i pi??knym ??piewem. Zrobili??my zdj??cie grupowe i udali??my si?? do <a href="https://www.weselamszana.pl/" target="_blank" rel="nofollow">Domu Weselnego Aleksandra w Mszanie Dolnej</a>. Go??cie weselny Kasi i Piotra mogli rozpocz???? sezon taneczny w mega komfortowych warunkach. Parkiet zape??nia?? si?? szybko. Frekwencj?? na parkiecie zapewnia?? mega profesjolany zesp???? <a href="https://zespolespresso.pl/" target="_blank" rel="nofollow">Zesp???? Espresso</a>. Ka??dy szczeg???? zosta?? uchwycony przez filmowc??w z <a href="https://www.db7studio.pl/pl/" target="_blank" rel="nofollow">DB7 Studio</a>. Nie brakowa??o ch??tnych do zabaw oczepinowych, dzia??o si?? du??o, a szalona zabawa trwa??a do bia??ego rana. Kasiu i Piotrze wielkie dzi??ki, ??e mog??em by?? Waszym go??ciem i fotografem. Zapraszam na reporta?? z tego dnia, a po wi??cej zdj???? do strefy klienta. Has??o znajdziecie na mojej wizyt??wce.'
                    }
                    slug={"dom-weselny-aleksandra-zdjecia-slubne-mszana-dolna"}
                    title={"DOM WESELNY ALEKSANDRA, ZDJ??CIA ??LUBNE MSZANA DOLNA - KASIA i PIOTR"}
                    tags={"Dom weselny Aleksandra, zdj??cia ??lubne Mszana Dolna, fotograf na wesele Mszana"}
                    date={"2 kwietnia 2018"}
                    menuNames={"KASIA i PIOTR"}
                    menuTitle={"DOM WESELNY ALEKSANDRA, ZDJ??CIA ??LUBNE MSZANA DOLNA"}
                    leadNames={"KINGA i MACIEK"}
                    leadTitle={"DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA"}
                    leadUrl={"/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada"}
                    leadImage={process.env.staticS3ImagesPath + "dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
