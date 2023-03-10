import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0001.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0003.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0005.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0007.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0009.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0012.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0014.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0015.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0017.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0019.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0020.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0021.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0022.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0024.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0026.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0029.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0032.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0033.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0037.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0040.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0041.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0042.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0043.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0045.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0049.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0053.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0052.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0054.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0056.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0063.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0064.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0066.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0067.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0068.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0069.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0070.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0071.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0072.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0073.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0075.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0076.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0077.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0080.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0081.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0083.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0084.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0088.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0090.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0093.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0097.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0099.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0100.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0104.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0105.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0106.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0109.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0110.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0111.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0112.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0113.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0114.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0130.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0116.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0118.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0132.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0117.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0119.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0120.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0122.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0123.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0126.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0125.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0129.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0131.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0127.webp", height: 382 }

        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sala_weselna_biala_wilczyca_kocmyrzow.webp"}
                    images={images}
                    headTitle={"Wesele Mi??dzynarodowe Proszowice - Polskie Tradycje Weselne"}
                    headDescription={"Sala weselna Bia??a Wilczyca Kocmyrz??w. Mi??dzynarodowe wesele po????czone z polskimi tradycjami weselnymi. Monika i Martin, pi??kni, m??odzi, szcz????liwi. Zapraszam."}
                    headKeywords={"Wesele mi??dzynarodowe, polskie tradycje weselne, fotograf na wesele Proszowice"}
                    headUrl={"https://99foto.pl/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne"}
                    entryContentP1={
                        'Bardzo dobrze wspominam studenckie czasy i zupe??nie niezwi??zane z nauk?? wakacyjne wyjazdy zagraniczne. To w??a??nie tam w??r??d ci??gn??cych si?? w niesko??czono???? ??cie??ek fasolowych znalaz??em prawdziw?? motywacj?? do tego by nauczy?? si?? j??zyka angielskiego. Nigdy nie s??dzi??em, ??e umiej??tno???? ta b??dzie tak wa??na w mojej karierze fotografa ??lubnego. Bran??a ??lubna si?? zmienia, mamy coraz wi??cej wesel w okresie zimowym, ro??nie ??wiadomo???? klient??w poszukuj??cych dobrego fotografa ??lubnego, kt??ry wykona ich wymarzone zdj??cia. Mamy te?? coraz wi??cej par m??odych, kt??re decyduj?? si?? na zaproszenie go??ci innych narodowo??ci do Polski i zorganizowanie mi??dzynarodowego ??lubu i wesela w??a??nie w naszym kraju. Mi??dzynarodowa ekipa przyjaci???? jest na pewno gwarancj?? udanej zabawy. Jako lokalni patrioci doskonale znamy polskie tradycje weselne. Ka??dy z nas wielokrotnie go??ci?? na ??lubach w bli??szej lub dalszej rodzinie, weselach znajomych i koleg??w z pracy. Nasi zagraniczni go??cie natomiast na naszych polskich weselach bawi?? si?? ??wietnie poniewa?? doceniaj?? wszystko to, co nam ju?? zwyczajnie spowszednia??o. Tak, bardzo cz??sto nie doceniamy pysznego jedzenia, dekoracji wykonanych z ??ywych kwiat??w, muzyki, kt??ra ods??uchana w Spotifaju wielokrotnie nap??dza nas do ta??ca. Dla zagranicznych go??ci, kt??rzy przyje??d??aj?? do naszego kraju na wesela, elementy te wywo??uj?? fascynacje tym co si?? dzieje, jak si?? dzieje i ile si?? dzieje. Ten kr??tki wst??p prowadzi nas prosto do Proszowic...'
                    }
                    entryContentP2={
                        'W??a??nie tam w domu rodzinnym Moniki rozpocz??li??my przygotowania do tego mi??dzynarodowego ??lubu i wesela. Makija??, fryzjer, ubieranie sukni i oczekiwanie na przyjazd Pana M??odego, wszystko z u??miechem na ustach  i tym czym?? w oczach. Rodzinnie, wspaniale i na luzie, tylko tak mo??na odda?? atmosfer?? tego przedpo??udnia w kilku s??owach. Ceremonia za??lubin odby??a si?? w <a href="http://parafiaproszowice.com.pl/" target="_blank" rel="nofollow">Ko??ciele pw. Wniebowzi??cia NMP i ??w. Jana Chrzciciela</a> w Proszowicach. Pi??kny gotycki Ko??ci???? wype??niony po brzegi zaproszonymi na ceremoni?? go????mi. Kazanie w j??zyku polskim i przes??anie wyg??oszone pod koniec ceremonii w j??zyku angielskim. U??miechy i emocje w momencie wypowiadania s????w przysi??gi ma????e??skiej. Gdy cz?????? oficjalna dobieg??a ko??ca Monika i Martin zaprosili go??ci do oddalonej tylko 15 kilometr??w od Krakowa <a href="https://wedding.pl/sale-weselne/biala-wilczyca-1" target="_blank" rel="nofollow">Sali Weselnej Bia??a Wilczyca</a>. Wystrza??y armatnie powita??y przyby??ych na impreze go??ci. W trakcie ??ycze?? serwowano lemoniad?? i zimne lody, by??o wi??c pysznie. Grupa LIMONCELLO dzielnie walczy??a na parkiecie do upad??ego. Odpowiedni?? muz?? na najwy??szym poziome serwowa?? <a href="https://www.facebook.com/zespolfunkey/" target="_blank" rel="nofollow">Zesp???? FunKey</a>. Na zdj??cia grupowe wbili??my w z??otej godzinie, czyli najlepszej mo??liwej porze dnia. Du??o si?? dzia??o i potwierdzam, ??e mi??dzynarodowe towarzystwo i wesele mi??dzynarodowe jest gwarancj?? dobrej, co ja pisz?? najlepszej zabawy. Serdecznie zapraszam na zdj??cia. Wi??cej znajdziecie w strefie klienta wpisuj??c has??o z mojej wizyt??wki. ??yczy si?? mi??ego ogl??dania i lajkowania na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow">Insta</a>.'
                    }
                    slug={"wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne"}
                    title={"WESELE MI??DZYNARODOWE i POLSKIE TRADYCJE WESELNE - MONIKA i MARTIN"}
                    tags={"Wesele mi??dzynarodowe, polskie tradycje weselne, fotograf na wesele Proszowice"}
                    date={"6 czerwca 2019"}
                    menuNames={"MONIKA i MARTIN"}
                    menuTitle={"WESELE MI??DZYNARODOWE PROSZOWICE i POLSKIE TRADYCJE WESELNE"}
                    leadNames={"MARLENA i MACIEK"}
                    leadTitle={"KAROLINKA BYSTRA PODHALA??SKA, POGODOWI SZCZ????CIARZE"}
                    leadUrl={"/sala-weselna-karolinka-bystra-podhalanska"}
                    leadImage={process.env.staticS3ImagesPath + "restauracja_karolinka_bystra_podhalanska.webp"}
                />
            
        );
};

export default BlogPageComponent;