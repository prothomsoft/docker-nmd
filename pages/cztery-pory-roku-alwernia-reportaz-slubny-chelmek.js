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
                    headTitle={"Cztery Pory Roku Alwernia, Reporta?? ??lubny Che??mek"}
                    headDescription={
                        "Alwernia, Restauracja Cztery Pory Roku i sala letnia. Wspaniali go??cie weselni i zakochani w sobie od bardzo dawno Kasia i Marcin. Serdecznie zapraszam na reporta?? z ich najwa??niejszego dnia. Mi??ego ogl??dania."
                    }
                    headKeywords={"Cztery Pory Roku Alwernia, Reporta?? ??lubny Che??mek"}
                    headUrl={"https://99foto.pl/cztery-pory-roku-alwernia-reportaz-slubny-chelmek"}
                    entryContentP1={
                        'S??oneczna kwietniowa sobota, w kt??r?? to wybra??em si?? troch?? bardziej na zach??d od Krakowa, odwiedzaj??c <a href="https://www.facebook.com/krainapieknoscijoanna" target="_blank" rel="nofollow">Salon Urody Kraina Pi??kno??ci Joanna</a> w O??wi??cimiu. Jak nie trudno zgadn???? nie pojecha??em tam na przeja??d??k?? tylko na przygotowania ??lubne Kasi. W przygotowaniach tych pannie m??odej towarzyszy??y mama i siostra, kt??ra uk??ada??y fryzury i by??y malowane r??wnocze??nie. Marcin przygotowywa?? si?? w pokoju hotelowym w pi??knej wzorowanej na polskiej architekturze pa??acowej <a href="https://alwernia-4poryroku.pl/" target="_blank" rel="nofollow">Restauracji Cztery Pory Roku w Alwernii</a>. Pok??j nowo??e??c??w z subtelnie wkomponowan?? wann?? robi?? wra??enie. W nieca??e 15 minut szelki, marynarka i pozosta??e elementy garderoby znalaz??y si?? na swoim miejscu. Mnie w tym momencie czeka?? powr??t do Che??mka na przygotowania Kasi. W sam?? por?? prosto z g??r przybyli kamerzysta Jacek ze swoj?? narzeczon?? Ani??. Okaza??o si??, ??e zbudowali oni mega pozytywny klimat, a Jacek jak prawdziwa z??ota r??czka, przyda?? si?? bardzo do pomocy w nie??atwym zadaniu zapinania guzik??w sukni ??lubnej. Pe??ne emocji b??ogos??awie??stwo i udali??my si?? do po??o??onego w bliskiej odleg??o??ci <a href="https://www.parafianmpchelmek.pl/" target="_blank" rel="nofollow">Ko??cio??a Naj??wi??tszej Maryi Panny w Che??mku</a>.'
                    }
                    entryContentP2={
                        'Ksi??dz w zakrystii w dos??ownie trzy sekundy po wej??ciu rozbawi?? dziewczyny momentalnie (fajny skill, te?? bym tak chcia??). Po podpisaniu dokument??w rozpocz????a si?? ceremonia, podnios??e kazanie i wypowiedziane z u??miechem na ustach sakramentalne TAK. Pod ko??cio??em para m??oda odebra??a ??yczenia od zaproszonych go??ci i utalanetowanych m??odych ludzi, kt??rzy uatrakcyjnili ceremoni?? pi??knym ??piewem ch??ralnym. O sali weselnej <a href="https://alwernia-4poryroku.pl/" target="_blank" rel="nofollow">Restauracji Cztery Pory Roku w Alwernii</a> ju?? wspomina??em, ale nie zaszkodzi napisa?? kilka s????w wi??cej. Pi??kne wn??trza, ka??de z nich inspirowane inn?? por?? roku. Przyj??cie weselne Kasi i Marcina odby??o si?? pod znakiem Lata. Tradycyjne przywitanie chlebem i sol??, pierwszy taniec i kanonada atrakcji. Tomek urodzony wodzirej, kt??ry wyciska?? maksa nie tylko z siebie, ale i z go??ci i Pawe?? mistrz kr??cenia DJ-sk?? konsolet?? wspaniale reprezentowali <a href="https://animatorimprez.pl/" target="_blank" rel="nofollow">Grup?? Animator??w Imprez</a>. Wymy??lali du??o zabaw, posiadali niezliczon?? ilo???? gad??et??w i o??wietlenie z lampami grilowymi, jedyne w swoim rodzaju. Powierzchnia parkietu mog??aby by?? spokojnie dwa razy wi??ksza, a i tak zosta??aby w ca??o??ci zape??niona przez ??wietnie bawi??cych si?? go??ci. Na ??lubie mia??em te?? okazj?? po raz kolejny spotka?? Marlen?? i Dawida ju?? w powi??kszonym sk??adzie. Ich g??ralski ??lub mo??ecie z ??atwo??ci?? odnale???? na moim blogu. Kasiu i Marcinie, ??wietnie zorganizowany ??lub, z pi??knym ukoronowaniem w postaci wizyty w Watykanie. Dzi??kuj?? za zaufanie i mo??liwo???? zrobienia dla Was kilku zdj????. Zapraszam do ogl??dania, a po wi??cej do strefy klienta.'
                    }
                    slug={"cztery-pory-roku-alwernia-reportaz-slubny-chelmek"}
                    title={"CZTERY PORY ROKU ALWERNIA, REPORTA?? ??LUBNY CHE??MEK - KASIA i MARCIN"}
                    tags={"Cztery Pory Roku Alwernia, Reporta?? ??lubny Che??mek"}
                    date={"21 kwietnia 2018"}
                    menuNames={"KASIA i MARCIN"}
                    menuTitle={"CZTERY PORY ROKU ALWERNIA, REPORTA?? ??LUBNY CHE??MEK"}
                    leadNames={"SANDRA i MACIEK"}
                    leadTitle={"SALA WESELNA VILLA MARINA D??BROWA G??RNICZA, ??LUB NAD JEZIOREM"}
                    leadUrl={"/sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem"}
                    leadImage={process.env.staticS3ImagesPath + "sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
