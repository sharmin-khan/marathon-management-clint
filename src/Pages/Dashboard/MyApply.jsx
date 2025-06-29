import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const MyApply = () => {
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
        ? `http://localhost:5000/myApply?userEmail=${user.email}&search=${encodeURIComponent(search)}`
        : `http://localhost:5000/myApply?userEmail=${user.email}`;
      
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
        fetch(`http://localhost:5000/deleteApply/${id}`, {
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
    fetch(`http://localhost:5000/updateApply/${selectedApply._id}`, {
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

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Helmet>
        <title>My Apply List | MarathonPro</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-6 text-blue-600">My Applications</h2>
      
      {/* Search Bar */}
      <div className="mb-6">
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
              className="input input-bordered w-full pl-10"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          {searchTerm && (
            <p className="text-sm text-gray-500 mt-1">
              Found {filteredApplies.length} result{filteredApplies.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full text-sm">
          <thead className="bg-gray-100 dark:text-gray-800">
            <tr>
              <th>#</th>
              <th>Marathon</th>
              <th>Start Date</th>
              <th>Contact</th>
              <th>Info</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplies.map((item, idx) => (
              <tr key={item._id}>
                <td>{idx + 1}</td>
                <td>{item.marathonTitle}</td>
                <td>{item.marathonStartDate}</td>
                <td>{item.contactNumber}</td>
                <td>{item.additionalInfo}</td>
                <td className="flex gap-2">
                  <button
                    className="btn btn-xs bg-yellow-500 text-white"
                    onClick={() => setSelectedApply({ ...item })}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-xs bg-red-500 text-white"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {selectedApply && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Update Registration</h3>
            <div className="space-y-2">
              <input
                type="text"
                value={selectedApply.marathonTitle}
                disabled
                className="w-full input input-bordered"
              />
              <input
                type="text"
                value={selectedApply.marathonStartDate}
                disabled
                className="w-full input input-bordered"
              />
              <input
                type="text"
                value={selectedApply.contactNumber}
                onChange={(e) =>
                  setSelectedApply({ ...selectedApply, contactNumber: e.target.value })
                }
                className="w-full input input-bordered"
              />
              <textarea
                value={selectedApply.additionalInfo}
                onChange={(e) =>
                  setSelectedApply({ ...selectedApply, additionalInfo: e.target.value })
                }
                className="w-full textarea textarea-bordered"
              />
              <div className="flex justify-end gap-2">
                <button
                  className="btn btn-sm bg-blue-500 text-white"
                  onClick={handleUpdate}
                >
                  Save
                </button>
                <button
                  className="btn btn-sm bg-gray-400 text-white"
                  onClick={() => setSelectedApply(null)}
                >
                  Cancel
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
