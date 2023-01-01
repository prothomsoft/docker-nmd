import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0003.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0013.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0014.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0016.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0017.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0019.webp", height: 402 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0021.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0023.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0025.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0027.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0030.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0032.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0033.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0035.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0036.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0038.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0040.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0044.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0046.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0048.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0049.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0050.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0051.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0057.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0060.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0062.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0063.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0066.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0068.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0071.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0074.webp", height: 402 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0075.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0076.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0094.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0098.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0100.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0108.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0113.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0120.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0122.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0124.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0127.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0130.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0133.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0136.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0147.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0145.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0150.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/09/helada_sala_bankietowa_oswiecim_0151.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "helada_oswiecim.webp"}
                    images={images}
                    headTitle={"Helada sala weselna, Fotograf ślubny Oświęcim"}
                    headDescription={"Helada sala weselna Oświęcim. Dużo emocji i świetnie zorganizowany ślub Magdaleny i Damiana. Zapraszam do oglądania."}
                    headKeywords={"Helada sala weselna, fotograf ślubny Oświęcim"}
                    headUrl={"https://99foto.pl/sala-weselna-helada-fotograf-slubny-oswiecim"}
                    entryContentP1={
                        'Starożytna Grecja przez jedno el... w ten sposób właściciele bardzo klimatycznej <a href="https://helada.pl/" target="_blank" rel="nofollow">sali weselnej Helada</a> w Oświęcimiu nazwali miejsce spotkań gości weselnych. Sobota więc to wyprawa na zachód do Oświęcimia, gdzie ja zrobiłem zdjęcia, a <a href="https://www.facebook.com/filiplempamedia" target="_blank" rel="nofollow">Filip Lempa z FL Media</a>, młody wilk ślubnej kinematografii nakręcił materiał z przygotowań Damiana. Następnie już jako zespół wróciliśmy w okolice Alwerni do Babic, by spotkać się z Panną Młodą. Magdę i Damiana poznałem już wcześniej podczas naszej sesji narzeczeńskiej w <a href="https://mnpe.pl/" target="_blank" rel="nofollow">Nadwiślańskim Parku Etnograficznym w Wygiełzowie</a>, który możecie odnaleźć na moim blogu. Makijaż wykonała <a href="https://www.facebook.com/paulinakurzelarzesyimakijaz/" target="_blank" rel="nofollow">Paulina Kurzela</a>. Chwilę później dołączyła do nas druhna Paulina i rozpoczęło się ubieranie sukni ślubnej, biżuterii i wszystkich innych ślubnych gadżetów. Srebrny Passat zaparkował przed domem, a Damian gorącym buziakiem przywitał się z Magdą. Rozpoczęło się pełne emocji i wzruszeń błogosławieństwo.'
                    }
                    entryContentP2={
                        'Ceremonia zaślubin odbyła się w Kościele pw. Wszystkich Świętych w Babicach. Piękny ślub i charyzmatyczny ksiądz, który może zdjęć nie lubił, ale humor to mu bardzo dopisywał. Pod kościołem ciachnęliśmy jeszcze zdjęcie grupowe i pełni energii pojechaliśmy do wspomnianej już <a href="https://helada.pl/" target="_blank" rel="nofollow">Helady</a> w Oświęcimiu. Pierwszy taniec odbył się przy muzyce zespołu Metallica, a z głośników wydobyły się dźwięki utworu "Nothing else matters". <a href="https://www.facebook.com/Dj-Admin-Obs%C5%82uga-Muzyczna-Imprez-346036832234952/"  target="_blank" rel="nofollow">DJ Admin</a>, który tą sale weselną znał na pamięć i genialnie podkręcał klimat imprezy stanął na wysokości zadania tego wieczoru i dał czadu. Muza padła na podatny grunt, bo goście weselni chętnie wychodzili na parkiet i mocno balowali. Nie zabrakło też atrakcji takich jak fotobudka, zabaw z jedną słuszną nagrodą, barmana serwującego pyszne drinki. Przed dwunastą Magda i Damian całowali się w towarzystwie płonących rac, a później były oczepiny i dużo rozdanych i skonsumowanych nagród. Niedługo widzimy się ponownie na plenerze ślubnym, ale tymczasem oglądajcie i wspominajcie jak było miło. Zapraszam na zdjęcia blogowe, a po więcej do strefy klienta.'
                    }
                    slug={"sala-weselna-helada-fotograf-slubny-oswiecim"}
                    title={"SALA WESELNA HELADA, FOTOGRAF ŚLUBNY OŚWIĘCIM - MAGDALENA i DAMIAN"}
                    tags={"Helada sala weselna, Fotograf ślubny Oświęcim"}
                    date={"30 września 2018"}
                    menuNames={"MAGDALENA i DAMIAN"}
                    menuTitle={"SALA WESELNA HELADA, FOTOGRAF ŚLUBNY OŚWIĘCIM"}
                    leadNames={"MAGDALENA I DAMIAN"}
                    leadTitle={"SESJA NARZECZEŃSKA W KRAKOWIE – WYGIEŁZÓW"}
                    leadUrl={"/sesja-narzeczenska-w-krakowie-i-okolicach-wygielzow"}
                    leadImage={process.env.staticS3ImagesPath + "sesja-narzeczenska-w-krakowie-i-okolicach-wygielzow-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
