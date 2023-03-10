import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

        let images = [
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0001.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0010.webp", height: 806 },        
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0004.webp", height: 763 },        
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0002.webp", height: 763 },        
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0012.webp", height: 763 },        
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0003.webp", height: 806 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0007.webp", height: 763 },                
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0011.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0006.webp", height: 527 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0005.webp", height: 763 },        
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0009.webp", height: 763 },                        
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0008.webp", height: 762 },        
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0014.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0015.webp", height: 527 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0016.webp", height: 383 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0017.webp", height: 566 },        
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0019.webp", height: 527 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0020.webp", height: 383 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0018.webp", height: 527 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0021.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0022.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0024.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0023.webp", height: 763 },        
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0027.webp", height: 527 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0026.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0028.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0025.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0029.webp", height: 383 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0030.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0031.webp", height: 383 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0032.webp", height: 383 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0033.webp", height: 383 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0034.webp", height: 527 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0035.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0036.webp", height: 383 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0037.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0038.webp", height: 383 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0042.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0039.webp", height: 383 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0040.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0041.webp", height: 527 },        
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0043.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0044.webp", height: 383 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0045.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0046.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0047.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0049.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0048.webp", height: 763 },        
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0050.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0051.webp", height: 850 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0052.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0053.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0054.webp", height: 763 },                
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0057.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0058.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0059.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0060.webp", height: 526 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0061.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0062.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0063.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0064.webp", height: 762 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0065.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0066.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0067.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0068.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0069.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0070.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0071.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0072.webp", height: 850 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0073.webp", height: 383 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0074.webp", height: 566 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0075.webp", height: 382 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0076.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0077.webp", height: 762 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0078.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0079.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0080.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0081.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0082.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0083.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0084.webp", height: 762 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0086.webp", height: 382 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0085.webp", height: 763 },     
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0087.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0089.webp", height: 850 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0088.webp", height: 763 },        
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0090.webp", height: 383 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0091.webp", height: 762 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0092.webp", height: 382 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0093.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0094.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0095.webp", height: 383 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0096.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0097.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0098.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0099.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0100.webp", height: 383 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0101.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0102.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0103.webp", height: 851 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0104.webp", height: 382 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0105.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0106.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0107.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0108.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0109.webp", height: 762 },        
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0111.webp", height: 762 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0112.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0113.webp", height: 383 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0114.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0115.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0116.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0117.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0118.webp", height: 383 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0119.webp", height: 763 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/slub_zima_0110.webp", height: 763 }];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "slub_zima.webp"}
                    images={images}
                    headTitle={"Jak zaplanowa?? i zorganizowa?? wymarzony ??lub w zimie"}
                    headDescription={"Odpowiedzi na pytania jak zaplanowa?? ??lub w zimie i jak taki wymarzony ??lub zorganizowa?? znajdziesz zagl??daj??c na bloga. Zimowy ??lub Marty i Micha??a. Zapraszam."}
                    headKeywords={"zdjecia slubne zima, zimowa suknia ??lubna, zimowe dekoracje weselne, ??lub w lutym"}
                    headUrl={"https://99foto.pl/jak-zaplanowac-i-zorganizowac-wymarzony-slub-w-zimie"}
                    entryContentP1={
                        'Perfekcyjnie zorganizowany ??lub Marty i Micha??a, kt??ry mia??em przyjemno???? fotografowa?? w ubieg???? sobot?? w miejscu do???? odleg??ym od Krakowa zainspirowa?? mnie do zanotowania kilku spostrze??e?? w temacie jak zaplanowa?? ??lub w zimie i jak taki wymarzony ??lub zorganizowa??. Obserwuj??c bran??e ??lubn?? w Polsce zauwa??ymy, ??e ??lub w styczniu czy te?? ??lub w lutym nie jest ju?? niczym niezwyk??ym. Rosn??ca liczba nowo??e??c??w, kt??rzy chc?? powiedzie?? sakramentalne "TAK" korzystaj??c z zimowej i ??wi??tecznej aury coraz cz????ciej powoduje konieczno???? organizacji ??lub??w nawet w miesi??cu grudniu. ??lub Marty i Micha??a jako jeden z wielu udowadnia, ??e ??lub zim?? odpowiednio przygotowany mo??e by?? fantastycznym prze??yciem, kt??rego opraw?? tworz?? pe??ne ??wi??tecznych ozd??b i ciep??ych ??wiate??ek choinki, bia??y puszysty ??nieg, sople lodu mieni??ce si?? w s??o??cu tysi??cem kolor??w, a nawet mr??z kt??ry maluje policzki zaproszonych go??ci.'
                    }
                    entryContentP2={
                        "D??ugo mo??na wymienia?? argumenty, kt??re powinny przekona?? ka??dego z Was do organizacji wymarzonego ??lubu w zimie. B??d?? to oszcz??dno??ci w Waszej kieszeni, bo przecie?? sala, zesp???? i fotograf oferuj?? swoje us??ugi w znacznie ni??szych cenach. Kilka kresek poni??ej zera pomo??e zatrzyma?? go??ci weselnych na parkiecie i skr??ci?? czas przerw na papieroska. Nie bez znaczenia jest te?? mo??liwo???? zorganizowania ekstra atrakcji takich jak ognisko w lesie, kulig saniami czy te?? sztuczne ognie - takie tam odniesienie do g??ralskich klimat??w. Pozostaj?? jeszcze pytania z cyklu - wesele zim?? jak mam si?? ubra??? Ot???? planuj??c stylizacje na wesele zim?? Pan M??ody nie powinien zapomnie?? o p??aszczu,  kt??ry mog??yby by?? we??niany do kolan i oczywi??cie odpowiednio ciep??ych butach. Podobne wymagania obowi??zuj?? podczas zimowych plener??w ??lubnych. Sukienka na zimowe wesele to r??wnie?? d??ugi temat, kt??ry z uwagi na jego z??o??ono???? pozostawi?? bez odpowiedzi. Warto na pewno pomy??le?? o bolerku ??lubnym na zim?? i parze szpilek na zmian??, szpilek w kt??rych b??dziecie mog??y przeta??czy?? ca???? noc.  Nie zapomnijcie te?? zadba?? o zimowy wystr??j sali weselnej, pami??tajcie o bukietach z kolorowych kwiat??w i unikalnych dekoracjach na sto??ach przy kt??rych b??d?? si?? bawi?? Wasi go??ci. Mam nadziej??, ??e Was przekona??em i spotkamy si?? na zimowym ??lubie ju?? w nadchodz??cym sezonie. Tymczasem zapraszam do obejrzenia kilku zdj???? z zimowego ??lubu Marty i Micha??a. Mi??ego ogl??dania."
                    }
                    slug={"jak-zaplanowac-i-zorganizowac-wymarzony-slub-w-zimie"}
                    title={"JAK ZAPLANOWA?? I ZORGANIZOWA?? WYMARZONY ??LUB W ZIMIE - MARTA i MICHA??"}
                    tags={"zdjecia slubne zima, zimowa suknia ??lubna, zimowe dekoracje weselne, ??lub w lutym"}
                    date={"6 lutego 2019"}
                    menuNames={"MARTA i MICHA??"}
                    menuTitle={"JAK ZAPLANOWA?? I ZORGANIZOWA?? WYMARZONY ??LUB W ZIMIE"}
                    leadNames={"NATALIA i ??UKASZ"}
                    leadTitle={"POMYS?? NA SESJ?? ZIMOW?? W KRAKOWIE - DW??R JANA MATEJKI"}
                    leadUrl={"/pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki"}
                    leadImage={process.env.staticS3ImagesPath + "pomysl_na_sesje_slubna_zimowa_w_krakowie.webp"}
                />
            
        );
};

export default BlogPageComponent;
