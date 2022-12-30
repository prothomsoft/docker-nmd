import React from "react";
import BlogPage from "../components/blogPage";
import LayoutBlogPage from "../components/layoutBlogPage";
import Container from "@mui/material/Container";

const BlogPageComponentNew = (props) => {

  return (
    <LayoutBlogPage
      title={props.headTitle}
      description={props.headDescription}
      keywords={props.headKeywords}
      url={props.headUrl}
      leadImage={props.leadImage}
      leadNames={props.leadNames}
      leadTitle={props.leadTitle}
      leadUrl={props.leadUrl}
      slide={props.slide}
      menuNames={props.menuNames}
      menuTitle={props.menuTitle}>
      <Container>
        <BlogPage
          slug={props.slug}
          images={props.images}
          entryContentP1={props.entryContentP1}
          imagesParagraph1={props.imagesParagraph1}
          entryContentP2={props.entryContentP2}
          imagesParagraph2={props.imagesParagraph2}
          entryContentP3={props.entryContentP3}
          imagesParagraph3={props.imagesParagraph3}
          entryContentP4={props.entryContentP4}
          imagesParagraph4={props.imagesParagraph4}
          entryContentP5={props.entryContentP5}
          imagesParagraph5={props.imagesParagraph5}
          entryContentP6={props.entryContentP6}
          imagesParagraph6={props.imagesParagraph6}
          entryContentP7={props.entryContentP7}
          imagesParagraph7={props.imagesParagraph7}
          entryContentP8={props.entryContentP8}
          entryContentP9={props.entryContentP9}
          title={props.title}
          tags={props.tags}
          date={props.date}
          menuNames={props.menuNames}
        />
      </Container>      
    </LayoutBlogPage>
  );
};

export default BlogPageComponentNew;
