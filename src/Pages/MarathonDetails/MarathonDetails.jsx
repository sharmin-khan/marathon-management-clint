import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { Helmet } from "react-helmet-async";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const MarathonDetails = () => {
  const { id } = useParams();
  const [marathon, setMarathon] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/marathon/${id}`)
      .then((res) => res.json())
      .then((data) => setMarathon(data));
  }, [id]);

  if (!marathon) return <div className="text-center py-10">Loading...</div>;

  const {
    title,
    image,
    location,
    registrationStart,
    registrationEnd,
    details,
    registrationCount,
  } = marathon;

  const isRegistrationOpen =
    new Date() >= new Date(registrationStart) &&
    new Date() <= new Date(registrationEnd);

  const handleRegister = () => {
    navigate(`/register/${id}`, {
      state: {
        marathonTitle: title,
        marathonStartDate: registrationStart,
        userEmail: user?.email || "",
      },
    });
  };

  const marathonStartTime = new Date(registrationEnd).getTime();
  const now = Date.now();
  const rawRemainingSeconds = Math.floor((marathonStartTime - now) / 1000);
  const remainingSeconds = rawRemainingSeconds > 0 ? rawRemainingSeconds : 0;

  const days = Math.floor(remainingSeconds / 86400);
  const hours = Math.floor((remainingSeconds % 86400) / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Helmet>
        <title>Marathon Details | MarathonPro</title>
      </Helmet>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        {remainingSeconds > 0 && (
          <div className="flex justify-center gap-6 my-6 flex-wrap">
            <CountdownCircleTimer
              isPlaying
              duration={86400}
              initialRemainingTime={remainingSeconds % 86400}
              colors={["#004777"]}
              strokeWidth={8}
              size={90}
              onComplete={() => ({ shouldRepeat: true })}
            >
              {() => (
                <div className="text-center text-blue-600">
                  <div className="font-bold text-xl">{days}</div>
                  <div className="text-sm">Days</div>
                </div>
              )}
            </CountdownCircleTimer>

            <CountdownCircleTimer
              isPlaying
              duration={3600}
              initialRemainingTime={remainingSeconds % 3600}
              colors={["#F7B801"]}
              strokeWidth={8}
              size={90}
              onComplete={() => ({ shouldRepeat: true })}
            >
              {() => (
                <div className="text-center text-yellow-600">
                  <div className="font-bold text-xl">{hours}</div>
                  <div className="text-sm">Hours</div>
                </div>
              )}
            </CountdownCircleTimer>

            <CountdownCircleTimer
              isPlaying
              duration={60}
              initialRemainingTime={remainingSeconds % 60}
              colors={["#A30000"]}
              strokeWidth={8}
              size={90}
              onComplete={() => ({ shouldRepeat: true })}
            >
              {() => (
                <div className="text-center text-red-600">
                  <div className="font-bold text-xl">{minutes}</div>
                  <div className="text-sm">Minutes</div>
                </div>
              )}
            </CountdownCircleTimer>

            <CountdownCircleTimer
              isPlaying
              duration={60}
              initialRemainingTime={seconds}
              colors={["#004777"]}
              strokeWidth={8}
              size={90}
              onComplete={() => ({ shouldRepeat: true })}
            >
              {() => (
                <div className="text-center text-blue-600">
                  <div className="font-bold text-xl">{seconds}</div>
                  <div className="text-sm">Seconds</div>
                </div>
              )}
            </CountdownCircleTimer>
          </div>
        )}
        <div className="p-6 space-y-4">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            {title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-md lg:text-lg">
            <span className="font-medium">Location : {location}</span>
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-md lg:text-lg">
            <span className="font-medium">Registration : </span>{" "}
            {registrationStart} – {registrationEnd}
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-md lg:text-lg">
            <span className="font-medium">Total Registered:</span>{" "}
            {registrationCount || 0}
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {details}
          </p>

          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 rounded text-blue-600 font-semibold border border-blue-600 hover:bg-blue-50 transition cursor-pointer"
            >
              ← Back to Home
            </button>

            <button
              onClick={handleRegister}
              disabled={!isRegistrationOpen}
              className={`px-6 py-2 rounded text-white font-semibold transition ${
                isRegistrationOpen
                  ? "bg-blue-600 hover:bg-white hover:text-blue-600 border border-blue-600 hover:border hover:border-blue-600 cursor-pointer"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {isRegistrationOpen ? "Register Now" : "Registration Closed"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathonDetails;
