import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import Lottie from "lottie-react";
import loginLottie from "../../assets/image/login.json";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } , []);  
  const { logInUser, googleLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //Login User
    logInUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Please try again later.",
        });
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
          title: "Google Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log("Google Login Error:", err);
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: "Please try again later.",
        });
      });
  };

  return (
    <div className="min-h-screen pt-28 flex flex-col lg:flex-row items-center justify-center py-8 bg-gray-100 dark:bg-gray-900 px-4">
      <Helmet>
        <title>Login | MarathonPro</title>
      </Helmet>
      {/* Left: Login Form */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <form
          onSubmit={handleLogIn}
          className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
            Login Now
          </h2>

          <label className="label mb-1 ">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full mb-4"
          />

          <label className="label mb-1">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors z-10 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-sm cursor-pointer text-white font-semibold text-lg mt-3 w-full">
            Login
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
            Login with Google
          </button>

          <p className="text-sm text-center">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-500 underline">
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Right: Lottie Animation */}
      <div className="hidden lg:block w-1/2">
        <Lottie
          animationData={loginLottie}
          loop={true}
          className="max-w-md w-full h-[400px]"
        />
      </div>
    </div>
  );
};

export default Login;
