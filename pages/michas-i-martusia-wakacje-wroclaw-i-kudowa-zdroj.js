import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0006.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0044.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0037.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0060.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0016.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0063.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0020.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0022.webp", height: 816 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0027.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0028.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0029.webp", height: 816 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0034.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0035.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0036.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0045.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0055.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0056.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0058.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0065.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0072.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0076.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/fotograf_rodzinny_krakow_0077.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "michas_i_martusia_wakacje_wroclaw_i_kudowa_zdroj_start.webp"}
                    images={images}
                    headTitle={"Sesja rodzinna Krak??w"}
                    headDescription={"Afrykanarium, Kolejkowo, SkyTower i Szczeliniec Wielki. Zapraszam na kilka wakacyjnych zdj???? Michasia i Martusi z Wroc??awia i Kudowy Zdr??j. Mi??ego ogl??dania."}
                    headKeywords={"sesja rodzinna krak??w,fotograf rodzinny krak??w,fotografia rodzinna krak??w"}
                    headUrl={"https://99foto.pl/michas-i-martusia-wakacje-wroclaw-i-kudowa-zdroj"}
                    entryContentP1={
                        "Dwa tygodnie pe??nego luzu i nasze wakacje, kt??re sp??dzili??my we Wroc??awiu i Kudowie Zdr??j, czyli chwilowa przerwa od zdj???? ??lubnych i sesji plenerowych. Micha?? i Martusia mieli te dwa tygodnie wype??nione atrakcjami. W pierwszej kolejno??ci odwiedzili??my Wroc??awskie ZOO i nowo otwarte Afrykarium. ??wietne miejsce, nowoczesne i na pewno warte zobaczenia. Nast??pnie wybrali??my si?? do Parku Wodnego, fajniejszego ni?? ten w Krakowie. P????niej kolejkowo, wyjazd na 49 pi??tro w Sky Tower, fina?? Euro dla Portugali i nadszed?? czas wyjazdu do Kudowy Zdr??j."
                    }
                    entryContentP2={
                        "Do Kudowy Zdr??j w poniedzia??ek prosto na obiadek jechali??my drog?? stu zakr??t??w przez Radk??w i Kar????w. Na miejscu zwiedzili??my Park Zdrojowy, a Micha?? i Martusia wdrapali si?? dzielnie na Szczeliniec Wielki. Miejsca bardzo wakacyjne i godne polecenia je??eli kto?? chce pochodzi?? w lekkich g??rach z dzieciakami. Wszystkie zdj??cia zrobi??em jednym aparatem i tylko dwoma obiektywami, wakacyjny zestaw minimum. Korzystaj??c z ostatnich urlopowych dni wybra??em kilka zdj????. Mi??ego ogl??dania."
                    }
                    slug={"michas-i-martusia-wakacje-wroclaw-i-kudowa-zdroj"}
                    title={"WAKACJE WROC??AW i KUDOWA ZDR??J - MICHA?? i MARTUSIA"}
                    tags={"sesja rodzinna krak??w,fotograf rodzinny krak??w,fotografia rodzinna krak??w"}
                    date={"15 lipca 2016"}
                    menuNames={"MICHA?? i MARTUSIA"}
                    menuTitle={"WAKACJE WROC??AW i KUDOWA ZDR??J"}
                    leadNames={"JOANNA i GRZEGORZ"}
                    leadTitle={"WESELE NA POLU GOLFOWYM W PACZ????TOWICACH"}
                    leadUrl={"/wesele-na-polu-golfowym-w-paczoltowicach"}
                    leadImage={process.env.staticS3ImagesPath + "wesele_na_polu_golfowym_w_paczoltowicach_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
