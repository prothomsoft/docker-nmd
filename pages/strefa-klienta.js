import LayoutSitePage from "../components/layoutSitePage";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ClientList from "../components/clientList";

const BlogListComponent = ({ posts }) => {

  const pageImage = process.env.staticS3ImagesPath + "sala_weselna_biala_wilczyca_kocmyrzow.webp";

  return (
    <LayoutSitePage
      title="Strefa klienta"
      description="Strefa klienta to miejsce, w którym możesz oglądać zdjęcia i dzielić się nimi ze znajomymi i rodziną. Serdecznie zapraszam !"
      keywords="Strefa klienta, moje zdjęcia, dobre zdjęcia"
      url="https://99foto.pl/strefa-klienta/"
      leadNames="MONIKA i MARTIN"
      leadTitle="WESELE MIĘDZYNARODOWE i POLSKIE TRADYCJE WESELNE"
      leadUrl="/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne"
      leadImage={pageImage}>
      <Container sx={{ pt:8, pb: 5 }}>
        <Box sx={{pt:13, display: { xs: "none", lg: "block", xl: "block" }}}></Box>
        <ClientList posts={posts} />
      </Container>      
    </LayoutSitePage>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://sk.99foto.pl/api/users/clients');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    revalidate: 300,
  };
}
export default BlogListComponent;