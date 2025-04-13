"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export default function ImageCarousel({ images, autoplaySpeed = 2000 }) { // Added autoplaySpeed as a prop with a default value
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed, // Use the passed autoplaySpeed prop
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true, centerPadding: "0px" },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true, centerPadding: "40px" },
      },
      {
        breakpoint: 1140,
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true, centerPadding: "80px" },
      },
      {
        breakpoint: 1536,
        settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: true, centerPadding: "80px" },
      },
      {
        breakpoint: 2400,
        settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: true, centerPadding: "80px" },
      },
    ],
  };

  return (
    <div className="w-full py-4 overflow-hidden relative">
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} className="px-4"> {/* Add horizontal padding */}
            <div className="relative w-full" style={{ padding: "3px" }}>
              <Image
                src={image.image}
                alt={`Image ${index + 1}`}
                layout="responsive" // Makes the image responsive
                width={1140} // Set the natural width of the image
                height={760} // Set the natural height of the image
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}