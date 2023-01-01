import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0003.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0006.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0008.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0013.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0014.webp", height: 804 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0016.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0018.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0020.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0023.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/plener_slubny_krakow_0025.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "gosia_i_tomek_sesja_slubna_dolina_bolechowicka_i_kryspinow_start.webp"}
                    images={images}
                    headTitle={"Sesja ślubna Dolina Bolechowicka i Kryspinów"}
                    headDescription={"Serdecznie zapraszam do Doliny Bolechowickiej i Kryspinowa. Gdyby ktoś poszukiwał miejsc na weekendowy spacer to polecam zajrzeć. Miłego oglądania."}
                    headKeywords={"sesja ślubna kraków,plener ślubny kryspinów"}
                    headUrl={"https://99foto.pl/gosia-i-tomek-sesja-slubna-dolina-bolechowicka-i-kryspinow"}
                    entryContentP1={
                        "Wiele młodych par myśli, że zrobienie fajnych zdjęć do sesji ślubnej wymaga wyjazdu z Krakowa i okolic, pozostawienia za sobą mięc oklepanych i nowe poszukiwania. Mam nadzieję, że po raz kolejny razem z Gosią i Tomkiem udowodnimy, że to nie prawda. Gosia mieszka w Bolechowicach i doskonale zna okolicę, Dolina Bolechowicka to też wspomnienia, chociażby długie treningi pierwszego tańca z Tomkiem, dlatego też zdecydowaliśmy się rozpocząć zdjęcia w tym miejscu. W Dolinie Bolechowickiej doszliśmy do wodospadu, co w sukni ślubnej było dość trudne."
                    }
                    entryContentP2={
                        "Następnie ponieważ do zachodu słońca w Kryspinowie czasu było jeszcze trochę wybraliśmy się na punkt widokowy w Karniowicach. Widok na panoramę Krakowa i chylące się już ku zachodowi słońce, sprzyjało zdjęciom. Ostanim punktem pleneru był Kryspinów, który zaskoczył mnie nowym pomostem. Gosia pomogła grającym w siatkówkę zaserwować, poprzytulała się do Tomka na piasku i w promieniach zachądzącego słońca. Czas szybko nam minął, bo wszystko co dobre szybko się kończy. Miłego oglądania."
                    }
                    slug={"gosia-i-tomek-sesja-slubna-dolina-bolechowicka-i-kryspinow"}
                    title={"SESJA ŚLUBNA DOLINA BOLECHOWICKA i KRYSPINÓW - GOSIA i TOMEK"}
                    tags={"sesja ślubna kraków,plener ślubny kryspinów"}
                    date={"5 lipca 2016"}
                    menuNames={"GOSIA i TOMEK"}
                    menuTitle={"SESJA ŚLUBNA DOLINA BOLECHOWICKA i KRYSPINÓW"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticS3ImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
