import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaRunning, FaUtensils, FaShoePrints, FaUsers, FaChartLine, FaTrophy, FaHeart, FaDumbbell } from "react-icons/fa";
import BackButton from "../../Shared/BackButton";

const RunningLegacy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen pt-28 bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Build Your Running Legacy | MarathonPro</title>
      </Helmet>
      
      <div className="w-11/12 mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Build Your Running Legacy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Track your progress, achieve personal records, and join an elite community of dedicated runners
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          
          {/* Training Plans */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
              <FaRunning className="text-green-500" />
              Comprehensive Training Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">B</span>
                </div>
                <h3 className="font-bold text-green-600 mb-2">Beginner Plan</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">16-week program for first-time marathoners</p>
                <ul className="text-xs text-gray-500 mt-2 space-y-1">
                  <li>• Start with walking/running</li>
                  <li>• Build endurance gradually</li>
                  <li>• Focus on consistency</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">I</span>
                </div>
                <h3 className="font-bold text-blue-600 mb-2">Intermediate Plan</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">20-week program for experienced runners</p>
                <ul className="text-xs text-gray-500 mt-2 space-y-1">
                  <li>• Speed work integration</li>
                  <li>• Long run progression</li>
                  <li>• Race strategy</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">A</span>
                </div>
                <h3 className="font-bold text-purple-600 mb-2">Advanced Plan</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">24-week program for competitive runners</p>
                <ul className="text-xs text-gray-500 mt-2 space-y-1">
                  <li>• High-intensity training</li>
                  <li>• Advanced techniques</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Nutrition Guide */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
              <FaUtensils className="text-orange-500" />
              Nutrition & Fueling Guide
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Pre-Race Nutrition</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">🍝</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Carb Loading</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Increase carbs 2-3 days before race</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">💧</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Hydration</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Stay well-hydrated 24 hours before</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">🍳</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Race Morning</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Light breakfast 2-3 hours before start</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">During Race Fueling</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">⚡</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Energy Gels</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Take every 45-60 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">🥤</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Sports Drinks</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Electrolytes and carbs at aid stations</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">🍌</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Real Food</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Bananas, energy bars for longer races</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Essential Gear */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
              <FaShoePrints className="text-red-500" />
              Essential Running Gear
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  👟
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Running Shoes</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Proper fit and support for your foot type</p>
                <div className="mt-2 text-xs text-gray-500">
                  <p>• Get fitted at specialty store</p>
                  <p>• Replace every 300-500 miles</p>
                </div>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  👕
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Technical Clothing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Moisture-wicking, breathable fabrics</p>
                <div className="mt-2 text-xs text-gray-500">
                  <p>• Layer for weather conditions</p>
                  <p>• Avoid cotton materials</p>
                </div>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  📱
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">GPS Watch</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track pace, distance, and heart rate</p>
                <div className="mt-2 text-xs text-gray-500">
                  <p>• Monitor training load</p>
                  <p>• Analyze performance data</p>
                </div>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  🎒
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Hydration Pack</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Carry water and essentials on long runs</p>
                <div className="mt-2 text-xs text-gray-500">
                  <p>• Adjustable fit</p>
                  <p>• Multiple storage pockets</p>
                </div>
              </div>
            </div>
          </div>

          {/* Community Benefits */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
              <FaUsers className="text-yellow-500" />
              Running Community Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Running Clubs</h3>
                    <p className="text-gray-600 dark:text-gray-400">Join local groups for motivation and social running</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Training Partners</h3>
                    <p className="text-gray-600 dark:text-gray-400">Find running buddies for accountability and support</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Online Communities</h3>
                    <p className="text-gray-600 dark:text-gray-400">Connect with runners worldwide through social media</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Race Events</h3>
                    <p className="text-gray-600 dark:text-gray-400">Participate in organized events and meet fellow runners</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Mentorship</h3>
                    <p className="text-gray-600 dark:text-gray-400">Learn from experienced runners and coaches</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Shared Goals</h3>
                    <p className="text-gray-600 dark:text-gray-400">Achieve milestones together and celebrate successes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
              <FaChartLine className="text-blue-500" />
              Track Your Progress
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <FaChartLine className="text-4xl text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-blue-600 mb-2">Performance Metrics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monitor pace, distance, and time improvements</p>
              </div>
              <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <FaTrophy className="text-4xl text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-green-600 mb-2">Personal Records</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track your best times across all distances</p>
              </div>
              <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <FaHeart className="text-4xl text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-purple-600 mb-2">Health Monitoring</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Heart rate, recovery, and training load</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Start Building Your Running Legacy Today</h2>
            <p className="text-purple-100 mb-6">Join our community and begin your journey to becoming a stronger, faster runner</p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Join Community
            </button>
          </div>
        </div> */}
      </div>
      <BackButton />
    </div>
  );
};

export default RunningLegacy;

