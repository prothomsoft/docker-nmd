import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0002.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0004.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0006.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0010.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0012.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0017.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0020.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/10/reverse_recruiting_smart_0024.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "reverse_recruiting_smart.webp"}
                    images={images}
                    headTitle={"Fotograf na event firmowy Kraków, Reverse Recruitment Event w SmartRecruiters"}
                    headDescription={
                        "Reverse Recruitment to event skupiający uwagę osób związanych z branżą HR, którego celem było zapoznanie kandydatów z dobrymi praktykami pozwalającymi skutecznie znaleźć pracę."
                    }
                    headKeywords={"Fotograf na event firmowy Kraków, Reverse Recruitment Event w SmartRecruiters"}
                    headUrl={"https://99foto.pl/reverse-recruiting-smartow"}
                    entryContentP1={
                        "Reverse Recruitment to event skupiający uwagę osób związanych z branżą HR, którego celem było zapoznanie kandydatów z dobrymi praktykami pozwalającymi skutecznie znaleźć prace."
                    }
                    entryContentP2={""}
                    slug={"reverse-recruiting-smartow"}
                    title={"FIRMOWE SPOTKANIE SMARTÓW - REVERSE RECRUITMENT"}
                    tags={"Fotograf na event firmowy Kraków, reverse recruitment smart recruiters"}
                    date={"29 października 2019"}
                    menuNames={"SMARTRECRUITERS"}
                    menuTitle={"FIRMOWE SPOTKANIE SMARTÓW - REVERSE RECRUITMENT"}
                    leadNames={"SMARTRECRUITERS"}
                    leadTitle={"FIRMOWE SPOTKANIE SMARTÓW - TURNIEJ PIŁKARZYKÓW"}
                    leadUrl={"/firmowe-spotkanie-smartow"}
                    leadImage={process.env.staticS3ImagesPath + "impreza_smartow.webp"}
                />
            
        );
};

export default BlogPageComponent;
