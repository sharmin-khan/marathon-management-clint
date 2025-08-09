import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 pt-20">
      <Helmet>
       <title>Dashboard | MarathonPro</title>
      </Helmet>
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white py-6 px-6 text-xl md:text-2xl font-bold text-center shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold"> Welcome to Your Dashboard</h1>
        <p className="text-blue-100 dark:text-blue-200 text-sm md:text-base mt-2 font-normal">
          Manage your marathons and track your progress
        </p>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white dark:bg-gray-800 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="p-6">
           
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-l-4 border-blue-500"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-blue-600 dark:hover:text-blue-400"
                    }`
                  }
                >
                  <span className="text-lg">🏠</span>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addMarathons"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-l-4 border-blue-500"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-blue-600 dark:hover:text-blue-400"
                    }`
                  }
                >
                  <span className="text-lg">➕</span>
                  Add Marathons
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myMarathonList"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-l-4 border-blue-500"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-blue-600 dark:hover:text-blue-400"
                    }`
                  }
                >
                  <span className="text-lg">📋</span>
                  My Marathon List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myApply"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-l-4 border-blue-500"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-blue-600 dark:hover:text-blue-400"
                    }`
                  }
                >
                  <span className="text-lg">📝</span>
                  My Apply List
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 min-h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
