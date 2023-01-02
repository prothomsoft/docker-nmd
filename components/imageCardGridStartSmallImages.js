import React from 'react';
import Grid from "@mui/material/Grid";
import ImageCardSmall from "./ImageCardSmall";
const hotel_mercure_kasprowy_zakopane = process.env.staticS3ImagesPath + "portfolio/small/hotel_mercure_kasprowy_zakopane.webp";
const bazylika_bozego_ciala_krakow_fotoreportaz_slubny = process.env.staticS3ImagesPath + "portfolio/small/bazylika_bozego_ciala_krakow_fotoreportaz_slubny.webp";
const plener_slubny_slowacja = process.env.staticS3ImagesPath + "portfolio/small/plener_slubny_slowacja.webp";
const dworzyszcze_wola_reportaz_slubny_pod_krakowem = process.env.staticS3ImagesPath + "portfolio/small/dworzyszcze_wola_reportaz_slubny_pod_krakowem.webp";
const plener_slubny_palac_goetzow_brzesko = process.env.staticS3ImagesPath + "portfolio/small/plener_slubny_palac_goetzow_brzesko.webp";
const dworek_fantazja_skomielna_biala_fotograf = process.env.staticS3ImagesPath + "portfolio/small/dworek_fantazja_skomielna_biala_fotograf.webp";
const ogrod_botaniczny = process.env.staticS3ImagesPath + "portfolio/small/ogrod_botaniczny.webp";
const sesja_narzeczenska_klasztor_w_tyncu = process.env.staticS3ImagesPath + "portfolio/small/sesja_narzeczenska_klasztor_w_tyncu.webp";
const sala_weselna_biala_wilczyca_kocmyrzow = process.env.staticS3ImagesPath + "portfolio/small/sala_weselna_biala_wilczyca_kocmyrzow.webp";

const ImageCardGridStartSmallImages = () => {
    return (
        <Grid container direction="row" alignItems="center">
          <Grid item lg={4} p={1}>
            <ImageCardSmall
              imgsrc={hotel_mercure_kasprowy_zakopane}
              imgalt="wesele w zakopanem, hotel mercury kasprowy, zespół ich troje na weselu"
              linkhref="wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje"
              title="WESELE W ZAKOPANEM"
              names="PATRYCJA i TOMASZ"
            />
          </Grid>
          <Grid item lg={4} p={1}>
            <ImageCardSmall
              imgsrc={bazylika_bozego_ciala_krakow_fotoreportaz_slubny}
              imgalt="bazylika bożego ciała kraków fotoreportaż ślubny"
              linkhref="bazylika-bozego-ciala-krakow-fotoreportaz-slubny"
              title="REPORTAŻ ŚLUBNY KRAKÓW"
              names="ANNA i PIOTR"
            />
          </Grid>
          <Grid item lg={4} p={1}>
            <ImageCardSmall
              imgsrc={plener_slubny_slowacja}
              imgalt="plener ślubny w górach"
              linkhref="plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"
              title="PLENER ŚLUBNY W GÓRACH"
              names="MAŁGORZATA i RAFAŁ"
            />
          </Grid>

          <Grid item lg={4} p={1}>
            <ImageCardSmall
              imgsrc={dworzyszcze_wola_reportaz_slubny_pod_krakowem}
              imgalt="wesele w stylu boho i rustykalnym"
              linkhref="wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"
              title="WESELE W STYLU RUSTYKALNYM"
              names="SYLWIA i MICHAŁ"
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
              imgsrc={dworek_fantazja_skomielna_biala_fotograf}
              imgalt="ślub w stylu glamour"
              linkhref="dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"
              title="ŚLUB W STYLU GLAMOUR"
              names="PATRYCJA i KRZYSZTOF"
            />
          </Grid>

          <Grid item lg={4} p={1}>
            <ImageCardSmall
              imgsrc={ogrod_botaniczny}
              imgalt="fotograf ślubny kraków"
              linkhref="ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"
              title="FOTOGRAF ŚLUBNY KRAKÓW"
              names="DAJANA i SYLWESTER"
            />
          </Grid>
          <Grid item lg={4} p={1}>
            <ImageCardSmall
              imgsrc={sesja_narzeczenska_klasztor_w_tyncu}
              imgalt="sesja ślubna kraków"
              linkhref="park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca"
              title="SESJA ŚLUBNA KRAKÓW"
              names="TERESA i ANDRZEJ"
            />
          </Grid>
          <Grid item lg={4} p={1}>
            <ImageCardSmall
              imgsrc={sala_weselna_biala_wilczyca_kocmyrzow}
              imgalt="wesele międzynarodowe, polskie tradycje weselne"
              linkhref="wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne"
              title="WESELE MIĘDZYNARODOWE KRAKÓW"
              names="MONIKA i MARTIN"
            />
          </Grid>
        </Grid>
    );
};

export default ImageCardGridStartSmallImages;