import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0003.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0034.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0029.webp", height: 762 },           
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0006.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0021.webp", height: 762 },           
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0009.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0023.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0020.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0012.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0015.webp", height: 762 },   
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0035.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0011.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0037.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0017.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0027.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0026.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0025.webp", height: 763 }, 
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0030.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0028.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0033.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0040.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0036.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0022.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0007.webp", height: 762 },   
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0039.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2021/11/sesja_slubna_park_mogilany_0019.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "plener_slubny_park_mogilany.webp"}
                    images={images}
                    headTitle={"Wymarzony Plener ??lubny w Krakowie - Sprawdzone Miejsca"}
                    headDescription={"Plener ??lubny w Krakowie, magiczne drzewa w Parku w Mogilanach i Opactwo Tynieckie w promieniach zachodz??cego s??o??ca. Plener ??lubny zakochanej pary w Krakowie. Zapraszam na bloga."}
                    headKeywords={"plener ??lubny w Krakowie, Park Mogilany, Opactwo Benedyktyn??w Tyniec, sprawdzone miejsce plenerowe"}
                    headUrl={"https://99foto.pl/wymarzony-plener-slubny-w-krakowie-sprawdzone-miejsca"}
                    entryContentP1={
                        'Tomku pytaj??, jak zaplanowa?? i przygotowa?? najpi??kniejsz?? ??lubn?? sesj?? plenerow?? lub w skr??cie plener ??lubny. Sesja plenerowa jest bardzo wa??na dla nas m??wi?? i mogliby??my zrobi?? kilka zdj???? w dniu ??lubu, ale zostawia?? go??ci bez naszego towarzystwa - s??abo, um??wmy si?? wi??c na spokojnie, najlepiej kilka dni po uroczysto??ci. Gdyby?? jakie?? miejsca m??g?? nam zaproponowa??, bo my si?? nie znamy, a Ty tych plener??w to ju?? troch?? zrobi??e?? i pewnie ogarniasz jakie?? dobre miejsc??wki. Takie tam z ??ycia wzi??te dyskusje i rzeczywi??cie mam swoje ulubione lokalizacje w Krakowie i bliskich okolicach. Dzisiaj wspomn?? tylko o jednym z mo??liwych scenariuszy. Pierwszy z nich to spotkanie w Parku w Mogilanach. Miejsce to jest niezwykle popularne i robi??c tam sesj?? plenerow?? popo??udniow?? por?? w s??oneczny dzie??, zwykle spotyka si?? inne Pary ??lubne, kt??re r??wnie?? robi?? swoje sesje ??lubne. Mocn?? stron?? tego miejsca jest zachodz??ce z odpowiedniej strony s??o??ce, zawsze zadbana ziele?? i bia??e ??ciany dworu, kt??ry w chwili obecnej wymaga ma??ej renowacji, ale nadal ma sw??j klimat, widok na Tatry i cudowne drzewa, kt??re tak naprawd?? tworz?? magi?? tego miejsca.'
                    }
                    entryContentP2={
                        'Dodajmy jeszcze brak op??at za wykonywanie zdj???? i mamy miejsc??wk?? idealn??. Gdyby zabrak??o nam pomys????w na kadry w tym miejscu to zawsze w dwadzie??cia minut mo??emy podjecha?? do Opactwa Benedyktyn??w w Ty??cu. Mamy tam do dyspozycji, a?? trzy mo??liwo??ci. Pierwsza to ska??ki, po??o??one za Opactwem i teren bezpo??rednio przy Wi??le, w kt??rej cz??sto pojawiaj?? si?? mroczne mg??y, w godzinach porannych oczywi??cie. Drugie miejsce to dziedziniec Opactwa Benedyktyn??w w Ty??cu, gdzie mo??na wymy??li?? kilka ciekawych kadr??w. Trzecia mo??liwo???? wymagaj??ca um??wienia si?? z bra??mi to Ogrody Tynieckie znajduj??ce si?? za bramami Opactwa (by??em, widzia??em, warto wej????). Ania by??a zdecydowana na sesj?? plenerow?? w Dworze w Mogilanach, do??o??yli??my do tego zach??d s??o??ca w Opactwie Benedyktyn??w w Ty??cu i zdj??cia z naszej sesji zdj??ciowej mo??ecie zobaczy?? na blogu. Zapraszam do lajkowania, udost??pniania i na zdj??cia poni??ej z kt??rych jestem wyj??tkowo zadowolony. ??ycz?? mi??ego ogl??dania i ju?? nied??ugo sezon ??lubny si?? ko??czy wi??c na blogu pojawi si?? wi??cej zdj???? z wakacyjnych reporta??y ??lubnych.'
                    }
                    slug={"wymarzony-plener-slubny-w-krakowie-sprawdzone-miejsca"}
                    title={"WYMARZONY PLENER ??LUBNY W KRAKOWIE, SPRAWDZONE MIEJSCA - ANNA i TOMASZ"}
                    tags={"plener ??lubny w Krakowie, Park Mogilany, Opactwo Benedyktyn??w Tyniec, sprawdzone miejsce plenerowe"}
                    date={"02 listopada 2021"}
                    menuNames={"ANNA I TOMASZ"}
                    menuTitle={"WYMARZONY PLENER ??LUBNY W KRAKOWIE, SPRAWDZONE MIEJSCA"}
                    leadNames={"WIKTORIA i KONRAD"}
                    leadTitle={"BRZOSKWINIA OGR??D, WESELE W PLENERZE, SESJA NARZECZE??SKA"}
                    leadUrl={"/brzoskwinia-ogrod-wesele-w-plenerze-sesja-narzeczenska"}
                    leadImage={process.env.staticS3ImagesPath + "brzoskwinia_ogrod_sesja_narzeczenska_start.webp"}
                />
            
        );
};

export default BlogPageComponent;