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
                    headTitle={"Dom weselny Mogielica Jurk??w, rustykalne wesele"}
                    headDescription={"Dom weselny Mogielica Jurk??w, rustykalne wesele, wesele w stylu boho. Natalia i Krzysztof. Serdecznie zapraszam."}
                    headKeywords={"Dom weselny Mogielica Jurk??w, wesele rustykalne, ??lub w stylu boho"}
                    headUrl={"https://99foto.pl/dom-weselny-mogielica-jurkow-rustykalne-wesele"}
                    entryContentP1={
                        'Miesi??c czerwiec dobiega ko??ca. Du??o dobrego dzia??o si?? w tym miesi??cu, czuje si?? ju?? nadchodz??ce wakacje i w perspektywie s??odkie leniuchowanie. ??luby nabieraj?? kolor??w i mam na my??li nie tylko ziele?? i du??o s??o??ca, ale te?? kolorowe sukienki go??ci weselnych, pi??kne kwiaty i dopracowane detale. Klimat ten mo??na poczu?? ogl??daj??c kr??tk?? relacj?? z perfekcyjnie przygotowanego ??lubu Natalii i Krzy??ka, kt??ry odby?? si?? w Mszanie Dolnej. Zdj??cia rozpocz??li??my od makija??u ??lubnego, nast??pnie odwiedzili??my <a href="https://www.facebook.com/Studioo.o15/" target="_blank" rel="nofollow noopener noreferrer">Salon Fryzjerski Studio 15</a>. Jak na ??lub boho czy rustykalny przysta??o, Natalia mia??a wianek, a jego wpi??cie wymaga??o niema??ych przygotowa?? fryzjerskich. Kolejnym punktem programu by??y przygotowania Panny M??odej.'
                    }
                    entryContentP2={
                        'Fotografowanie detali i ubierania sukni ??lubnej zosta??o znacz??co rozbudowane o mini sesj?? zdj??ciow?? zaproponowan?? przez Dawida z <a href="https://www.braciazieba.pl/" target="_blank" rel="nofollow noopener noreferrer">Bracia Zi??ba Filmowanie</a>. Tata sta??, obserwowa?? i m??wi?? co??, ??e do odwa??nych ??wiat nale??y, a mo??e nie dos??ysza??em... sam nie wiem. By??o super i kilka fajnych klatek dzi??ki temu wpad??o. Nast??pnie wybrali??my si?? do Krzy??ka. Ubieranie si?? Pana M??odego przebieg??o sprawnie, zosta?? czas na ma??y toast. Rodzice pob??ogos??awili Krzy??ka, a czerwony Mustang zabra?? go prosto do domu rodzinnego Natalii. First look w ogrodzie, wsp??lne b??ogos??awie??stwo, pami??tkowe zdj??cie z rodzicami i wszyscy udali??my si?? do <a href="https://www.parafiamszanadolna.pl/" target="_blank" rel="nofollow noopener noreferrer">Ko??ci????a pw. ??w. Micha??a Archanio??a w Mszanie Dolnej</a>. Podczas ceremonii Para M??oda ??lubowa??a sobie mi??o???? i wierno????. Nast??pnie zrobili??my zdj??cie grupowe i go??cie udali si?? na przyj??cie weselne do <a href="http://www.mogielica.com/" target="_blank" rel="nofollow noopener noreferrer">Domu Weselnego Mogielica</a>. Elektryzuj??ca brama, przywitanie Pary M??odej chlebem i sol??, rzut kieliszkami i ju?? byli??my na sali weselnej. Go??ci przywita?? <a href="http://www.folkband.pl/" target="_blank" rel="nofollow noopener noreferrer">Zesp???? muzyczny Folk Band</a>. Wykorzystuj??c gor??ce promienie zachodz??cego s??o??ca, znale??li??my moment i udali??my si?? na mini sesj?? plenerow??. Parkiet zape??nia?? si?? b??yskawicznie, nie by??o ??adnego problemu ze znalezieniem ch??tnych do zabaw oczepinowych os??b. Impreza trwa??a do bia??ego rana. Dzi??kuj?? za zaufanie i ??ycz?? Wam wszystkiego najlepszego na nowej drodze ??ycia. Serdecznie zapraszam na zdj??cia i do strefy klienta po wi??cej. Nie zapomnijcie o pozostawieniu like na <a href="https://www.facebook.com/Studioo.o15/" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> i <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Instagram</a>.'
                    }
                    slug={"dom-weselny-mogielica-jurkow-rustykalne-wesele"}
                    title={"DOM WESELNY MOGIELICA JURK??W, RUSTYKALNE WESELE - NATALIA i KRZYSZTOF"}
                    tags={"Dom weselny Mogielica Jurk??w, rustykalne wesele"}
                    date={"24 czerwca 2022"}
                    menuNames={"NATALIA i KRZYSZTOF"}
                    menuTitle={"DOM WESELNY MOGIELICA JURK??W, RUSTYKALNE WESELE"}
                    leadNames={"NICOLA i RAFA??"}
                    leadTitle={"HOTEL ??YWIECKI, SALA PRZY????K??WKA, WESELE W BESKIDACH"}
                    leadUrl={"/hotel-zywiecki-sala-przylekowka-wesele-w-beskidach"}
                    leadImage={process.env.staticS3ImagesPath + "nicola_rafal_start.webp"}
                />
            
        );
};

export default BlogPageComponent;