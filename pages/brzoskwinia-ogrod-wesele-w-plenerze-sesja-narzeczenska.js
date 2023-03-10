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
            headTitle={"Brzoskwinia ogr??d, wesele w plenerze, sesja narzecze??ska"}
            headDescription={"Sesja narzecze??ska w Brzoskwinia Ogr??d, wesele w plenerze, ??lubna sesja zdj??ciowa jesieni??. Fotografem ??lubnym zosta??em, ??eby robi?? w??a??nie takie zdj??cia. Zapraszam na bloga..."}
            headKeywords={"sesja narzecze??ska w Brzoskwinia Ogr??d, wesele w plenerze, ??lubna sesja zdj??ciowa jesieni??"}
            headUrl={"https://99foto.pl/brzoskwinia-ogrod-wesele-w-plenerze-sesja-narzeczenska"}
            entryContentP1={
                "Moment w ??yciu ka??dego m????czyzny, ??e w lekkim stresie, przeszukuj??c kieszenie w poszukiwaniu brylant??w, oczekuje na magiczne s??owo TAK. Jest to z pewno??ci?? rozpocz??cie nowego etapu w ??yciu zakochanych os??b, kt??ry opr??cz nowych zobowi??za?? zapewnia miliony niezapomnianych wspomnie??, kt??re warto przy pomocy zdj???? zachowa?? na d??u??ej. Tylko w ten spos??b poka??ecie swoim dzieciom, a w przysz??o??ci mo??e nawet wnukom jak wygl??da??y pocz??tki Waszej mi??o??ci. Przygotowania do Waszego ??lubu to d??uga droga i nie znam osoby, kt??ra nie chcia??aby przeby?? tej drogi w mo??liwie idealny spos??b. Decyzje, kt??re musicie podj???? na tej drodze, te dotycz??ce sali weselnej, zespo??u czy DJ-ja, fotografa, sukni ??lubnej to tylko cz?????? wa??nych spraw na Waszej li??cie. Bardzo cz??sto d??????c do tego idealnego ??lubu Pary M??ode decyduj?? si?? na sesj?? narzecze??sk??, kt??ra jest doskona??ym uzupe??nieniem reporta??u ??lubnego. Dziewczyny, przekonuj??c narzeczonego, ??e sesja narzecze??ska to jest nie taki g??upi pomys??, nie zapomnijcie wspomnie??, ??e zdj??cia z takiej sesji mo??na wykorzysta?? na wiele spos??b. Mog?? one by?? doskona??ym prezentem dla rodzic??w w trakcie podzi??kowa??, elementem wystroju sali weselnej czy pos??u??y?? jako dekoracja zaprosze?? ??lubnych. Nie zapomnijcie r??wnie?? wspomnie?? o tym, ??e zdj??cia te b??d?? dla Was wyj??tkow?? pami??tk??, pozwol?? przyzwyczai?? si?? do obecno??ci fotografa podczas sesji ??lubnej i zbuduj?? Wasz?? naturalno???? i pewno???? siebie podczas sesji."
            }
            entryContentP2={
                'Sesja narzecze??ska to naprawd?? doby czas, na luzie, w wygodnych strojach, bez wielkiego kombinowania z makija??em czy fryzur??. Licz?? si?? tutaj Wasze uczucia, odrobina s??o??ca i fajne miejsce takie jak na przyk??ad <a href="https://brzoskwiniaogrod.com/" target="_blank" rel="nofollow">Brzoskwinia Ogr??d</a> po??o??ony blisko Krakowa. Sprawy te gwarantuj?? sukces sesji narzecze??skiej. Warto pami??ta??, ??e sesja narzecze??ska jest dla ka??dej pary i w ka??dym wieku. Nie musicie wcale planowa?? ??lubu, mo??ecie te?? mie?? go ju?? za sob??. Gdyby uda??o si?? Wam przekona?? Waszych m????czyzn o niebywa??ej konieczno??ci wykonania sesji narzecze??skiej nie zapomnijcie napisa?? do mnie. Bardzo ch??tnie Was sfotografuje. Serdecznie zapraszam.'
            }
            slug={"brzoskwinia-ogrod-wesele-w-plenerze-sesja-narzeczenska"}
            title={"BRZOSKWINIA OGR??D, WESELE W PLENERZE, SESJA NARZECZE??SKA - WIKTORIA i KONRAD"}
            tags={"sesja narzecze??ska w Brzoskwinia Ogr??d, wesele w plenerze, ??lubna sesja zdj??ciowa jesieni??"}
            date={"5 lipca 2021"}
            menuNames={"WIKTORIA i KONRAD"}
            menuTitle={"BRZOSKWINIA OGR??D, WESELE W PLENERZE, SESJA NARZECZE??SKA"}
            leadNames={"KAMILA i ADRIAN"}
            leadTitle={"FOTOGRAF NA WESELE RABKA ZDR??J, KO??CI???? ??W. MARII MAGDALENY"}
            leadUrl={"/fotograf-na-wesele-rabka-zdroj-kosciol-sw-marii-magdaleny"}
            leadImage={process.env.staticS3ImagesPath + "fotograf_na_slub_rabka_zdroj_start.webp"}
        />
    );
};

export default BlogPageComponent;
