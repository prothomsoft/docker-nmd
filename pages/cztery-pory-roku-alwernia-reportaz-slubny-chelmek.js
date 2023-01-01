import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0003.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0005.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0010.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0014.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0016.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0017.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0023.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0025.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0028.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0030.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0032.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0034.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0036.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0038.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0040.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0047.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0049.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0052.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0054.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0056.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0057.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0060.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0064.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0067.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0070.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0085.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0076.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0082.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0086.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0089.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0091.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0093.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0096.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0097.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0094.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0104.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0106.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0111.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0115.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0117.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0120.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0127.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0132.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0134.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0137.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "cztery-pory-roku-alwernia-reportaz-slubny-chelmek-start.webp"}
                    images={images}
                    headTitle={"Cztery Pory Roku Alwernia, Reportaż Ślubny Chełmek"}
                    headDescription={
                        "Alwernia, Restauracja Cztery Pory Roku i sala letnia. Wspaniali goście weselni i zakochani w sobie od bardzo dawno Kasia i Marcin. Serdecznie zapraszam na reportaż z ich najważniejszego dnia. Miłego oglądania."
                    }
                    headKeywords={"Cztery Pory Roku Alwernia, Reportaż Ślubny Chełmek"}
                    headUrl={"https://99foto.pl/cztery-pory-roku-alwernia-reportaz-slubny-chelmek"}
                    entryContentP1={
                        'Słoneczna kwietniowa sobota, w którą to wybrałem się trochę bardziej na zachód od Krakowa, odwiedzając <a href="https://www.facebook.com/krainapieknoscijoanna" target="_blank" rel="nofollow">Salon Urody Kraina Piękności Joanna</a> w Oświęcimiu. Jak nie trudno zgadnąć nie pojechałem tam na przejażdżkę tylko na przygotowania ślubne Kasi. W przygotowaniach tych pannie młodej towarzyszyły mama i siostra, która układały fryzury i były malowane równocześnie. Marcin przygotowywał się w pokoju hotelowym w pięknej wzorowanej na polskiej architekturze pałacowej <a href="https://alwernia-4poryroku.pl/" target="_blank" rel="nofollow">Restauracji Cztery Pory Roku w Alwernii</a>. Pokój nowożeńców z subtelnie wkomponowaną wanną robił wrażenie. W niecałe 15 minut szelki, marynarka i pozostałe elementy garderoby znalazły się na swoim miejscu. Mnie w tym momencie czekał powrót do Chełmka na przygotowania Kasi. W samą porę prosto z gór przybyli kamerzysta Jacek ze swoją narzeczoną Anią. Okazało się, że zbudowali oni mega pozytywny klimat, a Jacek jak prawdziwa złota rączka, przydał się bardzo do pomocy w niełatwym zadaniu zapinania guzików sukni ślubnej. Pełne emocji błogosławieństwo i udaliśmy się do położonego w bliskiej odległości <a href="https://www.parafianmpchelmek.pl/" target="_blank" rel="nofollow">Kościoła Najświętszej Maryi Panny w Chełmku</a>.'
                    }
                    entryContentP2={
                        'Ksiądz w zakrystii w dosłownie trzy sekundy po wejściu rozbawił dziewczyny momentalnie (fajny skill, też bym tak chciał). Po podpisaniu dokumentów rozpoczęła się ceremonia, podniosłe kazanie i wypowiedziane z uśmiechem na ustach sakramentalne TAK. Pod kościołem para młoda odebrała życzenia od zaproszonych gości i utalanetowanych młodych ludzi, którzy uatrakcyjnili ceremonię pięknym śpiewem chóralnym. O sali weselnej <a href="https://alwernia-4poryroku.pl/" target="_blank" rel="nofollow">Restauracji Cztery Pory Roku w Alwernii</a> już wspominałem, ale nie zaszkodzi napisać kilka słów więcej. Piękne wnętrza, każde z nich inspirowane inną porą roku. Przyjęcie weselne Kasi i Marcina odbyło się pod znakiem Lata. Tradycyjne przywitanie chlebem i solą, pierwszy taniec i kanonada atrakcji. Tomek urodzony wodzirej, który wyciskał maksa nie tylko z siebie, ale i z gości i Paweł mistrz kręcenia DJ-ską konsoletą wspaniale reprezentowali <a href="https://animatorimprez.pl/" target="_blank" rel="nofollow">Grupę Animatorów Imprez</a>. Wymyślali dużo zabaw, posiadali niezliczoną ilość gadżetów i oświetlenie z lampami grilowymi, jedyne w swoim rodzaju. Powierzchnia parkietu mogłaby być spokojnie dwa razy większa, a i tak zostałaby w całości zapełniona przez świetnie bawiących się gości. Na ślubie miałem też okazję po raz kolejny spotkać Marlenę i Dawida już w powiększonym składzie. Ich góralski ślub możecie z łatwością odnaleźć na moim blogu. Kasiu i Marcinie, świetnie zorganizowany ślub, z pięknym ukoronowaniem w postaci wizyty w Watykanie. Dziękuję za zaufanie i możliwość zrobienia dla Was kilku zdjęć. Zapraszam do oglądania, a po więcej do strefy klienta.'
                    }
                    slug={"cztery-pory-roku-alwernia-reportaz-slubny-chelmek"}
                    title={"CZTERY PORY ROKU ALWERNIA, REPORTAŻ ŚLUBNY CHEŁMEK - KASIA i MARCIN"}
                    tags={"Cztery Pory Roku Alwernia, Reportaż Ślubny Chełmek"}
                    date={"21 kwietnia 2018"}
                    menuNames={"KASIA i MARCIN"}
                    menuTitle={"CZTERY PORY ROKU ALWERNIA, REPORTAŻ ŚLUBNY CHEŁMEK"}
                    leadNames={"SANDRA i MACIEK"}
                    leadTitle={"SALA WESELNA VILLA MARINA DĄBROWA GÓRNICZA, ŚLUB NAD JEZIOREM"}
                    leadUrl={"/sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem"}
                    leadImage={process.env.staticS3ImagesPath + "sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
