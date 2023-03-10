import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0003.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0004.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0005.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0009.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0014.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0018.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0021.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0022.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0024.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0026.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0032.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0033.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0036.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0039.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0042.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0044.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0046.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0048.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0053.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0061.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0065.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0067.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0068.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0072.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0074.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0075.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0080.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0083.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0088.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0091.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0092.webp", height: 472 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0093.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0069.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0100.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0101.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0102.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0107.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0109.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0111.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0112.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0113.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0115.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0120.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0125.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0124.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0127.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0130.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0131.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0132.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0139.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0140.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0143.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0146.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0147.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0150.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/04/villa_marina_slub_nad_jeziorem_0128.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem-start.webp"}
                    images={images}
                    headTitle={"Sala weselna Villa Marina D??browa G??rnicza, ??lub nad jeziorem"}
                    headDescription={
                        "Sala weselena Villa Marina jest po??o??ona nad brzegiem jeziora Pogoria w bezpiecznej odleg??o??ci od centrum miasta, malowniczej okolicy w otoczeniu lasu. Zapraszam na zdj??cia ??lubne Sandry i Ma??ka."
                    }
                    headKeywords={"Villa Marina D??browa G??rnicza, sala weselna nad jeziorem, ??lub na ??l??sku"}
                    headUrl={"https://99foto.pl/sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem"}
                    entryContentP1={
                        'Dok??adnie tydzie?? temu zach??cony niezwyk????, pachn??c?? na klipach internetowych wakacyjnym klimatem sal?? weseln?? <a href="https://villamarina.eu/" target="_blank" rel="nofollow">Villa Marina w D??browie G??rniczej</a>, wybra??em si?? na zdj??cia ??lubne troch?? dalej ni?? zwykle. Powiem jedno by??o warto i ??l??sk zapami??tam bardzo dobrze i na bardzo d??ugo. Przy okazji upolowa??em fajne kadry, kt??re na pewno rozszerz?? moje dotychczasowe porfolio. Dzie?? rozpocz??li??my w Tarnowskich G??rach w domu rodzinnym Sandry, gdzie Magda pomalowa??a Pann?? M??od??. Starali??my si?? nie przeszkadza?? Magdzie w pracy, mo??e nie do ko??ca si?? uda??o, ale kilka drobnych pr????b cierpliwie przez ni?? wys??uchiwanych, pozwoli??o nam ??wietnie wsp????pracowa?? i zrobi?? fajne zdj??cia. Kolejne kilka minut zosta??o skradzione przez ubieranie sukni ??lubnej i tak oto wszystko zosta??o finalnie dopi??te na ostatni guzik. Pojechali??my wi???? na przygotowania do Ma??ka. By??o to bardzo dynamiczne pi??tna??cie minut, w kt??rych Pan M??ody za??o??y?? spinki, much??, buty, zegarek i marynark??. Pierwszy poca??unek, b??ogos??awie??stwo, dwie bramy przygotowane przez s??siad??w i dotarli??my do <a href="https://parafia.bobrowniki.tgory.pl/" target="_blank" rel="nofollow">Ko??cio??a pw. Przemienienia Pa??skiego</a> w Tarnowskich G??rach. Ceremonia, podczas kt??rej go??cie procesyjnie przeszli za o??tarz, oraz pi??kne kazanie wyg??oszone przez charyzmatycznego ksi??dza i wreszcie sakramentalne TAK.'
                    }
                    entryContentP2={
                        'Po wyj??ciu z ko??cio??a Par?? M??od?? przywita??o pi??kne s??o??ce i deszcz... monet, kt??re go??cie wyrzucili na szcz??cie. Gar???? gor??cych ??ycze??, po kt??rych Para M??oda zaprosi??a go??ci weselnych na mniej oficjaln?? cz?????? imprezy do wspomnianej ju?? <a href="https://villamarina.eu/" target="_blank" rel="nofollow">Sali Bankietowej Villa Marina w D??browie G??rniczej</a>. Sala weselena Villa Marina i o??rodek wypoczynkowy po??o??ony s?? nad brzegiem jeziora Pogoria w bezpiecznej odleg??o??ci od centrum miasta, malowniczej okolicy w otoczeniu lasu. Ka??dy z go??ci po dotarciu na miejsce nie kry?? zachwytu rozwodz??c si?? nad wspania??o??ci?? tego miejsca. Sandra i Maciek przyj??li reszt?? gor??cych ??ycze?? od wszystkich go??ci weselnych i otworzyli parkiet pierwszym ta??cem. <a href="https://zespol-lavado.pl" target="_blank" rel="nofollow">Zesp???? Lavado</a>, kt??ry gra?? dla nas tego wieczoru stan???? na wysoko??ci zadania. ??wietne brzmienie gitary, Grzegorz i jego saksofon wyrzucaj??cy z lekko??ci?? motyla niezliczon?? ilo???? perfekcyjnie pouk??adanych d??wi??k??w, wybitny g??os wokalistki i szeroki wachlarz utwor??w zostan?? w naszych g??owach na d??ugo. Po raz kolejny mia??em te?? mo??liwo???? spotka?? si?? i wsp????pracowa?? z Krzysiem z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">CAMDESIGN - Pracownia Filmu ??lubnego</a>, kt??ry nagrywa??, rejestrowa?? i filmowa?? jednocze??nie. Naprawd?? super impreza w wakacyjnym klimacie, kt??rego w kwietniu nikt przecie?? by si?? nie m??g?? spodziewa??. Sandro i Ma??ku, dzi??ki za zaufanie i zaproszenie mnie na Wasz ??lub. Nie przed??u??aj???? serdecznie zapraszam do ogl??dania zdj????, a po kilka wi??cej do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem"}
                    title={"VILLA MARINA D??BROWA G??RNICZA, ??LUB NAD JEZIOREM - SANDRA i MACIEK"}
                    tags={"Villa Marina D??browa G??rnicza, sala weselna nad jeziorem, ??lub na ??l??sku"}
                    date={"20 kwietnia 2018"}
                    menuNames={"SANDRA i MACIEK"}
                    menuTitle={"VILLA MARINA D??BROWA G??RNICZA, ??LUB NAD JEZIOREM"}
                    leadNames={"NATALIA i PIOTR"}
                    leadTitle={"HOTEL MARGERITA, MAGICZNY WYSTR??J SALI WESELNEJ W KRAKOWIE"}
                    leadUrl={"/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie"}
                    leadImage={process.env.staticS3ImagesPath + "hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
