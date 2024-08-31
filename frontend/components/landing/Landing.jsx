// pages/index.js or wherever the Landing component is used
"use client";
import Image from "next/image";
import RandomText from "./RandomText";
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();
  return (
    <div className="flex overflow-hidden h-screen bg-main relative">
      <div className="relative w-[70%] overlay-container">
        {/* Grid Container with Gradient Overlay */}
        <div className="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-4">
          <Image
            src="/assets/col1.jpg"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg opacity-45 fade-img"
            alt="Image 1"
          />
          <Image
            src="/assets/col2.avif"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg opacity-45 fade-img"
            alt="Image 2"
          />
          <Image
            src="/assets/col3.png"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg opacity-45 fade-img"
            alt="Image 3"
          />
          <Image
            src="/assets/col4.avif"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg opacity-45 fade-img"
            alt="Image 4"
          />
          <Image
            src="/assets/col5.avif"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg opacity-45 fade-img"
            alt="Image 5"
          />
          <Image
            src="/assets/col6.avif"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg opacity-45 fade-img"
            alt="Image 6"
          />
          <Image
            src="/assets/col1.jpg"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg opacity-45 fade-img"
            alt="Image 7"
          />
          <Image
            src="/assets/col2.avif"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg opacity-45 fade-img"
            alt="Image 8"
          />
          <Image
            src="/assets/col3.png"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg opacity-45 fade-img"
            alt="Image 9"
          />
          <Image
            src="/assets/col1.jpg"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg opacity-45 fade-img"
            alt="Image 1"
          />
          <Image
            src="/assets/col2.avif"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg opacity-45 fade-img"
            alt="Image 2"
          />
          <Image
            src="/assets/col3.png"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg opacity-45 fade-img"
            alt="Image 3"
          />
          <Image
            src="/assets/col3.png"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg opacity-45 fade-img"
            alt="Image 3"
          />
          <Image
            src="/assets/col4.avif"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg opacity-45 fade-img"
            alt="Image 4"
          />
          <Image
            src="/assets/col5.avif"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg opacity-45 fade-img"
            alt="Image 5"
          />
          <Image
            src="/assets/col6.avif"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg opacity-45 fade-img"
            alt="Image 6"
          />
        </div>
        {/* Gradient Overlay (if needed) */}
        {/* <div
          className='absolute inset-0'
          style={{
            background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        /> */}
      </div>

      <div className="flex flex-col items-center">
        <div className="z-30 bg-main">
          <p className="text-4xl mt-64 font-bold text-center">Get Started...</p>
          <p className="mt-4 font-semibold">
            #Empowering Stories, Maximizing Returns
          </p>
        </div>
        <div className="flex gap-10 mt-10 text-lg z-30">
          <button
            className="text-white font-bold px-10 py-3 rounded-lg bg-blue"
            onClick={() => router.push("/auth/login")}
          >
            Sign Up
          </button>
          <button
            className="text-white font-bold px-10 py-4 rounded-lg bg-main border border-blue"
            onClick={() => router.push("/auth/login")}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
