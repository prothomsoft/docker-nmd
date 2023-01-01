import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0001.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0003.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0005.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0010.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0011.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0013.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0053.webp", height: 644 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0016.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0017.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0022.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0024.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0025.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0026.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0030.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0033.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0035.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0036.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0037.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0039.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0041.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0044.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0047.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0045.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/12/wigilia_saba_2019_0043.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "wigilia_saba_start.webp"}
                    images={images}
                    headTitle={"Fotograf na event firmowy Kraków, Wigilia Firmowa w Saba Software"}
                    headDescription={
                        "Wigilia firmowa w Krakowie. Firmowe spotkanie w Saba Software. Nowojorski klimat, dress code zza oceanu, emocje w kasynie za stołami black jacka i ruletki, saksofonowe popisy i YMCA na parkiecie, konkursy i oczywiście nagrody. Zapraszam na zdjęcia."
                    }
                    headKeywords={"Fotograf na event firmowy Kraków, Wigilia Firmowa w Saba Software"}
                    headUrl={"https://99foto.pl/wigilia-firmowa-saba-2019"}
                    entryContentP1={
                        "Wigilia firmowa w Krakowie. Firmowe spotkanie w Saba Software. Nowojorski klimat, dress code zza oceanu, emocje w kasynie za stołami black jacka i ruletki, saksofonowe popisy i YMCA na parkiecie, konkursy i oczywiście nagrody. Serdecznie zapraszam na zdjęcia, życzę WESOŁYCH ŚWIĄT i miłego oglądania."
                    }
                    entryContentP2={""}
                    slug={"wigilia-firmowa-saba-2019"}
                    title={"FIRMA SABA SOFTWARE - WIGILIA FIRMOWA"}
                    tags={"Fotograf na event firmowy Kraków, Wigilia Firmowa w Saba Software"}
                    date={"19 grudnia 2019"}
                    menuNames={"FIRMA SABA SOFTWARE"}
                    menuTitle={"WIGILIA FIRMOWA - HOTEL HOLIDAY INN KRAKÓW"}
                    leadNames={"FIRMOWE SPOTKANIE FIRMY SABA SOFTWARE"}
                    leadTitle={"REBRANDING WORK LIKE YOU"}
                    leadUrl={"/rebranding-saba"}
                    leadImage={process.env.staticS3ImagesPath + "rebranding_saba_1.webp"}
                />
            
        );
};

export default BlogPageComponent;
