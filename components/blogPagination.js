import React from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const BlogPagination = (props) => {
  const router = useRouter();

  const handleChange = (event, value) => {
    event.preventDefault();
    if(value == 1) {
      router.push(`/blog`);
    } else {
      router.push(`/blog-${value}`);
    }
    
  };

  const total = Math.ceil(props.totalItems / props.itemsPerPage);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{ pt: 2 }}>
      <Box sx={{ display: "flex" }} justifyContent="center" alignItems="center" className={matches ? 'quote-title' : ''} align="center">
        <Pagination count={total} page={props.page} onChange={handleChange} size="large" hidePrevButton hideNextButton />
      </Box>
    </Box>
  );
};

export default BlogPagination;
