import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_krakow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_krakow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_krakow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_krakow_0010.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_krakow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_krakow_0008.webp", height: 643 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_krakow_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_krakow_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_krakow_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_krakow_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0016.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0028.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0031.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0033.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_krakow_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0001.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0003.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0005.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0018.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0022.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/fotograf_slubny_kosciol_swietej_anny_krakow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0008.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0013.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0015.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0024.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0032.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0036.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0044.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0048.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0051.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0052.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0060.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0067.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0078.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0088.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0025.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "paulina_i_marcin_reportaz_slubny_hotel_europejski_krakow_start.webp"}
                    images={images}
                    headTitle={"Reporta?? ??lubny Hotel Europejski Krak??w"}
                    headDescription={"Krak??w - sala balowa w Hotel Europejskim i przepi??kny Ko??ci???? ??wi??tej Anny. W imieniu Pauliny i Marcina zapraszam na reporta?? z ich ??lubu. Mi??ego ogl??dania."}
                    headKeywords={"reporta?? ??lubny ko??ci???? ??wi??tej anny krak??w,zdj??cia ??lubne hotel europejski"}
                    headUrl={"https://99foto.pl/paulina-i-marcin-reportaz-slubny-hotel-europejski-krakow"}
                    entryContentP1={
                        'Wydawa??oby si??, ??e ??luby odbywaj?? si?? w miesi??cach letnich, ??eby nie powiedzie?? wakacyjnych, gdy jednak przyjrzymy si?? tematowi nieco bli??ej okazuje si??, ??e fotograf ??lubny mo??e fotografowa?? ca??y rok w szczeg??lno??ci w Krakowie. Koniec listopada, troch?? wcze??niej w czasie jesienne epizody nie tylko z deszczem, ale i ??niegiem, na szcz????cie w dzie?? ??lubu Pauliny i Marcina pogoda na zam??wienie. Przygotowania zacz??li??my na Osiedlu O??wiecenia w mieszkaniu Pauliny gdzie ??wietny makija?? wykona??a Ania z <a href="https://www.facebook.com/Wodzia-make-up-story-539847282771161/" target="_blank" rel="nofollow">Wodzia make-up story</a>. W mi??dzyczasie sfotografowa??em przepi??kn?? sukni?? ??lubn?? i obr??czki. Czas oczekiwania na przybycie Marcina min???? b??yskawicznie i rozpocz????o si?? pe??ne wzrusze?? b??ogos??awie??stwo.'
                    }
                    entryContentP2={
                        'Chwil?? p????niej byli??my ju?? w <a href="https://kolegiata-anna.pl/" target="_blank" rel="nofollow">Ko??ciele ??wi??tej Anny w Krakowie</a>, gdzie odby??a si?? ceremonia za??lubin. Jest to przepi??kny ko??ci????, w kt??rym trudno odm??wi?? sobie przyjemno??ci tworzenia szerokich kadr??w, pe??nych historycznych detali. Ksi??dz wyg??osi?? pi??kne kazanie, m??odzi odwa??nie bo z pami??ci wypowiedzieli s??owa przysi??gi i doro??k?? przez Rynek w Krakowie udali si?? do sali balowej w <a href="https://he.pl" target="_blank" rel="nofollow">Hotelu Europejskim</a>. Dalej za spraw?? DJ-??w parkiet zape??nia?? si?? bardzo szybko. Go??cie weselni ta??czyli do bia??ego rana. M??odzi przygotowali poci??g, tort, oczepiny i kilka zabaw towarzysz??cych. Serdecznie zapraszam do ogl??dania historii Pauliny i Marcina. Wi??cej zdj???? w strefie klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"paulina-i-marcin-reportaz-slubny-hotel-europejski-krakow"}
                    title={"REPORTA?? ??LUBNY HOTEL EUROPEJSKI KRAK??W - PAULINA i MARCIN"}
                    tags={"reporta?? ??lubny ko??ci???? ??wi??tej anny krak??w,zdj??cia ??lubne hotel europejski"}
                    date={"3 grudnia 2016"}
                    menuNames={"PAULINA i MARCIN"}
                    menuTitle={"REPORTA?? ??LUBNY HOTEL EUROPEJSKI KRAK??W - PAULINA i MARCIN"}
                    leadNames={"ALINA i JANUSZ"}
                    leadTitle={"ZDJ??CIA ??LUBNE JORDAN??W, DWOREK FANTAZJA"}
                    leadUrl={"/alina-i-janusz-zdjecia-slubne-jordanow-dworek-fantazja"}
                    leadImage={process.env.staticS3ImagesPath + "alina_i_janusz_zdjecia_slubne_jordanow_dworek_fantazja_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
