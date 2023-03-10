import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0005.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0006.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0009.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0008.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0010.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0012.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0013.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0015.webp", height: 530 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0016.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0023.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0018.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0021.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0024.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0025.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0027.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0029.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0030.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0031.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0033.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0034.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0036.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0038.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0040.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0041.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0043.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0045.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0047.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0049.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0054.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0055.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0056.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0058.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0059.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0062.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0065.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0067.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0072.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0073.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0074.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0076.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0077.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0078.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0080.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0083.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0085.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0086.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0087.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0088.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0089.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0091.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0093.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0119.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0096.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0098.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0123.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0100.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0106.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0109.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0110.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0112.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0114.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0115.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0118.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2018/05/restauracja_old_joker_jaroszowice_0125.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "slub-w-lanckoronie-restauracja-old-joker-jaroszowice-start.webp"}
                    images={images}
                    headTitle={"??lub w Lanckoronie, Restauracja Old Joker Jaroszowice"}
                    headDescription={
                        "Ton??cy w wielu odcieniach zieleni pi??kny ??lub w Lanckoronie. Eleganckie wn??trza Restauracji Old Joker w Jaroszowicach. Serdecznie zapraszam na reporta?? Alicji i Grzegorza. Mi??ego ogl??dania."
                    }
                    headKeywords={"??lub w Lanckoronie, Restauracja Old Joker Jaroszowice"}
                    headUrl={"https://99foto.pl/slub-w-lanckoronie-restauracja-old-joker-jaroszowice"}
                    entryContentP1={
                        'Ten reporta?? rozpoczynam od zdj??cia pe??nego s??o??ca i soczystej zieleni, kt??rego celem jest wprowadzenie Was w typowy dla Lanckorony klimat, kt??ry towarzyszy?? nam przez ca??y ??lubny dzie??. Alicja i Grzesiek mieszkaj?? teraz w Anglii, jednak nie wyobra??aj?? sobie ??ycia w miejscu innym ni?? ich ukochane rodzinne miasto. Obiecali, ??e na pewno kiedy?? wr??c?? do Lanckorony na d??u??ej do Polski. Podczas pleneru, na kt??ry wybrali??my si?? do <a href="https://www.wawel.krakow.pl/pl/" target="_blank" rel="nofollow">Zamku Kr??lewskiego na Wawelu</a> i na podziwianie zachodu s??o??ca z <a href="https://podgorze.pl/kopiec-krakusa/" target="_blank" rel="nofollow">Kopca Krakusa</a> dowiedzia??em si??, ??e ich wsp??lna historia pisze si?? ju?? bardzo d??ugo. W jednym z jej punkt??w pewnego pi??knego dnia Grzegorz przygotowa?? niespodziank?? i o??wiadczy?? si?? Alicji w <a href="https://restauracja-padre.pl/padre-krakow/" target="_blank" rel="nofollow">Restauracji Padre</a> na Krakowskim Rynku. W ubieg???? sobot?? dotarli??my do kolejnego wa??nego etapu, do dnia ??lubu, kt??ry po????czy?? Alicj?? i Grzegorza na zawsze. Dzie?? ten rozpocz???? si?? w Salonie Kosmetycznym i Fryzjerskim w Su??kowicach. Makija?? wykona??a bardzo mi??a Pani Ula. Chwil?? p????niej miejsce Alicji zaj????a jej siostra Sabina i salon kosmetyczny zacz???? ??y?? w??asnym ??yciem. Ubieranie sukni ??lubnej, przygotowania u Grzegorza, pe??ne emocji b??ogos??awie??stwa i wsp??lne zdj??cia grupowe to preludium do najwa??niejszego momentu, sakramentalnego TAK, kt??re Para M??oda wypowiedzia??a w <a href="https://www.parafia.lanckorona.pl/" target="_blank" rel="nofollow">Ko??ciele narodzenia ??w. Jana Chrzciciela w Lanckoronie</a>.'
                    }
                    entryContentP2={
                        'Dodatkow?? atrakcj?? by??y utwory wykonywane przez Ani?? z <a href="https://www.facebook.com/aniaspiewaigra/" target="_blank" rel="nofollow">Oprawa Muzyczna ??lub??w Krak??w</a>, gitarka i ??piew brzmia??y bosko. Lawina kwiat??w przy wyj??ciu z ko??cio??a i Alicja zaprosi??a go??ci do <a href="https://www.oldjoker.pl/" target="_blank" rel="nofollow">Restauracji Old Joker</a> w Jaroszowicach pod Wadowicami. Zdj??cie grupowe, moc gor??cych ??ycze?? i minut?? po obiedzie Para M??oda otworzy??a parkiet pierwszym ta??cem. <a href="https://www.facebook.com/zespolmuzycznypokusa/" target="_blank" rel="nofollow">Zesp???? muzyczny Pokusa</a>, kt??ry pozdrawiam, stan???? na wysoko??ci zadania i dba?? o dobry nastr??j go??ci. Taniec sta?? si?? motywem przewodnim oczepin, a jak si?? pewnie domy??lacie nie zabrak??o pysznego torta i innych atrakcji, kt??re z pewno??ci?? pozwoli??y go??ciom weselnym zapami??ta?? ten ??lub na d??ugo. Alicjo i Grzegorzu, dzi??ki za zaufanie i umo??liwienie mi fotografowania Waszego ??lubu. Kilka zdj???? z tego dnia i kilka fotek ze wspomnianego ju?? krakowskiego pleneru poni??ej. Mi??ego ogl??dania. Wi??cej zdj???? jak zwykle w strefie klienta, do kt??rej has??o znajdziecie na mojej wizyt??wce.'
                    }
                    slug={"slub-w-lanckoronie-restauracja-old-joker-jaroszowice"}
                    title={"??LUB W LANCKORONIE, RESTAURACJA OLD JOKER JAROSZOWICE - ALICJA i GRZEGORZ"}
                    tags={"??lub w Lanckoronie, Restauracja Old Joker Jaroszowice, fotograf na wesele Wadowice"}
                    date={"26 maja 2018"}
                    menuNames={"ALICJA i GRZEGORZ"}
                    menuTitle={"??LUB W LANCKORONIE, RESTAURACJA OLD JOKER JAROSZOWICE"}
                    leadNames={"MA??GORZATA I RAFA??"}
                    leadTitle={"PLENER ??LUBNY S??OWACJA, ??OMNICKI STAW"}
                    leadUrl={"/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    leadImage={process.env.staticS3ImagesPath + "plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.webp"}
                />
            
        );
};

export default BlogPageComponent;
