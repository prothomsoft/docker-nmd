import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0002.webp", height: 763 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0003.webp", height: 527 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0005.webp", height: 383 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0007.webp", height: 805 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0009.webp", height: 383 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0014.webp", height: 527 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0015.webp", height: 383 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0016.webp", height: 763 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0018.webp", height: 383 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0024.webp", height: 1278 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0025.webp", height: 1277 },
            { imageSrc: "/static/blog/2020/03/smart_reverse_recruitment_event_0026.webp", height: 1277 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "smart_reverse_recruitment_2.webp"}
                    images={images}
                    headTitle={"Fotograf na event firmowy Kraków, Reverse Recruitment w SmartRecruiters"}
                    headDescription={
                        "Reverse Recruitment to event skupiający uwagę osób związanych z branżą HR, którego celem było zapoznanie kandydatów z dobrymi praktykami pozwalającymi skutecznie znaleźć pracę."
                    }
                    headKeywords={"Fotograf na event firmowy Kraków, Reverse Recruitment w SmartRecruiters"}
                    headUrl={"https://99foto.pl/smart-reverse-recruitment"}
                    entryContentP1={
                        "Reverse Recruitment po raz drugi. Event skupiający uwagę osób związanych z branżą HR, którego celem było zapoznanie kandydatów z dobrymi praktykami pozwalającymi skutecznie znaleźć prace."
                    }
                    entryContentP2={""}
                    slug={"smart-reverse-recruitment"}
                    title={"FIRMA SMARTRECRUITERS - WIGILIA FIRMOWA"}
                    tags={"Fotograf na event firmowy Kraków, Reverse Recruitment w SmartRecruiters"}
                    date={"27 marca 2019"}
                    menuNames={"FIRMA SMARTRECRUITERS"}
                    menuTitle={"REVERSE RECRUITMENT"}
                    leadNames={"SMARTRECRUITERS"}
                    leadTitle={"FIRMA SMARTRECRUITERS - WIGILIA FIRMOWA"}
                    leadUrl={"/wigilia-firmowa-smartrecruiters-2019"}
                    leadImage={process.env.staticImagesPath + "wigilia_smart_2019.webp"}
                />
            
        );
};

export default BlogPageComponent;
