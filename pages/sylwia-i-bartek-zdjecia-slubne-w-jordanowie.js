import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0005.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0007.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0009.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0012.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0014.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0018.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0019.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0021.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0024.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0029.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0031.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0032.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0035.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0034.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0037.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0036.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0039.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0042.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0046.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0048.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0050.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0051.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0054.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0057.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0059.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0060.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0062.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0065.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0067.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0068.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0069.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0070.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0071.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0072.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0073.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0074.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0077.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0080.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0083.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0085.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0087.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0090.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0091.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0093.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0094.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0095.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0096.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0102.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0098.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0100.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0105.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0106.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0107.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0109.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0110.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0111.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0112.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0113.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0114.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0115.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0116.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0117.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0119.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0120.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0122.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0123.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0124.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0126.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0129.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0130.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/fotograf_na_wesele_krakow_0104.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sylwia_i_bartek_zdjecia_slubne_w_jordanowie_start.webp"}
                    images={images}
                    headTitle={"Fotograf ??lubny Jordan??w"}
                    headDescription={"Twarz Marilyn Monroe podpisan?? Dzi??kuj??, ??e jeste?? w dalekim Trondheim wyklika?? Bartek dla ukochanej Sylwii. Kilka ??ez polecia??o... Zapraszam na reporta??."}
                    headKeywords={"fotograf na wesele krak??w,reporta?? ??lubny krak??w,zdj??cia ??lubne dom weselny karolinka"}
                    headUrl={"https://99foto.pl/sylwia-i-bartek-zdjecia-slubne-w-jordanowie"}
                    entryContentP1={
                        "W Jordanowie fotografowa??em ju?? kilka razy. Zawsze spotykam si?? tam z niezwyk???? otwarto??ci?? ludzi i podziwiam ich umiej??tno???? odstresowania i oddania si?? szalonej zabawie. Tym razem nie mog??o by?? inaczej &#8211; udowodnili to Sylwia i Bartek. Przygotowania odby??y si?? w domu rodzinnym Sylwii. Panna m??oda zastosowa??a jedno z moich ulubionych powiedze?? &#8211; je??li chcesz co?? mie?? zrobione dobrze, zr??b to sam &#8211; i jako znana ju?? w okolicach Trondheim wiza??ystka makija?? wykona??a samodzielnie. Mocno trzymali??my kciuki za pogod??, kt??ra pewnie dlatego wytrzyma??a do samego ko??ca. Uda??o mi si?? te?? tym razem zrobi?? jedno z moich ulubionych zdj???? z przygotowa?? Pana M??odego. Ciekawe czy ogl??daj??c reporta?? zgadniecie, kt??re to zdj??cie."
                    }
                    entryContentP2={
                        "Po rodzinnym b??ogos??awie??stwie udali??my si?? do ko??cio??a ??wi??tej Siostry Faustyny Kowalskiej w Naprawie, gdzie wys??uchali??my pi??knie przygotowanego kazania. W trakcie ceremonii zesp???? specjalny, na zam??wienie te?? specjalne, zmontowa?? zestaw nag??o??nieniowy i us??yszeli??my piosenk?? Elvisa. ??apy m??odych posz??y w g??r?? w ge??cie YEAH !!! Nast??pnie udali??my si?? do pi??knej sali w Domu Weselnym Karolinka w Bystrej Podhala??skiej. Sylwia i Bartek otworzyli parkiet w pi??knym stylu i towarzystwie najm??odszych go??ci, a po ich pierwszym ta??cu zacz????y si?? taneczne szale??stwa.  Zabawa by??a przednia. Przed p????noc?? Bartek przygotowa?? specjaln?? niespodziank?? &#8211; obraz Marylin Monroe z napisem &#8222;Dzi??kuj??, ??e jeste??&#8221;. Wr??czenie tej pami??tki poprzedzone prezentacj?? filmow?? jak to arcydzie??o powstawa??o wycisn????o kilka ??ez z oczu zebranych go??ci. Nie zabrak??o te?? podzi??kowania dla rodzic??w. To by?? zdecydowanie pi??kny dzie??! Zapraszam do obejrzenia historii Sylwii i Bartka, a po wi??cej zdj???? do strefy klienta z has??em z mojej wizyt??wki."
                    }
                    slug={"sylwia-i-bartek-zdjecia-slubne-w-jordanowie"}
                    title={"ZDJ??CIA ??LUBNE W JORDANOWIE - SYLWIA i BARTEK"}
                    tags={"fotograf na wesele krak??w,reporta?? ??lubny krak??w,zdj??cia ??lubne dom weselny karolinka"}
                    date={"3 czerwca 2016"}
                    menuNames={"SYLWIA i BARTEK"}
                    menuTitle={"ZDJ??CIA ??LUBNE W JORDANOWIE"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W G??RALSKIM KLIMACIE PRZYSTA?? KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticS3ImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
