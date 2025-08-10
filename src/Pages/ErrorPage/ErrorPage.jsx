import React from "react";
import { Link } from "react-router";
import errorpage from "../../assets/image/error.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center text-center mx-auto flex-col ">
        <div className="flex justify-center items-center">
          <Lottie animationData={errorpage} loop={true} className="w-[20%]" />
        </div>
        <h1 className="text-4xl font-extrabold text-red-500">
          404-Page Not Found
        </h1>
        <p className="text-xl font-semibold">
          Oops! The Page you're looking for doesn't exist
        </p>
        <div>
          <Link to="/">
            <button className="btn mt-5 bg-blue-600 hover:bg-blue-700 rounded-sm p-3 text-white font-bold ">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
