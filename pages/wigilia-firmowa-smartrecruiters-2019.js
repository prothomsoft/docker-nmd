import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0002.webp", height: 527 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0003.webp", height: 527 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0004.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0005.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0007.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0008.webp", height: 527 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0010.webp", height: 805 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0012.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0014.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0016.webp", height: 382 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0018.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0020.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0022.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0024.webp", height: 382 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0026.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0027.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0030.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0032.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0034.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0036.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0038.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0039.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0040.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0042.webp", height: 527 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0044.webp", height: 382 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0046.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0047.webp", height: 527 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0048.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0050.webp", height: 527 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0052.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0054.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0056.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0057.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0058.webp", height: 382 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0060.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0062.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0064.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0065.webp", height: 762 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0066.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0067.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0068.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0072.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0073.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0075.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0077.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0079.webp", height: 382 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0080.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0081.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0083.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0085.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0087.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0088.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0089.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0069.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0091.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0092.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0093.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0094.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0096.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0097.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0061.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0099.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0100.webp", height: 762 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0101.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0102.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0103.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0104.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0105.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0070.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0106.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0107.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0108.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0109.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0110.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0051.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0111.webp", height: 763 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0055.webp", height: 383 },
            { imageSrc: "/static/blog/2019/12/wigilia_smart_2019_0112.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "wigilia_smart_2019.webp"}
                    images={images}
                    headTitle={"Fotograf na event firmowy Kraków, Wigilia Firmowa w SmartRecruiters"}
                    headDescription={
                        "Wigilia firmowa w Krakowie. Firmowe spotkanie rodzinne w SmartRecruiters. Prezenty od Świętego Mikołaja, czekoladowa fontanna, więcej niż dwanaście potraw wigilijnych i konkursy na najbardziej cool świąteczny sweter."
                    }
                    headKeywords={"Fotograf na event firmowy Kraków, Wigilia Firmowa w SmartRecruiters"}
                    headUrl={"https://99foto.pl/wigilia-firmowa-smartrecruiters-2019"}
                    entryContentP1={
                        "Wigilia firmowa w Krakowie. Firmowe spotkanie rodzinne w SmartRecruiters. Prezenty od Świętego Mikołaja, czekoladowa fontanna, więcej niż dwanaście potraw wigilijnych i konkursy na najbardziej cool świąteczny sweter. Serdecznie zapraszam na zdjęcia i życzę WESOŁYCH ŚWIĄT i miłego oglądania."
                    }
                    entryContentP2={""}
                    slug={"wigilia-firmowa-smartrecruiters-2019"}
                    title={"FIRMA SMARTRECRUITERS - WIGILIA FIRMOWA"}
                    tags={"Fotograf na event firmowy Kraków, Wigilia Firmowa w SmartRecruiters"}
                    date={"13 grudnia 2019"}
                    menuNames={"FIRMA SMARTRECRUITERS"}
                    menuTitle={"WIGILIA FIRMOWA"}
                    leadNames={"SMARTRECRUITERS"}
                    leadTitle={"FIRMOWE SPOTKANIE SMARTÓW - REVERSE RECRUITMENT"}
                    leadUrl={"/reverse-recruiting-smartow"}
                    leadImage={process.env.staticImagesPath + "reverse_recruiting_smart.webp"}
                />
            
        );
};

export default BlogPageComponent;
