import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0002.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0005.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0006.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0016.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0011.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0013.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0014.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0017.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0004.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0009.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0019.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0015.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "zamek_moszna_sesja_slubna.webp"}
                    images={images}
                    headTitle={"Zamek Moszna, plenerowa sesja fotograficzna, zdj??cia ??lubne w pa??acu"}
                    headDescription={"Zamek Moszna, plenerowa ??lubna sesja zdj??ciowa Aleksandry i Grzegorza. Pa??ac z przepi??knym ogrodem cz??sto wybierany na sesje ??lubne. Zapraszam do ogl??dania."}
                    headKeywords={"zamek moszna, plenerowa sesja fotograficzna, zdj??cia ??lubne w pa??acu"}
                    headUrl={"https://99foto.pl/zamek-moszna-plenerowa-sesja-fotograficzna-w-palacu"}
                    entryContentP1={
                        'Wiedzia??em, ??e to kwestia czasu... i pewnego dnia, <a href="https://www.moszna-zamek.pl/" target="_blank" rel="nofollow">Zamek Moszna</a> mocno znany z nazwy miejscowo??ci w kt??rej powsta?? trafi do mojego portfolio. Nie by??o to do ko??ca oczywiste tylko i wy????cznie ze wzgl??du na odleg??o???? do pokonania pomi??dzy Krakowem, a bardzo popularn?? pa??acow?? miejsc??wk?? na sesj?? ??lubn??. Dwa lata temu wracaj??c z rodzinnych wakacji w G??rach Sto??owych, by??o nam bardzo blisko i po drodze by odwiedzi?? ten zamek, ale niestety deszcz zmieni?? nasze plany. Pami??tacie? Sesje plenerowe s?? raz w ??yciu i s?? mi??dzy innymi po to, by z ich pomoc?? spe??nia?? marzenia.'
                    }
                    entryContentP2={
                        'Pami??tali o tym r??wnie?? Ola i Grzegorz, kt??rzy spo??r??d kilku okolicznych zamk??w i pa??ac??w wybrali ten najmniej okoliczny, ale najwspanialszy - Zamek w Mosznej. Zastanawiali??my si?? r??wnie?? nad opuszczonym <a href="https://www.facebook.com/palackrowiarki/" target="_blank" rel="nofollow">Pa??acu w Krowiarkach</a>, czy Pa??acu Goetza, kt??ry znajdziecie w moim poprzednim pa??acowym wpisie na blogu. Pogod?? mieli??my ??wietn??, zamkowa cisza i spok??j zosta??a delikatnie zaburzona przez cztery inne pary, kt??re w tym samym czasie plenerowa??y, spe??niaj??c swoje marzenia. C???? wi??cej mog?? rzec - fryzura i makija?? Oli by??y r??wnie perfekcyjny jak w dniu ??lubu i morze temat??w, kt??re poruszyli??my tego dnia z Grze??kiem, by??o niemierzalne. Zapraszam na zdj??cia i ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"zamek-moszna-plenerowa-sesja-fotograficzna-w-palacu"}
                    title={"ZAMEK MOSZNA, SESJA FOTOGRAFICZNA W PA??ACU - ALEKSANDRA i GRZEGORZ"}
                    tags={"zamek moszna, plenerowa sesja fotograficzna, zdj??cia ??lubne w pa??acu"}
                    date={"29 lipca 2018"}
                    menuNames={"ALEKSANDRA i GRZEGORZ"}
                    menuTitle={"ZAMEK MOSZNA, SESJA FOTOGRAFICZNA W PA??ACU"}
                    leadNames={"DAJANA i SYLWESTER"}
                    leadTitle={"OGR??D BOTANICZNY W KRAKOWIE, ??LUBNA SESJA ZDJ??CIOWA W OGRODZIE"}
                    leadUrl={"/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
                    leadImage={process.env.staticS3ImagesPath + "ogrod_botaniczny.webp"}
                />
            
        );
};

export default BlogPageComponent;
