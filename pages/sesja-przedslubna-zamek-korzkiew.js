import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_001.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0003.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0008.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0006.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0011.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0014.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0015.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0019.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0022.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0032.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0033.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2017/07/sesja_narzeczenska_krakow_0013.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sesja_narzeczenska_krakow_start.webp"}
                    images={images}
                    headTitle={"Sesja przed??lubna w Krakowie"}
                    headDescription={"Sesja przed??lubna Kingi Ma??ka. Ciekawe i najlepsze miejsce plenerowe na sesj?? zdj??ciow??. Krak??w i okolice. Serdecznie zapraszam."}
                    headKeywords={"sesja przed??lubna w krakowie,zamek korzkiew,zamek pieskowa ska??a"}
                    headUrl={"https://99foto.pl/sesja-przedslubna-zamek-korzkiew"}
                    entryContentP1={
                        'Tym razem jeden wpis na blogu ????czy sesj?? narzecze??sk?? i sesj?? ??lubn?? Kingi i Ma??ka. Postanowi??em wybra?? najlepsze kadry, kt??re uda??o nam si?? stworzy?? podczas blisko o??miu godzin spacerowania i fotografowania miasta Krakowa i jego okolic. Kinga i Maciek bardzo dbali o detale na obu sesjach, przygotowuj??c sobie <a href="https://koloryholi.pl/" target="_blank" rel="nofollow">kolorki holi</a>, str??j stra??acki, balony wype??nione helem i przepi??kny wianek. Sesja narzecze??ska mia??a pokaza?? Krak??w jako miasto i ograniczy?? kolor zielony w kadrze,  wybrali??my wi??c w pierwszej kolejno??ci Kazimierz.'
                    }
                    entryContentP2={
                        'Rozleg???? ????k??, z kt??rej obserwowali??my zach??d s??o??ca znale??li??my w pobli??u Lasku Wolskiego. Po drodze do tego miejsca na chwil?? zatrzymali??my si?? pod <a href="https://www.uziyada.krakow.pl/" target="_blank" rel="nofollow">Zamkiem w Przegorza??ach</a>. Sesja ??lubna to bardziej odleg??e okolice Krakowa, czyli <a href="https://korzkiew.pl/" target="_blank" rel="nofollow">Zamek w Korzkwi</a> i <a href="https://pieskowaskala.eu/" target="_blank" rel="nofollow">Zamek w Pieskowej Skale</a>. Dwa dni wspania??ej pogody, ??wietnie wykorzystany czas i prawdziwy przekr??j miasta Krakowa. Mega podzi??kowania dla Kingi i Ma??ka za perfekcyjne przygotowanie do naszych sesji plenerowych. Serdecznie zapraszam na zdj??cia i ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"sesja-przedslubna-zamek-korzkiew"}
                    title={"SESJA PRZED??LUBNA ZAMEK KORZKIEW KRAK??W - KINGA i MACIEK"}
                    tags={"sesja przed??lubna w krakowie,zamek korzkiew,zamek pieskowa ska??a"}
                    date={"2 lipca 2017"}
                    menuNames={"KINGA i MACIEK"}
                    menuTitle={"SESJA PRZED??LUBNA ZAMEK KORZKIEW KRAK??W"}
                    leadNames={"KAROLINA i DAWID"}
                    leadTitle={"LAWENDOWE POLE POD KRAKOWEM, SESJA ??LUBNA W OSTROWIE"}
                    leadUrl={"/lawendowe-pole-pod-krakowem-sesja-slubna-w-ostrowie"}
                    leadImage={process.env.staticS3ImagesPath + "lawendowe_pole_pod_krakowem_sesja_slubna_w_ostrowie_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
