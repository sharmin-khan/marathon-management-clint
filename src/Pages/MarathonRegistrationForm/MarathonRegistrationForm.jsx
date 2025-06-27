import React, { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { AuthContext } from "../../Context/AuthContext";


const MarathonRegistrationForm = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const { marathonTitle, marathonStartDate, userEmail } = location.state;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
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
      email: userEmail,
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

      // 3. Navigate to Dashboard
      navigate("/dashboard/my-apply");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg rounded bg-white dark:bg-gray-800">
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
          name="contact"
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
