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
                    headTitle={"Zdjęcia rodzinne Kraków"}
                    headDescription={"Kilka zdjęć z wakacji, na które w tym roku udaliśmy się do Wrocławia. Piękne miasto i mój ulubiony Ostrów Tumski oraz Ogród Japoński. Miłego oglądania."}
                    headKeywords={"fotograf rodzinny kraków, zdjęcia z wakacji"}
                    headUrl={"https://99foto.pl/ulubione-wakacyjne-kadry"}
                    entryContentP1={
                        "Pierwszy etap naszej wyprawy to Wrocław. Przez moment mieliśmy już nie jechać dalej, gdyż wujek zorganizował plażę w pokoju jadalnym &#8211; był namiot, woda i nawet słońce. Misio zmienił fryzurę, a my zwiedziliśmy Halę Ludową, gdzie trwały przygotowania do koncertu Męskie Granie, Politechnikę i Plac Grunwaldzki. Pierwszy przystanek kolejnego etapu podróży to Malta (ta w Poznaniu). Dalej pojechaliśmy na Stare Drawsko podziwiać jeziora, które wcześniej oglądałem na google i zapowiadały się very nice. Do Dąbek wjechaliśmy o 19:30 prosto na plażę i prosto na zachód słońca."
                    }
                    entryContentP2={
                        "Natomiast po ponad tygodniu poza domem, wyruszyliśmy liznąć wisienki na torcie, wydarzenia roku, ślubu Karoliny i Marka z wielką czekoladową fontanną. Po drodze, zatrzymaliśmy się w Borsku w restauracji Largo położonej nad brzegiem jeziora w lesie pełnym grzybów i prostych jak drut drzew. Wzruszenia, Michał świeczki w oczach non stop, dużo dobrej zabawy i dobrego masła z pierwszej ręki. I to już wszystkie zdjęcia z wakacji, dopiero za rok będzie więcej. Miłego oglądania."
                    }
                    slug={"ulubione-wakacyjne-kadry"}
                    title={"ULUBIONE WAKACYJNE KADRY - MICHAŁ i MARTUSIA"}
                    tags={"fotograf rodzinny kraków, zdjęcia z wakacji"}
                    date={"3 listopada 2017"}
                    menuNames={"MICHAŁ i MARTUSIA"}
                    menuTitle={"ULUBIONE WAKACYJNE KADRY"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={process.env.staticS3ImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
