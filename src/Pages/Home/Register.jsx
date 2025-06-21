import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import Lottie from "lottie-react";
import registerLottie from "../../assets/image/register.json";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    //Create User
    createUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="min-h-screen  flex flex-col md:flex-row items-center justify-center gap-8 py-8 bg-gray-100 dark:bg-gray-900 px-4">
      {/* Left: Register Form */}
      <div className="lg:ml-32">
        <form
          onSubmit={handleRegister}
          className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
            Register Now
          </h2>

          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full mb-4"
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full mb-4"
          />

          <label className="label">Photo URL</label>
          <input
            type="url"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered w-full mb-4"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full mb-4"
          />

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>

          <div className="divider">OR</div>

          <button className="btn bg-white text-black border-[#e5e5e5] w-full mb-3">
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
