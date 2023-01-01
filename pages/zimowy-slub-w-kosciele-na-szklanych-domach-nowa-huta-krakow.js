import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0001.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0002.webp", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0003.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0004.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0005.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0006.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0007.webp", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0008.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0009.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0010.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0011.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0012.webp", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0013.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0014.webp", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0015.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0016.webp", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0017.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0018.webp", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0019.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0020.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0021.webp", height: 766 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0022.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0023.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0024.webp", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0025.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0026.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0027.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0028.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0029.webp", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0030.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0031.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0032.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0033.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0034.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0035.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0036.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0037.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0038.webp", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0039.webp", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0040.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0041.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0042.webp", height: 806 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0043.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0044.webp", height: 850 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0045.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0046.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0047.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0048.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0049.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0050.webp", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0051.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0052.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0053.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0054.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0055.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0056.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0057.webp", height: 806 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0058.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0059.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0060.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0061.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0062.webp", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0063.webp", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0064.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0065.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0066.webp", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0067.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0068.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0069.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0070.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0071.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0072.webp", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0073.webp", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0074.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0075.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0076.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0077.webp", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0078.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0079.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0080.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0081.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0082.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0083.webp", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0084.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0085.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0086.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0087.webp", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0088.webp", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0089.webp", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0090.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0091.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0092.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0093.webp", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0094.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0095.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0096.webp", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0097.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0098.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0099.webp", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0100.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0101.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0104.webp", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0102.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0103.webp", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0105.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0106.webp", height: 382 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0107.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0108.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0109.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0110.webp", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0111.webp", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0112.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "zimowy-slub-w-kosciele-na-szklanych-domach-nowa-huta-krakow-start.webp"}
                    images={images}
                    headTitle={"Zimowy ślub w Kościele na Szklanych Domach, Nowa Huta, Kraków"}
                    headDescription={"Zimowa sobota. Kilka gorących klatek i zimne ognie. Ola i Tomek, Szklane Domy i szalona zabawa do białego rana u Niedźwiedzia. Zapraszam na bloga."}
                    headKeywords={"Zimowy ślub Kraków, kościół na Szklanych Domach, reportaż ślubny Nowa Huta"}
                    headUrl={"https://99foto.pl/zimowy-slub-w-kosciele-na-szklanych-domach-nowa-huta-krakow"}
                    entryContentP1={
                        'Zimowa sobota i koniec stycznia. Linia wspólnych znajomych moich ślubnych par z pięknych studenckich czasów na krakowskim AWF i facebook oczywiście, zaprowadziły mnie tym razem do Nowej Huty w pobliże Placu Centralnego do mieszkania Oli. Przygotowania rozpoczęliśmy wcześnie rano w mieszczącym się w nowej siedzibie <a href="https://www.facebook.com/Studio-Avangarda-188030214877751/" target="_blank" rel="nofollow">Salonie fryzjerskim Avangarda</a>. To tam powstawały fryzury Oli i jej Mamy. Gdy welon wylądował już na swoim miejscu, przenieśliśmy się do mieszkania, gdzie po odnalezieniu odpowiedniego światła, mejkapowe czary rozpoczęła <a href="https://www.facebook.com/iwonamiernikmakeup" target="_blank" rel="nofollow">Iwona Miernik</a>. Makijaż jak zawsze udał się doskonale. W tak zwanym międzyczasie odwiedziłem Tomka w jego mieszkaniu na osiedlu Górali. Krótkie pozycjonowanie muchy i powrót do Oli na pozostałą część przygotowań. Dalej klasycznie, przywitanie i gorący pocałunek, błogosławieństwo rodziców i sporo emocji w powietrzu. Chwilę później byliśmy już w <a href="https://www.szklanedomy.cystersi.pl/" target="_blank" rel="nofollow">Kościele pw. Matki Bożej Częstochowskiej w Krakowie na osiedlu Szklane Domy</a>. Ksiądż przywitał młodych w zakrystii, wprowadził do ołtarza, wygłosił kazanie i doprowadził ceremonię do najważniejszego momentu, czyli sakramentalnego TAK.'
                    }
                    entryContentP2={
                        'Pomimo nienajwyższej temperatury udało nam się namówić gości na zdjęcie grupowe pod kościołem. Następnie autostradą pojechaliśmy prosto do <a href="https://www.uniedzwiedzia.pl/" target="_blank" rel="nofollow">Domu Weselnego "U Niedźwiedzia"</a>. Rodzice przywitali młodych chlebem i solą, kieliszki tradycyjnie już przeszły do historii, a Tomek przeniósł Olę przez próg restauracji. Obiadek, deser i pierwszy taniec, który otworzył parkiet dla pozostałych gości. <a href="https://www.magicznanoc.pl/" target="_blank" rel="nofollow">DJ Kacper i Wodzirej Tomek czyli Magiczna Noc</a> zapewnili obsługę muzyczną na najwyższym poziomie, jak w reklamie zamieniając marzenia w rzeczywistość. Za dużą ilość zabaw, atrakcji, gadżetów, super oświetlenie sali kredyt należy się właśnie im. Zrobiliśmy zdjęcia grupowe i kilka gorących klatek oświetlonych dla odmiany zimnymi ogniami. Zabawa trwała do białego rana i było miło kolekcjonować te chwile, zapisując kolejne klatki na kartach pamięci w moich aparatach. Olu i Tomku wielkie dzięki, że mogłem być Waszym gościem. Zapraszam do oglądania zdjęć, a po więcej do strefy klienta. Hasło znajdziecie na mojej wizytówce, a wizytówki można było tradycyjne już odnaleźć przy ekspresie do kawy...'
                    }
                    slug={"zimowy-slub-w-kosciele-na-szklanych-domach-nowa-huta-krakow"}
                    title={"ZIMOWY ŚLUB W KOŚCIELE NA SZKLANYCH DOMACH, NOWA HUTA, KRAKÓW - OLA i TOMEK"}
                    tags={"Zimowy ślub Kraków, Kościół na Szkanych Domach, reportaż ślubny Nowa Huta"}
                    date={"27 grudnia 2016"}
                    menuNames={"OLA i TOMEK"}
                    menuTitle={"ZIMOWY ŚLUB W KOŚCIELE NA SZKLANYCH DOMACH, NOWA HUTA, KRAKÓW"}
                    leadNames={"KINGA i MACIEK"}
                    leadTitle={"DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA"}
                    leadUrl={"/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada"}
                    leadImage={process.env.staticImagesPath + "dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
