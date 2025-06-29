import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Marathons = () => {
  const [marathons, setMarathons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/marathon")
      .then((res) => res.json())
      .then((data) => setMarathons(data));
  }, []);

  return (
    <div className="py-10 bg-white dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mt-10 mb-6">
        Marathon Series
      </h2>
      <p className="text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-10">
        Join exciting marathon Series happening across the globe. Register now
        to test your endurance, meet passionate runners, and be a part of
        something unforgettable!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
        {marathons.map((event, idx) => (
          <div
            key={idx}
            className="card group w-full sm:w-[22rem] lg:w-[20rem] xl:w-[28rem] bg-base-100 shadow-md dark:bg-gray-800 transition duration-300"
          >
            <figure className="overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 sm:h-56 md:h-60 lg:h-72 xl:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title md:text-2xl text-blue-600 dark:text-blue-400">
                {event.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-md lg:text-lg font-semibold">
                🌍 {event.location} <br />
                {/* 🏃 Distance: {event.runningDistance} <br /> */}
                🗓️ Registration: {event.registrationStart} –{" "}
                {event.registrationEnd}
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => navigate(`/marathonDetails/${event._id}`)}
                  className="btn btn-md bg-blue-600 hover:bg-yellow-400 dark:bg-blue-400 dark:hover:bg-yellow-400 text-white"
                >
                  See Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marathons;
