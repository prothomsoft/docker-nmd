import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0001.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0009.webp", height: 382 },            
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0005.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0002.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0012.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0013.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0015.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0017.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0019.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0021.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0022.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0025.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0020.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0024.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0026.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0027.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0028.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0029.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0031.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0032.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0033.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0036.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0035.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0037.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0040.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0038.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0039.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0041.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0043.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0042.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0044.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0046.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0045.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0047.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0048.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0049.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0050.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0051.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0052.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0053.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0054.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0055.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0056.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0058.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0069.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0059.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0060.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0061.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0062.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0063.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0064.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0066.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0067.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0068.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0070.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0071.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0073.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0075.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0072.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0074.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0076.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0078.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0077.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0081.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0082.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0084.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0085.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0087.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0088.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0090.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0093.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0094.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0095.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0096.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0098.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0099.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0100.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0102.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0104.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0105.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0106.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0107.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0112.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0109.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0110.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0111.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0113.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0114.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0115.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0116.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0117.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0118.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0119.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0120.webp", height: 805 },            
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0122.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0121.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0123.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0124.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0125.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0126.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0127.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0128.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0129.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0130.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0131.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0132.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0133.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0135.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0140.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0137.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0142.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0138.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0139.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0136.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0141.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0143.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0146.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0147.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0148.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "klaudia_przemek_start.webp"}
                    images={images}
                    headTitle={"Karolinka Bystra Podhala??ska, Wesele Stra??ackie"}
                    headDescription={"Sala weselna Karolinka Bystra Podhala??ska. Wesele stra??ackie wynikaj??ce z tradycji rodzinnych. Klaudia i Przemys??aw. Serdecznie zapraszam."}
                    headKeywords={"Sala weselna Karolinka Bystra Podhala??ska, dom weselny karolinka"}
                    headUrl={"https://99foto.pl/sala-weselna-karolinka-bystra-podhalanska"}
                    entryContentP1={
                        '<a href="https://parafiatokarnia.pl/" target="_blank" rel="nofollow noopener noreferrer">Ko??ci???? Matki Bo??ej ??nie??nej w Tokarni</a> odwiedzam regularnie przy okazji weekendowych wizyt czy imprez rodzinnych. Tym razem po raz pierwszy po generalnym remoncie fotografowa??em w tym Ko??ciele ceremoni?? ??lubn?? Klaudii i Przemka. Ogl??daj??c zdj??cia zobaczycie, ??e by?? to doskonale zorganizowany ??lub z opraw?? stra??ack??, kt??r?? przygotowa??y zast??py stra??ackie z Tokarni i Wadowic. Kilka minut przygotowa?? u Przemka i od razu mog??em si?? zorientowa??, ??e stra??akiem nie zosta?? on z przypadku, a s??u??ba w stra??y po??arnej jest bardzo wa??na dla niego i jego ca??ej rodziny. Dlatego te?? zamiast garnituru wybra?? mundur stra??acki. By??o to wi??c prawdziwe wesele stra??ackie z asyst?? samochod??w po??arniczych, stra??ack?? bram?? weseln??, specjalnie przygotowanymi zadaniami i szpalerem reprezentacyjnym utworzonym podczas ceremoni i przy wyj??ciu z Ko??cio??a.'
                    }
                    entryContentP2={
                        'Reporta?? ??lubny z tego wa??nego dla Klaudii i Przemka dnia rozpocz???? si?? w domu Panny M??odej od makija??u, kt??ry doskonale wykona??a Marlena z <a href="https://www.instagram.com/marlenazadoramakeup" target="_blank" rel="nofollow noopener noreferrer">Marlena Zadora Makeup</a>. Nie wiem czy wiecie, ale ??lub Marleny mia??em przyjemmo???? fotografowa?? trzy lata temu i wtedy r??wnie?? stra??acy z Tokarni uczcili ??lub Marleny i Ma??ka. Po pi??knej ceremonii ??lubnej odwiedzili??my <a href="https://www.facebook.com/domweselnykarolinka" target="_blank" rel="nofollow noopener noreferrer">Dom Weselny Karolinka w Bystrej Podhala??skiej</a>. Gdy wszyscy go??cie dotarli na sale weseln??, rodzice przywitali Par?? M??od?? chlebem i sol??, Przemek przeni??s?? Klaudi?? przez pr??g, i po obiedzie rozpocz????y si?? ??yczenia. <a href="https://www.planujemywesele.pl/40916-zespol-nieznani" target="_blank" rel="nofollow noopener noreferrer">Zesp???? muzyczny Nieznani</a> wystartowa?? z playlist?? i po pierwszym ta??cu parkiet zape??ni?? si?? b??yskawicznie. Na koniec musz?? wspomnie?? o Sylwku i podw??jnej roli Wojtka z <a href="https://www.facebook.com/Studio-Foto-Video-CLIP-348143895304294/" target="_blank" rel="nofollow noopener noreferrer">Studio Foto-Video CLIP</a>. Wojtka widzia??em ju?? w roli wodzireja ze skrzypcami w d??oni, a tym razem wcieli?? si?? w prezesa, kt??ry wszystkich zna?? i wprowadza?? doskona??y klimat podczas ca??ego reporta??u ??lubnego. Serdecznie zapraszam na zdj??cia i ??ycz?? mi??ego ogl??dania. Klikajcie lajki na <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">insta</a> i <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">facebook</a> je??eli wpis si?? podoba i do zobaczenia na kolejnym weselu.'
                    }
                    slug={"sala-weselna-karolinka-bystra-podhalanska"}
                    title={"KAROLINKA BYSTRA PODHALA??SKA, WESELE STRA??ACKIE - KLAUDIA i PRZEMYS??AW"}
                    tags={"Sala weselna Karolinka Bystra Podhala??ska, dom weselny karolinka"}
                    date={"1 maja 2022"}
                    menuNames={"KLAUDIA i PRZEMYS??AW"}
                    menuTitle={"KAROLINKA BYSTRA PODHALA??SKA, WESELE STRA??ACKIE"}
                    leadNames={"JUSTYNA i DAMIAN"}
                    leadTitle={"SYLWESTROWY ??LUB, SALA BANKIETOWA IMPRESJA JORDAN??W"}
                    leadUrl={"/sylwestrowy-slub-sala-bankietowa-impresja-jordanow"}
                    leadImage={process.env.staticS3ImagesPath + "impresja_jordanow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;