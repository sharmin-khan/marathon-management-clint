import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaGlobe, FaTrophy, FaCalendar, FaMapMarkerAlt, FaUsers, FaMedal } from "react-icons/fa";

const GlobalMarathons = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen pt-28 bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Global Marathon Events | MarathonPro</title>
      </Helmet>
      
      <div className="w-11/12 mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Global Marathon Events
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the world's most prestigious marathon events and find your perfect race
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-8">
            {/* Training Tips */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-3">
                <FaTrophy className="text-yellow-500" />
                Training Tips for Beginners
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">Start Early</h3>
                  <p className="text-gray-600 dark:text-gray-400">Begin training at least 16-20 weeks before your marathon</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">Build Gradually</h3>
                  <p className="text-gray-600 dark:text-gray-400">Increase your weekly mileage by no more than 10%</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">Include Rest Days</h3>
                  <p className="text-gray-600 dark:text-gray-400">Rest is crucial for recovery and preventing injuries</p>
                </div>
              </div>
            </div>

            {/* Race Categories */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-3">
                <FaMedal className="text-yellow-500" />
                Race Categories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-bold text-blue-600">5K</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">3.1 miles - Perfect for beginners</p>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-bold text-green-600">10K</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">6.2 miles - Great intermediate distance</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="font-bold text-purple-600">Half Marathon</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">13.1 miles - Popular challenge</p>
                </div>
                <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h3 className="font-bold text-red-600">Full Marathon</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">26.2 miles - Ultimate achievement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Popular Marathons */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-3">
                <FaGlobe className="text-yellow-500" />
                World's Most Popular Marathons
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">B</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Boston Marathon</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">April • Boston, USA • World's oldest</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">N</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">New York City Marathon</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">November • NYC, USA • Largest in world</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">L</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">London Marathon</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">April • London, UK • Charitable focus</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">T</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Tokyo Marathon</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">March • Tokyo, Japan • Asian major</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Guide */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-3">
                <FaCalendar className="text-yellow-500" />
                Registration Process
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-gray-700 dark:text-gray-300">Check eligibility requirements</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-gray-700 dark:text-gray-300">Register during open period</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-gray-700 dark:text-gray-300">Pay registration fee</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <span className="text-gray-700 dark:text-gray-300">Receive confirmation email</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                  <span className="text-gray-700 dark:text-gray-300">Attend race expo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Marathon Journey?</h2>
            <p className="text-blue-100 mb-6">Join thousands of runners worldwide and achieve your running goals</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse Marathons
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default GlobalMarathons;
