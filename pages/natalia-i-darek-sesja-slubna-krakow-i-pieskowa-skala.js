import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/99FOTOPL_SPP_066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0001.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/99FOTOPL_SPP_101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0020.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0003.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0004.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0005.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0008.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/99FOTOPL_SPP_076.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0014.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0015.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0016.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0018.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0021.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0025.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0026.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0028.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/06/plener_slubny_krakow_0002.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "natalia_i_darek_sesja_slubna_krakow_i_pieskowa_skala_start.webp"}
                    images={images}
                    headTitle={"Sesja ??lubna Pieskowa Ska??a"}
                    headDescription={"Pachn??cy nowo??ci?? po remoncie Zamek w Pieskowej Skale oraz gram Kazimierza. Serdecznie zapraszam na plener ??lubny Natalii i Darka. Mi??ego ogl??dania."}
                    headKeywords={"sesja ??lubna pieskowa ska??a,plener ??lubny krak??w"}
                    headUrl={"https://99foto.pl/natalia-i-darek-sesja-slubna-krakow-i-pieskowa-skala"}
                    entryContentP1={
                        'Zdj??cia Natalii i Darka mieli??cie ju?? okazj?? ogl??da?? przy okazji <a href="https://99foto.pl/natalia-i-dariusz-zdjecia-slubne-w-domu-weselnym-gosciniec-branicki-2/" target="_blank" rel="nofollow">ich ??lubu</a>, kt??ry odby?? si?? w <a href="https://gosciniec-branicki.pl/" target="_blank" rel="nofollow">Domu Weselnym Go??ciniec Branicki</a> ju?? chwil?? temu. Nadszed?? czas na kilka zdj???? z pleneru. Pocz??tkowo planowali??my zrobi?? zdj??cia w O??wi??cimiu, wykorzystuj??c wiosenne okoliczno??ci przyrody, jednak w ko??cu zdecydowali??my si?? na naprawd?? ??wietne miejsce jakim jest po??o??ony niedaleko od Krakowa, pachn??cy nowo??ci?? po remoncie <a href="https://pieskowaskala.eu/" target="_blank" rel="nofollow">Zamek w Pieskowej Skale</a>. Mieli??my ??wietn?? pogod?? i wymarzone dla zdj???? ??wiat??o.'
                    }
                    entryContentP2={
                        'Tym razem nie po raz pierwszy zdj??cia robi??y si?? same. Natalia i Darek ??wietnie sprawdzili si?? w roli modeli, pe??ny luz, du??o u??miechu i oczywi??cie jak to na sesji ??lubnej buziak??w. Nasz?? sesj?? plenerow?? kontynuowali??my w Krakowie. Do wyboru by?? Rynek G????wny, Wawel i Kazimierz &#8211; bez wahania wybrali??my Kazimierz. Na Kazimierzu odwiedzili??my K??adk?? Bernadk??, Star?? Zajezdni??, Pub Stajni?? i restauracj?? <a href="https://www.placnowy1.pl/" target="_blank" rel="nofollow">Plac Nowy 1</a>. Na koniec obgadali??my plany na ??wiatowy Dzie?? M??odzie??y i wyruszyli??my do dom??w. Mi??ego ogl??dania.'
                    }
                    slug={"natalia-i-darek-sesja-slubna-krakow-i-pieskowa-skala"}
                    title={"SESJA ??LUBNA KRAK??W I PIESKOWA SKA??A - NATALIA i DAREK"}
                    tags={"sesja ??lubna pieskowa ska??a,plener ??lubny krak??w"}
                    date={"14 czerwca 2016"}
                    menuNames={"NATALIA i DAREK"}
                    menuTitle={"SESJA ??LUBNA KRAK??W I PIESKOWA SKA??A"}
                    leadNames={"ALINA i JANUSZ"}
                    leadTitle={"ZDJ??CIA ??LUBNE JORDAN??W, DWOREK FANTAZJA"}
                    leadUrl={"/alina-i-janusz-zdjecia-slubne-jordanow-dworek-fantazja"}
                    leadImage={process.env.staticS3ImagesPath + "alina_i_janusz_zdjecia_slubne_jordanow_dworek_fantazja_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
