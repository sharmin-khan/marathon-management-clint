import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end w-11/12 mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 px-4 py-2 mb-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        <FaArrowLeft />
        Back
      </button>
    </div>
  );
};

export default BackButton;
