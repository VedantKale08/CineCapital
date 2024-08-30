import React from 'react'
import Image from 'next/image';
import Carousel from 'react-multi-carousel';

function BannerCarousel() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      dots:true
    };
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 8,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
  return (
    <div>
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={2000}
        className="w-full h-80"
      >
        {[1, 2, 3].map((item, index) => (
          <div className="w-full " key={index}>
            <Image
              src="/assets/rect_banner.avif"
              width={0}
              height={0}
              className="w-full rounded-md cursor-pointer"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default BannerCarousel