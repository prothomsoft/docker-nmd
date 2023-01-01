import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0001.webp", height: 754 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0003.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0002.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0004.webp", height: 757 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0011.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0013.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0015.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0018.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0020.webp", height: 527 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0128.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0024.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0025.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0031.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0032.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0033.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0035.webp", height: 382 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0036.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0038.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0042.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0043.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0044.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0047.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0049.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0050.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0051.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0052.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0053.webp", height: 383 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0055.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0056.webp", height: 780 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0057.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0059.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0061.webp", height: 764 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0062.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0067.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0070.webp", height: 383 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0073.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0075.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0076.webp", height: 383 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0077.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0078.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0079.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0080.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0081.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0083.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0086.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0087.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0088.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0089.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0091.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0093.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0094.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0096.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0097.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0099.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0100.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0101.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0102.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0103.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0104.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0105.webp", height: 850 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0108.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0109.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0112.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0113.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0114.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0115.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0116.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0117.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0118.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0119.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0121.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0122.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0123.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0124.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0125.webp", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0126.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0127.webp", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0120.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "renata_i_jacek_zdjecia_slubne_palac_smilowice_start.webp"}
                    images={images}
                    headTitle={"Zdjęcia ślubne Pałac Śmiłowice"}
                    headDescription={"Serdecznie zapraszam na mojego bloga do oglądania zdjęć ze ślubu Renaty i Jacka. Zaprosili oni swoich gości do Pałacu Śmiłowice. Miłego oglądania."}
                    headKeywords={"fotograf na ślub szczurowa,zdjęcia ślubne pałac Śmiłowice"}
                    headUrl={"https://99foto.pl/renata-i-jacek-zdjecia-slubne-palac-smilowice"}
                    entryContentP1={
                        "W drugi październikowy weekend o godzinie 9 rano spotkaliśmy się z Renatą w jednym z pięciu zakładów fryzjerskich w Szczurowej. W ramach badania gruntu trochę wcześniej zaglądnąłem do kościoła, i już od rana odbywało się tam solidne sprzątanie, połączone jak sądzę z nadchodzącymi tego dnia wydarzeniami. Układanie fryzury zajęło trochę ponad godzinkę. Następnie kilka kroków dalej odwiedziliśmy studio makijażu, kwiaciarnie, po czym pojechaliśmy witać pierwszych gości i kontynuować przygotowania do domu rodzinnego Renaty."
                    }
                    entryContentP2={
                        'Ubieranie sukni ślubnej odbyło się w rodzinnej atmosferze. Po błogosławieństwie udaliśmy się do Kościoła Parafialnego w Szczurowej, gdzie młodzi powiedzieli sobie TAK. Następnie wisienka na torcie czyli przyjęcie ślubne w <a href="https://palacsmilowice.com/" target="_blank" rel="nofollow">Pałacu Śmiłowice</a>. Krótki plener w pałacowym ogrodzie, zdjęcia grupowe i piękny pierwszy taniec. Zabawa nie miała końca. Goście zdecydowanie dopisali i skutecznie dbali o odpowiednie wypełnienie parkietu. Serdeczne pozdrowienia dla gości, całej weselnej ekipy oraz oczywiście dla Renaty i Jacka. Po więcej zdjęć zapraszam do strefy klienta.'
                    }
                    slug={"renata-i-jacek-zdjecia-slubne-palac-smilowice"}
                    title={"ZDJĘCIA ŚLUBNE PAŁAC ŚMIŁOWICE - RENATA i JACEK"}
                    tags={"fotograf na ślub szczurowa,zdjęcia ślubne pałac Śmiłowice"}
                    date={"18 października 2015"}
                    menuNames={"RENATA i JACEK"}
                    menuTitle={"ZDJĘCIA ŚLUBNE PAŁAC ŚMIŁOWICE"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    leadImage={process.env.staticImagesPath + "sesja_zdjeciowa_dwor_tomaszowice_krakow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
