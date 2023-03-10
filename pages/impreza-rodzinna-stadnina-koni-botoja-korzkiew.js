import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0001.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0023.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0025.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0028.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0033.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0037.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0047.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0059.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0066.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0068.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0071.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0075.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0078.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0080.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0083.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0085.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0094.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0101.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0108.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0110.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0122.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "impreza-rodzinna-stadnina-koni-botoja-korzkiew-start.webp"}
                    images={images}
                    headTitle={"Impreza rodzinna w Stadninie Koni Botoja Korzkiew"}
                    headDescription={
                        "Impreza firmowa w Stadninie Koni Botoja w Korzkwi. ??wietne miejsce na rodzinne spotkanie, grilowanie i jazd?? konn??. Serdecznie zapraszam na reporta?? z ich najwa??niejszego dnia. Mi??ego ogl??dania."
                    }
                    headKeywords={"Impreza rodzinna w Stadninie Koni Botoja Korzkiew"}
                    headUrl={"https://99foto.pl/impreza-rodzinna-stadnina-koni-botoja-korzkiew"}
                    entryContentP1={
                        "S??oneczny pi??tek, w kt??ry mia??em przyjemno???? fotografowa?? imprez?? rodzinn?? w Stadninie Koni Botoja w Korzkwi. Du??o atrakcji dla ca??ej rodziny, animatorzy z milionem przer????nych pomys????w, jazda konna, ??wie??e powietrze zdala od Krakowa, grilowane pyszno??ci i mn??stwo u??miech??w przeszcz????liwych dzieciak??w. Takie rzeczy tylko w Smartach. Mi??ego ogl??dania."
                    }
                    entryContentP2={""}
                    slug={"impreza-rodzinna-stadnina-koni-botoja-korzkiew"}
                    title={"IMPREZA RODZINNA STADNINA KONI BOTOJA KORZKIEW - SMARTRECRUITERS"}
                    tags={"Impreza rodzinna w Stadninie Koni Botoja Korzkiew"}
                    date={"15 czerwca 2018"}
                    menuNames={"SMARTRECRUITERS"}
                    menuTitle={"IMPREZA RODZINNA STADNINA KONI BOTOJA KORZKIEW"}
                    leadNames={"IZABELA i ARKADIUSZ"}
                    leadTitle={"SESJA ??LUBNA JESIENI?? - PA??AC GOETZ??W OKOCIMSKICH"}
                    leadUrl={"/sesja-slubna-jesienia-palac-goetzow-okocimskich"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_slubna_jesienia.webp"}
                />
            
        );
};

export default BlogPageComponent;
