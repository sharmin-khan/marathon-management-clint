import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { FaSearch, FaEdit, FaTrash, FaClipboardList, FaCalendarAlt, FaPhone, FaInfoCircle, FaRunning } from "react-icons/fa";

const MyApply = () => {
useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }   , []);
  const { user } = useContext(AuthContext);
  const [applies, setApplies] = useState([]);
  const [filteredApplies, setFilteredApplies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApply, setSelectedApply] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetchData();
    }
  }, [user]);

  const fetchData = async (search = "") => {
    try {
      const url = search 
        ? `https://marathon-management-server-seven.vercel.app/myApply?userEmail=${user.email}&search=${encodeURIComponent(search)}`
        : `https://marathon-management-server-seven.vercel.app/myApply?userEmail=${user.email}`;
      
      const response = await fetch(url);
      const data = await response.json();
      setApplies(data);
      setFilteredApplies(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  // Debounced search
  useEffect(() => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    const timeout = setTimeout(() => {
      if (user?.email) {
        fetchData(searchTerm);
      }
    }, 500); // 500ms delay

    setSearchTimeout(timeout);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [searchTerm, user?.email]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://marathon-management-server-seven.vercel.app/deleteApply/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your application has been removed.", "success");
              setApplies(applies.filter((a) => a._id !== id));
            }
          });
      }
    });
  };

  const handleUpdate = () => {
    fetch(`https://marathon-management-server-seven.vercel.app/updateApply/${selectedApply._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contactNumber: selectedApply.contactNumber,
        additionalInfo: selectedApply.additionalInfo,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your info has been updated.", "success");
          const updated = applies.map((item) =>
            item._id === selectedApply._id ? selectedApply : item
          );
          setApplies(updated);
          setSelectedApply(null);
        }
      });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-blue-600"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Loading your applications...</p>
        </div>
      </div>
    );
  }

  if (applies.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">No Applications Found</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">You haven't applied to any marathons yet.</p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
          Browse Marathons
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Helmet>
        <title>My Apply List | MarathonPro</title>
      </Helmet>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center gap-4 mb-2">
          <FaClipboardList className="text-3xl" />
          <h1 className="text-3xl font-bold">My Applications</h1>
        </div>
        <p className="text-blue-100 dark:text-blue-200 text-lg">
          Track and manage all your marathon applications
        </p>
        <div className="mt-4 flex items-center gap-6">
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <span className="text-sm text-blue-100">Total Applications</span>
            <div className="text-2xl font-bold">{applies.length}</div>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <span className="text-sm text-blue-100">Active</span>
            <div className="text-2xl font-bold">
              {applies.filter(a => new Date(a.marathonStartDate) > new Date()).length}
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="max-w-md">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Search by Marathon Title
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search marathons..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
          </div>
          {searchTerm && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Found {filteredApplies.length} result{filteredApplies.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border-b border-gray-200 dark:border-gray-600">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                  Marathon Details
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                  Contact Info
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                  Additional Info
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredApplies.map((item, idx) => (
                                 <tr key={item._id} className="hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-300 group">
                   <td className="px-6 py-4">
                     <div className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                       <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">{idx + 1}</span>
                     </div>
                   </td>
                   <td className="px-6 py-4">
                     <div className="flex items-center space-x-3">
                       <div className="flex-shrink-0">
                         <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                           <FaRunning className="text-white text-lg" />
                         </div>
                       </div>
                       <div>
                         <div className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                           {item.marathonTitle}
                           </div>
                         <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                           Application ID: {item._id.slice(-8)}
                         </div>
                       </div>
                     </div>
                   </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <FaCalendarAlt className="text-blue-600 dark:text-blue-400 text-sm" />
                      </div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {item.marathonStartDate}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                        <FaPhone className="text-purple-600 dark:text-purple-400 text-sm" />
                      </div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {item.contactNumber || 'Not provided'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                        <FaInfoCircle className="text-amber-600 dark:text-amber-400 text-sm" />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate">
                        {item.additionalInfo || 'No additional info'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {/* Update Button */}
                      <button
                        className="inline-flex cursor-pointer items-center gap-2 px-3 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 border-0 focus:ring-2 focus:ring-amber-300 focus:ring-offset-2"
                        onClick={() => setSelectedApply({ ...item })}
                      >
                        <FaEdit className="text-sm" />
                        Update
                      </button>
                      
                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="inline-flex cursor-pointer items-center gap-2 px-3 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-600 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 border-0 focus:ring-2 focus:ring-red-300 focus:ring-offset-2"
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
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{applies.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Applications</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {applies.filter(a => new Date(a.marathonStartDate) > new Date()).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Upcoming Marathons</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {applies.filter(a => new Date(a.marathonStartDate) <= new Date()).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Completed Marathons</div>
          </div>
        </div>
      </div>

      {/* Update Modal */}
      {selectedApply && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-md shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <FaEdit className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Update Application</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Marathon Title
                </label>
                <input
                  type="text"
                  value={selectedApply.marathonTitle}
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Start Date
                </label>
                <input
                  type="text"
                  value={selectedApply.marathonStartDate}
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contact Number
                </label>
                <input
                  type="text"
                  value={selectedApply.contactNumber}
                  onChange={(e) =>
                    setSelectedApply({ ...selectedApply, contactNumber: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter contact number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  value={selectedApply.additionalInfo}
                  onChange={(e) =>
                    setSelectedApply({ ...selectedApply, additionalInfo: e.target.value })
                  }
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Enter additional information"
                />
              </div>
              
              <div className="flex justify-end gap-3 pt-4">
                <button
                  className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  onClick={() => setSelectedApply(null)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  onClick={handleUpdate}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyApply;
