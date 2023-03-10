import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0001.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0002.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0003.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0004.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0005.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0006.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0008.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0009.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0007.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0010.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0011.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0013.webp", height: 526 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0014.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0017.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0015.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0012.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0016.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0018.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0019.webp", height: 526 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0020.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0021.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0022.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0023.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0024.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0025.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0026.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0027.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0029.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0028.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0031.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0032.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0030.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0034.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0033.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0035.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0037.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0036.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0039.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0049.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0040.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0041.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0042.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0043.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0044.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0045.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0046.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0048.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0047.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0038.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0050.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0051.webp", height: 526 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0052.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0058.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0057.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0054.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0060.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0053.webp", height: 526 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0055.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0056.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0059.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0061.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0062.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0063.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0064.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0068.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0077.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0067.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0070.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0066.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0071.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0072.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0073.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0069.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0074.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0075.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0079.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0076.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0065.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0078.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0080.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0083.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0081.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0082.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0087.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0084.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0085.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0088.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0086.webp", height: 526 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0089.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0090.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0091.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0092.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0093.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0096.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0095.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0097.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0094.webp", height: 526 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0098.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0100.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0101.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0102.webp", height: 526 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0103.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0105.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0104.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0107.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0108.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0109.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0113.webp", height: 526 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0114.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0115.webp", height: 526 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0116.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0117.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0118.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0119.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0120.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0123.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0121.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0124.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0122.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0125.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0106.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0126.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0112.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0127.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0128.webp", height: 526 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0129.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0110.webp", height: 526 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0130.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0131.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0133.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0135.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0099.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0134.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0137.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0136.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0138.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0139.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0132.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0141.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0140.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0142.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0143.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0144.webp", height: 526 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0145.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0146.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0147.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0148.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0149.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0150.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0152.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0151.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0153.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0154.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0155.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0156.webp", height: 526 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0157.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0158.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0160.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0159.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0161.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0162.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0163.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0164.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0165.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0166.webp", height: 382 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0167.webp", height: 762 },
{ imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0168.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "dom_weselny_mogielica_fotograf_slubny_mszana.webp"}
                    images={images}
                    headTitle={"Dom weselny Mogielica Jurk??w, rustykalne wesele"}
                    headDescription={"Dom weselny Mogielica Jurk??w, rustykalne wesele, wesele w stylu boho. Natalia i Krzysztof. Serdecznie zapraszam."}
                    headKeywords={"Dom weselny Mogielica Jurk??w, wesele rustykalne, ??lub w stylu boho"}
                    headUrl={"https://99foto.pl/dom-weselny-mogielica-jurkow-rustykalne-wesele"}
                    entryContentP1={
                        'Miesi??c czerwiec dobiega ko??ca. Du??o dobrego dzia??o si?? w tym miesi??cu, czuje si?? ju?? nadchodz??ce wakacje i w perspektywie s??odkie leniuchowanie. ??luby nabieraj?? kolor??w i mam na my??li nie tylko ziele?? i du??o s??o??ca, ale te?? kolorowe sukienki go??ci weselnych, pi??kne kwiaty i dopracowane detale. Klimat ten mo??na poczu?? ogl??daj??c kr??tk?? relacj?? z perfekcyjnie przygotowanego ??lubu Natalii i Krzy??ka, kt??ry odby?? si?? w Mszanie Dolnej. Zdj??cia rozpocz??li??my od makija??u ??lubnego, nast??pnie odwiedzili??my <a href="https://www.facebook.com/Studioo.o15/" target="_blank" rel="nofollow noopener noreferrer">Salon Fryzjerski Studio 15</a>. Jak na ??lub boho czy rustykalny przysta??o, Natalia mia??a wianek, a jego wpi??cie wymaga??o niema??ych przygotowa?? fryzjerskich. Kolejnym punktem programu by??y przygotowania Panny M??odej.'
                    }
                    entryContentP2={
                        'Fotografowanie detali i ubierania sukni ??lubnej zosta??o znacz??co rozbudowane o mini sesj?? zdj??ciow?? zaproponowan?? przez Dawida z <a href="https://www.braciazieba.pl/" target="_blank" rel="nofollow noopener noreferrer">Bracia Zi??ba Filmowanie</a>. Tata sta??, obserwowa?? i m??wi?? co??, ??e do odwa??nych ??wiat nale??y, a mo??e nie dos??ysza??em... sam nie wiem. By??o super i kilka fajnych klatek dzi??ki temu wpad??o. Nast??pnie wybrali??my si?? do Krzy??ka. Ubieranie si?? Pana M??odego przebieg??o sprawnie, zosta?? czas na ma??y toast. Rodzice pob??ogos??awili Krzy??ka, a czerwony Mustang zabra?? go prosto do domu rodzinnego Natalii. First look w ogrodzie, wsp??lne b??ogos??awie??stwo, pami??tkowe zdj??cie z rodzicami i wszyscy udali??my si?? do <a href="https://www.parafiamszanadolna.pl/" target="_blank" rel="nofollow noopener noreferrer">Ko??ci????a pw. ??w. Micha??a Archanio??a w Mszanie Dolnej</a>. Podczas ceremonii Para M??oda ??lubowa??a sobie mi??o???? i wierno????. Nast??pnie zrobili??my zdj??cie grupowe i go??cie udali si?? na przyj??cie weselne do <a href="http://www.mogielica.com/" target="_blank" rel="nofollow noopener noreferrer">Domu Weselnego Mogielica</a>. Elektryzuj??ca brama, przywitanie Pary M??odej chlebem i sol??, rzut kieliszkami i ju?? byli??my na sali weselnej. Go??ci przywita?? <a href="http://www.folkband.pl/" target="_blank" rel="nofollow noopener noreferrer">Zesp???? muzyczny Folk Band</a>. Wykorzystuj??c gor??ce promienie zachodz??cego s??o??ca, znale??li??my moment i udali??my si?? na mini sesj?? plenerow??. Parkiet zape??nia?? si?? b??yskawicznie, nie by??o ??adnego problemu ze znalezieniem ch??tnych do zabaw oczepinowych os??b. Impreza trwa??a do bia??ego rana. Dzi??kuj?? za zaufanie i ??ycz?? Wam wszystkiego najlepszego na nowej drodze ??ycia. Serdecznie zapraszam na zdj??cia i do strefy klienta po wi??cej. Nie zapomnijcie o pozostawieniu like na <a href="https://www.facebook.com/Studioo.o15/" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> i <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Instagram</a>.'
                    }
                    slug={"dom-weselny-mogielica-jurkow-rustykalne-wesele"}
                    title={"DOM WESELNY MOGIELICA JURK??W, RUSTYKALNE WESELE - NATALIA i KRZYSZTOF"}
                    tags={"Dom weselny Mogielica Jurk??w, rustykalne wesele"}
                    date={"24 czerwca 2022"}
                    menuNames={"NATALIA i KRZYSZTOF"}
                    menuTitle={"DOM WESELNY MOGIELICA JURK??W, RUSTYKALNE WESELE"}
                    leadNames={"NICOLA i RAFA??"}
                    leadTitle={"HOTEL ??YWIECKI, SALA PRZY????K??WKA, WESELE W BESKIDACH"}
                    leadUrl={"/hotel-zywiecki-sala-przylekowka-wesele-w-beskidach"}
                    leadImage={process.env.staticS3ImagesPath + "nicola_rafal_start.webp"}
                />
            
        );
};

export default BlogPageComponent;