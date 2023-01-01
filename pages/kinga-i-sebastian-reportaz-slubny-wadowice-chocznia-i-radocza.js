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
                    headTitle={"Reportaż ślubny Wadowice, zdjęcia ślubne OSP Chocznia"}
                    headDescription={"Przepiękne rodzinne wejście do kościoła podczas którego Antoś i Wiktor stanęli na wysokości zadania, pozytywna atmosfera i zabawa do białego rana. Zapraszam."}
                    headKeywords={"reportaż ślubny wadowice,zdjęcia ślubne chocznia"}
                    headUrl={"https://99foto.pl/kinga-i-sebastian-reportaz-slubny-wadowice-chocznia-i-radocza"}
                    entryContentP1={
                        "Fotografem ślubnym Kingi i Sebastiana zostałem z polecenia Magdy i Lucjana, których pozdrawiam. Ich ślub i sesję plenerową możecie odnaleźć i pooglądać na moim blogu. Był to mój drugi raz w Hollywood Studio Leny Czechowicz i drugi raz w Wadowicach mieście Jana Pawła II. Przygotowania zaczęliśmy o godzinie 13. Lena i Kinga znają się od bardzo dawna i mieszkają po sąsiedzku, więc makijaż i włosy dotarły do poziomu Top Model z ramówki stacji TVN. Chwilkę później pojechaliśmy do Sebastiana, gdzie czekało nas sporo ubierania. Antoś i Wiktor dzieciaczki młodych założyli swoje marynarki w ekspresowym tempie, Sebastian poprawiał muchę i spinki na dole. Kinga w towarzystwie Moniki w pokoju obok dzielnie dopinały suknię na ostatni guzik. Panowała pozytywna atmosfera bez najmniejszych oznak stresu. Punktem kulminacyjnym było wzruszające błogosławieństwo udzielone przez rodziców."
                    }
                    entryContentP2={
                        'Ceremonia odbyła się w <a href="https://chocznia.pl/" target="_blank" rel="nofollow">Kościele pw. Narodzenia św. Jana Chrzciciela w Choczni</a>. Najpiękniejszy moment całego dnia, kiedy Wiktor i Antoś wprowadzają rodziców przed ołtarz, dzięki zdjęciom zostanie z nami już na zawsze (fajna ta fotografia). Piękne kazanie i wzruszenia podczas przysięgi małżeńskiej, wszystko w udekorowanym z dbałością o najmniejszy detal kościele. Po mszy świętej i zdjęciu grupowym, korzystając jeszcze z ostatnich promieni zachodzącego słońca udaliśmy na salę weselną do <a href="https://straz.tomice.pl/jednostki-osp/ochotnicza-straz-pozarna-w-radoczy/" target="_blank" rel="nofollow">OSP Radocza</a>. Zabawa trwała do samego rana, a zespół muzyczny swoim graniem gwarantował wysoką frekwencję osób na parkiecie. Jako gość specjalny wystąpiła Lena, która zachwyciła wszystkich swoim głosem. Bardzo dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i wspaniałą atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"kinga-i-sebastian-reportaz-slubny-wadowice-chocznia-i-radocza"}
                    title={"REPORTAŻ ŚLUBNY WADOWICE, CHOCZNIA i RADOCZA - KINGA i SEBASTIAN"}
                    tags={"reportaż ślubny wadowice,zdjęcia ślubne chocznia"}
                    date={"20 października 2016"}
                    menuNames={"KINGA i SEBASTIAN"}
                    menuTitle={"REPORTAŻ ŚLUBNY WADOWICE, CHOCZNIA i RADOCZA"}
                    leadNames={"OLA i PAWEŁ"}
                    leadTitle={"DWÓR SZLACHECKI SIECIECHOWICE, REPORTAŻ ŚLUBNY MIECHÓW"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={process.env.staticS3ImagesPath + "dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.webp"}
                />
            
        );
};

export default BlogPageComponent;
