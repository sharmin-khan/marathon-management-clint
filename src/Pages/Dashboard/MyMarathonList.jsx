import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyMarathonList = () => {
  const { user } = useContext(AuthContext);
  const [myMarathons, setMyMarathons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://marathon-management-server-seven.vercel.app/myMarathons?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyMarathons(data);
          setLoading(false);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://marathon-management-server-seven.vercel.app/marathon/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your marathon has been deleted.",
                "success"
              );
              setMyMarathons(myMarathons.filter((m) => m._id !== id));
            }
          });
      }
    });
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>My Marathons List | MarathonPro</title>
      </Helmet>

      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
        My Marathons List
      </h2>
      <table className="table w-full border">
        <thead className="bg-gray-100 dark:text-gray-800">
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Registration Dates</th>
            <th>Distance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myMarathons.map((marathon) => (
            <tr key={marathon._id}>
              <td>{marathon.title}</td>
              <td>{marathon.location}</td>
              <td>
                {marathon.registrationStart} - {marathon.registrationEnd}
              </td>
              <td>{marathon.runningDistance}</td>
              <td className="space-x-2">
                {/* Update modal button */}
                <button
                  className="btn btn-sm bg-yellow-400 hover:bg-yellow-500 text-white"
                  onClick={() => console.log("Open update modal")}
                >
                  Update
                </button>
                {/* Delete button */}
                <button
                  onClick={() => handleDelete(marathon._id)}
                  className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyMarathonList;
