import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LazyLoadWrapper from "./lazyLoadWrapper";
import Divider from "@mui/material/Divider";

const BlogPage = (props) => {
  const renderParagraph = (content) =>
    content && (
      <Typography
        align="justify"
        color="text.secondary"
        sx={{ py: 1, "& > a": { color: "white" } }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );

  const renderImages = (images) =>
    images && <LazyLoadWrapper images={images} title={props.tags} />;

  return (
    <>
      <Box sx={{ pt: 2 }}>
        <Typography variant="h1" sx={{ fontSize: "2.1rem" }}>
          {props.title} {props.names}
        </Typography>
      </Box>
      <Divider sx={{ pt: 1 }} />
      <Typography
        variant="subtitle2"
        color="text.secondary"
        sx={{ textTransform: "uppercase" }}
      >
        {props.date} - TAGI: {props.tags}
      </Typography>
      <Divider sx={{ mb: 1 }} />

      {renderParagraph(props.entryContentP1)}
      {renderImages(props.imagesParagraph1)}
      {renderParagraph(props.entryContentP2)}
      {renderImages(props.imagesParagraph2)}
      {renderParagraph(props.entryContentP3)}
      {renderImages(props.imagesParagraph3)}
      {renderParagraph(props.entryContentP4)}
      {renderImages(props.imagesParagraph4)}
      {renderParagraph(props.entryContentP5)}
      {renderImages(props.imagesParagraph5)}
      {renderParagraph(props.entryContentP6)}
      {renderImages(props.imagesParagraph6)}
      {renderParagraph(props.entryContentP7)}
      {renderImages(props.imagesParagraph7)}
      {renderParagraph(props.entryContentP8)}
      {renderParagraph(props.entryContentP9)}

      {renderImages(props.images)}
    </>
  );
};

export default BlogPage;
