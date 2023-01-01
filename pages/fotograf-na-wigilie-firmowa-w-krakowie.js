import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0001.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0005.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0015.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0002.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0003.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0024.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0025.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0026.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0004.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0034.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0037.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0040.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0042.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0045.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0048.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0050.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0055.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0056.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0059.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0068.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0076.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0079.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0080.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0083.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0090.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0093.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0021.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "wigilia_smartrecruiters.webp"}
                    images={images}
                    headTitle={"Fotograf na wigilię firmową w Krakowie"}
                    headDescription={
                        "Wigilia firmowa w Krakowie. Rodzinny klimat, niezliczona ilość atrakcji i wyróżnienia z okazji pięciolecia działaności firmy SmartRecruiters w Polsce. Serdecznie zapraszam."
                    }
                    headKeywords={"Fotograf na wilgilię firmową w Krakowie, wigilia firmowa"}
                    headUrl={"https://99foto.pl/fotograf-na-wigilie-firmowa-w-krakowie"}
                    entryContentP1={
                        "Wigilia firmowa w Krakowie i pięciolecie działalności firmy SmartRecruiters w Polsce. Rodzinne spotkanie wigilijne. To już drugi raz jak miałem przyjemność zatrzymywać rodzinne chwile podczas imprezy firmowej. Jak zwykle dużo atrakcji dla najmłodszych i zasłużone wyróżnienia dla najstarszych. Zapraszam na zdjęcia i życzę miłego oglądania."
                    }
                    entryContentP2={""}
                    slug={"fotograf-na-wigilie-firmowa-w-krakowie"}
                    title={"WIGILA FIRMOWA i FOTOGRAF NA WIGILIĘ FIRMOWĄ W KRAKOWIE"}
                    tags={"Fotograf na wigilię firmową w Krakowie, wigilia firmowa"}
                    date={"14 grudnia 2018"}
                    menuNames={"FIRMA SMARTRECRUITERS"}
                    menuTitle={"WIGILA FIRMOWA i FOTOGRAF NA WIGILIĘ FIRMOWĄ W KRAKOWIE"}
                    leadNames={"FIRMA SMARTRECRUITERS"}
                    leadTitle={"IMPREZA RODZINNA STADNINA KONI BOTOJA KORZKIEW"}
                    leadUrl={"/impreza-rodzinna-stadnina-koni-botoja-korzkiew"}
                    leadImage={process.env.staticS3ImagesPath + "impreza-rodzinna-stadnina-koni-botoja-korzkiew-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
