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
                    headTitle={"Sala bankietowa Krzczon??w, sala weselna Pcim"}
                    headDescription={"Sala bankietowa w Krzczonowie, czyli niebo pe??ne gwiazd. Reporta?? ??lubny Magdy i Grze??ka. Serdecznie zapraszam."}
                    headKeywords={"fotograf ??lubny my??lenice,sala weselna krzczon??w,sala bankietowa pcim"}
                    headUrl={"https://99foto.pl/sala-bankietowa-i-weselna-krzczonow-mka-morze-gwiazd"}
                    entryContentP1={
                        'Tym razem zapraszam do rozs??awionego przez brytyjskiego komika Johna Cleese podkrakowskiego Pcimia, gdzie od samego rana do wydarze?? jednego z najwa??niejszych dni w swoim ??yciu przygotowywa??a si?? Magda. Zacz??li??my od makija??u w domu Panny M??odej, gdzie <a href="https://www.facebook.com/catchthecolours/" target="_blank" rel="nofollow">Made by me &#8211; Ewa Kobia??ka</a> podkre??li??a urod?? Magdy.  Du??o u??miech??w i ??wietna atmosfera towarzyszy??a nam r??wnie?? podczas ubierania sukni ??lubnej, but??w, podwi??zki i bi??uterii. Z pomoc?? Ani i Agnieszki ca??a operacja odby??a si?? bardzo sprawnie. Kr??tkie b??ogos??awie??stwo u Grze??ka, d??u??sze u Magdy i chwil?? p????niej wszyscy znale??li??my si?? w <a href="https://www.parafiapcim.pl" target="_blank" rel="nofollow">Ko??ciele ??w. Miko??aja w Pcimiu</a>. Pi??kna ceremonia ??lubna podczas kt??rej Magda i Grzegorz powiedzieli TAK.'
                    }
                    entryContentP2={
                        'Kilka kropel deszczu przeszkodzi??o nam w ??yczeniach pod ko??cio??em, wi??c ogrom u??miech??w, ??art??w, u??cisk??w spad?? na m??odych na sali weselnej. Rodzice przywitali m??odych chlebem i sol??, Grzegorz przeni??s?? Magde przez pr??g i zabawa w <a href="https://www.facebook.com/mka.salabankietowa/" target="_blank" rel="nofollow">Domu Weselnym MKA Sala Bankietowa w Krzczonowie</a> uznali??my za otwart??. Gor??c?? atmosfer?? na parkiecie zapewnia?? zesp???? <a href="https://" target="_blank" rel="nofollow">Ja Majka</a>. Dzieciaki ??wietnie bawi??y si?? pod opiek?? przemi??ej animatorki, natomiast go??cie weselni zachwycali si?? nad kolejnymi atrakcjami wieczoru, kt??rych nie brakowa??o. Bardzo dzi??kuj?? za ten wyj??tkowy dzie??, ciep??e przyj??cie i wspania???? atmosfer??. Mi??ego ogl??dania, a po wi??cej zdj???? zapraszam go??ci weselnych do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"sala-bankietowa-i-weselna-krzczonow-mka-morze-gwiazd"}
                    title={"SALA WESELNA KRZCZON??W MKA - MORZE GWIAZD - MAGDA i GRZEGORZ"}
                    tags={"fotograf ??lubny my??lenice,sala weselna krzczon??w,sala bankietowa pcim"}
                    date={"16 czerwca 2017"}
                    menuNames={"MAGDA i GRZEGORZ"}
                    menuTitle={"SALA WESELNA KRZCZON??W MKA - MORZE GWIAZD"}
                    leadNames={"NATALIA i TOMASZ"}
                    leadTitle={"SESJA ZDJ??CIOWA KOPIEC KRAKA, PRZEGORZA??Y, KRYSPIN??W"}
                    leadUrl={"/sesja-zdjeciowa-kopiec-kraka-przegorzaly-kryspinow"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_zdjeciowa_kopiec_kraka_przegorzaly_kryspinow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
