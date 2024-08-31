import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

const MovieFilter = ({ data, showFilters, setShowFilters, isGenre }) => {
  return (
    <div className="bg-black px-4 py-6 w-64 h-fit rounded-lg">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-2  ">
          <div
            className="flex cursor-pointer gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? <ChevronUp size={20} /> : <ChevronDown size={20} />}

            <p>{isGenre ? "Genres" : "Languages"}</p>
          </div>

          {showFilters && (
            <div className="flex gap-2 items-center flex-wrap">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="p-1 bg-transparent border border-blue text-sm rounded-md cursor-pointer hover:bg-blue transition-all duration-150"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          )}
        </div>
        <p>Clear</p>
      </div>
    </div>
  );
};

export default MovieFilter;
