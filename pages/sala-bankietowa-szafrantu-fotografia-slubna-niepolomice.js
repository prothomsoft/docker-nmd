import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [

            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0009.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0011.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0013.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0014.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0015.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0021.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0019.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0001.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0003.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0005.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0008.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0026.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0027.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0028.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0029.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0030.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0032.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0035.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0036.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0049.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0042.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0054.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0041.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0047.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0050.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0048.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0051.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0052.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0055.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0056.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0058.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0059.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0060.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0061.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0062.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0063.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0064.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0065.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0066.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0067.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0068.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0069.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0070.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0071.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0072.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0073.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0074.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0075.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0077.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0078.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0079.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0081.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0082.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0084.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0085.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0090.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0091.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0093.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0094.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0095.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0096.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0098.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0099.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0101.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0105.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0107.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0108.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0088.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0106.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0110.webp", height: 762 }];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "sala-bankietowa-szafrantu.webp"}
                    images={images}
                    headTitle={"Sala bankietowa Szafrantu, fotografia ??lubna Niepo??omice"}
                    headDescription={"Przepi??kne miejsce na ceremoni?? ??lubn??. Wspaniali Karolina i Kamil. Du??a dawka emocji, u??miech??w i pozytywnej energii. Sala bankietowa Szafrantu i impreza do bia??ego rana. Zapraszam."}
                    headKeywords={"Sala bankietowa Szafrantu, fotografia ??lubna Niepo??omice"}
                    headUrl={"https://99foto.pl/sala-bankietowa-szafrantu-fotografia-slubna-niepolomice"}
                    entryContentP1={
                        'Tym razem na reporta?? ??lubny zapraszam Was do Niepo??omic gdzie podczas fotografowania ??lubu Karoliny i Kamila odkry??em miejsce niezwyk??e. Krak??w s??ynie z <a href="http://mariacki.com/" target="_blank" rel="nofollow">Bazyliki Mariackiej</a>, czasem wspomina si?? o <a href="http://kolegiata-anna.pl/"  target="_blank" rel="nofollow">Uniwersyteckiej Kolegiacie ??w. Anny</a> zupe??nie natomiast zapominaj??c o <a href="https://www.staniatki.pl/" target="_blank" rel="nofollow">Ko??ciele ??w. Wojciecha Biskupa i M??czennika w Stani??tkach</a>. W??a??nie w tym pi??knym miejscu Karolina ??lubowa??a Kamilowi mi??o????, wierno???? i uczciwo???? ma????e??sk??. Cofnijmy si?? jednak w czasie do przygotowa??, kt??re rozpocz????y si?? pod okiem <a href="https://www.instagram.com/alexandradomagala/" target="_blank" rel="nofollow">Aleksandry Domaga??y</a>. Karolina wybra??a <a href="http://www.hotelnovum.pl/" target="_blank" rel="nofollow">Hotel Novum w Niepo??omicach</a> jako miejsce gdzie musia??y pomie??ci?? si?? kufry, p??dzle i palety cieni skompletowane przez Ol??. W czasie kr??tszym ni?? jedna godzina uroda Panny M??odej zosta??a perfekcyjnie podkre??lona i mogli??my odwiedzi?? Kamila, kt??ry czeka?? w gotowo??ci by rozpocz???? swoje przygotowania i pi??tnastoletni?? whisky. Nast??pnie wr??cili??my do domu rodzinnego Karoliny, na wsp??lne b??ogos??awie??stwo. Wszystkie miejsca odwiedzali??my wsp??lnie z Grze??kiem i Dawidem z <a href="https://manolofilmy.pl/" target="_blank" rel="nofollow">Manolo filmy</a>. By?? z nami jeszcze Filip, kt??ry pilotowa?? drona w momentami ryzykownych warunkach.'
                    }
                    entryContentP2={
                        'Pi??kna ceremonia w jeszcze pi??kniejszym <a href="https://www.staniatki.pl/" target="_blank" rel="nofollow">Ko??ciele ??w. Wojciecha Biskupa i M??czennika w Stani??tkach</a>, zdj??cie grupowe tu?? po wyj??ciu i Para M??oda zaprosi??a swoich go??ci weselnych do <a href="https://www.szafrantu.pl/" target="_blank" rel="nofollow">Sali Bankietowej w Restauracji Szafrantu w Niepo??omicach</a>. Para m??oda zosta??a przywitana chlebem i sol??, przyj????a gor??ce ??yczenia go??ci i pierwszym ta??cem otworzy??a parkiet. Imprez?? z radiowym zaci??ciem poprowadzi?? <a href="http://tomaszjanda.pl/" target="_blank" rel="nofollow">DJ Tomasz Janda</a>. Lista atrakcji tego wieczoru by??a d??u??sza ni?? zwykle. Kr??tki plener z wymarzonym garbusem, tort weselny, podzi??kowania dla rodzic??w wykonane popisowo i z jajem, sztuczne ognie tu?? po zabawach oczepinowych. Dzia??o si?? du??o i z pewno??ci?? by??o co fotografowa??. Karolino i Kamilu, dzi??kuj?? za zaufanie i zapraszam na kilka zdj???? z tego dnia. Wi??cej znajdziecie w strefie klienta wpisuj??c has??o z mojej wizyt??wki. Serdecznie zapraszam i ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"sala-bankietowa-szafrantu-fotografia-slubna-niepolomice"}
                    title={"SALA BANKIETOWA SZAFRANTU, FOTOGRAFIA ??LUBNA NIEPO??OMICE - KAROLINA i KAMIL"}
                    tags={"Sala bankietowa Szafrantu, fotografia ??lubna Niepo??omice"}
                    date={"8 maja 2019"}
                    menuNames={"KAROLINA i KAMIL"}
                    menuTitle={"SALA BANKIETOWA SZAFRANTU, FOTOGRAFIA ??LUBNA NIEPO??OMICE"}
                    leadNames={"KINGA i PAWE??"}
                    leadTitle={"HOTEL JUNIOR SKOTNICKA, ZDJ??CIA ??LUBNE SKAWINA"}
                    leadUrl={"/hotel-junior-skotnicka-zdjecia-slubne-skawina"}
                    leadImage={process.env.staticS3ImagesPath + "hotel-junior-skotnicka.webp"}
                />
            
        );
};

export default BlogPageComponent;
