import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0002.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0004.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0006.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0009.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0011.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0012.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0014.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0015.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0016.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0018.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0026.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0024.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "ogrod_botaniczny.webp"}
                    images={images}
                    headTitle={"Ogr??d Botaniczny w Krakowie, ??lubna sesja zdj??ciowa Krak??w"}
                    headDescription={"Ogr??d Botaniczny w Krakowie, ??lubna sesja zdj??ciowa Dajany i Sylwestra. Sierpniowe s??o??ce i ogrom emocji. Na sesje tylko Krak??w. Zapraszam do ogl??dania."}
                    headKeywords={"Ogr??d Botaniczny w Krakowie, ??lubna sesja zdj??ciowa Krak??w, plener ??lubny w dzie?? po ??lubie"}
                    headUrl={"https://99foto.pl/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
                    entryContentP1={
                        "Sierpie?? to miesi??c magiczny, zachodz??ce s??o??ce, kt??rego ostatnio nam wszystkim nie brakuje z ka??dego miejsca na ziemi z ??atwo??ci?? tworzy niezapomniane obrazki. W jeden z takich idealnie upolowanych dni spotkali??my si?? z Dajan?? i Sylwestrem na ??lubnej sesji zdj??ciowej w Ogrodzie Botanicznym w Krakowie. Miejsce to odwiedzam systematycznie, nie tylko z parami, kt??rym robi?? zdj??cia plenerowe, ale r??wnie?? z Micha??em, Mart?? i Jackiem moimi dzieciakami, kt??re uwielbiaj?? spacerowa?? po pe??nych zieleni alejkach. A to wszystko w sercu naszego pi??knego miasta Krakowa. Ogr??d Botaniczny przechodzi gruntowne mega pozytywne zmiany i wida?? ogromny post??p w dba??o??ci o szczeg????y, gdy por??wnamy je do stanu obiekt??w Ogrodu Botanicznego sprzed dw??ch lat."
                    }
                    entryContentP2={
                        'Oczywi??cie nie mog??o by?? za ??atwo i na nasz plener nie uda??o si?? nam um??wi?? za pierwszym razem. Ale wiadomo, ??e do trzech razy sztuka, w ko??cu uda??o si?? i mam nadziej??, ??e znajdziecie chwilk?? na ogl??dni??cie zdj????. Nie chc?? si?? powtarza??, ale czasem nie warto pokonywa?? niezliczonej ilo??ci kilometr??w, gdy miejsce gwarantuj??ce ??wietne zdj??cia znajduje si?? pod naszym nosem. Nominuj?? wi??c <a href="https://www.ogrod.uj.edu.pl/" target="_blank" rel="nofollow">Ogr??d Botaniczny w Krakowie</a> na miejsce numer jeden na sierpniowy plener ??lubny. Zapraszam na zdj??cia i ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
                    title={"OGR??D BOTANICZNY W KRAKOWIE, ??LUBNA SESJA ZDJ??CIOWA - DAJANA i SYLWESTER"}
                    tags={"Ogr??d Botaniczny w Krakowie, ??lubna sesja zdj??ciowa Krak??w, plener ??lubny w dzie?? po ??lubie"}
                    date={"23 sierpnia 2018"}
                    menuNames={"DAJANA i SYLWESTER"}
                    menuTitle={"OGR??D BOTANICZNY W KRAKOWIE, ??LUBNA SESJA ZDJ??CIOWA"}
                    leadNames={"MARTA i MARCIN"}
                    leadTitle={"WESELE POD KRAKOWEM, FIRST LOOK NA DACHU WIE??OWCA"}
                    leadUrl={"/tiffany-wola-filipowska-first-look-na-dachu-wiezowca"}
                    leadImage={process.env.staticS3ImagesPath + "restauracja_tiffany_wola_filpowska.webp"}
                />
            
        );
};

export default BlogPageComponent;
