import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0010.webp", height: 762 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0002.webp", height: 382 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0007.webp", height: 762 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0012.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0014.webp", height: 382 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0017.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0028.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0025.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0021.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0023.webp", height: 805 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0026.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0029.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0032.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0033.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0034.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0036.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0037.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0039.webp", height: 382 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0041.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0043.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0044.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0046.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0050.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0054.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0057.webp", height: 762 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0061.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0066.webp", height: 527 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0067.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0073.webp", height: 762 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0077.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0079.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0080.webp", height: 527 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0083.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0087.webp", height: 527 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0089.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0091.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0093.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0095.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0096.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0097.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0099.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0100.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0102.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0103.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0104.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0105.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0107.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0108.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0109.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0113.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0115.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0116.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0117.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0118.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0119.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0120.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0129.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0123.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0125.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0126.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0127.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0122.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0128.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0121.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0130.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0131.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0132.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0101.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0133.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0134.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0135.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0136.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0137.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0138.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0139.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0111.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0140.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0141.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0142.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0143.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0144.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0145.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0114.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0146.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0147.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0112.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0150.webp", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0149.webp", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0148.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "przystan-w-kabanosie-spytkowice-zdjecia-slubne-jordanow-start.webp"}
                    images={images}
                    headTitle={"Przystań w Kabanosie Spytkowice, zdjęcia ślubne Jordanów"}
                    headDescription={
                        "Przystań w Kabanosie Spytkowice i góralski klimat. Energia z gór, rodzinna atmosfera i zakochani w sobie bardzo Krystyna i Piotr. Serdecznie zapraszam na kilka zdjęć z tego dnia. Miłego oglądania."
                    }
                    headKeywords={"Przystań w Kabanosie Spytkowice, zdjęcia ślubne Jordanów, Dom Weselny Spytkowice"}
                    headUrl={"https://99foto.pl/przystan-w-kabanosie-spytkowice-zdjecia-slubne-jordanow"}
                    entryContentP1={
                        'Jeden z październikowych weekendów w ubiegłym roku miło spędziłem na fotografowaniu ślubu Iwony i Marcina w Naprawie. Byłoby to mało istotne w kontekście tej opowieści gdyby nie fakt, że Piotr, który z pewnością w ubiegły weekend odmienił swoje życie, jest bratem Marcina. Wybranką Piotra została Krystyna, którą również miałem przyjemność poznać podczas tamtej pamiętnej imprezy. Dlatego od razu napisałem, że tym razem było nie tylko po góralsku, ale też bardzo rodzinnie. Zacznijmy więc od początku. Przygotowania odbyły się w dwóch miejscach. Pierwsze z nich mocno związane z postacią Marylin Monroe to <a href="https://www.facebook.com/pg/salonpieknosciBC/about/" target="blank">Salon Beauty Center</a> w Nowym Targu, gdzie powstała fryzura. Drugie natomiast to gwiazdorski <a href="https://www.facebook.com/glossy.marzena.balara/" target="_blank" rel="nofollow">Salon Urody Glossy</a>, gdzie urodę Krystyny podkreślała Marzena. Właściwe przygotowania odbyły się w domu rodzinnym Krystyny w Skawie. Dziewczyny pomogły ubrać suknię, brat otworzył winko i tak w oka mgnieniu minęła godzinka, po której udałem się do Naprawy do Piotrka. Piotrek nic a nic się przez te kilka miesięcy nie zmienił i jak był duszą towarzystwa na ślubie Marcina, tak zostało. Jego wrodzony włoski temperament skierował przygotowania na właściwe tory. Przywitanie Pana młodego, błogosławieństwo i brama urządzona przez śmiałe dzieciaki wypełniły nam czas oczekiwania na sakramentalne TAK.'
                    }
                    entryContentP2={
                        'Tym razem zostało ono wypowiedziane w <a href="https://skawa.sdb.org.pl/" target="_blank" rel="nofollow">Kościele NMP Wspomożenia Wiernych</a> w Skawie. Kościół bardzo ciekawy, pozwalający zrobić zdjęcia z perspektywy drona bez drona. Po zdjęciu grupowym i życzeniach Para Młoda zaprosiła gości do Domu Weselnego <a href="https://przystanwkabanosie.pl/pl/page/6/Restauracja_Spytkowice/" target="_blank">Przystań w Kabanosie</a> w Spytkowicach. Parkiet został otworzony brawurowym pierwszym tańcem, pyszne słodkości z mini karety zniknęły momentalnie i <a href="https://edenzespol.pl" target="_blank" rel="nofollow">zespół muzyczny Eden</a> przejął pałeczkę dbając o to, by goście nie spędzali za dużo czasu przy stolikach. Atrakcje tego wieczoru można wyliczać długo, był tort podany w chmurach ciekłego azotu, pieczony świniak, fotobudka, pociąg, chusteczka, kaczuszki i pełny zestaw zabaw oczepinowych. Każdą minutę imprezy skrzętnie filmował Mateusz z <a href="https://www.planujemywesele.pl/2048-f-h-u-viva" target="_blank" rel="nofollow">Viva Film</a>. Było naprawdę re-we-la-cyj-nie. Zapraszam na reportaż ślubny z tego dnia, a po więcej do strefy klienta (przyda się hasło z mojej wizytówki). Miłego oglądania.'
                    }
                    slug={"przystan-w-kabanosie-spytkowice-zdjecia-slubne-jordanow"}
                    title={"PRZYSTAŃ W KABANOSIE SPYTKOWICE, ZDJĘCIA ŚLUBNE JORDANÓW - KRYSIA i PIOTR"}
                    tags={"Przystań w Kabanosie Spytkowice, zdjęcia ślubne Jordanów, Dom Weselny Spytkowice"}
                    date={"5 maja 2018"}
                    menuNames={"KRYSIA i PIOTR"}
                    menuTitle={"PRZYSTAŃ W KABANOSIE SPYTKOWICE, ZDJĘCIA ŚLUBNE JORDANÓW"}
                    leadNames={"MAŁGORZATA I RAFAŁ"}
                    leadTitle={"PLENER ŚLUBNY SŁOWACJA, ŁOMNICKI STAW"}
                    leadUrl={"/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    leadImage={process.env.staticImagesPath + "plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.webp"}
                />
            
        );
};

export default BlogPageComponent;
