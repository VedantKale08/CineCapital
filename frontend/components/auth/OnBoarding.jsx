"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { ChevronRight } from "lucide-react";

function OnBoarding() {
  const genreArray = [
    {
      id: 1,
      label: "Action",
      url: "/assets/action.png",
    },
    {
      id: 2,
      label: "Comedy",
      url: "/assets/comedy.png",
    },
    {
      id: 3,
      label: "Action",
      url: "/assets/action.png",
    },
    {
      id: 4,
      label: "Romance",
      url: "/assets/romance.png",
    },
    {
      id: 5,
      label: "Comedy",
      url: "/assets/comedy.png",
    },
    {
      id: 6,
      label: "Action",
      url: "/assets/action.png",
    },
    {
      id: 7,
      label: "Romance",
      url: "/assets/romance.png",
    },
    {
      id: 8,
      label: "Comedy",
      url: "/assets/comedy.png",
    },
    {
      id: 9,
      label: "Comedy",
      url: "/assets/comedy.png",
    },
    {
      id: 10,
      label: "Action",
      url: "/assets/action.png",
    },
    {
      id: 11,
      label: "Romance",
      url: "/assets/romance.png",
    },
    {
      id: 12,
      label: "Comedy",
      url: "/assets/comedy.png",
    },
    {
      id: 13,
      label: "Action",
      url: "/assets/action.png",
    },
    {
      id: 14,
      label: "Romance",
      url: "/assets/romance.png",
    },
    {
      id: 15,
      label: "Comedy",
      url: "/assets/comedy.png",
    },
  ];

  const languageArray = [
    {
      id: 1,
      url: "/assets/languages/hindi.png",
      label: "हिन्दी",
    },
    {
      id: 2,
      url: "/assets/languages/marathi.png",
      label: "मराठी",
    },
    {
      id: 3,
      url: "/assets/languages/english.png",
      label: "English",
    },
    {
      id: 4,
      url: "/assets/languages/tamil.png",
      label: "தமிழ்",
    },
    {
      id: 5,
      url: "/assets/languages/404.png",
      label: "తెలుగు", //telugu
    },
    {
      id: 6,
      url: "/assets/languages/english.png",
      label: "ગુજરાતી",
    },
    {
      id: 7,
      url: "/assets/languages/404.png",
      label: "ಕನ್ನಡ",
    },
    {
      id: 8,
      url: "/assets/languages/tamil.png",
      label: "മലയാളം",
    },
    {
      id: 9,
      url: "/assets/languages/marathi.png",
      label: "मराठी",
    },
    {
      id: 10,
      url: "/assets/languages/english.png",
      label: "English",
    },
  ];

  const [tab, setTab] = useState();
  const [genres, setGenres] = useState([]);
  const [language, setLanguage] = useState([]);
  const [actors, setActors] = useState([]);

  const handleGenres = (item) => {
    if (genres.includes(item.id)) {
      setGenres((prev) => prev.filter((genreId) => genreId !== item.id));
    } else if (genres.length < 3) {
      setGenres((prev) => [...prev, item.id]);
    }
  };

  const handleLanguage = (item) => {
    if (language.includes(item.id)) {
      setLanguage((prev) => prev.filter((genreId) => genreId !== item.id));
    } else if (language.length < 3) {
      setLanguage((prev) => [...prev, item.id]);
    }
  };

  useEffect(() => {
    setTab(0);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-secondary rounded-xl px-16 py-10 flex flex-col items-center gap-6 border border-slate-800">
        <div className="text-center">
          <p className="text-2xl font-bold">You are almost there!</p>
          <p className="text-textSecondary text-sm">
            Select your 3 favorite{" "}
            {tab == 0 ? "Genres" : tab == 1 ? "Languages" : "Actors"}
          </p>
        </div>

        {tab == 0 && (
          <>
            <div className="grid grid-cols-5 gap-4">
              {genreArray.map((item, index) => (
                <div key={index} onClick={() => handleGenres(item)}>
                  <Card data={item} selectedData={genres} />
                </div>
              ))}
            </div>
            {genres.length === 3 && (
              <button
                onClick={() => setTab(1)}
                className="bg-blue w-[20%] rounded-md py-2.5 mt-5 place-self-end flex justify-center hover:scale-105 transition"
              >
                Next
                <ChevronRight />
              </button>
            )}
          </>
        )}

        {tab == 1 && (
          <>
            <div className="grid grid-cols-5 gap-4">
              {languageArray.map((item, index) => (
                <div key={index} onClick={() => handleLanguage(item)}>
                  <Card
                    data={item}
                    selectedData={language}
                    isSmall={true}
                  />
                </div>
              ))}
            </div>
            {language.length === 3 && (
              <button
                onClick={() => setTab(2)}
                className="bg-blue w-[20%] rounded-md py-2.5 mt-5 place-self-end flex justify-center hover:scale-105 transition"
              >
                Next
                <ChevronRight />
              </button>
            )}
          </>
        )}

        {tab == 2 && (
          <div className="grid grid-cols-5 gap-4">
            {genreArray.map((item, index) => (
              <div key={index} onClick={() => handleGenres(item)}>
                <Card data={item} selectedData={genres} />
              </div>
            ))}
            {actors.length === 3 && (
              <button className="bg-blue w-[20%] rounded-md py-2.5 mt-5 place-self-end flex justify-center hover:scale-105 transition">
                Finish
                <ChevronRight />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default OnBoarding;
