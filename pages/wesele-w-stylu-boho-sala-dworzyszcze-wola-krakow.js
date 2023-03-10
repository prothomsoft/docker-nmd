import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0001.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0002.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0003.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0006.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0005.webp", height: 763 },          
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0007.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0008.webp", height: 506 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0010.webp", height: 506 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0013.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0014.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0015.webp", height: 527 },         
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0016.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0018.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0020.webp", height: 390 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0021.webp", height: 558 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0023.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0022.webp", height: 523 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0025.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0027.webp", height: 383 },  
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0028.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0030.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0032.webp", height: 763 }, 
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0031.webp", height: 763 },          
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0038.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0049.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0054.webp", height: 383 },         
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0058.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0061.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0062.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0063.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0065.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0068.webp", height: 806 },          
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0069.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0072.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0074.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0075.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0076.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0077.webp", height: 763 },           
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0079.webp", height: 730 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0081.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0082.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0084.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0085.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0086.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0087.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0088.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0089.webp", height: 735 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0090.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0093.webp", height: 864 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0095.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0097.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0098.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0099.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0102.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0103.webp", height: 763 },        
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0105.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0104.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0115.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0116.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0120.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0123.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0124.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0128.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0131.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0132.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0133.webp", height: 763 },          
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0136.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0138.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0141.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0140.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0139.webp", height: 763 }, 
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0142.webp", height: 763 }
                 
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "dworzyszcze_wola_reportaz_slubny_pod_krakowem_start.webp"}
                    images={images}
                    headTitle={"Wesele w stylu boho, sala Dworzyszcze Wola, Krak??w"}
                    headDescription={"Sala weselna Dworzyszcze Wola, Krak??w, wesele w stylu boho Sylwii i Micha??a. Wymarzone wesele w stylu rustykalnym blisko Krakowa. Zapraszam do ogl??dania."}
                    headKeywords={"wesele w stylu boho, wesele w stodole, ??lub w klimacie rustykalnym"}
                    headUrl={"https://99foto.pl/wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"}
                    entryContentP1={
                        'Francuskie "boh??me" t??umaczone na j??zyk polski jako "cyganeria" stanowi zal????ek etymologiczny s??owa i stylu "boho". Tym samym styl ten reprezentuje swobod??, nonszalancj??, zawiera w sobie mn??stwo r????norodnych element??w folkowych i bez w??tpienia jest nacechowany wp??ywami kultury hipisowskiej. Jakie czynniki zdecydowa??y o popularno??ci tej stylistyki ??lubnej w Ma??opolsce i Krakowie nie wiem. Jedno jest pewne styl boho na weselach kr??luje nieprzerwanie od kilku ju?? lat. Pary m??ode organizuj?? przyj??cia w stylu boho korzystaj??c ze starannie zaadaptowanych, nieu??ywanych od lat stod???? czy te?? specjalnie w tym celu zaprojektowanych i wybudowanych sal weselnych. Dobrze gdy miejsca te s??siaduj?? z jeziorem czy ukryte s?? w le??nej d??ungli, pozwala to uciec od zgie??ku miasta i na moment przenie???? si?? bli??ej natury - do??wiadczy?? bohemy na w??asnej sk??rze. Ceg??a, drewno oraz du??e przeszklenia tworz?? ciep??e rustykalne wn??trza w kt??rym go??cie weselni poczuj?? si?? wyj??tkowo. Doskona??ym miejscem na tego typu przyj??cie ??lubne jest <a href="http://dworzyszczewola.pl/" target="_blank" rel="nofollow">Dw??r Dworzyszcze Wola</a> po??o??ony 25 minut drogi od centrum Krakowa. Opisuj??c sceneri?? takiego ????ubu nie mo??emy zapomnie?? o kwiatach w bukiecie Panny M??odej, dekoruj??cych wystr??j sali, dobranych nie przypadkowo i nawi??zuj??cych do natury. Dekoracyjne lampki, lampiony to serce stylistyki boho, girlandy z ??ar??wek snuj??ce si?? nad parkietem, to elementy o kt??rych r??wnie?? warto pami??ta??. Nie zapominajmy te?? o starannym przygotowaniu nakry?? sto??u oraz innych atrakcjach, kt??re pozwol?? umili?? czas naszych go??ci. Fotografia ??lubna w stylu boho charakteryzuje si?? niepowtarzaln?? atmosfer??, ????czy w sobie ruch, opowie???? o Waszej mi??o??ci w romantycznym ??wietle blasku ??wiec, tworz??c niepowtarzalny album, kt??ry wytrzyma pr??b?? czasu.'
                    }
                    entryContentP2={
                        'Tymczasem zostawmy t?? poetyk?? uwielbian?? przez wielkiego brata i wr????my na ziemie. ??lub Sylwii i Micha??a by?? wyj??tkowy z kilku wzgl??d??w. Limoncello s??owo klucz od kt??rego warto zacz????, czyli wspaniali przyjaciele, kt??rzy wzruszali si??, wspierali i wype??niali parkiet do ostatniego milimetra. Subtelne przygotowania i niezast??piona Paulina, pi??kna ceremonia w <a href="https://parafiaproszowice.com.pl/" target="_blank" rel="nofollow">ko??ciele pw. Wniebowzi??cia Naj??wi??tszej Maryi Panny w Proszowicach</a> i ogie?? na parkiecie w sali weselnej <a href="http://dworzyszczewola.pl/" target="_blank" rel="nofollow">Dw??r Dworzyszcze Wola</a>. Bezcenne wspomnienia i kilka zdj???? dzi??ki kt??rym mo??emy wr??ci?? my??lami do tych niezapomnianych chwil. Sylwii i Micha??owi dzi??kuj?? za zaufanie, Monice i Martinowi, kt??rych ??lub odnajdziecie na moim blogu za marketing, a wszystkim go??ciom za setki oddanych w zamian emocji. Zapraszam do lajkowania, udost??pniania i na zdj??cia poni??ej z kt??rych przyznam jestem wyj??tkowo zadowolony. ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"}
                    title={"WESELE W STYLU BOHO, SALA DWORZYSZCZE WOLA, KRAK??W - SYLWIA i MICHA??"}
                    tags={"wesele w stylu boho, wesele w stodole, ??lub w klimacie rustykalnym"}
                    date={"28 czerwca 2021"}
                    menuNames={"SYLWIA i MICHA??"}
                    menuTitle={"WESELE W STYLU BOHO, SALA DWORZYSZCZE WOLA, KRAK??W"}
                    leadNames={"??ANETA i SEBASTIAN"}
                    leadTitle={"DOM WESELNY BIA??A PER??A RADZIEMICE, REPORTA?? ??LUBNY"}
                    leadUrl={"/dom-weselny-biala-perla-radziemice-reportaz-slubny"}
                    leadImage={process.env.staticS3ImagesPath + "dom-weselny-biala-perla-radziemice-reportaz-slubny.webp"}
                />
            
        );
};

export default BlogPageComponent;
