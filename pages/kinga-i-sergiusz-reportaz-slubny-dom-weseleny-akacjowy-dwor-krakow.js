import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0004.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0006.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0017.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0021.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0026.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0036.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/dom_weselny_akacjowy_dwor_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0038.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0052.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0054.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0055.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/dom_weselny_akacjowy_dwor_krakow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/dom_weselny_akacjowy_dwor_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/dom_weselny_akacjowy_dwor_krakow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/dom_weselny_akacjowy_dwor_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0072.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0085.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0093.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0096.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0122.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/dom_weselny_akacjowy_dwor_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0132.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "kinga_i_sergiusz_reportaz_slubny_dom_weseleny_akacjowy_dwor_krakow_start.webp"}
                    images={images}
                    headTitle={"Reporta?? ??lubny Dom Weselny Akacjowy Dw??r Krak??w"}
                    headDescription={"Serdecznie zapraszam do Domu Weselnego Akacjowy Dw??r w Krakowie na reporta?? ??lubny Kingi i Sergiusza. Mi??ego ogl??dania."}
                    headKeywords={"reporta?? ??lubny krak??w,dom weselny akacjowy dw??r"}
                    headUrl={"https://99foto.pl/kinga-i-sergiusz-reportaz-slubny-dom-weseleny-akacjowy-dwor-krakow"}
                    entryContentP1={
                        'Pi??tek trzynastego min???? bardzo szybko w oczekiwaniu na najwa??niejszy dzie?? w ??yciu Kingi i Sergiusza, dzie?? ich ??lubu. <a href="https://www.jeanlouisdavid.pl" target="_blank" rel="nofollow">Salon fryzjerki Jean Louis David</a> w Galerii Kazimierz zosta?? tego dnia opanowany przez dziewczyny. Praca pa?? fryzjerek podlega??a surowej ocenie, poniewa?? Kinga zawodowo zajmuje si?? wiza??em. Wszystkie cztery fotele zape??ni??y si??, a fryzjerki czarowa??y fryzury marze??. Kiedy po blisko dw??ch godzinach by??y one gotowe, udali??my si?? do domu Kingi, ??eby lekko poprawi?? makija??. Pomaga??a Asia, pomaga??a Mama Kingi wi??c makija?? zosta?? wykonany na najwy??szym poziomie. Suknia ??lubna, buty, bi??uteria, kilka pami??tkowych zdj???? i Kinga pad??a w ramiona mega szcz????liwego tego dnia Sergiusza.'
                    }
                    entryContentP2={
                        'Ceremonia za??lubin odby??a si?? w Urz??dzie Stanu Cywilnego na ulicy Lubelskiej w Krakowie. ??yczenia na sali by??y tak szczere i d??ugie, ??e ko??cowe u??ciski musia??y odby?? si?? w holu. Pe??no wzrusze?? i rado??ci. Lexus zawi??z?? m??odych na sal?? <a href="https://akacjowydworkrakow.pl/" target="_blank" rel="nofollow">Domu Weselnego Akacjowy Dw??r w Krakowie</a>, gdzie czeka?? ju?? na nas wodzirej. Szalony wiecz??r wystartowa??. Ta??com nie by??o ko??ca, a weselny klimat udzieli?? si?? wszystkim. Hulajnogi, pyszny tort, poci??g, kt??ry za spraw?? DJ-a zaserwowa?? go??ciom podr???? dooko??a ??wiata i moc innych atrakcji. Dzia??o si??. Dzi??kuj?? Kindze i Sergiuszowi za ten magiczny wiecz??r, za zaufanie i pozytywne emocje, by??o ??wietnie! Teraz ju?? zapraszam na kr??tk?? histori?? tego wyj??tkowego dnia!'
                    }
                    slug={"kinga-i-sergiusz-reportaz-slubny-dom-weseleny-akacjowy-dwor-krakow"}
                    title={"REPORTA?? ??LUBNY DOM WESELENY AKACJOWY DW??R KRAK??W - KINGA i SERGIUSZ"}
                    tags={"reporta?? ??lubny krak??w,dom weselny akacjowy dw??r"}
                    date={"20 stycznia 2017"}
                    menuNames={"KINGA i SERGIUSZ"}
                    menuTitle={"REPORTA?? ??LUBNY DOM WESELENY AKACJOWY DW??R KRAK??W"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJ??CIA ??LUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={process.env.staticS3ImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
