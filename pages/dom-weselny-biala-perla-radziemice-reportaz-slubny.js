import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0003.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0005.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0007.webp", height: 383 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0008.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0009.webp", height: 566 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0010.webp", height: 383 }, 
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0012.webp", height: 383 },          
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0014.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0015.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0017.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0020.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0021.webp", height: 382 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0025.webp", height: 763 },            
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0023.webp", height: 383 }, 
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0026.webp", height: 763 },      
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0028.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0030.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0032.webp", height: 382 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0034.webp", height: 383 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0037.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0041.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0042.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0043.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0044.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0060.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0050.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0049.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0055.webp", height: 382 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0053.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0143.webp", height: 383 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0059.webp", height: 763 },          
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0062.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0065.webp", height: 660 },      
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0067.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0068.webp", height: 383 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0071.webp", height: 806 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0076.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0077.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0078.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0079.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0073.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0080.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0074.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0081.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0082.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0083.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0087.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0091.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0089.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0093.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0096.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0097.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0098.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0099.webp", height: 852 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0100.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0101.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0102.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0103.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0104.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0105.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0107.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0108.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0109.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0110.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0111.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0112.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0113.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0114.webp", height: 763 },         
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0116.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0117.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0118.webp", height: 383 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0115.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0119.webp", height: 382 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0120.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0123.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0121.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0124.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0125.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0126.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0127.webp", height: 806 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0128.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0129.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0130.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0131.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0133.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0135.webp", height: 527 },          
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0134.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0132.webp", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0136.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0137.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0141.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0138.webp", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0139.webp", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0140.webp", height: 763 },            
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0142.webp", height: 762 }          
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "dom-weselny-biala-perla-radziemice-reportaz-slubny.webp"}
                    images={images}
                    headTitle={"Dom Weselny Biała Perła Radziemice, reportaż ślubny"}
                    headDescription={"Dom Weselny Biała Perła, Radziemice, reportaż ślubny Żanety i Sebastiana. Sala ślubna na wymarzone wesele blisko Krakowa. Zapraszam do oglądania."}
                    headKeywords={"Dom Weselny Biała Perła, reportaż ślubny kraków, ślubna sesja zdjęcia, sala ślubna, wesele pod krakowem"}
                    headUrl={"https://99foto.pl/dom-weselny-biala-perla-radziemice-reportaz-slubny"}
                    entryContentP1={
                        'Ostatni reportaż ślubny na moim blogu opublikowałem w połowie sierpnia ubiegłego roku. Od tego czasu mogliście zobaczyć kilka sesji plenerowych. Chciałem w ten sposób uciec od trendów panujących na grupach fotograficznych pokazujących śluby w pryzmacie pandemii - fenomen masek, czy tortów zamkniętych w lodówkach prywatnych mieszkań nigdy do mnie nie przemawiał. Fotografując śluby zawsze skupiam się na ludziach, emocjach, pięknych detalach i ciekawych do pokazania miejscach. Fotografia ślubna musi nieść ze sobą dawkę emocji, które będą wspominane przez całe życie. Reportaż ślubny musi to być natomiast spójne opowiadanie, które przekaże historie Pary Młodej zarówno dzieciom, jak i wnukom, bliskim i dalszym znajomym podczas wspólnych spotkań. Piękno tego jedynego dnia, momenty wzruszenia, uśmiechy Nowożeńców, radość i zabawa zaproszonych gości, tego nie da się opowiedzieć to trzeba zobaczyć najlepiej na zdjęciach.'
                    }
                    entryContentP2={
                        'Czwartkowy reportaż rozpoczęliśmy od przygotowań Żanety i Sebastiana. Od początku towarzyszył mi Szymon z <a href="https://www.facebook.com/cinebury" target="_blank" rel="nofollow">Cinebury</a>, z którym już wcześniej miałem przyjemność pracować. Świadek Mateusz jak zwykle punktualny przypalił kubańskie cygaro, a druhny, razem z Mamą i siostrami pomogły Żanecie w ubieraniu sukni i zadbały, by wszystkie dodatki znalazły się na właściwym miejscu. Błogosławieństwo, sakramentalne TAK w <a href="https://diecezja.kielce.pl/parafie/radziemice-sw-stanislawa-b-m" target="_blank" rel="nofollow">Kościele św. Stanisława biskupa i męczennika</a>, wspólne zdjęcie grupowe i chill w <a href="https://dworekbialaperla.pl/" target="_blank" rel="nofollow">Domu Weselnym Biała Perła w Radziemicach</a>. <a href="https://www.facebook.com/profile.php?id=100046824468125" target="_blank" rel="nofollow">Zespół Muzyczny Cosmo</a> przyjechał do nas z Łowicza, przywiózł nowe spojrzenie na zabawy weselne i weselne szlagiery znane już wszystkim doskonale. Dziękuję za zaufanie i świetne chwile, które mogłem razem z Wami dzielić. Spotkamy się jeszcze na sesji plenerowej i już wiem, że będzie to kolejny sukces. Serdecznie zapraszam na zdjęcia i życzę miłego oglądania.'
                    }
                    slug={"dom-weselny-biala-perla-radziemice-reportaz-slubny"}
                    title={"DOM WESELNY BIAŁA PERŁA RADZIEMICE, REPORTAŻ ŚLUBNY - ŻANETA i SEBASTIAN"}
                    tags={"Dom Weselny Biała Perła, reportaż ślubny kraków, ślubna sesja zdjęcia, sala ślubna, wesele pod krakowem"}
                    date={"8 czerwca 2021"}
                    menuNames={"ŻANETA i SEBASTIAN"}
                    menuTitle={"DOM WESELNY BIAŁA PERŁA RADZIEMICE, REPORTAŻ ŚLUBNY"}
                    leadNames={"ANNA i PAWEŁ"}
                    leadTitle={"PAŁAC GOETZ MIEJSCE NA WESELE i PLENER ŚLUBNY MARZEŃ"}
                    leadUrl={"/palac-goetz-wesele-plener-slubny"}
                    leadImage={"url(" + process.env.staticImagesPath + "sesja_slubna_palac_goetza.webp"}
                />
            
        );
};

export default BlogPageComponent;
