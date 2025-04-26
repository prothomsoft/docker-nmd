"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Box from "@mui/material/Box";

const images = [
  { src: "/slick/slick2.webp", alt: "fotograf ślubny Kraków" },
  { src: "/slick/slick8.webp", alt: "plener ślubny w Krakowie" },
  { src: "/slick/slick5.webp", alt: "sesja narzeczeńska na Starym Mieście" },
  { src: "/slick/slick14.webp", alt: "fotografia ślubna małopolska" },
  { src: "/slick/slick6.webp", alt: "sesja ślubna w górach" },
  { src: "/slick/slick4.webp", alt: "plener ślubny w Ogrodzie Botanicznym" },
  { src: "/slick/slick11.webp", alt: "reportaż ślubny bez pozowania" }
];

export default function ImageCarouselHeader() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2400,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
    ],
  };

  return (
    <Box sx={{ width: "100%", py: 2, overflow: "hidden", position: "relative" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              px: 1,
              mx: 1,
              "&:focus": { outline: "none" }, // Removes the focus frame
            }}
          >
            <Image
              src={image.src}
              alt={image.alt} // Passes the alt text dynamically
              width={480} // Set the natural width of the image
              height={600} // Set the natural height of the image
              style={{ width: "100%", height: "auto" }} // Makes the image responsive
              loading="lazy"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}