"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const castMap = [
  {
    name: "Prabhas",
    src: "/assets/Prabhas.jpg",
    designation: "Main Cast",
  },
   {
    name: "Prabhas",
    src: "/assets/Prabhas.jpg",
    designation: "Main Cast",
  },
   {
    name: "Prabhas",
    src: "/assets/Prabhas.jpg",
    designation: "Main Cast",
  },
   {
    name: "Prabhas",
    src: "/assets/Prabhas.jpg",
    designation: "Main Cast",
  },
   {
    name: "Prabhas",
    src: "/assets/Prabhas.jpg",
    designation: "Main Cast",
  },
   {
    name: "Prabhas",
    src: "/assets/Prabhas.jpg",
    designation: "Main Cast",
  },
];

const crewMap = [
  {
    name: "Nag Ashwin",
    src: "/assets/Nag-Aswin.jpeg",
    designation: "Director",
  },
  {
    name: "Nag Ashwin",
    src: "/assets/Nag-Aswin.jpeg",
    designation: "Director",
  },
  {
    name: "Nag Ashwin",
    src: "/assets/Nag-Aswin.jpeg",
    designation: "Director",
  },
  {
    name: "Nag Ashwin",
    src: "/assets/Nag-Aswin.jpeg",
    designation: "Director",
  },
  {
    name: "Nag Ashwin",
    src: "/assets/Nag-Aswin.jpeg",
    designation: "Director",
  },
  {
    name: "Nag Ashwin",
    src: "/assets/Nag-Aswin.jpeg",
    designation: "Director",
  },
  {
    name: "Nag Ashwin",
    src: "/assets/Nag-Aswin.jpeg",
    designation: "Director",
  },
];

const MoviePage = () => {
  const [showInput, setShowInput] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState("");

  const handleBuyClick = () => {
    setShowInput(!showInput); // Toggle the visibility of the input box
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInvestmentAmount(value);
    }
  };

  // Dummy data for the line chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Investment Trend',
        data: [3000, 2000, 1000, 4000, 5000, 4000, 7000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `₹ ${context.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-full flex-row px-20">
      <div className="flex w-full">
        <div className="w-[40%] mt-20">
          <Image
            src="/assets/rect_banner.avif"
            width={1440}
            height={500}
            className="w-full rounded-xl h-72"
          />
        </div>
        <div className="w-[60%] flex flex-col mt-24 gap-3 ml-10">
          <p className="text-3xl font-semibold">Kalki 2898 AD</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            commodi aliquid debitis ullam provident nemo eaque nesciunt
            reprehenderit. Assumenda, vero dolor. Atque doloremque veniam
            excepturi praesentium repudiandae suscipit dolorum accusantium!
          </p>
          <p>
            <span className="font-semibold">Release Date: </span>
            <span>28/12/2026</span>
          </p>
          <div>
            <ReactStars count={5} value={5} size={20} activeColor="#ffd700" />
          </div>
          <p className="text-slate-400">
            <span className="font-semibold">23,190</span> people have invested in
            this film.
          </p>
          <div className="flex gap-2">
            <div className="bg-yellow-500 w-28 flex items-center justify-center text-main rounded-full">
              <p>Blockbuster</p>
            </div>
            <div className="bg-slate-500 w-40 flex items-center justify-center text-main rounded-full">
              <p>6 months to release</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-20 gap-10">
        <div className="w-[40%]">
          <p className="text-2xl font-semibold">New Content</p>
          <video
            controls
            className="w-full rounded-lg mt-5"
            poster="/assets/hq720.jpg"
          >
            <source src="/assets/video/videoplayback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-[60%] bg-secondary rounded-lg border border-slate-800 flex flex-col h-[100%] px-5 py-5">
          <p className="font-semibold">
            Overall Gain: ₹ 11,000 <FaArrowTrendUp className="text-green-500 inline-block mb-1"/>
          </p>
          <p className="text-xs">
            <span>Investment:</span> ₹ 10,000
          </p>
          <div className="w-full bg-main border border-slate-800 h-[450px] mt-5">
            <Line data={data} options={options} />
          </div>
          <div className="flex gap-7 mt-5">
            <button
              onClick={handleBuyClick}
              className="bg-green-500 px-5 py-2 text-xl font-semibold rounded-lg"
            >
              Buy
            </button>
            <button className="bg-red-500 px-5 py-2 text-xl font-semibold rounded-lg">
              Withdraw
            </button>
          </div>
          {showInput && (
            <div className="mt-5">
              <input
                type="text"
                value={investmentAmount}
                onChange={handleInputChange}
                className="border border-slate-800 rounded-lg bg-main px-3 py-2 w-full"
                placeholder="Enter amount"
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full">
          <p className="font-semibold text-3xl">Cast</p>
          <div className="flex flex-wrap gap-10">
            {castMap.map((actor, index) => (
              <div key={index} className="flex flex-col mt-10 items-center">
                <Image
                  src={actor.src}
                  alt={actor.name}
                  width={500}
                  height={500}
                  className="w-36 h-36 rounded-full"
                />
                <p className="mt-2 text-lg font-semibold">{actor.name}</p>
                <p className="mt-1 text-sm text-slate-300">{actor.designation}</p>
              </div>
            ))}
          </div>
          <p className="font-semibold text-3xl mt-10">Crew</p>
          <div className="flex flex-wrap gap-10">
            {crewMap.map((crew, index) => (
              <div key={index} className="flex flex-col mt-10 items-center">
                <Image
                  src={crew.src}
                  alt={crew.name}
                  width={500}
                  height={500}
                  className="w-36 h-36 rounded-full"
                />
                <p className="mt-2 text-lg font-semibold">{crew.name}</p>
                <p className="mt-1 text-sm text-slate-300">{crew.designation}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default MoviePage;
