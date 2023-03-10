import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [

            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0002.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0004.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0006.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0012.webp", height: 567 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0014.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0016.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0017.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0018.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0020.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0023.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0024.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0028.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0030.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0031.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0032.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0033.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0035.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0039.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0040.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0041.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0042.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0044.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0047.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0049.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0050.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0053.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0054.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0056.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0058.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0057.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0067.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0059.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0062.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0061.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0069.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0071.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0073.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0074.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0078.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0080.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0081.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0085.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0087.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0088.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0089.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0093.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0094.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0095.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0096.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0090.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0099.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0100.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0091.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0102.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0103.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0105.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0106.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0109.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0110.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0111.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0112.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0114.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0116.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0118.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0117.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0119.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0121.webp", height: 761 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0120.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0123.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0124.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0125.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0122.webp", height: 763 }

        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sala_weselna_babie_lato_gdow_1.webp"}
                    images={images}
                    headTitle={"Reporta?? ??lubny sala weselna Babie Lato Gd??w"}
                    headDescription={"Sala weselna Babie Lato Gd??w. Czerwcowa pogoda, cieplutko i wesele w gronie rodziny i bliskich przyjaci????. Paulina i Kamil, pi??kni, m??odzi, szcz????liwi. Zapraszam."}
                    headKeywords={"Reporta?? ??lubny sala weselna Babie Lato Gd??w, dobry fotograf ??lubny Biertowice"}
                    headUrl={"https://99foto.pl/reportaz-slubny-sala-weselna-babie-lato-gdow-cieplutko"}
                    entryContentP1={
                        'D??uga, d??uga historia, kt??ra sw??j pocz??tek ma blisko trzy lata temu we wrze??niu 2016 roku na <a href="https://99foto.pl/julita-i-pawel-reportaz-slubny-kosciol-na-skalce-krakow/">??lubie Julity i Paw??a</a>. Ogl??daj??c dok??adnie wpis na moim blogu w??r??d zacnego grona kr??luj??ch na parkiecie przyjaci???? doszukacie si?? Pauliny. Poniewa?? nic, a nic si?? nie zmieni??a przez ten czas nie b??dzie to trudne zadanie. W ubieg??ym roku spotkali??my si?? na sesji narzecze??skiej i spotkamy si?? jeszcze co najmniej raz na sesji ??lubnej w plenerze. Mo??e nie b??d?? pisa??, ??e zostali oni dla siebie stworzeni, ale uwierzcie mi na s??owo, ??e Paulina i Kamil wybitnie do siebie pasuj?? i zupe??nie nie dziwi mnie fakt, ??e zostali par??. Czerwiec i tropikalna pogoda, wachlarze tn??ce powietrze, wiatraki rozr??cone na maksa, takie lato mamy w tym roku. Ale po kolei. Przygotowania zacz??li??my w salonie <a href="https://www.facebook.com/kaniafryzjerstwo" target="_blank" rel="nofollow">Przemys??aw Kania Fryzjerstwo Profesjonalne</a>, gdzie Przemek (mistrz Europy we fryzjerstwie OMC Hairworld odbywaj??cych si?? w Pary??u) osobi??cie zadba?? o idealn?? fryzur?? Pauliny. W tym samym miejscu na dos??ownie kwadracie Paulina dosta??a te?? swoj?? now?? twarz. W trakcie do????czy?? do nas <a href="http://effectstudio.eu" target="_blank" rel="nofollow">??ukasz z EffectStudio</a>, kt??ry na luzie w klapeczkach zwija?? kolejne kadry tworz??c niezapomniany film ??lubny. Przecisn??li??my si?? ozdobion?? bia??ymi wst????kami alej?? do domu Pauliny by chwil?? p????niej Zakopiank?? pomkn???? prosto na przygotowania Kamila.'
                    }
                    entryContentP2={
                        'Spinki, mucha, marynarka ubrane bardzo sprawnie z fachow?? pomoc?? dru??by. Nast??pnie wr??cili??my na b??ogos??awie??stwo, po kt??rym wszyscy udali si?? do <a href="http://www.izdebnik.diecezja.pl" target="_blank" rel="nofollow">Ko??cio??a pod wezwaniem ??w. Ma??gorzaty dziewicy i m??czennicy w Izdebniku</a>. Po wyj??ciu z Ko??cio??a wykonali??my zdj??cie grupowe i Para M??oda zaprosi??a go??ci weselnych do <a href="http://babielato-gdow.pl" target="_blank" rel="nofollow">Domu Weselnego Babie Lato w Gdowie</a>. Zesp???? serwowa?? szlagiery weselnych parkiet??w i ??wietnie prowadzi?? zabawy weselne. Go??ciem specjalnym sta?? si?? zaprojektowany przez Kamila robot, kt??ry co prawda sam butelki nape??ni?? nie umia??, ale kolejki serwowa?? koncertowo. Bardzo dzi??kuj?? za ten wyj??tkowy dzie??, ciep??e przyj??cie i wspania???? atmosfer??. ??ycz?? mi??ego ogl??dania i lajkowania na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Insta</a>. Po wi??cej zdj???? zapraszam do strefy klienta. Mo??na je obejrze?? wpisuj??c has??o z mojej wizyt??wki.'
                    }
                    slug={"reportaz-slubny-sala-weselna-babie-lato-gdow-cieplutko"}
                    title={"REPORTA?? ??LUBNY SALA WESELNA BABIE LATO GD??W, CIEPLUTKO - PAULINA i KAMIL"}
                    tags={"Reporta?? ??lubny sala weselna Babie Lato Gd??w, dobry fotograf ??lubny Biertowice"}
                    date={"20 czerwca 2019"}
                    menuNames={"PAULINA i KAMIL"}
                    menuTitle={"REPORTA?? ??LUBNY SALA WESELNA BABIE LATO GD??W, CIEPLUTKO"}
                    leadNames={"MONIKA i MARTIN"}
                    leadTitle={"WESELE MI??DZYNARODOWE PROSZOWICE i POLSKIE TRADYCJE WESELNE"}
                    leadUrl={"/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne"}
                    leadImage={process.env.staticS3ImagesPath + "sala_weselna_biala_wilczyca_kocmyrzow.webp"}
                />
            
        );
};

export default BlogPageComponent;