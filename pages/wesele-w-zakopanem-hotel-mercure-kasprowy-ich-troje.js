import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0002.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0004.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0008.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0011.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0014.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0015.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0017.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0019.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0024.webp", height: 764 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0038.webp", height: 957 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0033.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0039.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0040.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0044.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0048.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0049.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0054.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0058.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0064.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0065.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0068.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0070.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0073.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0074.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0076.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0079.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0081.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0085.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0086.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0090.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0089.webp", height: 764 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0084.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0103.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0105.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0106.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0110.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0112.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0115.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0116.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0119.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0123.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0131.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0133.webp", height: 764 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0125.webp", height: 764 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0138.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0136.webp", height: 762 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "wesele_w_zakopanem_hotel_mercure_kasprowy.webp"}
                    images={images}
                    headTitle={"Wesele w Zakopanem, Hotel Mercure Kasprowy, Zesp???? Ich Troje na weselu"}
                    headDescription={"Wesele w Zakopanem, Hotel Mercure Kasprowy, Zesp???? Ich Troje, Micha?? Wi??niewski koncert na weselu. ??lub glamour na podhalu. Serdecznie zaprasam na bloga."}
                    headKeywords={"Wesele w Zakopanem, Hotel Mercure Kasprowy, Zesp???? Ich Troje, Micha?? Wi??niewski koncert na weselu"}
                    headUrl={"https://99foto.pl/wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje"}
                    entryContentP1={
                        "Historia ta zaczyna si?? cztery lata temu, gdy podczas ??lubu Iwony i Marcina po raz pierwszy pojawi??em si?? z moim aparatem w Studio Makija??u Patrycji Antosz. Wpis z tego ??lubu by?? tak dobry, ??e do dzisiaj odnajdziecie go na moim blogu. Od tego czasu pojawia??em si?? w Jordanowie na makija??ach od czasu do czasu fotografuj??c metamorfozy Panien M??odych. Jest mi wi??c bardzo mi??o, ??e po tylu latach znajomo??ci i setkach obejrzanych zdj???? Patrycja zdecydowa??a, ??e to ja b??d?? jej fotografem ??lubnym. Od pocz??tku by??o jasne, ??e ??lub ten b??dzie wyj??tkowy, zorganizowany perfekcyjnie z dba??o??ci?? o najmniejszy detal i pe??en atrakcji. Mia??a by?? petarda i by??a prosz?? Pani - w??a??nie tak si?? tworzy historie. D??ugo mo??na by??oby pisa??, ale wspomn?? tylko, ??e ceremonia ??lubna odby??a si?? w zabytkowym ko??ciele ??w. Kazimierza Kr??lewicza w Ko??cielisku. Klatka z drona, kt??r?? odnajdziecie poni??ej  doskonale ukazuje usytuowanie tego niezwyklego miejsca."
                    }
                    entryContentP2={
                        "Pi??kna ceremonia, po kt??rej go??cie zostali zaproszeni do usytuowanego u podn????a Tatr na zboczu Polany Szymoszkowej Hotelu Mercure Kasprowy w Zakopanem. Specjalnie zaprojektowane o??wietlenie sali weselnej, wybrane podczas degustacji s??odko??ci, zesp???? muzyczny pe??en g??ralskiej krwi, barman, kt??ry czarowa?? nie tylko za barem... setki atrakcji po??r??d kt??rych o ma??y w??os mo??na by??oby przeoczy?? mega energetyczny wyst??p zespo??u Ich Troje czyli Micha??a Wi??niewskiego i Ani ??wi??tczak. Powiem Wam, ??e tak du??o nie dzia??o si?? ju?? dawno. Wspania??a atmosfera i niezwykle serdeczni ludzie. Pozdrowienia dla Taty Patrycji, kt??ry przez ca???? imprez?? trzyma?? r??k?? na pulsie. Dzi??kuj?? za zaufanie i ??wietn?? imprez??. Serdecznie zapraszam na zdj??cia i ??ycz?? mi??ego ogl??dania."
                    }
                    slug={"wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje"}
                    title={"WESELE W ZAKOPANEM, HOTEL MERCURE KASPROWY, ICH TROJE - PATRYCJA i TOMASZ"}
                    tags={"Wesele w Zakopanem, Hotel Mercure Kasprowy, Zesp???? Ich Troje, Micha?? Wi??niewski koncert na weselu"}
                    date={"6 sierpnia 2020"}
                    menuNames={"PATRYCJA i TOMASZ"}
                    menuTitle={"WESELE W ZAKOPANEM, HOTEL MERCURE KASPROWY, ICH TROJE"}
                    leadNames={"PAULA i WOJTEK"}
                    leadTitle={"FOLWARK WI??ZY MARSZOWICE i RUSTYKALNE WESELE POD KRAKOWEM"}
                    leadUrl={"/folwark-wiazy-marszowice-i-rustykalne-wesele-pod-krakowem"}
                    leadImage={process.env.staticS3ImagesPath + "wesele_folwark_wiazy_marszowice.webp"}
                />
            
        );
};

export default BlogPageComponent;
