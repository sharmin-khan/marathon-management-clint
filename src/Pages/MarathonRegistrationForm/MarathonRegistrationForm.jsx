import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";


const MarathonRegistrationForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const { marathonTitle, marathonStartDate, userEmail } = location.state;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationData = {
      marathonId: id,
      userEmail: userEmail,
      marathonTitle,
      marathonStartDate,
      ...formData,
    };

    // 1. POST Registration Data
    const res = await fetch("http://localhost:5000/register-marathon", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registrationData),
    });

    const result = await res.json();

    if (result.success) {
      // 2. Update registration count
      await fetch(`http://localhost:5000/update-count/${id}`, {
        method: "PATCH",
      });
       Swal.fire({
                position: "center",
                icon: "success",
                title: "Form Submitted Successfully",
                showConfirmButton: false,
                timer: 1500,
              });

      // 3. Navigate to Dashboard
      navigate("/dashboard/myApply");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg rounded bg-white dark:bg-gray-800">
      <Helmet>
      <title>Marathon Registration Form | MarathonPro</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Register for {marathonTitle}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Read-only fields */}
        <input type="email" value={userEmail} readOnly className="input input-bordered w-full" />
        <input type="text" value={marathonTitle} readOnly className="input input-bordered w-full" />
        <input type="text" value={marathonStartDate} readOnly className="input input-bordered w-full" />

        {/* User input fields */}
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          className="input input-bordered w-full"
          required
          onChange={handleChange}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          className="input input-bordered w-full"
          required
          onChange={handleChange}
        />
        <input
          name="contactNumber"
          type="text"
          placeholder="Contact Number"
          className="input input-bordered w-full"
          required
          onChange={handleChange}
        />
        <textarea
          name="additionalInfo"
          placeholder="Additional Info"
          className="textarea textarea-bordered w-full"
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="btn bg-blue-600 text-white hover:bg-blue-700 w-full"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default MarathonRegistrationForm;
