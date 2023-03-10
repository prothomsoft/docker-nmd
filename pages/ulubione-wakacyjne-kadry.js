import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0000.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0002.webp", height: 790 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2014/09/ulubione_wakacyjne_kadry_0038.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "ulubione_wakacyjne_kadry_start.webp"}
                    images={images}
                    headTitle={"Zdj??cia rodzinne Krak??w"}
                    headDescription={"Kilka zdj???? z wakacji, na kt??re w tym roku udali??my si?? do Wroc??awia. Pi??kne miasto i m??j ulubiony Ostr??w Tumski oraz Ogr??d Japo??ski. Mi??ego ogl??dania."}
                    headKeywords={"fotograf rodzinny krak??w, zdj??cia z wakacji"}
                    headUrl={"https://99foto.pl/ulubione-wakacyjne-kadry"}
                    entryContentP1={
                        "Pierwszy etap naszej wyprawy to Wroc??aw. Przez moment mieli??my ju?? nie jecha?? dalej, gdy?? wujek zorganizowa?? pla???? w pokoju jadalnym &#8211; by?? namiot, woda i nawet s??o??ce. Misio zmieni?? fryzur??, a my zwiedzili??my Hal?? Ludow??, gdzie trwa??y przygotowania do koncertu M??skie Granie, Politechnik?? i Plac Grunwaldzki. Pierwszy przystanek kolejnego etapu podr????y to Malta (ta w Poznaniu). Dalej pojechali??my na Stare Drawsko podziwia?? jeziora, kt??re wcze??niej ogl??da??em na google i zapowiada??y si?? very nice. Do D??bek wjechali??my o 19:30 prosto na pla???? i prosto na zach??d s??o??ca."
                    }
                    entryContentP2={
                        "Natomiast po ponad tygodniu poza domem, wyruszyli??my lizn???? wisienki na torcie, wydarzenia roku, ??lubu Karoliny i Marka z wielk?? czekoladow?? fontann??. Po drodze, zatrzymali??my si?? w Borsku w restauracji Largo po??o??onej nad brzegiem jeziora w lesie pe??nym grzyb??w i prostych jak drut drzew. Wzruszenia, Micha?? ??wieczki w oczach non stop, du??o dobrej zabawy i dobrego mas??a z pierwszej r??ki. I to ju?? wszystkie zdj??cia z wakacji, dopiero za rok b??dzie wi??cej. Mi??ego ogl??dania."
                    }
                    slug={"ulubione-wakacyjne-kadry"}
                    title={"ULUBIONE WAKACYJNE KADRY - MICHA?? i MARTUSIA"}
                    tags={"fotograf rodzinny krak??w, zdj??cia z wakacji"}
                    date={"3 listopada 2017"}
                    menuNames={"MICHA?? i MARTUSIA"}
                    menuTitle={"ULUBIONE WAKACYJNE KADRY"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJ??CIA ??LUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={process.env.staticS3ImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
