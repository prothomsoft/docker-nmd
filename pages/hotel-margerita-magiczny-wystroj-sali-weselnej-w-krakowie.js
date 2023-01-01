import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0011.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0013.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0015.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0016.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0018.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0022.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0025.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0029.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0031.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0032.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0034.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0036.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0038.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0039.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0052.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0055.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0075.webp", height: 766 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0077.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0081.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0090.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0099.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0103.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0119.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0125.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0136.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0142.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0145.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0147.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0127.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie-start.webp"}
                    images={images}
                    headTitle={"Hotel Margerita Kraków ✔️ Ślub w Krakowie"}
                    headDescription={
                        "Hotel Margerita położony na trasie z Krakowa do Olkusza to świetne miejsce na ślub. Magiczny wystrój sali weselnej, który zachwyci Waszych gości. Zapraszam na reportaż ślubny Natalii i Piotra."
                    }
                    headKeywords={"Hotel Margerita Kraków, magiczny wystrój sali weselnej, ślub w Krakowie"}
                    headUrl={"https://99foto.pl/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie"}
                    entryContentP1={
                        'Sobotnie przedpołudnie i bardzo słoneczny dzień rozpoczęliśmy razem ze świadkiem i jak się chwilę później okazało specjalistą od oświetlenia Round Flashem Łukaszem w Jerzmanowicach, fotografując przygotowania Piotra. Piękny ogród i rozłożyste drzewa wzdłóż podjazdu, wymarzone warunki by zamieszkać spokojnie zdala od miejskiego zgiełku i delektować się spokojem po pracy w sąsiedztwie Ojcowskiego Parku Narodowego. Mama Piotra przygotowała dla nas kawkę, a Tato okazał się być pasjonatem fotografii, więc trochę porozmawialiśmy o Smienach, Zenitach, powiększalnikach, koreksach i takich tam. Łukasz podszedł do tematu analitycznie, dopasował ilość żelu na włosach, ilość pasty na butach Piotra, powpinał spinki do mankietów i zapiął bordową muchę. Gdy wszystko było już gotowe czekał nas powrót do Krakowa na przygotowania Natalii. Makijaż odbył się w samym centum naszego pięknego miasta w <a href="https://www.facebook.com/Glamour-Hair-Studio-Studio-fryzur-i-kosmetyki-124677987586758/Glamour" target="_blank" rel="nofollow">Salonie Hair & Beauty Studio</a> Luizy Borkowskiej.  Podczas gdy Luiza wykonała świetny i profesjonalny makijaż, Łukasz dzielnie asystował, a dziewczyny kombinowały coś z brwiami na fotelu obok.'
                    }
                    entryContentP2={
                        'Gdy makijaż był gotowy udaliśmy się do domu Natalii, gdzie kuzynka, a w tym wyjątkowym dniu druhna Magda pomagała w przygotowaniach. Nieprzypadkowo powieszony welon i świetnie urządzone mieszkanie w kolorze blue, piękna Natalia i Magda, promienie słońca wpadające świetlikiem były gwarancją niesamowitych zdjęć. Gdy zebrali się już wszyscy zaproszeni goście Tato Natalii wykorzystał jedyną w swoim życiu okazję na krótkie przemówienie po którym odbyło się błogosławieństwo.  Ceremonia odbyła się w <a href="https://www.biezanow.diecezja-krakow.pl/">Kościele Narodzenia NMP</a> znajdującym się w Krakowskim Starym Bieżanowie. Ambona zapełniała się kolejnymi prelegentami, wśrod których brylował Łukasz (tak to słowo tu pasuje). Przysłuchując się dźwiękom dobiegającym z chóru można było usłyszeć pięknie brzmiące skrzypce. Po zdjęciu grupowym Para Młoda zaprosiła gości do <a href="https://www.margerita.pl/" target="_blank" rel="nofollow">Hotelu, Restauracji Margerita</a>. Magiczny wystrój sali mocno przypadł do gustu gościom weselnym. Odbyły się życzenia, pierwszy taniec w chmurach ktore zorganizował <a href="https://www.facebook.com/DJ4U-Piotr-P%C5%82awski-466649040058113/" target="_blank" rel="nofollow">DJ Piotr</a>, kolejne atrakcje to fotobudka z gadżetami, pociąg, podziękowania dla rodziców, pyszny tort i oczywiście zabawy oczepinowe. Na filmie imprezę uwieczniał <a href="https://www.facebook.com/yurievfilm/" target="_blank" rel="nofollow">Serhij Juriev ze Stylowe Wesele</a>, który był niekwestionowanym mistrzem odnajdywania idealnego światła. Niesamowity dzień, spędzony w wybornym towarzystwie. Natalio i Piotrze cieszę się bardzo, że mogłem być tam z Wami w tych najważniejszych chwilach Waszego życia. Zapraszam do oglądania zdjęć. Po więcej zapraszam do strefy klienta.'
                    }
                    slug={"hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie"}
                    title={"HOTEL MARGERITA, MAGIA SALI WESELNEJ W KRAKOWIE - NATALIA i PIOTR"}
                    tags={"Hotel Margerita Kraków, magiczny wystrój sali weselnej, ślub w Krakowie"}
                    date={"12 kwietnia 2018"}
                    menuNames={"NATALIA i PIOTR"}
                    menuTitle={"HOTEL MARGERITA, MAGIA SALI WESELNEJ W KRAKOWIE"}
                    leadNames={"JOANNA i GRZEGORZ"}
                    leadTitle={"WESELE NA POLU GOLFOWYM W PACZÓŁTOWICACH"}
                    leadUrl={"/wesele-na-polu-golfowym-w-paczoltowicach"}
                    leadImage={process.env.staticS3ImagesPath + "wesele_na_polu_golfowym_w_paczoltowicach_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
