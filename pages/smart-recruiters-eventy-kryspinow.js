import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0003.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0005.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0008.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0010.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0011.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0013.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0015.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0016.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0017.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0018.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0021.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0023.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0025.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0027.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0029.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0030.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0031.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0033.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0035.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0036.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0037.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0039.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0042.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0043.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0044.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0046.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0047.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0048.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0050.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0052.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0054.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0056.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2022/06/smart_recruiters_2022_0057.webp", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "smart_recruiters_start_2022.webp"}
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
                    leadImage={process.env.staticS3ImagesPath + "smart_reverse_recruitment_2.webp"}
                />
            
        );
};

export default BlogPageComponent;
