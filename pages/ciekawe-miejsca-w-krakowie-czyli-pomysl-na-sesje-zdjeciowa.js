import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0002.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0004.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0005.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0009.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0010.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0012.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0013.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0016.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0018.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0020.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/miejsce_na_sesje_zdjeciowa_krakow_park_w_mogilanach_0024.webp", height: 762 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "ciekawe_miejsca_na_plener_w_krakowie.webp"}
                    images={images}
                    headTitle={"Ciekawe miejsca w Krakowie, pomysł na sesję zdjęciową"}
                    headDescription={"Ciekawe miejsca w Krakowie, pomysł na sesję zdjęciową, sesja ślubna plenerowa gdzie zrobić. Odpowiedzi na te pytania znajdziecie zaglądając na bloga. Zapraszam."}
                    headKeywords={"pomysł na sesję zdjęciową, ciekawe miejsca w krakowie, zdjęcia pary młodej w plenerze"}
                    headUrl={"https://99foto.pl/ciekawe-miejsca-w-krakowie-czyli-pomysl-na-sesje-zdjeciowa"}
                    entryContentP1={
                        "Dzień ślubu jest dla wszystkich nowożeńców najważniejszy, a zdjęcia reportażowe przedstawiające emocje, których tego dnia przecież nie brakuje, bardzo często wywołują łzy wzruszenia lub uśmiechy na twarzach oglądających. Gdy obrazki z dnia ślubu na dobre zadomowią się w Waszej pamięci wtedy nadchodzi czas na kolejny etap fotograficznej przygody. Etap równie przyjemny, a na pewno mniej wymagający niż organizacja imprezy w dniu ślubu - sesja plenerowa. Ponieważ sesji zdjęciowych poślubnych nie robi się codziennie, suknie ślubne często trafiają na allegro, a garniaków nie można poszerzać w nieskończoność to warto na przygotowanie się do takiej sesji poświęcić kilkanaście minut i dobrze wybrać ciekawe miejsca na plener ślubny w Krakowie."
                    }
                    entryContentP2={
                        'Pomysły na sesję zdjęciową można zaczerpnąć oglądając wpisy na blogach, moim własnym czy też innych fotografów. Sesja ślubna plenerowa, gdzie zrobić, jakie gadźety zabrać, te pytania warto zadać znajomym, którzy dzień ślubu i sesję w wybranym dniu po ślubie mają już za sobą. Jestem pewnien, że sobie bez problemu z tym zadaniem poradzicie. Tymczasem zapraszam do oglądania sesji ślubnej Asi i Szymona, których akumulatory na maksa naładowane energią podczas tygodniowej poślubnej wyprawy pod tureckie palmy napędzają ten blogowy wpis. Ciekawe miejsce na plener ślubny w Krakowie, które możecie zobaczyć w tym wpisie to <a href="http://www.mogilany.info/inicjatwy/dwor-w-mogilanach" target="_blank" rel="nofollow">Park w Mogilanach</a> i <a href="https://wawel.krakow.pl/" target="_blank" rel="nofollow">Zamek Królewski na Wawelu</a>. Cisza i spokój tego miejsca, starannie wypielęgnowana zieleń w konfrontacji z energią Asi i Szymona to gwarancja dobrych zdjęć. Serdecznie zapraszam do oglądania i zachęcam do lajkowania na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Insta</a>.'
                    }
                    slug={"ciekawe-miejsca-w-krakowie-czyli-pomysl-na-sesje-zdjeciowa"}
                    title={"CIEKAWE MIEJSCA W KRAKOWIE, POMYSŁ NA SESJĘ ZDJĘCIOWĄ - JOANNA i SZYMON"}
                    tags={"pomysł na sesję zdjęciową, ciekawe miejsca w krakowie, zdjęcia pary młodej w plenerze"}
                    date={"19 lipca 2019"}
                    menuNames={"JOANNA i SZYMON"}
                    menuTitle={"CIEKAWE MIEJSCA W KRAKOWIE, POMYSŁ NA SESJĘ ZDJĘCIOWĄ"}
                    leadNames={"PAULINA i KAMIL"}
                    leadTitle={"REPORTAŻ ŚLUBNY SALA WESELNA BABIE LATO GDÓW, CIEPLUTKO"}
                    leadUrl={"/reportaz-slubny-sala-weselna-babie-lato-gdow-cieplutko"}
                    leadImage={process.env.staticS3ImagesPath + "sala_weselna_babie_lato_gdow_1.webp"}
                />
            
        );
};

export default BlogPageComponent;
