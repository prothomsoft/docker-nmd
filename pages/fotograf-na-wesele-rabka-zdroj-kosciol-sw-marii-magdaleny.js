import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0006.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0005.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0010.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0003.webp", height: 526 },  
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0008.webp", height: 566 },       
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0007.webp", height: 763 },           
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0009.webp", height: 594 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0002.webp", height: 526 },         
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0011.webp", height: 762 }, 
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0013.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0014.webp", height: 527 },         
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0016.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0023.webp", height: 763 },    
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0019.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0021.webp", height: 458 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0022.webp", height: 763 },        
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0024.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0025.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0026.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0027.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0028.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0031.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0032.webp", height: 682 },           
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0033.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0037.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0038.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0042.webp", height: 762 },            
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0040.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0041.webp", height: 763 },          
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0050.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0045.webp", height: 763 },        
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0055.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0057.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0058.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0065.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0064.webp", height: 763 }, 
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0067.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0068.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0073.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0074.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0077.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0079.webp", height: 487 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0080.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0082.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0081.webp", height: 527 },     
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0084.webp", height: 763 },      
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0083.webp", height: 527 },          
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0086.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0088.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0091.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0093.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0095.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0097.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0099.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0102.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0100.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0103.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0101.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0106.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0108.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0110.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0113.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0115.webp", height: 383 },           
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0117.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0120.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0122.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0125.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0124.webp", height: 763 },           
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0126.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0128.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0130.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0132.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0133.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0134.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0137.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0136.webp", height: 763 },           
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0138.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0140.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0142.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0145.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0147.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0148.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0152.webp", height: 763 },    
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0150.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0158.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0159.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0156.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0160.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0163.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0164.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0155.webp", height: 383 },  
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0153.webp", height: 763 },           
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0154.webp", height: 382 },        
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/fotograf_na_slub_rabka_zdroj_0157.webp", height: 763 }                 
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "fotograf_na_slub_rabka_zdroj_start.webp"}
                    images={images}
                    headTitle={"Fotograf na wesele Rabka Zdr??j, Ko??ci???? ??w. Marii Magdaleny"}
                    headDescription={"Gotycki przepi??kny Ko??ci???? ??w. Marii Magdaleny, zabawa weselna w sali Kabanos w Spytkowicah i fotograf na wesele. Reporta?? ze ??lubu Kamili i Adriana. Zapraszam na bloga i do ogl??dania."}
                    headKeywords={"fotograf na wesele Rabka Zdr??j, ko??ci???? ??w. Marii Magdaleny w Rabce, sala weselna Kabanos w Spytkowicach"}
                    headUrl={"https://99foto.pl/fotograf-na-wesele-rabka-zdroj-kosciol-sw-marii-magdaleny"}
                    entryContentP1={
                        'Wasz ??lub jest zaplanowany, macie doskona??y zesp???? muzyczny, kt??ry porwie go??ci weselnych do ta??ca, macie sale weseln?? w stylu, kt??ry chodzi?? Wam po g??owie od d??u??szego czasu. Idealnie by??oby gdyby te wszytkie elementy, momenty wzruszenia, u??miechy i ??zy rado??ci pozosta??y nie tylko w Waszej pami??ci ale r??wnie?? w pi??knym ponadczasowym albumie ??lubnym. Wszyscy wiemy, ??e nawet po wielu latach zdj??cia potrafi?? wzbudzi?? podobne uczucia, jakie towarzyszy??y Wam tego wa??nego dnia. Odpowied?? na pytanie jak to zrobi?? w dobie internetu nie jest trudna. Wystarczy przegl??darka internetowa i wpisanie frazy najlepszy fotograf ??lubny w Krakowie, Rabce Zdr??j czy w dowolnym innym miejscu. Przegl??daj??c wyniki wyszuka?? warto zwr??ci?? uwag?? na styl fotografa ??lubnego, poniewa?? zwykle jest on powtarzalny i zale??ny od u??ywanego sprz??tu, osobowo??ci, zaanga??owania i oka do kadru. Koniecznie zwr????cie te?? uwag?? na jako???? zdj????, czyli ich poprawno???? techniczn?? pod k??tem ekspozycji, kontrastu i kolor??w. Wa??ne jest te?? umiej??tne wychwycenie istotnych element??w, detali, ulotnych chwil, zwanych w ??argonie fotograficznym momentem decyduj??cym i u??o??enie ich w opowiadanie, kt??re w ciekawy i niestandardowy spos??b zrelacjonuje przebieg zdarze?? dnia Waszego ??lubu. Poniewa?? fotograf ??lubny to osoba, kt??ra sp??dzi z Wami niemal ca??y dzie??, b??dzie obecny w chwilach prywatnych, pe??nych wzrusze?? i prze??y?? istotne jest wi??c, ??eby czu?? si?? przy nim swobodnie. Dobrze jest skorzysta?? z polecenia znajomych, kt??rzy poznali charakter i osobowo???? fotografa podczas ich w??asnego reporta??u ??lubnego, czasem warto wybra?? si?? na sesj?? narzecze??sk?? i na niej sprawdzi??, czy to jest "the perfect guy for the job". Na koniec koniecznie sprawd??cie te?? ilo???? oddawanych zdj????, mo??liwo???? realizacji profesjonalnego albumu fotograficznego, pleneru w wybranym dniu po ??lubie i ceny, kt??ra nie powinna przekroczy?? wp??ywu z kopertowych.'
                    }
                    entryContentP2={
                        'Gar???? z??otych rad dotycz??cych wyboru najlepszego fotografa ??lubnego mamy ju?? za sob?? wi??c wr????my na ??lub Kamili i Adriana. Pa??dziernik 2017 roku, jeden dom dalej w najbli??szym s??siedztwie w Rabce Zdr??j fotografowa??em ??lub Iwony i Marcina, kt??ry wci???? mo??ecie znale???? na moim <a href="https://www.99foto.pl/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice" target="_blank" rel="nofollow">blogu</a> i no c????, powspomina??. Wiedzia??em, ??e sala weselna potocznie zwana <a href="http://przystanwkabanosie.pl/pl/page/6/Restauracja_Spytkowice/" target="_blank" rel="nofollow">Kabanosem w Spytkowicach</a>, rodzina i przyjaciele, kt??rzy potrafi?? si?? bawi?? jak nikt inny, <a href="https://www.music-man.com/instruments/guitars/the-majesty" target="_blank" rel="nofollow">Music Many Majesty</a> S??awka rozgrzej?? <a href="https://www.youtube.com/watch?v=2JbnG2vZN-Y" target="_blank" rel="nofollow"/>okr??t, kt??ry p??ynie dalej</a> do czerwono??ci. Gdyby kto?? si?? martwi??, ??e mo??e b??dzie zbyt ciemno, albo zbyt ma??o wystrza??owo, no worries - <a href="https://www.facebook.com/Camelot-Sound-684274261607681/" target="_blank" rel="nofollow">Camelot</a> i tona sprz??tu na parkiecie zrobi??y robot??. <a href="https://www.facebook.com/filmywparzezfotografia" target="_blank" rel="nofollow">Filmy w parze z fotografi??</a> czyli niezast??pieni Sandra i Patryk, od zawsze para, a ju?? nied??ugo para forever, nie pozwolili umkn???? nawet sekundzie wydarze?? z przygotowa??, ??lubu i zabawy weselnej. Pierwszy raz fotografowa??em w <a href="http://parafia.rabka.swmm.eu/" target="_blank" rel="nofollow">Ko??ciele ??w. Marii Magdaleny w Rabce Zdroju</a>. Neogotycka architektura, ??wietne o??wietlenie i niesmowite kolory, kilkuosobowy ch??r na ch??rze definitywnie postawi??y kropk?? nad i. TATA "Very Important Person" wprowadzaj??cy Kamil?? do ko??cio??a, w takiej oprawie to kadr marzenie dla wielu fotograf??w i znalezienie si?? w odpowiednim czasie w miejscu, kt??re pozwala wyzwoli?? migawk?? i z??apa?? ten moment doskonale definiuje cel kilkuletniej pracy fotografa ??lubnego. Dodam, ??e pewnie ka??dy tak jak i ja chcia??by mie?? takie zdj??cie w swojej kolekcji rodzinnych wspomnie??. Serdecznie dzi??kuj?? Kamili i Adrianowi za zaufanie i ??wietn?? atmosfer?? podczas ca??ego dnia ????ubu, a wszystkich go??ci weselnych, rodzin?? bli??sz?? i dalsz??, znajomych i przyjaci???? zapraszam na zdj??cia na blogu i po wi??cej do strefy klienta. ??ycz?? mi??ego dnia i mi??ego ogl??dania.'
                    }
                    slug={"fotograf-na-wesele-rabka-zdroj-kosciol-sw-marii-magdaleny"}
                    title={"FOTOGRAF NA WESELE RABKA ZDR??J, KO??CI???? ??W. MARII MAGDALENY - KAMILA i ADRIAN"}
                    tags={"fotograf na wesele Rabka Zdr??j, ko??ci???? ??w. Marii Magdaleny w Rabce, sala weselna Kabanos w Spytkowicach"}
                    date={"26 sierpnia 2021"}
                    menuNames={"KAMILA i ADRIAN"}
                    menuTitle={"FOTOGRAF NA WESELE RABKA ZDR??J, KO??CI???? ??W. MARII MAGDALENY"}
                    leadNames={"SYLWIA i MICHA??"}
                    leadTitle={"WESELE W STYLU BOHO, SALA DWORZYSZCZE WOLA, KRAK??W"}
                    leadUrl={"/wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"}
                    leadImage={process.env.staticS3ImagesPath + "dworzyszcze_wola_reportaz_slubny_pod_krakowem_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
