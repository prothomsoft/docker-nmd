import React from 'react';
import Grid from "@mui/material/Grid";
import ImageCardSmall from "./imageCardSmall";

const wesele_w_beskidach = process.env.staticS3ImagesPath + "portfolio/small/wesele_w_beskidach.webp";
const sylwestrowy_slub = process.env.staticS3ImagesPath + "portfolio/small/sylwestrowy_slub.webp";
const plener_slubny_w_krakowie = process.env.staticS3ImagesPath + "portfolio/small/plener_slubny_w_krakowie.webp";
const sesja_narzeczenska_krakow_33 = process.env.staticS3ImagesPath + "portfolio/small/sesja_narzeczenska_krakow_33.webp";
const plener_slubny_na_jurze = process.env.staticS3ImagesPath + "portfolio/small/plener_slubny_na_jurze.webp";
const sesja_plenerowa_rynek_w_krakowie = process.env.staticS3ImagesPath + "portfolio/small/sesja_plenerowa_rynek_w_krakowie.webp";
const wesele_rustykalne = process.env.staticS3ImagesPath + "portfolio/small/wesele_rustykalne.webp";
const plener_slubny_palac_goetzow_brzesko = process.env.staticS3ImagesPath + "portfolio/small/plener_slubny_palac_goetzow_brzesko.webp";
const panorama_portfolio = process.env.staticS3ImagesPath + "portfolio/small/panorama_portfolio.webp";

const ImageCardGridHistorySmallImages = () => {
    return (
        <Grid container direction="row" alignItems="center">
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={sylwestrowy_slub}
              imgalt="ślub w sylwestra, sylwestrowy ślub"
              linkhref="sylwestrowy-slub-sala-bankietowa-impresja-jordanow"
              title="SYLWESTROWY ŚLUB W GÓRACH"
              names="JUSTYNA i DAMIAN"
            />
            
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={sesja_plenerowa_rynek_w_krakowie}
              imgalt="plener ślubny kraków"
              linkhref="sesja-slubna-w-krakowie-sukiennice-hotel-stary-bulwary-wislane"
              title="PLENER RYNEK i SUKIENNICE"
              names="OLGA i DAWID"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={plener_slubny_w_krakowie}
              imgalt="plener ślubny w Krakowie, sprawdzone miejsca"
              linkhref="wymarzony-plener-slubny-w-krakowie-sprawdzone-miejsca"
              title="SESJA ZDJĘCIOWA MOGILANY"
              names="ANNA i TOMASZ"
            />  
          </Grid>
          <Grid item lg={4} p={1}> 
          <ImageCardSmall
              imgsrc={panorama_portfolio}
              imgalt="dom weselny panorama stary wiśnicz"
              linkhref="dom-weselny-panorama-stary-wisnicz"
              title="ŚLUB PRZY ZAMKU STARY WIŚNICZ"
              names="MAGDALENA i WOJCIECH"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={sesja_narzeczenska_krakow_33}
              imgalt="sesja narzeczeńska w Krakowie"
              linkhref="brzoskwinia-ogrod-wesele-w-plenerze-sesja-narzeczenska"
              title="SESJA NARZECZEŃSKA W KRAKOWIE"
              names="WIKTORIA i KONRAD"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={wesele_rustykalne}
              imgalt="wesele boho i rustykalne"
              linkhref="folwark-wiazy-marszowice-i-rustykalne-wesele-pod-krakowem"
              title="WESELE BOHO i RUSTYKALNE"
              names="PAULA i WOJTEK"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
             imgsrc={plener_slubny_palac_goetzow_brzesko}
             imgalt="plener ślubny pałac goetzów brzesko"
             linkhref="sesja-slubna-jesienia-palac-goetzow-okocimskich"
             title="PLENER ŚLUBNY PAŁAC GOETZÓW"
             names="IZABELA i ARKADIUSZ"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={plener_slubny_na_jurze}
              imgalt="plener ślubny na jurze"
              linkhref="plener-slubny-zamek-pieskowa-skala"
              title="PLENER ŚLUBNY NA JURZE"
              names="MARTYNA i MICHAŁ"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={wesele_w_beskidach}
              imgalt="wesele w besikdach"
              linkhref="hotel-zywiecki-sala-przylekowka-wesele-w-beskidach"
              title="WESELE W BESKIDACH ŻYWIEC"
              names="NICOLA i RAFAŁ"
            /> 
          </Grid>
        </Grid>
    );
};

export default ImageCardGridHistorySmallImages;