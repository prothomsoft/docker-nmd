import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0002.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0005.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0008.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0010.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0011.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0016.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0004.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0020.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0024.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0025.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0037.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0028.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0036.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0026.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0042.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0043.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0019.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/07/sesja_narzeczenska_w_krakowie_0013.webp", height: 762 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_narzeczenska_krakow_kazimierz.webp"}
                    images={images}
                    headTitle={"Miejska sesja narzecze??ska w Krakowie"}
                    headDescription={"Miejska sesja narzecze??ska w Krakowie, Kazimierz, Stare Miasto, Zakrz??wek. Pi??kni, m??odzi i zakochani - Marlena i Adam. Zapraszam."}
                    headKeywords={"miejska sesja narzecze??ska, zdj??cia Krak??w Stare Miasto, sesja na Kazimierzu"}
                    headUrl={"https://99foto.pl/miejska-sesja-narzeczenska-piekni-mlodzi-i-zakochani"}
                    entryContentP1={
                        "Pracuj??c nad obr??bk?? miejskiej sesji narzecze??skiej Marleny i Adama s??ucha??em sobie jednej z ostatnich p??yt Eda Sheerana, gdzie w utworze Beautiful People ??piewnie wyra??a on swoje niezadowolenie ze swojego rudego wygl??du. Niew??tpliwie przyszli Pa??stwo M??odzi, kt??rych zdj??cia mam przyjemno???? dzisiaj pokaza?? na blogu, mieli o wiele wi??cej szcz????cia i tytu?? wpisu pi??kni, m??odzi, zakochani pasuje do nich idealnie. ??lub ju?? w sierpniu, a tymczasem wsp??lnie korzystaj??c z rewelacyjnej pogody odwiedzili??my kilka zak??tk??w naszego pi??knego Krakowa."
                    }
                    entryContentP2={
                        'Na pocz??tek wybrali??my oczywi??cie Kazimierz, gdy?? jest to miejsce idealne na tego typu miejskie sesje narzecze??skie. Krak??w ma sw??j rytm, kolory, styl, miejsca mo??e mniej uporz??dkowane, ale naznaczone charakterem i opowiadaj??ce wspania??e historie. Wybieraj??c odpowiedni?? drog?? i pod????aj??c t?? drog?? ??ladami zakochanych z aparatem w r??ku mamy pewno???? stworzenia minimum kilku niezapomnianych kadr??w. Pami??tajcie, ??e miejska sesja narzecze??ska to ??wietny pomys?? na oswojenie si?? z obiektywem aparatu fotograficznego i spos??b na bli??sze poznanie fotografa ??lubnego, kt??ry b??dzie Wam towarzyszy?? w tym najwa??niejszym dniu. Serdecznie zapraszam do ogl??dania i zach??cam do lajkowania na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Insta</a>.'
                    }
                    slug={"miejska-sesja-narzeczenska-piekni-mlodzi-i-zakochani"}
                    title={"MIEJSKA SESJA NARZECZE??SKA, PI??KNI, M??ODZI i ZAKOCHANI - MARLENA i ADAM"}
                    tags={"pomys?? na sesj?? zdj??ciow??, ciekawe miejsca w krakowie, zdj??cia pary m??odej w plenerze"}
                    date={"28 czerwca 2019"}
                    menuNames={"MARLENA i ADAM"}
                    menuTitle={"MIEJSKA SESJA NARZECZE??SKA, PI??KNI, M??ODZI i ZAKOCHANI"}
                    leadNames={"JOANNA i SZYMON"}
                    leadTitle={"CIEKAWE MIEJSCA W KRAKOWIE CZYLI POMYS?? NA SESJ?? ZDJ??CIOW??"}
                    leadUrl={"/ciekawe-miejsca-w-krakowie-czyli-pomysl-na-sesje-zdjeciowa"}
                    leadImage={process.env.staticS3ImagesPath + "ciekawe_miejsca_na_plener_w_krakowie.webp"}
                />
            
        );
};

export default BlogPageComponent;
