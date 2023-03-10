import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [

            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0005.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0006.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0007.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0011.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0012.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0016.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0023.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0024.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0027.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0028.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0030.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0034.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0035.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0036.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0037.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0038.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0040.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0041.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0043.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0045.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0046.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0151.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0048.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0049.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0050.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0051.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0052.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0053.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0054.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0055.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0056.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0058.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0061.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0062.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0064.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0066.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0068.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0070.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0072.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0071.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0075.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0076.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0077.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0079.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0081.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0088.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0090.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0093.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0094.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0095.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0096.webp", height: 567 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0099.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0100.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0102.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0104.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0105.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0107.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0109.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0110.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0112.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0114.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0115.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0118.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0117.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0120.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0121.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0122.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0125.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0127.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0128.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0129.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0130.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0131.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0133.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0143.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0136.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0138.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0141.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0142.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0150.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0145.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0147.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0126.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "restauracja_karolinka_bystra_podhalanska.webp"}
                    images={images}
                    headTitle={"Wesele w Tokarni, stra??acke tradycje weselne"}
                    headDescription={"Wesele w Tokarni i stra??ackie tradycje weselne. ??lub w g??rach i przepi??kne miejsce na ceremoni?? ??lubn??. Marlena i Maciek. Parkiet p??ka?? w szwach. Zapraszam."}
                    headKeywords={"dobry fotograf na wesele, wesele w Tokarni, stra??ackie tradycje weselne"}
                    headUrl={"https://99foto.pl/wesele-w-tokarni-strazackie-tradycje-weselne"}
                    entryContentP1={
                        'Miesi??c maj w tym roku pogodowo nie wygl??da najlepiej i my??l??, ??e tylko rolnicy s?? zadowoleni z tego stanu rzeczy. Na szcz????cie deszczowe dni s?? momentami przerywane przeb??yskami s??o??ca, na kt??re pewnie trzeba zas??u??y??. Tak by??o w sobot?? podczas ??lubu Marleny i Ma??ka, kt??ry odby?? si?? w Skomielnej Czarnej. Trafili w idealny dzie?? z wymarzon?? pogod?? bez najmniejszej kropelki deszczu, pi??knymi bia??ymi chmurami na b????kitnym niebie i zieleni?? w szczytowej formie. Dzie?? rozpocz??li??my w Salonie fryzjerskim Relaks w Tokarni. Upi??cie w??os??w przebieg??o sprawnie i chwil?? p????niej byli??my ju?? na makija??u wykonanym mistrzowsk?? r??k?? wiza??ystki Ewy z <a href="https://www.facebook.com/madebymemakeup/" target="_blank" rel="nofollow">Make By Me Makeup</a>. Poniewa?? Marlena zawodowo zajmuje si?? urod?? wi??c malowaniu towarzyszy??y bran??owe dyskusje. Gdy makija?? by?? niemal??e sko??czony do????czyli do nas Sylwester i Wojtek z <a href="https://www.facebook.com/Studio-Foto-Video-CLIP-348143895304294/" target="_blank" rel="nofollow">Clip Studio</a>, kt??rzy przez ca??y dzie?? kolekcjonowali kadry do filmu ??lubnego. Wojtek w nasze poczynania wnosi?? nutk?? m??odo??ci, Sylwester i ja lata do??wiadczenia, w skr??cie uzupe??niali??my si?? ca??kiem dobrze. Wszyscy znali si?? nie od dzi??, a to zawsze pomaga w zachowaniu dobrego klimatu w trakcie imprezy.'
                    }
                    entryContentP2={
                        'Marlena za??o??y??a sukni??, z pomoc?? siostry ??anety ubra??a bi??uterie i buty, a gdy wszystko by??o gotowe udali??my si?? do Tokarni na przygotowania Ma??ka. Krawat, zegarek, garnitur i buty, klasyczny plan zrealizowali??my do???? szybko. Maciek wsiad?? do wymarzonego przez wielu samochodu i chwil?? p????niej skrad?? Marlenie buziaka. Po b??ogos??awie??stwie rodzic??w na Par?? M??odych czeka??a niespodzianka w postaci bramy przygotowanej przez Stra??ak??w. By?? mi??, konkurs na str??canie puszek sikawk??, gor??ce ??yczenia i ??arciki rzucane mimowolnie przez megafon. W skr??cie brama na wypasie. Ceremonia za??lubin odby??a si?? w <a href="http://skomielnaczarna.kapucyni.pl/" target="_blank" rel="nofollow">Ko??ciele Nawiedzenia NMP w Skomielnej Czarnej</a>. Para m??oda z??o??y??a przyrzeczenie ma????e??skie, obsypana milionem monet z pomp?? opu??ci??a Ko??ci????, a po zdj??ciu grupowym zaprosi??a go??ci do sali weselnej "Karolinka" w Bystrej Podhala??skiej. Po obiedzie odby??y si?? ??yczenia, nast??pnie pierwszy taniec i krojenie torta. Zesp???? Sami Swoi z ????towni wykona?? wszystkie szlagiery weselnych parkiet??w. Zosta?? te?? doceniony przez go??ci weselnych, kt??rzy ogromny parkiet wype??niali szczelnie zupe??nie go nie opuszczaj??c. Bukiet fruwa?? w powietrzu kilkukrotnie i jak to w g??rach zabawa by??a na ca??ego. Serdecznie zapraszam na reporta?? ??lubny z tego dnia i ??ycz?? mi??ego ogl??dania. Zagl??dnijcie te?? do strefy klienta po wi??cej.'
                    }
                    slug={"wesele-w-tokarni-strazackie-tradycje-weselne"}
                    title={"WESELE W TOKARNI, STRA??ACKIE TRADYCJE WESELNE - MARLENA i MACIEK"}
                    tags={"dobry fotograf na wesele, wesele w Tokarni, stra??ackie tradycje weselne"}
                    date={"29 maja 2019"}
                    menuNames={"MARLENA i MACIEK"}
                    menuTitle={"WESELE W TOKARNI, STRA??ACKIE TRADYCJE WESELNE"}
                    leadNames={"KAROLINA i KAMIL"}
                    leadTitle={"SALA BANKIETOWA SZAFRANTU, FOTOGRAFIA ??LUBNA NIEPO??OMICE"}
                    leadUrl={"/sala-bankietowa-szafrantu-fotografia-slubna-niepolomice"}
                    leadImage={process.env.staticS3ImagesPath + "sala-bankietowa-szafrantu.webp"}
                />
            
        );
};

export default BlogPageComponent;