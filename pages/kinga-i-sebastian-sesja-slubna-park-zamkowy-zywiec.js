import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0001.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0003.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0004.webp", height: 327 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0006.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0008.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0010.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0012.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0013.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0015.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0017.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0020.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0021.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0022.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/plener_slubny_park_zamkowy_zywiec_0019.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "kinga_i_sebastian_sesja_slubna_park_zamkowy_zywiec_start.webp"}
                    images={images}
                    headTitle={"Sesja ??lubna Park Zamkowy ??ywiec"}
                    headDescription={"sesja ??lubna Park Zamkowy, sesja plenerowa w ??ywcu"}
                    headKeywords={"sesja ??lubna park zamkowy ??ywiec,sesja plenerowa w ??ywcu"}
                    headUrl={"https://99foto.pl/kinga-i-sebastian-sesja-slubna-park-zamkowy-zywiec"}
                    entryContentP1={
                        "Z??ota polska jesie?? w Parku Zamkowym w ??ywcu. Jesie?? w tym roku nie rozpieszcza i d??ugo musieli??my czeka?? na dobr?? pogod?? i ??????te li??cie. W niedziel?? gdy zameldowali??my si?? w Parku Zamkowym w ??ywcu cztery inne pary r??wnie?? korzysta??y z tego pierwszego od niepami??tnych czas??w s??onecznego dnia, a fotografowie uzupe??niali plenerowe zaleg??o??ci. Park jest bardzo fajny g????wnie, ze wzgl??du na p??yn??ce przez niego rzeczki i mostki. Jest to rzeczywi??cie co??, czego w Krakowie i okolicach nie ma."
                    }
                    entryContentP2={
                        "??????te li??cie pod??wietlone s??o??cem, dobre humory, czego mo??na chcie?? wi??cej. W drodze powrotnej rozejrza??em si?? po okolicy zrobi??em mini panoram?? Zalewu ??ywieckiego i jedno fajne zdj??cie jesieni kilka minut przed zachodem s??o??ca. Pozdrowienia dla Kingi i Sebastiana, facebookowych i instagramowych lider??w. Mi??ego ogl??dania."
                    }
                    slug={"kinga-i-sebastian-sesja-slubna-park-zamkowy-zywiec"}
                    title={"SESJA ??LUBNA PARK ZAMKOWY ??YWIEC - KINGA i SEBASTIAN"}
                    tags={"sesja ??lubna park zamkowy ??ywiec,sesja plenerowa w ??ywcu"}
                    date={"26 pa??dziernika 2016"}
                    menuNames={"KINGA i SEBASTIAN"}
                    menuTitle={"SESJA ??LUBNA PARK ZAMKOWY ??YWIEC"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp)"}
                />
            
        );
};

export default BlogPageComponent;
