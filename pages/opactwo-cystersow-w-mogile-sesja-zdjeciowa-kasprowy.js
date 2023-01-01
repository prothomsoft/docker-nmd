import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0004.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0006.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0012.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0014.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0015.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0018.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0020.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0022.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0025.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0028.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0030.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0032.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0033.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0035.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0037.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0039.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0040.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0043.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0057.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0062.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0073.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0075.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0078.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0085.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0089.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0092.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0094.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0096.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0099.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0102.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0104.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0105.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0107.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0108.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0109.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0111.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0112.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0115.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0155.webp", height: 295 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0128.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0134.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0139.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0156.webp", height: 332 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0145.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0146.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0147.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0150.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0151.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0153.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0152.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0154.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_start.webp"}
                    images={images}
                    headTitle={"Opactwo Cystersów w Mogile i sesja zdjęciowa Kasprowy Wierch"}
                    headDescription={"Kasprowy Wierch, Czarny Staw Gąsienicowy i ceremonia w Klasztorze Opactwa Cystersów w Mogile. W imieniu Anety i Damiana serdecznie zapraszam na mojego bloga."}
                    headKeywords={"opactwo cystersów mogiła,sesja zdjęciowa kasprowy wierch,plener ślubny czarny staw gąsienicowy"}
                    headUrl={"https://99foto.pl/opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy"}
                    entryContentP1={
                        "Tak, to był właśnie ten tydzień, długo zapowiadana pogoda, temperatura i odpowiednio pokolorowane liście. Wszystko tego dnia zapowiadało świetny plener w górach Słowacji. Zainspirowani zdjęciami kolegów fotografów, wybraliśmy się wszyscy po raz pierwszy w piękne miejsca, którymi były Popradzki Staw i Strbskie Pleso. Pierwsza miejscówka, w której nasz plan dnia podyktował nam postój to rzeka Poprad, która przecięła naszą drogę dojazdową do jeziora. Chwila niepewności i świetny widok z pewnością nie do powtórzenia już nawet następnego dnia, a co dopiero tydzień później. Ponieważ czasu do zachodu słońca było dużo, wdrapywaliśmy się przez godzinkę asfaltową drogą w miejsce, które zdecydowanie pokonuje Morskie Oko, a jest nim Popradzki Staw."
                    }
                    entryContentP2={
                        'Mniej ludzi, malownicze jezioro, ogromne góry, dużo świetnych kadrów do wypatrzenia. W drodze powrotnej zrobiliśmy też kilka zdjęć w lesie. Końcówka to szukanie dwóch kamieni z kadru <a href="https://www.marcinsosnicki.pl" target="_blank" rel="nofollow">Marcina Sośnickiego</a> i zachwyt nad jesienią oświetloną promieniami zachodzącego słońca. Na koniec zjedliśmy pyszny obiadek w Tatrzańskiej Łomnicy, zrelaksowani i zadowoleni wróciliśmy do naszych domów. Polecam to miejsce na plenery i mam nadzieję, że każdego roku znajdzie się jedna para, która mnie tam zabierze. Miłego oglądania.'
                    }
                    slug={"opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy"}
                    title={"OPACTWO CYSTERSÓW W MOGILE, SESJA ZDJĘCIOWA KASPROWY - ANETA i DAMIAN"}
                    tags={"Opactwo Cystersów Mogiła, Plener ślubny Czarny Staw Gąsienicowy, Sesja zdjęciowa Kasprowy Wierch"}
                    date={"16 września 2017"}
                    menuNames={"ANETA i DAMIAN"}
                    menuTitle={"OPACTWO CYSTERSÓW W MOGILE, SESJA ZDJĘCIOWA KASPROWY"}
                    leadNames={"OLA i PAWEŁ"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-w-plenerze-park-krajobrazowy-w-ojcowie-i-okolice"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_slubna_w_plenerze_park_krajobrazowy_w_ojcowie_i_okolice_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
