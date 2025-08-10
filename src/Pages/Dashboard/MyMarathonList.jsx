import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { FaEdit, FaTrash, FaRunning, FaMapMarkerAlt, FaCalendar } from "react-icons/fa";

const MyMarathonList = () => {
     useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { user } = useContext(AuthContext);
  const [myMarathons, setMyMarathons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://marathon-management-server-seven.vercel.app/myMarathons?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyMarathons(data);
          setLoading(false);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://marathon-management-server-seven.vercel.app/marathon/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your marathon has been deleted.",
                "success"
              );
              setMyMarathons(myMarathons.filter((m) => m._id !== id));
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-blue-600"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Loading your marathons...</p>
        </div>
      </div>
    );
  }

  if (myMarathons.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🏃‍♂️</div>
        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">No Marathons Found</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">You haven't created any marathons yet.</p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
          Create Your First Marathon
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Helmet>
        <title>My Marathons List | MarathonPro</title>
      </Helmet>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center gap-4 mb-2">
          <FaRunning className="text-3xl" />
          <h1 className="text-3xl font-bold">My Marathons</h1>
        </div>
        <p className="text-blue-100 dark:text-blue-200 text-lg">
          Manage and track all your created marathons
        </p>
        <div className="mt-4 flex items-center gap-6">
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <span className="text-sm text-blue-100">Total Marathons</span>
            <div className="text-2xl font-bold">{myMarathons.length}</div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Marathon Details
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Location & Dates
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Distance
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {myMarathons.map((marathon) => (
                <tr key={marathon._id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className=" flex items-center justify-center">
                          <FaRunning className="text-blue-600 w-10 h-10 text-lg" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">
                          {marathon.title}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Created: {new Date(marathon.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <FaMapMarkerAlt className="text-blue-500" />
                        <span>{marathon.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <FaCalendar className="text-green-500" />
                        <span>
                          {marathon.registrationStart} - {marathon.registrationEnd}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                     
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
                        {marathon.runningDistance}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {/* Update Button */}
                      <button
                        className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 cursor-pointer text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                        onClick={() => console.log("Open update modal")}
                      >
                        <FaEdit className="text-sm" />
                        Update
                      </button>
                      
                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(marathon._id)}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 cursor-pointer text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <FaTrash className="text-sm" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{myMarathons.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Marathons</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {myMarathons.filter(m => new Date(m.registrationEnd) > new Date()).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Active Registrations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {myMarathons.filter(m => new Date(m.registrationEnd) <= new Date()).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Closed Registrations</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMarathonList;