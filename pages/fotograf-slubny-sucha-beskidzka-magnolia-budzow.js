import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0003.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0005.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0007.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0009.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0011.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0012.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0015.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0020.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0024.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0022.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0023.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0025.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0027.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0029.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0031.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0033.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0041.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0058.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0061.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0065.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0067.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0070.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0072.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0078.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0079.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0085.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0086.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0090.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0092.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0091.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0096.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0099.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0101.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0104.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0109.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0113.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0116.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0117.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0119.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/fotograf_slubny_magnolia_budzow_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0018.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0007.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0010.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/06/sesja_zdjeciowa_w_tatrach_0009.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "fotograf-slubny-magnolia-budzow-start.webp"}
                    images={images}
                    headTitle={"Fotograf ??lubny Sucha Beskidzka, Restauracja Magnolia Budz??w"}
                    headDescription={"Reporta?? ??lubny Kingi i Mateusza w Suchej Beskidzkiej i plener ??lubny w Tatrach. Serdecznie zapraszam na kilka zdj???? na moim blogu. Mi??ego ogl??dania."}
                    headKeywords={"fotograf ??lubny sucha beskidzka, restauracja magnolia budz??w, sesja zdj??ciowa tatry"}
                    headUrl={"https://99foto.pl/fotograf-slubny-sucha-beskidzka-magnolia-budzow"}
                    entryContentP1={
                        'W tym roku most w Zembrzycach nad rzek?? Skaw?? przekroczy??em po raz kolejny, tym razem w drodze do <a href="https://www.facebook.com/paulinaficekmakeup/" target="_blank" rel="nofollow">Studia Makija??u Pauliny Ficek</a> w samym centrum Suchej Beskidzkiej. To w??a??nie tam um??wili??my si?? z King?? na pocz??tek reporta??u ??lubnego. Do????czy?? do nas mega kamerzysta Adam, kt??ry filmowa?? w imieniu <a href="https://www.facebook.com/videoartstudiopl/" target="_blank" rel="nofollow">Video Art Studio</a> i dzie?? wystartowa?? na dobre. Gdy makija?? by?? gotowy udali??my si?? do domu rodzinnego Panny M??odej, gdzie mama z siostr?? pomog??y Kindze w przygotowaniach. Nast??pnie odwiedzili??my Zembrzyce jad??c do Mateusza sfotografowa?? wpinanie spinek i poprawienie muchy. W mi??dzyczasie znale??li??my chwil?? na obowi??zkowe portrety Pana M??odego i Panny M??odej. Odby??o si?? te?? pe??ne wzrusze?? b??ogos??awie??stwo po kt??rym wszyscy udali??my si?? do <a href="https://parafiasucha.pl/" target="_blank" rel="nofollow">Ko??cio??a pw. Nawiedzenia Naj??wi??tszej Maryi Panny</a> w Suchej Beskidzkiej. Ko??ci???? przepi??kny, a pod wzgl??dem fotograficznym idealny.'
                    }
                    entryContentP2={
                        '??wietne ??wiat??o, ogrom przestrzeni i mo??liwo???? stworzenia wspania??ych kadr??w w zwykle niedost??pnych perspektywach. Po sakramentalnym tak go??cie weselni ustawili si?? do zdj??cia grupowego, a nast??pnie wszyscy zostali zaproszeniu do <a href="https://magnolia-restauracja.pl/wesela" target="_blank" rel="nofollow">Restauracji Magnolia</a> w Budzowie. Przywitanie chleblem i sol??, ??yczenia i pierwszy taniec, kt??ry otworzy?? parkiet tego dnia. Pawe?? z <a href="https://www.facebook.com/zespolselavi/" target="_blank" rel="nofollow">Zesp????u SeLaVi</a> dla kt??rego scena jest drugim domem, a z mikrofonem czuje si?? jak Krzysztof Ibisz, nie pozwala?? go??ciom nudzi?? si?? ani przez chwilk??, przenosz??c cz?????? tradycji rodem z Lubelszczyzny w nasze krakowskie strony. Tort weselny, zabawy oczepinowe, poci??g i kilka innych atrakcji sprawi??y, ??e czas mija?? b??yskawicznie. Impreza trwa??a do bia??ego rana i by??o rewelacyjnie. Kilka dni p????niej udali??my si?? na plener ??lubny w Tatry, stawiaj??c w ten spos??b kropk?? nad i. Odwiedzili??my Rezerwat przyrody Prze??om Bia??ki pod Krempachami, Lotnisko w Nowym Targu i punkt widokowy Grapa Litwinka w Czarnej G??rze. Kilka zdj???? z naszej wyprawy znajdziecie poni??ej. Zapraszam ju?? na zdj??cia, a po wi??cej do strefy klienta. Mi??ego ogl??dania.'
                    }
                    slug={"fotograf-slubny-sucha-beskidzka-magnolia-budzow"}
                    title={"FOTOGRAF ??LUBNY SUCHA BESKIDZKA, MAGNOLIA BUDZ??W - KINGA i MATEUSZ"}
                    tags={"fotograf ??lubny sucha beskidzka, restauracja magnolia budz??w, sesja zdj??ciowa tatry"}
                    date={"23 czerwca 2018"}
                    menuNames={"KINGA i MATEUSZ"}
                    menuTitle={"FOTOGRAF ??LUBNY SUCHA BESKIDZKA, MAGNOLIA BUDZ??W"}
                    leadNames={"DAJANA i SYLWESTER"}
                    leadTitle={"FOTOGRAF ??LUBNY KALWARIA ZEBRZYDOWSKA, ARKADIA WADOWICE"}
                    leadUrl={"/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice"}
                    leadImage={process.env.staticS3ImagesPath + "fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice-start.webp"}
                />
            
        );
};

export default BlogPageComponent;
