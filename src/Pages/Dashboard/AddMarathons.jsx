import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddMarathons = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    runningDistance: "10k",
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
      registrationStart: formData.registrationStart.toISOString(),
      registrationEnd: formData.registrationEnd.toISOString(),
      marathonStartDate: formData.marathonStartDate.toISOString(),
      createdAt: new Date().toISOString(),
      registrationCount: 0,
    };

    try {
      const response = await fetch("http://localhost:5000/add-marathon", {
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
          showConfirmButton: false,
          timer: 1500,
        });

        // Reset form
        setFormData({
          title: "",
          location: "",
          runningDistance: "10k",
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
        title: "Error!",
        text: "Failed to add marathon. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Helmet>
        <title>Add Marathon | MarathonPro</title>
      </Helmet>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          Add New Marathon
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Marathon Title */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Marathon Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Running Distance */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Running Distance
              </label>
              <select
                name="runningDistance"
                value={formData.runningDistance}
                onChange={handleChange}
                className="select select-bordered w-full"
                required
              >
                <option value="3k">3k</option>
                <option value="10k">10k</option>
                <option value="25k">25k</option>
                <option value="42k">42k (Full Marathon)</option>
              </select>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Marathon Image URL
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Registration Start Date */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Registration Start Date
              </label>
              <DatePicker
                selected={formData.registrationStart}
                onChange={(date) => handleDateChange(date, "registrationStart")}
                className="input input-bordered w-full"
                placeholderText="Select start date"
                dateFormat="MMMM d, yyyy"
                minDate={new Date()}
              />
            </div>

            {/* Registration End Date */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Registration End Date
              </label>
              <DatePicker
                selected={formData.registrationEnd}
                onChange={(date) => handleDateChange(date, "registrationEnd")}
                className="input input-bordered w-full"
                placeholderText="Select end date"
                dateFormat="MMMM d, yyyy"
                minDate={formData.registrationStart || new Date()}
              />
            </div>

            {/* Marathon Start Date */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Marathon Start Date
              </label>
              <DatePicker
                selected={formData.marathonStartDate}
                onChange={(date) => handleDateChange(date, "marathonStartDate")}
                className="input input-bordered w-full"
                placeholderText="Select marathon date"
                dateFormat="MMMM d, yyyy"
                minDate={formData.registrationEnd || new Date()}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary px-8"
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Add Marathon"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMarathons;
