import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

    const fotograf_slubny_portfolio_2023_002 = process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_002.webp";
   

  

        let images = [



{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_331.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_679.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_180.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_179.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_171.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_170.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_672.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_159.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_058.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_061.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_057.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_667.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_051.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_053.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_598.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_592.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_590.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_589.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_588.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_593.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_577.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_576.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_601.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_599.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_570.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_627.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_626.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_624.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_631.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_622.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_621.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_625.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_606.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_605.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_611.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_037.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_043.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_034.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_042.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_019.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_018.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_015.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_013.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_026.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_014.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_005.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_004.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_011.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_003.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_394.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_390.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_391.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_395.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_662.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_661.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_378.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_360.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_356.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_352.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_659.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_346.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_342.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_341.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_337.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_334.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_333.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_149.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_148.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_657.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_144.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_143.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_141.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_655.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_137.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_152.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_134.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_133.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_154.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_129.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_127.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_121.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_128.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_564.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_561.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_653.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_652.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_556.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_555.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_554.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_651.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_567.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_546.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_542.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_541.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_539.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_538.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_650.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_648.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_645.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_213.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_644.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_203.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_202.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_200.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_196.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_195.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_193.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_194.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_192.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_190.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_189.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_643.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_639.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_104.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_102.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_638.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_637.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_114.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_112.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_083.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_082.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_081.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_190.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_189.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_643.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_639.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_104.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_102.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_638.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_637.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_114.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_112.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_083.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_082.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_081.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_438.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_703.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_435.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_699.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_433.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_428.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_423.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_421.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_502.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_418.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_696.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_416.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_415.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_413.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_412.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_692.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_534.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_691.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_532.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_530.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_529.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_528.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_527.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_760.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_515.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_536.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_512.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_688.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_510.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_508.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_686.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_327.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_326.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_682.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_324.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_323.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_325.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_318.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_314.webp", height: 760 },
{ imageSrc: process.env.staticS3ImagesPath + "portfolio/fotograf_slubny_portfolio_2023_312.webp", height: 760 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "dom_weselny_mogielica_fotograf_slubny_mszana.webp"}
                    images={images}
                    headTitle={"Dom weselny Mogielica Jurków, rustykalne wesele"}
                    headDescription={"Dom weselny Mogielica Jurków, rustykalne wesele, wesele w stylu boho. Natalia i Krzysztof. Serdecznie zapraszam."}
                    headKeywords={"Dom weselny Mogielica Jurków, wesele rustykalne, ślub w stylu boho"}
                    headUrl={"https://99foto.pl/dom-weselny-mogielica-jurkow-rustykalne-wesele"}
                    entryContentP1={
                        'Miesiąc czerwiec dobiega końca. Dużo dobrego działo się w tym miesiącu, czuje się już nadchodzące wakacje i w perspektywie słodkie leniuchowanie. Śluby nabierają kolorów i mam na myśli nie tylko zieleń i dużo słońca, ale też kolorowe sukienki gości weselnych, piękne kwiaty i dopracowane detale. Klimat ten można poczuć oglądając krótką relację z perfekcyjnie przygotowanego ślubu Natalii i Krzyśka, który odbył się w Mszanie Dolnej. Zdjęcia rozpoczęliśmy od makijażu ślubnego, następnie odwiedziliśmy <a href="https://www.facebook.com/Studioo.o15/" target="_blank" rel="nofollow noopener noreferrer">Salon Fryzjerski Studio 15</a>. Jak na ślub boho czy rustykalny przystało, Natalia miała wianek, a jego wpięcie wymagało niemałych przygotowań fryzjerskich. Kolejnym punktem programu były przygotowania Panny Młodej.'
                    }
                    entryContentP2={
                        'Fotografowanie detali i ubierania sukni ślubnej zostało znacząco rozbudowane o mini sesję zdjęciową zaproponowaną przez Dawida z <a href="https://www.braciazieba.pl/" target="_blank" rel="nofollow noopener noreferrer">Bracia Zięba Filmowanie</a>. Tata stał, obserwował i mówił coś, że do odważnych świat należy, a może nie dosłyszałem... sam nie wiem. Było super i kilka fajnych klatek dzięki temu wpadło. Następnie wybraliśmy się do Krzyśka. Ubieranie się Pana Młodego przebiegło sprawnie, został czas na mały toast. Rodzice pobłogosławili Krzyśka, a czerwony Mustang zabrał go prosto do domu rodzinnego Natalii. First look w ogrodzie, wspólne błogosławieństwo, pamiątkowe zdjęcie z rodzicami i wszyscy udaliśmy się do <a href="https://www.parafiamszanadolna.pl/" target="_blank" rel="nofollow noopener noreferrer">Kościóła pw. św. Michała Archanioła w Mszanie Dolnej</a>. Podczas ceremonii Para Młoda ślubowała sobie miłość i wierność. Następnie zrobiliśmy zdjęcie grupowe i goście udali się na przyjęcie weselne do <a href="http://www.mogielica.com/" target="_blank" rel="nofollow noopener noreferrer">Domu Weselnego Mogielica</a>. Elektryzująca brama, przywitanie Pary Młodej chlebem i solą, rzut kieliszkami i już byliśmy na sali weselnej. Gości przywitał <a href="http://www.folkband.pl/" target="_blank" rel="nofollow noopener noreferrer">Zespół muzyczny Folk Band</a>. Wykorzystując gorące promienie zachodzącego słońca, znaleźliśmy moment i udaliśmy się na mini sesję plenerową. Parkiet zapełniał się błyskawicznie, nie było żadnego problemu ze znalezieniem chętnych do zabaw oczepinowych osób. Impreza trwała do białego rana. Dziękuję za zaufanie i życzę Wam wszystkiego najlepszego na nowej drodze życia. Serdecznie zapraszam na zdjęcia i do strefy klienta po więcej. Nie zapomnijcie o pozostawieniu like na <a href="https://www.facebook.com/Studioo.o15/" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> i <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Instagram</a>.'
                    }
                    slug={"dom-weselny-mogielica-jurkow-rustykalne-wesele"}
                    title={"DOM WESELNY MOGIELICA JURKÓW, RUSTYKALNE WESELE - NATALIA i KRZYSZTOF"}
                    tags={"Dom weselny Mogielica Jurków, rustykalne wesele"}
                    date={"24 czerwca 2022"}
                    menuNames={"NATALIA i KRZYSZTOF"}
                    menuTitle={"DOM WESELNY MOGIELICA JURKÓW, RUSTYKALNE WESELE"}
                    leadNames={"NICOLA i RAFAŁ"}
                    leadTitle={"HOTEL ŻYWIECKI, SALA PRZYŁĘKÓWKA, WESELE W BESKIDACH"}
                    leadUrl={"/hotel-zywiecki-sala-przylekowka-wesele-w-beskidach"}
                    leadImage={process.env.staticS3ImagesPath + "nicola_rafal_start.webp"}
                />
            
        );
};

export default BlogPageComponent;