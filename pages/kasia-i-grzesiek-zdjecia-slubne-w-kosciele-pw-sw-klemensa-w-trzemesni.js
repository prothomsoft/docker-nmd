import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0004.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0009.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0013.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0017.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0019.webp", height: 1007 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0025.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0030.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0041.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0042.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0044.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0046.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0047.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0050.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0052.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0053.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0056.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0059.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0060.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0064.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0066.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0067.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0069.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0072.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0076.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0086.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0094.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0102.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0108.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0110.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0109.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0112.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0114.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0116.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0118.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0119.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0121.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0125.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0131.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0132.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0133.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0134.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0136.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0137.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0138.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0140.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0139.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0141.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0142.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/fotograf_na_wesele_krakow_0462.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0144.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0145.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0146.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0147.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0149.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0148.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0150.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/reportaz_slubny_trzemesnia_0151.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "kasia_i_grzesiek_zdjecia_slubne_w_kosciele_pw_sw_klemensa_w_trzemesni_start.webp"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Trzeme??nia, reporta?? ??lubny My??lenice"}
                    headDescription={"Bardzo serdecznie zapraszam do odwiedzenia mojego bloga i ogl??dni??cia relacji z pi??knego ??lubu Kasi i Grze??ka. Mi??ego og??dania."}
                    headKeywords={"reporta?? ??lubny krak??w,zdj??cia ??lubne osp trzeme??nia"}
                    headUrl={"https://99foto.pl/kasia-i-grzesiek-zdjecia-slubne-w-kosciele-pw-sw-klemensa-w-trzemesni"}
                    entryContentP1={
                        "Dzisiaj przenosimy si?? w okolice Krakowa, blisko Dobczyc do miejscowo??ci Trzeme??nia. Bohaterami wpisu s?? tym razem Kasia i Grzegorz. Przygotowanie rozpocz??li??my w domu rodzinny Kasi, gdzie zasta??em wspania???? rodzinn?? atmosfer??. W rol?? wiza??ystki wcieli??a si?? siostra Kasi Emilia, wykonuj??c profesjonalny makija?? z tysi??cem pi??knych u??miech??w w pakiecie. Fotograf mia?? jak to czasem m??wi?? mocno z g??rki. Chwil?? p????niej, gdy makija?? by?? ju?? gotowy Kasia ubra??a suknie ??lubn??, bi??uteri??, buty, podwi??zk?? i oficjalnie zg??osi??a swoj?? gotowo???? do nadchodz??cych w ten wyj??tkowy dzie?? wydarze??. Przyjecha?? Tomek i srebrn?? Lagun?? wskaza?? nam drog?? do domu Grze??ka. Na miejscu mi??o by??o znale???? wsp??lny temat w szczeg??lno??ci, ??e by??o to muzykowanie."
                    }
                    entryContentP2={
                        'Kr??tkie b??ogos??awie??stwo i nadszed?? czas by odebra?? Kasi?? i stawi?? si?? w Ko??ciele o um??wionej godzinie. Po drugim tego dnia wzruszaj??cym b??ogos??awie??stwie w drodze do Ko??cio??a <a href="https://parafia-trzemesnia.pl" target="_blank" rel="nofollow">pw. ??w. Klemensa w Trzeme??ni</a> samoch??d m??odych musia?? zatrzymywa?? si?? a?? dwa razy. Za ka??dym razem Kasia i Grzegorz spotykali si?? z ogromn?? serdeczno??ci?? tworz??cych bram?? s??siad??w. Pogoda tego dnia bardzo dopisa??a, a z racji tego, ??e w zasi??gu wzroku znajdowa?? si?? ko??ci???? i sala weselna, da??o si?? odczu?? pe??n?? swobod??. Ko??ci???? zaskoczy?? mnie swoim pi??knym wn??trzem, kt??re dope??ni??o wzruszaj??c?? ceremoni?? ze wspania???? opraw?? muzyczn??. Po zdj??ciu grupowym i ??yczeniach udali??my si?? na sal??, gdzie odby??o si?? wesele. Na miejscu czeka?? ju?? zesp???? muzyczny, kt??ry zapewni?? muzyczn?? opraw?? tego dnia. Pa??stwo M??odzi otworzyli parkiet swoim pierwszym ta??cem. ??wietny klimat, szalona zabawa i naprawd?? przesympatyczna ekipa. Wielkie, wielkie dzi??kuj?? za ten wyj??tkowy dzie??, ciep??e przyj??cie i genialn?? atmosfer??. Mi??ego ogl??dania, a po wi??cej zdj???? zapraszam go??ci weselnych do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"kasia-i-grzesiek-zdjecia-slubne-w-kosciele-pw-sw-klemensa-w-trzemesni"}
                    title={"ZDJ??CIA ??LUBNE W KO??CIELE PW. ??W. KLEMENSA TRZEME??NIA - KASIA i GRZESIEK"}
                    tags={"reporta?? ??lubny krak??w,zdj??cia ??lubne osp trzeme??nia"}
                    date={"24 sierpnia 2016"}
                    menuNames={"KASIA i GRZESIEK"}
                    menuTitle={"ZDJ??CIA ??LUBNE W KO??CIELE PW. ??W. KLEMENSA TRZEME??NIA"}
                    leadNames={"MONIKA i RAFA??"}
                    leadTitle={"ZDJ??CIA ??LUBNE KRAK??W, RESTAURACJA CHOCHO??OWY DW??R"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={process.env.staticS3ImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
