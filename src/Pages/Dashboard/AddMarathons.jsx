import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaPlus, FaMapMarkerAlt, FaRunning, FaCalendarAlt, FaImage, FaFileAlt } from "react-icons/fa";

const AddMarathons = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    runningDistance: "Choose Option",
    description: "",
    image: "",
    registrationStart: null,
    registrationEnd: null,
    marathonStartDate: null,
    registrationCount: 0,
    createdAt: new Date(),
    userEmail: user?.email || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Format dates for backend
    const formattedData = {
      ...formData,
      registrationStart: formData.registrationStart?.toLocaleDateString("en-CA"),
      registrationEnd: formData.registrationEnd?.toLocaleDateString("en-CA"),
      marathonStartDate: formData.marathonStartDate?.toLocaleDateString("en-CA"),
      createdAt: new Date().toISOString(),
      registrationCount: 0,
    };

    try {
      const response = await fetch("https://marathon-management-server-seven.vercel.app/add-marathon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Marathon Added Successfully!",
          text: "Your marathon event has been created.",
          showConfirmButton: false,
          timer: 2000,
          background: "#f8fafc",
          color: "#1e293b",
        });

        // Reset form
        setFormData({
          title: "",
          location: "",
          runningDistance: "Choose Option",
          description: "",
          image: "",
          registrationStart: null,
          registrationEnd: null,
          marathonStartDate: null,
          registrationCount: 0,
          createdAt: new Date(),
          userEmail: user?.email || "",
        });
      }
    } catch (error) {
      console.error("Error adding marathon:", error);
      Swal.fire({
        icon: "error",
        title: "Oops! Something went wrong",
        text: "Failed to add marathon. Please check your connection and try again.",
        confirmButtonColor: "#3b82f6",
        background: "#f8fafc",
        color: "#1e293b",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Add Marathon | MarathonPro</title>
      </Helmet>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center gap-4 mb-2">
          <FaPlus className="text-3xl" />
          <h1 className="text-3xl font-bold">Add New Marathon</h1>
        </div>
        <p className="text-blue-100 dark:text-blue-200 text-lg">
          Create and organize your marathon event with all the details
        </p>
        <div className="mt-4 flex items-center gap-6">
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <span className="text-sm text-blue-100">Event Type</span>
            <div className="text-2xl font-bold">Marathon</div>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <span className="text-sm text-blue-100">Status</span>
            <div className="text-2xl font-bold">Draft</div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Basic Information Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                <FaFileAlt className="text-white text-sm" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Basic Information
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Marathon Title */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Marathon Title *
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pl-12 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-blue-300"
                    placeholder="Enter marathon title"
                    required
                  />
                  <FaFileAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Location *
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pl-12 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-blue-300"
                    placeholder="City, Country"
                    required
                  />
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                </div>
              </div>

              {/* Running Distance */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Running Distance *
                </label>
                <div className="relative group">
                  <select
                    name="runningDistance"
                    value={formData.runningDistance}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pl-12 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none group-hover:border-blue-300"
                    required
                  >
                    <option disabled value="Choose Option">
                      -- Choose Distance --
                    </option>
                    <option value="3k">3k (Fun Run)</option>
                    <option value="10k">10k (Mini Marathon)</option>
                    <option value="25k">25k (Half Marathon)</option>
                    <option value="42k">42k (Full Marathon)</option>
                  </select>
                  <FaRunning className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Marathon Image URL *
                </label>
                <div className="relative group">
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pl-12 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-blue-300"
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                  <FaImage className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Date Selection Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                <FaCalendarAlt className="text-white text-sm" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Important Dates
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Registration Start Date */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Registration Start *
                </label>
                <DatePicker
                  selected={formData.registrationStart}
                  onChange={(date) => handleDateChange(date, "registrationStart")}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 hover:border-emerald-300"
                  placeholderText="Select start date"
                  dateFormat="MMM dd, yyyy"
                  minDate={new Date()}
                />
              </div>

              {/* Registration End Date */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Registration End *
                </label>
                <DatePicker
                  selected={formData.registrationEnd}
                  onChange={(date) => handleDateChange(date, "registrationEnd")}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 hover:border-emerald-300"
                  placeholderText="Select end date"
                  dateFormat="MMM dd, yyyy"
                  minDate={formData.registrationStart || new Date()}
                />
              </div>

              {/* Marathon Start Date */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Marathon Date *
                </label>
                <DatePicker
                  selected={formData.marathonStartDate}
                  onChange={(date) => handleDateChange(date, "marathonStartDate")}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 hover:border-emerald-300"
                  placeholderText="Select marathon date"
                  dateFormat="MMM dd, yyyy"
                  minDate={formData.registrationEnd || new Date()}
                />
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-md">
                <FaFileAlt className="text-white text-sm" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Event Description
              </h3>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none hover:border-purple-300"
                placeholder="Describe your marathon event, route details, prizes, and any other important information..."
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button Section */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-600 flex justify-end">
          <button
                type="submit"
                disabled={loading}
                className="px-10 py-4 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-3 min-w-[200px] justify-center"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Adding Marathon...</span>
                  </>
                ) : (
                  <>
                    <span>Add Marathon</span>
                  </>
                )}
              </button>
          
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMarathons;
