import React, { useState } from "react";

const PetAdoptionForm = () => {
  const [formData, setFormData] = useState([]);
  const [values, setValues] = useState({
    petName: "",
    petType: "Dog",
    breed: "",
    adopterName: "",
    email: "",
    phone: "",
  });

  const [showTable, setShowTable] = useState(false);
  const { petName, petType, breed, adopterName, email, phone } = values;
  console.log(petName, petType, breed, adopterName, email, phone);

  const [errors, setErrors] = useState({
    petName: "",
    petType: "",
    breed: "",
    adopterName: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    let errorsCopy = { ...errors };
    const errorR = validation(name, value, errorsCopy);
    setErrors(errorR);
  };

  const handleSubmit = () => {
    console.log(
      `Pet Name: ${petName} 
      Pet Type: ${petType} 
      Breed: ${breed} 
      Adopter Name: ${adopterName} 
      Email: ${email} 
      Phone: ${phone}`
    );

    if (!petName || !breed || !adopterName || !email || !phone) {
      alert("Please fill out all fields");
      return;
    }

    const hasErrors = Object.values(errors).some((val) => val);
    if (hasErrors) {
      alert("Please fill out all fields");
    }

    const data = { petName, petType, breed, adopterName, email, phone };
    setFormData((prevData) => [...prevData, data]);
    setShowTable(true);
    setValues({
      petName: "",
      petType: "Dog",
      breed: "",
      adopterName: "",
      email: "",
      phone: "",
    });
    setErrors({
      petName: "",
      petType: "",
      breed: "",
      adopterName: "",
      email: "",
      phone: "",
    });
  };

  

  return <div>PetAdoptionForm</div>;
};

export default PetAdoptionForm;
