import React from "react";
import LayoutSitePage from "../components/layoutSitePage";
import BlogList from "../components/blogList";
import Container from "@mui/material/Container";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import BlogPagination from "../components/blogPagination";
import Box from "@mui/material/Box";
import { posts } from "../components/posts";

const Blog = () => {  

  const pageImage = process.env.staticS3ImagesPath + "dom_weselny_euforia_myslenice_1.webp";
  const currentPage = 4;
  const itemsPerPage = 20;
  const offset = (currentPage - 1) * itemsPerPage;

  return (
    <LayoutSitePage
      title="Fotograf ślubny, ceny i opinie"
      description="Zdjęcia ślubne Kraków. Fotograf ślubny, ceny i opinie, reportaże ślubne. Zapraszam. Sprawdź moją ofertę i portfolio."
      keywords="fotograf ślubny, ceny i opinie, sesja plenerowa"
      url="https://99foto.pl/blog-4/"
      leadNames="IZABELA i ARKADIUSZ"
      leadTitle="DOM WESELNY EUFORIA MYŚLENICE i SŁONECZNE LOVE"
      leadUrl="/dom-weselny-euforia-myslenice-i-sloneczne-love"
      leadImage={pageImage}>
      <Container sx={{ pt:8, pb: 5 }}>
        <Box sx={{pt:13, display: { xs: "none", lg: "block", xl: "block" }}}></Box>
        <BlogList posts={posts.slice(offset).slice(0, itemsPerPage)} />
        <BlogPagination page={currentPage} totalItems={posts.length} itemsPerPage={itemsPerPage}/>       
      </Container>
      <ParallaxImageFooter leadImage={pageImage} leadUrl="" height="70vh" />
    </LayoutSitePage>
  );
};

export default Blog;
