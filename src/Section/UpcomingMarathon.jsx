import React from "react";

const UpcomingMarathon = () => {
  const upcoming = [
    {
      title: "Tokyo Marathon",
      date: "2025-07-22",
      location: "Tokyo, Japan",
      image: "https://i.ibb.co/6cbJPWMV/img1.webp",
      details:
        "Experience the vibrant streets of Tokyo with thousands of international runners.",
      badge: "Featured",
    },
    {
      title: "Paris Marathon",
      date: "2025-08-10",
      location: "Paris, France",
      image:
        "https://i.ibb.co/NnNVh83T/2024-04-21-T092318-Z-1792429180-UP1-EK4-L0-Q2-S45-RTRMADP-3-ATHLETICS-LONDON-MARATHON.webp",
      details:
        "Run past iconic landmarks like the Eiffel Tower and Notre-Dame.",
      badge: "New",
    },
    {
      title: "Berlin Marathon",
      date: "2025-09-29",
      location: "Berlin, Germany",
      image: "https://i.ibb.co/ZpYxmh8j/pexels-runffwpu-2402734.jpg",
      details:
        "One of the fastest marathons in the world, perfect for setting a new record.",
      badge: "Hot",
    },
    {
      title: "New York City Marathon",
      date: "2025-11-03",
      location: "New York, USA",
      image:
        "https://i.ibb.co/prWSPj00/sarah-sellers-01-gty-jef-180717-hp-Main-16x9-992.jpg",
      details: "Join over 50,000 runners through all five boroughs of NYC.",
      badge: "Popular",
    },
    {
      title: "London Marathon",
      date: "2025-10-13",
      location: "London, UK",
      image:
        "https://i.ibb.co/VYms9q2R/360-F-241540051-On-Zfvf-MAz2cs-Z7-XMCy-OB1-BGSZk-Ihc3mr.jpg",
      details:
        "A scenic route along the River Thames with a festive atmosphere.",
      badge: "Featured",
    },
    {
      title: "Boston Marathon",
      date: "2025-04-21",
      location: "Boston, USA",
      image:
        "https://i.ibb.co/8L5krcQ7/braden-collum-9-HI8-UJMSd-ZA-unsplash.jpg",
      details:
        "Historic and competitive, it’s the world’s oldest annual marathon.",
      badge: "Classic",
    },
  ];

  return (
    <div className="py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-4">
        Upcoming Marathons
      </h2>
      <p className="text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-10">
  Discover the latest marathon events happening near you. 
  Register early to secure your spot and prepare for an unforgettable race experience.
</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcoming.map((event, idx) => (
          <div
            key={idx}
            className="border border-blue-200 p-4 rounded shadow bg-white dark:bg-gray-800 dark:border-blue-50 relative"
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover rounded"
              />
              {/* Badge */}
              <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                {event.badge}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-2 uppercase">
              {event.title}
            </h3>
            <p className="text-md font-semibold text-gray-600 dark:text-gray-400">
              {event.location}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="text-md font-semibold">Date:</span> {event.date}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {event.details}
            </p>
            <button className="mt-2 text-blue-600 hover:underline font-semibold cursor-pointer">
              Read More
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
                className="rounded-md px-6 py-3 m-1 overflow-hidden relative group cursor-pointer  font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
               View All Events
              </button>
      </div>
    </div>
  );
};

export default UpcomingMarathon;
