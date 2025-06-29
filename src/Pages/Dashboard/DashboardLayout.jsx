import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
       <title>Dashboard | MarathonPro</title>
      </Helmet>
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6 text-xl md:text-2xl font-bold text-center">
        Welcome to Your Dashboard
      </header>

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-gray-100 dark:bg-gray-800 font-bold text-md lg:text-lg  text-gray-800 dark:text-gray-100  p-4 md:p-6 border-b md:border-b-0 md:border-r">
          <ul className="space-y-2 text- flex md:flex-col justify-around md:justify-start">
            <li>
              <NavLink
                to="/dashboard/addMarathons"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 hover:text-blue-500"
                }
              >
                Add Marathons
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/myMarathonList"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 hover:text-blue-500"
                }
              >
                My Marathon List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/myApply"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 hover:text-blue-500"
                }
              >
                My Apply List
              </NavLink>
            </li>
          </ul>
        </aside>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 bg-white dark:bg-gray-800 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
