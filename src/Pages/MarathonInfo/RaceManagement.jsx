import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaShieldAlt, FaClock, FaRoute, FaHandsHelping, FaTrophy, FaHeartbeat, FaWater, FaUtensils } from "react-icons/fa";

const RaceManagement = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen pt-28 bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Professional Race Management | MarathonPro</title>
      </Helmet>
      
      <div className="w-11/12 mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Professional Race Management
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience world-class race organization with comprehensive support systems
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          
          {/* Safety & Medical Support */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
              <FaShieldAlt className="text-green-500" />
              Safety & Medical Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <FaHeartbeat className="text-4xl text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-green-600 mb-2">Medical Stations</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Professional medical staff at every 5K interval</p>
              </div>
              <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <FaWater className="text-4xl text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-blue-600 mb-2">Hydration Points</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Water and sports drinks every 2-3 kilometers</p>
              </div>
              <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <FaUtensils className="text-4xl text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-purple-600 mb-2">Nutrition Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Energy gels and snacks at strategic points</p>
              </div>
            </div>
          </div>

          {/* Timing & Results */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
              <FaClock className="text-yellow-500" />
              Professional Timing Systems
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Chip Timing Technology</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">RFID chip attached to race bib</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Automatic start/finish line detection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Split times at every checkpoint</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Real-time results tracking</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Results & Certificates</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Official finish time certification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Age group rankings</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Personal record tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Downloadable certificates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Course Support */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
              <FaRoute className="text-orange-500" />
              Course Support & Navigation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Route Marking</h3>
                    <p className="text-gray-600 dark:text-gray-400">Clear directional arrows, kilometer markers, and course boundaries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Traffic Control</h3>
                    <p className="text-gray-600 dark:text-gray-400">Professional traffic management and road closures</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Emergency Support</h3>
                    <p className="text-gray-600 dark:text-gray-400">Quick response teams and emergency protocols</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Communication Systems</h3>
                    <p className="text-gray-600 dark:text-gray-400">Radio communication between all support teams</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Weather Monitoring</h3>
                    <p className="text-gray-600 dark:text-gray-400">Real-time weather updates and safety alerts</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Course Safety</h3>
                    <p className="text-gray-600 dark:text-gray-400">Regular safety inspections and hazard management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer & Support */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
              <FaHandsHelping className="text-red-500" />
              Volunteer & Support Network
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandsHelping className="text-2xl" />
                </div>
                <h3 className="font-bold text-red-600 mb-2">Course Marshals</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Trained volunteers guiding runners and ensuring safety</p>
              </div>
              <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaWater className="text-2xl" />
                </div>
                <h3 className="font-bold text-blue-600 mb-2">Aid Station Crews</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Dedicated teams providing hydration and nutrition</p>
              </div>
              <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTrophy className="text-2xl" />
                </div>
                <h3 className="font-bold text-green-600 mb-2">Finish Line Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Celebration and recovery assistance for finishers</p>
              </div>
            </div>
          </div>

          {/* Post-Race Services */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
              <FaTrophy className="text-yellow-500" />
              Post-Race Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  🏅
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Finisher Medals</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Unique commemorative medals for all finishers</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  📋
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Results & Certificates</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Official results and downloadable certificates</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  🍎
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Recovery Zone</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Post-race nutrition and recovery support</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  📸
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Photo Services</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Professional race photography and memories</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Experience Professional Race Management</h2>
            <p className="text-green-100 mb-6">Join our next event and enjoy world-class race organization</p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Upcoming Events
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RaceManagement;
