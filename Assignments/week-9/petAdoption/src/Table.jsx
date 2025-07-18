import React from "react";

function Table({ pets, goBack }) {
  return (
    <div className="bg-white/80 p-6 rounded shadow-md w-full max-w-2xl">
      <table className="w-full border-collapse mb-4">
        <thead>
          <tr className="bg-green-900 text-white">
            <th className="border px-2 py-1">Pet Name</th>
            <th className="border px-2 py-1">Pet Type</th>
            <th className="border px-2 py-1">Breed</th>
            <th className="border px-2 py-1">Adopter Name</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Phone</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet, index) => (
            <tr key={index} className="text-center">
              <td className="border px-2 py-1">{pet.petName}</td>
              <td className="border px-2 py-1">{pet.petType}</td>
              <td className="border px-2 py-1">{pet.breed}</td>
              <td className="border px-2 py-1">{pet.adopterName}</td>
              <td className="border px-2 py-1">{pet.email}</td>
              <td className="border px-2 py-1">{pet.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={goBack}
        className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Go Back
      </button>
    </div>
  );
}

export default Table;
