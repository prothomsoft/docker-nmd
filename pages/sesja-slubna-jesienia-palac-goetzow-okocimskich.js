import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0027.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0010.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0014.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0017.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0021.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0023.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0015.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0005.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0037.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0026.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_slubna_jesienia.webp"}
                    images={images}
                    headTitle={"Sesja ??lubna jesieni??, Pa??ac Goetz??w Okocimskich"}
                    headDescription={"Sesj?? ??lubn?? Izy i Arka zaplanowali??my w Gabinecie Kurii Metropolitarnej w Krakowie, gdzie kilka miesi??cy wcze??niej urz??dowa?? Janusz Gajos. Zapraszam na bloga."}
                    headKeywords={"pa??ac goetz??w okocimskich, plener ??lubny pomys??y, sesja ??lubna krak??w gdzie, sesja ??lubna jesieni??"}
                    headUrl={"https://99foto.pl/sesja-slubna-jesienia-palac-goetzow-okocimskich"}
                    entryContentP1={
                        'Ostatnio g??o??no o filmie "KLER" Wojciecha Smarzowskiego. Je??eli widzieli??cie film lub jego zapowied?? to pewnie pami??tacie ??wietn?? rol?? Janusza Gajosa, kt??ry w roli biskupa urz??duje w gabinecie Kurii Metropolitarnej w Krakowie. ??eby nie by??o nudno plener ??lubny Izy i Arka rozpocz??li??my dok??adnie w tym samym miejscu, pi??knej pa??acowej bibliotece Pa??acu Goetz??w w Brzesku. <a href="https://www.palacgoetz.pl/" target="_blank" rel="nofollow">Pa??ac Goetz??w Okocimskich w Brzesku</a> to jeden z cenniejszych zabytk??w Ma??opolski. Obiekt wybudowany przez Jana Albina Goetza od 2008 roku sta?? si?? w??asno??ci?? prywatn?? i jak si?? mo??na domy??li?? wygenerowa??o to sporo pozytywnych zmian.  Miejsce to na co dzie?? zamkni??te dla zwiedzaj??cych, okazjonalnie udost??pniane na potrzeby profesjonalnych sesji zdj??ciowych lub przyj???? ??lubnych jest obiektem niezwyk??ym, kt??ry przenosi odwiedzaj??cych w ??wiat pe??en pi??kna i wspania??ej architektury charakteryzuj??cej si?? dba??o??ci?? o najmniejszy detal.'
                    }
                    entryContentP2={
                        'Wynajmuj??c obiekt <a href="https://www.palacgoetz.pl/" target="_blank" rel="nofollow">Pa??acu Goetz??w Okocimskich w Brzesku</a> na sesj?? ??lubn?? jesieni?? mamy do dyspozycji wszystkie pomieszczenia czyli wspomnian?? ju?? pa??acow?? bibliotek??, kaplic??, ogr??d zimowy, palmiarnie, pokoje go??cinne oraz oczywi??cie epickie schody. Nale??y r??wnie?? wspomnie?? o wspaniale zagospodarowanym parku w stylu angielskim z przepi??knym starym drzewostanem, kt??ry o??wietlony promieniami s??o??ca staje si?? bajkow?? sceneri?? dla postaci w strojach ??lubnych. Obecnie w Pa??acu mie??ci si?? luksusowy pi??ciogwiazdkowy hotel i SPA, w kt??rym skorzysta?? mo??na nie tylko z typowych zabieg??w odnowy biologicznej ale r??wnie?? zaserwowa?? sobie jedyn?? w swoim rodzaju k??piel piwn??. Je??eli tylko planujecie sesj?? ??lubn?? jesieni??, chcecie zrobi?? j?? blisko Krakowa w pa??acowych klimatach i bud??et poweselny si?? zgadza to lepszego miejsca nie znajdziecie. Serdecznie zapraszam na zdj??cia. Mi??ego ogl??dania.'
                    }
                    slug={"sesja-slubna-jesienia-palac-goetzow-okocimskich"}
                    title={"SESJA ??LUBNA JESIENI?? - PA??AC GOETZ??W OKOCIMSKICH - IZABELA i ARKADIUSZ"}
                    tags={"pa??ac goetz??w okocimskich, plener ??lubny pomys??y, sesja ??lubna krak??w gdzie, sesja ??lubna jesieni??"}
                    date={"10 pa??dziernika 2018"}
                    menuNames={"IZABELA i ARKADIUSZ"}
                    menuTitle={"SESJA ??LUBNA JESIENI?? - PA??AC GOETZ??W OKOCIMSKICH"}
                    leadNames={"DAJANA i SYLWESTER"}
                    leadTitle={"OGR??D BOTANICZNY W KRAKOWIE - ??LUBNA SESJA ZDJ??CIOWA - DAJANA i SYLWESTER"}
                    leadUrl={"/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
                    leadImage={process.env.staticS3ImagesPath + "ogrod_botaniczny.webp"}
                />
            
        );
};

export default BlogPageComponent;
