import React from "react";

function Card({ data, selectedData }) {
  return (
    <div
      className={`relative w-44 h-48 rounded-md cursor-pointer overflow-hidden shadow-lg hover:shadow-xl ${
        (selectedData.length > 0) & selectedData.includes(data.id) &&
        "border-4 border-yellow-500"
      }`}
      style={{
        background: `url('${data.url}') no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <p className="text-white text-lg font-bold">{data.label}</p>
      </div>
    </div>
  );
}

export default Card;
