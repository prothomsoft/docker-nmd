import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const BlogList = (props) => {
  return (
    <>
      {props.posts.map((post, key) => (
        <PostLink key={key} post={post} height={762} />
      ))}
    </>
  );
};

const PostLink = ({ post }) => (
  <>
    <Box sx={{ pt: 2 }}>
      <Typography variant="h1" sx={{ fontSize: "2.1rem" }}>
        {post.title} - {post.names}
      </Typography>
    </Box>
    <Divider sx={{ pt: 1 }} />
    <Typography variant="subtitle2" color="text.secondary" sx={{ textTransform: "uppercase" }}>
      {getPostDate(post.date)} - TAGI: {getPostTags(post.tags)}
    </Typography>
    <Divider sx={{ mb: 1 }} />

    <Link href={`/${post.slug}`}>
      <Image alt={post.title} src={post.image} width={1140} height={762} style={{width: '100%', height: 'auto'}} />
    </Link>

    <Typography color="text.secondary" align="justify" sx={{ py: 1, "& > a": { color: "white" } }} dangerouslySetInnerHTML={{ __html: post.content }} />

    <Box sx={{ pt: 1, pb: 2 }}>
      <Link href={post.slug}>
        <Button variant="blogButton" fullWidth endIcon={<ArrowForward />}>
          ZOBACZ WIĘCEJ
        </Button>
      </Link>
    </Box>
  </>
);

function getPostDate(content) {
  let postDate = new Date(Date.parse(content));
  let MonthName = new Array(12);
  MonthName[0] = "stycznia ";
  MonthName[1] = "lutego ";
  MonthName[2] = "marca ";
  MonthName[3] = "kwietnia ";
  MonthName[4] = "maja ";
  MonthName[5] = "czerwca ";
  MonthName[6] = "lipca ";
  MonthName[7] = "sierpnia ";
  MonthName[8] = "września ";
  MonthName[9] = "października ";
  MonthName[10] = "listopada ";
  MonthName[11] = "grudnia ";
  let month = postDate.getMonth();
  let day = postDate.getDate();
  let year = postDate.getFullYear();
  return day + " " + MonthName[month] + " " + year;
}

function getPostTags(content) {
  let returnContent = "";
  for (let i = 0; i < 5; i++) {
    if (content[i]) {
      returnContent = returnContent.concat(content[i]);
      returnContent = returnContent.concat(", ");
    }
  }
  return (returnContent = returnContent.substring(0, returnContent.length - 2));
}

export default BlogList;
