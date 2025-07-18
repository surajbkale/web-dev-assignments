import React, { useState } from "react";

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    petName: "",
    petType: "Dog",
    breed: "",
    adopterName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 p-6 rounded shadow-md w-80 flex flex-col gap-4"
    >
      <input
        name="petName"
        value={formData.petName}
        onChange={handleChange}
        placeholder="Pet Name"
        required
        className="p-2 border rounded"
      />
      <select
        name="petType"
        value={formData.petType}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Rabbit">Rabbit</option>
        <option value="Other">Other</option>
      </select>
      <input
        name="breed"
        value={formData.breed}
        onChange={handleChange}
        placeholder="Breed"
        required
        className="p-2 border rounded"
      />
      <input
        name="adopterName"
        value={formData.adopterName}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="p-2 border rounded"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="p-2 border rounded"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-green-800 text-white py-2 rounded hover:bg-green-700"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
