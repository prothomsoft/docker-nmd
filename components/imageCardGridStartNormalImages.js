import Grid from "@mui/material/Grid";
import React from 'react';
import ImageCard from "./imageCard";
const hotel_mercure_kasprowy_zakopane = process.env.staticS3ImagesPath + "portfolio/hotel_mercure_kasprowy_zakopane.webp";
const dworzyszcze_wola_reportaz_slubny_pod_krakowem = process.env.staticS3ImagesPath + "portfolio/dworzyszcze_wola_reportaz_slubny_pod_krakowem.webp";
const dworek_fantazja_skomielna_biala_fotograf = process.env.staticS3ImagesPath + "portfolio/dworek_fantazja_skomielna_biala_fotograf.webp";
const zajazd_mogielica_portfolio = process.env.staticS3ImagesPath + "portfolio/zajazd_mogielica_portfolio.webp";
const slub_palac_goetz_portfolio = process.env.staticS3ImagesPath + "portfolio/slub_palac_goetz_portfolio.webp";
const oberwanka_lostowka_portfolio = process.env.staticS3ImagesPath + "portfolio/oberwanka_lostowka_portfolio.webp";
const fotograf_na_wesele_rabka_zdroj_portfolio = process.env.staticS3ImagesPath + "portfolio/fotograf_na_wesele_rabka_zdroj_portfolio.webp";
const klaudia_przemek_start = process.env.staticS3ImagesPath + "portfolio/klaudia_przemek_start.webp";
const reportaz_slubny_krakow = process.env.staticS3ImagesPath + "portfolio/reportaz_slubny_krakow.webp";


const ImageCardGridStartNormalImages = () => {
    return (
        <Grid container direction="row" alignItems="center">
          <Grid item lg={4} p={1}>
            <ImageCard
              imgsrc={slub_palac_goetz_portfolio}
              imgalt="pałac goetz, ślub humanistyczny Kraków"
              linkhref="palac-goetz-slub-humanistyczny"
              title="ŚLUB HUMANISTYCZNY KRAKÓW"
              names="KAROLINA i RYAN"
            />
          </Grid>
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
               imgsrc={hotel_mercure_kasprowy_zakopane}
               imgalt="wesele w zakopanem, hotel mercury kasprowy, zespół ich troje na weselu"
               linkhref="wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje"
               title="WESELE W ZAKOPANEM"
               names="PATRYCJA i TOMASZ"
            />
          </Grid>

          <Grid item lg={4} p={1}>
            <ImageCard
              imgsrc={dworzyszcze_wola_reportaz_slubny_pod_krakowem}
              imgalt="wesele w stylu boho i rustykalnym"
              linkhref="wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"
              title="WESELE STYL RUSTYKALNY"
              names="SYLWIA i MICHAŁ"
            />
          </Grid>
          <Grid item lg={4} p={1}>
            <ImageCard
              imgsrc={fotograf_na_wesele_rabka_zdroj_portfolio}
              imgalt="fotograf na wesele Rabka Zdrój"
              linkhref="fotograf-na-wesele-rabka-zdroj-kosciol-sw-marii-magdaleny"
              title="FOTOGRAF NA WESELE RABKA"
              names="KAMILA i ADRIAN"
            />
          </Grid>
          <Grid item lg={4} p={1}>
            <ImageCard
              imgsrc={oberwanka_lostowka_portfolio}
              imgalt="bazylika bożego ciała kraków fotoreportaż ślubny"
              linkhref="dom-weselny-oberwanka-lostowka"
              title="ŚLUB W BESKIDACH OBERWANKA"
              names="ANGELIKA i MATEUSZ"
            />
          </Grid>

          <Grid item lg={4} p={1}>
            <ImageCard
              imgsrc={zajazd_mogielica_portfolio}
              imgalt="wesele rustykalne, polskie tradycje weselne"
              linkhref="dom-weselny-mogielica-jurkow-rustykalne-wesele"
              title="WESELE RUSTYKALNE MSZANA"
              names="NATALIA i KRZYSZTOF"
            />
          </Grid>
          <Grid item lg={4} p={1}>
            <ImageCard
               imgsrc={dworek_fantazja_skomielna_biala_fotograf}
               imgalt="ślub w stylu glamour"
               linkhref="dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"
               title="ŚLUB W STYLU GLAMOUR"
               names="PATRYCJA i KRZYSZTOF"
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
        </Grid>
    );
};

export default ImageCardGridStartNormalImages;