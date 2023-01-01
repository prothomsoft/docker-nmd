import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0001.webp", height: 768 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0002.webp", height: 851 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0003.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0004.webp", height: 526 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0005.webp", height: 527 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0007.webp", height: 527 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0008.webp", height: 805 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0010.webp", height: 382 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0011.webp", height: 526 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0012.webp", height: 527 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0014.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0016.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0017.webp", height: 382 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0018.webp", height: 527 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0020.webp", height: 382 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0021.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0022.webp", height: 382 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0024.webp", height: 383 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0025.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0026.webp", height: 382 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0027.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0029.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0031.webp", height: 383 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0033.webp", height: 383 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0035.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0036.webp", height: 383 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0038.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0039.webp", height: 382 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0041.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0042.webp", height: 383 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0044.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0045.webp", height: 382 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0047.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0046.webp", height: 382 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0049.webp", height: 762 },
            { imageSrc: "/static/blog/2019/09/saba_rebrand_0050.webp", height: 382 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "rebranding_saba_1.webp"}
                    images={images}
                    headTitle={"Fotograf impreza firmowa Kraków, rebranding Saba SOFTWARE WORK LIKE YOU"}
                    headDescription={
                        "Event firmowy w Krakowie. Rebranding firmy Saba. Świetnie przygotowana impreza firmowa i wiele wspaniałych atrakcji przygotowanych dla pracowników. Serdecznie zapraszam na zdjęcia."
                    }
                    headKeywords={"Fotograf impreza firmowa Kraków, rebranding SABA SOFTWARE WORK LIKE YOU"}
                    headUrl={"https://99foto.pl/rebranding-saba"}
                    entryContentP1={
                        "Świetnie przygotowana impreza firmowa i wiele wspaniałych atrakcji przygotowanych dla pracowników. Kilka zdjęć z imprezy firmowej SABA. Zapraszam i życzę miłego oglądania."
                    }
                    entryContentP2={""}
                    slug={"rebranding-saba"}
                    title={"FIRMOWE SPOTKANIE FIRMY SABA SOFTWARE - REBRANDING WORK LIKE YOU"}
                    tags={"Fotograf impreza firmowa Kraków, rebranding SABA SOFTWARE WORK LIKE YOU"}
                    date={"26 września 2019"}
                    menuNames={"FIRMA SABA SOFTWARE"}
                    menuTitle={"REBRANDING WORK LIKE YOU"}
                    leadNames={"FIRMA SMARTRECRUITERS"}
                    leadTitle={"WIGILIA FIRMOWA"}
                    leadUrl={"/wigilia-firmowa-smartrecruiters-2019"}
                    leadImage={process.env.staticImagesPath + "wigilia_smart_2019.webp"}
                />
            
        );
};

export default BlogPageComponent;
