import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_001.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_002.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_005.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_006.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_007.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_008.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_009.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_011.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_013.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_014.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_016.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_018.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_020.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_022.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_024.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_025.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_026.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_027.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_028.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_030.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_031.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_068.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_069.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_032.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_033.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_034.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_035.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_036.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_037.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_038.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_040.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_042.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_043.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_044.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_045.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_046.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_047.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_048.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_049.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_050.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_051.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_053.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_054.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_055.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_057.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_058.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_060.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_061.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_064.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_065.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_071.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_073.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_074.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_075.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_077.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_078.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_080.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_081.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_082.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_083.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_085.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_086.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_087.webp", height: 770 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_088.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_089.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_092.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_094.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_095.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_097.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_100.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_103.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_104.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_105.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_106.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_107.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_108.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_109.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_110.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_112.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_113.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_114.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_115.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_119.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_120.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_121.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_122.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_123.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_126.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_127.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_128.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_130.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_132.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_133.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/07/reportaz_slubny_bolechowice_136.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "gosia_i_tomek_reportaz_slubny_bolechowice_dom_weselny_u_niedzwiedzia_start.webp"}
                    images={images}
                    headTitle={"Reporta?? ??lubny Bolechowice, Dom Weselny u Nied??wiedzia"}
                    headDescription={"Jeden zero dla Polski takimi s??owami ksi??dz rozpocz???? kazanie na ??lubie Gosi i Tomka. M??wi?? oczywi??cie o meczu ze Szwajcarami. Zapraszam."}
                    headKeywords={"fotograf na wesele krak??w,reporta?? ??lubny bolechowiece,dom weselny u nied??wiedzia"}
                    headUrl={"https://99foto.pl/gosia-i-tomek-reportaz-slubny-bolechowice-dom-weselny-u-niedzwiedzia"}
                    entryContentP1={
                        'Sobota 25 czerwca by??a jednym z bardziej ciep??ych dni tego lata, nie przeszkodzi??o to jednak w wykonaniu pi??knego reporta??u ze ??lubu Gosi i Tomka. Przygotowania rozpocz??li??my wcze??nie rano od makija??u i fryzury w domu rodzinnym Gosi. Dziewczyny stan????y na wysoko??ci zadania i pozosta??o tylko oczekiwa?? na przyjazd Tomka. Kilka buziak??w powitalnych, nast??pnie b??ogos??awie??stwo i wszyscy udali??my si?? do <a href="https://www.parafiabolechowice.pl/" target="_blank" rel="nofollow">Ko??cio??a Piotra i Paw??a w Bolechowicach</a>. Jest jeden zero dla Polski takimi s??owami ksi??dz rozpocz???? kazanie na ??lubie Gosi i Tomka.'
                    }
                    entryContentP2={
                        'M??wi?? oczywi??cie o meczu ze Szwajcarami. Po wzruszaj??cej ceremonii, kt??r?? rodzice mieli przyjemno???? ogl??da?? ze specjalnie dla nich przygotowanych miejsc, zaprosili??my go??ci weselnych do zdj??cia grupowego pod ko??cio??em, a nast??pnie do ??ycze??. Chwil?? p????niej kieliszki uderzy??y o ziemi?? pod <a href="https://www.uniedzwiedzia.pl/" target="_blank" rel="nofollow">Domem Weselnym u Nied??wiedzia</a> i Tomek tradycyjnie przeni??s?? Ma??gorzat?? przez pr??g. Pierwszy taniec d??ugo ??wiczony wyszed?? m??odym rewelacyjnie. Dzia??o si?? mn??stwo i wsz??dzie. Niesamowity wiecz??r, niesamowici ludzie. Dzi??kuj??, ??e mog??em by?? tego dnia z Wami. Przed nami plener w Bolechowicach, gdzie m??odzi oprowadz?? mnie po swoich romantycznych miejscach i Kryspin??w, gdzie mam nadziej?? upolowa?? zachodz??ce s??o??ce. Mi??ego ogl??dania.'
                    }
                    slug={"gosia-i-tomek-reportaz-slubny-bolechowice-dom-weselny-u-niedzwiedzia"}
                    title={"REPORTA?? ??LUBNY BOLECHOWICE, DOM WESELNY U NIED??WIEDZIA - GOSIA i TOMEK"}
                    tags={"fotograf na wesele krak??w,reporta?? ??lubny bolechowiece,dom weselny u nied??wiedzia"}
                    date={"3 listopada 2017"}
                    menuNames={"GOSIA i TOMEK"}
                    menuTitle={"REPORTA?? ??LUBNY BOLECHOWICE, DOM WESELNY U NIED??WIEDZIA"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W G??RALSKIM KLIMACIE PRZYSTA?? KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticS3ImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
