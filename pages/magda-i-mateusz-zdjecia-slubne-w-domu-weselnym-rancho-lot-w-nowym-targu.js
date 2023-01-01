import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0002.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0007.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0008.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0013.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0016.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0029.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0036.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0040.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0042.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0043.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0044.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0047.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0048.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0050.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0054.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0062.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0064.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0066.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0067.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0069.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0070.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0076.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0084.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0087.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0094.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0098.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0104.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0106.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0107.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0109.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0110.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0114.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0115.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0116.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0126.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0128.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0129.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0138.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0144.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0145.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0147.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0150.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0151.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0152.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0153.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0154.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0155.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0156.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0157.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/05/fotograf_na_wesele_jordanow_0123.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "magda_i_mateusz_zdjecia_slubne_w_domu_weselnym_rancho_lot_w_nowym_targu_start.webp"}
                    images={images}
                    headTitle={"Zdjęcia ślubne w Domu Weselnym Rancho Lot"}
                    headDescription={"DWA MILIONY ZŁOTYCH - tyle kosztował samochód ślubny Magdy i Mateusza. Radość młodego, gdy pokierował kilka metrów tym wehikułem BEZCENNA."}
                    headKeywords={"fotograf na wesele kraków,zdjęcia ślubne jordanów,zdjęcia ślubne w domu weselnym rancho lot"}
                    headUrl={"https://99foto.pl/magda-i-mateusz-zdjecia-slubne-w-domu-weselnym-rancho-lot-w-nowym-targu"}
                    entryContentP1={
                        "Połowa maja i kolejne ślubne emocje tym razem za sprawą Magdy i Mateusza. Historię rozpoczynamy od makijażu w domu rodzinnym Magdy w Jordanowie. Makijaż po raz kolejny perfekcyjnie wykonała Iwona, którą miałem okazję już poznać na ślubie ponad rok wcześniej. Błogosławieństwo to dużo emocji i pierwsze łzy wzruszeń, które na moment zastąpiły uśmiechy na twarzach gości. Tylko na moment, ponieważ w drodze po raz kolejny uśmiechów nie brakowało. Tym razem dużo dobrego działo się w zakrystii. Zgromadzona ilość księży mogłaby wskazywać na prymicje i była wynikiem wieloletniego zaangażowania młodych w działalność duszpasterską pewnie wiecie, że tak to wszystko się właśnie zaczęło."
                    }
                    entryContentP2={
                        'Ceremonia ślubna odbyła się w Kościele Przenajświętrzej Trójcy w Jordanowie. Tato Magdy, którego wyjątkowo polubiłem między innymi z racji wspólnych fotograficznych zainteresowań, nie krył wzruszenia. Po życzeniach i zdjęciu grupowym udaliśmy się na salę weselną w <a href="https://rancholot.pl/" target="_blank" rel="nofollow">Domu Weselnym Rancho Lot</a>, gdzie na młodych czekali już rodzice, witając ich chlebem i solą. Pisząc udaliśmy się mam na myśli podróż wyjątkowym, wartym 2 miliony złotych autobusem miejskim. Radość Mateusza, jak pokierował kilka metrów tym wehikułem bezcenna. Wesele istne szaleństwo, od pierwszych utworów. Wspaniali goście, zespół <a href="https://www.facebook.com/Somgorsy-137802699600369/" target="_blank" rel="nofollow">Somgorsy</a>, który tworzył muzyczne tło dla genialnej osobowości wokalistki sprawiał, że parkiet pękał w szwach. Bardzo dziękuję Magdzie i Mateuszowi, za to, że mogłem towarzyszyć im w tym szczególnym dniu. Była to dla mnie wilka przyjemność. Zapraszam na reportaż i do strefy klienta po więcej zdjęć!'
                    }
                    slug={"magda-i-mateusz-zdjecia-slubne-w-domu-weselnym-rancho-lot-w-nowym-targu"}
                    title={"ZDJĘCIA ŚLUBNE W DOMU WESELNYM RANCHO LOT NOWY TARG - MAGDA i MATEUSZ"}
                    tags={"fotograf na wesele kraków,zdjęcia ślubne jordanów,zdjęcia ślubne w domu weselnym rancho lot"}
                    date={"14 maja 2016"}
                    menuNames={"MAGDA i MATEUSZ"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W DOMU WESELNYM RANCHO LOT NOWY TARG"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_zdjeciowa_dwor_tomaszowice_krakow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
