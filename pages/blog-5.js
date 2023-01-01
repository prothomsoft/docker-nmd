import React from "react";
import LayoutSitePage from "../components/layoutSitePage";
import BlogList from "../components/blogList";
import Container from "@mui/material/Container";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import BlogPagination from "../components/blogPagination";
import Box from "@mui/material/Box";
import { posts } from "../components/posts";

const Blog = () => {  

  const pageImage = process.env.staticS3ImagesPath + "plener_slubny_zamek_pieskowa_skala_krakow.webp";
  const currentPage = 5;
  const itemsPerPage = 20;
  const offset = (currentPage - 1) * itemsPerPage;

  return (
    <LayoutSitePage
      title="Niezapomniane plenery w Krakowie"
      description="Niezapomniane plenery w Krakowie. Piękne zdjęcia, uśmiechy, buziaki, przytulasy. Sprawdź moją ofertę i portfolio."
      keywords="niezapomniane plenery Kraków, fotograf ślubny, sesja zdjęciowa"
      url="https://99foto.pl/blog-5/"
      leadNames="MARTYNA i MICHAŁ"
      leadTitle="PLENER ŚLUBNY ZAMEK PIESKOWA SKAŁA"
      leadUrl="/plener-slubny-zamek-pieskowa-skala"
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
