import React from "react";

const ManageUserCard = ({ users }) => {
  return (
    <div className="container mx-auto my-5">
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-600">
          {/* Table Header */}
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3 border border-gray-600 text-left">Name</th>
              <th className="p-3 border border-gray-600 text-left">Email</th> {/* Swapped */}
              <th className="p-3 border border-gray-600 text-left">Role</th> {/* Swapped */}
              <th className="p-3 border border-gray-600 text-left">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={index}
                  className={`border ${
                    index % 2 === 1 ? "bg-blue-100" : "bg-white"
                  } hover:bg-green-300 transition-all`} // Fixing the condition for alternating rows
                >
                  <td className="p-3 border">{user.name}</td>
                  <td className="p-3 border">{user.email}</td> {/* Swapped */}
                  <td className="p-3 border">{user.role}</td> {/* Swapped */}
                  <td className="p-3 border">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-3 text-center border text-gray-500">
                  No users available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUserCard;
