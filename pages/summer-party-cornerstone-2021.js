import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0005.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0006.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0008.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0010.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0011.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0013.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0016.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0019.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0022.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0023.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0027.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0029.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0031.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0032.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0033.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0039.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0042.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0044.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0046.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0047.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0050.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0052.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0053.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0055.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0056.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0058.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0063.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0075.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0076.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0078.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0080.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0083.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0084.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0085.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0086.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0088.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0089.webp", height: 570 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0090.webp", height: 683 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0091.webp", height: 1140 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0092.webp", height: 457 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0093.webp", height: 1140 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0094.webp", height: 570 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0095.webp", height: 1140 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/07/summer_party_cornerstone_0096.webp", height: 1140 }
            
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "summer_party_cornerstone_2021_start.webp"}
                    images={images}
                    headTitle={"Fotograf na event firmowy Kraków, Summer Party w Cornerstone"}
                    headDescription={
                        'Summer Party w Cornerstone w Krakowie. Impreza plenerowa w Dolinie Kluczwody. Niewiarygodnie duża ilość atrakcji i przepysznych rzeczy do spróbowania. Konkursy łucznictwa i siatkówki z medalami i nagrodami, pokazy tańca z ogniem i wiele innych atrakji zaplanowanych przez Anię, Asię i Iwentarium. Zapraszam na zdjęcia.'
                    }
                    headKeywords={"Fotograf na event firmowy Kraków, Summer Party w Cornerstone"}
                    headUrl={"https://99foto.pl/summer-party-cornerstone-2021.js"}
                    entryContentP1={
                        'Summer Party w Cornerstone w Krakowie. Impreza plenerowa w Dolinie Kluczwody. Niewiarygodnie duża ilość atrakcji i przepysznych rzeczy do spróbowania. Konkursy łucznictwa i siatkówki z medalami i nagrodami, pokazy tańca z ogniem i wiele innych atrakji zaplanowanych przez Anię, Asię i <a href="https://iwentarium.pl/ target="_blank" rel="nofollow">Iwentarium</a>. Zapraszam na zdjęcia i życzę miłego oglądania.'
                    }
                    entryContentP2={""}
                    slug={"summer-party-cornerstone-2021.js"}
                    title={"CORNERSTONE - SUMMER PARTY"}
                    tags={"Fotograf na event firmowy Kraków, Summer Party w Cornerstone"}
                    date={"9 lipca 2021"}
                    menuNames={"CORNERSTONE - SUMMER PARTY"}
                    menuTitle={"AGROTURYSTYKA i SPA DOLINA KLUCZWODY"}
                    leadNames={"FIRMA SABA SOFTWARE"}
                    leadTitle={"WIGILIA FIRMOWA - HOTEL HOLIDAY INN KRAKÓW"}
                    leadUrl={"/wigilia-firmowa-saba-2019"}
                    leadImage={process.env.staticS3ImagesPath + "wigilia_saba_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
