import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography, Box, Button, Divider } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";

const BlogList = ({ posts }) => (
  <>
    {posts.map((post, key) => (
      <PostLink key={key} post={post} />
    ))}
  </>
);

const PostLink = ({ post }) => (
  <>
    <Box sx={{ pt: 2 }}>
      <Typography variant="h1" sx={{ fontSize: "2.1rem" }}>
        {post.title} - {post.names}
      </Typography>
    </Box>
    <Divider sx={{ pt: 1 }} />
    <Typography variant="subtitle2" color="text.secondary" sx={{ textTransform: "uppercase" }}>
      {formatPostDate(post.date)} - TAGI: {formatPostTags(post.tags)}
    </Typography>
    <Divider sx={{ mb: 1 }} />

    <Link href={`/${post.slug}`}>
      <Image
        quality={100}
        alt={post.title}
        src={post.image}
        width={1140}
        height={762}
        style={{ width: "100%", height: "auto" }}
      />
    </Link>

    <Typography
      color="text.secondary"
      align="justify"
      sx={{ py: 1, "& > a": { color: "white" } }}
      dangerouslySetInnerHTML={{ __html: post.content }}
    />

    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Centers the button horizontally
        alignItems: "center", // Centers the button vertically
        py: 1,
      }}
    >
      <Box
        sx={{
          width: "100%", // Matches the width of the image
          maxWidth: "1140px", // Matches the image's max width
          pt: 1,
          pb: 2,
        }}
      >
        <Button
          variant="blogButton"
          fullWidth
          endIcon={<ArrowForward />}
          component={Link}
          href={post.slug}
        >
          ZOBACZ WIĘCEJ
        </Button>
      </Box>
    </Box>
  </>
);

const formatPostDate = (date) => {
  const postDate = new Date(date);
  const months = [
    "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
    "lipca", "sierpnia", "września", "października", "listopada", "grudnia",
  ];
  return `${postDate.getDate()} ${months[postDate.getMonth()]} ${postDate.getFullYear()}`;
};

const formatPostTags = (tags) => tags.slice(0, 5).join(", ");

export default BlogList;
