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
                    headTitle={"Sesja ślubna Park Zamkowy Żywiec"}
                    headDescription={"sesja ślubna Park Zamkowy, sesja plenerowa w Żywcu"}
                    headKeywords={"sesja ślubna park zamkowy Żywiec,sesja plenerowa w Żywcu"}
                    headUrl={"https://99foto.pl/kinga-i-sebastian-sesja-slubna-park-zamkowy-zywiec"}
                    entryContentP1={
                        "Złota polska jesień w Parku Zamkowym w Żywcu. Jesień w tym roku nie rozpieszcza i długo musieliśmy czekać na dobrą pogodę i żółte liście. W niedzielę gdy zameldowaliśmy się w Parku Zamkowym w Żywcu cztery inne pary również korzystały z tego pierwszego od niepamiętnych czasów słonecznego dnia, a fotografowie uzupełniali plenerowe zaległości. Park jest bardzo fajny głównie, ze względu na płynące przez niego rzeczki i mostki. Jest to rzeczywiście coś, czego w Krakowie i okolicach nie ma."
                    }
                    entryContentP2={
                        "Żółte liście podświetlone słońcem, dobre humory, czego można chcieć więcej. W drodze powrotnej rozejrzałem się po okolicy zrobiłem mini panoramę Zalewu Żywieckiego i jedno fajne zdjęcie jesieni kilka minut przed zachodem słońca. Pozdrowienia dla Kingi i Sebastiana, facebookowych i instagramowych liderów. Miłego oglądania."
                    }
                    slug={"kinga-i-sebastian-sesja-slubna-park-zamkowy-zywiec"}
                    title={"SESJA ŚLUBNA PARK ZAMKOWY ŻYWIEC - KINGA i SEBASTIAN"}
                    tags={"sesja ślubna park zamkowy Żywiec,sesja plenerowa w Żywcu"}
                    date={"26 października 2016"}
                    menuNames={"KINGA i SEBASTIAN"}
                    menuTitle={"SESJA ŚLUBNA PARK ZAMKOWY ŻYWIEC"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp)"}
                />
            
        );
};

export default BlogPageComponent;
