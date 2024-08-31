"use client";
import React from "react";
import BannerCarousel from "./BannerCarousel";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Triangle } from "lucide-react";
import { useRouter } from "next/navigation";

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

  const languageArray = [
    {
      id: 1,
      label: "हिन्दी",
      font: "Noto Sans Devanagari, sans-serif",
    },
    {
      id: 2,
      label: "मराठी",
      font: "Noto Sans Devanagari, sans-serif",
    },
    {
      id: 3,
      label: "English",
      font: "Arial, sans-serif",
    },
    {
      id: 4,
      label: "தமிழ்",
      font: "Noto Sans Tamil, sans-serif",
    },
    {
      id: 5,
      label: "తెలుగు",
      font: "Noto Sans Telugu, sans-serif",
    },
    {
      id: 6,
      label: "ગુજરાતી",
      font: "Noto Sans Gujarati, sans-serif",
    },
    {
      id: 7,
      label: "ಕನ್ನಡ",
      font: "Noto Sans Kannada, sans-serif",
    },
    {
      id: 8,
      label: "മലയാളം",
      font: "Noto Sans Malayalam, sans-serif",
    },
    {
      id: 9,
      label: "मराठी",
      font: "Noto Sans Devanagari, sans-serif",
    },
    {
      id: 10,
      label: "English",
      font: "Arial, sans-serif",
    },
  ];

  const router = useRouter();
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
            <p className="flex text-green-500 gap-2 text-sm items-center">
              25,241.90 <Triangle className="w-3 " fill="#22c55e" />{" "}
            </p>
            <p className="text-gray-400 text-sm">+83.20 (+0.40%) </p>
          </div>

          <div className="border border-slate-800 p-4 rounded-md flex-1">
            <p>Stree 2</p>
            <p className="flex text-green-500 gap-2 text-sm items-center">
              25,241.90 <Triangle className="w-3 " fill="#22c55e" />{" "}
            </p>
            <p className="text-gray-400 text-sm">+83.20 (+0.40%) </p>
          </div>

          <div className="border border-slate-800 p-4 rounded-md flex-1">
            <p>Aadipurush</p>
            <p className="flex text-red-500 gap-2 text-sm items-center">
              2,231.10 <Triangle className="w-3 rotate-180" fill="#ef4444" />{" "}
            </p>
            <p className="text-gray-400 text-sm">-23.20 (+0.40%) </p>
          </div>

          <div className="border border-slate-800 p-4 rounded-md flex-1">
            <p>Kill</p>
            <p className="flex text-green-500 gap-2 text-sm items-center">
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
          <p
            className="cursor-pointer underline underline-offset-2"
            onClick={() => router.push("/movie-listing")}
          >
            See all
          </p>
        </div>

        <div className="flex justify-center w-full">
          <Carousel responsive={responsive} className="w-screen gap-2">
            {slides.map((item, index) => (
              <div
                className="pr-8"
                key={index}
                onClick={() => router.push("/movie")}
              >
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

      {/* Languages */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between text-white pr-8">
          <p className="text-lg">Languages</p>
          <p className="cursor-pointer underline underline-offset-2">See all</p>
        </div>

        <div className="grid grid-cols-5 gap-3">
          {languageArray.map((data, index) => (
            <div className="flex justify-center items-center bg-secondary relative h-24 rounded-md cursor-pointer overflow-hidden shadow-lg hover:shadow-xl hover:scale-110 border border-secondary hover:z-[999] hover:border-slate-500 transition-all">
              <p className="text-white text-xl font-bold">{data?.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Latest */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between text-white pr-8">
          <p className="text-lg">Latest Movies</p>
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
    </div>
  );
}

export default Feed;
