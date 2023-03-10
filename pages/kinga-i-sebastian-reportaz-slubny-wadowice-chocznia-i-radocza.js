import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_slubny_wadowice.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/09/fotograf_na_wesele_wadowice_0001.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/09/fotograf_na_wesele_wadowice_0002.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/09/fotograf_na_wesele_wadowice_0005.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/09/fotograf_na_wesele_wadowice_0012.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/09/fotograf_na_wesele_wadowice_0004.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/09/fotograf_na_wesele_wadowice_0006.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/09/fotograf_na_wesele_wadowice_0003.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/09/fotograf_na_wesele_wadowice_0007.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/09/fotograf_na_wesele_wadowice_0008.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/09/fotograf_na_wesele_wadowice_0010.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0013.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0014.webp", height: 852 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0015.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0016.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0017.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0018.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0019.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0020.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0022.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0021.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0024.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0023.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0025.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0026.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0027.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0028.webp", height: 805 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0029.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0030.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0031.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0032.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0033.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0035.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0034.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0036.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0037.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0039.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0038.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0040.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0041.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0042.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0043.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0044.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0045.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0046.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0048.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0049.webp", height: 527 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0068.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0050.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0052.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0053.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0054.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0056.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0055.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0057.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0058.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0059.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0061.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0060.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0062.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0063.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0064.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0065.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0066.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0067.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0069.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0070.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0071.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0073.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0072.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0074.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0075.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0076.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0077.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0078.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0079.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0080.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0081.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0082.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0083.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0084.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0085.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0086.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0087.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0088.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0089.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0090.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0091.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0092.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0093.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0094.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0095.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0096.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0097.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0098.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0099.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0100.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0101.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0102.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0103.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0104.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0105.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0106.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0107.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0108.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0109.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0110.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0111.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0112.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0113.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0114.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0115.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0116.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0117.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0118.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0119.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0120.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0121.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0123.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0122.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0124.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0126.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0125.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0127.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0128.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0129.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0130.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0131.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0132.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0133.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0134.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0135.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0136.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0137.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0139.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0138.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0140.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0143.webp", height: 382 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0144.webp", height: 763 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0141.webp", height: 383 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0142.webp", height: 762 },
            { imageSrc: process.env.staticS3ImagesPath + "blog/2016/10/fotograf_na_wesele_wadowice_0145.webp", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticS3ImagesPath + "kinga_i_sebastian_reportaz_slubny_wadowice_chocznia_i_radocza_start.webp"}
                    images={images}
                    headTitle={"Reporta?? ??lubny Wadowice, zdj??cia ??lubne OSP Chocznia"}
                    headDescription={"Przepi??kne rodzinne wej??cie do ko??cio??a podczas kt??rego Anto?? i Wiktor stan??li na wysoko??ci zadania, pozytywna atmosfera i zabawa do bia??ego rana. Zapraszam."}
                    headKeywords={"reporta?? ??lubny wadowice,zdj??cia ??lubne chocznia"}
                    headUrl={"https://99foto.pl/kinga-i-sebastian-reportaz-slubny-wadowice-chocznia-i-radocza"}
                    entryContentP1={
                        "Fotografem ??lubnym Kingi i Sebastiana zosta??em z polecenia Magdy i Lucjana, kt??rych pozdrawiam. Ich ??lub i sesj?? plenerow?? mo??ecie odnale???? i poogl??da?? na moim blogu. By?? to m??j drugi raz w Hollywood Studio Leny Czechowicz i drugi raz w Wadowicach mie??cie Jana Paw??a II. Przygotowania zacz??li??my o godzinie 13. Lena i Kinga znaj?? si?? od bardzo dawna i mieszkaj?? po s??siedzku, wi??c makija?? i w??osy dotar??y do poziomu Top Model z ram??wki stacji TVN. Chwilk?? p????niej pojechali??my do Sebastiana, gdzie czeka??o nas sporo ubierania. Anto?? i Wiktor dzieciaczki m??odych za??o??yli swoje marynarki w ekspresowym tempie, Sebastian poprawia?? much?? i spinki na dole. Kinga w towarzystwie Moniki w pokoju obok dzielnie dopina??y sukni?? na ostatni guzik. Panowa??a pozytywna atmosfera bez najmniejszych oznak stresu. Punktem kulminacyjnym by??o wzruszaj??ce b??ogos??awie??stwo udzielone przez rodzic??w."
                    }
                    entryContentP2={
                        'Ceremonia odby??a si?? w <a href="https://chocznia.pl/" target="_blank" rel="nofollow">Ko??ciele pw. Narodzenia ??w. Jana Chrzciciela w Choczni</a>. Najpi??kniejszy moment ca??ego dnia, kiedy Wiktor i Anto?? wprowadzaj?? rodzic??w przed o??tarz, dzi??ki zdj??ciom zostanie z nami ju?? na zawsze (fajna ta fotografia). Pi??kne kazanie i wzruszenia podczas przysi??gi ma????e??skiej, wszystko w udekorowanym z dba??o??ci?? o najmniejszy detal ko??ciele. Po mszy ??wi??tej i zdj??ciu grupowym, korzystaj??c jeszcze z ostatnich promieni zachodz??cego s??o??ca udali??my na sal?? weseln?? do <a href="https://straz.tomice.pl/jednostki-osp/ochotnicza-straz-pozarna-w-radoczy/" target="_blank" rel="nofollow">OSP Radocza</a>. Zabawa trwa??a do samego rana, a zesp???? muzyczny swoim graniem gwarantowa?? wysok?? frekwencj?? os??b na parkiecie. Jako go???? specjalny wyst??pi??a Lena, kt??ra zachwyci??a wszystkich swoim g??osem. Bardzo dzi??kuj?? za ten wyj??tkowy dzie??, ciep??e przyj??cie i wspania???? atmosfer??. Mi??ego ogl??dania, a po wi??cej zdj???? zapraszam go??ci weselnych do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"kinga-i-sebastian-reportaz-slubny-wadowice-chocznia-i-radocza"}
                    title={"REPORTA?? ??LUBNY WADOWICE, CHOCZNIA i RADOCZA - KINGA i SEBASTIAN"}
                    tags={"reporta?? ??lubny wadowice,zdj??cia ??lubne chocznia"}
                    date={"20 pa??dziernika 2016"}
                    menuNames={"KINGA i SEBASTIAN"}
                    menuTitle={"REPORTA?? ??LUBNY WADOWICE, CHOCZNIA i RADOCZA"}
                    leadNames={"OLA i PAWE??"}
                    leadTitle={"DW??R SZLACHECKI SIECIECHOWICE, REPORTA?? ??LUBNY MIECH??W"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={process.env.staticS3ImagesPath + "dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
