import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0003.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0014.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0018.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0020.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0154.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0021.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0023.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0029.webp", height: 419 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0026.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0028.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0030.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0031.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0033.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0034.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0036.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0040.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0051.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0053.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0055.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0057.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0152.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0064.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0065.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0071.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0074.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0077.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0080.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0085.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0087.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0092.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0093.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0097.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0099.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0101.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0102.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0104.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0108.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0112.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0114.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0123.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0129.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0130.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0134.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0137.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0138.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0143.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0145.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0146.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0147.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0150.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/restauracja_tiffany_wola_filpowska_0151.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "restauracja_tiffany_wola_filpowska.webp"}
                    images={images}
                    headTitle={"Restauracja Tiffany Wola Filipowska, fotograf na ??lub Krzeszowice"}
                    headDescription={
                        "Restauracja Tiffany Wola Filipowska i reporta?? ze ??lubu Marty i Marcina w Krzeszowicach. First look na jednym z najwy??szych wie??owc??w w Krakowie. Zapraszam do ogl??dania."
                    }
                    headKeywords={"restauracja tiffany wola filipowska, fotograf na ??lub krzeszowice, first look na dachu wie??owca"}
                    headUrl={"https://99foto.pl/tiffany-wola-filipowska-first-look-na-dachu-wiezowca"}
                    entryContentP1={
                        '??lub Marty i Marcina to wydarzenie od pocz??tku owiane aur?? tajemniczo??ci. Marta zaplanowa??a first look na jednym z najwy??szych wie??owc??w w Krakowie, z genialnym widokiem na lini?? wytyczon?? przebiegiem Zakopianki, wie??ami Sanktuarium w ??agiewnikach, Zamkiem na Wawelu czy Klasztorem Kamedu????w na Bielanach wyr????niaj??cymi si?? na mapie tej panoramy. Oczywi??cie by??a to niespodzianka dla Marcina, kt??ry do ko??ca nie m??g?? zrozumie?? dlaczego w tak pi??kny i wa??ny dzie?? ma ??azi?? po dachach. Domy??lam si?? jednak, ??e w momencie pierwszego spotkania u??miech Marty przys??oni?? mu ca??y ??wiat i ca??y ten panoramiczny widok. Przygotowania rozpocz????y si?? o godzinie jedenastej blisko ronda Mogilskiego w Salonie Kosmetycznym, gdzie nad delikatnym, maj??cym na celu tylko delikatnie podkre??li?? niezwyk???? urod?? Marty pracowa??a Agnieszka. ??wietnie urz??dzone miejsce z klimatem, kt??ry stara??em si?? odda?? na zdj??ciach. Po wspomnianym ju?? przywitaniu Pary M??odej i b??ogos??awie??stwie rodzic??w wszyscy p??dz??c obwodnic?? Krakowa w mniej ni?? godzink?? udali??my si?? do <a href="https://marcinkrzeszowice.pl/" target="_blank" rel="nofollow">Ko??ci????a ??w. Marcina z Tours w Krzeszowicach</a>. Tym razem temat z organist?? by?? dogadany i drzwi na ch??r sta??y otworem. Pe??ne u??miech??w przywitanie go??ci, kt??rzy z uwagi na temperatur?? zjawili si?? pod ko??cio??em kilka minut przed ceremoni??. Ksi??dz, kt??ry wyg??osi?? ??wietne kazanie i przeprowadzi?? ceremoni?? z humorem. Wreszcie moment najwa??niejszy i sakramentalne TAK.'
                    }
                    entryContentP2={
                        'Obserwowa??em Mart?? przez ca??y ten d??ugi dzie?? i mam wra??enie, ??e w odr????nieniu od wi??kszo??ci kobiet, jest ma??o rzeczy, kt??re potrafi?? wyprowadzi?? j?? z r??wnowagi. Trzymam kciuki, ??eby tak pozosta??o. Po zdj??ciu grupowym pod ko??cio??em Para M??oda zaprosi??a go??ci do <a href="https://restauracja-tiffany.business.site/" target="_blank" rel="nofollow">Restauracji Tiffany w Woli Filipowskiej</a>. Rzut kieliszkami i moc gor??cych ??ycze?? przyj??tych krok przed napisem LOVE. Zesp???? Muzyczny <a href="https://www.easyband.pl" target="_blank" rel="nofollow">Easy Band</a> z dw??jk?? charyzmatycznych wokalist??w gra?? na granicy rocka szerokim ??ukiem omijaj??c szlagierowe przeboje disco polo. By?? pokaz filmowy, tort i fotobudka <a href="https://www.foto4fun.com.pl/" target="_blank" rel="nofollow">Foto4Fun</a>. Ka??d?? minut?? tego wa??nego dnia rejestrowa?? Grzegorz z <a href="https://www.facebook.com/gemcofilms/" target="_blank" rel="nofollow">Gemco films</a>, kt??rego ceni?? za profesjonalizm i Dominik, kt??rego zapami??tam z uwagi na poczucie humoru. Super dzie?? i ??wietna impreza. Marto i Marcinie, dzi??kuj?? za zaufanie i widzimy si?? nied??ugo w g??rach. Zapraszam na zdj??cia, a po wi??cej do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"tiffany-wola-filipowska-first-look-na-dachu-wiezowca"}
                    title={"TIFFANY WOLA FILIPOWSKA, FIRST LOOK NA DACHU WIE??OWCA - MARTA i MARCIN"}
                    tags={"restauracja tiffany wola filipowska, fotograf na ??lub krzeszowice, first look na dachu wie??owca"}
                    date={"3 sierpnia 2018"}
                    menuNames={"MARTA i MARCIN"}
                    menuTitle={"TIFFANY WOLA FILIPOWSKA, FIRST LOOK NA DACHU WIE??OWCA"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ??LUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={process.env.staticS3ImagesPath + "sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
