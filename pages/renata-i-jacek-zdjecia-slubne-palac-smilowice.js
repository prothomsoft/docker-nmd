import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0001.webp", height: 754 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0004.webp", height: 757 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0020.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0025.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0033.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0035.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0036.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0042.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0043.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0044.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0047.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0049.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0051.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0052.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0053.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0055.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0056.webp", height: 780 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0059.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0061.webp", height: 764 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0062.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0067.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0070.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0075.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0076.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0077.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0078.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0081.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0088.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0093.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0094.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0096.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0099.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0105.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0109.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0113.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0114.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0118.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0121.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0123.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0125.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2015/10/fotograf_slubny_szczurowa_0120.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "renata_i_jacek_zdjecia_slubne_palac_smilowice_start.webp"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Pa??ac ??mi??owice"}
                    headDescription={"Serdecznie zapraszam na mojego bloga do ogl??dania zdj???? ze ??lubu Renaty i Jacka. Zaprosili oni swoich go??ci do Pa??acu ??mi??owice. Mi??ego ogl??dania."}
                    headKeywords={"fotograf na ??lub szczurowa,zdj??cia ??lubne pa??ac ??mi??owice"}
                    headUrl={"https://99foto.pl/renata-i-jacek-zdjecia-slubne-palac-smilowice"}
                    entryContentP1={
                        "W drugi pa??dziernikowy weekend o godzinie 9 rano spotkali??my si?? z Renat?? w jednym z pi??ciu zak??ad??w fryzjerskich w Szczurowej. W ramach badania gruntu troch?? wcze??niej zagl??dn????em do ko??cio??a, i ju?? od rana odbywa??o si?? tam solidne sprz??tanie, po????czone jak s??dz?? z nadchodz??cymi tego dnia wydarzeniami. Uk??adanie fryzury zaj????o troch?? ponad godzink??. Nast??pnie kilka krok??w dalej odwiedzili??my studio makija??u, kwiaciarnie, po czym pojechali??my wita?? pierwszych go??ci i kontynuowa?? przygotowania do domu rodzinnego Renaty."
                    }
                    entryContentP2={
                        'Ubieranie sukni ??lubnej odby??o si?? w rodzinnej atmosferze. Po b??ogos??awie??stwie udali??my si?? do Ko??cio??a Parafialnego w Szczurowej, gdzie m??odzi powiedzieli sobie TAK. Nast??pnie wisienka na torcie czyli przyj??cie ??lubne w <a href="https://palacsmilowice.com/" target="_blank" rel="nofollow">Pa??acu ??mi??owice</a>. Kr??tki plener w pa??acowym ogrodzie, zdj??cia grupowe i pi??kny pierwszy taniec. Zabawa nie mia??a ko??ca. Go??cie zdecydowanie dopisali i skutecznie dbali o odpowiednie wype??nienie parkietu. Serdeczne pozdrowienia dla go??ci, ca??ej weselnej ekipy oraz oczywi??cie dla Renaty i Jacka. Po wi??cej zdj???? zapraszam do strefy klienta.'
                    }
                    slug={"renata-i-jacek-zdjecia-slubne-palac-smilowice"}
                    title={"ZDJ??CIA ??LUBNE PA??AC ??MI??OWICE - RENATA i JACEK"}
                    tags={"fotograf na ??lub szczurowa,zdj??cia ??lubne pa??ac ??mi??owice"}
                    date={"18 pa??dziernika 2015"}
                    menuNames={"RENATA i JACEK"}
                    menuTitle={"ZDJ??CIA ??LUBNE PA??AC ??MI??OWICE"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"SESJA ZDJ??CIOWA DW??R TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_zdjeciowa_dwor_tomaszowice_krakow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
