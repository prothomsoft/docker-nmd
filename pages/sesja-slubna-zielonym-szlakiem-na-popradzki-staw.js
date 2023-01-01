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
                    headTitle={"Sesja ślubna - zielonym szlakiem na Popradzki Staw"}
                    headDescription={
                        "Sesja ślubna Krystyny i Piotra w wymarzonym miejscu, którym jest Popradzki Staw i Szczyrbskie Jezioro. Plener na Słowacji to świetne miejsce na zdjęcia, polecam bardziej niż nasze Tatry."
                    }
                    headKeywords={"sesja ślubna Popradzki Staw, plener na Słowacji, zdjęcia nad Szczyrbskim Jeziorem"}
                    headUrl={"https://99foto.pl/sesja-slubna-zielonym-szlakiem-na-popradzki-staw"}
                    entryContentP1={
                        "Reportaż ślubny to dla każdego początkującego fotografa szansa na udokumentowanie przygotowań, ceremoni i zabawy weselnej. Bardzo często skupienie się na wykonaniu kadrów klasycznych, koniecznych i wymaganych, blokuje kreatywność nie pozwalając na postawienie kroku dalej i opuszczenie strefy komfortu. Wraz z nabywanym doświadczeniem fotografia ślubna nabiera innego, reportażowego wymiaru, tak zwane żelazne kadry mamy w jednym palcu i chcemy iść dalej. Dążymy do tego by reporterskie podejście do fotografii prowadziło nas do najmniej ustawianych, reżyserowanych zdjęć, a jak największej ilość kadrów przedstawiających emocje i spontaniczne reakcje. Analogię do tego można odnaleźć podczas wykonywania plenerów ślubnych i zastanowić się czy taka sesja zdjęciowa nie powinna na zdjęciach przekazać ułamka osobowości osób fotografowanych. Ten rok i nasze wspólne plenery ślubne będą stały pod znakiem takiego wyzwania. Starannie wyszukane miejsca i ciekawy obrazek jak najbardziej, ale na pierwszym miejscu emocje i żywe reakcje."
                    }
                    entryContentP2={
                        "Kończąc już ten manifest nadchodzących zmian, chcę zaprosić Was na spacer do dwóch tatrzańskich stawów po słowackiej stronie Tatr. Szczyrbskie Jezioro to najwyżej położona miejscowość tatrzańska i początek naszej wyprawy. Popradzki Staw, poważna konkurencja dla tatrzańskiego Morskiego Oka, to punkt docelowy. Oba te miejsca łączy pełen atrakcji i niesamowitej przyrody zielony szlak. Długie rozmowy, poszukiwanie wartych sfotografowania miejsc, huśtawka pogodowa typowa w górach. Blisko pięć godzin spacerowania w przemiłym towarzystwie Krysi i Piotrka. Serdecznie zapraszam do oglądania zdjęć, a ponieważ wakacje właśnie wystartowały to spakujcie plecaki i wybierzcie się w te piękne miejsca na cudowny długi spacer. Miłego oglądania."
                    }
                    slug={"sesja-slubna-zielonym-szlakiem-na-popradzki-staw"}
                    title={"SESJA ŚLUBNA - ZIELONYM SZLAKIEM NA POPRADZKI STAW - KRYSTYNA i PIOTR"}
                    tags={"sesja ślubna Popradzki Staw, plener na Słowacji, zdjęcia nad Szczyrbskim Jeziorem"}
                    date={"1 lipca 2018"}
                    menuNames={"KRYSTYNA i PIOTR"}
                    menuTitle={"SESJA ŚLUBNA - ZIELONYM SZLAKIEM NA POPRADZKI STAW"}
                    leadNames={"KINGA i MATEUSZ"}
                    leadTitle={"FOTOGRAF ŚLUBNY SUCHA BESKIDZKA, MAGNOLIA BUDZÓW"}
                    leadUrl={"/fotograf-slubny-sucha-beskidzka-magnolia-budzow"}
                    leadImage={process.env.staticS3ImagesPath + "fotograf-slubny-magnolia-budzow-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
