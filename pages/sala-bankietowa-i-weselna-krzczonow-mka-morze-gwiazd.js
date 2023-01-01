import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0003.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0006.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0034.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0012.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0014.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0018.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0035.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0029.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0032.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0038.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0041.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0043.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0046.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0051.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0074.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0076.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0101.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0103.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0123.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0130.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0133.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0141.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0143.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0147.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0149.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/06/sesja_weselna_bankietowa_krzczonow_0150.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sala_bankietowa_i_weselna_krzczonow_mka_morze_gwiazd_start.webp"}
                    images={images}
                    headTitle={"Sala bankietowa Krzczonów, sala weselna Pcim"}
                    headDescription={"Sala bankietowa w Krzczonowie, czyli niebo pełne gwiazd. Reportaż ślubny Magdy i Grześka. Serdecznie zapraszam."}
                    headKeywords={"fotograf ślubny myślenice,sala weselna krzczonów,sala bankietowa pcim"}
                    headUrl={"https://99foto.pl/sala-bankietowa-i-weselna-krzczonow-mka-morze-gwiazd"}
                    entryContentP1={
                        'Tym razem zapraszam do rozsławionego przez brytyjskiego komika Johna Cleese podkrakowskiego Pcimia, gdzie od samego rana do wydarzeń jednego z najważniejszych dni w swoim życiu przygotowywała się Magda. Zaczęliśmy od makijażu w domu Panny Młodej, gdzie <a href="https://www.facebook.com/catchthecolours/" target="_blank" rel="nofollow">Made by me &#8211; Ewa Kobiałka</a> podkreśliła urodę Magdy.  Dużo uśmiechów i świetna atmosfera towarzyszyła nam również podczas ubierania sukni ślubnej, butów, podwiązki i biżuterii. Z pomocą Ani i Agnieszki cała operacja odbyła się bardzo sprawnie. Krótkie błogosławieństwo u Grześka, dłuższe u Magdy i chwilę później wszyscy znaleźliśmy się w <a href="https://www.parafiapcim.pl" target="_blank" rel="nofollow">Kościele św. Mikołaja w Pcimiu</a>. Piękna ceremonia ślubna podczas której Magda i Grzegorz powiedzieli TAK.'
                    }
                    entryContentP2={
                        'Kilka kropel deszczu przeszkodziło nam w życzeniach pod kościołem, więc ogrom uśmiechów, żartów, uścisków spadł na młodych na sali weselnej. Rodzice przywitali młodych chlebem i solą, Grzegorz przeniósł Magde przez próg i zabawa w <a href="https://www.facebook.com/mka.salabankietowa/" target="_blank" rel="nofollow">Domu Weselnym MKA Sala Bankietowa w Krzczonowie</a> uznaliśmy za otwartą. Gorącą atmosferę na parkiecie zapewniał zespół <a href="https://" target="_blank" rel="nofollow">Ja Majka</a>. Dzieciaki świetnie bawiły się pod opieką przemiłej animatorki, natomiast goście weselni zachwycali się nad kolejnymi atrakcjami wieczoru, których nie brakowało. Bardzo dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i wspaniałą atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"sala-bankietowa-i-weselna-krzczonow-mka-morze-gwiazd"}
                    title={"SALA WESELNA KRZCZONÓW MKA - MORZE GWIAZD - MAGDA i GRZEGORZ"}
                    tags={"fotograf ślubny myślenice,sala weselna krzczonów,sala bankietowa pcim"}
                    date={"16 czerwca 2017"}
                    menuNames={"MAGDA i GRZEGORZ"}
                    menuTitle={"SALA WESELNA KRZCZONÓW MKA - MORZE GWIAZD"}
                    leadNames={"NATALIA i TOMASZ"}
                    leadTitle={"SESJA ZDJĘCIOWA KOPIEC KRAKA, PRZEGORZAŁY, KRYSPINÓW"}
                    leadUrl={"/sesja-zdjeciowa-kopiec-kraka-przegorzaly-kryspinow"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_zdjeciowa_kopiec_kraka_przegorzaly_kryspinow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
