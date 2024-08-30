"use client";
import React from "react";
import BannerCarousel from "./BannerCarousel";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Triangle } from "lucide-react";

function Feed() {
  const slides = [
    "/assets/col1.jpg",
    "/assets/col2.avif",
    "/assets/col3.png",
    "/assets/col5.avif",
    "/assets/col6.avif",
    "/assets/col2.avif",
    "/assets/col3.png",
    "/assets/col5.avif",
    "/assets/col6.avif",
    "/assets/col6.avif",
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
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
    <div className="ml-[109px] h-full px-4 py-8 flex flex-col gap-12">
      <BannerCarousel />

      {/* Market Today */}
      <div className="flex flex-col gap-4 pr-8">
        <div className="flex justify-between text-white">
          <p className="text-lg">Market Today</p>
          <p className="cursor-pointer underline underline-offset-2">See all</p>
        </div>
        <div className="flex gap-4">
          <div className="border border-slate-800 p-4 rounded-md flex-1">
            <p>Deadpool & Wolverine</p>
            <p className="flex text-green-500 gap-2 text-sm">
              25,241.90 <Triangle className="w-3 " fill="#22c55e" />{" "}
            </p>
            <p className="text-gray-400 text-sm">+83.20 (+0.40%) </p>
          </div>

          <div className="border border-slate-800 p-4 rounded-md flex-1">
            <p>Stree 2</p>
            <p className="flex text-green-500 gap-2 text-sm">
              25,241.90 <Triangle className="w-3 " fill="#22c55e" />{" "}
            </p>
            <p className="text-gray-400 text-sm">+83.20 (+0.40%) </p>
          </div>

          <div className="border border-slate-800 p-4 rounded-md flex-1">
            <p>Aadipurush</p>
            <p className="flex text-red-500 gap-2 text-sm">
              2,231.10 <Triangle className="w-3 rotate-180" fill="#ef4444" />{" "}
            </p>
            <p className="text-gray-400 text-sm">-23.20 (+0.40%) </p>
          </div>

          <div className="border border-slate-800 p-4 rounded-md flex-1">
            <p>Kill</p>
            <p className="flex text-green-500 gap-2 text-sm">
              25,241.90 <Triangle className="w-3 " fill="#22c55e" />{" "}
            </p>
            <p className="text-gray-400 text-sm">+83.20 (+0.40%) </p>
          </div>
        </div>
      </div>

      {/* Recommended */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between text-white pr-8">
          <p className="text-lg">Recommended Movies</p>
          <p className="cursor-pointer underline underline-offset-2">See all</p>
        </div>

        <div className="flex justify-center w-full">
          <Carousel responsive={responsive} className="w-screen gap-2">
            {slides.map((item, index) => (
              <div className="pr-8" key={index}>
                <Image
                  src={item}
                  width={0}
                  height={0}
                  className="w-fit rounded-md cursor-pointer"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Latest */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between text-white pr-8">
          <p className="text-lg">Latest Movies</p>
          <p className="cursor-pointer underline underline-offset-2">See all</p>
        </div>

        <div className="flex justify-center w-full">
          <Carousel
            responsive={responsive}
            className="w-screen gap-2"
          >
            {slides.map((item, index) => (
              <div className="pr-8" key={index}>
                <Image
                  src={item}
                  width={0}
                  height={0}
                  className="w-fit rounded-md cursor-pointer"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Feed;
