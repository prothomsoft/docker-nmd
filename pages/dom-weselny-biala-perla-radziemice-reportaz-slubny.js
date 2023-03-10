import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0003.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0005.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0007.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0008.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0009.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0010.webp", height: 383 }, 
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0012.webp", height: 383 },          
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0014.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0015.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0017.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0020.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0021.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0025.webp", height: 763 },            
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0023.webp", height: 383 }, 
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0026.webp", height: 763 },      
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0028.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0030.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0032.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0034.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0037.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0041.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0043.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0044.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0060.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0050.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0049.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0055.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0053.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0143.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0059.webp", height: 763 },          
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0065.webp", height: 660 },      
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0068.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0071.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0076.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0077.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0078.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0073.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0074.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0081.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0096.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0098.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0099.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0100.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0102.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0105.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0107.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0108.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0110.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0112.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0114.webp", height: 763 },         
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0118.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0119.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0124.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0125.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0127.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0128.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0129.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0131.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0135.webp", height: 527 },          
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0132.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0136.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0141.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0138.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0140.webp", height: 763 },            
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0142.webp", height: 762 }          
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "dom-weselny-biala-perla-radziemice-reportaz-slubny.webp"}
                    images={images}
                    headTitle={"Dom Weselny Bia??a Per??a Radziemice, reporta?? ??lubny"}
                    headDescription={"Dom Weselny Bia??a Per??a, Radziemice, reporta?? ??lubny ??anety i Sebastiana. Sala ??lubna na wymarzone wesele blisko Krakowa. Zapraszam do ogl??dania."}
                    headKeywords={"Dom Weselny Bia??a Per??a, reporta?? ??lubny krak??w, ??lubna sesja zdj??cia, sala ??lubna, wesele pod krakowem"}
                    headUrl={"https://99foto.pl/dom-weselny-biala-perla-radziemice-reportaz-slubny"}
                    entryContentP1={
                        'Ostatni reporta?? ??lubny na moim blogu opublikowa??em w po??owie sierpnia ubieg??ego roku. Od tego czasu mogli??cie zobaczy?? kilka sesji plenerowych. Chcia??em w ten spos??b uciec od trend??w panuj??cych na grupach fotograficznych pokazuj??cych ??luby w pryzmacie pandemii - fenomen masek, czy tort??w zamkni??tych w lod??wkach prywatnych mieszka?? nigdy do mnie nie przemawia??. Fotografuj??c ??luby zawsze skupiam si?? na ludziach, emocjach, pi??knych detalach i ciekawych do pokazania miejscach. Fotografia ??lubna musi nie???? ze sob?? dawk?? emocji, kt??re b??d?? wspominane przez ca??e ??ycie. Reporta?? ??lubny musi to by?? natomiast sp??jne opowiadanie, kt??re przeka??e historie Pary M??odej zar??wno dzieciom, jak i wnukom, bliskim i dalszym znajomym podczas wsp??lnych spotka??. Pi??kno tego jedynego dnia, momenty wzruszenia, u??miechy Nowo??e??c??w, rado???? i zabawa zaproszonych go??ci, tego nie da si?? opowiedzie?? to trzeba zobaczy?? najlepiej na zdj??ciach.'
                    }
                    entryContentP2={
                        'Czwartkowy reporta?? rozpocz??li??my od przygotowa?? ??anety i Sebastiana. Od pocz??tku towarzyszy?? mi Szymon z <a href="https://www.facebook.com/cinebury" target="_blank" rel="nofollow">Cinebury</a>, z kt??rym ju?? wcze??niej mia??em przyjemno???? pracowa??. ??wiadek Mateusz jak zwykle punktualny przypali?? kuba??skie cygaro, a druhny, razem z Mam?? i siostrami pomog??y ??anecie w ubieraniu sukni i zadba??y, by wszystkie dodatki znalaz??y si?? na w??a??ciwym miejscu. B??ogos??awie??stwo, sakramentalne TAK w <a href="https://diecezja.kielce.pl/parafie/radziemice-sw-stanislawa-b-m" target="_blank" rel="nofollow">Ko??ciele ??w. Stanis??awa biskupa i m??czennika</a>, wsp??lne zdj??cie grupowe i chill w <a href="https://dworekbialaperla.pl/" target="_blank" rel="nofollow">Domu Weselnym Bia??a Per??a w Radziemicach</a>. <a href="https://www.facebook.com/profile.php?id=100046824468125" target="_blank" rel="nofollow">Zesp???? Muzyczny Cosmo</a> przyjecha?? do nas z ??owicza, przywi??z?? nowe spojrzenie na zabawy weselne i weselne szlagiery znane ju?? wszystkim doskonale. Dzi??kuj?? za zaufanie i ??wietne chwile, kt??re mog??em razem z Wami dzieli??. Spotkamy si?? jeszcze na sesji plenerowej i ju?? wiem, ??e b??dzie to kolejny sukces. Serdecznie zapraszam na zdj??cia i ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"dom-weselny-biala-perla-radziemice-reportaz-slubny"}
                    title={"DOM WESELNY BIA??A PER??A RADZIEMICE, REPORTA?? ??LUBNY - ??ANETA i SEBASTIAN"}
                    tags={"Dom Weselny Bia??a Per??a, reporta?? ??lubny krak??w, ??lubna sesja zdj??cia, sala ??lubna, wesele pod krakowem"}
                    date={"8 czerwca 2021"}
                    menuNames={"??ANETA i SEBASTIAN"}
                    menuTitle={"DOM WESELNY BIA??A PER??A RADZIEMICE, REPORTA?? ??LUBNY"}
                    leadNames={"ANNA i PAWE??"}
                    leadTitle={"PA??AC GOETZ MIEJSCE NA WESELE i PLENER ??LUBNY MARZE??"}
                    leadUrl={"/palac-goetz-wesele-plener-slubny"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_slubna_palac_goetza.webp"}
                />
            
        );
};

export default BlogPageComponent;
