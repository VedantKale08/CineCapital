import Image from "next/image";
import React from "react";

const MovieCard = ({ item, index }) => {
  return (
    <div key={index} className="relative group overflow-hidden rounded-2xl">
      <div className="relative">
        <Image
          src={item.imageUrl}
          width={0}
          height={0}
          className="w-full h-80 rounded-2xl"
          alt={item.title}
        />

        {/* Production House Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
          <p className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 break-all text-center p-4 ">
            <span className="text-sm">Produced By</span> <br />
            <span className="font-semibold">{item.productionHouse}</span>
          </p>
        </div>
      </div>

      <div className="p-4">
        <p>{item.title}</p>
        <p className="text-sm text-gray-400">{item.rating}</p>
        <div>
          {item.languages.map((lang, index) => (
            <span key={index} className="text-sm text-gray-400">
              {lang}
              {index < item.languages.length - 1 && ","}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
