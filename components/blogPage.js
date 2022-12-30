import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LazyLoadWrapper from "./lazyLoadWrapper";
import Divider from '@mui/material/Divider';

const BlogPage = (props) => {
  let paragraph1 = "";
  let paragraph2 = "";
  let paragraph3 = "";
  let paragraph4 = "";
  let paragraph5 = "";
  let paragraph6 = "";
  let paragraph7 = "";
  let paragraph8 = "";
  let paragraph9 = "";
 
  if (props.entryContentP1 != null) {
    paragraph1 = <Typography align="justify" color="text.secondary" sx={{ py:1, '& > a': {color: 'white'} }} dangerouslySetInnerHTML={{ __html: props.entryContentP1 }} />;
  }
  if (props.entryContentP2 != null) {
    paragraph2 = <Typography align="justify" color="text.secondary" sx={{ py: 1, '& > a': {color: 'white'} }} dangerouslySetInnerHTML={{ __html: props.entryContentP2 }} />;
  }
  if (props.entryContentP3 != null) {
    paragraph3 = <Typography align="justify" color="text.secondary" sx={{ py: 1, '& > a': {color: 'white'} }} dangerouslySetInnerHTML={{ __html: props.entryContentP3 }} />;
  }
  if (props.entryContentP4 != null) {
    paragraph4 = <Typography align="justify" color="text.secondary" sx={{ py: 1, '& > a': {color: 'white'} }} dangerouslySetInnerHTML={{ __html: props.entryContentP4 }} />;
  }
  if (props.entryContentP5 != null) {
    paragraph5 = <Typography align="justify" color="text.secondary" sx={{ py: 1, '& > a': {color: 'white'} }} dangerouslySetInnerHTML={{ __html: props.entryContentP5 }} />;
  }
  if (props.entryContentP6 != null) {
    paragraph6 = <Typography align="justify" color="text.secondary" sx={{ py: 1, '& > a': {color: 'white'} }} dangerouslySetInnerHTML={{ __html: props.entryContentP6 }} />;
  }
  if (props.entryContentP7 != null) {
    paragraph7 = <Typography align="justify" color="text.secondary" sx={{ py: 1, '& > a': {color: 'white'} }} dangerouslySetInnerHTML={{ __html: props.entryContentP7 }} />;
  }
  if (props.entryContentP8 != null) {
    paragraph8 = <Typography align="justify" color="text.secondary" sx={{ py: 1, '& > a': {color: 'white'} }} dangerouslySetInnerHTML={{ __html: props.entryContentP8 }} />;
  }
  if (props.entryContentP9 != null) {
    paragraph9 = <Typography align="justify" color="text.secondary" sx={{ py: 1, '& > a': {color: 'white'} }} dangerouslySetInnerHTML={{ __html: props.entryContentP9 }} />;
  }

  let images = null;
  let imagesParagraph1 = null;
  let imagesParagraph2 = null;
  let imagesParagraph3 = null;
  let imagesParagraph4 = null;
  let imagesParagraph5 = null;
  let imagesParagraph6 = null;
  let imagesParagraph7 = null;

  if (props.images) images = <LazyLoadWrapper images={props.images} title={props.tags} />;
  if (props.imagesParagraph1) imagesParagraph1 = <LazyLoadWrapper images={props.imagesParagraph1} title={props.tags} />;
  if (props.imagesParagraph2) imagesParagraph2 = <LazyLoadWrapper images={props.imagesParagraph2} title={props.tags} />;
  if (props.imagesParagraph3) imagesParagraph3 = <LazyLoadWrapper images={props.imagesParagraph3} title={props.tags} />;
  if (props.imagesParagraph4) imagesParagraph4 = <LazyLoadWrapper images={props.imagesParagraph4} title={props.tags} />;
  if (props.imagesParagraph5) imagesParagraph5 = <LazyLoadWrapper images={props.imagesParagraph5} title={props.tags} />;
  if (props.imagesParagraph6) imagesParagraph6 = <LazyLoadWrapper images={props.imagesParagraph6} title={props.tags} />;
  if (props.imagesParagraph7) imagesParagraph7 = <LazyLoadWrapper images={props.imagesParagraph7} title={props.tags} />;

  return (
    <>
    <Box sx={{ pt: 2 }}>
       <Typography variant="h1" sx={{fontSize: "2.1rem"}}>
          {props.title} {props.names}
        </Typography>
      </Box>
      <Divider sx={{pt:1}}/>
    <Typography variant="subtitle2" color="text.secondary" sx={{ textTransform: "uppercase" }}>
    {props.date} - TAGI: {props.tags}
    </Typography>
    <Divider sx={{mb:1}} />


      
        {paragraph1}
        {imagesParagraph1}
        {paragraph2}
        {imagesParagraph2}
        {paragraph3}
        {imagesParagraph3}
        {paragraph4}
        {imagesParagraph4}
        {paragraph5}
        {imagesParagraph5}
        {paragraph6}
        {imagesParagraph6}
        {paragraph7}
        {imagesParagraph7}
        {paragraph8}
        {paragraph9}
      
        

        {images}
            
      </>
    
  );
};

export default BlogPage;
