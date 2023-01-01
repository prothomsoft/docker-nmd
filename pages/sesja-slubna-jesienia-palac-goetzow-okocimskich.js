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
                    headTitle={"Sesja ślubna jesienią, Pałac Goetzów Okocimskich"}
                    headDescription={"Sesję ślubną Izy i Arka zaplanowaliśmy w Gabinecie Kurii Metropolitarnej w Krakowie, gdzie kilka miesięcy wcześniej urzędował Janusz Gajos. Zapraszam na bloga."}
                    headKeywords={"pałac goetzów okocimskich, plener ślubny pomysły, sesja ślubna kraków gdzie, sesja ślubna jesienią"}
                    headUrl={"https://99foto.pl/sesja-slubna-jesienia-palac-goetzow-okocimskich"}
                    entryContentP1={
                        'Ostatnio głośno o filmie "KLER" Wojciecha Smarzowskiego. Jeżeli widzieliście film lub jego zapowiedź to pewnie pamiętacie świetną rolę Janusza Gajosa, który w roli biskupa urzęduje w gabinecie Kurii Metropolitarnej w Krakowie. Żeby nie było nudno plener ślubny Izy i Arka rozpoczęliśmy dokładnie w tym samym miejscu, pięknej pałacowej bibliotece Pałacu Goetzów w Brzesku. <a href="https://www.palacgoetz.pl/" target="_blank" rel="nofollow">Pałac Goetzów Okocimskich w Brzesku</a> to jeden z cenniejszych zabytków Małopolski. Obiekt wybudowany przez Jana Albina Goetza od 2008 roku stał się własnością prywatną i jak się można domyślić wygenerowało to sporo pozytywnych zmian.  Miejsce to na co dzień zamknięte dla zwiedzających, okazjonalnie udostępniane na potrzeby profesjonalnych sesji zdjęciowych lub przyjęć ślubnych jest obiektem niezwykłym, który przenosi odwiedzających w świat pełen piękna i wspaniałej architektury charakteryzującej się dbałością o najmniejszy detal.'
                    }
                    entryContentP2={
                        'Wynajmując obiekt <a href="https://www.palacgoetz.pl/" target="_blank" rel="nofollow">Pałacu Goetzów Okocimskich w Brzesku</a> na sesję ślubną jesienią mamy do dyspozycji wszystkie pomieszczenia czyli wspomnianą już pałacową bibliotekę, kaplicę, ogród zimowy, palmiarnie, pokoje gościnne oraz oczywiście epickie schody. Należy również wspomnieć o wspaniale zagospodarowanym parku w stylu angielskim z przepięknym starym drzewostanem, który oświetlony promieniami słońca staje się bajkową scenerią dla postaci w strojach ślubnych. Obecnie w Pałacu mieści się luksusowy pięciogwiazdkowy hotel i SPA, w którym skorzystać można nie tylko z typowych zabiegów odnowy biologicznej ale również zaserwować sobie jedyną w swoim rodzaju kąpiel piwną. Jeżeli tylko planujecie sesję ślubną jesienią, chcecie zrobić ją blisko Krakowa w pałacowych klimatach i budżet poweselny się zgadza to lepszego miejsca nie znajdziecie. Serdecznie zapraszam na zdjęcia. Miłego oglądania.'
                    }
                    slug={"sesja-slubna-jesienia-palac-goetzow-okocimskich"}
                    title={"SESJA ŚLUBNA JESIENIĄ - PAŁAC GOETZÓW OKOCIMSKICH - IZABELA i ARKADIUSZ"}
                    tags={"pałac goetzów okocimskich, plener ślubny pomysły, sesja ślubna kraków gdzie, sesja ślubna jesienią"}
                    date={"10 października 2018"}
                    menuNames={"IZABELA i ARKADIUSZ"}
                    menuTitle={"SESJA ŚLUBNA JESIENIĄ - PAŁAC GOETZÓW OKOCIMSKICH"}
                    leadNames={"DAJANA i SYLWESTER"}
                    leadTitle={"OGRÓD BOTANICZNY W KRAKOWIE - ŚLUBNA SESJA ZDJĘCIOWA - DAJANA i SYLWESTER"}
                    leadUrl={"/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
                    leadImage={process.env.staticS3ImagesPath + "ogrod_botaniczny.webp"}
                />
            
        );
};

export default BlogPageComponent;
