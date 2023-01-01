import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

        let images = [
        { imageSrc: "/static/blog/2019/02/slub_zima_0001.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0010.webp", height: 806 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0004.webp", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0002.webp", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0012.webp", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0003.webp", height: 806 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0007.webp", height: 763 },                
        { imageSrc: "/static/blog/2019/02/slub_zima_0011.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0006.webp", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0005.webp", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0009.webp", height: 763 },                        
        { imageSrc: "/static/blog/2019/02/slub_zima_0008.webp", height: 762 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0014.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0015.webp", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0016.webp", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0017.webp", height: 566 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0019.webp", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0020.webp", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0018.webp", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0021.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0022.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0024.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0023.webp", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0027.webp", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0026.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0028.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0025.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0029.webp", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0030.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0031.webp", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0032.webp", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0033.webp", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0034.webp", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0035.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0036.webp", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0037.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0038.webp", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0042.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0039.webp", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0040.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0041.webp", height: 527 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0043.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0044.webp", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0045.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0046.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0047.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0049.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0048.webp", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0050.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0051.webp", height: 850 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0052.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0053.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0054.webp", height: 763 },                
        { imageSrc: "/static/blog/2019/02/slub_zima_0057.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0058.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0059.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0060.webp", height: 526 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0061.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0062.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0063.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0064.webp", height: 762 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0065.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0066.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0067.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0068.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0069.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0070.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0071.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0072.webp", height: 850 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0073.webp", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0074.webp", height: 566 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0075.webp", height: 382 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0076.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0077.webp", height: 762 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0078.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0079.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0080.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0081.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0082.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0083.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0084.webp", height: 762 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0086.webp", height: 382 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0085.webp", height: 763 },     
        { imageSrc: "/static/blog/2019/02/slub_zima_0087.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0089.webp", height: 850 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0088.webp", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0090.webp", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0091.webp", height: 762 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0092.webp", height: 382 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0093.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0094.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0095.webp", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0096.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0097.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0098.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0099.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0100.webp", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0101.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0102.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0103.webp", height: 851 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0104.webp", height: 382 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0105.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0106.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0107.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0108.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0109.webp", height: 762 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0111.webp", height: 762 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0112.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0113.webp", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0114.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0115.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0116.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0117.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0118.webp", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0119.webp", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0110.webp", height: 763 }];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "slub_zima.webp"}
                    images={images}
                    headTitle={"Jak zaplanować i zorganizować wymarzony ślub w zimie"}
                    headDescription={"Odpowiedzi na pytania jak zaplanować ślub w zimie i jak taki wymarzony ślub zorganizować znajdziesz zaglądając na bloga. Zimowy ślub Marty i Michała. Zapraszam."}
                    headKeywords={"zdjecia slubne zima, zimowa suknia ślubna, zimowe dekoracje weselne, ślub w lutym"}
                    headUrl={"https://99foto.pl/jak-zaplanowac-i-zorganizowac-wymarzony-slub-w-zimie"}
                    entryContentP1={
                        'Perfekcyjnie zorganizowany ślub Marty i Michała, który miałem przyjemność fotografować w ubiegłą sobotę w miejscu dość odległym od Krakowa zainspirował mnie do zanotowania kilku spostrzeżeń w temacie jak zaplanować ślub w zimie i jak taki wymarzony ślub zorganizować. Obserwując branże ślubną w Polsce zauważymy, że ślub w styczniu czy też ślub w lutym nie jest już niczym niezwykłym. Rosnąca liczba nowożeńców, którzy chcą powiedzieć sakramentalne "TAK" korzystając z zimowej i świątecznej aury coraz częściej powoduje konieczność organizacji ślubów nawet w miesiącu grudniu. Ślub Marty i Michała jako jeden z wielu udowadnia, że ślub zimą odpowiednio przygotowany może być fantastycznym przeżyciem, którego oprawę tworzą pełne świątecznych ozdób i ciepłych światełek choinki, biały puszysty śnieg, sople lodu mieniące się w słońcu tysiącem kolorów, a nawet mróz który maluje policzki zaproszonych gości.'
                    }
                    entryContentP2={
                        "Długo można wymieniać argumenty, które powinny przekonać każdego z Was do organizacji wymarzonego ślubu w zimie. Będą to oszczędności w Waszej kieszeni, bo przecież sala, zespół i fotograf oferują swoje usługi w znacznie niższych cenach. Kilka kresek poniżej zera pomoże zatrzymać gości weselnych na parkiecie i skrócić czas przerw na papieroska. Nie bez znaczenia jest też możliwość zorganizowania ekstra atrakcji takich jak ognisko w lesie, kulig saniami czy też sztuczne ognie - takie tam odniesienie do góralskich klimatów. Pozostają jeszcze pytania z cyklu - wesele zimą jak mam się ubrać? Otóż planując stylizacje na wesele zimą Pan Młody nie powinien zapomnieć o płaszczu,  który mogłyby być wełniany do kolan i oczywiście odpowiednio ciepłych butach. Podobne wymagania obowiązują podczas zimowych plenerów ślubnych. Sukienka na zimowe wesele to również długi temat, który z uwagi na jego złożoność pozostawię bez odpowiedzi. Warto na pewno pomyśleć o bolerku ślubnym na zimę i parze szpilek na zmianę, szpilek w których będziecie mogły przetańczyć całą noc.  Nie zapomnijcie też zadbać o zimowy wystrój sali weselnej, pamiętajcie o bukietach z kolorowych kwiatów i unikalnych dekoracjach na stołach przy których będą się bawić Wasi gości. Mam nadzieję, że Was przekonałem i spotkamy się na zimowym ślubie już w nadchodzącym sezonie. Tymczasem zapraszam do obejrzenia kilku zdjęć z zimowego ślubu Marty i Michała. Miłego oglądania."
                    }
                    slug={"jak-zaplanowac-i-zorganizowac-wymarzony-slub-w-zimie"}
                    title={"JAK ZAPLANOWAĆ I ZORGANIZOWAĆ WYMARZONY ŚLUB W ZIMIE - MARTA i MICHAŁ"}
                    tags={"zdjecia slubne zima, zimowa suknia ślubna, zimowe dekoracje weselne, ślub w lutym"}
                    date={"6 lutego 2019"}
                    menuNames={"MARTA i MICHAŁ"}
                    menuTitle={"JAK ZAPLANOWAĆ I ZORGANIZOWAĆ WYMARZONY ŚLUB W ZIMIE"}
                    leadNames={"NATALIA i ŁUKASZ"}
                    leadTitle={"POMYSŁ NA SESJĘ ZIMOWĄ W KRAKOWIE - DWÓR JANA MATEJKI"}
                    leadUrl={"/pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki"}
                    leadImage={process.env.staticImagesPath + "pomysl_na_sesje_slubna_zimowa_w_krakowie.webp"}
                />
            
        );
};

export default BlogPageComponent;
