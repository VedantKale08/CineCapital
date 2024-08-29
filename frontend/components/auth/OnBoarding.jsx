"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { postRequest } from "@/config/axiosIntercepter";
import { updateInterests } from "@/constants/apiEndPoints";
import { getCookie } from "cookies-next";
import toast from "react-hot-toast";

function OnBoarding({ genreData, actorsData }) {
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
      _id: 1,
      url: "/assets/languages/hindi.png",
      title: "Hindi",
      name: "हिन्दी",
    },
    {
      _id: 2,
      url: "/assets/languages/marathi.png",
      title: "Marathi",
      name: "मराठी",
    },
    {
      _id: 3,
      url: "/assets/languages/english.png",
      title: "English",
      name: "English",
    },
    {
      _id: 4,
      url: "/assets/languages/tamil.png",
      title: "Tamil",
      name: "தமிழ்",
    },
    {
      _id: 5,
      url: "/assets/languages/404.png",
      title: "Telugu",
      name: "తెలుగు", //telugu
    },
    {
      _id: 6,
      url: "/assets/languages/english.png",
      title: "Gujrati",
      name: "ગુજરાતી",
    },
    {
      _id: 7,
      url: "/assets/languages/404.png",
      title: "Hindi",
      name: "ಕನ್ನಡ",
    },
    {
      _id: 8,
      url: "/assets/languages/tamil.png",
      title: "Malyalam",
      name: "മലയാളം",
    },
  ];

  const actorsArray = [
    {
      id: 1,
      label: "Amitabh Bachchan",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrThn9BnXE8B70-HRpBkrIFddDzhJ0DnIQw&s",
    },
    {
      id: 2,
      label: "Shah Rukh Khan",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/220px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg",
    },
    {
      id: 3,
      label: "Yash",
      url: "https://m.media-amazon.com/images/M/MV5BNGJlOTljYmQtM2FkYS00YTEyLTliOGItOTA0MzBjZTI3ZDYyXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
    },
    {
      id: 4,
      label: "Aamir Khan",
      url: "https://images.news18.com/ibnlive/uploads/2021/02/1612346460_aamir_khan_4k-2880x1800.jpg",
    },
    {
      id: 5,
      label: "Yash",
      url: "https://m.media-amazon.com/images/M/MV5BNGJlOTljYmQtM2FkYS00YTEyLTliOGItOTA0MzBjZTI3ZDYyXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
    },
    {
      id: 6,
      label: "Amitabh Bachchan",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrThn9BnXE8B70-HRpBkrIFddDzhJ0DnIQw&s",
    },
    {
      id: 7,
      label: "Aamir Khan",
      url: "https://images.news18.com/ibnlive/uploads/2021/02/1612346460_aamir_khan_4k-2880x1800.jpg",
    },
    {
      id: 8,
      label: "Shah Rukh Khan",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/220px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg",
    },
    {
      id: 9,
      label: "Yash",
      url: "https://m.media-amazon.com/images/M/MV5BNGJlOTljYmQtM2FkYS00YTEyLTliOGItOTA0MzBjZTI3ZDYyXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
    },
    {
      id: 10,
      label: "Amitabh Bachchan",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrThn9BnXE8B70-HRpBkrIFddDzhJ0DnIQw&s",
    },
  ];

  const [tab, setTab] = useState();
  const [genres, setGenres] = useState([]);
  const [language, setLanguage] = useState([]);
  const [actors, setActors] = useState([]);
  const router = useRouter();

  const handleGenres = (item) => {
    if (genres.includes(item._id)) {
      setGenres((prev) => prev.filter((genreId) => genreId !== item._id));
    } else if (genres.length < 3) {
      setGenres((prev) => [...prev, item._id]);
    }
  };

  const handleLanguage = (item) => {
    if (language.includes(item._id)) {
      setLanguage((prev) => prev.filter((langId) => langId !== item._id));
    } else if (language.length < 3) {
      setLanguage((prev) => [...prev, item._id]);
    }
  };

  const handleActors = (item) => {
    if (actors.includes(item._id)) {
      setActors((prev) => prev.filter((actorId) => actorId !== item._id));
    } else if (actors.length < 3) {
      setActors((prev) => [...prev, item._id]);
    }
  };

  const submitInterests = async () => {
    const selectedLanguageNames = language
      .map((langId) => {
        const lang = languageArray.find((l) => l._id === langId);
        return lang ? lang.title : null;
      })
      .filter((title) => title !== null);

    try {
      const response = await postRequest({
        url: updateInterests,
        body: {
          favouriteGenres: genres,
          favouriteLanguages: selectedLanguageNames,
          favouriteActors: actors,
        },
        token: getCookie("token"),
      });
      const data = response.data;
      if (data.message) {
        toast.success(data.message);
        router.push("/home");
      } else {
        console.error("Failed to update interests");
      }
    } catch (error) {
      console.error("Error updating interests:", error);
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
            {tab === 0 ? "Genres" : tab === 1 ? "Languages" : "Actors"}
          </p>
        </div>

        {tab === 0 && (
          <>
            <div className="grid grid-cols-5 gap-4">
              {genreData.map((item) => (
                <div key={item._id} onClick={() => handleGenres(item)}>
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

        {tab === 1 && (
          <>
            <div className="grid grid-cols-5 gap-4">
              {languageArray.map((item) => (
                <div key={item.id} onClick={() => handleLanguage(item)}>
                  <Card data={item} selectedData={language} isSmall={true} />
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

        {tab === 2 && (
          <>
            <div className="grid grid-cols-5 gap-4">
              {actorsData.map((item) => (
                <div key={item._id} onClick={() => handleActors(item)}>
                  <Card data={item} selectedData={actors} />
                </div>
              ))}
            </div>
            {actors.length === 3 && (
              <button
                onClick={submitInterests}
                className="bg-blue w-[20%] rounded-md py-2.5 mt-5 place-self-end flex justify-center hover:scale-105 transition"
              >
                Finish
                <ChevronRight />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default OnBoarding;
