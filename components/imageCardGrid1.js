import React from 'react';
import hotel_mercure_kasprowy_zakopane from "../public/static/portfolio/hotel_mercure_kasprowy_zakopane.jpg";
import bazylika_bozego_ciala_krakow_fotoreportaz_slubny from "../public/static/portfolio/bazylika_bozego_ciala_krakow_fotoreportaz_slubny.jpg";
import plener_slubny_slowacja from "../public/static/portfolio/plener_slubny_slowacja.jpg";
import dworzyszcze_wola_reportaz_slubny_pod_krakowem from "../public/static/portfolio/dworzyszcze_wola_reportaz_slubny_pod_krakowem.jpg";
import plener_slubny_palac_goetzow_brzesko from "../public/static/portfolio/plener_slubny_palac_goetzow_brzesko.jpg";
import dworek_fantazja_skomielna_biala_fotograf from "../public/static/portfolio/dworek_fantazja_skomielna_biala_fotograf.jpg";
import ogrod_botaniczny from "../public/static/portfolio/ogrod_botaniczny.jpg";
import sesja_narzeczenska_klasztor_w_tyncu from "../public/static/portfolio/sesja_narzeczenska_klasztor_w_tyncu.jpg";
import sala_weselna_biala_wilczyca_kocmyrzow from "../public/static/portfolio/sala_weselna_biala_wilczyca_kocmyrzow.jpg";
import Grid from "@mui/material/Grid";
import ImageCard from "./imageCard";

import klaudia_przemek_start from "../public/static/portfolio/klaudia_przemek_start.jpg";
import wesele_w_beskidach from "../public/static/portfolio/wesele_w_beskidach.jpg";
import sylwestrowy_slub from "../public/static/portfolio/sylwestrowy_slub.jpg";
import plener_slubny_w_krakowie from "../public/static/portfolio/plener_slubny_w_krakowie.jpg";
import reportaz_slubny_rabka_zdroj from "../public/static/portfolio/reportaz_slubny_rabka_zdroj.jpg";
import sesja_narzeczenska_krakow_33 from "../public/static/portfolio/sesja_narzeczenska_krakow_33.jpg";
import reportaz_slubny_krakow from "../public/static/portfolio/reportaz_slubny_krakow.jpg";
import plener_slubny_na_jurze from "../public/static/portfolio/plener_slubny_na_jurze.jpg";
import sesja_plenerowa_rynek_w_krakowie from "../public/static/portfolio/sesja_plenerowa_rynek_w_krakowie.jpg";
import wesele_rustykalne from "../public/static/portfolio/wesele_rustykalne.jpg";


const ImageCardGrid1 = () => {
    return (
        <Grid container direction="row" alignItems="center">
          <Grid item lg={4} p={1}>
           
            <ImageCard
              imgsrc={reportaz_slubny_krakow}
              imgalt="reportaż ślubny kraków"
              linkhref="dom-weselny-biala-perla-radziemice-reportaz-slubny"
              title="REPORTAŻ ŚLUBNY KRAKÓW"
              names="ŻANETA i SEBASTIAN"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCard
              imgsrc={klaudia_przemek_start}
              imgalt="sala weselna w myślenicach, dom weselny bystra podhalańska"
              linkhref="sala-weselna-karolinka-bystra-podhalanska"
              title="WESELE STRAŻACKIE MYŚLENICE"
              names="KLAUDIA i PRZEMYSŁAW"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCard
              imgsrc={sylwestrowy_slub}
              imgalt="ślub w sylwestra, sylwestrowy ślub"
              linkhref="sylwestrowy-slub-sala-bankietowa-impresja-jordanow"
              title="SYLWESTROWY ŚLUB W GÓRACH"
              names="JUSTYNA i DAMIAN"
            />
         
          </Grid>
          <Grid item lg={4} p={1}>         
            <ImageCard
              imgsrc={wesele_rustykalne}
              imgalt="wesele boho i rustykalne"
              linkhref="folwark-wiazy-marszowice-i-rustykalne-wesele-pod-krakowem"
              title="WESELE BOHO i RUSTYKALNE"
              names="PAULA i WOJTEK"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCard
              imgsrc={sesja_plenerowa_rynek_w_krakowie}
              imgalt="plener ślubny kraków"
              linkhref="sesja-slubna-w-krakowie-sukiennice-hotel-stary-bulwary-wislane"
              title="PLENER RYNEK i SUKIENNICE"
              names="OLGA i DAWID"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCard
              imgsrc={plener_slubny_na_jurze}
              imgalt="plener ślubny na jurze"
              linkhref="plener-slubny-zamek-pieskowa-skala"
              title="PLENER ŚLUBNY NA JURZE"
              names="MARTYNA i MICHAŁ"
            />
                 
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCard
              imgsrc={wesele_w_beskidach}
              imgalt="wesele w besikdach"
              linkhref="hotel-zywiecki-sala-przylekowka-wesele-w-beskidach"
              title="WESELE W BESKIDACH"
              names="NICOLA i RAFAŁ"
            />   
         
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCard
              imgsrc={plener_slubny_w_krakowie}
              imgalt="plener ślubny w Krakowie, sprawdzone miejsca"
              linkhref="wymarzony-plener-slubny-w-krakowie-sprawdzone-miejsca"
              title="SESJA ZDJĘCIOWA MOGILANY"
              names="ANNA i TOMASZ"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCard
              imgsrc={sesja_narzeczenska_krakow_33}
              imgalt="sesja narzeczeńska w Krakowie"
              linkhref="brzoskwinia-ogrod-wesele-w-plenerze-sesja-narzeczenska"
              title="SESJA NARZECZEŃSKA W KRAKOWIE"
              names="WIKTORIA i KONRAD"
            />
          </Grid>
        </Grid>
    );
};

export default ImageCardGrid1;