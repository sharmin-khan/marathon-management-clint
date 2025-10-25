import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-12 h-12 border-4 border-t-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
  </div>
);

const MarathonCard = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMarathons, setFilteredMarathons] = useState([]);
  const navigate = useNavigate();

  // Effect to fetch initial marathon data
  useEffect(() => {
    setLoading(true);
    // Note: The API URL is hardcoded here, which is standard practice in these exercises.
    fetch("https://marathon-management-server-seven.vercel.app/marathonCard")
      .then((res) => res.json())
      .then((data) => {
        setMarathons(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching marathons:", error);
        setLoading(false);
      });
  }, []);

  // Effect to handle filtering based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredMarathons(marathons);
      return;
    }

    const lowerCaseSearch = searchTerm.toLowerCase().trim();
    const results = marathons.filter(
      (marathon) =>
        marathon.title.toLowerCase().includes(lowerCaseSearch) ||
        marathon.location.toLowerCase().includes(lowerCaseSearch)
    );
    setFilteredMarathons(results);
  }, [searchTerm, marathons]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 bg-white dark:bg-gray-900 min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="pt-20 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <Helmet>
        <title>Marathons | MarathonPro</title>
      </Helmet>
      <div className="w-11/12 mx-auto py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-400 mb-4">
            Marathon Series
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join exciting marathon series happening across the globe. Register
            now to test your endurance, meet passionate runners, and be a part
            of something unforgettable!
          </p>
        </div>

        {/* --- Search Input Section --- */}
        <div className="max-w-xl mx-auto mb-16 px-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search marathons by title or location..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl 
                               bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                               transition duration-150 shadow-inner text-lg"
            />
          </div>
          {/* Search Result Count/Feedback */}
          <p className="text-sm text-center mt-3 text-gray-500 dark:text-gray-400">
            Showing {filteredMarathons.length} of {marathons.length} marathons.
          </p>
        </div>
        {/* --- End Search Input Section --- */}

        {filteredMarathons.length === 0 && !loading && (
          <div className="text-center py-10">
            <p className="text-2xl text-red-500 dark:text-red-400">
              No marathons found matching "{searchTerm}".
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Try searching with a different title or location.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMarathons.map((event, idx) => (
            <div
              key={idx}
              className="card rounded-xl group w-full bg-white dark:bg-gray-800 shadow-xl dark:shadow-2xl hover:shadow-blue-500/20 transition duration-500 border border-gray-100 dark:border-gray-700"
            >
              <figure className="overflow-hidden rounded-t-xl">
                <img
                  src={
                    event.image ||
                    `https://placehold.co/600x400/0E7490/FFFFFF?text=${event.title}`
                  }
                  alt={event.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/600x400/0E7490/FFFFFF?text=${event.title}`;
                  }}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </figure>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-300 mb-2 truncate">
                  {event.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-base mb-4">
                  <span className="flex items-center gap-1 mb-1">
                    <span className="text-blue-500">🌍</span> {event.location}
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <span className="text-yellow-500">🗓️</span> Registration:{" "}
                    {event.registrationStart} – {event.registrationEnd}
                  </span>
                </p>

                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => navigate(`/marathonDetails/${event._id}`)}
                    className="w-full inline-flex justify-center items-center gap-2 px-4 py-2 
                               bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                               text-white text-base font-semibold rounded-lg shadow-md hover:shadow-lg 
                               transform hover:-translate-y-0.5 transition-all duration-300 border-0 
                               focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 cursor-pointer"
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
