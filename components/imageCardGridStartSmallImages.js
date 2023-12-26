import Grid from "@mui/material/Grid";
import React from 'react';
import ImageCardSmall from "./imageCardSmall";

const hotel_mercure_kasprowy_zakopane = process.env.staticS3ImagesPath + "portfolio/small/hotel_mercure_kasprowy_zakopane.webp";
const dworzyszcze_wola_reportaz_slubny_pod_krakowem = process.env.staticS3ImagesPath + "portfolio/small/dworzyszcze_wola_reportaz_slubny_pod_krakowem.webp";
const reportaz_slubny_krakow = process.env.staticS3ImagesPath + "portfolio/small/reportaz_slubny_krakow.webp";
const dworek_fantazja_skomielna_biala_fotograf = process.env.staticS3ImagesPath + "portfolio/small/dworek_fantazja_skomielna_biala_fotograf.webp";
const zajazd_mogielica_portfolio = process.env.staticS3ImagesPath + "portfolio/small/zajazd_mogielica_portfolio.webp";
const slub_palac_goetz_portfolio = process.env.staticS3ImagesPath + "portfolio/small/slub_palac_goetz_portfolio.webp";
const oberwanka_lostowka_portfolio = process.env.staticS3ImagesPath + "portfolio/small/oberwanka_lostowka_portfolio.webp";
const fotograf_na_wesele_rabka_zdroj_portfolio = process.env.staticS3ImagesPath + "portfolio/small/fotograf_na_wesele_rabka_zdroj_portfolio.webp";
const klaudia_przemek_start = process.env.staticS3ImagesPath + "portfolio/small/klaudia_przemek_start.webp";

const ImageCardGridStartSmallImages = () => {
    return (
        <Grid container direction="row" alignItems="center">
          <Grid item lg={4} p={1}>
            <ImageCardSmall
              imgsrc={slub_palac_goetz_portfolio}
              imgalt="pałac goetz, ślub humanistyczny Kraków"
              linkhref="palac-goetz-slub-humanistyczny"
              title="ŚLUB HUMANISTYCZNY KRAKÓW"
              names="KAROLINA i RYAN"
            />
           </Grid>
          <Grid item lg={4} p={1}>
            <ImageCardSmall
             imgsrc={reportaz_slubny_krakow}
             imgalt="reportaż ślubny kraków"
             linkhref="dom-weselny-biala-perla-radziemice-reportaz-slubny"
             title="REPORTAŻ ŚLUBNY KRAKÓW"
             names="ŻANETA i SEBASTIAN"
            />
           </Grid>
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
              imgsrc={dworzyszcze_wola_reportaz_slubny_pod_krakowem}
              imgalt="wesele w stylu boho i rustykalnym"
              linkhref="wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"
              title="WESELE STYL RUSTYKALNY"
              names="SYLWIA i MICHAŁ"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={fotograf_na_wesele_rabka_zdroj_portfolio}
              imgalt="fotograf na wesele Rabka Zdrój"
              linkhref="fotograf-na-wesele-rabka-zdroj-kosciol-sw-marii-magdaleny"
              title="FOTOGRAF NA WESELE RABKA"
              names="KAMILA i ADRIAN"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={oberwanka_lostowka_portfolio}
              imgalt="bazylika bożego ciała kraków fotoreportaż ślubny"
              linkhref="dom-weselny-oberwanka-lostowka"
              title="ŚLUB W BESKIDACH OBERWANKA"
              names="ANGELIKA i MATEUSZ"
            />
          </Grid>
          <Grid item lg={4} p={1}>
          <ImageCardSmall
              imgsrc={zajazd_mogielica_portfolio}
              imgalt="wesele rustykalne, polskie tradycje weselne"
              linkhref="dom-weselny-mogielica-jurkow-rustykalne-wesele"
              title="WESELE RUSTYKALNE MSZANA"
              names="NATALIA i KRZYSZTOF"
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
              imgsrc={klaudia_przemek_start}
              imgalt="sala weselna w myślenicach, dom weselny bystra podhalańska"
              linkhref="sala-weselna-karolinka-bystra-podhalanska"
              title="WESELE STRAŻACKIE MYŚLENICE"
              names="KLAUDIA i PRZEMYSŁAW"
            />
          </Grid>
        </Grid>
    );
};

export default ImageCardGridStartSmallImages;