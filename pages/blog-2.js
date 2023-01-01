import React from "react";
import LayoutSitePage from "../components/layoutSitePage";
import BlogList from "../components/blogList";
import Container from "@mui/material/Container";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import BlogPagination from "../components/blogPagination";
import Box from "@mui/material/Box";
import { posts } from "../components/posts";

const Blog = () => {  

  const pageImage = process.env.staticImagesPath + "dworzyszcze_wola_reportaz_slubny_pod_krakowem_start.webp";
  const currentPage = 2;
  const itemsPerPage = 20;
  const offset = (currentPage - 1) * itemsPerPage;

  return (
    <LayoutSitePage
      title="Ponadczasowe fotografie ślubne"
      description="Ponadczasowe fotografie ślubne. Pełne emocji reportaże ślubne. Sprawdź moją ofertę i portfolio. Serdecznie zapraszam !"
      keywords="ponadczasowe fotografie ślubne, fotografia ślubna Kraków"
      url="https://99foto.pl/blog-2/"
      leadNames="SYLWIA i MICHAŁ"
      leadTitle="WESELE W STYLU BOHO, SALA DWORZYSZCZE WOLA, KRAKÓW"
      leadUrl="/wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"
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
