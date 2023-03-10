import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0005.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0017.webp", height: 567 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0021.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0009.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0013.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0019.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_slubna_zielonym_szlakiem_na_popradzki_staw_0003.webp", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja-slubna-zielonym-szlakiem-na-popradzki-staw-start.webp"}
                    images={images}
                    headTitle={"Sesja ??lubna - zielonym szlakiem na Popradzki Staw"}
                    headDescription={
                        "Sesja ??lubna Krystyny i Piotra w wymarzonym miejscu, kt??rym jest Popradzki Staw i Szczyrbskie Jezioro. Plener na S??owacji to ??wietne miejsce na zdj??cia, polecam bardziej ni?? nasze Tatry."
                    }
                    headKeywords={"sesja ??lubna Popradzki Staw, plener na S??owacji, zdj??cia nad Szczyrbskim Jeziorem"}
                    headUrl={"https://99foto.pl/sesja-slubna-zielonym-szlakiem-na-popradzki-staw"}
                    entryContentP1={
                        "Reporta?? ??lubny to dla ka??dego pocz??tkuj??cego fotografa szansa na udokumentowanie przygotowa??, ceremoni i zabawy weselnej. Bardzo cz??sto skupienie si?? na wykonaniu kadr??w klasycznych, koniecznych i wymaganych, blokuje kreatywno???? nie pozwalaj??c na postawienie kroku dalej i opuszczenie strefy komfortu. Wraz z nabywanym do??wiadczeniem fotografia ??lubna nabiera innego, reporta??owego wymiaru, tak zwane ??elazne kadry mamy w jednym palcu i chcemy i???? dalej. D????ymy do tego by reporterskie podej??cie do fotografii prowadzi??o nas do najmniej ustawianych, re??yserowanych zdj????, a jak najwi??kszej ilo???? kadr??w przedstawiaj??cych emocje i spontaniczne reakcje. Analogi?? do tego mo??na odnale???? podczas wykonywania plener??w ??lubnych i zastanowi?? si?? czy taka sesja zdj??ciowa nie powinna na zdj??ciach przekaza?? u??amka osobowo??ci os??b fotografowanych. Ten rok i nasze wsp??lne plenery ??lubne b??d?? sta??y pod znakiem takiego wyzwania. Starannie wyszukane miejsca i ciekawy obrazek jak najbardziej, ale na pierwszym miejscu emocje i ??ywe reakcje."
                    }
                    entryContentP2={
                        "Ko??cz??c ju?? ten manifest nadchodz??cych zmian, chc?? zaprosi?? Was na spacer do dw??ch tatrza??skich staw??w po s??owackiej stronie Tatr. Szczyrbskie Jezioro to najwy??ej po??o??ona miejscowo???? tatrza??ska i pocz??tek naszej wyprawy. Popradzki Staw, powa??na konkurencja dla tatrza??skiego Morskiego Oka, to punkt docelowy. Oba te miejsca ????czy pe??en atrakcji i niesamowitej przyrody zielony szlak. D??ugie rozmowy, poszukiwanie wartych sfotografowania miejsc, hu??tawka pogodowa typowa w g??rach. Blisko pi???? godzin spacerowania w przemi??ym towarzystwie Krysi i Piotrka. Serdecznie zapraszam do ogl??dania zdj????, a poniewa?? wakacje w??a??nie wystartowa??y to spakujcie plecaki i wybierzcie si?? w te pi??kne miejsca na cudowny d??ugi spacer. Mi??ego ogl??dania."
                    }
                    slug={"sesja-slubna-zielonym-szlakiem-na-popradzki-staw"}
                    title={"SESJA ??LUBNA - ZIELONYM SZLAKIEM NA POPRADZKI STAW - KRYSTYNA i PIOTR"}
                    tags={"sesja ??lubna Popradzki Staw, plener na S??owacji, zdj??cia nad Szczyrbskim Jeziorem"}
                    date={"1 lipca 2018"}
                    menuNames={"KRYSTYNA i PIOTR"}
                    menuTitle={"SESJA ??LUBNA - ZIELONYM SZLAKIEM NA POPRADZKI STAW"}
                    leadNames={"KINGA i MATEUSZ"}
                    leadTitle={"FOTOGRAF ??LUBNY SUCHA BESKIDZKA, MAGNOLIA BUDZ??W"}
                    leadUrl={"/fotograf-slubny-sucha-beskidzka-magnolia-budzow"}
                    leadImage={process.env.staticS3ImagesPath + "fotograf-slubny-magnolia-budzow-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
