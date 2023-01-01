import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
    let images = [
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0001.webp", height: 762 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0002.webp", height: 851 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0003.webp", height: 762 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0008.webp", height: 852 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0005.webp", height: 762 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0006.webp", height: 851 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0007.webp", height: 762 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0029.webp", height: 852 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0009.webp", height: 762 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0032.webp", height: 527 },     
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0016.webp", height: 762 }, 
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0030.webp", height: 526 }, 
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0011.webp", height: 851 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0012.webp", height: 762 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0013.webp", height: 851 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0014.webp", height: 527 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0015.webp", height: 851 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0010.webp", height: 762 },       
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0017.webp", height: 851 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0018.webp", height: 526 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0025.webp", height: 851 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0027.webp", height: 527 }, 
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0020.webp", height: 852 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0021.webp", height: 526 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0022.webp", height: 852 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0023.webp", height: 526 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0024.webp", height: 851 },      
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0026.webp", height: 526 },      
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0028.webp", height: 526 },
        { imageSrc: process.env.staticS3ImagesPath + "blog/2021/08/brzoskwinia_ogrod_sesja_narzeczenska_0004.webp", height: 851 }       
       
    ];

    return (
        <BlogPageComponentNew
            slide={process.env.staticS3ImagesPath + "brzoskwinia_ogrod_sesja_narzeczenska_start.webp"}
            images={images}
            headTitle={"Brzoskwinia ogród, wesele w plenerze, sesja narzeczeńska"}
            headDescription={"Sesja narzeczeńska w Brzoskwinia Ogród, wesele w plenerze, ślubna sesja zdjęciowa jesienią. Fotografem ślubnym zostałem, żeby robić właśnie takie zdjęcia. Zapraszam na bloga..."}
            headKeywords={"sesja narzeczeńska w Brzoskwinia Ogród, wesele w plenerze, ślubna sesja zdjęciowa jesienią"}
            headUrl={"https://99foto.pl/brzoskwinia-ogrod-wesele-w-plenerze-sesja-narzeczenska"}
            entryContentP1={
                "Moment w życiu każdego mężczyzny, że w lekkim stresie, przeszukując kieszenie w poszukiwaniu brylantów, oczekuje na magiczne słowo TAK. Jest to z pewnością rozpoczęcie nowego etapu w życiu zakochanych osób, który oprócz nowych zobowiązań zapewnia miliony niezapomnianych wspomnień, które warto przy pomocy zdjęć zachować na dłużej. Tylko w ten sposób pokażecie swoim dzieciom, a w przyszłości może nawet wnukom jak wyglądały początki Waszej miłości. Przygotowania do Waszego ślubu to długa droga i nie znam osoby, która nie chciałaby przebyć tej drogi w możliwie idealny sposób. Decyzje, które musicie podjąć na tej drodze, te dotyczące sali weselnej, zespołu czy DJ-ja, fotografa, sukni ślubnej to tylko część ważnych spraw na Waszej liście. Bardzo często dążąc do tego idealnego ślubu Pary Młode decydują się na sesję narzeczeńską, która jest doskonałym uzupełnieniem reportażu ślubnego. Dziewczyny, przekonując narzeczonego, że sesja narzeczeńska to jest nie taki głupi pomysł, nie zapomnijcie wspomnieć, że zdjęcia z takiej sesji można wykorzystać na wiele sposób. Mogą one być doskonałym prezentem dla rodziców w trakcie podziękowań, elementem wystroju sali weselnej czy posłużyć jako dekoracja zaproszeń ślubnych. Nie zapomnijcie również wspomnieć o tym, że zdjęcia te będą dla Was wyjątkową pamiątką, pozwolą przyzwyczaić się do obecności fotografa podczas sesji ślubnej i zbudują Waszą naturalność i pewność siebie podczas sesji."
            }
            entryContentP2={
                'Sesja narzeczeńska to naprawdę doby czas, na luzie, w wygodnych strojach, bez wielkiego kombinowania z makijażem czy fryzurą. Liczą się tutaj Wasze uczucia, odrobina słońca i fajne miejsce takie jak na przykład <a href="https://brzoskwiniaogrod.com/" target="_blank" rel="nofollow">Brzoskwinia Ogród</a> położony blisko Krakowa. Sprawy te gwarantują sukces sesji narzeczeńskiej. Warto pamiętać, że sesja narzeczeńska jest dla każdej pary i w każdym wieku. Nie musicie wcale planować ślubu, możecie też mieć go już za sobą. Gdyby udało się Wam przekonać Waszych mężczyzn o niebywałej konieczności wykonania sesji narzeczeńskiej nie zapomnijcie napisać do mnie. Bardzo chętnie Was sfotografuje. Serdecznie zapraszam.'
            }
            slug={"brzoskwinia-ogrod-wesele-w-plenerze-sesja-narzeczenska"}
            title={"BRZOSKWINIA OGRÓD, WESELE W PLENERZE, SESJA NARZECZEŃSKA - WIKTORIA i KONRAD"}
            tags={"sesja narzeczeńska w Brzoskwinia Ogród, wesele w plenerze, ślubna sesja zdjęciowa jesienią"}
            date={"5 lipca 2021"}
            menuNames={"WIKTORIA i KONRAD"}
            menuTitle={"BRZOSKWINIA OGRÓD, WESELE W PLENERZE, SESJA NARZECZEŃSKA"}
            leadNames={"KAMILA i ADRIAN"}
            leadTitle={"FOTOGRAF NA WESELE RABKA ZDRÓJ, KOŚCIÓŁ ŚW. MARII MAGDALENY"}
            leadUrl={"/fotograf-na-wesele-rabka-zdroj-kosciol-sw-marii-magdaleny"}
            leadImage={process.env.staticS3ImagesPath + "fotograf_na_slub_rabka_zdroj_start.webp"}
        />
    );
};

export default BlogPageComponent;
