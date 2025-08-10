import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const MarathonCard = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://marathon-management-server-seven.vercel.app/marathonCard")
      .then((res) => res.json())
      .then((data) => {
        setMarathons(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>Marathons | MarathonPro</title>
      </Helmet>
      <div className="w-11/12 mx-auto py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-400 mb-4">
            Marathon series
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join exciting marathon series happening across the globe. Register now
            to test your endurance, meet passionate runners, and be a part of
            something unforgettable!
          </p>
        </div>
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
    </div>
  );
};

export default MarathonCard;
