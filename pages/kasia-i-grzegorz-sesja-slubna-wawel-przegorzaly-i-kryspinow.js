import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0002.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0005.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0006.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0008.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0010.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0013.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0014.webp", height: 761 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0017.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0020.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0021.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/08/plener_slubny_krakow_0016.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "kasia_i_grzegorz_sesja_slubna_wawel_przegorzaly_i_kryspinow_start.webp"}
                    images={images}
                    headTitle={"Sesja ??lubna Wawel, Przegorza??y i Kryspin??w"}
                    headDescription={"Mi??e popo??udnie w fajnych miejscach, dobrych humorach i przy ??wietnej pogodzie. Plener ??lubny Kasi i Grzegorza na Wawelu, Przegorza??ach i Kryspinowie."}
                    headKeywords={"sesja ??lubna krak??w,sesja ??lubna przegorza??y"}
                    headUrl={"https://99foto.pl/kasia-i-grzegorz-sesja-slubna-wawel-przegorzaly-i-kryspinow"}
                    entryContentP1={
                        'Kasia i Grzegorz na plener ??lubny wybrali si?? do Krakowa. Jako fotograf ??lubny zaproponowa??em tras?? naszego popo??udniowego spaceru. Tym razem zacz??li??my zdj??cia na Wawelu, gdzie uda??o mi si?? wymy??li?? kilka fajnych nowych kadr??w i jestem z nich bardzo zadowolony. Nast??pnie w drodze na ????k?? z widokiem na Klasztor Kamedu????w zatrzymali??my si?? w Zamku Przegorza??y i zrobili??my zdj??cie panoramy Krakowa z tarasu w <a href="https://www.uziyada.krakow.pl" target="_blank" rel="nofollow">Restauracji u Ziyada</a>. Plener ko??czyli??my w Kryspinowie korzystaj??c z ostatnich promieni zachodz??cego s??o??ca.'
                    }
                    entryContentP2={
                        "Naszej plenerowej wyprawie towarzyszyli Przemek i Agnieszka. Agnieszka dzielnie pomaga??a roz??mieszaj??c Kasi??, natomiast Przemek asystowa?? ??api??c zaj??czki z blendy. My??l??, ??e wszyscy sp??dzili??my mi??e popo??udnie w fajnych miejscach, dobrych humorach i ??wietnej pogodzie. Zapraszam na zdj??cia z tej wyprawy plenerowej i ??ycz?? mi??ego ogl??dania."
                    }
                    slug={"kasia-i-grzegorz-sesja-slubna-wawel-przegorzaly-i-kryspinow"}
                    title={"SESJA ??LUBNA WAWEL, PRZEGORZA??Y i KRYSPIN??W - KASIA i GRZEGORZ"}
                    tags={"sesja ??lubna krak??w,sesja ??lubna przegorza??y"}
                    date={"30 sierpnia 2016"}
                    menuNames={"KASIA i GRZEGORZ"}
                    menuTitle={"SESJA ??LUBNA WAWEL, PRZEGORZA??Y i KRYSPIN??W"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W G??RALSKIM KLIMACIE PRZYSTA?? KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticS3ImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
