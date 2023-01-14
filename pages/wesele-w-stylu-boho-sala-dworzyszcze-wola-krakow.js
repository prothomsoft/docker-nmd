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
                    headTitle={"Wesele w stylu boho, sala Dworzyszcze Wola, Kraków"}
                    headDescription={"Sala weselna Dworzyszcze Wola, Kraków, wesele w stylu boho Sylwii i Michała. Wymarzone wesele w stylu rustykalnym blisko Krakowa. Zapraszam do oglądania."}
                    headKeywords={"wesele w stylu boho, wesele w stodole, ślub w klimacie rustykalnym"}
                    headUrl={"https://99foto.pl/wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"}
                    entryContentP1={
                        'Francuskie "bohème" tłumaczone na język polski jako "cyganeria" stanowi zalążek etymologiczny słowa i stylu "boho". Tym samym styl ten reprezentuje swobodę, nonszalancję, zawiera w sobie mnóstwo różnorodnych elementów folkowych i bez wątpienia jest nacechowany wpływami kultury hipisowskiej. Jakie czynniki zdecydowały o popularności tej stylistyki ślubnej w Małopolsce i Krakowie nie wiem. Jedno jest pewne styl boho na weselach króluje nieprzerwanie od kilku już lat. Pary młode organizują przyjęcia w stylu boho korzystając ze starannie zaadaptowanych, nieużywanych od lat stodół czy też specjalnie w tym celu zaprojektowanych i wybudowanych sal weselnych. Dobrze gdy miejsca te sąsiadują z jeziorem czy ukryte są w leśnej dżungli, pozwala to uciec od zgiełku miasta i na moment przenieść się bliżej natury - doświadczyć bohemy na własnej skórze. Cegła, drewno oraz duże przeszklenia tworzą ciepłe rustykalne wnętrza w którym goście weselni poczują się wyjątkowo. Doskonałym miejscem na tego typu przyjęcie ślubne jest <a href="http://dworzyszczewola.pl/" target="_blank" rel="nofollow">Dwór Dworzyszcze Wola</a> położony 25 minut drogi od centrum Krakowa. Opisując scenerię takiego śłubu nie możemy zapomnieć o kwiatach w bukiecie Panny Młodej, dekorujących wystrój sali, dobranych nie przypadkowo i nawiązujących do natury. Dekoracyjne lampki, lampiony to serce stylistyki boho, girlandy z żarówek snujące się nad parkietem, to elementy o których również warto pamiętać. Nie zapominajmy też o starannym przygotowaniu nakryć stołu oraz innych atrakcjach, które pozwolą umilić czas naszych gości. Fotografia ślubna w stylu boho charakteryzuje się niepowtarzalną atmosferą, łączy w sobie ruch, opowieść o Waszej miłości w romantycznym świetle blasku świec, tworząc niepowtarzalny album, który wytrzyma próbę czasu.'
                    }
                    entryContentP2={
                        'Tymczasem zostawmy tą poetykę uwielbianą przez wielkiego brata i wróćmy na ziemie. Ślub Sylwii i Michała był wyjątkowy z kilku względów. Limoncello słowo klucz od którego warto zacząć, czyli wspaniali przyjaciele, którzy wzruszali się, wspierali i wypełniali parkiet do ostatniego milimetra. Subtelne przygotowania i niezastąpiona Paulina, piękna ceremonia w <a href="https://parafiaproszowice.com.pl/" target="_blank" rel="nofollow">kościele pw. Wniebowzięcia Najświętszej Maryi Panny w Proszowicach</a> i ogień na parkiecie w sali weselnej <a href="http://dworzyszczewola.pl/" target="_blank" rel="nofollow">Dwór Dworzyszcze Wola</a>. Bezcenne wspomnienia i kilka zdjęć dzięki którym możemy wrócić myślami do tych niezapomnianych chwil. Sylwii i Michałowi dziękuję za zaufanie, Monice i Martinowi, których ślub odnajdziecie na moim blogu za marketing, a wszystkim gościom za setki oddanych w zamian emocji. Zapraszam do lajkowania, udostępniania i na zdjęcia poniżej z których przyznam jestem wyjątkowo zadowolony. Życzę miłego oglądania.'
                    }
                    slug={"wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"}
                    title={"WESELE W STYLU BOHO, SALA DWORZYSZCZE WOLA, KRAKÓW - SYLWIA i MICHAŁ"}
                    tags={"wesele w stylu boho, wesele w stodole, ślub w klimacie rustykalnym"}
                    date={"28 czerwca 2021"}
                    menuNames={"SYLWIA i MICHAŁ"}
                    menuTitle={"WESELE W STYLU BOHO, SALA DWORZYSZCZE WOLA, KRAKÓW"}
                    leadNames={"ŻANETA i SEBASTIAN"}
                    leadTitle={"DOM WESELNY BIAŁA PERŁA RADZIEMICE, REPORTAŻ ŚLUBNY"}
                    leadUrl={"/dom-weselny-biala-perla-radziemice-reportaz-slubny"}
                    leadImage={process.env.staticS3ImagesPath + "dom-weselny-biala-perla-radziemice-reportaz-slubny.webp"}
                />
            
        );
};

export default BlogPageComponent;
