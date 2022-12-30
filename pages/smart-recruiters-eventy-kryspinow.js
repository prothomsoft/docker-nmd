import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0003.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0005.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0008.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0010.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0011.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0013.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0015.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0016.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0017.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0018.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0019.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0021.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0023.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0025.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0027.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0029.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0030.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0031.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0033.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0035.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0036.jpg", height: 805 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0037.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0039.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0042.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0043.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0044.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0046.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0047.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0048.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0050.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0052.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0054.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0056.jpg", height: 383 },
            { imageSrc: "/static/blog/2022/06/smart_recruiters_2022_0057.jpg", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "smart_recruiters_start_2022.jpg"}
                    images={images}
                    headTitle={"Fotograf na event firmowy Kraków, SmartRecruiters Eventy Kryspinów"}
                    headDescription={
                        "Integracja podczas plażowania w Kryspinowie. Nowa część zespołu poznaje się lepiej z seniorami nie tylko przy jabłkach, ale też przy grilowanych kiełbaskach i szaszłykach, zabawach animowanych, meczu siatkówki, fotobudce i dobrej muzyce DJ-ja. Zapraszam na kilka zdjęć i do zobaczenia na kolejnej imprezie."
                    }
                    headKeywords={"Fotograf na event firmowy Kraków, SmartRecruiters Eventy Kryspinów"}
                    headUrl={"https://99foto.pl/smart-recruiters-eventy-kryspinow"}
                    entryContentP1={
                        "Integracja podczas plażowania w Kryspinowie. Nowa część zespołu poznaje się lepiej z seniorami nie tylko przy jabłkach, ale też przy grilowanych kiełbaskach i szaszłykach, zabawach animowanych, meczu siatkówki, fotobudce i dobrej muzyce DJ-ja. Zapraszam na kilka zdjęć i do zobaczenia na kolejnej imprezie."
                    }
                    entryContentP2={""}
                    slug={"smart-recruiters-eventy-kryspinow"}
                    title={"FIRMA SMARTRECRUITERS - PLAŻOWA INTEGRACJA - EVENTY KRYSPINÓW"}
                    tags={"Fotograf na event firmowy Kraków, Reverse Recruitment w SmartRecruiters"}
                    date={"12 czerwca 2022"}
                    menuNames={"FIRMA SMARTRECRUITERS"}
                    menuTitle={"PLAŻOWA INTEGRACJA - EVENTY KRYSPINÓW"}
                    leadNames={"SMARTRECRUITERS"}
                    leadTitle={"FIRMA SMARTRECRUITERS - REVERSE RECRUITMENT"}
                    leadUrl={"/smart-reverse-recruitment"}
                    leadImage={process.env.staticImagesPath + "smart_reverse_recruitment_2.jpg"}
                />
            
        );
};

export default BlogPageComponent;
