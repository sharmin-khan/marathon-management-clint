import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Lottie from "lottie-react";
import registerLottie from "../../assets/image/register.json";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash, FaCamera } from "react-icons/fa";

const Register = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } , []);
  
  const { createUser, googleLogin } = use(AuthContext);
  const [showPasswordRules, setShowPasswordRules] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // Remove selected image
  const removeImage = () => {
    setSelectedImage(null);
    // Reset file input
    const fileInput = document.getElementById('photo-upload');
    if (fileInput) fileInput.value = '';
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    
    // Check if image is selected
    if (!selectedImage) {
      Swal.fire({
        icon: "error",
        title: "Photo Required",
        text: "Please select a profile photo",
      });
      return;
    }

    console.log(name, email, selectedImage, password);

    // Password Validation
    const errors = [];
    if (password.length < 6) errors.push("at least 6 characters");
    if (!/[A-Z]/.test(password)) errors.push("an uppercase letter");
    if (!/[a-z]/.test(password)) errors.push("a lowercase letter");
    if (!/\d/.test(password)) errors.push("a number");

    if (errors.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must contain: " + errors.join(", "),
      });
      return;
    }

    //Create User
    createUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Google register
  const handleGoogleRegister = () => {
    googleLogin()
      .then((result) => {
        console.log("Google Login Successful:", result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Google register Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log("Google Login Error:", err);
      });
  };

  return (
    <div className="min-h-screen pt-28 flex flex-col md:flex-row items-center justify-center gap-8 py-8 bg-gray-100 dark:bg-gray-900 px-4">
      <Helmet>
        <title>Register | MarathonPro</title>
      </Helmet>
      {/* Left: Register Form */}
      <div className="lg:ml-32">
        <form
          onSubmit={handleRegister}
          className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
            Register Now
          </h2>

          <label className="label mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full mb-4"
            required
          />

          <label className="label mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full mb-4"
            required
          />

          {/* Photo Upload Section */}
          <label className="label mb-1">Photo</label>
          <div className="mb-4">
            {/* File Upload Input */}
            <div className="relative">
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                required
              />
              <label
                htmlFor="photo-upload"
                className="input input-bordered w-full cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <FaCamera className="text-blue-500" />
                <span className="text-gray-600 dark:text-gray-300">
                  {selectedImage ? selectedImage.name : "Choose Photo"}
                </span>
              </label>
              
              {/* Remove Button - Inside the field on the right */}
              {selectedImage && (
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                >
                  ×
                </button>
              )}
            </div>
            
            {/* Upload Instructions */}
            <p className="text-xs text-gray-500 mt-2 text-center">
              Supports: JPG, PNG
            </p>
          </div>

          <label className="label mb-1">Password</label>
          <div className="relative mb-1">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full pr-12"
              onFocus={() => setShowPasswordRules(true)}
              onBlur={() => setShowPasswordRules(false)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors z-10 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          
          {showPasswordRules && (
            <div className="text-sm text-red-400 mb-3">
              <p>Length must be at least 6 characters</p>
              <p>At least one number</p>
              <p>At least one lowercase letter</p>
              <p>At least one uppercase letter</p>
            </div>
          )}

          <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-sm cursor-pointer text-white font-semibold text-lg mt-3 w-full">
            Register
          </button>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleRegister}
            className="btn bg-white text-black border-[#e5e5e5] w-full mb-3"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </g>
            </svg>
            Register with Google
          </button>

          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* Right: Lottie Animation */}
      <div className="hidden lg:block w-1/2">
        <Lottie
          style={{ width: "520px" }}
          animationData={registerLottie}
          loop={true}
        />
      </div>
    </div>
  );
};

export default Register;
