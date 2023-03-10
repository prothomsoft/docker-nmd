import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0006.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0004.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0007.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0008.webp", height: 402 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0010.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0011.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0012.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0013.webp", height: 402 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0020.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0018.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0021.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0022.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0023.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0027.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0030.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0036.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0038.webp", height: 402 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0042.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0044.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0048.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0160.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0161.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0061.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0066.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0069.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0162.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0080.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0082.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0083.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0084.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0086.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0088.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0090.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0093.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0095.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0097.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0098.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0100.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0102.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0109.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0114.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0118.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0122.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0128.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0130.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0134.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0150.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0151.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0147.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0152.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sala_bankietowa_triana_mogilany.webp"}
                    images={images}
                    headTitle={"Sala Bankietowa Triana Mogilany, Reporta?? ??lubny Podstolice"}
                    headDescription={"Sala Bankietowa Triana Mogilany, reporta?? ??lubny Pauliny i Paw??a Podstolice. Nowoczesna i jasna sala weselna w okolicach Krakowa. Zapraszam do ogl??dania."}
                    headKeywords={"Sala Bankietowa Triana Mogilany, Reporta?? ??lubny Podstolice, sala weselna okolice Krakowa"}
                    headUrl={"https://99foto.pl/sala-bankietowa-triana-mogilany-reportaz-slubny-podstolice"}
                    entryContentP1={
                        'Ko??c??wka sierpnia i pocz??tek wrze??nia min????y b??yskawicznie i na moim blogu zamie??ci??em relacje z kilku sesji plenerowych. Wrze??niowa pogoda i rowerki Marty i Micha??a odstawione do gara??owej rezerwy pozwalaj?? wr??ci?? do cotygodniowych wpis??w ??lubnych. Nowe otwarcie rozpoczn?? od pokazania ??wietnie zorganizowanego ??lubu Pauliny i Paw??a, kt??ry odby?? si?? w ubieg??y pi??tek w przepi??knej sali weselnej po??o??onej w niedalekiej odleg??o??ci od Krakowa - <a href="https://wesela.jurek-catering.pl/" target="_blank" rel="nofollow">Sali bankietowej Triana</a> w Mogilanach. Dzie?? rozpocz??li??my od makija??u Pauliny, kt??ry wykona??a Michalina Mikrut z <a href="https://www.facebook.com/allureofmakeup/" target="_blank" rel="nofollow">Allure of Makeup</a>. Nast??pnie, na kr??tk?? chwil?? odwiedzi??em dom rodzinny Pana M??odego. Pozna??em przemi??ych rodzic??w Paw??a i przy okazji zrobi??em kilka zdj???? z przygotowa?? (krawacik, rowerowe spinki i takie tam). Paulina ubiera??a si?? korzystaj??c z pomocy swojej Mamy oraz wielu innych pomocnik??w. Dzi??ki temu przygotowania odby??y si?? sprawnie i nadszed?? czas pe??nego emocji b??ogos??awie??stwa. Naturalna kolej rzeczy doprowadzi??a nas do ceremonii za??lubin, kt??ra odby??a si?? w zabytkowym, drewnianym powsta??ym 1870 roku <a href="https://www.podstolice.diecezja.krakow.pl/" target="_blank" rel="nofollow">Ko??ciele  p.w. Ducha ??wi??tego w Podstolicach</a>.'
                    }
                    entryContentP2={
                        'Wirtuozeria skrzypiec i umiarkowana powaga ksi??dza proboszcza nada??y tym trzem kwadransom, niezwyk??y wymiar i przepi??kne t??o dla momentu najwa??niejszego, czyli sakramentalnego TAK. Przeprawa przez Zakopiank??, kt??ra w godzinach szczytu komunikacyjnego przypomina??a komputerow?? gr?? Frogger, by??a dodatkow?? atrakcj?? na trasie do wspomnianego ju?? wcze??niej miejsca imprezy. Gdy wszyscy go??cie weselni dotarli na miejsce <a href="https://wesela.jurek-catering.pl/" target="_blank" rel="nofollow">Sala bankietowa Triana</a> uzna??a imprez?? za otwart??, rodzice tradycyjnie przywitali Par?? M??od?? chlebem i sol??, polecia??y kieliszki i po gor??cych ??yczeniach zaserwowano przepyszny obiad. Zesp???? Monaver z Jaros??awia, kt??ry zachwyci?? mnie mistrzowskim wykonaniem utworu Paw??a Domaga??y - "We?? nie pytaj" - gra?? ??wietnie i mocno pracowa?? na kolejnych poch??dz??cych z referencji klient??w. Ka??d?? minut?? profesjonalnie filmowa?? ??ukasz Korzeniowski z <a href="https://www.facebook.com/filmartelukaszkorzeniowski/" target="_blank" rel="nofollow">Film Arte</a>. Zawsze mi??o spotka?? filmowca z krwi i ko??ci na fotograficznej ??lubnej ??cie??ce. Go??cie bawili si?? ??wietnie, korzystaj??c z foto budki i S??awomira unplugged. D??ugo m??g??bym opisywa?? wszystko to co dzia??o si?? na parkiecie tego wieczora. Paulino i Pawle, dzi??kuj?? za zaufanie i super dzie?? w Waszym towarzystwie. Zapraszam na zdj??cia blogowe i po wi??cej do strefy klienta, po wpisaniu has??a z mojej wizyt??wki. Mi??ego ogl??dania.'
                    }
                    slug={"sala-bankietowa-triana-mogilany-reportaz-slubny-podstolice"}
                    title={"SALA WESELNA TRIANA MOGILANY, REPORTA?? ??LUBNY PODSTOLICE - PAULINA i PAWE??"}
                    tags={"Sala Bankietowa Triana Mogilany, Reporta?? ??lubny Podstolice, sala weselna okolice Krakowa"}
                    date={"21 wrze??nia 2018"}
                    menuNames={"PAULINA i PAWE??"}
                    menuTitle={"SALA WESELNA TRIANA MOGILANY, REPORTA?? ??LUBNY PODSTOLICE"}
                    leadNames={"KRISTINA i ALEKSANDR"}
                    leadTitle={"SESJA ??LUBNA W PIESKOWEJ SKALE i ZAMEK KORZKIEW"}
                    leadUrl={"/sesja-slubna-w-pieskowej-skale-i-zamek-korzkiew"}
                    leadImage={process.env.staticS3ImagesPath + "plener_slubny_zamek_pieskowa_skala.webp"}
                />
            
        );
};

export default BlogPageComponent;
