import { FaRunning, FaHeart, FaMedal, FaUsers } from "react-icons/fa";

const WhyJoinMarathon = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6">
        Why Join a Marathon?
      </h2>
      <p className="text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-10">
        Participating in marathons isn't just about running — it’s about growth,
        achievement, and community. Here’s why you should join:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Benefit 1 */}
        <div className="border-t-4 border-blue-500 bg-white dark:bg-gray-800 p-6 rounded shadow text-center">
          <FaRunning className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Improve Fitness
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Regular training boosts stamina, strength, and health.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="border-t-4 border-blue-500 bg-white dark:bg-gray-800 p-6 rounded shadow text-center">
          <FaHeart className="text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Mental Wellness
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Running reduces stress and improves mood.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className=" border-t-4 border-blue-500 bg-white dark:bg-gray-800 p-6 rounded shadow text-center">
          <FaMedal className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Earn Medals
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Receive medals, certificates, and achievement badges.
          </p>
        </div>

        {/* Benefit 4 */}
        <div className="border-t-4 border-blue-500  bg-white dark:bg-gray-800 p-6 rounded shadow text-center">
          <FaUsers className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Be Part of a Community
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Connect with runners from all over the country.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinMarathon;
