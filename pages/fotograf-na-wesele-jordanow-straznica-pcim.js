import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0006.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0008.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0015.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0022.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0024.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0026.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0032.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0037.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0038.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0039.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0042.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0048.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0050.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0054.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0056.webp", height: 1007 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0061.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0063.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0064.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0068.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0069.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0070.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0071.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0074.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0075.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0076.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0079.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0080.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0081.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0092.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0094.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0096.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0106.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0110.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0113.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0115.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0118.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0121.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0124.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0127.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0130.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0136.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/99FOTOPL_SPP_002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0138.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0152.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0147.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0153.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0146.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0151.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0150.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0142.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "fotograf_na_wesele_jordanow_straznica_pcim_start.webp"}
                    images={images}
                    headTitle={"Fotograf na wesele Jordan??w, Stra??nica Pcim"}
                    headDescription={"Serdecznie zapraszam do Jordanowa, Stra??nicy w Pcimiu i Ko??cio??a w Naprawie gdzie sakramentalne TAK powiedzieli sobie Kasia i Grzesiek. Mi??ego ogl??dania."}
                    headKeywords={"fotograf na wesele jordan??w,stra??nica pcim"}
                    headUrl={"https://99foto.pl/fotograf-na-wesele-jordanow-straznica-pcim"}
                    entryContentP1={
                        "Sobota w d??ugi sierpniowy weekend rozpocz????a si?? wcze??nie, bo o godzinie ??smej rano. Jad??c Zakopiank?? do Jordanowa na makija?? Kasi mia??em okazje podziwiac spowodowane zmienno??ci?? aury wspania??e niemal??e g??rskie widoki. Trudno by??o zatrzyma?? si?? w Bystrej Podhala??skiej, bo a?? chcia??oby si?? pop??dzi?? dalej. Ale w??a??nie w Jordanowie Kasia rozpocz????a swoje przygotowania do ??lubu. Fajny gabinet kosmetyczny i chwil?? p????niej jeszcze nie do ko??ca zamieszka??y ale gustownie urz??dzony salon fryzjerski w Rabce Zdr??j."
                    }
                    entryContentP2={
                        'Kiedy fryzura i makija?? by??y gotowe siostra Kasi Ewa pomog??a ubra?? sukni?? ??lubn??, buty i bi??uteri?? (wiem, ??e ju?? za rok Kasia si?? siostrze odwdzi??czy). Nast??pnie razem z kamerzyst?? Kub??, jak si?? p????niej okaza??o, Andrzejem Wajd?? ca??ego ??lubu, udali??my si?? do domu rodzinnego Grze??ka. Pierwsze i drugie b??ogos??awie??stwo w ??wietnej rodzinnej atmosferze i chwil?? p????niej nerwowe oczekiwanie na walcz??cego z korkami na Zakopiance ksi??dza w <a href="https://www.naprawa.parafia.info.pl/" target="blank">Ko??ciele Parafialnym ??w. Siostry Faustyny Kowalskiej w Naprawie</a>. Kwadrans studencki i rozpocz??li??my ceremoni?? podczas kt??rej m??odzi powiedzieli sobie sakramentalne TAK. Po zdj??ciu grupowym udali??my si?? na <a href="https://www.osp.pcim.pl/" target="_blank" rel="nofollow">sal?? weseln?? w Stra??nicy OSP w Pcimiu</a>. Rodzice przywitali m??odych chlebem i sol??, go??cie z??o??yli gor??ce ??yczenia i z podziwem ogl??dali pierwszy taniec Kasi i Grze??ka. Pe??ny parkiet to zas??uga <a href="https://www.wiarusy.info/" target="_blank" rel="nofollow">Zesp????u Muzycznego, Kapeli Wiarusy z Mszany Dolnej</a>. ??wietny, sp??dzony w mi??ym towarzystwie dzie??. Ciesz?? si?? bardzo, ??e mog??em by?? tam z Wami w tych najwa??niejszych chwilach Waszego ??ycia. Zapraszam do ogl??dania, a po wi??cej zdj???? do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"fotograf-na-wesele-jordanow-straznica-pcim"}
                    title={"FOTOGRAF NA WESELE JORDAN??W, STRA??NICA PCIM - KASIA i GRZEGORZ"}
                    tags={"fotograf na wesele jordan??w,stra??nica pcim"}
                    date={"18 sierpnia 2017"}
                    menuNames={"KASIA i GRZEGORZ"}
                    menuTitle={"FOTOGRAF NA WESELE JORDAN??W, STRA??NICA PCIM"}
                    leadNames={"JULIA i PIOTR"}
                    leadTitle={"SESJA ZDJ??CIOWA PARK W MOGILANACH, ZAKRZ??WEK i KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-park-w-mogilanach-zakrzowek-i-kazimierz"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_zdjeciowa_park_w_mogilanach_zakrzowek_i_kazimierz_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
