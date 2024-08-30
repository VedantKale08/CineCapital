"use client";
import React, { useState } from "react";
import Sidebar from "../home/Sidebar";
import Image from "next/image";
import {
  ArrowDown,
  ArrowDownNarrowWide,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import MovieCard from "./MovieCard";
import MovieFilter from "./GenreFilter";

const MovieList = () => {
  const movies = [
    {
      title: "The Great Adventure",
      languages: ["English", "Hindi"],
      releaseYear: 2022,
      rating: "UA",
      imageUrl: "/assets/col1.jpg",
      productionHouse: "Adventure Studios",
    },
    {
      title: "Comedy Night",
      languages: ["English"],
      releaseYear: 2021,
      rating: "UA",
      imageUrl: "/assets/col2.avif",
      productionHouse: "Laugh Out Loud Productions",
    },
    {
      title: "Mystery Manor",
      languages: ["English", "French"],
      releaseYear: 2020,
      rating: "UA",
      imageUrl: "/assets/col3.png",
      productionHouse: "Mystery Films",
    },
    {
      title: "Romantic Getaway",
      languages: ["Hindi"],
      releaseYear: 2023,
      rating: "UA",
      imageUrl: "/assets/col5.avif",
      productionHouse: "Love Stories Inc.",
    },
    {
      title: "Thrill Seekers",
      languages: ["English", "Spanish"],
      releaseYear: 2019,
      rating: "UA",
      imageUrl: "/assets/col6.avif",
      productionHouse: "Thrill Studios",
    },
    {
      title: "Comedy Night 2",
      languages: ["English"],
      releaseYear: 2022,
      rating: "UA",
      imageUrl: "/assets/col2.avif",
      productionHouse: "Laugh Out Loud Productions",
    },
    {
      title: "Mystery Manor 2",
      languages: ["English", "French"],
      releaseYear: 2021,
      rating: "UA",
      imageUrl: "/assets/col3.png",
      productionHouse: "Mystery Films",
    },
    {
      title: "Romantic Getaway 2",
      languages: ["Hindi"],
      releaseYear: 2024,
      rating: "UA",
      imageUrl: "/assets/col5.avif",
      productionHouse: "Love Stories Inc.",
    },
    {
      title: "Thrill Seekers 2",
      languages: ["English", "Spanish"],
      releaseYear: 2020,
      rating: "UA",
      imageUrl: "/assets/col6.avif",
      productionHouse: "Thrill Studios",
    },
    {
      title: "Thrill Seekers",
      languages: ["English", "Spanish"],
      releaseYear: 2019,
      rating: "UA",
      imageUrl: "/assets/col6.avif",
      productionHouse: "Thrill Studios",
    },
    {
      title: "Comedy Night 2",
      languages: ["English"],
      releaseYear: 2022,
      rating: "UA",
      imageUrl: "/assets/col2.avif",
      productionHouse: "Laugh Out Loud Productions",
    },
    {
      title: "Mystery Manor 2",
      languages: ["English", "French"],
      releaseYear: 2021,
      rating: "UA",
      imageUrl: "/assets/col3.png",
      productionHouse: "Mystery Films",
    },
    {
      title: "The Great Adventure",
      languages: ["English", "Hindi"],
      releaseYear: 2022,
      rating: "UA",
      imageUrl: "/assets/col1.jpg",
      productionHouse: "Adventure Studios",
    },
    {
      title: "Comedy Night",
      languages: ["English"],
      releaseYear: 2021,
      rating: "UA",
      imageUrl: "/assets/col2.avif",
      productionHouse: "Laugh Out Productions",
    },
    {
      title: "Mystery Manor",
      languages: ["English", "French"],
      releaseYear: 2020,
      rating: "UA",
      imageUrl: "/assets/col3.png",
      productionHouse: "Mystery Films",
    },
  ];
  const genres = [
    "Action",
    "War",
    "Comedy",
    "Horror",
    "Thriller",
    "Sci-Fi",
    "Romance",
    "Crime",
    "Historical",
    "Mystery",
    "Drama",
  ];
  const langs = [
    "English",
    "Hindi",
    "Marathi",
    "French",
    "Tamil",
    "Telugu",
    "Thai",
    "Gujrati",
    "Punjabi",
    "Malyalam",
  ];
  const [showGenres, setShowGenres] = useState(true);
  const [showLangs, setShowLangs] = useState(true);

  return (
    <div className="ml-[109px] h-full px-4 py-8 flex gap-12">
      <Sidebar />
      <div className="flex flex-col gap-8">
        <MovieFilter
          data={genres}
          showFilters={showGenres}
          setShowFilters={setShowGenres}
          isGenre
        />
        <MovieFilter
          data={langs}
          showFilters={showLangs}
          setShowFilters={setShowLangs}
        />
      </div>
      <div className="grid grid-cols-5 gap-6">
        {movies.map((item, index) => {
          return <MovieCard item={item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
