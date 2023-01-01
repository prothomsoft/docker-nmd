import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0007.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0004.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0005.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0011.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0012.webp", height: 805 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0020.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0023.webp", height: 526 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0043.webp", height: 566 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0027.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0029.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0035.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0040.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0041.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0044.webp", height: 567 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0045.webp", height: 526 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0047.webp", height: 805 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0050.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0054.webp", height: 805 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0057.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0059.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0061.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0066.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0067.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0072.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0073.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0074.webp", height: 805 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0076.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0077.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0079.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0080.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0082.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0081.webp", height: 761 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0049.webp", height: 566 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0083.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0085.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0087.webp", height: 762 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0089.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0091.webp", height: 402 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0093.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0094.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0096.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0097.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0099.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0100.webp", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0101.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0102.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0103.webp", height: 762 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0104.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0105.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0106.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0108.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0109.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0111.webp", height: 762 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0112.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0113.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0114.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0149.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0115.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0116.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0151.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0117.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0119.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0120.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0144.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0121.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0150.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0123.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0125.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0126.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0127.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0128.webp", height: 762 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0129.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0130.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0131.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0132.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0133.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0134.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0135.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0136.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0137.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0138.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0139.webp", height: 762 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0140.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0141.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0142.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0143.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0145.webp", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0146.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0147.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0148.webp", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0152.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "zielone_wzgorze_koniusza.webp"}
                    images={images}
                    headTitle={"Zielone Wzgórze Koniusza, TAK w promieniach słońca"}
                    headDescription={"Zielone Wzgórze Koniusza, fotograf ślubny Proszowice. TAK w promieniach słońca, garbus i dużo kwiatów na ślubie Karoliny i Mateusza. Zapraszam do oglądania."}
                    headKeywords={"Zielone Wzgórze Koniusza, fotograf ślubny Proszowice, garbus do ślubu"}
                    headUrl={"https://99foto.pl/zielone-wzgorze-koniusza-tak-w-promieniach-slonca"}
                    entryContentP1={
                        'We wrześniu 2016 roku, czyli dwa lata temu na przygotowaniach do <a href="https://99foto.pl/natalia-marcin-i-maja-reportaz-slubny-gosciniec-branicki/" target="_blank" rel="nofollow">ślubu Natalii i Marcina</a>, który można oglądnąć na moim blogu, poznałem Karolinę. Nie jestem do końca pewien czy dobrze zaobserwowałem, ale właśnie wtedy pod Kościołem na Wzgórzach Krzesławickich Karolina przedstawiała znajomym swojego nowego chłopaka Mateusza. No iskrzyło między nimi i po dwóch latach spotkaliśmy się ponownie po to by postawić kropkę nad i. Dzień rozpoczęliśmy od przygotowań Karoliny w <a href="https://www.facebook.com/pages/category/Beauty-Salon/Odpicuj-Si%C4%99-322995571499190/" target="_blank" rel="nofollow">Studio Odpicuj się</a>. Profesjonalny makijaż wykonała <a href="https://aleksandra-szczepanek.com.pl/" target="_blank" rel="nofollow">Aleksandra Szczepanek</a>. Następnie nie zważając na utrudnienia w ruchu związane z odbywającym się w Krakowie maratonem, przebiliśmy się do Nowej Huty, dokładniej na Osiedle Kalinowe w celu uwiecznienia przygotowań Mateusza. Piszę w liczbie mnogiej ponieważ od samego rana biegaliśmy fotografując i filmując z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">Krzyśkiem z CAMDESIGN</a>, którego bardzo polecam wszystkim przyszłym nowożeńcom. Było tak jak lubię, działo się dużo i można było darować sobie ustawki skupiając się na fajnych momentach. Przygotowania u Karoliny przebiegły w rodzinnej atmosferze. Dom wypełniały śmiechy bawiących się dzieciaków i nutka napięcia budowanego zbliżającym się przybyciem Mateusza.'
                    }
                    entryContentP2={
                        'First look, wpinanie butonierek, błogosławieństwo rodziców i ubrany w przepiękne kwiaty Garbus odtransportował Parę Młodą do <a href="https://parafia.kalinowe.pl/" target="_blank" rel="nofollow">Kościóła św. Józefa Oblubieńca Najświętszej Maryi Panny w Krakowie</a>. Trochę już tych ślubów mam na swoim koncie, ale w takiej ceremonii miałem okazję uczestniczyć po raz pierwszy. Ksiądz był gospodarzem przez duże gie. Już na początku poprzesadzał gości do przednich ławek, poprosił aparaciarzy by oszczędzali nogi podczas kazania, przez blisko pół godziny próbował bezskutecznie zrozumieć naturę kobiety, by na sam koniec zaprosić wszystkich gości do przodu by napewno nie przegapili chwili, w której obrączki trafią na swoje miejsce. No i co, były łzy, pocałunki, pełno emocji. Po wyjściu z kościoła przywitała nas polska złota jesień. Wykorzystując te nieziemskie warunki zrobiliśmy zdjęcie grupowe i ruszyliśmy w stronę Proszowic do <a href="https://www.salazielonewzgorze.pl/" target="_blank" rel="nofollow">Sali Weselnej Zielone Wzgórze w miejscowości Koniusza</a>. Na parkiecie gości przywitał Artur z <a href="https://artmuz.krakow.pl/" target="_blank" rel="nofollow">Zespółu Muzycznego ART MUZ</a>. Para Młoda zatańczyła pierwszy taniec, pokroiła torta i zaprosiła gości weselnych do wspólnej zabawy na parkiecie. Artur kręcił zabawę na poziomie jako frontment niemalże zwisając ze sceny. Pewnie gdyby szukał pracy na etacie to stacja telewizyjna TVN przygarnęłaby go jego talent już po pierwszym interview. Była też fotobudka, litery LOVE i dużo pysznych rzeczy na ząb. Dzięki, że mogłem sfotografować Wasz ślub. Było tak jak się spodziewałem emocjonalnie i energetycznie. Zapraszam na wybrane zdjęcia, a po więcej do strefy klienta.'
                    }
                    slug={"zielone-wzgorze-koniusza-tak-w-promieniach-slonca"}
                    title={"ZIELONE WZGÓRZE KONIUSZA, TAK W PROMIENIACH SŁOŃCA - KAROLINA i MATEUSZ"}
                    tags={"Zielone Wzgórze Koniusza, fotograf ślubny Proszowice, garbus do ślubu"}
                    date={"23 października 2018"}
                    menuNames={"KAROLINA i MATEUSZ"}
                    menuTitle={"ZIELONE WZGÓRZE KONIUSZA, TAK W PROMIENIACH SŁOŃCA"}
                    leadNames={"IZABELA i ARKADIUSZ"}
                    leadTitle={"SESJA ŚLUBNA JESIENIĄ - PAŁAC GOETZÓW OKOCIMSKICH"}
                    leadUrl={"/sesja-slubna-jesienia-palac-goetzow-okocimskich"}
                    leadImage={process.env.staticImagesPath + "sesja_slubna_jesienia.webp"}
                />
            
        );
};

export default BlogPageComponent;
