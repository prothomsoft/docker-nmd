import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0001.webp", height: 762 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0002.webp", height: 851 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0005.webp", height: 851 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0012.webp", height: 763 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0006.webp", height: 851 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0007.webp", height: 763 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0008.webp", height: 851 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0010.webp", height: 851 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0011.webp", height: 762 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0013.webp", height: 851 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0014.webp", height: 761 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0017.webp", height: 852 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0018.webp", height: 763 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0020.webp", height: 762 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0021.webp", height: 383 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0024.webp", height: 762 },
            { imageSrc: "/static/blog/2016/08/plener_slubny_krakow_0016.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "kasia_i_grzegorz_sesja_slubna_wawel_przegorzaly_i_kryspinow_start.webp"}
                    images={images}
                    headTitle={"Sesja ślubna Wawel, Przegorzały i Kryspinów"}
                    headDescription={"Miłe popołudnie w fajnych miejscach, dobrych humorach i przy świetnej pogodzie. Plener ślubny Kasi i Grzegorza na Wawelu, Przegorzałach i Kryspinowie."}
                    headKeywords={"sesja ślubna kraków,sesja ślubna przegorzały"}
                    headUrl={"https://99foto.pl/kasia-i-grzegorz-sesja-slubna-wawel-przegorzaly-i-kryspinow"}
                    entryContentP1={
                        'Kasia i Grzegorz na plener ślubny wybrali się do Krakowa. Jako fotograf ślubny zaproponowałem trasę naszego popołudniowego spaceru. Tym razem zaczęliśmy zdjęcia na Wawelu, gdzie udało mi się wymyślić kilka fajnych nowych kadrów i jestem z nich bardzo zadowolony. Następnie w drodze na łąkę z widokiem na Klasztor Kamedułów zatrzymaliśmy się w Zamku Przegorzały i zrobiliśmy zdjęcie panoramy Krakowa z tarasu w <a href="https://www.uziyada.krakow.pl" target="_blank" rel="nofollow">Restauracji u Ziyada</a>. Plener kończyliśmy w Kryspinowie korzystając z ostatnich promieni zachodzącego słońca.'
                    }
                    entryContentP2={
                        "Naszej plenerowej wyprawie towarzyszyli Przemek i Agnieszka. Agnieszka dzielnie pomagała rozśmieszając Kasię, natomiast Przemek asystował łapiąc zajączki z blendy. Myślę, że wszyscy spędziliśmy miłe popołudnie w fajnych miejscach, dobrych humorach i świetnej pogodzie. Zapraszam na zdjęcia z tej wyprawy plenerowej i życzę miłego oglądania."
                    }
                    slug={"kasia-i-grzegorz-sesja-slubna-wawel-przegorzaly-i-kryspinow"}
                    title={"SESJA ŚLUBNA WAWEL, PRZEGORZAŁY i KRYSPINÓW - KASIA i GRZEGORZ"}
                    tags={"sesja ślubna kraków,sesja ślubna przegorzały"}
                    date={"30 sierpnia 2016"}
                    menuNames={"KASIA i GRZEGORZ"}
                    menuTitle={"SESJA ŚLUBNA WAWEL, PRZEGORZAŁY i KRYSPINÓW"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
