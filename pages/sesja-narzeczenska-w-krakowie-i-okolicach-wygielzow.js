import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0001.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0010.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0013.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0002.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0023.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0036.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0027.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0032.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0033.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0035.webp", height: 377 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/07/sesja_narzeczenska_w_krakowie_0034.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja-narzeczenska-w-krakowie-i-okolicach-wygielzow-start.webp"}
                    images={images}
                    headTitle={"Sesja narzeczeńska w Krakowie i okolicach"}
                    headDescription={"Sesja narzeczeńska w Krakowie, Nadwiślański Park Etnograficzny Wygiełzów, Zamek Lipowiec"}
                    headKeywords={"sesja narzeczeńska w Krakowie"}
                    headUrl={"https://99foto.pl/sesja-narzeczenska-w-krakowie-i-okolicach-wygielzow"}
                    entryContentP1={
                        'Magde i Damiana poznałem rok temu. Już wtedy podczas naszego pierwszego spotkania pomyśleliśmy, że sesja narzeczeńska przed ślubem to świetny pomysł.  Udało nam się znaleźć czas i trafić odpowiednią pogodę, więc spontanicznie umówiliśmy się na zdjęcia. Żeby dotrzeć do miejsca naszego pleneru trzeba minąć Zalew w Kryspinowie, Kasztel Kajasówka, Cztery Pory Roku by jadąc dalej w stronę Oświęcimia w końcu trafić do <a href="https://mnpe.pl/" target="_blank" rel="nofollow">Nadwiślańskiego Parku Etnograficznego</a> w Wygiełzowie. Miejsce to jest szczególne dla Magdy i Damiana ponieważ już pod koniec września tego roku w Kościele z Ryczowa, który jest częścią skansenu wypowiedzą sakramentalne TAK. Na naszej sesji narzeczeńskiej nie brakowało świetnego światła, które to malowało wszystko ciepłymi barwami.'
                    }
                    entryContentP2={
                        "Wędkowanie pasja Damiana zaprowadziły nas nad piękne jezioro, gdzie w ciszy i spokoju można było podziwiać widok kładącego się na tafli wody słońca, smakując czerwone półwytrawne winko. Ostatnie promienie zachodzącego słońca oglądaliśmy w okolicach Chrzanowa wdrapując się na położony w tej okolicy punkt widokowy. Magda nie tylko rewelacyjnie wyglądała, ale również mega profesjonalnie pozowała do zdjęć. Pamiętajcie, że sesja narzeczeńska w Krakowie lub najbliższych okolicach to nie strata czasu, ale świetna okazja na mile spędzone chwile i kilka pamiątkowych zdjęć. Life isn't perfect but it has perfect moments... Poznajcie Magdę i Damiana, którzy na pewno na moim blogu pojawią się ponownie już wkrótce. Miłego oglądania."
                    }
                    slug={"sesja-narzeczenska-w-krakowie-i-okolicach-wygielzow"}
                    title={"SESJA NARZECZEŃSKA W KRAKOWIE – WYGIEŁZÓW - MAGDALENA I DAMIAN"}
                    tags={"Sesja narzeczeńska w Krakowie, Nadwiślański Park Etnograficzny Wygiełzów, Zamek Lipowiec"}
                    date={"9 lipca 2018"}
                    menuNames={"MAGDALENA i DAMIAN"}
                    menuTitle={"SESJA NARZECZEŃSKA W KRAKOWIE – WYGIEŁZÓW"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ŚLUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={process.env.staticS3ImagesPath + "sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
