import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/01/restauracja_nad_raba_brzesko_0009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/01/restauracja_nad_raba_brzesko_0010.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/01/restauracja_nad_raba_brzesko_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/01/restauracja_nad_raba_brzesko_0004.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/01/restauracja_nad_raba_brzesko_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/01/restauracja_nad_raba_brzesko_0011.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/01/restauracja_nad_raba_brzesko_0008.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/01/restauracja_nad_raba_brzesko_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0013.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0015.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0014.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0016.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0017.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0018.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0019.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0021.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0022.webp", height: 850 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0023.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0025.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0028.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0029.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0030.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0031.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0032.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0033.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0034.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0035.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0036.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0037.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0039.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0038.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0040.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0042.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0047.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0049.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0052.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0053.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0054.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0057.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0058.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0059.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0060.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0064.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0066.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0043.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0068.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0069.webp", height: 1054 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0070.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0071.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0073.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0074.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0075.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0076.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0077.webp", height: 526 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0078.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0081.webp", height: 566 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0083.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0085.webp", height: 851 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0086.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0087.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0088.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0091.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0092.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0093.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0096.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0107.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0099.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0102.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0104.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0103.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0108.webp", height: 806 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0106.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0109.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0113.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2019/02/restauracja_nad_raba_brzesko_0115.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "hotel_nad_raba_bochnia.webp"}
                    images={images}
                    headTitle={"Hotel nad Rab?? Bochnia, Zimowy ??lub w Niepo??omicach"}
                    headDescription={
                        "Hotel nad Rab?? Bochnia, Zimowy ??lub w Niepo??omicach. Pi??kne kwiaty w ??rodku zimy i mega weso??a grupa przyjaci???? na ??lubie Adrianny i Arkadiusza. Zapraszam do ogl??dania."
                    }
                    headKeywords={"Hotel nad Rab?? Bochnia, Gospoda nad Rab?? Bochnia wesela, zimowy ??lub w Niepo??omicach"}
                    headUrl={"https://99foto.pl/hotel-nad-raba-bochnia-zimowy-slub-w-niepolomicach"}
                    entryContentP1={
                        'Kilka centymetr??w ??niegu w Krakowie pojawia si?? wtedy, gdy w Zakopanem jest go centymetr??w kilkadziesi??t. Trudno wi??c liczy?? na ??nie??nobia??e pejza??e zimowe, jednak przy odrobinie szcz????cia mo??na zam??wi?? troch?? ??niegu, tak by zacz???? pada?? godzin?? przed i godzin?? po ceremonii za??lubin. Takie zam??wienie zosta??o zrealizowane dla Adrianny i Arkadiusza, kt??rych ??lub mia??em przyjemno???? fotografowa?? w Niepo??omicach. Przygotowania rozpocz??li??my w <a href="https://www.facebook.com/MakijazowySwiatJoannaPiotrowska" target="_blank" rel="nofollow">Studio Makija??u Joanny Piotrowskiej</a>. Pierwsze trzaski migawki i pierwsze zamro??one chwile. Studio Asi i ilo???? sztucznie wytworzonego ??wiat??a z ring??w, softbox??w, ??cianka z logo, ??ciany pe??ne certyfikat??w z uko??czonych szkole?? wiza??u wskazywa??y na to, ??e makija?? b??dzie wykonany mega profesjonalnie i rzeczywi??cie tak by??o. Nast??pnie udali??my si?? do domu Ady gdzie czeka??y ju?? ubrane w przepi??kne czerwone suknie Monika i Magda oraz zawsze u??miechni??ta mama Adrianny. Kwiaty nie mia??y nic wsp??lnego z zimow?? aur??. Ada z pomoc?? druhen ubra??a sukni?? ??lubn??, bi??uteri?? i z lampk?? szampana w r??ce i u??miechem (po mamusi) czeka??a na przybycie Arkadiusza.'
                    }
                    entryContentP2={
                        'Tymczasem w Zabierzowie Boche??skim odbywa??y si?? przygotowania Pana M??odego. Arkowi dzielnie asystowali Przemek i Sancho Pancho, kt??rzy mierzyli si?? ze spinkami od mankiet??w, zapi??ciami muszki i na koniec z pi????dziesi??cioma gramami dobrze zmro??onej substancji. By??o weso??o i impreza zapowiada??a si?? grubo. Po b??ogos??awie??stwie rodzic??w udali??my si?? do <a href="http://www.parafiajazy.pl/" target="_blank" rel="nofollow">Ko??ci????a Matki Bo??ej R????a??cowej w Niepo??omicach</a>. Ksi??dz nie szcz??dzi?? sobie ??art??w i dba?? o lu??n?? atmosfer?? w Zakrystii. Tato wprowadzi?? Ad?? do o??tarza i ceremonia za??lubin wystartowa??a. Ciekawym elementem by??o odczytanie kr??tkiej historii znajomo??ci Ady i Arka, kt??ra wywo??a??a prawdziwe emocje na twarzach nowo??e??c??w i zaproszonych go??ci. ??nieg nie przeszkodzi?? nam w wykonaniu zdj??cia grupowego pod Ko??cio??em. Chwil?? p????niej wszyscy zaproszeni go??cie dotarli do Sali Weselnej <a href="http://hotelnadraba.pl/" target="_blank" rel="nofollow">Hotel i Gospoda nad Rab??</a> ustawiaj??c si?? w d??ugiej kolejce do gor??cych ??ycze??. Nast??pnie m??odzi zaserwowali pierwszy taniec i d??ug?? list?? weselnych atrakcji. Go??ci na parkiecie do ta??ca animowa?? <a href="http://silvermoon.com.pl/" target="_blank" rel="nofollow">Zesp???? Muzyczny SilverMoon</a>. U??miechy na twarzach najm??odszych zapewnia?? Minionek z <a href="https://www.facebook.com/Akademia-Animacji-Kreatywnych-2057966684489263" target="_blank" rel="nofollow">Akademii Animacji Kreatywnych</a>, a ka??d?? sekund?? tego magicznego popo??udnia i wieczoru uwiecznia?? Krzysiek z <a href="http://www.ringoofilm.pl" target="_blank" rel="nofollow">Ringoo Film</a>. ??wietny zimowy ??lub, du??o pi??knych niekoniecznie zimowych detali, roze??miana Para M??oda i pe??ni luzu Druhny i Dru??bowie. Super, ??e mog??em by?? z Wami tego dnia. Dzi??kuj?? za zaufanie i zapraszam na zdj??cia. Wi??cej zdj???? w strefie klienta po wpisaniu has??a z wizyt??wki. Mi??ego ogl??dania.'
                    }
                    slug={"hotel-nad-raba-bochnia-zimowy-slub-w-niepolomicach"}
                    title={"HOTEL NAD RAB?? BOCHNIA, ZIMOWY ??LUB W NIEPO??OMICACH - ADA i AREK"}
                    tags={"Hotel nad Rab?? Bochnia, Gospoda nad Rab?? Bochnia wesela, zimowy ??lub w Niepo??omicach"}
                    date={"1 lutego 2018"}
                    menuNames={"ADRIANNA i ARKADIUSZ"}
                    menuTitle={"HOTEL NAD RAB?? BOCHNIA, ZIMOWY ??LUB W NIEPO??OMICACH"}
                    leadNames={"NATALIA i ??UKASZ"}
                    leadTitle={"POMYS?? NA SESJ?? ZIMOW?? W KRAKOWIE - DW??R JANA MATEJKI"}
                    leadUrl={"/pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki"}
                    leadImage={process.env.staticS3ImagesPath + "pomysl_na_sesje_slubna_zimowa_w_krakowie.webp"}
                />
            
        );
};

export default BlogPageComponent;
