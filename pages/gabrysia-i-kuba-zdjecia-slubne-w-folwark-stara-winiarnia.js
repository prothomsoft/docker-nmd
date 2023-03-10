import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0010.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0015.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0017.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0020.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0048.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0025.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0026.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0027.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0028.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0036.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0037.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0039.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0040.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0041.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0042.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0044.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0045.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0046.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0047.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0050.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0051.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0052.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0053.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0054.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0055.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0056.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0058.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0059.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0061.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0063.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0065.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0066.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0067.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0069.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0070.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0071.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0073.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0075.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0076.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0079.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0081.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0085.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/01/fotograf_na_wesele_mszana_dolna_0088.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "gabrysia_i_kuba_zdjecia_slubnew_folwark_stara_winiarnia_start.webp"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Folwark Stara Winiarnia"}
                    headDescription={"Serdecznie zapraszam do Folwarku Stara Winiarnia w Mszanie Dolnej na ??lub Gabrysi i Kuby. Po raz kolejny tego roku wsp??lnie pokonali??my zim??."}
                    headKeywords={"zdj??cia ??lubne folwark stara winiarnia,fotograf na ??lub mszana dolna,fotograf na ??lub cywilny"}
                    headUrl={"https://99foto.pl/gabrysia-i-kuba-zdjecia-slubne-w-folwark-stara-winiarnia"}
                    entryContentP1={
                        "Drugi weekend stycznia to wa??ny dzie?? dla Gabrysi i Kuby, kt??rzy powiedzieli sobie TAK w Folwarku Stara Winiarnia w Mszanie Dolnej. Kilka zdj???? z walizkami podczas wyjazdu z Krakowa, p????niej lekki samochodowy sprint zakopiank?? do salonu fryzjerskiego w Mszanie Dolnej. Cztery godziny na paznokcie, fryzur??, makija?? i genialny efekt ko??cowy. Mniej ni?? trzydzie??ci minut na ubieranie sukni ??lubnej i w pe??nej gotowo??ci imprez?? czas zacz????. Podczas fotografowania ??lub??w cywilnych trzeba wykaza?? si?? sporym refleksem, poniewa?? ca??a ceremonia trwa kr??tko."
                    }
                    entryContentP2={
                        'Wcale si?? nie pomyl?? jak powiem, ??e zabawa weselna odby??a si?? pi??tro wy??ej, bo rzeczywi??cie tak by??o. Na sali rodzice przywitali m??odych chlebem i sol?? po czym rozpocz????a si?? tradycyjna zbi??rka kopert i prezent??w, podczas kt??rych Gabi i Kuba otrzymali moc gor??cych ??ycze??. Na sali czeka?? ju?? zesp???? <a href="https://www.motifband.pl/" target="_blank" rel="nofollow">Motif Band</a>, kt??ry u??wietni?? zabaw?? tego wieczoru. Na koniec, pozdrowienia dla Pary M??odej, go??ci i ekipy weselnej. Blisko pi????set zdj???? z tego dnia znajdziecie w strefie klienta podaj??c has??o z mojej wizyt??wki.'
                    }
                    slug={"gabrysia-i-kuba-zdjecia-slubne-w-folwark-stara-winiarnia"}
                    title={"ZDJ??CIA ??LUBNE W FOLWARKU STARA WINIARNIA - GABRYSIA i KUBA"}
                    tags={"zdj??cia ??lubne folwark stara winiarnia,fotograf na ??lub mszana dolna,fotograf na ??lub cywilny"}
                    date={"14 stycznia 2016"}
                    menuNames={"GABRYSIA i KUBA"}
                    menuTitle={"ZDJ??CIA ??LUBNE W FOLWARKU STARA WINIARNIA"}
                    leadNames={"MONIKA i RAFA??"}
                    leadTitle={"ZDJ??CIA ??LUBNE KRAK??W, RESTAURACJA CHOCHO??OWY DW??R"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={process.env.staticS3ImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
