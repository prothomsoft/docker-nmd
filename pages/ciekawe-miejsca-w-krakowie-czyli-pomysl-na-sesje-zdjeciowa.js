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
                    headTitle={"Ciekawe miejsca w Krakowie, pomys?? na sesj?? zdj??ciow??"}
                    headDescription={"Ciekawe miejsca w Krakowie, pomys?? na sesj?? zdj??ciow??, sesja ??lubna plenerowa gdzie zrobi??. Odpowiedzi na te pytania znajdziecie zagl??daj??c na bloga. Zapraszam."}
                    headKeywords={"pomys?? na sesj?? zdj??ciow??, ciekawe miejsca w krakowie, zdj??cia pary m??odej w plenerze"}
                    headUrl={"https://99foto.pl/ciekawe-miejsca-w-krakowie-czyli-pomysl-na-sesje-zdjeciowa"}
                    entryContentP1={
                        "Dzie?? ??lubu jest dla wszystkich nowo??e??c??w najwa??niejszy, a zdj??cia reporta??owe przedstawiaj??ce emocje, kt??rych tego dnia przecie?? nie brakuje, bardzo cz??sto wywo??uj?? ??zy wzruszenia lub u??miechy na twarzach ogl??daj??cych. Gdy obrazki z dnia ??lubu na dobre zadomowi?? si?? w Waszej pami??ci wtedy nadchodzi czas na kolejny etap fotograficznej przygody. Etap r??wnie przyjemny, a na pewno mniej wymagaj??cy ni?? organizacja imprezy w dniu ??lubu - sesja plenerowa. Poniewa?? sesji zdj??ciowych po??lubnych nie robi si?? codziennie, suknie ??lubne cz??sto trafiaj?? na allegro, a garniak??w nie mo??na poszerza?? w niesko??czono???? to warto na przygotowanie si?? do takiej sesji po??wi??ci?? kilkana??cie minut i dobrze wybra?? ciekawe miejsca na plener ??lubny w Krakowie."
                    }
                    entryContentP2={
                        'Pomys??y na sesj?? zdj??ciow?? mo??na zaczerpn???? ogl??daj??c wpisy na blogach, moim w??asnym czy te?? innych fotograf??w. Sesja ??lubna plenerowa, gdzie zrobi??, jakie gad??ety zabra??, te pytania warto zada?? znajomym, kt??rzy dzie?? ??lubu i sesj?? w wybranym dniu po ??lubie maj?? ju?? za sob??. Jestem pewnien, ??e sobie bez problemu z tym zadaniem poradzicie. Tymczasem zapraszam do ogl??dania sesji ??lubnej Asi i Szymona, kt??rych akumulatory na maksa na??adowane energi?? podczas tygodniowej po??lubnej wyprawy pod tureckie palmy nap??dzaj?? ten blogowy wpis. Ciekawe miejsce na plener ??lubny w Krakowie, kt??re mo??ecie zobaczy?? w tym wpisie to <a href="http://www.mogilany.info/inicjatwy/dwor-w-mogilanach" target="_blank" rel="nofollow">Park w Mogilanach</a> i <a href="https://wawel.krakow.pl/" target="_blank" rel="nofollow">Zamek Kr??lewski na Wawelu</a>. Cisza i spok??j tego miejsca, starannie wypiel??gnowana ziele?? w konfrontacji z energi?? Asi i Szymona to gwarancja dobrych zdj????. Serdecznie zapraszam do ogl??dania i zach??cam do lajkowania na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Insta</a>.'
                    }
                    slug={"ciekawe-miejsca-w-krakowie-czyli-pomysl-na-sesje-zdjeciowa"}
                    title={"CIEKAWE MIEJSCA W KRAKOWIE CZYLI POMYS?? NA SESJ?? ZDJ??CIOW?? - JOANNA i SZYMON"}
                    tags={"pomys?? na sesj?? zdj??ciow??, ciekawe miejsca w krakowie, zdj??cia pary m??odej w plenerze"}
                    date={"19 lipca 2019"}
                    menuNames={"JOANNA i SZYMON"}
                    menuTitle={"CIEKAWE MIEJSCA W KRAKOWIE CZYLI POMYS?? NA SESJ?? ZDJ??CIOW??"}
                    leadNames={"PAULINA i KAMIL"}
                    leadTitle={"REPORTA?? ??LUBNY SALA WESELNA BABIE LATO GD??W, CIEPLUTKO"}
                    leadUrl={"/reportaz-slubny-sala-weselna-babie-lato-gdow-cieplutko"}
                    leadImage={process.env.staticS3ImagesPath + "sala_weselna_babie_lato_gdow_1.webp"}
                />
            
        );
};

export default BlogPageComponent;
