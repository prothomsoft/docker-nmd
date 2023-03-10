import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0002.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0012.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0014.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0017.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0028.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0025.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0021.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0023.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0026.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0029.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0032.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0033.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0034.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0036.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0037.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0039.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0041.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0043.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0044.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0046.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0054.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0061.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0066.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0067.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0073.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0080.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0083.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0087.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0095.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0102.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0104.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0107.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0109.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0113.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0129.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0122.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0121.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0140.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0147.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0150.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0148.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "przystan-w-kabanosie-spytkowice-zdjecia-slubne-jordanow-start.webp"}
                    images={images}
                    headTitle={"Przysta?? w Kabanosie Spytkowice, zdj??cia ??lubne Jordan??w"}
                    headDescription={
                        "Przysta?? w Kabanosie Spytkowice i g??ralski klimat. Energia z g??r, rodzinna atmosfera i zakochani w sobie bardzo Krystyna i Piotr. Serdecznie zapraszam na kilka zdj???? z tego dnia. Mi??ego ogl??dania."
                    }
                    headKeywords={"Przysta?? w Kabanosie Spytkowice, zdj??cia ??lubne Jordan??w, Dom Weselny Spytkowice"}
                    headUrl={"https://99foto.pl/przystan-w-kabanosie-spytkowice-zdjecia-slubne-jordanow"}
                    entryContentP1={
                        'Jeden z pa??dziernikowych weekend??w w ubieg??ym roku mi??o sp??dzi??em na fotografowaniu ??lubu Iwony i Marcina w Naprawie. By??oby to ma??o istotne w kontek??cie tej opowie??ci gdyby nie fakt, ??e Piotr, kt??ry z pewno??ci?? w ubieg??y weekend odmieni?? swoje ??ycie, jest bratem Marcina. Wybrank?? Piotra zosta??a Krystyna, kt??r?? r??wnie?? mia??em przyjemno???? pozna?? podczas tamtej pami??tnej imprezy. Dlatego od razu napisa??em, ??e tym razem by??o nie tylko po g??ralsku, ale te?? bardzo rodzinnie. Zacznijmy wi??c od pocz??tku. Przygotowania odby??y si?? w dw??ch miejscach. Pierwsze z nich mocno zwi??zane z postaci?? Marylin Monroe to <a href="https://www.facebook.com/pg/salonpieknosciBC/about/" target="blank">Salon Beauty Center</a> w Nowym Targu, gdzie powsta??a fryzura. Drugie natomiast to gwiazdorski <a href="https://www.facebook.com/glossy.marzena.balara/" target="_blank" rel="nofollow">Salon Urody Glossy</a>, gdzie urod?? Krystyny podkre??la??a Marzena. W??a??ciwe przygotowania odby??y si?? w domu rodzinnym Krystyny w Skawie. Dziewczyny pomog??y ubra?? sukni??, brat otworzy?? winko i tak w oka mgnieniu min????a godzinka, po kt??rej uda??em si?? do Naprawy do Piotrka. Piotrek nic a nic si?? przez te kilka miesi??cy nie zmieni?? i jak by?? dusz?? towarzystwa na ??lubie Marcina, tak zosta??o. Jego wrodzony w??oski temperament skierowa?? przygotowania na w??a??ciwe tory. Przywitanie Pana m??odego, b??ogos??awie??stwo i brama urz??dzona przez ??mia??e dzieciaki wype??ni??y nam czas oczekiwania na sakramentalne TAK.'
                    }
                    entryContentP2={
                        'Tym razem zosta??o ono wypowiedziane w <a href="https://skawa.sdb.org.pl/" target="_blank" rel="nofollow">Ko??ciele NMP Wspomo??enia Wiernych</a> w Skawie. Ko??ci???? bardzo ciekawy, pozwalaj??cy zrobi?? zdj??cia z perspektywy drona bez drona. Po zdj??ciu grupowym i ??yczeniach Para M??oda zaprosi??a go??ci do Domu Weselnego <a href="https://przystanwkabanosie.pl/pl/page/6/Restauracja_Spytkowice/" target="_blank">Przysta?? w Kabanosie</a> w Spytkowicach. Parkiet zosta?? otworzony brawurowym pierwszym ta??cem, pyszne s??odko??ci z mini karety znikn????y momentalnie i <a href="https://edenzespol.pl" target="_blank" rel="nofollow">zesp???? muzyczny Eden</a> przej???? pa??eczk?? dbaj??c o to, by go??cie nie sp??dzali za du??o czasu przy stolikach. Atrakcje tego wieczoru mo??na wylicza?? d??ugo, by?? tort podany w chmurach ciek??ego azotu, pieczony ??winiak, fotobudka, poci??g, chusteczka, kaczuszki i pe??ny zestaw zabaw oczepinowych. Ka??d?? minut?? imprezy skrz??tnie filmowa?? Mateusz z <a href="https://www.planujemywesele.pl/2048-f-h-u-viva" target="_blank" rel="nofollow">Viva Film</a>. By??o naprawd?? re-we-la-cyj-nie. Zapraszam na reporta?? ??lubny z tego dnia, a po wi??cej do strefy klienta (przyda si?? has??o z mojej wizyt??wki). Mi??ego ogl??dania.'
                    }
                    slug={"przystan-w-kabanosie-spytkowice-zdjecia-slubne-jordanow"}
                    title={"PRZYSTA?? W KABANOSIE SPYTKOWICE, ZDJ??CIA ??LUBNE JORDAN??W - KRYSIA i PIOTR"}
                    tags={"Przysta?? w Kabanosie Spytkowice, zdj??cia ??lubne Jordan??w, Dom Weselny Spytkowice"}
                    date={"5 maja 2018"}
                    menuNames={"KRYSIA i PIOTR"}
                    menuTitle={"PRZYSTA?? W KABANOSIE SPYTKOWICE, ZDJ??CIA ??LUBNE JORDAN??W"}
                    leadNames={"MA??GORZATA I RAFA??"}
                    leadTitle={"PLENER ??LUBNY S??OWACJA, ??OMNICKI STAW"}
                    leadUrl={"/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    leadImage={process.env.staticS3ImagesPath + "plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.webp"}
                />
            
        );
};

export default BlogPageComponent;
