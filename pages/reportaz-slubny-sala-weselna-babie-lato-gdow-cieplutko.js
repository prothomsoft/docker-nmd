import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [

            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0002.webp", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0003.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0004.webp", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0006.webp", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0007.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0008.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0009.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0011.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0012.webp", height: 567 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0015.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0014.webp", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0016.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0017.webp", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0018.webp", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0019.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0020.webp", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0021.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0023.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0022.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0024.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0028.webp", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0029.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0030.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0031.webp", height: 806 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0032.webp", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0033.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0034.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0035.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0038.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0039.webp", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0040.webp", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0041.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0042.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0044.webp", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0047.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0049.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0050.webp", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0053.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0054.webp", height: 806 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0056.webp", height: 851 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0058.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0057.webp", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0067.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0059.webp", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0062.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0063.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0061.webp", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0066.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0069.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0071.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0072.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0073.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0074.webp", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0077.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0078.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0079.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0080.webp", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0081.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0083.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0085.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0086.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0087.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0088.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0089.webp", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0093.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0094.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0095.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0096.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0097.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0090.webp", height: 566 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0099.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0100.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0091.webp", height: 566 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0101.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0102.webp", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0103.webp", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0104.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0105.webp", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0106.webp", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0108.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0109.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0110.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0111.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0112.webp", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0113.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0114.webp", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0115.webp", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0116.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0118.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0117.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0119.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0121.webp", height: 761 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0120.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0123.webp", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0124.webp", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0125.webp", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0122.webp", height: 763 }

        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sala_weselna_babie_lato_gdow_1.webp"}
                    images={images}
                    headTitle={"Reportaż ślubny sala weselna Babie Lato Gdów"}
                    headDescription={"Sala weselna Babie Lato Gdów. Czerwcowa pogoda, cieplutko i wesele w gronie rodziny i bliskich przyjaciół. Paulina i Kamil, piękni, młodzi, szczęśliwi. Zapraszam."}
                    headKeywords={"Reportaż ślubny sala weselna Babie Lato Gdów, dobry fotograf ślubny Biertowice"}
                    headUrl={"https://99foto.pl/reportaz-slubny-sala-weselna-babie-lato-gdow-cieplutko"}
                    entryContentP1={
                        'Długa, długa historia, która swój początek ma blisko trzy lata temu we wrześniu 2016 roku na <a href="https://99foto.pl/julita-i-pawel-reportaz-slubny-kosciol-na-skalce-krakow/">ślubie Julity i Pawła</a>. Oglądając dokładnie wpis na moim blogu wśród zacnego grona królująch na parkiecie przyjaciół doszukacie się Pauliny. Ponieważ nic, a nic się nie zmieniła przez ten czas nie będzie to trudne zadanie. W ubiegłym roku spotkaliśmy się na sesji narzeczeńskiej i spotkamy się jeszcze co najmniej raz na sesji ślubnej w plenerze. Może nie będę pisał, że zostali oni dla siebie stworzeni, ale uwierzcie mi na słowo, że Paulina i Kamil wybitnie do siebie pasują i zupełnie nie dziwi mnie fakt, że zostali parą. Czerwiec i tropikalna pogoda, wachlarze tnące powietrze, wiatraki rozręcone na maksa, takie lato mamy w tym roku. Ale po kolei. Przygotowania zaczęliśmy w salonie <a href="https://www.facebook.com/kaniafryzjerstwo" target="_blank" rel="nofollow">Przemysław Kania Fryzjerstwo Profesjonalne</a>, gdzie Przemek (mistrz Europy we fryzjerstwie OMC Hairworld odbywających się w Paryżu) osobiście zadbał o idealną fryzurę Pauliny. W tym samym miejscu na dosłownie kwadracie Paulina dostała też swoją nową twarz. W trakcie dołączył do nas <a href="http://effectstudio.eu" target="_blank" rel="nofollow">Łukasz z EffectStudio</a>, który na luzie w klapeczkach zwijał kolejne kadry tworząc niezapomniany film ślubny. Przecisnęliśmy się ozdobioną białymi wstążkami aleją do domu Pauliny by chwilę później Zakopianką pomknąć prosto na przygotowania Kamila.'
                    }
                    entryContentP2={
                        'Spinki, mucha, marynarka ubrane bardzo sprawnie z fachową pomocą drużby. Następnie wróciliśmy na błogosławieństwo, po którym wszyscy udali się do <a href="http://www.izdebnik.diecezja.pl" target="_blank" rel="nofollow">Kościoła pod wezwaniem św. Małgorzaty dziewicy i męczennicy w Izdebniku</a>. Po wyjściu z Kościoła wykonaliśmy zdjęcie grupowe i Para Młoda zaprosiła gości weselnych do <a href="http://babielato-gdow.pl" target="_blank" rel="nofollow">Domu Weselnego Babie Lato w Gdowie</a>. Zespół serwował szlagiery weselnych parkietów i świetnie prowadził zabawy weselne. Gościem specjalnym stał się zaprojektowany przez Kamila robot, który co prawda sam butelki napełnić nie umiał, ale kolejki serwował koncertowo. Bardzo dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i wspaniałą atmosferę. Życzę miłego oglądania i lajkowania na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Insta</a>. Po więcej zdjęć zapraszam do strefy klienta. Można je obejrzeć wpisując hasło z mojej wizytówki.'
                    }
                    slug={"reportaz-slubny-sala-weselna-babie-lato-gdow-cieplutko"}
                    title={"REPORTAŻ ŚLUBNY SALA WESELNA BABIE LATO GDÓW, CIEPLUTKO - PAULINA i KAMIL"}
                    tags={"Reportaż ślubny sala weselna Babie Lato Gdów, dobry fotograf ślubny Biertowice"}
                    date={"20 czerwca 2019"}
                    menuNames={"PAULINA i KAMIL"}
                    menuTitle={"REPORTAŻ ŚLUBNY SALA WESELNA BABIE LATO GDÓW, CIEPLUTKO"}
                    leadNames={"MONIKA i MARTIN"}
                    leadTitle={"WESELE MIĘDZYNARODOWE PROSZOWICE i POLSKIE TRADYCJE WESELNE"}
                    leadUrl={"/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne"}
                    leadImage={process.env.staticImagesPath + "sala_weselna_biala_wilczyca_kocmyrzow.webp"}
                />
            
        );
};

export default BlogPageComponent;