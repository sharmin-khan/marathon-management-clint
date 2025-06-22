import React from "react";

const runners = [
  {
    name: "Eliud Kipchoge",
    country: "Kenya 🇰🇪",
    achievements: "2x Olympic Gold,Sub-2 Hour Marathon",
    quote: "No human is limited.",
    img: "https://i.ibb.co/ycjyMLbM/Eliud-Kipchoge.jpg",
  },
  {
    name: "Brigid Kosgei",
    country: "Kenya 🇰🇪",
    achievements: "World Record Holder, London Marathon Winner",
    quote: "Discipline is key.",
    img: "https://i.ibb.co/MDNc6pDM/Brigid-Kosgei.jpg",
  },
  {
    name: "Mo Farah",
    country: "UK 🇬🇧",
    achievements: "4x Olympic Gold, 6x World Champion",
    quote: "Go hard or go home.",
    img: "https://i.ibb.co/0jX3CZr4/Mo-Farah.jpg",
  },
  {
    name: "Abdi Nageeye",
    country: "Netherlands 🇳🇱",
    achievements: "Olympic Silver Medalist",
    quote: "Push the limits.",
    img: "https://i.ibb.co/GfGQMP58/Abdi-Nageeye1.jpg",
  },
  {
    name: "Yalemzerf Yehualaw",
    country: "Ethiopia 🇪🇹",
    achievements: "Fastest debut marathon",
    quote: "Run with heart.",
    img: "https://i.ibb.co/MxGfPxwn/Yalemzerf-Yehualaw.jpg",
  },
];

const TopRunners = () => {
  return (
    <div className="py-12 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-10">
        Top Marathon Runners
      </h2>

      {/* Scrolling Container */}
      <div className="relative w-full">
        <div className="flex gap-10 animate-marquee whitespace-nowrap px-4">
          {runners.concat(runners).map((runner, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow lg:px-6 py-6 px-2 flex-shrink-0 text-center gradient-border-l 
  w-[260px] sm:w-[300px] md:w-[350px] 
  min-w-[260px] sm:min-w-[300px] md:min-w-[350px]"
            >
              <img
                src={runner.img}
                alt={runner.name}
                className="lg:w-64 lg:h-60 w-36 h-36 object-cover mx-auto rounded"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-4">
                {runner.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {runner.country}
              </p>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {runner.achievements}
              </p>
              <p className="italic text-blue-500 mt-2">“{runner.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRunners;
