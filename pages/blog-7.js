import React from "react";
import LayoutSitePage from "../components/layoutSitePage";
import BlogList from "../components/blogList";
import Container from "@mui/material/Container";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import BlogPagination from "../components/blogPagination";
import Box from "@mui/material/Box";
import { posts } from "../components/posts";

const Blog = () => {  

  const pageImage = process.env.staticS3ImagesPath + "fotograf_na_slub_rabka_zdroj_start.webp";
  const currentPage = 7;
  const itemsPerPage = 20;
  const offset = (currentPage - 1) * itemsPerPage;

  return (
    <LayoutSitePage
      title="Niezwykłe zdjęcia ślubne"
      description="Niezwykłe zdjęcia ślubne. Repo ślubne, sesja narzeczeńska w mieście. Sprawdź moją ofertę i portfolio."
      keywords="niezwykłe zdjęcia ślubne, reportaź ślubny, sesja zdjęciowa"
      url="https://99foto.pl/blog-7/"
      leadNames="KAMILA i ADRIAN"
      leadTitle="FOTOGRAF NA WESELE RABKA ZDRÓJ, KOŚCIÓŁ ŚW. MARII MAGDALENY"
      leadUrl="/fotograf-na-wesele-rabka-zdroj-kosciol-sw-marii-magdaleny"
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
