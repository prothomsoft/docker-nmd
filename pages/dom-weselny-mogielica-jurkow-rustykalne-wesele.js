import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0001.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0002.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0003.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0004.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0005.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0006.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0008.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0009.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0007.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0010.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0011.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0013.jpg", height: 526 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0014.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0017.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0015.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0012.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0016.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0018.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0019.jpg", height: 526 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0020.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0021.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0022.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0023.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0024.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0025.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0026.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0027.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0029.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0028.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0031.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0032.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0030.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0034.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0033.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0035.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0037.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0036.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0039.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0049.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0040.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0041.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0042.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0043.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0044.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0045.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0046.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0048.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0047.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0038.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0050.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0051.jpg", height: 526 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0052.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0058.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0057.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0054.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0060.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0053.jpg", height: 526 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0055.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0056.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0059.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0061.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0062.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0063.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0064.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0068.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0077.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0067.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0070.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0066.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0071.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0072.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0073.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0069.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0074.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0075.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0079.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0076.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0065.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0078.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0080.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0083.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0081.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0082.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0087.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0084.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0085.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0088.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0086.jpg", height: 526 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0089.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0090.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0091.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0092.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0093.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0096.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0095.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0097.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0094.jpg", height: 526 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0098.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0100.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0101.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0102.jpg", height: 526 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0103.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0105.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0104.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0107.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0108.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0109.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0113.jpg", height: 526 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0114.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0115.jpg", height: 526 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0116.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0117.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0118.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0119.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0120.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0123.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0121.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0124.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0122.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0125.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0106.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0126.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0112.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0127.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0128.jpg", height: 526 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0129.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0110.jpg", height: 526 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0130.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0131.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0133.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0135.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0099.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0134.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0137.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0136.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0138.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0139.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0132.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0141.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0140.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0142.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0143.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0144.jpg", height: 526 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0145.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0146.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0147.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0148.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0149.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0150.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0152.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0151.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0153.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0154.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0155.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0156.jpg", height: 526 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0157.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0158.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0160.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0159.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0161.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0162.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0163.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0164.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0165.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0166.jpg", height: 382 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0167.jpg", height: 762 },
{ imageSrc: "/static/blog/2022/06/fotograf_slubny_mszana_dom_weselny_mogielica_0168.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "dom_weselny_mogielica_fotograf_slubny_mszana.jpg"}
                    images={images}
                    headTitle={"Dom weselny Mogielica Jurków, rustykalne wesele"}
                    headDescription={"Dom weselny Mogielica Jurków, rustykalne wesele, wesele w stylu boho. Natalia i Krzysztof. Serdecznie zapraszam."}
                    headKeywords={"Dom weselny Mogielica Jurków, wesele rustykalne, ślub w stylu boho"}
                    headUrl={"https://99foto.pl/dom-weselny-mogielica-jurkow-rustykalne-wesele"}
                    entryContentP1={
                        'Miesiąc czerwiec dobiega końca. Dużo dobrego działo się w tym miesiącu, czuje się już nadchodzące wakacje i w perspektywie słodkie leniuchowanie. Śluby nabierają kolorów i mam na myśli nie tylko zieleń i dużo słońca, ale też kolorowe sukienki gości weselnych, piękne kwiaty i dopracowane detale. Klimat ten można poczuć oglądając krótką relację z perfekcyjnie przygotowanego ślubu Natalii i Krzyśka, który odbył się w Mszanie Dolnej. Zdjęcia rozpoczęliśmy od makijażu ślubnego, następnie odwiedziliśmy <a href="https://www.facebook.com/Studioo.o15/" target="_blank" rel="nofollow noopener noreferrer">Salon Fryzjerski Studio 15</a>. Jak na ślub boho czy rustykalny przystało, Natalia miała wianek, a jego wpięcie wymagało niemałych przygotowań fryzjerskich. Kolejnym punktem programu były przygotowania Panny Młodej.'
                    }
                    entryContentP2={
                        'Fotografowanie detali i ubierania sukni ślubnej zostało znacząco rozbudowane o mini sesję zdjęciową zaproponowaną przez Dawida z <a href="https://www.braciazieba.pl/" target="_blank" rel="nofollow noopener noreferrer">Bracia Zięba Filmowanie</a>. Tata stał, obserwował i mówił coś, że do odważnych świat należy, a może nie dosłyszałem... sam nie wiem. Było super i kilka fajnych klatek dzięki temu wpadło. Następnie wybraliśmy się do Krzyśka. Ubieranie się Pana Młodego przebiegło sprawnie, został czas na mały toast. Rodzice pobłogosławili Krzyśka, a czerwony Mustang zabrał go prosto do domu rodzinnego Natalii. First look w ogrodzie, wspólne błogosławieństwo, pamiątkowe zdjęcie z rodzicami i wszyscy udaliśmy się do <a href="https://www.parafiamszanadolna.pl/" target="_blank" rel="nofollow noopener noreferrer">Kościóła pw. św. Michała Archanioła w Mszanie Dolnej</a>. Podczas ceremonii Para Młoda ślubowała sobie miłość i wierność. Następnie zrobiliśmy zdjęcie grupowe i goście udali się na przyjęcie weselne do <a href="http://www.mogielica.com/" target="_blank" rel="nofollow noopener noreferrer">Domu Weselnego Mogielica</a>. Elektryzująca brama, przywitanie Pary Młodej chlebem i solą, rzut kieliszkami i już byliśmy na sali weselnej. Gości przywitał <a href="http://www.folkband.pl/" target="_blank" rel="nofollow noopener noreferrer">Zespół muzyczny Folk Band</a>. Wykorzystując gorące promienie zachodzącego słońca, znaleźliśmy moment i udaliśmy się na mini sesję plenerową. Parkiet zapełniał się błyskawicznie, nie było żadnego problemu ze znalezieniem chętnych do zabaw oczepinowych osób. Impreza trwała do białego rana. Dziękuję za zaufanie i życzę Wam wszystkiego najlepszego na nowej drodze życia. Serdecznie zapraszam na zdjęcia i do strefy klienta po więcej. Nie zapomnijcie o pozostawieniu like na <a href="https://www.facebook.com/Studioo.o15/" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> i <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Instagram</a>.'
                    }
                    slug={"dom-weselny-mogielica-jurkow-rustykalne-wesele"}
                    title={"DOM WESELNY MOGIELICA JURKÓW, RUSTYKALNE WESELE - NATALIA i KRZYSZTOF"}
                    tags={"Dom weselny Mogielica Jurków, rustykalne wesele"}
                    date={"24 czerwca 2022"}
                    menuNames={"NATALIA i KRZYSZTOF"}
                    menuTitle={"DOM WESELNY MOGIELICA JURKÓW, RUSTYKALNE WESELE"}
                    leadNames={"NICOLA i RAFAŁ"}
                    leadTitle={"HOTEL ŻYWIECKI, SALA PRZYŁĘKÓWKA, WESELE W BESKIDACH"}
                    leadUrl={"/hotel-zywiecki-sala-przylekowka-wesele-w-beskidach"}
                    leadImage={process.env.staticImagesPath + "nicola_rafal_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;